"use client";

import { HomeHeader } from "@/components";

export default function Home({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen">
      <HomeHeader problemPage={true} />
      <h1>{params.id}</h1>
    </main>
  );
}
