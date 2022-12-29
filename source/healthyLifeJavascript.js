const imgsLeafGreen = document.querySelectorAll('.imgLeafGreen');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log('is intersecting');
        entry.target.classList.add('imgLeafGray');
      } else {
        console.log('is gone');
        entry.target.classList.remove('imgLeafGray');
      }
    });
  },
  {
    threshold: 0.95,
  }
);

imgsLeafGreen.forEach((imgLeafGreen) => {
  observer.observe(imgLeafGreen);
});
