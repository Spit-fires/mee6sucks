const wrapper = document.querySelector('.wrapper');
const indicators = [...document.querySelectorAll('.indicators .button')];

let currentTestimonial = 0; // Default 0

indicators.forEach((item, i) => {
  item.addEventListener('click', () => {
    indicators[currentTestimonial].classList.remove('active');
    wrapper.style.marginLeft = `-${100 * i}%`;
    item.classList.add('active');
    currentTestimonial = i;
  })
})


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function nbo() {
  var x = document.getElementById("nl");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
