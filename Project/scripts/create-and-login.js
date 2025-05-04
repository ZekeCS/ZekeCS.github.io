document.addEventListener('DOMContentLoaded', () => {
    // add eventlistener to create acct btn on login page
    const createAccountBtn = document.querySelector('#create-account-btn');
    if (createAccountBtn) {
        createAccountBtn.addEventListener('click', () => {
            window.location.href = 'create_account.html';
        });
    }

    //add event listener to the create acct button
    const createAccount = document.querySelector('#createAccount');
    if (createAccount) {
        createAccount.addEventListener('click', (e) => {
            e.preventDefault();
            const form = createAccount.closest('form');
            const password = form.querySelector('#password');
            const reEnteredPassword = form.querySelector('#re-entered-password');
            // had to add validtion for password/re-enter password
            if (form.checkValidity()) {
                if (password.value !== reEnteredPassword.value) {
                    alert("Passwords do not match. Please try again.");

                } else {
                    window.location.href = 'login.html';
                }
            } else {
                alert("Please fill in all required fields.");
            }

        });
    }
});

document.addEventListener('DOMContentLoaded', () => {

    const loginButton = document.querySelector('button[type="submit"]');
    // more validation and reditect to client portal after login
    if (loginButton) {
        loginButton.addEventListener('click', (e) => {
            e.preventDefault();
            const form = loginButton.closest('form');
            const username = document.getElementById('username');
            const password = document.getElementById('password');
            if (username.value === "" || password.value === "") {
                alert("Please enter both username and password.");
            } else {
                window.location.href = 'client_portal.html';
            }
        });
    }
});