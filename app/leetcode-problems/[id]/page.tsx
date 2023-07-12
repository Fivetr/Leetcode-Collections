"use client";

import { HomeHeader, WorkSpaceContainer, Footer } from "@/components";

export default function Home({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen">
      <HomeHeader problemPage={true} />
      <WorkSpaceContainer problemId={params.id} />
    </main>
  );
}
