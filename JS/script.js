function moveSlide(button, direction) {
    const carousel = button.closest('.carousel');
    const imagesContainer = carousel.querySelector('.carousel-images');
    const images = imagesContainer.querySelectorAll('img');
    const totalImages = images.length;

    let currentIndex = parseInt(imagesContainer.dataset.currentIndex) || 0;

    let newIndex = currentIndex + direction;

    if (newIndex < 0) newIndex = totalImages - 1;
    if (newIndex >= totalImages) newIndex = 0;

    imagesContainer.style.transition = 'transform 0.5s ease-in-out';
    imagesContainer.style.transform = `translateX(-${newIndex * 100}%)`;

    imagesContainer.dataset.currentIndex = newIndex;
}