const headerContainer = document.querySelector('.header-container');
const menuButton = document.querySelector('.link-menu');
const closeButton = document.querySelector('.close-button');
const sidebar = document.querySelector('.sidebar');
const navLink = document.querySelector('.navlink');

window.addEventListener('scroll', ()=>{
  if(window.scrollY > 30){
    headerContainer.classList.add('active');
  } else {
    headerContainer.classList.remove('active');
  }
});

menuButton.addEventListener('click', (e)=>{
  e.preventDefault();
  sidebar.classList.add('active');
});

closeButton.addEventListener('click',(e)=>{
    e.preventDefault();
    sidebar.classList.remove('active');
});

navLink.addEventListener('click', (e)=>{
  e.preventDefault();
});