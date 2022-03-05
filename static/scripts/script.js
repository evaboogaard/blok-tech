const terms = document.querySelector("#terms")
const form = document.querySelector("form")
const fullTermsAndCons = document.querySelector(".terms")

form.addEventListener("submit", (event) => {
  event.preventDefault()
	if(terms.checked == true){
		event.target.submit()
	}
	else{
		fullTermsAndCons.classList.add("error")
        console.log("tick the box baby")
	}
});