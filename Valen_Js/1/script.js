function changeColor() {
  const colorPicker = document.getElementById("colorPicker").value;
  const cardHeader = document.getElementById("cardHeader");
  const cardFooter = document.getElementById("cardFooter");
  
  // Cambiar el color del header y el footer según la selección del input
  cardHeader.style.backgroundColor = colorPicker;
  cardFooter.style.backgroundColor = colorPicker;
}
