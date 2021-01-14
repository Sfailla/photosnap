window.addEventListener(
  'load',
  () => {
    (function toggleMobileMenu() {
      const menuButton = document.getElementById('menu-button');
      menuButton.addEventListener('click', toggleOpenClass);
    })();

    function toggleOpenClass() {
      const menu = document.getElementById('menu');
      const drawer = document.getElementById('drawer');

      menu.classList.toggle('open');
      drawer.classList.toggle('open');
    }
  },
  false
);
