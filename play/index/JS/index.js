var start;
var timerInterval;
var winningDelayTimer;

function onLoadFunction() {
    //closeNav();
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
    startTimer();

}

function showEmojiSelector() {
    $(".overlayEmoji").css("display", "block");
}


function hideEmojiSelector() {
    $(".overlayEmoji").css("display", "none");
}

function showPlayerSelector() {
    $(".overlayPlayer").css("display", "block");
}

function hidePlayerSelector() {
    $(".overlayPlayer").css("display", "none");
}

function startTimer() {
    start = new Date;
    $(".actionBar-timer").css("color", "#ff2d1f");
    timerInterval = setInterval(function() {
        $('.Timer').text(Math.floor((new Date - start) / 1000));
    }, 1000);

    var winningDelay = (Math.floor(Math.random() * 13) + 5)*1000;
    console.log(winningDelay/1000-1);
    winningDelayTimer = setTimeout(function () {
        stopTimer();
    }, winningDelay);
}

function stopTimer() {
    $(".actionBar-timer").css("color", "#5FBD28");
    clearTimeout(winningDelayTimer);
    clearInterval(timerInterval);
    $('.Timer').text("0");
}


function startGame() {
    $(".actionBar").animate({ opacity: 1 });

    connectPartner();




}