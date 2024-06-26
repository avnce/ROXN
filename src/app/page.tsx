import { Announcement } from "@/components/Announcement";
import { Calm } from "@/components/Calm";
import { Hero } from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Announcement />
      <Calm />
    </main>
  );
}
