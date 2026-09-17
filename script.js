const projects = [
  {
    img: "project1.png",
    title: "WOW: Wednesday Rush",
    desc: "A Python-built game based on a true story: no elevators on Wednesdays meant a mad dash to the 6th floor computer laboratory.",
    link: "project-wow.html"
  },
  {
    img: "project2.png",
    title: "8-Bit Working Space",
    desc: "A coworking space booking platform where users can reserve study spots and meeting rooms.",
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
  
  // Add swapping class for quick fade effect
  folderBodies.forEach(el => el.classList.add('swapping'));

  setTimeout(() => {
    const prevIndex = (activeIndex - 1 + projects.length) % projects.length;
    const nextIndex = (activeIndex + 1) % projects.length;

    const imgPrev = document.getElementById('imgPrev');
    const imgActive = document.getElementById('imgActive');
    const imgNext = document.getElementById('imgNext');
    const titleActive = document.getElementById('titleActive');
    const descActive = document.getElementById('descActive');
    const linkActive = document.getElementById('linkActive');

    if (imgPrev) imgPrev.src = projects[prevIndex].img;
    if (imgActive) imgActive.src = projects[activeIndex].img;
    if (imgNext) imgNext.src = projects[nextIndex].img;

    if (titleActive) titleActive.textContent = projects[activeIndex].title;
    if (descActive) descActive.textContent = projects[activeIndex].desc;
    if (linkActive) linkActive.href = projects[activeIndex].link;

    // Remove swapping class to trigger smooth fade-in
    folderBodies.forEach(el => el.classList.remove('swapping'));
  }, 150);
}

const nextBtn = document.getElementById('nextProject');
const prevBtn = document.getElementById('prevProject');

if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    activeIndex = (activeIndex + 1) % projects.length;
    renderCarousel();
  });
}

if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    activeIndex = (activeIndex - 1 + projects.length) % projects.length;
    renderCarousel();
  });
}

const readMoreBtn = document.getElementById('readMoreBtn');
const aboutMore = document.getElementById('aboutMore');

if (readMoreBtn && aboutMore) {
  readMoreBtn.addEventListener('click', () => {
    aboutMore.classList.toggle('show');

    if (aboutMore.classList.contains('show')) {
      readMoreBtn.textContent = 'Read Less';
    } else {
      readMoreBtn.textContent = 'Read More';
    }
  });
}

document.addEventListener('DOMContentLoaded', renderCarousel);