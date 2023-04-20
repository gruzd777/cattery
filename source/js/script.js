let promoButton = document.querySelector('.promo__button');
let sectionPets = document.querySelector('.pets');

promoButton.addEventListener('click', smoothScroll);

function smoothScroll() {
    sectionPets.scrollIntoView({ behavior: 'smooth', block: 'end'});
}

let answersTextWrapper = Array.from(document.querySelectorAll('.answers__text-wrapper'));
let answersButtons = Array.from(document.querySelectorAll('.answers__btn'));


answersTextWrapper.forEach((item) => {
  item.classList.add('answers__text-wrapper--closed');
})

answersButtons.forEach((item, index) => {
  item.addEventListener('click', () => {
    answersTextWrapper[index].classList.toggle('answers__text-wrapper--closed');
  })
})
