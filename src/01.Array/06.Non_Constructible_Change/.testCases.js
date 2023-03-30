export const testCases = [
    {
        inputs: {
            coins: [5, 7, 1, 1, 2, 3, 22],
        },
        outputs: 20,
    },
    {
        inputs: {
            coins: [1, 1, 1, 1, 1],
        },
        outputs: 6,
    },
    {
        inputs: {
            coins: [1, 5, 1, 1, 1, 10, 15, 20, 100],
        },
        outputs: 55,
    },
    {
        inputs: {
            coins: [6, 4, 5, 1, 1, 8, 9],
        },
        outputs: 3,
    },
    {
        inputs: {
            coins: [],
        },
        outputs: 1,
    },
    {
        inputs: {
            coins: [2],
        },
        outputs: 1,
    },
    {
        inputs: {
            coins: [87],
        },
        outputs: 1,
    },
    {
        inputs: {
            coins: [5, 6, 1, 1, 2, 3, 4, 9],
        },
        outputs: 32,
    },
    {
        inputs: {
            coins: [5, 6, 1, 1, 2, 3, 43],
        },
        outputs: 19,
    },
    {
        inputs: {
            coins: [109, 2000, 8765, 19, 18, 17, 16, 8, 1, 1, 2, 4],
        },
        outputs: 87,
    },
    {
        inputs: {
            coins: [1, 2, 3, 4, 5, 6, 7],
        },
        outputs: 29,
    },
];

export const checkTestCases = (solution) => {
    return () => {
        testCases.forEach((testCase) => {
            expect(solution(testCase.inputs.coins)).toBe(testCase.outputs);
        });
    };
};

export default checkTestCases;
