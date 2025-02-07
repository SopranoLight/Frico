

const faqItems = document.querySelectorAll('.faq-item');  // Додано точку перед 'faq-item'
faqItems.forEach(item => {
  item.addEventListener('click', function() {
    console.log('FAQ item clicked');
    this.classList.toggle('active');
    const content = this.querySelector('.faq-content');
    content.classList.toggle('visible');  // Відображення або приховання контенту
  });
});


let index = 0;
const slides = document.getElementById('slides');
const totalSlides = document.querySelectorAll('.slide').length;

function updateSlidePosition() {
    slides.style.transform = `translateX(${-index * 100}%)`;
}

function showNextSlide() {
    index = (index + 1) % totalSlides; // Якщо останній слайд, повертаємося до першого
    updateSlidePosition();
}

function showPrevSlide() {
    index = (index - 1 + totalSlides) % totalSlides; // Якщо перший слайд, переходимо до останнього
    updateSlidePosition();
}

// Автоматична зміна слайдів кожні 5 секунд
setInterval(showNextSlide, 8000);



const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burgerMenu.classList.toggle('active');
});


function scrollTo(element){
  window.scroll({
      left: 0,
      top: element.getBoundingClientRect().top + window.scrollY,
      behavior: 'smooth'
  })
}

var aboutHeader = document.querySelector('.button')
var anti = document.querySelector('#sos')



aboutHeader.addEventListener('click', () => {
  scrollTo(anti);

}
)

var garboard = document.querySelector('.buttonn')
var who = document.querySelector('#fotter')

garboard.addEventListener('click', () => {
  scrollTo(who);

}
)


var garboard = document.querySelector('.buttonn')
var society = document.querySelector('#society')

garboard.addEventListener('click', () => {
  scrollTo(society);

}
)