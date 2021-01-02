const body = document.body,
      switcher = document.querySelector('.switcher');

switcher.addEventListener('click', change);

function change() {
  switcher.classList.toggle('active')
  body.classList.toggle('after-change')
}