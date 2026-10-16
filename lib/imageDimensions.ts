import "server-only";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

export interface ImageDimensions {
  width: number;
  height: number;
}

/**
 * Legge le dimensioni reali di un file in /public (es. "/gallery/in pineta/1.jpg").
 * - Tiene conto dell'orientamento EXIF (foto scattate in verticale).
 * - Restituisce `null` se il file non esiste o non è leggibile, così il chiamante
 *   può scartare il riquadro invece di mostrare un'immagine rotta.
 */
export async function getPublicImageDimensions(src: string): Promise<ImageDimensions | null> {
  const filePath = path.join(process.cwd(), "public", ...src.split("/").filter(Boolean));
  if (!existsSync(filePath)) return null;

  try {
    const { width, height, orientation } = await sharp(filePath).metadata();
    if (!width || !height) return null;

    // Orientamenti EXIF 5–8 ruotano l'immagine di 90°: larghezza e altezza si scambiano
    const isRotated = orientation !== undefined && orientation >= 5;
    return isRotated ? { width: height, height: width } : { width, height };
  } catch {
    return null;
  }
}
