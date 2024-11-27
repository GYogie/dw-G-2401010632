
const logo = document.getElementById('logo');

logo.addEventListener('click', function (event) {
  event.preventDefault(); 
  location.reload();      
});