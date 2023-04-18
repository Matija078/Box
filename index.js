document.addEventListener('DOMContentLoaded', function () {
  const firkant = document.querySelector('.firkant');
  let posX = 0;
  let posY = 0;

  document.addEventListener('keydown', function (event) {
    switch (event.key) {
      case 'w':
      case 'ArrowUp':
        posY -= 10;
        break;
      case 'a':
      case 'ArrowLeft':
        posX -= 10;
        break;
      case 's':
      case 'ArrowDown':
        posY += 10;
        break;
      case 'd':
      case 'ArrowRight':
        posX += 10;
        break;
    }
    firkant.style.top = posY + 'px';
    firkant.style.left = posX + 'px';
  });
});
