/* ===================================================
   명지국제오션룸 — B안 스크립트
   =================================================== */

// 1) 푸터 연도
document.getElementById('year').textContent = new Date().getFullYear();

// 2) 스크롤 시 헤더 배경
const hdr = document.getElementById('hdr');
const onScroll = () => hdr.classList.toggle('on', window.scrollY > 40);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// 3) 등장 애니메이션
const targets = document.querySelectorAll(
  '.h-serif, .letter, .prow, .mitem, .erow, .linfo, .lmap, .hero-txt, .hero-fig'
);
targets.forEach(el => el.classList.add('rv'));

const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
  });
}, { threshold: 0.1 });
targets.forEach(el => io.observe(el));

// 4) 앵커 이동 시 헤더 높이 보정
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    const t = document.querySelector(id);
    if (!t) return;
    e.preventDefault();
    window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 76, behavior: 'smooth' });
  });
});

/* 지도는 index.html 에 구글맵 iframe 으로 직접 넣었습니다 (API 키 불필요). */
