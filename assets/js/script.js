const keyMap = {
   Meta: "cmd",
   Control: "cmd",
   i: "i",
   İ: "i",
   ı: "i",
   I: "i",
   b: "b",
   B: "b",
   r: "r",
   R: "r",
   a: "a",
   A: "a",
   h: "h",
   H: "h",
   m: "m",
   M: "m",
};

function setKeyPressed(key, pressed) {
   const mapped = keyMap[key];
   if (!mapped) return;
   document.querySelectorAll(`[data-key="${mapped}"]`).forEach((el) => {
      el.classList.toggle("pressed", pressed);
   });
}

const secret = "ibrahim";
let progress = 0;

function normalizeLetter(key) {
   if (key === "İ" || key === "I" || key === "ı") return "i";
   return key.toLowerCase();
}

function fireConfetti() {
   const defaults = {
      origin: { y: 0.7 },
      colors: ["#f0f0f2", "#d89191", "#dcdde8", "#ffffff", "#b2b2be"],
   };

   confetti({ ...defaults, particleCount: 80, spread: 55, scalar: 1.1 });
   confetti({ ...defaults, particleCount: 40, spread: 100, decay: 0.91, scalar: 0.9 });
   confetti({
      ...defaults,
      particleCount: 60,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
   });
   confetti({
      ...defaults,
      particleCount: 60,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
   });
}

function advanceSequence(letter) {
   if (letter === secret[progress]) {
      progress += 1;
      if (progress === secret.length) {
         fireConfetti();
         progress = 0;
      }
      return;
   }

   progress = letter === secret[0] ? 1 : 0;
}

document.querySelectorAll(".key").forEach((key) => {
   key.addEventListener("pointerdown", function (e) {
      this.classList.add("pressed");

      const rect = this.getBoundingClientRect();
      const ripple = document.createElement("span");
      const size = Math.max(rect.width, rect.height);
      ripple.classList.add("ripple");
      ripple.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${e.clientX - rect.left - size / 2}px;
      top: ${e.clientY - rect.top - size / 2}px;
    `;
      this.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove());

      const letter = this.dataset.key;
      if (letter && letter !== "cmd") advanceSequence(letter);
   });

   key.addEventListener("pointerup", function () {
      this.classList.remove("pressed");
   });

   key.addEventListener("pointerleave", function () {
      this.classList.remove("pressed");
   });
});

window.addEventListener("keydown", (e) => {
   if (e.repeat) return;

   setKeyPressed(e.key, true);

   const letter = normalizeLetter(e.key);
   if (letter.length !== 1) return;

   advanceSequence(letter);
});

window.addEventListener("keyup", (e) => {
   setKeyPressed(e.key, false);
});
