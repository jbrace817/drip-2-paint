import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const filePath = path.join(process.cwd(), "content/widgets/cta.json");

  try {
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(fileContents);
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to load CTA data" },
      { status: 500 },
    );
  }
}
