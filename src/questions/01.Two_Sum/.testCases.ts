export type TestCases = {
    inputs: {
        array: number[];
        targetSum: number;
    };
    outputs: number[];
}[];

export const testCases: TestCases = [
    {
        inputs: {
            array: [5, 1, 22, 25, 6, -1, 8, 10],
            targetSum: 9,
        },
        outputs: [1, 8],
    },
];

export const checkTestCases = (solution: (array: number[], targetSum: number) => number[]): (() => void) => {
    return () => {
        testCases.forEach((testCase) => {
            expect(solution(testCase.inputs.array, testCase.inputs.targetSum)).toStrictEqual([...testCase.outputs]);
        });
    };
};

export default checkTestCases;
