const allArtists = document.querySelectorAll(`.animate`);

const options = {
  rootMargin: `20px`,
  treshold: 0.5,
};

function callbackFunction(entries) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add(`fade`);
    }
  });
}

const observer = new IntersectionObserver(callbackFunction, options);

// over alle elementen heenlopen
allArtists.forEach((item) => {
  // het element observeren
  observer.observe(item);
});