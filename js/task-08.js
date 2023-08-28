const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', onLogin);

function onLogin(evt) {
    evt.preventDefault(); 

    const email = loginForm.elements.email.value;
    const password = loginForm.elements.password.value;

    if (email === '' || password === '') {
    alert('All fields must be filled out');
    } else {
    const formData = {
      email: email,
      password: password
    };

    console.log(formData);

    loginForm.reset();
}};

