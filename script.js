// Smooth scroll behavior is handled by CSS
// Add any interactive enhancements here

// Music mute toggle (top of page)
(function () {
  var btn = document.getElementById('music-mute');
  var bgMusic = document.getElementById('bg-music');
  var iconOn = btn && btn.querySelector('.music-mute__icon--on');
  var iconOff = btn && btn.querySelector('.music-mute__icon--off');
  if (!btn || !bgMusic) return;
  btn.addEventListener('click', function () {
    bgMusic.muted = !bgMusic.muted;
    if (iconOn) iconOn.hidden = bgMusic.muted;
    if (iconOff) iconOff.hidden = !bgMusic.muted;
    btn.setAttribute('title', bgMusic.muted ? 'Unmute music' : 'Mute music');
    btn.setAttribute('aria-label', bgMusic.muted ? 'Unmute background music' : 'Mute background music');
  });
  if (iconOn) iconOn.hidden = bgMusic.muted;
  if (iconOff) iconOff.hidden = !bgMusic.muted;
})();

// Fade in on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for fade-in
document.querySelectorAll('.section, .day, .attire-day').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});