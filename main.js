// mostrare / nascondere il menu principale al click

const hamburgerIcon = document.querySelector('i.fa-bars');
const closeX = document.querySelector('a.close');

const hamburgerMenu = document.querySelector('div.hamburger-menu');

// Open 
hamburgerIcon.addEventListener('click', function(){
  hamburgerMenu.classList.add('active')
});

// Close
closeX.addEventListener('click', function(){
  hamburgerMenu.classList.remove('active')
});