function validate() {
    let input = document.getElementById('email');
    let email = document.querySelector('#email').value;
    input.addEventListener('change', changeEvent);

    function changeEvent(event) {
        let regex = /([a-z]+@[a-z]+.[a-z]+)/g;
        let text = event.target.value;
        if (!regex.test(text)) {
            event.target.classList = 'error';
        } else {
            event.target.classList = '';
            event.target.style = 'none'
        }
    }
}






