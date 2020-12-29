const colorOne = document.getElementById('color1');
const colorTwo = document.getElementById('color2');
const colorContainer = document.getElementById('container');

console.log(colorOne.value, colorTwo.value);

colorOne.addEventListener('change', () => {
    generateColors(colorOne.value, colorTwo.value);
});
colorTwo.addEventListener('change', () => {
    generateColors(colorOne.value, colorTwo.value);
});

const generateColors = (color1, color2) => {
    // remove child nodes
    colorContainer.innerHTML = '';

    // get array of colors from chroma.js
    const colorPalette = chroma.scale([color1, color2]).mode('lch').colors(6);

    colorPalette.forEach(color => {
        const colorItem = document.createElement('div');
        colorItem.classList.add('container-item');
        colorItem.style.background = color;
        colorContainer.appendChild(colorItem);
    });
}

generateColors(colorOne.value, colorTwo.value);
