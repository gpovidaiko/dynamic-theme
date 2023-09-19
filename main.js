const brightnessToggleButton = document.getElementById("brightness__toggle__button");
const brightnessIcon = document.querySelector("#brightness__toggle__button i");
const body = document.querySelector("body");

function getUAPreference(value) {
	return window.matchMedia(`(prefers-color-scheme: ${value})`).matches;
}

brightnessToggleButton.addEventListener("click", () => {
	if (scheme === "light") {
		scheme = "dark";
	} else {
		scheme = "light";
	}

	body.style.transition = "all .25s ease-in-out";
	updateColorScheme();
});

function updateColorScheme() {
	body.classList.toggle("light", scheme === "light");

	brightnessIcon.classList.toggle("fa-moon", scheme === "light");
	brightnessIcon.classList.toggle("fa-sun", scheme === "dark");
}

let scheme = "dark";

if (!getUAPreference(scheme)) {
	scheme = "light";
}

updateColorScheme();
