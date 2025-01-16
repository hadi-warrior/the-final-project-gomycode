//variabless
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var thumb = document.getElementsByClassName("thumb");
var hero = document.getElementById("hero");
//pour changer d'image
var backgroundImg = new Array(
  "../images/second.jpeg",
  "../images/five.jpg",
  "../images/first.jpeg",
  "../images/fourth.jpeg",
  "../images/third.jpeg",
);

let i = 0;
next.onclick = function () {
  if (i < 4) {
    hero.style.backgroundImage = 'url("' + backgroundImg[i + 1] + '")';
    thumb[i + 1].classList.add("active");
    thumb[i].classList.remove("active");
    i++;
  }
};

prev.onclick = function () {
  if (i > 0) {
    hero.style.backgroundImage = 'url("' + backgroundImg[i - 1] + '")';
    thumb[i - 1].classList.add("active");
    thumb[i].classList.remove("active");
    i--;
  }
};
//pour changer la couleur du theme
var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {  
        trans() 
        document.documentElement.setAttribute('data-theme', 'orange')
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}
