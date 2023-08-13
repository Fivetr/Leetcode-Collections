export type Example = {
  id: number;
  inputText: string;
  outputText: string;
  explanation?: string;
  img?: string;
  img_size?: number;
};

export type Solution = {
  solution: string;
  time_complexity: string;
  space_complexity: string;
};

export type Problem = {
  id: string;
  title: string;
  problemStatement: string;
  examples: Example[];
  constraints: string;
  order: number;
  starterCode: string;
  handlerFunction: ((fn: any) => boolean) | string;
  starterFunctionName: string;
  difficulty: string;
  category: string;
  solution: Solution;
};

export type problem_MetaData = {
  id: string;
  title: string;
  difficulty: string;
  category: string;
  rank: number;
  videolink?: string;
};
