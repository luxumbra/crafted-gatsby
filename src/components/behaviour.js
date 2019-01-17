'use strict'
const content = document.getElementById("content")
console.log('Content: ', content)

const navbar = document.getElementById("nav")
const sticky = content.offsetTop
console.log(sticky)

function navbarSticky() {
  if(window.pageYOffset > sticky + 100) {
      navbar.classList.add("sticky")
  } else {
      navbar.classList.remove("sticky")
  }
}
window.onscroll = function() {
  navbarSticky()
}
