import { ExperienceListItem } from "@/components/ExperienceListtem";
import { Heading3 } from "@/components/Heading3";
import { LinkBadge, LinkBadgeProps } from "@/components/LinkBadge";
import { LinkTextSpan } from "@/components/LinkTextSpan";
import { Paragraph } from "@/components/Paragraph";
import { TextSpan } from "@/components/TextSpan";
import { useTheme } from "@/hooks/useTheme";
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

const experienceListItems = [
  <>
    Implementing features and taking full responsibility from planning, writing
    documentation, designing the database schema, writing API handlers, writing
    services, writing integration and unit tests and deploying these features
    following industry best practices.
  </>,
  <>
    Implementing designs from figma pixel to pixel using React, Next JS and Vue
    JS for markup, and vanilla CSS and CSS libraries such Tailwind CSS and
    Material UI for styling following responsive design and accessibility best
    practices.
  </>,
  <>
    High level designed RabbitMQ message broker to handle special tasks in our
    app. Wrote and low level designed repositories for publishing and consuming
    messages. This helped SuperHire manage tasks such as sending onboarding
    mails, expiring customer job claims within a few days if they are inactive
    etc.
  </>,
  <>
    Taking responsibility and implementing critical auth features such as user
    onboarding/registration, forgot/reset/change password with OTP mails and
    other industry best practices.
  </>,
  <>
    Managing PostgreSQL schema and data migrations following db normalization
    and other best practices
  </>,
  <>
    Deploy, manage and debug AWS services such as Beanstalk, RDS, s3 among
    others,
  </>,
  <>
    Automated the workflow of writing a day&apos;s candidate submissions to a
    google sheet. This helped the company share the google sheet with other
    companies early on and procure business.
  </>,
  <>
    Read documentation and setup FreshChat, a 3rd party chatbot + chat service
    for SuperHire to engage with their customers.
  </>,
  <>Conduct code reviews for fellow engineers following best practices</>,

  // "Worked across the stack. Our stack was AWS, NameCheap and Google domains, Hapi JS for server, PostgreSQL for our database , Prisma for ORM, React, NextJS and Vue JS for front-end, Tailwind UI and Material UI for styling, Figma for design and bitbucket as our code repository.",
];

export default function Home() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      <Head>
        <title>Samrood Ali | Full Stack Web Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout className="dark:text-slate-100">
        <header className="my-4 p-3">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold">
            Hi! I am Samrood Ali
          </h1>
          <h2 className="font-bold text-day-900 text-xl lg:text-2xl dark:text-teal-300">
            Full Stack web developer{" "}
          </h2>
        </header>

        <section>
          <ul className="flex flex-wrap gap-2 px-2">
            {quickLinks.map((link) => (
              <li key={link.href} className="flex-grow">
                <LinkBadge href={link.href} label={link.label} />
              </li>
            ))}
          </ul>
        </section>

        <section className="px-3  md:px-8 my-4" id="intro">
          <Paragraph>Hi there! 👋 Welcome to my personal website.</Paragraph>
          <Paragraph>
            If you are not a fan of the {isDarkMode ? "dark" : "bright"} theme,
            click on the {isDarkMode ? "moon" : "sun"} up top or{" "}
            <span
              className="text-day-900 dark:text-teal-200"
              onClick={toggleTheme}
            >
              here
            </span>{" "}
            to switch to a {isDarkMode ? "lighter" : "darker"} theme.
          </Paragraph>
        </section>

        <section className="p-3 md:px-8">
          <header>
            <Heading3>Who am I ?</Heading3>
          </header>
          <Paragraph>
            I&apos;m a software engineer with a passion for building and
            maintaining innovative web applications. I specialize in Full Stack
            web development. In short, I can handle all your web related needs
          </Paragraph>
        </section>

        <section id="education" className="p-3 md:px-8">
          <header>
            <Heading3>Education</Heading3>
          </header>
          <ul>
            <li>
              <Paragraph>
                Despite beginning my career as a
                <TextSpan> Chartered accountancy student</TextSpan> , I made a
                transition to become a software engineer and have since been
                dedicated to the craft.
                <TextSpan> I taught myself to code</TextSpan> with the book
                &apos;Head First Kotlin&apos; and have fallen in love with
                programming ever since.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                To learn front-end web development, I completed{" "}
                <LinkTextSpan href="https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011">
                  Udacity&apos;s Front-end Nanodegree program
                </LinkTextSpan>
                , which provided me with a strong foundation in web development.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                In addition, I completed{" "}
                <LinkTextSpan href="https://www.microverse.org/?gclid=Cj0KCQiA6LyfBhC3ARIsAG4gkF8hCCGBrxqVe_fvKGf6evyWNFuW8c5ODoWTsbZsp_A8lag8VWUHOn8aAjeXEALw_wcB">
                  {" "}
                  Microverse
                </LinkTextSpan>{" "}
                <TextSpan>, a one year </TextSpan>
                Full-Stack
                <TextSpan> online coding boot-camp</TextSpan>, which equipped me
                with the latest programming skills, modern development tools,
                and industry-standard methodologies.
              </Paragraph>
            </li>

            <li>
              <Paragraph>
                Right now, I am attending{" "}
                <LinkTextSpan href="https://www.scaler.com/academy">
                  Scaler Academy
                </LinkTextSpan>
                , an institute for working professionals to up-skill themselves.
                I joined scaler to get a good foundation in computer science
                fundamentals and to make sure I am always learning.
              </Paragraph>
            </li>

            <li>
              <Paragraph className="italic font-medium">
                Sorry, but if you&apos;re searching for a degree, I&apos;m not
                your person. No hard feelings though!
              </Paragraph>
            </li>
          </ul>
        </section>

        <section id="experience">
          <header>
            <Heading3 className="mx-3 md:mx-8">Experience</Heading3>
            <ul>
              <li>
                <Paragraph className="px-3 md:px-4">
                  During my tenure at SuperHire, an early stage startup, I was
                  one of the founding Full Stack web developers and had the
                  opportunity to wear many hats while working across the stack.
                  I played a key role in setting up repositories and services,
                  and was responsible for building, testing, and maintaining
                  several features. My experience as a versatile Full Stack
                  developer allowed me to contribute to the success of the
                  startup, and I am proud to have been a part of the team.
                </Paragraph>
                <div className="bg-day-900 dark:bg-teal-900 bg-opacity-10 dark:bg-opacity-50 md:dark:bg-opacity-20 p-3 md:my-12 rounded-lg shadow-lg">
                  <p className="px-3  text-day-900 dark:text-teal-300 md:text-center font-medium text-lg md:text-3xl py-8">
                    Here are some of the things I did at SuperHire:
                  </p>
                  <ul
                    id="SuperHire-things"
                    className="list-disc flex flex-col md:grid md:grid-cols-2 md:px-16 px-4 lg:px-8 xl:px-16 gap-x-8"
                  >
                    {experienceListItems.map((item, index) => (
                      <ExperienceListItem
                        key={index}
                        className={
                          "even:text-day-900 even:md:text-black even:dark:text-teal-200 dark:text-white even:md:dark:text-white md:p-3"
                        }
                      >
                        {item}
                      </ExperienceListItem>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </header>
        </section>
      </AppLayout>
    </>
  );
}
