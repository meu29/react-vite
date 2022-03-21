type Problem = {
    content: string;
    paraphrased_content: string;
    solution: string;
}

type Idea = {
    kind: "vitamin" | "painkiller" | "cure"; //いらない?
    perspectives: {
        who: string;
        when: string;
        where: string;
        what: string;
    },
    problems: Record<string, Problem>;
}