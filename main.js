document.querySelector('.buy-btn').addEventListener('click', () => {
    alert('Livro "Flores para Algernon" adicionado ao carrinho!');
  });
  
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const scrolled = window.scrollY;
    header.style.backgroundPosition = `center ${scrolled * 0.5}px`;
  });
  
  const track = document.querySelector('.carousel-track');
  const items = document.querySelectorAll('.carousel-item');
  const prevButton = document.querySelector('.carousel-button.prev');
  const nextButton = document.querySelector('.carousel-button.next');
  
  let currentIndex = 0;
  const itemWidth = 200;
  const visibleItems = 3;
  const maxIndex = items.length - visibleItems;
  
  function updateCarousel() {
    currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));
    const offset = currentIndex * itemWidth;
    track.style.transform = `translateX(-${offset}px)`;
    
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === maxIndex;
  }
  
  prevButton.addEventListener('click', () => {
    currentIndex--;
    updateCarousel();
  });
  
  nextButton.addEventListener('click', () => {
    currentIndex++;
    updateCarousel();
  });
  
  let autoPlayInterval = setInterval(() => {
    if (currentIndex >= maxIndex) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    updateCarousel();
  }, 5000);
  
  track.addEventListener('mouseenter', () => {
    clearInterval(autoPlayInterval);
  });
  
  track.addEventListener('mouseleave', () => {
    autoPlayInterval = setInterval(() => {
      if (currentIndex >= maxIndex) {
        currentIndex = 0;
      } else {
        currentIndex++;
      }
      updateCarousel();
    }, 5000);
  });
  
  updateCarousel();