'use strict';

const spMenu = document.querySelector('.SP-menu');
const openBtn = document.getElementById('menu-open');
const closeBtn = document.getElementById('menu-close');

openBtn.addEventListener('click', () => {
  spMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  spMenu.classList.remove('active');
});