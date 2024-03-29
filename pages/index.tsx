import { ContactMeSection } from "@/components/ContactMeSection";
import { Footer } from "@/components/Footer";
import { HeaderSection } from "@/components/HeaderSection";
import { IntroSection } from "@/components/IntroSection";
import { QuickLinksSection } from "@/components/QuickLinksSection";
import { AppLayout } from "@/layouts/AppLayouts";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Samrood Ali | Full Stack Web Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout className="dark:text-slate-100">
        <HeaderSection />
        <QuickLinksSection />
        <IntroSection />
        {/* <EducationSection /> */}
        {/* <ExperienceSection /> */}
        <ContactMeSection />
        <Footer />
      </AppLayout>
    </>
  );
}
