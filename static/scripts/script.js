// const terms = document.querySelector("#terms")
const form = document.querySelector("form");
// const fullTermsAndCons = document.querySelector(".terms")

// form.addEventListener("submit", (event) => {
//   event.preventDefault()
// 	if(terms.checked == true){
// 		event.target.submit()
// 	}
// 	else{
// 		fullTermsAndCons.classList.add("error")
//         console.log("tick the box baby")
// 	}
// });

// form.addEventListener("submit", (event) => {
// 	const password = form.password.value;
// 	const confirmpassword = form.confirmpassword.value;

// 	const passwordinput = document.querySelector("#password");
// 	const confirmpasswordinput = document.querySelector("#confirmpassword");

// 	event.preventDefault()

// 	// If Not same return False.    
// 	if (password != confirmpassword) {
// 		passwordinput.classList.add("passworderror");
// 		confirmpasswordinput.classList.add("passworderror");
// 		return false;
// 	}
// 	// If same return True.
// 	else {
// 		passwordinput.classList.remove("passworderror");
// 		confirmpasswordinput.classList.remove("passworderror");
// 		return true;
// 	}
// })

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const inputs = event.target.querySelectorAll("input");
	const errorLabel = event.target.querySelector("label#error");

	if (!inputs[0].value || !inputs[1].value) {
        errorLabel.classList.add("errorLabel");
		errorLabel.innerHTML = "<span>Error:</span> Input is empty.";
		inputs.forEach(element => {
			element.classList.add("fouteInput");
		});
	} 
	else {
		event.target.submit();
	}
});