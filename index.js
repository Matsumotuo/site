function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.classList.toggle('open');
    section.classList.toggle('closed');
    var content = section.querySelector('ul') || section.querySelector('p');
    content.classList.toggle('hidden');

}

let currentSlide = 0;
const slides = document.querySelectorAll('.container img');

function nextSlide() {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = 'block';
}

setInterval(nextSlide, 2500);

