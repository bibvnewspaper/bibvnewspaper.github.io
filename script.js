(() => {
  const nav = document.querySelector(".nav");
  if (!nav) return;

  const onScroll = () => {
    const scrolled = window.scrollY > 10;
    nav.classList.toggle("nav--scrolled", scrolled);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
