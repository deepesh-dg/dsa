function nonCunstructibleChange(coins) {
    if (!coins.length) return 1;

    coins.sort((p, n) => p - n);
    let minChange = 0;

    for (let i = 0; i < coins.length; i++) {
        if (coins[i] > minChange + 1) break;

        minChange += coins[i];
    }

    return minChange + 1;
}

export default nonCunstructibleChange;
