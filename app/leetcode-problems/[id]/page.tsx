import { problems } from "@/leetcode_problems/index";
import HomeHeader from "@/components/Header/HomeHeader/HomeHeader";
import WorkSpaceContainer from "@/components/ProblemWorkSpace/WorkSpaceContainer";
import { notFound } from "next/navigation";

export default function leetcode_problems({ params }: any) {
  if (!problems[params.id]) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <HomeHeader problemPage={true} problemId={params.id} />
      <WorkSpaceContainer problem={params.id} />
    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(problems).map((key) => ({ id: key }));
}
