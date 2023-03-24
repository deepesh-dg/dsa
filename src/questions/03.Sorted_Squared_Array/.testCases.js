export const testCases = [
    {
        inputs: {
            array: [1, 2, 3, 5, 6, 8, 9],
        },
        outputs: [1, 4, 9, 25, 36, 64, 81],
    },
    {
        inputs: {
            array: [-1],
        },
        outputs: [-1],
    },
    {
        inputs: {
            array: [0],
        },
        outputs: [0],
    },
    {
        inputs: {
            array: [0],
        },
        outputs: [0],
    },
    {
        inputs: {
            array: [-1, 1],
        },
        outputs: [1, 1],
    },
    {
        inputs: {
            array: [-2, -1],
        },
        outputs: [1, 4],
    },
    {
        inputs: {
            array: [-1, 0, 5, 11],
        },
        outputs: [1, 0, 25, 121],
    },
    {
        inputs: {
            array: [-10, -5, 0, 5, 10],
        },
        outputs: [0, 25, 25, 100, 100],
    },
    {
        inputs: {
            array: [-7, -3, 1, 9, 22, 30],
        },
        outputs: [1, 9, 49, 81, 484, 900],
    },
    {
        inputs: {
            array: [-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20],
        },
        outputs: [0, 0, 1, 1, 1, 4, 4, 9, 169, 361, 400, 2500],
    },
    {
        inputs: {
            array: [-1, -1, 2, 3, 3, 3, 4],
        },
        outputs: [1, 1, 4, 9, 9, 9, 16],
    },
    {
        inputs: {
            array: [-4, -2],
        },
        outputs: [4, 16],
    },
];

export const checkTestCases = (solution) => {
    return () => {
        testCases.forEach((testCase) => {
            expect(solution(testCase.inputs.array)).toStrictEqual([...testCase.outputs]);
        });
    };
};

export default checkTestCases;
