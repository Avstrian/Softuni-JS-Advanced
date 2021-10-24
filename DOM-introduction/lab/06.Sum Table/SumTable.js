function sumTable() {
    const rows = document.querySelectorAll('table tr');
    const sum = document.getElementById('sum');

    let result = 0;

    for (i = 1; i < rows.length - 1; i++) {
        result += Number(rows[i].lastElementChild.textContent);
    }

    sum.textContent = result;

}