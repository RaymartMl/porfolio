// Get year and insert in span
const year = document.querySelector('#year');
const getYear = () => new Date().getFullYear();
year.innerText = getYear();

// Smooth scrolling
$("nav ul li a[href^='#']").on('click', function(e) {
  // prevent default anchor click behavior
  e.preventDefault();
  // store hash (id value)
  const hash = this.hash;

  // animate
  $('html, body').animate(
    {
      scrollTop: $(hash).offset().top
    },
    700,
    function() {
      // when done, add hash to url
      window.location.hash = hash;
    }
  );
});
