

// class UI {
// 	showAlert(message, className) {
// 		// create div
// 		const messageDiv = document.createElement('div');
// 		// Add classes
// 		messageDiv.className = `alert ${className}`;
// 		// messageDiv.className = 'alert alert-danger';

// 		// Add test
// 		messageDiv.appendChild(document.createTextNode(message));

// 		// Get elements
// 		const card = document.querySelector('.help');
// 		const heading = document.querySelector('.form');
// 		// Insert Alert
// 		card.insertBefore(messageDiv, heading);

// 		// Timeout after 3 sec
// 		setTimeout(function () {
// 			document.querySelector('.alert').remove();
// 		}, 3000);
// 	}

// 	clearFields() {
// 		document.querySelector('#first').value = '';
// 		document.querySelector('#email').value = '';
// 		document.querySelector('#password').value = '';
// 	}
// }
// const ui = new UI();

// document.getElementById('sign').addEventListener('submit', submitData);

// function submitData(e) {
	

// 	const name = document.querySelector('#first').value;
// 	email = document.querySelector('#email').value;
// 	password = document.querySelector('#password').value;
// 	if (
// 		name === '' ||
// 		email === '' ||
// 		password === ''
// 	) {
// 		// Error alert
// 		ui.showAlert('Please fill in all fields', 'error');
// 	} else {
// 		const users = {
// 			name,
// 			email,
// 			password
// 		}
// 		fetch('http://localhost:3000/users', {
// 				method: 'POST',
// 				headers: {
// 					'Content-type': 'application/json'
// 				},
// 				body: JSON.stringify(users)
// 			}).then((res) => res.json())
// 			.then((res) => {
// 				console.log(res)
// 				// alert('Go and login')
// 				ui.showAlert("A successfully sign up", "success")
// 				location.href = "login.html"
// 			});

// 	}
// 	e.preventDefault();
// }

const signUpForm = document.querySelector('#sign');
const signUpFirstName = document.querySelector('#first-name');
const signUpEmail = document.querySelector('#email');
const signUpPassword = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const spanFirstName = document.querySelector('#first-name-span');
const spanEmail = document.querySelector('#email-span');
const spanPass = document.querySelector('#password-span');
const spanConfirmPass = document.querySelector('#confirm-password-span');


const currApiEndpoint = 'http://localhost:3000/admin';

// eslint-disable-next-line consistent-return
signUpForm.addEventListener('click', (e) => {
  e.preventDefault();
  const formData = {};
  if (signUpFirstName.value) {
    formData.first_name = signUpFirstName.value;
  }
  if (signUpEmail.value) {
    formData.email = signUpEmail.value;
  }
  if (signUpPassword.value) {
    formData.password = signUpPassword.value;
  }
  if (confirmPassword.value) {
    formData.confirmpassword = confirmPassword.value;
  }

  // checks if input contains only letters
  function hasNumber(myString) {
    return /\d/.test(myString);
  }

  // checks if password is valid
  function isValidPass(s) {
    const re = /[a-z]\d|\d[a-z]/i;
    return re.test(s) && s.length > 3;
  }

  if (hasNumber(signUpFirstName.value)) {
    spanFirstName.innerHTML = 'firstname can only contain letters';
    spanFirstName.style.color = 'red';
    return false;
  }
  if (!isValidPass(signUpPassword.value)) {
    spanPass.innerHTML = 'password should contain letters and numbers';
    spanPass.style.color = 'red';
    return false;
  }
  if (confirmPassword.value !== signUpPassword.value) {
    spanConfirmPass.innerHTML = 'must match with password';
    spanConfirmPass.style.color = 'red';
    return false;
  }

  const fetchConfig = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  };
  fetch(currApiEndpoint, fetchConfig)
    .then(resp => resp.json())
    .then((data) => {
      if (data) {
        const user = JSON.stringify(data);
        localStorage.setItem('user', user);
        window.location = '../html/login.html';
      }
    })
    .catch(err => console.log(err));
});
