import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { enquirySchema, type EnquiryRecord } from "@/lib/enquiries";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = enquirySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: parsed.error.issues[0]?.message ?? "Invalid enquiry submission."
        },
        { status: 400 }
      );
    }

    const db = await getDb();
    const { name, email, phone, company, service, message } = parsed.data;

    const result = await db.run(
      `
        INSERT INTO enquiries (name, email, phone, company, service, message)
        VALUES (?, ?, ?, ?, ?, ?)
      `,
      name,
      email,
      phone || "",
      company || "",
      service,
      message
    );

    return NextResponse.json({
      success: true,
      id: result.lastID
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong while saving your enquiry."
      },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  const adminToken = process.env.ADMIN_DASHBOARD_TOKEN;
  const requestUrl = new URL(request.url);
  const suppliedToken = requestUrl.searchParams.get("token");

  if (!adminToken || suppliedToken !== adminToken) {
    return NextResponse.json(
      { success: false, error: "Unauthorized." },
      { status: 401 }
    );
  }

  const db = await getDb();
  const enquiries = await db.all<EnquiryRecord[]>(
    `
      SELECT id, name, email, phone, company, service, message, created_at
      FROM enquiries
      ORDER BY datetime(created_at) DESC
    `
  );

  return NextResponse.json({ success: true, enquiries });
}
