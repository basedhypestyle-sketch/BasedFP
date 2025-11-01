import crypto from "crypto";
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Only POST allowed" });
  res.status(200).json({ status: "ok", message: "Mint endpoint placeholder." });
}