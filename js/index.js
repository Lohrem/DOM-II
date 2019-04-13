// Your code goes here
const navLinks = document.querySelector(".nav");
navLinks.addEventListener('mouseover', function(e) {
  e.target.style.color = 'red';
  setTimeout(function() {
    e.target.style.color = '';
  }, 500)
}, false);

const body = document.querySelector('body')
body.addEventListener('keydown', function(e) {
  console.log(e.key)
})

const btnAlerts = document.querySelectorAll('.btn')
btnAlerts.forEach((btn, i) => {
  btn.addEventListener('dblclick', function(e) {
    alert(`You double clicked button #${i + 1}`)
  })
})