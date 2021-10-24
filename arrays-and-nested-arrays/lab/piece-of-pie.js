function keyPies(pies, startPie, endPie) {
    const start = pies.indexOf(startPie);
    const end = pies.indexOf(endPie); 

    const sortedPies = pies.slice(start, end + 1);
    return sortedPies;
}