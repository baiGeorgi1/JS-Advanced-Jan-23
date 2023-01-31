function addItem() {
    const newItem = document.getElementById('newItemText').value;
    const addElem = document.getElementById('items');
    const newLi = document.createElement('li');
    //<li> wit text 
    newLi.textContent = newItem;
    //create btn in <li>
    const deleteButton = document.createElement('a');
    deleteButton.href = '#';
    deleteButton.textContent = '[Delete]';
    newLi.appendChild(deleteButton);
    //add addEventListener
    deleteButton.addEventListener('click', () => newLi.remove());
    //add 'newLi' to container
    addElem.appendChild(newLi);
}