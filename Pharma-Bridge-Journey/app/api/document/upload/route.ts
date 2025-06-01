import { NextRequest } from "next/server";
import cloudinary from "@/lib/cloudinary"; // Adjust the import path if needed
import { writeFile } from "fs/promises";
import { tmpdir } from "os";
import path from "path";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file || typeof file === "string") {
    return new Response(JSON.stringify({ error: "No file uploaded" }), { status: 400 });
  }

  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Save the file temporarily
    const tempFilePath = path.join(tmpdir(), file.name);
    await writeFile(tempFilePath, buffer);

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(tempFilePath, {
      folder: "pharmabridge/profile_images",
    });

    return new Response(JSON.stringify({ url: result.secure_url }), { status: 200 });
  } catch (error) {
    console.error("Upload error:", error);
    return new Response(JSON.stringify({ error: "Cloudinary upload failed" }), { status: 500 });
  }
}
