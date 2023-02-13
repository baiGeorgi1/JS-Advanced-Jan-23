function validate() {
    const change = document.getElementById('email');
    change.addEventListener('change', (event) => {
        const token = /^[\w\.]+@([\w]+\.)+[\w]+$/g;
        if (!token.test(event.target.value)) {
            event.target.classList = 'error';
        } else {
            event.target.className = '';
        }
    });
}