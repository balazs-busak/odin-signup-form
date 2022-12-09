//Need to find why not working, id? class?

// const passwordInput = document.getElementById('password');
// const togglePasswordButton = document.getElementById('toggle-password');

// togglePasswordButton.addEventListener('click', togglePassword);

// function togglePassword() {
//   if (passwordInput.type === 'password') {
//     passwordInput.type = 'text';
//     togglePasswordButton.textContent = 'Hide password';
//     togglePasswordButton.setAttribute('aria-label',
//       'Hide password.');
//   } else {
//     passwordInput.type = 'password';
//     togglePasswordButton.textContent = 'Show password';
//     togglePasswordButton.setAttribute('aria-label',
//       'Show password as plain text. ' +
//       'Warning: this will display your password on the screen.');
//   }
// }


function onChange() {
  const password = document.querySelector('input[name=password]');
  const confirm = document.querySelector('input[name=confirm-password]');
  if (confirm-password.value === password.value) {
    confirm.setCustomValidity('');
  } else {
    confirm.setCustomValidity('Passwords do not match');
  }
}