export type MediaFormat = "reel" | "video" | "static" | "mixed";

export type GalleryItem = {
  file: string;             // filename in /public/works/
  ratio: number;            // real width / height
  subsectionTitle?: string; // shown as a header before this item
  caption?: string;         // shown beside this item
};

export type CaseStudy = {
  id: string;
  brand: string;
  period: string;
  role: string;
  paragraph: string;
  tags: [string, string, string];
  media: MediaFormat;
  galleryCount: number;
  cover?: string;           // filename in /public/works/ used as card thumbnail
  lightboxDescription?: string;
  gallery?: GalleryItem[];
};

export type Dictionary = {
  meta: { title: string; description: string };
  nav: { about: string; portfolio: string; contact: string };
  hero: {
    label: string;
    heroBgWords: string[];
    title: string;
    titleLine1: string;
    titleLine2: string;
    subhead: string;
    cta: string;
  };
  about: {
    heading: string;
    intro: string[];
    educationLabel: string;
    education: string[];
    expertiseLabel: string;
    expertise: { group: string; items: string[] }[];
    photoCaption: string;
  };
  portfolio: {
    heading: string;
    intro: string;
    cases: CaseStudy[];
    roleLabel: string;
    viewWorksLabel: string;
  };
  principlesLabel: string;
  principles: string[];
  contact: {
    headingLine1: string;
    headingLine2: string;
    subhead: string;
    emailLabel: string;
    email: string;
    secondaryLabel: string;
  };
  footer: { rights: string };
};
