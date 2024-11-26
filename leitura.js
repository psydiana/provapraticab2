const colorElements = document.querySelectorAll("table tr td:nth-child(2)");

const colors = [];

colorElements.forEach(colorElement => {
                      const colorName = colorElement.textContent.trim().toLowerCase();
  if (colorName) {
    colors.push(colorName);
  }
});

console.log(colors);
