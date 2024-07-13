const modalTexts = {
   'bounce-bottom': 'This is the bounce bottom text.',
   'bounce-left': 'This is the bounce left text.',
   'bounce-right': 'This is the bounce right text.',
   'bounce-top': 'This is the bounce top text.',
   'scale-in': 'This is the scale-in text.',
   'scale-blur': 'This is the scale-blur text.',
   'scale-tada': 'This is the scale-tada text.',
   'flip-page': 'This is the flip-page text.',
   'flip-bounce': 'This is the flip-bounce text.',
   'flip-raise': 'This is the flip-raise text.',
   'flip-newspaper': 'This is the flip-newspaper text.',
   'slide-in-left': 'This is the slide-in-left text.',
   'slide-in-right': 'This is the slide-in-right text.',
   'slide-in-top': 'This is the slide-in-top text.',
   'slide-in-bottom': 'This is the slide-in-bottom text.',
   'fade-in': 'This is the fade-in text.',
   'fade-scale': 'This is the fade-scale text.',
   'fade-blur': 'This is the fade-blur text.',
   'rotate-in': 'This is the rotate-in text.',
   'rotate-in-down-left': 'This is the rotate-in-down-left text.',
   'rotate-in-down-right': 'This is the rotate-in-down-right text.',
};

const popupTriggers = document.querySelectorAll('.popup-trigger'),
   popup = document.getElementById('popup'),
   overlay = document.querySelector('.overlay'),
   modalContent = document.getElementById('modal-content'),
   closeBtn = document.querySelector('.popup-close');

popupTriggers.forEach((trigger) => {
   trigger.addEventListener('click', (e) => {
      e.preventDefault();

      const effect = trigger.dataset.effect;
      const text = modalTexts[effect];

      document.body.style.overflow = 'hidden';

      popup.className = 'white-popup';
      modalContent.innerText = text;
      popup.classList.add(effect);

      popup.style.display = 'flex';
      overlay.style.display = 'block';
   });
});

document.addEventListener('click', (e) => {
   if (e.target === overlay || e.target.className.includes('overlay') || e.target === closeBtn) {
      document.body.style.overflow = '';
      popup.style.display = 'none';
      overlay.style.display = 'none';
   }
});
