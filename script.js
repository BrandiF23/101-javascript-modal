window.addEventListener("load", function() {
	var addNoteButton = document.getElementById("add-note");
	addNoteButton.addEventListener("click", displayModal);

	function displayModal() {
		var modalElements = document.getElementsByClassName("modal");
		// console.log(modalElements.length);
		for (var i = 0; i < modalElements.length; i++) {
			// console.log("Starting on index " + i + " of modalElements");
			modalElements[i].style.display = "block";
		}
	}

	var closeWindow = document.getElementById("close");
	closeWindow.addEventListener("click", hideModal);

	function hideModal() {
		var modalElements = document.getElementsByClassName("modal");
		for (var i = 0; i < modalElements.length; i++) {
				modalElements[i].style.display = "none";
		}
	}
});