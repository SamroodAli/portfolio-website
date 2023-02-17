import { ExperienceListItem } from "@/components/ExperienceListtem";
import { Heading3 } from "@/components/Heading3";
import { Paragraph } from "@/components/Paragraph";

const experienceListItems = [
  <>
    Implementing features and taking full responsibility from planning, writing
    documentation, designing the database schema, writing API handlers, writing
    services, writing integration and unit tests and deploying these features
    following industry best practices.
  </>,
  <>
    Implementing designs from Figma pixel to pixel using React, Next JS and Vue
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
];

export const ExperienceSection = () => {
  return (
    <section id="experience">
      <header>
        <Heading3 className="mx-3 md:mx-8">Experience</Heading3>
        <ul>
          <li>
            <Paragraph className="px-3 md:px-4">
              During my tenure at SuperHire, an early stage startup, I was one
              of the founding Full Stack web developers and had the opportunity
              to wear many hats while working across the stack. I played a key
              role in setting up repositories and services, and was responsible
              for building, testing, and maintaining several features. My
              experience as a versatile Full Stack developer allowed me to
              contribute to the success of the startup, and I am proud to have
              been a part of the team.
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
  );
};
