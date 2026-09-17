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
  
  function renderCarousel(){
    const prevIndex = (activeIndex - 1 + projects.length) % projects.length;
    const nextIndex = (activeIndex + 1) % projects.length;
  
    document.getElementById('imgPrev').src = projects[prevIndex].img;
    document.getElementById('imgActive').src = projects[activeIndex].img;
    document.getElementById('imgNext').src = projects[nextIndex].img;
  
    document.getElementById('titleActive').textContent = projects[activeIndex].title;
    document.getElementById('descActive').textContent = projects[activeIndex].desc;
    document.getElementById('linkActive').href = projects[activeIndex].link;
  }
  
  document.getElementById('nextProject').addEventListener('click', () => {
    activeIndex = (activeIndex + 1) % projects.length;
    renderCarousel();
  });
  
  document.getElementById('prevProject').addEventListener('click', () => {
    activeIndex = (activeIndex - 1 + projects.length) % projects.length;
    renderCarousel();
  });
  
  renderCarousel();