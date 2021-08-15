document.getElementById('login-submit').addEventListener('click', function() {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // check email and password
    if (userEmail == 'shakib2021@gmail.com' && userPassword == 'secret') {
        window.location.href = 'login/index.html';
    } else {
        alert("Please Enter Your Real Gmail and Password");
    }
});