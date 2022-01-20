// add a link
function addLink() {

	let movieName = document.getElementById("movieName").value;
	let movieUrl = document.getElementById("movieUrl").value;

	let movieObj = {};

	movieObj["name"] = movieName;
	movieObj["url"] = movieUrl;

	displayLink(movieObj);

}

// writes the link to the page
function displayLink(movieObj) {

	let ol = document.getElementById("movieList");
	let li = document.createElement("li");


	// find any existing links
	let nextLinkId = ol.getElementsByTagName("li", ).length + 1;

	let liValue = `<span>${movieObj["name"]}</span>---<span><a href="${movieObj["url"]}" target="_blank">${movieObj["url"]}</span>`

	li.classList.add("list-group-item");
	li.setAttribute("data-id", nextLinkId);
	li.innerHTML = liVAlue;

	// add the li element to the page
	ol.appendChild(li);
}