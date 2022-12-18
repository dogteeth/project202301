const target = document.querySelector('.imgLeafSection01');

function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('imgLeafSection01TurnGreen');
    } else {
      entry.target.classList.remove('imgLeafSection01TurnGreen');
    }
  });
}

const observer = new IntersectionObserver(handleIntersection);

observer.observe(target);
