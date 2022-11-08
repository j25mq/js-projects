const umbrella = {
	color: "red",
	isOpen: false,
	isClosed: false, 
	open: function () {
		if (umbrella.isOpen === true) {
			return "The umbrella is already opened.";
		} else {
			umbrella.isOpen = true;
			return "Julia opens the umbrella.";
		}
	}
	close: function() {
		if (umbrella.isOpen === true) {
			umbrella.isOpen = false;
			return "Julia closes the umbrella";
		} else {
			return "The umbrella is already closed.";
		}
	}
}

umbrella.isOpen;
umbrella.open();
umbrella.isOpen;
umbrella.isClosed;
umbrella.close();
umbrella.isClosed;