import { createContext, useContext, createElement } from "react";
import type { ReactNode } from "react";
import { siteConfig } from "./site.config";
import type { ReactNode } from "react";

export interface BlocksMeta {
  order: string[];
  hidden: string[];
  media: Record<string, any[]>;
  custom: Record<string, { title: string; body: string }>;
}

export interface SkillCard {
  n: string;
  title: string;
  desc: string;
  warn?: string;
  gif?: string;
  youtubeId?: string;
  aspectRatio?: string;
}
export interface Stage { n: string; title: string; sub?: string; desc?: string; gif?: string }
export interface ValueLine { label: string; price: string }

export interface PageContent {
  _v?: number;
  price: string;
  value: string;

  heroBadge: string;
  heroHeadline1: string;
  heroHeadline2: string;
  heroAccentLine: string;
  heroSub: string;
  heroCta: string;
  heroSubPrice?: string;
  heroVideoYoutubeId?: string;
  heroPoem?: string[];

  painLabel: string;
  painHeading: string;
  painQuote: string;
  painSub: string;
  pains: string[];
  painConclusion?: string;

  // ── Attention (3 cách gây chú ý) ──
  attentionLabel: string;
  attentionHeading: string;
  attentionPara: string;
  attentionItems: { icon: string; title: string; desc: string }[];

  // ── Rule 7-11-4 ──
  ruleLabel: string;
  ruleHeading: string;
  rulePara: string;
  ruleItems: { fail: string; why: string }[];
  ruleConclusion: string;

  cycleLabel: string;
  cycleHeading: string;
  cyclePara: string;
  cycleItems: { fail: string; why: string }[];
  
  discoveryLabel: string;
  discoveryHeading: string;
  discoverySub: string;
  discoveryItems: { title: string; desc: string }[];

  solutionLabel: string;
  solutionHeading: string;
  solutionSub: string;
  solutionItems: string[];

  skillsLabel: string;
  skillsHeading: string;
  skillCards: SkillCard[];

  midCtaHeading: string;
  midCtaSub: string;
  midCtaBtn: string;

  baLabel: string;
  baHeading: string;
  baSub: string;
  baBeforeMedia?: string;
  baAfterMedia?: string;
  beforeLabel: string;
  afterLabel: string;
  beforeItems: string[];
  afterItems: string[];

  roadmapLabel: string;
  roadmapHeading: string;
  roadmapPreviewHeading?: string;
  roadmapPreviewDesc?: string;
  roadmapIframeUrl?: string;
  roadmapChaptersHeading?: string;
  stages: Stage[];

  instructorLabel: string;
  instructorHeading: string;
  instructorInitials: string;
  instructorName: string;
  instructorTitle: string;
  instructorBio: string[];
  instructorInsight?: string;

  urgencyBar: string;
  ctaLabel: string;
  ctaHeading: string;
  ctaSub: string;
  countdownLabel: string;
  valueStackTitle: string;
  valueStack: ValueLine[];
  guarantee: string;

  footerBrand: string;
  footerDot: string;
  footerTagline: string;
  footerLinks: string[];
  bonusLabel: string;
  bonusHeading: string;
  bonusSub: string;
  bonusItems: { id: string; title: string; desc: string; audioDemo?: string; youtubeDemo?: string; gifDemo?: string }[];

  blocksMeta: BlocksMeta;
}

const CONTENT_SCHEMA_VERSION = 7;

export const DEFAULT_CONTENT: PageContent = {
  _v: CONTENT_SCHEMA_VERSION,
  price: siteConfig.product.price,
  value: siteConfig.product.originalPrice,

  // ── Hero ──
  heroBadge: "",
  heroHeadline1: "",
  heroHeadline2: "",
  heroPoem: [],
  heroAccentLine: "",
  heroSub: "",
  heroCta: "",
  heroVideoYoutubeId: "",
  heroSubPrice: "",

  // ── Pain (Nỗi đau) ──
  painLabel: "",
  painHeading: "",
  painQuote: "",
  painSub: "",
  pains: [],

  // ── Attention (3 cách gây chú ý) ──
  attentionLabel: "",
  attentionHeading: "",
  attentionPara: "",
  attentionItems: [],

  // ── Rule 7-11-4 ──
  ruleLabel: "",
  ruleHeading: "",
  rulePara: "",
  ruleItems: [],
  ruleConclusion: "",

  // ── Section 3: Đập tan ảo giác ──
  cycleLabel: "",
  cycleHeading: "",
  cyclePara: "",
  cycleItems: [],

  // ── Section 4: Giác ngộ chân lý ──
  discoveryLabel: "",
  discoveryHeading: "",
  discoverySub: "",
  discoveryItems: [],

  // ── Section 5: Solution ──
  solutionLabel: "",
  solutionHeading: "",
  solutionSub: "",
  solutionItems: [],

  skillsLabel: "",
  skillsHeading: "",
  skillCards: [],

  // ── Section 7: Mid CTA ──
  midCtaHeading: "",
  midCtaSub: "",
  midCtaBtn: "",

  // ── Section 8: Before & After ──
  baLabel: "",
  baHeading: "",
  baSub: "",
  baBeforeMedia: "",
  baAfterMedia: "",
  beforeLabel: "",
  afterLabel: "",
  beforeItems: [],
  afterItems: [],

  // ── Section 9: Lộ trình tinh gọn ──
  roadmapLabel: "",
  roadmapHeading: "",
  roadmapPreviewHeading: "",
  roadmapPreviewDesc: "",
  roadmapIframeUrl: "",
  roadmapChaptersHeading: "",
  stages: [],

  // ── Section 10: Instructor ──
  instructorLabel: "",
  instructorHeading: "",
  instructorInitials: "",
  instructorName: "",
  instructorTitle: "",
  instructorBio: [],

  // ── Bonus (Quà tặng) ──
  bonusLabel: "",
  bonusHeading: "",
  bonusSub: "",
  bonusItems: [],

  // ── Section 11: Final CTA ──
  urgencyBar: "",
  ctaLabel: "",
  ctaHeading: "",
  ctaSub: "",
  countdownLabel: "",
  valueStackTitle: "",
  valueStack: [],
  guarantee: "",

  // ── Footer ──
  footerBrand: siteConfig.branding.footerBrand || "BRAND",
  footerDot: ".",
  footerTagline: "",
  footerLinks: [],
  footerCopyright: siteConfig.branding.footerCopyright || "",

  blocksMeta: {
    order: ["hero", "pain", "attention", "rule", "cycle", "discovery", "solution", "skills", "midCta", "before-after", "roadmap", "instructor", "bonus", "cta", "footer"],
    hidden: [],
    media: {},
    custom: {},
  },
};

export const ContentCtx = createContext<PageContent>(DEFAULT_CONTENT);

export function useContent(): PageContent {
  return useContext(ContentCtx);
}

export function ContentProvider({ children }: { children: ReactNode }) {
  return createElement(ContentCtx.Provider, { value: DEFAULT_CONTENT }, children);
}
