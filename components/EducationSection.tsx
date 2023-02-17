import { Heading3 } from "@/components/Heading3";
import { LinkTextSpan } from "@/components/LinkTextSpan";
import { Paragraph } from "@/components/Paragraph";
import { TextSpan } from "@/components/TextSpan";

export const EducationSection = () => {
  return (
    <section id="education" className="p-3 md:px-8">
      <header>
        <Heading3>Education</Heading3>
      </header>
      <ul>
        <li>
          <Paragraph>
            Despite beginning my career as a
            <TextSpan> Chartered accountancy student,</TextSpan> I made a
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
            <TextSpan> online coding boot-camp,</TextSpan>which equipped me with
            the latest programming skills, modern development tools, and
            industry-standard methodologies.
          </Paragraph>
        </li>

        <li>
          <Paragraph>
            Right now, I am attending{" "}
            <LinkTextSpan href="https://www.scaler.com/academy">
              Scaler Academy
            </LinkTextSpan>
            , an institute for working professionals to up-skill themselves. I
            joined scaler to get a good foundation in computer science
            fundamentals and to make sure I am always learning.
          </Paragraph>
        </li>

        <li>
          <Paragraph className="italic font-medium">
            Sorry, but if you&apos;re searching for a degree, I&apos;m not your
            person. No hard feelings though!
          </Paragraph>
        </li>
      </ul>
    </section>
  );
};
