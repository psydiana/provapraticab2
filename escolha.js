@param {Array} colors

function displayRandomColors(colors) {
  const totalColors = colors.length;
  if (totalColors < 10) {
    console.error("É necessário ter no mínimo 10 cores.");
    return;
  }

let count = 0;
  while (count < 10) {
    const randomIndex = Math.floor(Math.random() * totalColors);
    const color = colors[randomIndex];
    console.log('Cor ${count + 1}: ${color}');
    count++;
  }
}

displayRandomColors(colors);
