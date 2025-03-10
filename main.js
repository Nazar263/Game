
function save() {
  const coment = document.getElementById("text_coment").value;
  const errorElement = document.getElementById("error");

  if (coment.trim() === "") {
    errorElement.textContent = "Поле пусте...🤷";
    return false;
  }
  errorElement.textContent = ""; 
  console.log( "Коментар: " + coment);
  document.getElementById("text_coment").value="";
  alert("Дякую за відгук!");
  return true; 
}