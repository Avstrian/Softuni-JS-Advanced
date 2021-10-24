function sortArray(ar, sort) {
    sort == 'asc' ? ar.sort((a, b) => a - b) : ar.sort((a, b) => b - a);
    return ar
}
