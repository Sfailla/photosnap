import '../scss/main.scss';
import toggleMobileMenu from './main.js';

window.addEventListener('load', () => {
  toggleMobileMenu();

  (function handleToggle() {
    const input = document.querySelector('#checkbox');
    const monthly = document.querySelector('.option1');
    const yearly = document.querySelector('.option2');

    const monthlyPrice = document.querySelectorAll('.price--monthly');
    const yearlyPrice = document.querySelectorAll('.price--yearly');

    input.addEventListener('click', () => {
      if (monthly.classList.contains('active')) {
        monthly.classList.remove('active');
        yearly.classList.add('active');

        monthlyPrice.forEach(price => (price.style.animationName = 'fade-out'));
        monthlyPrice.forEach(price => (price.style.opacity = '0'));

        yearlyPrice.forEach(price => (price.style.animationName = 'fade-in'));
        yearlyPrice.forEach(price => (price.style.opacity = '1'));
      } else {
        yearly.classList.remove('active');
        monthly.classList.add('active');

        monthlyPrice.forEach(price => (price.style.animationName = 'fade-in'));
        monthlyPrice.forEach(price => (price.style.opacity = '1'));
        yearlyPrice.forEach(price => (price.style.animationName = 'fade-out'));
        yearlyPrice.forEach(price => (price.style.opacity = '0'));
      }
    });
  })();
});
