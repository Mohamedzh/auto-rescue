import { connectGoogleSheet } from "@/lib/nadec-google";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const products = await connectGoogleSheet();

  return NextResponse.json({ products });
}
