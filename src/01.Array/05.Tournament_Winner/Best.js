function tournamentWinner(competitions, results) {
    const leader = { score: -Infinity, name: "" };
    const scoreboard = {};

    for (let i = 0; i < competitions.length; i++) {
        const winnerIdx = results[i] === 0 ? 1 : 0;
        const winner = competitions[i][winnerIdx];

        if (winner in scoreboard) scoreboard[winner] += 3;
        else scoreboard[winner] = 3;

        if (leader.score < scoreboard[winner]) {
            leader.name = winner;
            leader.score = scoreboard[winner];
        }
    }

    return leader.name;
}

export default tournamentWinner;
