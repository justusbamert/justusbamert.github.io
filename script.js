// Navigation stays highlighted for whichever section is currently in view.
const sectionIds = ['home', 'working-papers', 'work-in-progress', 'teaching', 'policy'];
const sectionLinks = [...document.querySelectorAll('[data-section]')];
const sections = sectionIds.map(id => document.getElementById(id));
const profilePhoto = document.getElementById('profile-photo');
if (profilePhoto) {
  profilePhoto.addEventListener('error', () => profilePhoto.parentElement.classList.add('photo-error'));
  if (profilePhoto.complete && profilePhoto.naturalWidth === 0) profilePhoto.parentElement.classList.add('photo-error');
}
function highlightSection() {
  const threshold = window.innerHeight * 0.24 + document.querySelector('.site-header').offsetHeight;
  let current = 'home';
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= threshold) current = section.id;
  }
  const navSection = (current === 'working-papers' || current === 'work-in-progress') ? 'research' : current;
  for (const link of sectionLinks) {
    const active = link.dataset.section === navSection;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}
window.addEventListener('scroll', highlightSection, { passive: true });
window.addEventListener('resize', highlightSection);
window.addEventListener('hashchange', highlightSection);
highlightSection();
