import { connectGoogleSheet } from "@/lib/nadec-google";

export async function GET(request: Request) {
  const products = await connectGoogleSheet();

  return Response.json({ products }) as any;
}
