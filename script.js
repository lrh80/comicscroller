const panels = document.querySelectorAll('.comic-panel');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const panel = entry.target;
      const img = new Image();
      img.src = panel.dataset.src;
      img.onload = () => {
        img.style.opacity = '1';
        panel.appendChild(img);
      };
      observer.unobserve(panel);
    }
  });
}, {
  rootMargin: "0px 0px -15% 0px"
});

panels.forEach(panel => observer.observe(panel));
