export const testCases = [
    {
        inputs: {
            array: [12, 3, 1, 2, -6, 5, -8, 6],
            targetSum: 0,
        },
        outputs: [
            [-8, 2, 6],
            [-8, 3, 5],
            [-6, 1, 5],
        ],
    },
    {
        inputs: {
            array: [1, 2, 3],
            targetSum: 6,
        },
        outputs: [[1, 2, 3]],
    },
    {
        inputs: {
            array: [1, 2, 3],
            targetSum: 7,
        },
        outputs: [],
    },
    {
        inputs: {
            array: [8, 10, -2, 49, 14],
            targetSum: 57,
        },
        outputs: [[-2, 10, 49]],
    },
    {
        inputs: {
            array: [12, 3, 1, 2, -6, 5, 0, -8, -1],
            targetSum: 0,
        },
        outputs: [
            [-8, 3, 5],
            [-6, 1, 5],
            [-1, 0, 1],
        ],
    },
    {
        inputs: {
            array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
            targetSum: 33,
        },
        outputs: [],
    },
    {
        inputs: {
            array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
            targetSum: 32,
        },
        outputs: [[8, 9, 15]],
    },
    {
        inputs: {
            array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
            targetSum: 18,
        },
        outputs: [
            [1, 2, 15],
            [1, 8, 9],
            [2, 7, 9],
            [3, 6, 9],
            [3, 7, 8],
            [4, 5, 9],
            [4, 6, 8],
            [5, 6, 7],
        ],
    },
    {
        inputs: {
            array: [12, 3, 1, 2, -6, 5, 0, -8, -1, 6, -5],
            targetSum: 0,
        },
        outputs: [
            [-8, 2, 6],
            [-8, 3, 5],
            [-6, 0, 6],
            [-6, 1, 5],
            [-5, -1, 6],
            [-5, 0, 5],
            [-5, 2, 3],
            [-1, 0, 1],
        ],
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
