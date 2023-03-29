export const testCases = [
    {
        inputs: {
            array: [5, 1, 22, 25, 6, -1, 8, 10],
            targetSum: 9,
        },
        outputs: [1, 8],
    },
    {
        inputs: {
            array: [3],
            targetSum: 3,
        },
        outputs: [],
    },
    {
        inputs: {
            array: [],
            targetSum: 10,
        },
        outputs: [],
    },
    {
        inputs: {
            array: [2.5, 3, 6.5, 9, 4.5],
            targetSum: 7,
        },
        outputs: [2.5, 4.5],
    },
    {
        inputs: {
            array: [1, 2, 3, 4, 5],
            targetSum: -2,
        },
        outputs: [],
    },
    {
        inputs: {
            array: [-3, -1, 0, 3, 5, 9],
            targetSum: 0,
        },
        outputs: [-3, 3],
    },
];

export const checkTestCases = (solution) => {
    return () => {
        testCases.forEach((testCase) => {
            expect(solution(testCase.inputs.array, testCase.inputs.targetSum)).toStrictEqual([...testCase.outputs]);
        });
    };
};

export default checkTestCases;
