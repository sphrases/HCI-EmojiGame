function onLoadFunction() {
    closeNav();
}

function toggleNav() {
    if ($('#navBar').css('opacity') == 1) {
        closeNav();
    } else {
        openNav();
    }
}

function openNav() {
    $('#navBar-toggle').css('left', '-1vw');
    $('#navBar-hideBar').fadeTo(300, 0.3);
    $('#navBar').css('left', '0vw')
        .fadeTo('fast', 100);

}

function closeNav() {
    $('#navBar-toggle').css('left', '-3vw');
    $('#navBar-hideBar').fadeOut(200);
    $('#navBar').css('left', '-60vw')
        .fadeTo('fast', 0);
}


function setEmoji(emoji) {
    hideEmojiSelector();
    switch (emoji) {
        case "Grimasse":
            $("#emojiPic").attr("src","index/RES/grimasse.png");
            break;
        case "Grinning":
            $("#emojiPic").attr("src","index/RES/grinning.png");
            break;
        case "Nerd":
            $("#emojiPic").attr("src","index/RES/nerd.png");
            break;
        case "Shy":
            $("#emojiPic").attr("src","index/RES/shy.png");
            break;
        case "Sunglasses":
            $("#emojiPic").attr("src","index/RES/sunglasses.png");
            break;
        case "Zunge":
            $("#emojiPic").attr("src","index/RES/zunge.png");
            break;

        case "Grimasse_G":
            $("#emojiPic").attr("src","index/RES/green/grimasse_green.png");
            break;
        case "Grinning_G":
            $("#emojiPic").attr("src","index/RES/green/grinning_green.png");
            break;
        case "Nerd_G":
            $("#emojiPic").attr("src","index/RES/green/nerd_green.png");
            break;
        case "Shy_G":
            $("#emojiPic").attr("src","index/RES/green/shy_green.png");
            break;
        case "Sunglasses_G":
            $("#emojiPic").attr("src","index/RES/green/sunglasses_green.png");
            break;
        case "Zunge_G":
            $("#emojiPic").attr("src","index/RES/green/zunge_green.png");
            break;
    }

}

function showEmojiSelector() {
    $("#overlay").css("display", "block");
}


function hideEmojiSelector() {
    $("#overlay").css("display", "none");
}

function startTimer() {




}
