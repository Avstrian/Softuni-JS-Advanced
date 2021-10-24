function addItem() {
    const text = document.getElementById('newItemText');
    const value = document.getElementById('newItemValue');
    const menu = document.getElementById('menu');

    const optionElement = document.createElement('option')
    optionElement.textContent = text.value
    optionElement.value = value.value;

    menu.appendChild(optionElement);

    text.value = '';
    value.value = '';
}