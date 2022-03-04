const terms = document.querySelector("#terms")

const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
  event.preventDefault()
	if(terms.checked == true){
		event.target.submit()
	}
	else{
		// form.classList.add("error")
        console.log("tick the box baby")
	}
});