const body = document.body,
      switcher = document.querySelector('.switcher'),
      whiteTxt = document.querySelectorAll('.white-text'),
      topCards = document.querySelectorAll('.users'),
      bottomCards = document.querySelectorAll('.page-overview');

switcher.addEventListener('click', change);

function change() {
  switcher.classList.toggle('active')
  body.classList.toggle('after-change')

  topCards.forEach(card => {
    card.classList.toggle('background-changer')
  });

  bottomCards.forEach(cards => {
    cards.classList.toggle('second-background-changer');
    console.log(123)
  })

  whiteTxt.forEach(text =>{
    if(text.style.color !== 'white'){
      text.style.color = 'white'
    } else{
      text.style.color = 'hsl(230, 17%, 14%)'
    }
  });
}