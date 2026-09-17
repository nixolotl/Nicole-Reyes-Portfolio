let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

const projects = [
  {
    img: "project1.png",
    title: "WOW: Wednesday Rush",
    desc: "A Python game inspired by the weekly struggle of racing to the 6th-floor computer lab.",
    link: "project-wow.html"
  },
  {
    img: "project2.png",
    title: "8-Bit Working Space",
    desc: "A digital workspace where users can find, book, and manage their study and meeting spaces.",
    link: "project-8bit.html"
  },
  {
    img: "project3.png",
    title: "Ctrl.Alt.Elite",
    desc: "A peer-to-peer marketplace for buying and selling study notes, synced to a personal digital library.",
    link: "project-ctrlaltelite.html"
  }
];

let activeIndex = 0;

function renderCarousel() {
  const folderBodies = document.querySelectorAll('.folder-body');

  folderBodies.forEach(el => el.classList.add('swapping'));

  setTimeout(() => {
    const prevIndex = (activeIndex - 1 + projects.length) % projects.length;
    const nextIndex = (activeIndex + 1) % projects.length;

    document.getElementById('imgPrev').src = projects[prevIndex].img;
    document.getElementById('imgActive').src = projects[activeIndex].img;
    document.getElementById('imgNext').src = projects[nextIndex].img;

    document.getElementById('titleActive').textContent = projects[activeIndex].title;
    document.getElementById('descActive').textContent = projects[activeIndex].desc;

    const linkActive = document.getElementById('linkActive');
    linkActive.href = projects[activeIndex].link;

    folderBodies.forEach(el => el.classList.remove('swapping'));
  }, 200);
}

document.getElementById('nextProject').addEventListener('click', () => {
  activeIndex = (activeIndex + 1) % projects.length;
  renderCarousel();
});

document.getElementById('prevProject').addEventListener('click', () => {
  activeIndex = (activeIndex - 1 + projects.length) % projects.length;
  renderCarousel();
});

const readMoreBtn = document.getElementById('readMoreBtn');
const aboutMore = document.getElementById('aboutMore');

readMoreBtn.addEventListener('click', () => {
  aboutMore.classList.toggle('show');
  readMoreBtn.textContent = aboutMore.classList.contains('show') ? 'Read Less' : 'Read More';
});

renderCarousel();