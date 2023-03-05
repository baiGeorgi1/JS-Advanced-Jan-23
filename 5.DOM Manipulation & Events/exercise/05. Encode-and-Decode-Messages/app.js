function encodeAndDecodeMessages() {
    let btn = Array.from(document.querySelectorAll('main button'));
    let message = Array.from(document.querySelectorAll('main textarea'));
    const encode = btn[0].addEventListener('click', encoding);
    const decode = btn[1].addEventListener('click', decoding);

    function encoding(event) {
        let sendBox = event.target.parentElement;
        let send = sendBox.querySelector('textarea').value;
        let coded = '';
        for (let i = 0; i < send.length; i++) {
            let letter = send[i].charCodeAt() + 1;
            let newLetter = String.fromCharCode(letter);
            coded += newLetter;
        }
        message[1].value = coded;
        message[0].value = '';
    }
    function decoding() {
        let received = message[1].value;
        let decoded = '';
        for (let i = 0; i < received.length; i++) {
            let letter = received[i].charCodeAt() - 1;
            let newLetter = String.fromCharCode(letter);
            decoded += newLetter;
        }
        message[1].value = decoded;
    }
}