// Your code goes here

//------ 1
const navLinks = document.querySelector(".nav");
navLinks.addEventListener('mouseover', function (e) {
  e.preventDefault();
  e.target.style.color = 'red';
  setTimeout(function () {
    e.target.style.color = '';
  }, 500)
}, false);

//------ 2
const body = document.querySelector('body')
body.addEventListener('keydown', function (e) {
  // logs keys
  console.log(e.key)
  // changes font color
  if (e.keyCode === 49) e.target.style.color = "red";
  if (e.keyCode === 50) e.target.style.color = "blue";
  if (e.keyCode === 51) e.target.style.color = "orange";
  if (e.keyCode === 52) e.target.style.color = "green";
  if (e.keyCode === 53) e.target.style.color = "black";
  // dark background
  if (e.keyCode === 78) body.classList.toggle('night-mode')
})

//------ 3
body.addEventListener('wheel', function (e) {
  e.target.style.fontSize = '22px'
})

//------ 4
const btnAlerts = document.querySelectorAll('.btn')
btnAlerts.forEach((btn, i) => {
  btn.addEventListener('dblclick', function () {
    alert(`You double clicked button #${i + 1}`)
  })
})
const hideImages = document.querySelectorAll('img')
hideImages.forEach(img => {
  img.addEventListener('dblclick', function (e) {
    e.target.style.display = 'none';
  })
})
//------ 5
const page = window
page.addEventListener('load', function () {
  alert(`Press 'N' to toggle between night mode`)
})