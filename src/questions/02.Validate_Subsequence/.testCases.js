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
            sequence: [1, 6, 22, -1, 10],
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
