import gsap from 'gsap/all';

export default function RightSide() {
  gsap.to('#myWork', {
    opacity: 0.3,
    duration: 1
  });
  window.addEventListener('load', (e) => {
    if (e.currentTarget.innerWidth <= 768) {
      gsap.to('#myWork', {
        skewX: 0
      });
    } else if (e.currentTarget.innerWidth > 768) {
      gsap.to('#myWork', {
        skewX: -15
      });
    }
  });
  document.getElementById('myWork').addEventListener('mouseover', () => {
    gsap.to('#myWork', {
      opacity: 0.7
    });
    gsap.to('.background-image2', {
      height: '130%'
    });
  });
  document.getElementById('myWork').addEventListener('mouseout', () => {
    gsap.to('#myWork', {
      opacity: 0.3
    });
    gsap.to('.background-image2', {
      height: '100%'
    });
  });
  document.getElementById('myWork').addEventListener('click', () => {
    gsap.to('.background-image2', {
      height: '100%',
      duration: 0.6
    });
    if (window.innerWidth <= 768) {
      gsap.to('#myWork', {
        opacity: 0,
        y: 2000,
        delay: 0.6,
        duration: 1.4,
        onComplete: () => {
          // myworks 링크
          window.location =
            'https://wangchi-son.github.io/portfolio-site/#/myworks';
        }
      });
      gsap.to('#profile', {
        y: -2000,
        delay: 0.6,
        duration: 1.4
      });
    } else if (window.innerWidth > 768) {
      gsap.to('#myWork', {
        opacity: 0,
        x: 2000,
        delay: 0.6,
        duration: 1.4,
        onComplete: () => {
          // myworks 링크
          window.location =
            'https://wangchi-son.github.io/portfolio-site/#/myworks';
        }
      });
      gsap.to('#profile', {
        x: -2000,
        delay: 0.6,
        duration: 1.4
      });
    }
    gsap.to('#profileTitle', {
      color: 'rgb(0,0,0)',
      borderColor: 'rgb(0,0,0)',
      delay: 0.6,
      duration: 1.4
    });
    gsap.to('#myWorkTitle', {
      color: 'rgb(0,0,0)',
      borderColor: 'rgb(0,0,0)',
      delay: 0.6,
      duration: 1.4
    });
  });

  document.getElementById('myWorkTitle').addEventListener('click', () => {
    gsap.to('#myWorkTitle', {
      opacity: 0,
      duration: 0.3
    });

    gsap.to('.background-image2', {
      height: '100%',
      duration: 0.6
    });
    gsap.to('#myWork', {
      opacity: 0,
      x: 2000,
      delay: 0.6,
      duration: 1.4,
      onComplete: () => {
        // myworks 링크
        window.location =
          'https://wangchi-son.github.io/portfolio-site/#/myworks';
      }
    });
    gsap.to('#profile', {
      x: -2000,
      delay: 0.6,
      duration: 1.4
    });
    gsap.to('#profileTitle', {
      color: 'rgb(0,0,0)',
      borderColor: 'rgb(0,0,0)',
      delay: 0.6,
      duration: 1.4
    });
    gsap.to('#myWorkTitle', {
      color: 'rgb(0,0,0)',
      borderColor: 'rgb(0,0,0)',
      delay: 0.6,
      duration: 1.4
    });
  });
}
