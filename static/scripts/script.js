const terms = document.querySelector("#terms")
const form = document.querySelector("form");
const fullTermsAndCons = document.querySelector(".terms")

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