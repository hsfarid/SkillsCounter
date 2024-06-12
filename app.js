//get reference
const skillsContainer = document.querySelector(".skills-container span");

let output = 0;
const timer = setInterval(() => {
  if (output === 10) {
    clearInterval(timer);
  } else {
    output++;
  }
  skillsContainer.textContent = output;
}, 10);
