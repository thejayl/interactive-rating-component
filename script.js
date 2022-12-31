'use strict';

const submitBtn = document.querySelector('.btn');
const sectionRating = document.querySelector('.section-rating');
const sectionState = document.querySelector('.section-state');
const numberList = document.querySelector('.number-list');
const ratingNum = document.querySelector('.rating-number');

numberList.addEventListener('click', e => {
  e.target.classList.add('active');
});

submitBtn.addEventListener('click', e => {
  e.preventDefault;

  const num = document.querySelector('.number.active');
  if (!num) return;

  const rating = num.textContent.trim();

  sectionRating.classList.add('hidden');
  sectionState.classList.remove('hidden');

  ratingNum.textContent = rating;
});
