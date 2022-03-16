const gettingStarted = document.querySelector(".gettingstarted");
const welcomeLogo = document.querySelector(".welcomelogo");
const welcomeButton = document.querySelector(".welcomebutton");

welcomeButton.addEventListener("click", ()=> {
	welcomeLogo.classList.add("hide");
    welcomeButton.classList.add("hide");
	gettingStarted.classList.add("show");
})
