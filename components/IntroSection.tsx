import { Heading3 } from "@/components/Heading3";
import { LinkTextSpan } from "@/components/LinkTextSpan";
import { Paragraph } from "@/components/Paragraph";
import { useTheme } from "@/hooks/useTheme";

export const IntroSection = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
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
          I am a software development engineer with a passion for building and
          maintaining innovative web applications. My expertise lies in Full
          Stack web development, and I am currently working at{" "}
          <LinkTextSpan href="https://peoplegrove.com">
            PeopleGrove
          </LinkTextSpan>
          , where I contribute to the success of the company by utilizing my
          skills to develop cutting-edge solutions and drive growth. I am
          excited to be a part of the PeopleGrove team and eager to continue
          making a positive impact with my web development capabilities.
        </Paragraph>
      </section>
    </>
  );
};
