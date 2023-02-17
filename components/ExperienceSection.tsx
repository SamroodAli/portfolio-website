import { ExperienceListItem } from "@/components/ExperienceListtem";
import { Heading3 } from "@/components/Heading3";
import { Paragraph } from "@/components/Paragraph";

const experienceListItems = [
  <>
    Implemented features and took full responsibility for the entire process,
    including planning, writing documentation, designing the database schema,
    writing API handlers, writing services, writing integration and unit tests,
    and deploying these features following industry best practices.
  </>,
  <>
    Implemented designs from Figma pixel to pixel using React, Next JS, and Vue
    JS for markup, and vanilla CSS and CSS libraries such as Tailwind CSS and
    Material UI for styling, following responsive design and accessibility best
    practices. Collaborated closely with the designer to ensure the final
    product met their vision and design standards.
  </>,
  <>
    Designed and implemented a RabbitMQ message broker to handle specialized
    tasks within our app. This included high-level design of the messaging
    system, as well as low-level implementation details such as writing
    repositories for publishing and consuming messages. This system allowed
    SuperHire to efficiently manage tasks such as sending onboarding emails and
    expiring customer job claims if they remained inactive for a certain period
    of time.
  </>,
  <>
    I took ownership of implementing critical authentication features such as
    user onboarding/registration, forgot/reset/change password workflows with
    OTP (One-Time Password) mails, and other industry best practices. This
    involved designing and developing secure and user-friendly authentication
    flows, incorporating the latest security standards and practices to protect
    user data and prevent unauthorized access.
  </>,
  <>
    I was responsible for managing the PostgreSQL schema and data migrations,
    following best practices such as database normalization. This involved
    designing and optimizing database tables, ensuring data consistency and
    integrity, while also keeping performance and scalability in mind.
  </>,
  <>
    As part of my role, I deployed, managed, and debugged various AWS services,
    including Beanstalk, RDS, and S3, among others. This involved configuring
    and fine-tuning these services to meet the specific needs of our
    applications
  </>,
  <>
    To minimize code redundancy, I packaged reusable code as an NPM package and
    introduced it as a dependency in our projects. This allowed us to more
    efficiently manage dependencies and reduce the amount of duplicate code in
    our codebase.
  </>,
  <>
    I automated the workflow of submitting a day&apos;s candidate data to a
    Google Sheet, which improved our workflow and helped the company easily
    share the Google Sheet with other businesses to procure more business
    opportunities.
  </>,
  <>
    I was responsible for reading the documentation and setting up FreshChat, a
    3rd party chatbot and chat service, to enable SuperHire to engage with its
    customers in real-time. This involved configuring the system and integrating
    it with our website, allowing us to provide efficient and effective customer
    service.
  </>,
  <>
    I conducted code reviews for fellow engineers following best practices,
    while always striving to be empathetic and caring towards my teammates. I
    believe that providing constructive feedback in a supportive and considerate
    manner helps to build stronger relationships, improve team dynamics, and
    ultimately leads to higher quality code.
  </>,
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
