// nav bar scroll effect

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
// nav bar scroll effect closed

// nav bar black
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

const infoButtons = document.querySelectorAll('.info');
const playButtons = document.querySelectorAll('.play');
const modal = document.getElementById('infoModal');
const modalTitle = document.getElementById('modalTitle');

infoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const title = button.dataset.title;
    modalTitle.textContent = title;
    modal.style.display = 'flex';
  });
});

playButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Playing: ' + button.dataset.title);
  });
});





