export const testCases = [
    {
        inputs: {
            array: [5, 1, 22, 25, 6, -1, 8, 10],
            sequence: [1, 6, -1, 10],
        },
        outputs: true,
    },
    {
        inputs: {
            array: [5, 1, 22, 25, 6, -1, 8, 10],
            sequence: [5, 1, 22, 25, 6, -1, 8, 10],
        },
        outputs: true,
    },
    {
        inputs: {
            array: [5, 1, 22, 25, 6, -1, 8, 10],
            sequence: [5, 1, 22, 6, -1, 8, 10],
        },
        outputs: true,
    },
    {
        inputs: {
            array: [5, 1, 22, 25, 6, -1, 8, 10],
            sequence: [25],
        },
        outputs: true,
    },
    {
        inputs: {
            array: [1, 1, 1, 1],
            sequence: [1, 1, 1],
        },
        outputs: true,
    },
    {
        inputs: {
            array: [5, 1, 22, 25, 6, -1, 8, 10],
            sequence: [5, 1, 22, 25, 6, -1, 8, 10, 12],
        },
        outputs: false,
    },
    {
        inputs: {
            array: [1, 1, 6, 1],
            sequence: [1, 1, 1, 6],
        },
        outputs: false,
    },
    {
        inputs: {
            array: [5, 1, 22, 25, 6, -1, 8, 10],
            sequence: [5, 1, 25, 22, 6, -1, 8, 10],
        },
        outputs: false,
    },
    {
        inputs: {
            array: [5, 1, 22, 25, 6, -1, 8, 10],
            sequence: [26],
        },
        outputs: false,
    },
    {
        inputs: {
            array: [5, 1, 22, 25, 6, -1, 8, 10],
            sequence: [1, 6, -1, 1],
        },
        outputs: false,
    },
];

export const checkTestCases = (solution) => {
    return () => {
        testCases.forEach((testCase) => {
            expect(solution(testCase.inputs.array, testCase.inputs.sequence)).toBe(testCase.outputs);
        });
    };
};

export default checkTestCases;
