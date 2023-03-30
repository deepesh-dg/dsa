function tournamentWinner(competitions, results) {
    const map = new Map();
    for (let a of competitions) {
        for (let b of a) {
            map.set(b, 0);
        }
    }

    for (let i = 0; i < results.length; i++) {
        if (results[i] == 0) {
            let val = map.get(competitions[i][1]);
            map.set(competitions[i][1], val + 3);
        } else {
            let val = map.get(competitions[i][0]);
            map.set(competitions[i][0], val + 3);
        }
    }
    const max = [...map.entries()].reduce((accumulator, element) => {
        return element[1] > accumulator[1] ? element : accumulator;
    });

    return max[0];
}

export default tournamentWinner;
