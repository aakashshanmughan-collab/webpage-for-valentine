const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const effects = document.getElementById("effects");

// YES button: show fireworks and kisses
yesBtn.addEventListener("click", () => {
  message.textContent = "Yay! 💞 You said YES!";
  
  for (let i = 0; i < 20; i++) {
    const span = document.createElement("span");
    span.className = Math.random() > 0.5 ? "firework" : "kiss";
    span.textContent = Math.random() > 0.5 ? "🎆" : "😘";
    span.style.left = Math.random() * window.innerWidth + "px";
    span.style.top = Math.random() * window.innerHeight + "px";
    effects.appendChild(span);

    setTimeout(() => span.remove(), 2000);
  }
});

// NO button: run away when hovered or clicked
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

noBtn.addEventListener("click", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});
