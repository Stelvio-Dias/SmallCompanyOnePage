$(document).ready(function(){
    const menuBtn = document.querySelector(".btn-area");
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
        if(!menuOpen){
            menuBtn.classList.add('open');
            menuOpen = true;
        }else {
            menuBtn.classList.remove('open');
            menuOpen = false;
        }
    });
    //Inicializando a bibilioteca do AOS init
    AOS.init();
    
    $(window).scroll(function(){
        $('.navigator').toggleClass('scrolled', $(this).scrollTop() > 1)
    })
})