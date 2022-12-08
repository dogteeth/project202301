const target = document.querySelector('.imgLeafSample');

function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('imgLeafSampleTurnGreen');
    } else {
      entry.target.classList.remove('imgLeafSampleTurnGreen');
    }
  });
}

const observer = new IntersectionObserver(handleIntersection);

observer.observe(target);
