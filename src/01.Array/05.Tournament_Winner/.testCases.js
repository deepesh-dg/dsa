export const testCases = [
    {
        inputs: {
            competitions: [
                ["HTML", "C#"],
                ["C#", "Python"],
                ["Python", "HTML"],
            ],
            results: [0, 0, 1],
        },
        outputs: "Python",
    },
    {
        inputs: {
            competitions: [
                ["HTML", "Java"],
                ["Java", "Python"],
                ["Python", "HTML"],
            ],
            results: [0, 1, 1],
        },
        outputs: "Java",
    },
    {
        inputs: {
            competitions: [
                ["HTML", "Java"],
                ["Java", "Python"],
                ["Python", "HTML"],
                ["C#", "Python"],
                ["Java", "C#"],
                ["C#", "HTML"],
            ],
            results: [0, 1, 1, 1, 0, 1],
        },
        outputs: "C#",
    },
    {
        inputs: {
            competitions: [
                ["HTML", "Java"],
                ["Java", "Python"],
                ["Python", "HTML"],
                ["C#", "Python"],
                ["Java", "C#"],
                ["C#", "HTML"],
                ["SQL", "C#"],
                ["HTML", "SQL"],
                ["SQL", "Python"],
                ["SQL", "Java"],
            ],
            results: [0, 1, 1, 1, 0, 1, 0, 1, 1, 0],
        },
        outputs: "C#",
    },
    {
        inputs: {
            competitions: [["Bulls", "Eagles"]],
            results: [1],
        },
        outputs: "Bulls",
    },
    {
        inputs: {
            competitions: [
                ["Bulls", "Eagles"],
                ["Bulls", "Bears"],
                ["Bears", "Eagles"],
            ],
            results: [0, 0, 0],
        },
        outputs: "Eagles",
    },
    {
        inputs: {
            competitions: [
                ["Bulls", "Eagles"],
                ["Bulls", "Bears"],
                ["Bulls", "Monkeys"],
                ["Eagles", "Bears"],
                ["Eagles", "Monkeys"],
                ["Bears", "Monkeys"],
            ],
            results: [1, 1, 1, 1, 1, 1],
        },
        outputs: "Bulls",
    },
    {
        inputs: {
            competitions: [
                ["HTML", "Java"],
                ["Java", "Python"],
                ["Python", "HTML"],
                ["C#", "Python"],
                ["Java", "C#"],
                ["C#", "HTML"],
                ["SQL", "C#"],
                ["HTML", "SQL"],
                ["SQL", "Python"],
                ["SQL", "Java"],
            ],
            results: [0, 0, 0, 0, 0, 0, 1, 0, 1, 1],
        },
        outputs: "SQL",
    },
    {
        inputs: {
            competitions: [
                ["AlgoMasters", "FrontPage Freebirds"],
                ["Runtime Terror", "Static Startup"],
                ["WeC#", "Hypertext Assassins"],
                ["AlgoMasters", "WeC#"],
                ["Static Startup", "Hypertext Assassins"],
                ["Runtime Terror", "FrontPage Freebirds"],
                ["AlgoMasters", "Runtime Terror"],
                ["Hypertext Assassins", "FrontPage Freebirds"],
                ["Static Startup", "WeC#"],
                ["AlgoMasters", "Static Startup"],
                ["FrontPage Freebirds", "WeC#"],
                ["Hypertext Assassins", "Runtime Terror"],
                ["AlgoMasters", "Hypertext Assassins"],
                ["WeC#", "Runtime Terror"],
                ["FrontPage Freebirds", "Static Startup"],
            ],
            results: [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
        },
        outputs: "AlgoMasters",
    },
];

export const checkTestCases = (solution) => {
    return () => {
        testCases.forEach((testCase) => {
            expect(solution(testCase.inputs.competitions, testCase.inputs.results)).toBe(testCase.outputs);
        });
    };
};

export default checkTestCases;
