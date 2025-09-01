// Mobile navigation menu
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Mobile navigation menu closing
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Navigation links smooth scrolling
document.querySelectorAll("a[href^='#']").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Used for terminal-box <div> styling
function simulateTypingMotion(elem, text, speed = 50) {
  elem.textContent = "";
  let i = 0;

  function typing() {
    if (i < text.length) {
      // Typing motion in progress
      elem.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else {
      // Typing motion already ended, add blinking cursor at the end because it looks cool
      const cursor = document.createElement("span");
      cursor.className = "cursor";
      // Show full cursor block because I like it
      cursor.textContent = "\u2588";
      elem.appendChild(cursor);
    }
  }

  typing();
}

// Add that typing motion thingy on page load bcs again, it looks cool
window.addEventListener("load", () => {
  const terminalBox = document.querySelector(".terminal-box");
  const originalText = terminalBox.textContent;

  // Set some timeout, add some delay, so that it doesn't go wooosh!!!
  setTimeout(() => {
    simulateTypingMotion(terminalBox, originalText, 30);
  }, 1000);
});

// Easter egg
console.log(`
/*
 * Welcome to the JS console!
 *
 * If you're reading this, you're probably a developer too.
 * Nice to meet you, fellow code enthusiast!
 *
 * This site was built with pure HTML, CSS, and JavaScript.
 * No frameworks, no dependencies - because I'm too lazy to learn one right now.
 *
 * Let's build something awesome together if you're interested :)
 */
`);
