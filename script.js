// get refereneces to the two color inputs
const colorOne = document.getElementById('color1');
const colorTwo = document.getElementById('color2');
// get reference to the color container
const colorContainer = document.getElementById('container');

// add event listeners to our color inputs to fire function when we change color
colorOne.addEventListener('change', () => {
	generateColors(colorOne.value, colorTwo.value);
});
colorTwo.addEventListener('change', () => {
	generateColors(colorOne.value, colorTwo.value);
});

// create generateColors function
const generateColors = (color1, color2) => {
	// remove any previous child nodes
	colorContainer.innerHTML = '';

	// get array of colors from chroma.js
	const colorPalette = chroma.scale([color1, color2]).colors(6);

	colorPalette.forEach(color => {
		// create a div for each color
		const colorItem = document.createElement('div');
		// add a class to each div
		colorItem.classList.add('container-item');
		// give each div a background color
		colorItem.style.background = color;
		// append the div to the container
		colorContainer.appendChild(colorItem);
	});
};

// call the generateColors function initially
generateColors(colorOne.value, colorTwo.value);
