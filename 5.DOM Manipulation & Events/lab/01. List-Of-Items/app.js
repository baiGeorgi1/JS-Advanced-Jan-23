function addItem() {
    const item = document.getElementById('newItemText').value;
    const newLi = document.createElement('li');
    newLi.textContent = item;
    const list = document.getElementById('items');
    list = document.appendChild(newLi);

    console.log(newLi);
}