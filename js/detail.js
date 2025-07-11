// 위로가기 버튼 기능
document.addEventListener('DOMContentLoaded', function () {
  const scrollToTopBtn = document.getElementById('scrollToTop');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = 'flex';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });

  scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // 페이지 로드 시 fade-in 효과
  document.body.style.opacity = '1';
});
