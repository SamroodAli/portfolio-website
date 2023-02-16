import { LinkBadge, LinkBadgeProps } from "@/components/LinkBadge";
import { AppLayout } from "@/layouts/AppLayouts";
import Head from "next/head";
import Link from "next/link";

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

export default function Home() {
  return (
    <>
      <Head>
        <title>Samrood Ali | Full Stack Web Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <header className="my-4 p-3">
          <h1 className="text-2xl font-extrabold">Hi! I am Samrood Ali</h1>
          <h2 className="font-bold text-day-900 dark:text-white">
            Full Stack web developer{" "}
          </h2>
        </header>

        <section className="">
          <ul className="flex flex-wrap gap-2 px-2">
            {quickLinks.map((link) => (
              <li key={link.href} className="flex-grow">
                <LinkBadge href={link.href} label={link.label} />
              </li>
            ))}
          </ul>
        </section>

        <section className="p-3">
          <p className="m-3">
            Hi there! 👋 I&apos;m a software engineer with a passion for
            building and maintaining innovative web applications.
          </p>
          <p className="m-3">
            With over a year of experience in full stack development, I&apos;ve
            gained a strong foundation in both front-end and back-end
            technologies, and I&apos;m always looking for new ways to expand my
            skillset.
          </p>
        </section>

        {/* <section>
          <h3>Interested in my story ?</h3>
          <Link href="/about-me">Read here</Link>
        </section> */}
      </AppLayout>
    </>
  );
}
