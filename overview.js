const slides = document.querySelectorAll('#storyOverview .story-slide');
let currentSlide = 0;

document.querySelectorAll('#storyOverview .next-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) < slides.length ? currentSlide + 1 : 0;
    slides[currentSlide].classList.add('active');
  });
});
