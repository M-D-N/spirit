(function () {
    // const drop_menu = document.querySelector('.drop__menu');    
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger__active');
        // drop_menu.classList.toggle('menu__active');        
    });
  }());