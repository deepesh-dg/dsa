function tournamentWinner(competitions, results) {
    let myTeams = {};

    for (let i = 0; i < competitions.length; i++) {
        for (let j = 0; j < competitions[i].length; j++) {
            if (!(competitions[i][j] in myTeams)) {
                myTeams[competitions[i][j]] = 0;
            }
        }

        if (results[i] === 0) {
            myTeams[competitions[i][1]] += 3;
        } else {
            myTeams[competitions[i][0]] += 3;
        }
    }

    const max = Object.entries(myTeams).reduce((accumulator, element) => {
        return element[1] > accumulator[1] ? element : accumulator;
    });

    return max[0];
}

export default tournamentWinner;
