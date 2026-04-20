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
   });

   key.addEventListener("pointerup", function () {
      this.classList.remove("pressed");
   });

   key.addEventListener("pointerleave", function () {
      this.classList.remove("pressed");
   });
});

window.addEventListener("keydown", (e) => {
   if (e.key === "Meta" || e.key === "Control") {
      document.getElementById("cmd").classList.add("pressed");
   }
   if (e.key === "i" || e.key === "İ") {
      document.getElementById("i").classList.add("pressed");
   }
   if (e.key === "b" || e.key === "B") {
      document.getElementById("b").classList.add("pressed");
   }
   if (e.key === "r" || e.key === "R") {
      document.getElementById("r").classList.add("pressed");
   }
   if (e.key === "a" || e.key === "A") {
      document.getElementById("a").classList.add("pressed");
   }
   if (e.key === "h" || e.key === "H") {
      document.getElementById("h").classList.add("pressed");
   }
   if (e.key === "m" || e.key === "M") {
      document.getElementById("m").classList.add("pressed");
   }
});

window.addEventListener("keyup", (e) => {
   if (e.key === "Meta" || e.key === "Control") {
      document.getElementById("cmd").classList.remove("pressed");
   }
   if (e.key === "i" || e.key === "İ") {
      document.getElementById("i").classList.remove("pressed");
   }
   if (e.key === "b" || e.key === "B") {
      document.getElementById("b").classList.remove("pressed");
   }
   if (e.key === "r" || e.key === "R") {
      document.getElementById("r").classList.remove("pressed");
   }
   if (e.key === "a" || e.key === "A") {
      document.getElementById("a").classList.remove("pressed");
   }
   if (e.key === "h" || e.key === "H") {
      document.getElementById("h").classList.remove("pressed");
   }
    if (e.key === "m" || e.key === "M") {
      document.getElementById("m").classList.remove("pressed");
   }
});
