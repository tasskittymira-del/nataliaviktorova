import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Nataliia Viktorova - Senior AI Creator",
    description:
      "Senior AI Creator. I build AI production from scratch - from idea to final cut.",
  },
  nav: {
    about: "About",
    portfolio: "Portfolio",
    contact: "Contact",
  },
  hero: {
    label: "Senior AI Creator",
    heroBgWords: ["IDEA", "PROMPT", "GENERATE", "RESULT"],
    title: "NATALIIA VIKTOROVA",
    titleLine1: "NATALIIA",
    titleLine2: "VIKTOROVA",
    subhead:
      "I build AI production from scratch - from idea to final cut. A background in graphic and motion design gives that process a sense of form, rhythm, and natural movement.",
    cta: "View portfolio",
  },
  about: {
    heading: "About",
    intro: [
      "Hi, I'm Nataliia. I'm a Senior AI Creator.",
      "Right now my main focus is AI production, which I build from scratch through to the final cut: prompt engineering for the task at hand, static and video generation, voiceover, and editing. I always aim to work with the most advanced tools and approaches in the industry - the stack keeps shifting, and I make sure I'm working with whatever gives the best result right now. Behind me are hundreds of AI videos for a media project, entertainment content, branded campaigns, and ad clips for various clients. I don't stick to one style - I pick whatever works best for a specific idea or brand.",
      "Graphic design holds its own place in my work - building brand visual identity from scratch (color, typography, thinking through how a consumer interacts with a brand), running SMM for several brands, and ad campaigns across formats: Google Ads, billboards, metro ads, packaging design, QR codes with video mascots. Social videos for military units are a separate track of their own.",
      "Alongside graphic design sat motion design - the full editing cycle, character animation, environment animation, and VFX wherever a frame needed extra charm. That experience gives me a feel for correct timing and natural weight of movement in any shot.",
      "I've also managed a client project on my own and mentored junior designers on the team - showing new approaches, sharing tool updates.",
      "Outside of work I'm someone who likes having something to think through - building and exploration games are what I enjoy most. I'm drawn to whatever sits outside the usual, and that's probably what keeps me in AI - there's always something new, and I like being among the first to try it.",
    ],
    educationLabel: "Education",
    education: [
      "College of Art and Design at Kyiv National University of Technologies and Design - Animation Graphics",
      "Borys Grinchenko Kyiv University - Graphic Design",
    ],
    expertiseLabel: "Expertise",
    expertise: [
      {
        group: "AI production",
        items: [
          "prompt engineering",
          "AI static generation",
          "AI video generation",
          "AI voiceover",
          "editing",
        ],
      },
      {
        group: "Design & animation",
        items: [
          "branding & visual identity",
          "SMM content",
          "motion design",
          "character animation",
        ],
      },
    ],
    photoCaption: "Nataliia Viktorova",
  },
  portfolio: {
    heading: "Portfolio",
    intro:
      "Selection matters more than completeness: these are the cases that best show a specific skill in a specific context.",
    roleLabel: "My role",
    viewWorksLabel: "View works",
    cases: [
      {
        id: "graff-ai",
        brand: "GRAFF AI",
        period: "2024-2026",
        role: "AI generation of visuals and video for ad campaigns",
        paragraph:
          "Work delivered through New Strategies Group / Maibutne agency. Responsible for AI generation of visuals and video for the brand's advertising campaigns.",
        tags: ["AI generation", "New Strategies Group", "brand content"],
        media: "mixed",
        galleryCount: 9,
        cover: "graff-ai-сover.webp",
        lightboxDescription:
          "Work delivered through New Strategies Group / Maibutne agency. AI production demands more than technical tool skills - it demands a precise feel for the brand. I was responsible for making every AI-generated frame look native to GRAFF's visual identity. I worked closely with copywriters: ideas and briefs were usually shaped by the team, while I handled the visual execution - AI generation of statics and video in the brand's visual style, from reference selection to final render. Occasionally proposed my own ideas within the overall creative direction of the campaign. Co-developed the AI production pipeline with the team, adapting it to new tasks as tools and brand requirements evolved.",
        gallery: [
          { file: "graff-ai-1.mp4", ratio: 0.5625 },
          { file: "graff-ai-2.mp4", ratio: 0.5625 },
          { file: "graff-ai-3.mp4", ratio: 0.5625 },
          { file: "graff-ai-4.mp4", ratio: 0.5625 },
          { file: "graff-ai-5.mp4", ratio: 0.5625 },
          { file: "graff-ai-6.mp4", ratio: 0.5625 },
          { file: "graff-ai-7.mp4", ratio: 0.5625 },
          { file: "graff-ai-8.mp4", ratio: 0.5625 },
          { file: "graff-ai-9.mp4", ratio: 0.5625 },
        ],
      },
      {
        id: "military",
        brand: "Military cases",
        period: "2023-2024",
        role: "AI part of motivational videos",
        paragraph:
          "Work delivered through New Strategies Group / Maibutne agency. Developed everything from the idea to the full AI pipeline, deliberately choosing a painted style over realism to match the campaign's mood.",
        tags: ["painted animation", "AI pipeline", "New Strategies Group"],
        media: "video",
        galleryCount: 4,
        cover: "military-cover.webp",
        lightboxDescription:
          "Work delivered through New Strategies Group / Maibutne agency. The core task of this track was to make something engaging and alive that would encourage people to enlist - not another formal promo clip. Developed everything from idea to full AI pipeline, deliberately choosing a painted style over realism to match the campaign's mood - this approach avoided the heaviness and drama that often accompanies military themes, while still respecting the subject.",
        gallery: [
          {
            file: "military-1.mp4",
            ratio: 1.7778,
            subsectionTitle: "5th ASHB",
            caption:
              "Contract 20-24. Full original development - from idea and visual style to final execution. Delivered through New Strategies Group / Maibutne agency per client brief.",
          },
          {
            file: "military-2.mp4",
            ratio: 1.7778,
            subsectionTitle: "SBS",
            caption:
              "Work delivered through New Strategies Group / Maibutne agency. Responsible for AI generation and visual execution; ideas and brief developed in collaboration with copywriters.",
          },
          {
            file: "military-3.mp4",
            ratio: 1.7778,
            subsectionTitle: "SBS",
            caption:
              "Work delivered through New Strategies Group / Maibutne agency. Responsible for AI generation and visual execution; ideas and brief developed in collaboration with copywriters.",
          },
          {
            file: "military-4.mp4",
            ratio: 1.7778,
            subsectionTitle: "72nd Brigade",
            caption:
              "Work delivered through New Strategies Group / Maibutne agency. Responsible for AI generation and visual execution; ideas and brief developed in collaboration with copywriters.",
          },
        ],
      },
      {
        id: "virum",
        brand: "VIRUM",
        period: "through 2024",
        role: "AI video and internal automation",
        paragraph:
          "Videos made during work at Vairum Production (VIRUM). Built my own AI production pipeline for handling large-volume video output, tested and rolled out new tools and approaches - including an AI bot that automated part of the production stages.",
        tags: ["AI video", "automation", "AI bots"],
        media: "video",
        galleryCount: 9,
        cover: "virum-cover.webp",
        lightboxDescription:
          "Videos made during work at Vairum Production (VIRUM). Built my own AI production pipeline for handling large-volume video output - a task that demanded more than generating individual clips, but building a repeatable, scalable process. Tested and rolled out new tools and approaches as they appeared on the market, including building an AI bot that automated part of the production stages - letting the team process a much larger volume of content without losing quality.",
        gallery: [
          { file: "virum-1.mp4", ratio: 0.5625 },
          { file: "virum-2.mp4", ratio: 0.5625 },
          { file: "virum-3.mp4", ratio: 0.5625 },
          { file: "virum-4.mp4", ratio: 0.5625 },
          { file: "virum-5.mp4", ratio: 0.5625 },
          { file: "virum-6.mp4", ratio: 0.5625 },
          { file: "virum-7.mp4", ratio: 0.5625 },
          { file: "virum-8.mp4", ratio: 0.5625 },
          { file: "virum-9.mp4", ratio: 0.5625 },
        ],
      },
      {
        id: "entertainment",
        brand: "Entertainment reels",
        period: "2025-2026",
        role: "AI animal videos",
        paragraph:
          "A personal track for testing new tools and approaches in realistic AI generation - not tied to client production.",
        tags: ["AI video", "tool testing", "realism"],
        media: "reel",
        galleryCount: 12,
        cover: "entertainment-cover.webp",
        lightboxDescription:
          "A personal track for testing new tools and approaches in realistic AI generation - not tied to client production. It's a space where I can experiment freely: trying new generation models as soon as they launch, pushing the limits of realism in AI animal animation, refining the details of movement and lighting that later carry over into commercial projects. This is where the approaches that eventually become part of my working pipeline are born.",
        gallery: [
          { file: "entertainment-13.mp4", ratio: 1.7778 },
          { file: "entertainment-1.mp4", ratio: 0.5625 },
          { file: "entertainment-2.mp4", ratio: 0.5625 },
          { file: "entertainment-3.mp4", ratio: 0.5625 },
          { file: "entertainment-4.mp4", ratio: 0.5625 },
          { file: "entertainment-5.mp4", ratio: 0.5625 },
          { file: "entertainment-6.mp4", ratio: 0.5625 },
          { file: "entertainment-7.mp4", ratio: 0.5625 },
          { file: "entertainment-8.mp4", ratio: 0.5625 },
          { file: "entertainment-9.mp4", ratio: 0.5625 },
          { file: "entertainment-10.mp4", ratio: 0.5625 },
          { file: "entertainment-11.mp4", ratio: 0.5625 },
          { file: "entertainment-12.mp4", ratio: 0.5625 },
        ],
      },
      {
        id: "ads-series",
        brand: "Ad videos",
        period: "2024-2025",
        role: "AI generation for ad clips",
        paragraph:
          "Work delivered through New Strategies Group / Maibutne agency. AI generation of ad clips for various brands - from concept to final edit, in collaboration with copywriters.",
        tags: ["AI generation", "New Strategies Group", "ad clips"],
        media: "video",
        galleryCount: 6,
        cover: "ads-series-cover.webp",
        gallery: [
          {
            file: "ads-series-1.mp4",
            ratio: 1.7778,
            subsectionTitle: "MEGOGO Festival - subtitles",
            caption:
              "The agency director created an AI clip for the festival and asked me to make the subtitles interesting. I came up with a concept of styled subtitles with an AI-generated background - essentially a mini-prequel unfolding parallel to the text. The subtitle concept, style, and execution are entirely my idea and work within the overall project.",
          },
          {
            file: "ads-series-2.mp4",
            ratio: 1.7778,
            subsectionTitle: "Shchedryi Dar",
            caption:
              "Autumn 2025. An ad clip with AI generation where, beyond the generation itself, I also handled product pack tracking in-frame. Concept development and visual execution in collaboration with the agency's copywriters.",
          },
          {
            file: "ads-series-3.mp4",
            ratio: 1.7778,
            subsectionTitle: "Tefal",
            caption:
              "A clip riding a viral trend with tiny figures. AI generation in early 2025 still had significant limitations, so a large part of the work fell on editing and manual finishing. Development and visual execution in collaboration with copywriters.",
          },
          {
            file: "ads-series-4.mp4",
            ratio: 1.7778,
            subsectionTitle: "Wellagro",
            caption:
              "Early 2025. Another early AI production case where the tools set their own terms: generation provided the base, but editing and post took no less time than the generation itself. Development and execution in collaboration with copywriters.",
          },
          {
            file: "ads-series-5.mp4",
            ratio: 1.7778,
            subsectionTitle: "GRAFF - Effie",
            caption:
              "An ad clip prepared for an Effie submission. Editing and AI generation fully my responsibility; part of the conceptual direction was shaped together with the team.",
          },
          {
            file: "ads-series-6.mp4",
            ratio: 1.7778,
            subsectionTitle: "5th ASHB",
            caption:
              "Late 2024. One of the first complex AI cases when the tools were still very raw. To reach a decent result, I combined the maximum of available tools, compensating for generation limits through editing and manual decisions. Development and execution in collaboration with copywriters.",
          },
        ],
      },
      {
        id: "graff-smm",
        brand: "GRAFF SMM + ad campaigns",
        period: "2024-2026",
        role: "Full-cycle SMM + visual content system development",
        paragraph:
          "Work delivered through New Strategies Group / Maibutne agency. Full-cycle SMM and ad campaigns for GRAFF - from regular content to developing the visual system and materials for print advertising.",
        tags: ["SMM", "brand content", "New Strategies Group"],
        media: "mixed",
        galleryCount: 22,
        cover: "graff-smm-cover.webp",
        gallery: [
          {
            file: "graff-nsmm-1.webp",
            ratio: 0.75,
            subsectionTitle: "Updated visual style",
            caption:
              "Developed the existing visual content system to match the brand's new reality - as the number of product lines grew, each got its own character and mood: a separate color palette, image concept, and presentation logic. Developed a tag system tied to each tea line, so different product lines carried a clear, cohesive visual code and the consumer instantly knew which product was being shown. This changed not just the aesthetic, but the brand's whole mechanism of communicating with the consumer.",
          },
          { file: "graff-nsmm-2.webp", ratio: 0.75 },
          { file: "graff-nsmm-3.webp", ratio: 0.75 },
          { file: "graff-nsmm-4.webp", ratio: 0.75 },
          { file: "graff-nsmm-5.mp4", ratio: 0.5625 },
          { file: "graff-nsmm-6.mp4", ratio: 0.5625 },
          {
            file: "graff-smm-1.mp4",
            ratio: 0.5625,
            subsectionTitle: "General SMM",
            caption:
              "Before this system development, I was responsible for the brand's regular SMM content as a designer at the agency - statics, video, and a range of post formats within the brand's daily rhythm.",
          },
          { file: "graff-smm-2.webp", ratio: 0.75 },
          { file: "graff-smm-3.mp4", ratio: 0.5625 },
          { file: "graff-smm-4.webp", ratio: 0.8 },
          { file: "graff-smm-5.mp4", ratio: 0.5625 },
          { file: "graff-smm-6.webp", ratio: 0.75 },
          { file: "graff-smm-7.mp4", ratio: 0.5625 },
          {
            file: "graff-c-1.webp",
            ratio: 1.5001,
            subsectionTitle: "Ad campaigns",
            caption:
              "Besides SMM, took part in the brand's ad campaigns across formats and channels: visuals for outdoor advertising (billboards, metro), materials for a MixxAwards submission, and full ad campaigns with static and video sets. Development and execution in collaboration with the agency team.",
          },
          { file: "graff-c-2.webp", ratio: 2.0 },
          { file: "graff-c-3.webp", ratio: 1.4139 },
          { file: "graff-c-4.webp", ratio: 1.4139 },
          { file: "graff-c-5.webp", ratio: 0.8 },
          { file: "graff-c-6.webp", ratio: 0.8 },
          { file: "graff-c-7.webp", ratio: 0.8 },
          { file: "graff-c-8.mp4", ratio: 0.5625 },
          { file: "graff-c-9.webp", ratio: 1.7778 },
        ],
      },
      {
        id: "yagotynske",
        brand: "Yagotynske dlya Ditei",
        period: "2025",
        role: "Character and object animation as part of the design team",
        paragraph:
          "Work delivered through New Strategies Group / Maibutne agency. Took part in developing the brand's visual identity for a pitch as part of a team of designers; subsequently ran SMM.",
        tags: ["character animation", "rigging", "SMM"],
        media: "mixed",
        galleryCount: 9,
        cover: "yagotynske-cover.webp",
        lightboxDescription:
          "Work delivered through New Strategies Group / Maibutne agency. Took part in developing the brand's visual identity for a pitch as part of a team of designers. My personal contribution to this collective result - introducing character and environment animation through rigging as part of the overall style: the character, objects, and ingredients got a living, natural movement through rigging, which became one of the brand's signature traits and set it apart from competitors. The agency won the pitch as a team effort. After the style was approved, I ran the brand's SMM for a while - regular content within the developed visual system, where the animated elements continued to live on in the daily content.",
        gallery: [
          {
            file: "yagotynske-1.mp4",
            ratio: 0.5625,
            subsectionTitle: "Visual identity development - pitch",
            caption:
              "Participated in developing the brand's visual identity for a pitch as part of a team. My personal contribution - introducing character and environment animation through rigging as part of the overall style. The agency won the pitch as a team effort.",
          },
          { file: "yagotynske-2.webp", ratio: 0.5625 },
          { file: "yagotynske-3.mp4", ratio: 0.5625 },
          { file: "yagotynske-4.mp4", ratio: 0.5625 },
          { file: "yagotynske-5.mp4", ratio: 0.5625, subsectionTitle: "SMM after the pitch" },
          { file: "yagotynske-6.webp", ratio: 0.5625 },
          { file: "yagotynske-7.webp", ratio: 0.5625 },
          { file: "yagotynske-8.webp", ratio: 0.8 },
          { file: "yagotynske-9.webp", ratio: 0.5625 },
        ],
      },
      {
        id: "ritz-barton",
        brand: "Ritz Barton",
        period: "2024-2025",
        role: "Visual identity development + SMM",
        paragraph:
          "Work delivered through New Strategies Group / Maibutne agency. Developed the brand's visual identity for the pitch and ran SMM on that foundation.",
        tags: ["visual identity", "paper illustration", "SMM"],
        media: "mixed",
        galleryCount: 9,
        cover: "ritz-barton-cover.webp",
        lightboxDescription:
          "Work delivered through New Strategies Group / Maibutne agency. Developed the brand's visual identity for the pitch under the art director's guidance. Started from the paper illustration already present on the product packaging and developed that aesthetic into a full visual style for social media - an approach that barely existed among tea brands on the market at the time. This gave the brand a clear, instantly recognizable character that set it apart from competitors at a glance. The agency won the pitch. After the style was approved, I ran the brand's SMM within this system - regular content in a consistent paper-illustration aesthetic.",
        gallery: [
          {
            file: "ritz-barton-1.webp",
            ratio: 0.5625,
            caption:
              "Developed the brand's visual identity for the pitch under the art director's guidance. Started from the paper illustration on the product packaging and developed that aesthetic into a full style. The agency won the pitch.",
          },
          { file: "ritz-barton-2.mp4", ratio: 0.5625 },
          { file: "ritz-barton-3.webp", ratio: 0.5625 },
          { file: "ritz-barton-4.mp4", ratio: 0.5625 },
          { file: "ritz-barton-5.webp", ratio: 0.5656 },
          { file: "ritz-barton-6.webp", ratio: 0.5625 },
          { file: "ritz-barton-7.webp", ratio: 0.8 },
          { file: "ritz-barton-8.webp", ratio: 0.5625 },
          { file: "ritz-barton-9.webp", ratio: 0.5625 },
        ],
      },
      {
        id: "dobrobut-reeva",
        brand: "Dobrobut + Reeva",
        period: "2024-2025",
        role: "SMM",
        paragraph:
          "Work delivered through New Strategies Group / Maibutne agency. SMM content for agency brands - combining classic design and AI tools depending on the task.",
        tags: ["SMM", "New Strategies Group", "AI content"],
        media: "mixed",
        galleryCount: 9,
        cover: "dobrobut-reeva-cover.webp",
        lightboxDescription:
          "Work delivered through New Strategies Group / Maibutne agency. Occasionally ran SMM for other agency brands - including Dobrobut and Reeva. Combined classic graphic design and AI tools depending on the task and character of each brand, adapting the approach to the specifics of the audience and product.",
        gallery: [
          { file: "dobrobut-reeva-1.mp4", ratio: 0.5625 },
          { file: "dobrobut-reeva-2.webp", ratio: 0.8 },
          { file: "dobrobut-reeva-3.mp4", ratio: 0.5625 },
          { file: "dobrobut-reeva-4.webp", ratio: 0.5625 },
          { file: "dobrobut-reeva-5.mp4", ratio: 0.5625 },
          { file: "dobrobut-reeva-6.webp", ratio: 0.5625 },
          { file: "dobrobut-reeva-7.mp4", ratio: 0.5625 },
          { file: "dobrobut-reeva-8.mp4", ratio: 0.5625 },
          { file: "dobrobut-reeva-9.mp4", ratio: 0.5625 },
        ],
      },
    ],
  },
  principlesLabel: "Principles in work",
  principles: [
    "I test it myself before putting it to work",
    "Structure before execution",
    "Every project - done with care",
    "I pick the style for the idea, not the idea for the style",
  ],
  contact: {
    headingLine1: "Have an idea",
    headingLine2: "for a project?",
    subhead: "Tell me about it - open to new projects.",
    emailLabel: "Email",
    email: "7.y.ak.a.mo.7@gmail.com",
    secondaryLabel: "Or via messengers",
  },
  footer: { rights: "All rights reserved." },
};
