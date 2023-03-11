import { LinkBadge, LinkBadgeProps } from "@/components/LinkBadge";

const quickLinks: LinkBadgeProps[] = [
  {
    href: `mailto:${process.env.NEXT_PUBLIC_MY_EMAIL}`,
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
    href: "https://docs.google.com/document/d/1mgNA_tafK0QarjSP8wplMf9nlxKKX5AwxmOBzmDXQJU/export?format=pdf",
    label: "Resume",
  },
  {
    href: `https://stackoverflow.com/users/13533321/samrood-ali`,
    label: "StackOverflow",
  },
  {
    href: `https://medium.com/@devsamrood`,
    label: "Medium",
  },
  {
    href: `tel:${process.env.NEXT_PUBLIC_MY_PHONE}`,
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
