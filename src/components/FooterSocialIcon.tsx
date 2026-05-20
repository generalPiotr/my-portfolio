import type { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { SiGithub } from "react-icons/si";

export type FooterSocialId = "github" | "linkedin" | "email";

const FOOTER_SOCIAL_ICONS: Record<FooterSocialId, IconType> = {
  github: SiGithub,
  linkedin: FaLinkedin,
  email: HiOutlineEnvelope,
};

export function FooterSocialIcon({ id }: { id: FooterSocialId }) {
  const Icon = FOOTER_SOCIAL_ICONS[id];
  return <Icon className="h-4 w-4 shrink-0" aria-hidden />;
}
