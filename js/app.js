// Get year and insert in span
const year = document.querySelector('#year');
const getYear = () => new Date().getFullYear();
year.innerText = getYear();
