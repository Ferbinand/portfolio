let btn = document.getElementById('sobremiBtn');
let sobremiSection = document.getElementById('sobremi');

btn.addEventListener('click', () => {
    sobremiSection.scrollIntoView({ behavior: 'smooth' });
  });




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
      });
  });
});


