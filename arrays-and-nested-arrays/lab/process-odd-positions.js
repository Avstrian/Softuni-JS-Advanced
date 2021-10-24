const oddNumbers = (numbers) => numbers
    .filter((v, index) => index % 2 == 1)
    .map(x => x * 2)
    .reverse()
    .join(' ');