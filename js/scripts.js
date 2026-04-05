const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#theButton');
  const menu = document.querySelector('.nav-menu');
  const parentLinks = document.querySelectorAll('.nav-menu .has-children > a');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      const isOpen = btn.classList.toggle('open');
      menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  parentLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth < 768) {
        e.preventDefault();

        const parentLi = link.parentElement;
        const isOpen = parentLi.classList.toggle('open');

        link.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      }
    });
  });

  if (menu && btn) {
    menu.querySelectorAll('a:not(.parent)').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
          btn.classList.remove('open');
          menu.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');

          document.querySelectorAll('.nav-menu .has-children.open').forEach(item => {
            item.classList.remove('open');
          });

          document.querySelectorAll('.nav-menu .has-children > a').forEach(a => {
            a.setAttribute('aria-expanded', 'false');
          });
        }
      });
    });
  }
});

const swiper = new Swiper('.swiper', {
  loop: true,
  effect: 'slide',
  speed: 2000,
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 5000,
  }
});