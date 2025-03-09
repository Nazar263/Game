function number(num) {
document.getElementById("text_game1").value=(num);
}
let randomNumber;

function start() {
const numbers = [1, 2, 3, 4, 5,6,7,8,9];
const randomIndex = Math.floor(Math.random() * numbers.length); 
randomNumber = numbers[randomIndex];
document.getElementById("text_game1").value="";
document.getElementById("text_game1").value="Поїхали...😉🔥";
result=0;
}


function test_random() {
  
  let text = document.getElementById("text_game1").value;
  const errorElement = document.getElementById("error");
  if (text.trim()==="") {
    errorElement.textContent="Поле пусте...🤷";
    return false;
  }
 errorElement.textContent="" 
  
 if (Number(text)===randomNumber) {
    document.getElementById("text_game1").value = "Ти виграв...👏🎉";
    
  }  else {
    document.getElementById("text_game1").value = "Спробуй ще раз...🤷"
return true;
}
}
let result=0;
function Chek() {
  let text = document.getElementById("text_game1").value;
  if (text==="Спробуй ще раз...🤷") {
    result++;
  }else{
    alert("Спроби: " + result + ", Вітаю з перемогою...😉🎉")
  }
  
}
function global_random() {
  test_random();
  Chek();
}