// get links from local storage
function getLinks() {

	let movieLinks = JSON.parse(localStorage.getItem("movieLinks")) || [];

	// loop through movieLinks JSON array and add them to movieObj 
	for (let i = 0; i < movieLinks.length; i++) {
	
		let movieObj = movieLinks[i];

		displayLink(movieObj);
	}

	// write links to the page
}

// add a link
function addLink() {

	// grab movieObjs in local storage
	let movieLinks = JSON.parse(localStorage.getItem("movieLinks")) || [];

	let movieName = document.getElementById("movieName").value;
	let movieUrl = document.getElementById("movieUrl").value;

	let movieObj = {};

	movieObj["name"] = movieName;
	movieObj["url"] = movieUrl;

	// add the link to local storage
	movieLinks.push(movieObj);
	localStorage.setItem("movieLinks", JSON.stringify(movieLinks));

	displayLink(movieObj);

}

// writes the link to the page
function displayLink(movieObj) {

	let ol = document.getElementById("movieList");
	let li = document.createElement("li");


	// find any existing links
	let nextLinkId = ol.getElementsByTagName("li", ).length + 1;

	let delButton = `<button onclick="delLink(this)" class="btn btn-danger" type="button">Delete</button>`

	let liValue = `<span>${movieObj["name"]}</span>---<span><a href="${movieObj["url"]}" target="_blank">${movieObj["url"]}${delButton}</span>`

	li.classList.add("list-group-item");
	li.setAttribute("data-id", nextLinkId);
	li.innerHTML = liValue;

	// add the li element to the page
	ol.appendChild(li);
}