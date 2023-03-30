function tournamentWinner(competitions, results) {
    let point = {};

    for (let i = 0; i < competitions.length; i++) {
        for (let j = 0; j < 2; j++) {
            if (competitions[i][results[i] === 0 ? 1 : 0] in point) {
                point[competitions[i][results[i] === 0 ? 1 : 0]] += 3;
            } else {
                point[competitions[i][results[i] === 0 ? 1 : 0]] = 3;
            }
        }
    }

    const max = Object.entries(point).reduce((accumulator, element) => {
        return element[1] > accumulator[1] ? element : accumulator;
    });

    return max[0];
}

export default tournamentWinner;
