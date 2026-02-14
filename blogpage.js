/* ===============================
   RUN AFTER PAGE LOAD
================================ */
document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     CUSTOM CURSOR
  ================================ */
  const cursor = document.querySelector(".cursor");

  if (cursor) {
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });

    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1.8)";
      });
      el.addEventListener("mouseleave", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
      });
    });
  }

  /* ===============================
     SCROLL REVEAL
  ================================ */
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach(el => observer.observe(el));

  /* ===============================
     PAGE TRANSITION (FADE OUT)
  ================================ */
  document.querySelectorAll("a").forEach(link => {
    const href = link.getAttribute("href");

    if (!href || href.startsWith("#") || href.startsWith("http")) return;

    link.addEventListener("click", e => {
      e.preventDefault();
      document.body.style.opacity = "0";

      setTimeout(() => {
        window.location.href = href;
      }, 400);
    });
  });

});
