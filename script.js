window.addEventListener('scroll', function() {
    const topnav = document.querySelector('.topnav');
    if (window.scrollY > 0) {
      topnav.classList.add('black');
    } else {
      topnav.classList.remove('black');
    }
  });


function techStackFunction() {
  var project1 = document.getElementById('port-project-1')
  var project2 = document.getElementById('port-project-2')
  var project3 = document.getElementById('port-project-3')
  var project4 = document.getElementById('port-project-4')
  var techstack = document.getElementById('port-tech-section')
  project1.classList.add('hidden')
  project2.classList.add('hidden')
  project3.classList.add('hidden')
  project4.classList.add('hidden')
  techstack.classList.remove('hidden')
}


function projectFunction() {
  var project1 = document.getElementById('port-project-1')
  var project2 = document.getElementById('port-project-2')
  var project3 = document.getElementById('port-project-3')
  var project4 = document.getElementById('port-project-4')
  var techstack = document.getElementById('port-tech-section')
  project1.classList.remove('hidden')
  project2.classList.remove('hidden')
  project3.classList.remove('hidden')
  project4.classList.remove('hidden')
  techstack.classList.add('hidden')
}

const toggleBtn = document.getElementById('darkmode-btn');

const body = document.body;

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

});

