function addItem() {
    const buttonValue = document.getElementById('newItemText');
    const items = document.getElementById('items');

    const newItem = document.createElement('li');
    newItem.textContent = buttonValue.value;

    const deleteButton = document.createElement('a');
    deleteButton.textContent = '[Delete]';
    deleteButton.href = '#';
    deleteButton.addEventListener('click', deleteElement);

    function deleteElement(ev) {
        const parent = ev.target.parentNode;
        parent.remove()
    }

    newItem.appendChild(deleteButton);

    items.appendChild(newItem);
    buttonValue.value = '';
}