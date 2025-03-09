
function cleen() {
  document.getElementById("check1").value="0";
  document.getElementById("check2").value="0";
}

let results1=0; 
let results2=0;
let randomPhoto;

function user_camin() {
let conteiner =document.getElementById("content_user");
conteiner.innerHTML="";

let nameImg1= "../game2/Photo/photo_kamin.jpg";
let nameImg2="../game2/Photo/photo_papir.jpg";
let nameImg3="../game2/Photo/photo_nozhnici.jpg"

let img = document.createElement("img");
img.style.width="182px";
img.style.height="150px";
img.src=nameImg1;

  conteiner.appendChild(img);

const photos= ["../game2/Photo/photo_kamin.jpg","../game2/Photo/photo_papir.jpg","../game2/Photo/photo_nozhnici.jpg"];
const randomIndex = Math.floor(Math.random() * photos.length); 
randomPhoto = photos[randomIndex];
let conteiner2 = document.getElementById("content_bot");
conteiner2.innerHTML="";
let imge = document.createElement("img");
imge.src=randomPhoto;
imge.style.width="185px";
imge.style.height="150px";
conteiner2.appendChild(imge);


if ( randomPhoto===nameImg1) {
  
}
else if (randomPhoto===nameImg2) {
  results1++
}
else if (randomPhoto===nameImg3){
results2++  
}
 
document.getElementById("check1").value=results1;
document.getElementById("check2").value=results2;
}






function user_papir() {
  
  let nameImg1= "../game2/Photo/photo_kamin.jpg";
let nameImg2="../game2/Photo/photo_papir.jpg";
let nameImg3="../game2/Photo/photo_nozhnici.jpg"

let conteiner =document.getElementById("content_user");
conteiner.innerHTML="";

let img = document.createElement("img");
img.style.width="182px";
img.style.height="150px";
img.src=nameImg2;

  conteiner.appendChild(img);
  
  const photos= ["../game2/Photo/photo_kamin.jpg","../game2/Photo/photo_papir.jpg","../game2/Photo/photo_nozhnici.jpg"];
const randomIndex = Math.floor(Math.random() * photos.length); 
randomPhoto = photos[randomIndex];
let conteiner2 = document.getElementById("content_bot");
conteiner2.innerHTML="";
let imge = document.createElement("img");
imge.src=randomPhoto;
imge.style.width="185px";
imge.style.height="150px";
conteiner2.appendChild(imge);

if (randomPhoto===nameImg2) {
  
}
else if (randomPhoto===nameImg1) {
  results2++
}
else if (randomPhoto===nameImg3) {
  results1++
}
document.getElementById("check1").value=results1;
document.getElementById("check2").value=results2;
}






function user_nozhnici() {

  let conteiner = document.getElementById("content_user");
  conteiner.innerHTML = "";
  
  let nameImg1= "../game2/Photo/photo_kamin.jpg";
let nameImg2="../game2/Photo/photo_papir.jpg";
let nameImg3="../game2/Photo/photo_nozhnici.jpg"

  let img = document.createElement("img");
  img.style.width = "182px";
  img.style.height = "150px";
  img.src = nameImg3;

  conteiner.appendChild(img);

const photos= ["../game2/Photo/photo_kamin.jpg","../game2/Photo/photo_papir.jpg","../game2/Photo/photo_nozhnici.jpg"];
const randomIndex = Math.floor(Math.random() * photos.length); 
randomPhoto = photos[randomIndex];
let conteiner2 = document.getElementById("content_bot");
conteiner2.innerHTML="";
let imge = document.createElement("img");
imge.src=randomPhoto;
imge.style.width="185px";
imge.style.height="150px";
conteiner2.appendChild(imge);

if (randomPhoto===nameImg1) {
  results1++
}
else if (randomPhoto===nameImg2) {
  results2++
}
else if (randomPhoto===nameImg3) {
  
}

document.getElementById("check1").value=results1;
document.getElementById("check2").value=results2;
}

