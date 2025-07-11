// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function () {
  // EmailJS 초기화
  emailjs.init("JWMbWbbYhRK_FcCSI");

  // 폼 전송 이벤트
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    emailjs.sendForm('service_jvtls3t', 'template_c5xg1ov', this)
      .then(() => {
        alert('성공적으로 전송되었습니다. 감사합니다.');
        this.reset();
      }, (error) => {
        alert('메일 전송 실패: ' + error.text);
      });
  });

  // 위로가기 버튼
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

  // 페이지 fade-in
  document.body.style.opacity = '1';
});
