const terms = document.querySelector("#terms")
const form = document.querySelector("form");
const fullTermsAndCons = document.querySelector(".terms")

// immediately unrequiring the form in HTML as soon as the script is enabled
const unrequire = () => {
	document.getElementById("fname").removeAttribute("required");
	document.getElementById("lname").removeAttribute("required");
	document.getElementById("email").removeAttribute("required");
	document.getElementById("password").removeAttribute("required");
	document.getElementById("confirmpassword").removeAttribute("required");
	document.getElementById("discipline").removeAttribute("required");
	document.getElementById("terms").removeAttribute("required");
}

unrequire()

form.addEventListener("submit", (event) => {
	const inputFields = event.target.querySelectorAll("input");
	const errorDiv = event.target.querySelector("div#error");

	const password = form.password.value;
	const confirmpassword = form.confirmpassword.value;
	const passwordinput = document.querySelector("#password");
	const confirmpasswordinput = document.querySelector("#confirmpassword");

	event.preventDefault();

	if (!inputFields[0].value || !inputFields[1].value) {
		errorDiv.classList.add("emptyinput");
		errorDiv.innerHTML = "<span>Error:</span> Input is empty.";
		inputFields.forEach(element => {
			element.classList.add("wronginput");
		});
	} 
	
	else if (password != confirmpassword) {
		passwordinput.classList.add("passworderror");
		confirmpasswordinput.classList.add("passworderror");
		errorDiv.classList.add("emptyinput");
		errorDiv.innerHTML = "Match Passwords.";
		return false;
	} 
	
	else if (terms.checked == false) {
		fullTermsAndCons.classList.add("error");
	} 
	
	else {
		event.target.submit();
	}
});