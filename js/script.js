document.addEventListener("DOMContentLoaded", () => {
  fetch("nav.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar-container").innerHTML = data;

      // Smooth scroll for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
          }
        });
      });
    });

  // Scroll-to-top button
  const scrollBtn = document.createElement("button");
  scrollBtn.innerText = "↑ Top";
  scrollBtn.id = "scrollToTopBtn";
  scrollBtn.style.position = "fixed";
  scrollBtn.style.bottom = "30px";
  scrollBtn.style.right = "30px";
  scrollBtn.style.display = "none";
  scrollBtn.style.zIndex = "1000";
  document.body.appendChild(scrollBtn);

  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Fade-in animation for main content
  const mainContent = document.querySelector("main");
  if (mainContent) {
    mainContent.style.opacity = 0;
    mainContent.style.transition = "opacity 1s";
    setTimeout(() => {
      mainContent.style.opacity = 1;
    }, 100);
  }
});