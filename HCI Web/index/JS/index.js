function onLoadFunction() {
    closeNav();
}

function toggleNav() {
    if($('#navBar').css('opacity') == 1) {
        closeNav();
    } else {
        openNav();
    }
}

function openNav() {
    $('#navBar-toggle').css('left', '-1vw');
    $('#navBar-hideBar').fadeTo(300, 0.3);
    $('#navBar').css('left','0vw')
        .fadeTo('fast',100);

}

function closeNav() {
    $('#navBar-toggle').css('left', '-3vw');
    $('#navBar-hideBar').fadeOut(200);
    $('#navBar').css('left','-60vw')
        .fadeTo('fast',0);
}