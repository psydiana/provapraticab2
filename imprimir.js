function displaySingleRandomColor(colors) {
  const totalColors = colors.length;
  
  if (totalColors < 10) {
    console.error("É necessário ter no mínimo 10 cores.");
    return;
  }

let count = 0;
  let selectedColor = null
  
  while (count < 10) {
    const randomIndex = Math.floor(Math.random() * totalColors);
     const color = colors[randomIndex];
    
      if (count === Math.floor(Math.random() * 10)) {
        selectedColor = color;
    }
    
    count ++;
  }

  console.log('Cor aleatória final: ${selectedColor}');
}

displaySingleRandomColor(colors);
