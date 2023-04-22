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
  item.classList.add('answers__btn--closed');
  item.addEventListener('click', () => {
    answersTextWrapper[index].classList.toggle('answers__text-wrapper--closed');
    item.classList.toggle('answers__btn--closed');
  })
})

let catList = Array.from(document.querySelectorAll('.pets__button'));

catList.forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelector('.pets__button--active').classList.remove('pets__button--active');
    item.classList.add('pets__button--active');
  });
})
