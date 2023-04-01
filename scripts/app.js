/* site I tested the req on -> https://funnimonkedev.github.io/Site/10-minutes-till-dawn/Build/10MinutesTillDawnWebGL.json */
const SiteToPull = "<your raw webpage url here>";
const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
	console.log(this.responseText);
}
xhttp.open("GET", SiteToPull);
xhttp.send();
