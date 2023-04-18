/*function for å beveg firekant med w,s,a,d*/

document.addEventListener('keydown', function (event) {
  let rect1 = firkant1.getBoundingClientRect();
  let maxX = window.innerWidth - firkant1.offsetWidth;
  let maxY = window.innerHeight - firkant1.offsetHeight;

  if (event.key == 'w') {
    firkant1.style.top = Math.max(rect1.top - 10, 0) + 'px';
  } else if (event.key == 's') {
    firkant1.style.top = Math.min(rect1.top + 10, maxY) + 'px';
  } else if (event.key == 'a') {
    firkant1.style.left = Math.max(rect1.left - 10, 0) + 'px';
  } else if (event.key == 'd') {
    firkant1.style.left = Math.min(rect1.left + 10, maxX) + 'px';
  }

  // Sjekk om firkant1 går utenfor skjermen, og juster hvis nødvendig
  rect1 = firkant1.getBoundingClientRect();
  if (rect1.left < 0) {
    firkant1.style.left = '0px';
  } else if (rect1.right > window.innerWidth) {
    firkant1.style.left = window.innerWidth - firkant1.offsetWidth + 'px';
  }
  if (rect1.top < 0) {
    firkant1.style.top = '0px';
  } else if (rect1.bottom > window.innerHeight) {
    firkant1.style.top = window.innerHeight - firkant1.offsetHeight + 'px';
  }
});
