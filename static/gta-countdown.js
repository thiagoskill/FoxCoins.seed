const launchDate = new Date("2026-11-19T00:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = launchDate - now;

  if (diff <= 0) {
    document.getElementById("gta-days").textContent = "00";
    document.getElementById("gta-hours").textContent = "00";
    document.getElementById("gta-minutes").textContent = "00";
    document.getElementById("gta-seconds").textContent = "00";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("gta-days").textContent = days;
  document.getElementById("gta-hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("gta-minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("gta-seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ANIMACACAO
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return

      const element = entry.target

      element.classList.remove('opacity-0')
      element.classList.remove('-translate-x-12')
      element.classList.remove('translate-x-12')

      element.classList.add('opacity-100')
      element.classList.add('translate-x-0')

      observer.unobserve(element)
    })
  },
  {
    threshold: 0.15,
  },
)

document.querySelectorAll('[data-reveal]').forEach((element) => {
  observer.observe(element)
})