function addItem() {
    const text = document.getElementById('newItemText').value;
    const valueText = document.querySelector('input[id="newItemValue"]').value;
    if (text !== '' && valueText !== '') {
        const menu = document.getElementById('menu');
        let options = document.createElement('option');
        options.text = text;
        options.value = valueText;
        menu.appendChild(options);
        document.getElementById('newItemText').value = '';
        document.querySelector('input[id="newItemValue"]').value = '';
    }
}