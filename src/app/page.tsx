import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m HNIN THIRI SAN</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a Data Scientist that loves{" "}
        <Highlight>building ML projects</Highlight>,and AI models that can impact
        millions of lives
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a Data Scientist with{" "}
        <Highlight>2 years of experience</Highlight> building AI projects with awesome performance.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}