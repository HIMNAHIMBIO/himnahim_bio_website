    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");
    let index = 0;

    function showSlide(i) {
      slides.forEach(s => s.classList.remove("active"));
      dots.forEach(d => d.classList.remove("active"));
      slides[i].classList.add("active");
      dots[i].classList.add("active");
      index = i;
    }

    // 자동 전환
    setInterval(() => {
      let next = (index + 1) % slides.length;
      showSlide(next);
    }, 5000);

    //도트 클릭 기능
    dots.forEach(dot => {
      dot.addEventListener("click", () => {
        const i = parseInt(dot.getAttribute("data-index"));
        showSlide(i);
      });
    });

    // 스크롤 애니메이션 (제품 섹션)
    const fadeEls = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('show');
          }, i * 200);
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, { threshold: 0.2 });

    fadeEls.forEach(el => observer.observe(el));

    const fadeWrapper = document.querySelector('.fade-up-wrapper');

    const upObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          fadeWrapper.classList.add('show');
        } else {
          fadeWrapper.classList.remove('show');
        }
      });
    }, {threshold: 0.4 });
    upObserver.observe(fadeWrapper);

    let lastScrollTop = 0;
    const header = document.querySelector(".header");
    const stickySlogan = document.querySelector(".sticky-slogan");

    let isSloganAboveMiddle = false; // 슬로건이 중간 위에 있는 상태 플래그

    window.addEventListener("scroll", () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // 슬로건이 화면의 절반 이상 위로 올라간 상태에서는 헤더를 숨김
      if (scrollTop > lastScrollTop) {
        if (!isSloganAboveMiddle) {
          header.classList.add("hidden");
        }
      } else {
        if (!isSloganAboveMiddle) {
          header.classList.remove("hidden");
        }
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // ios bounce 대응
    });

    const middleTrigger = window.innerHeight / 2;

    const stickyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const boundingTop = entry.boundingClientRect.top;
        isSloganAboveMiddle = boundingTop < middleTrigger;
      });
    }, {
      threshold: 0,
    });

    stickyObserver.observe(stickySlogan);

    const slogan = document.querySelector('.sticky-slogan');

    const sloganObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
       if (entry.isIntersecting) {
         slogan.classList.add('visible');
       } else {
         slogan.classList.remove('visible');
       }
     });
    }, { threshold: 0.4 });

    sloganObserver.observe(slogan);

    //스크롤 시 나타나는 애니메이션 처리
    const fadeUps = document.querySelectorAll(".fade-up-text");

    const fadeUpObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    }, { threshold: 0.3 });

    fadeUps.forEach(el => fadeUpObserver.observe(el));

    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });

const valueRows = document.querySelectorAll('.value-row');

valueRows.forEach(row => {
  const cards = row.querySelectorAll('.value-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('show');
          }, index * 300);
        });
        observer.unobserve(entry.target); // 한 번만 실행
      }
    });
  }, { threshold: 0.4 });

  observer.observe(row);
});


    const segments = document.querySelectorAll('.fade-up-segment');

    const segmentObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, {
      threshold: 0.4
    });

    segments.forEach(segment => {
      segmentObserver.observe(segment);
    });

document.addEventListener("DOMContentLoaded", () => {
  const scrollTopBtn = document.getElementById("scrollToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  // 페이지 로드 시 fade-in
  document.body.style.opacity = '1';
});



  //회사명+슬로건 등장 섹션
    document.addEventListener("DOMContentLoaded", () => {
  const trigger = document.querySelector('.fade-trigger');
  const title = trigger.querySelector('.fade-title');
  const subtitle = trigger.querySelector('.fade-subtitle');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => title.classList.add('show'), 200);  // 0.2초 후 등장
        setTimeout(() => subtitle.classList.add('show'), 700); // 0.7초 후 등장
        observer.unobserve(trigger); // 한 번만 실행
      }
    });
  }, {
    threshold: 0.4
  });

  observer.observe(trigger);
});


  // 최종수정 비디오섹션 텍스트
document.addEventListener("DOMContentLoaded", () => {
  const text1 = document.querySelector('.fade-target-1');  // 첫 문구
  const title = document.querySelector('.fade-title');     // 회사명
  const subtitle = document.querySelector('.fade-subtitle'); // 슬로건

  // 첫 문구 등장
  const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        text1.classList.add('show');  // 등장
        text1.classList.remove('hide'); // 혹시 hide 상태였다면 해제
      }
    });
  }, { threshold: 0.3 });

  observer1.observe(document.querySelector('.fade-trigger-1'));

  // 첫 문구 사라지고 회사명 등장
  const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        text1.classList.remove('show'); // 사라질 때 show 제거
        text1.classList.add('hide');    // 페이드 아웃 처리

        // 회사명과 슬로건 순서대로 등장
        setTimeout(() => title.classList.add('show'), 400);
        setTimeout(() => subtitle.classList.add('show'), 1000);
      }
    });
  }, { threshold: 0.4 });

  observer2.observe(document.querySelector('.fade-trigger-2'));
});


