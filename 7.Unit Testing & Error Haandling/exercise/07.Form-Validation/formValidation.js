function validate() {
    const usernameField = document.getElementById('username');
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    const confPass = document.getElementById('confirm-password');
    const companyBox = document.getElementById('company');
    const companyInfo = document.getElementById('companyInfo');
    const valid = document.getElementById('valid');
    const companyId = document.getElementById('companyNumber');
    let btn = document.getElementById('submit');
    let isCompany = true;


    companyBox.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            companyInfo.style.display = 'block';
            isCompany = false;
        }
    });
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        const userToken = /^[a-zA-Z0-9]+$/g;
        const passToken = /[^a-zA-Z0-9_]+/g;
        const emailToken = /^[\w\.]+@([\w]+\.)+[\w]+$/g;
        const companyNum = /[0-9]+/g;
        let isUser = false;
        let isEmail = false;
        let isPass = false;


        if (usernameField.value.length < 3
            || usernameField.value.length > 20
            || !userToken.test(usernameField.value)) {
            usernameField.style.borderColor = 'red';
        } else {
            usernameField.style.borderColor = '';
            isUser = true;
        }
        if (!emailToken.test(emailField.value)) {
            emailField.style.borderColor = 'red';
        } else {
            emailField.style.borderColor = '';
            isEmail = true;
        }
        if (passwordField.value.length < 5
            || passwordField.value.length > 15
            || passToken.test(passwordField.value)) {
            passwordField.style.borderColor = 'red';
            confPass.style.borderColor = 'red';
        } else {
            passwordField.style.borderColor = '';
            if (confPass.value !== passwordField.value) {
                confPass.style.borderColor = 'red';
                passwordField.style.borderColor = 'red';
            } else {
                confPass.style.borderColor = '';
                passwordField.style.borderColor = '';
                isPass = true;
            }
        }
        if (!isCompany) {
            if (companyId.value < 1000
                || companyId.value > 9999
                || companyNum.test(companyId)) {
                companyId.style.borderColor = 'red';
                isCompany = false;
            } else {
                companyId.style.borderColor = '';
                isCompany = true;
            }
        }

        if (isUser && isEmail && isPass && isCompany) {
            valid.style.display = 'block';
        } else {
            valid.style.display = 'none';
        }
    });
}


// If the "Is company?" checkbox is checked, the CompanyInfo fieldset should become visible and the Company Number field must also be validated, if it isn’t checked the Company fieldset should have the style "display: none;" and the value of the Company Number field shouldn’t matter.
// •	The Company Number field must be a number between 1000 and 9999.
// •	Use addEventListener() function to attach an event listener for the "change" event to the checkbox.
// Every field with an incorrect value when the [Submit] button is pressed should have the following style applied border-color: red;, alternatively, if it’s correct it should have style border: none;. If there are required fields with an incorrect value when the [Submit] button is pressed, the div with id="valid" should become hidden ("display: none;"), alternatively if all fields are correct the div should become visible.
