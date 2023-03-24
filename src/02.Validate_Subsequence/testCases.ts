export type TestCases = {
    inputs: {
        array: number[];
        sequence: number[];
    };
    outputs: boolean;
}[];

export const testCases: TestCases = [
    {
        inputs: {
            array: [5, 1, 22, 25, 6, -1, 8, 10],
            sequence: [1, 6, -1, 10],
        },
        outputs: true,
    },
];

export const checkTestCases = (solution: (array: number[], sequence: number[]) => boolean): (() => void) => {
    return () => {
        testCases.forEach((testCase) => {
            expect(solution(testCase.inputs.array, testCase.inputs.sequence)).toBe(testCase.outputs);
        });
    };
};

export default checkTestCases;
