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

	let linkId = 1;
	if (movieLinks.length > 0) {

		// Step 1- use map to grab array of ids
		let ids = movieLinks.map(function (obj) {
			return obj.id
		})

		// Step 2- find the max value in the array
		let maxId = Math.max.apply(null, ids);

		linkId = maxId + 1;

	}

	// generate the next id for the link
	// create obj to store links
	let movieObj = {};

	movieObj["name"] = movieName;
	movieObj["url"] = movieUrl;
	movieObj["id"] = linkId;

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

	let liValue = `<span>${movieObj["name"]}</span>---<span><a href="${movieObj["url"]}" target="_blank">${movieObj["url"]}</a></span> ${delButton}`

	li.classList.add("list-group-item");
	li.setAttribute("data-id", movieObj["id"]);
	li.innerHTML = liValue;

	// add the li element to the page
	ol.appendChild(li);
}

function delLink(button) {

	let movieLinks = JSON.parse(localStorage.getItem("movieLinks")) || [];



	let li = button.parentElement;
	let linkId = li.getAttribute("data-id");
	li.remove();

	// remove an item from the movieLink array
	// Step 1- find the index of the item in the array
	movieIndex = movieLinks.findIndex(obj => obj.id == linkId);
	movieLinks.splice(movieIndex, 1);

	// Step 2- reset local storage with updated obj
	localStorage.setItem("movieLinks", JSON.stringify(movieLinks));

}