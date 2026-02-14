document.addEventListener("DOMContentLoaded", () => {

  /* Scroll reveal */
  const reveals = document.querySelectorAll('.scroll-reveal');

  const revealOnScroll = () => {
    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.classList.add('show');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  /* Cursor */
  const cursor = document.querySelector('.custom-cursor');

  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  document.querySelectorAll('a, button').forEach(item => {
    item.addEventListener('mouseenter', () => cursor.classList.add('cursor-active'));
    item.addEventListener('mouseleave', () => cursor.classList.remove('cursor-active'));
  });

});
