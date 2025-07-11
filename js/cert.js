document.addEventListener('DOMContentLoaded', function () {
  // 모달 동작
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const closeBtn = document.querySelector('.close');

  document.querySelectorAll('.cert-item img').forEach(img => {
    img.addEventListener('click', () => {
      modal.style.opacity = '0';
      modal.style.display = 'block';
      setTimeout(() => modal.style.opacity = '1', 10);
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  function closeModal() {
    modal.style.opacity = '0';
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300);
  }

  closeBtn.addEventListener('click', closeModal);
  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  // 위로가기 버튼 기능
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
