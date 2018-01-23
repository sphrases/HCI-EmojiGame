var start;
var timerInterval;
var winningDelayTimer;
var currentEmoji = "Grimasse";

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
    $('#navBar-toggle').fadeTo(100, 0);
    $('#navBar-hideBar').fadeTo(300, 0.3);
    $('#navBar').css('left', '0vw')
        .fadeTo('fast', 100);

}

function closeNav() {
    $('#navBar-toggle').fadeTo(100, 1);
    $('#navBar-hideBar').fadeOut(200);
    $('#navBar').css('left', '-60vw')
        .fadeTo('fast', 0);
}


function setEmoji(emoji) {

    hideEmojiSelector();
    switch (emoji) {
        case "Grimasse":
            currentEmoji = "Grimasse";
            $("#emojiPic").attr("src", "index/RES/grimasse.png");
            break;
        case "Grinning":
            currentEmoji = "Grinning";
            $("#emojiPic").attr("src", "index/RES/grinning.png");
            break;
        case "Nerd":
            currentEmoji = "Nerd";
            $("#emojiPic").attr("src", "index/RES/nerd.png");
            break;
        case "Shy":
            currentEmoji = "Shy";
            $("#emojiPic").attr("src", "index/RES/shy.png");
            break;
        case "Sunglasses":
            currentEmoji = "Sunglasses";
            $("#emojiPic").attr("src", "index/RES/sunglasses.png");
            break;
        case "Zunge":
            currentEmoji = "Zunge";
            $("#emojiPic").attr("src", "index/RES/zunge.png");
            break;

        case "Grimasse_G":
            $("#emojiPic").attr("src", "index/RES/green/grimasse_green.png");
            break;
        case "Grinning_G":
            $("#emojiPic").attr("src", "index/RES/green/grinning_green.png");
            break;
        case "Nerd_G":
            $("#emojiPic").attr("src", "index/RES/green/nerd_green.png");
            break;
        case "Shy_G":
            $("#emojiPic").attr("src", "index/RES/green/shy_green.png");
            break;
        case "Sunglasses_G":
            $("#emojiPic").attr("src", "index/RES/green/sunglasses_green.png");
            break;
        case "Zunge_G":
            $("#emojiPic").attr("src", "index/RES/green/zunge_green.png");
            break;
    }
}

function showEmojiSelector() {
    $('#navBar-toggle').fadeTo(100, 0);
    $(".overlayEmoji").css("display", "block")
        .animate({opacity: 1});
}


function hideEmojiSelector() {
    $('#navBar-toggle').fadeTo(100, 1);
    $(".overlayEmoji").animate({opacity: 0})
        .css("display", "none");
}

function showPlayerSelector() {
    $('#navBar-toggle').fadeTo(100, 0);
    $(".overlayPlayer").css("display", "block")
        .animate({opacity: 1});
}

function hidePlayerSelector() {
    $('#navBar-toggle').fadeTo(100, 1);
    $(".overlayPlayer").animate({opacity: 0})
        .css("display", "none");
}

function startTimer() {
    start = new Date;
    $(".actionBar-timer").css("color", "#ff2d1f");
    timerInterval = setInterval(function () {
        $('.Timer').text(Math.floor((new Date - start) / 1000));
    }, 1000);

    var winningDelay = (Math.floor(Math.random() * 13) + 5) * 1000;
    console.log(winningDelay / 1000 - 1);
    winningDelayTimer = setTimeout(function () {
        stopTimer2();
    }, winningDelay);
}

function stopTimer() {
    $(".actionBar-timer").css("color", "#5FBD28");
    clearTimeout(winningDelayTimer);
    clearInterval(timerInterval);
    $('.Timer').text("0");
}

function stopTimer2() {
    $(".actionBar-timer").css("color", "#5FBD28");
    clearTimeout(winningDelayTimer);
    clearInterval(timerInterval);
    $('.Timer').text("0");

    setEmoji(currentEmoji + "_G");
    setTimeout(function () {
        setEmoji(currentEmoji);
    }, 2000);
}

function startGame() {
    $(".actionBar").css("display", "flex")
        .animate({opacity: 1});
    stopTimer();
    connectPartner();
}