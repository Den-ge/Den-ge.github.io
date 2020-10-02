function burgerMenu (selector){
    let menu = $(selector);
    let button = menu.find ('.burger-menu__button');
    let links = menu.find ('.burger-menu__links');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());



    function toggleMenu(){
        menu.toggleClass('burger-menu_active');

    }
}
burgerMenu('.burger-menu');