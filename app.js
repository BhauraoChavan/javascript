let p=document.querySelector('p');
let loginForm = document.createElement('form');
loginForm.setAttribute('method', 'post');
loginForm.setAttribute('action', '/login');

let usernameLabel = document.createElement('label');
usernameLabel.setAttribute('for', 'username');
usernameLabel.textContent = 'Username: ';
loginForm.appendChild(usernameLabel);

let usernameInput = document.createElement('input');
usernameInput.setAttribute('type', 'text');
usernameInput.setAttribute('id', 'username');
usernameInput.setAttribute('name', 'username');
loginForm.appendChild(usernameInput);

let passwordLabel = document.createElement('label');
passwordLabel.setAttribute('for', 'password');
passwordLabel.textContent = 'Password: ';
loginForm.appendChild(passwordLabel);

let passwordInput = document.createElement('input');
passwordInput.setAttribute('type', 'password');
passwordInput.setAttribute('id', 'password');
passwordInput.setAttribute('name', 'password');
loginForm.appendChild(passwordInput);

let submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Login';
loginForm.appendChild(submitButton);

document.body.appendChild(loginForm);