export type Example = {
  id: number;
  inputText: string;
  outputText: string;
  explanation?: string;
  img?: string;
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

export type DBProblem = {
  id: string;
  title: string;
  category: string;
  order: number;
  videoId?: string;
  link?: string;
};
