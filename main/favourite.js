const modal = document.querySelectorAll('.modal1');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelectorAll('.close-modal');
const btnOpen = document.querySelectorAll('.buttonImg');

const openform = (index) => {
  console.log('btn clicked');
  modal[index].classList.remove('hidden1');
  overlay.classList.remove('hidden1');
};

const closeform = (ind) => {
      console.log('btn clicked');
      modal[ind].classList.add('hidden1');
      overlay.classList.add('hidden1');
  };

for (let i = 0; i < btnOpen.length; i++) {
  btnOpen[i].addEventListener('click', () => openform(i)); // Pass the index as an argument to openform
  btnClose[i].addEventListener('click',()=> closeform(i));
}
