const darkModeBtn = document.querySelectorAll('.dark-mode-button');


darkModeBtn.forEach(btn =>{
  btn.addEventListener('click',(e)=>{
    e.preventDefault();
    document.body.classList.toggle('dark-mode');
  });
});

