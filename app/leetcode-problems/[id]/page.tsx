"use client";

import { HomeHeader, ProblemContainer, Footer } from "@/components";

export default function Home({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen">
      <HomeHeader problemPage={true} />
      <ProblemContainer />
    </main>
  );
}
