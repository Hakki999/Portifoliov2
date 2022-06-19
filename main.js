ScrollReveal().reveal('.hr', {
    distance: '150%',
    origin: 'top',
    delay: 0,
    reset: true
});

ScrollReveal().reveal('.hrr', {
    distance: '150%',
    origin: 'top',
  delay: 200,
    reset: true
});

ScrollReveal().reveal('.hrrr', {
    distance: '150%',
    origin: 'top',
    delay: 300,
    reset: true
});

const navBar = document.getElementsByClassName("navBar");

var h = window.innerHeight/100;

window.addEventListener("scroll", e => {
    let py = 100 * window.scrollY / (h*100);
    if(py > 17){
        navBar[0].setAttribute("class", "navBar ModeClose");
    }else{
        navBar[0].setAttribute("class", "navBar ModeOpen");
    }
})