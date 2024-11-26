//Escolhe todos os elementos da tabela com os nomes das cores
const colorElements = document.querySelectorAll("table tr td:nth-child(2)");

//Engendra um vetor de armazenamento dos nomes das cores
const colors = [];

//Itera sobre os elementos e adiciona os nomes das cores ao vetor
colorElements.forEach(colorElement => {
                      const colorName = colorElement.textContent.trim().toLowerCase();
  if (colorName) {
    colors.push(colorName);
  };

//Mostra o vetor das cores
console.log(colors);
