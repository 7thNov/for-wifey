const targetDate = new Date('2025-08-15T00:00:00');

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerText = "🎉 See you later luv!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").innerText =
    `⏳ ${days}d ${hours}h ${minutes}m ${seconds}s until our next date 💜`;
}

setInterval(updateCountdown, 1000);

updateCountdown();
