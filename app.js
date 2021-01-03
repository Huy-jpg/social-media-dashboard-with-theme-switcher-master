const body = document.body,
      switcher = document.querySelector('.switcher'),
      whiteTxt = document.querySelectorAll('.white-text'),
      topCards = document.querySelectorAll('.users'),
      bottomCards = document.querySelectorAll('.page-overview'),
      names = document.querySelectorAll('.desaturate-color');

switcher.addEventListener('click', change);

function change() {
  switcher.classList.toggle('active')
  body.classList.toggle('after-change')

  names.forEach(name =>{
    name.classList.toggle('names-color-changer')
  });

  topCards.forEach(card => {
    card.classList.toggle('background-changer')
  });

  bottomCards.forEach(card => {
    card.classList.toggle('background-changer');
  })

  whiteTxt.forEach(text =>{
    if(text.style.color !== 'white'){
      text.style.color = 'white'
    } else{
      text.style.color = 'hsl(230, 17%, 14%)'
    }
  });
}