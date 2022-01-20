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
}