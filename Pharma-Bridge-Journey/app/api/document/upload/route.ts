import { NextApiRequest, NextApiResponse } from "next";
import { v2 as cloudinary } from "cloudinary";
import formidable, { File } from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const form = formidable({ multiples: false });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: "Error parsing file" });
    }

    const fileField = files.file;
    const file = Array.isArray(fileField) ? fileField[0] : fileField;

    if (!file) {
      return res.status(400).json({ error: "No valid file uploaded" });
    }

    try {
      const result = await cloudinary.uploader.upload((file as File).filepath, {
        folder: "pharmabridge/profile_images",
      });

      return res.status(200).json({ url: result.secure_url });
    } catch (uploadError) {
      console.error("Upload error:", uploadError);
      return res.status(500).json({ error: "Cloudinary upload failed" });
    }
  });
}
