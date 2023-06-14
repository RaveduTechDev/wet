// navbar responsive
const menu = document.querySelector('.nav-responsive input');
const nav = document.querySelector('nav ul');

menu.addEventListener('click', function () {
    nav.classList.toggle('slide');
});

// scroll navbar 
window.addEventListener('scroll', () => {
    document.querySelector('.navigasi').classList.toggle('scrolling', window.scrollY > 0)
})

// active menu
let lokasi      = window.location.href 
let menuItem    = document.querySelector('nav a')
let menuLength  = menuItem.length

for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].href === lokasi) {
        menuItem[i].classList = 'active'
    }
    
}

// collapse menu
let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    
    this.classList.toggle("active-bre");
    let content = this.nextElementSibling;

    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

