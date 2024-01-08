const flashingTextContainer = document.querySelector('.grid-item-2');

function createFlashingLetter() {
  const letter = document.createElement('div');
  letter.textContent = 'M K';
  letter.classList.add('flashing-letter');

  const top = Math.random() * flashingTextContainer.clientHeight;
  const left = Math.random() * flashingTextContainer.clientWidth;
  letter.style.top = `${top}px`;
  letter.style.left = `${left}px`;

  flashingTextContainer.appendChild(letter);

  setTimeout(() => {
    letter.remove();
  }, 2000); // 2 saniye sonra harfi kaldır
}

setInterval(createFlashingLetter, 1000); // Her 0.5 saniyede bir rastgele harf oluştur
