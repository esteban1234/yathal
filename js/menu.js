$(function() {
    var contador = 1;
    var pull = $('.op-menu');
    menu = $('nav');
    abrir = $('.abrir');
    cerrar = $('.cerrar');
    menuHeight = pull.height();

    $(pull).on('click', function(e) {
        e.preventDefault();
        if (contador == 1) {
           menu.slideToggle(100);
            contador = 0;
        } else {
            menu.slideToggle(100);
            // abrir.slideToggle(100);
            contador = 1;
        }
    });

    // if(menuHeight > 5){
    //   pull.css('position','fixed');
    // }
});
