/** @type {import('next').NextConfig} */
const nextConfig = {
  // Solo per `next dev`: permette di aprire il sito da altri dispositivi della
  // rete locale (es. smartphone). In produzione viene ignorato.
  // Aggiungi altri IP separandoli con una virgola in ALLOWED_DEV_ORIGINS.
  allowedDevOrigins: (process.env.ALLOWED_DEV_ORIGINS ?? "192.168.1.99")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),

  images: {
    // AVIF prima di WebP: file più leggeri sui browser che lo supportano
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
