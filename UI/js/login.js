
// Event Listeners for Details Submitted
document.getElementById('submit').addEventListener('click', function(e) {

	// Get form values
	let email = document.querySelector('#email').value;
	console.log(email)
	let password = document.querySelector('#password').value;
	console.log(password)

fetch('http://localhost:3000/admin?email='+ email + '&password=' + password)
.then((response) => response.json())
.then((res) => {
	// console.log(res);
	if (res.length === 1) {
		location.href = "admin.html";		
	}else {
		alert("never")
	}
});
	 e.preventDefault();
});



