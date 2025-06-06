window.addEventListener('scroll', function() {
    const topnav = document.querySelector('.topnav');
    if (window.scrollY > 0) {
      topnav.classList.add('black');
    } else {
      topnav.classList.remove('black');
    }
  });