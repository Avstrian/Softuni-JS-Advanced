function addItem() {
    const buttonValue = document.getElementById('newItemText');
    const items = document.getElementById('items');

    const newItem = document.createElement('li');
    newItem.textContent = buttonValue.value;
    items.appendChild(newItem);
    buttonValue.value = '';
}