function deleteByEmail() {
    const input = document.querySelector('input[name="email"]');
    const customers = Array
        .from(document.querySelector('tbody').children)
        .filter(r => r.children[1].textContent === input.value);


    customers.forEach(r => r.remove());

    document.getElementById('result').textContent = customers.length > 0 ? 'Deleted.' : 'Not found.';
}