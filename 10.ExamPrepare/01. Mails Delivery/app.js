function solve() {
    const recipient = document.getElementById('recipientName');
    const title = document.getElementById('title');
    const message = document.getElementById('message');
    const ulItem = document.getElementById('list');
    const sendCont = document.querySelector(".sent-list");
    const deleted = document.querySelector('.delete-list');


    document.getElementById('add').addEventListener('click', addFunc);
    document.getElementById('reset').addEventListener('click', resetFunc);

    function addFunc(event) {
        event.preventDefault();
        if (recipient.value === ''
            || title.value == ''
            || message.value === '') {
            return;
        }
        const li = genareteEl('li', '', ulItem, { id: 'list' }); ///check after judje
        const h1 = genareteEl('h4', `Title: ${title.value}`, li);
        const h2 = genareteEl('h4', `Recipient Name: ${recipient.value}`, li);
        const span = genareteEl('span', `${message.value}`, li);
        const btnCont = genareteEl('div', '', li, { id: 'list-action' });
        const btn1 = genareteEl('button', 'Send', btnCont, { type: 'submit', id: 'send' });
        btn1.addEventListener('click', sentFunc);
        const btn2 = genareteEl('button', 'Delete', btnCont, { id: 'delete', type: 'submit' });
        btn2.addEventListener('click', deleteFunc);

        document.getElementById('recipientName').value = '';
        document.getElementById('title').value = '';
        document.getElementById('message').value = '';
    }

    function resetFunc(event) {
        event.preventDefault();
        document.getElementById('recipientName').value = '';
        document.getElementById('title').value = '';
        document.getElementById('message').value = '';

    }

    function sentFunc(event) {
        const item = event.target.parentElement.parentElement;
        const li = genareteEl('li', '', sendCont);
        const span1 = genareteEl('span', `To: ${recipient.value}`, li);
        const span2 = genareteEl('span', `Title: ${title.value}`, li);
        const divCont = genareteEl('div', '', li, { class: 'btn' });
        const btnDel = genareteEl('button', 'Delete', divCont, { class: 'delete', type: 'submit' });
        btnDel.addEventListener('click', deleteFunc);
        item.remove();


    }
    function deleteFunc(event) {
        const parent = event.target.parentElement.parentElement;
        const li = genareteEl('li', '', deleted, { class: 'delete-list' });
        genareteEl('span', `To: ${recipient.value}`, li);
        genareteEl('span', `Title: ${title.value}`, li);
        parent.remove();

    }

    function genareteEl(typeEl, content, parent, attributes) { // attributes: {class: 'something'} 
        // typeEl = 'li' , 'button' , 'h4' // content = '';// attributes = {}? = undefined
        const el = document.createElement(typeEl);
        el.textContent = content;
        if (attributes) {
            // Object.assign(el, attributes); !!!other option
            for (const prop in attributes) {
                el.setAttribute(prop, attributes[prop]);
            }
        }

        if (parent) {
            parent.appendChild(el);
        }
        return el;
    }
}
solve();