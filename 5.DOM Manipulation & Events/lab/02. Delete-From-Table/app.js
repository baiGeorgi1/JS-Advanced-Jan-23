function deleteByEmail() {
    const element = document.querySelector('label input').value;
    const table = Array.from(document.querySelectorAll('#customers tbody tr'))
    let deleted = false;
    for (const row of table) {
        let col = row.children[1];
        if (col.textContent == element) {
            row.remove();
            deleted = true;
            document.querySelector('label input').value = '';
        }
    }

    // short solve 
    //const match = table.find(row =>row.children[1].textContent == element);
    document.querySelector('#result').textContent = deleted ? 'Deleted.' : 'Not found.';
}