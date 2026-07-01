import type { Locale } from "@/lib/locale";
import { uk } from "./uk";
import { en } from "./en";
import type { Dictionary } from "./types";

export const dictionaries: Record<Locale, Dictionary> = { uk, en };
export type {
  Dictionary,
  CaseStudy,
  MediaFormat,
  GalleryItem,
} from "./types";
