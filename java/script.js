// document.querySelector('.next').style.display = 'none';
// document.querySelector('.sushi').addEventListener('click', showBtn);
//
// function showBtn(e) {
//  document.querySelector('.next').style.display = 'block';
//  e.preventDefault();
// }

document.getElementById("sushi").addEventListener("click", sushi);
function sushi() {
  document.write("Oh Wow, you've got some taste! That's my favorite! Must have quite the wallet.");
}

document.getElementById('pizza').addEventListener("click", pizza);
function pizza() {
  document.querySelector("#pizza").innerHTML = "Yum!";

}

document.getElementById("hamburger").addEventListener("click", hamburger);
function hamburger() {
  document.querySelector('#hamburger').style.fontSize="35px";
}


document.getElementById("taco").addEventListener("click", taco);
function taco() {
  alert("My favorite taco place is Torchy's Tacos! You should try it!");
}
