const canvas = document.querySelector('.canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');
const frameCount = 370;

const getZeroes = (index) => {
  if (index < 10) {
    return '000';
  } else if (index < 100) {
    return '00';
  } else {
    return '0';
  }
};

const getCurrentFrame = (index) => {
  return `./blender/${getZeroes(index)}${(index + 1).toString()}.jpg`;
};

const images = [];
let ball = { frame: 0 };

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = getCurrentFrame(i);
  console.log(getCurrentFrame(i));
  images.push(img);
}

gsap.to(ball, {
  frame: frameCount - 1,
  snap: 'frame',
  ease: 'none',
  scrollTrigger: {
    scrub: 0.5,
    pin: 'canvas',
    end: '500%',
  },
  onUpdate: render,
});

gsap.fromTo(
  '.name-txt',
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: 0,

      start: '-10%',
      end: '5%',
    },
    onComplete: () => {
      gsap.to('.name-txt', { opacity: 0 });
    },
  }
);
gsap.fromTo(
  '.about-txt',
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: 0,

      start: '-10%',
      end: '5%',
    },
    onComplete: () => {
      gsap.to('.about-txt', { opacity: 0 });
    },
  }
);
gsap.fromTo(
  '.projects',
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: 0,

      start: '20%',
      end: '40%',
    },
    onComplete: () => {
      gsap.to('.projects', { opacity: 0 });
    },
  }
);
gsap.fromTo(
  '.contact',
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: 0,

      start: '50%',
      end: '100%',
    },
    onComplete: () => {
      gsap.to('.contact', { opacity: 0 });
    },
  }
);

images[0].onload = render;

function render() {
  context.canvas.width = images[0].width;
  context.canvas.height = images[0].height;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[ball.frame], 0, 0);
}
