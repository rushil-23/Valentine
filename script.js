const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const hearts = document.getElementById("hearts");

const sweetResponses = [
  "Are you sure? 🥺",
  "What if I bring chocolate? 🍫",
  "I wrote you a poem... 📜",
  "I'll plan the cutest date! 🌸",
  "Pretty please? 💕",
];

let noClicks = 0;

const spawnHeart = () => {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = ["💖", "💘", "💝", "💞", "💕"][
    Math.floor(Math.random() * 5)
  ];
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.animationDuration = `${2.5 + Math.random() * 2.5}s`;
  hearts.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
};

const celebrate = () => {
  message.hidden = false;
  for (let i = 0; i < 24; i += 1) {
    setTimeout(spawnHeart, i * 120);
  }
};

yesBtn.addEventListener("click", () => {
  yesBtn.disabled = true;
  noBtn.disabled = true;
  yesBtn.textContent = "Forever yes! 💞";
  celebrate();
});

noBtn.addEventListener("mouseover", () => {
  if (window.innerWidth < 600) return;
  const moveX = Math.random() * 140 - 70;
  const moveY = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

noBtn.addEventListener("click", () => {
  noClicks += 1;
  const response = sweetResponses[noClicks % sweetResponses.length];
  noBtn.textContent = response;
  const scale = 1 + noClicks * 0.08;
  yesBtn.style.transform = `scale(${scale})`;
  spawnHeart();
});
