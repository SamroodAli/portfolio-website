import { Heading3 } from "@/components/Heading3";
import { LinkButton } from "@/components/LinkButton";

const email = process.env.NEXT_PUBLIC_MY_EMAIL;
const phone = process.env.NEXT_PUBLIC_MY_PHONE;

if (!email || !phone) {
  console.error("email or phone env not provided");
  process.exit(1);
}

export const ContactMeSection = () => {
  return (
    <section className="py-8 rounded-lg">
      <header>
        <Heading3 className="text-center no-underline">Contact me</Heading3>
      </header>
      <div className="flex justify-center">
        <LinkButton href={`mailto:${email}`}>Send me a mail</LinkButton>
      </div>
    </section>
  );
};
