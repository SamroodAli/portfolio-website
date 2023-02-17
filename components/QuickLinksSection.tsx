import { LinkBadge, LinkBadgeProps } from "@/components/LinkBadge";

const quickLinks: LinkBadgeProps[] = [
  {
    href: "mailto:devsamrood@gmail.com",
    label: "Gmail",
  },
  {
    href: "https://www.linkedin.com/in/samrood-ali",
    label: "Linkedin",
  },
  {
    href: "https://github.com/SamroodAli",
    label: "Github",
  },
  {
    href: "https://docs.google.com/document/d/e/2PACX-1vT3xvPGKfzcYs645N2WDpQBFdozD2WQdg5lWbkWSXggqenpHdVnMO68ZQUmyi7Ny7ehgFMB6ftod2h5/pub",
    label: "Resume",
  },
  {
    href: "tel:+917558964767",
    label: "Phone",
  },
];

export const QuickLinksSection = () => {
  return (
    <section>
      <ul className="flex flex-wrap gap-2 px-2">
        {quickLinks.map((link) => (
          <li key={link.href} className="flex-grow">
            <LinkBadge href={link.href} label={link.label} />
          </li>
        ))}
      </ul>
    </section>
  );
};
