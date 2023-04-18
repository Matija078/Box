let figur = document.getElementById('figur');
let x = 50;
let y = 50;
document.addEventListener('keydown', function (event) {
  if (event.code === 'ArrowUp') {
    y -= 10;
  }
  if (event.code === 'ArrowDown') {
    y += 10;
  }
  if (event.code === 'ArrowLeft') {
    x -= 10;
  }
  if (event.code === 'ArrowRight') {
    x += 10;
  }
  if (y < 0) {
    y = 0;
  }
  if (y > window.innerHeight - figur.offsetHeight) {
    y = window.innerHeight - figur.offsetHeight;
  }
  if (x < 0) {
    x = 0;
  }
  if (x > window.innerWidth - figur.offsetWidth) {
    x = window.innerWidth - figur.offsetWidth;
  }
  figur.style.top = y + 'px';
  figur.style.left = x + 'px';
});
// Sett grensene basert på skjermoppløsningen
window.onload = function () {
  let maxX = window.innerWidth - figur.offsetWidth;
  let maxY = window.innerHeight - figur.offsetHeight;
  if (maxX > 1915) {
    maxX = 1915;
  }
  if (maxY > 1075) {
    maxY = 1075;
  }
  if (x > maxX) {
    x = maxX;
  }
  if (y > maxY) {
    y = maxY;
  }
};
