var video = document.querySelector("#videoElement");

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

if (navigator.getUserMedia) {
    navigator.getUserMedia({video: true}, handleVideo, videoError);
}

function handleVideo(stream) {
    video.srcObject = stream;
}

function videoError(e) {
    console.log(e);
}


function scaleVideo() {
    var viewportWidth = $(window).width();
    var videoWidth = $("#videoElement").width();

    var moveLeft = pos_to_neg(videoWidth / 2) + viewportWidth;

    console.log("video Breite " + videoWidth);
    console.log("video Hälfte " + videoWidth / 2);
    console.log("VP Breite " + viewportWidth);
    console.log("VP hälfte " + viewportWidth / 2);
    console.log(" ");
    console.log("nach rechts um " + viewportWidth / 2);
    console.log("nach links um " + moveLeft);
    $("#videoElement").css("left", viewportWidth / 2)
        .css("margin-left", moveLeft);
}


function pos_to_neg(num) {
    return -Math.abs(num);
}

function connectPartner() {
    $(".containerVideo-connectText").animate({opacity: 1});
    setTimeout(function () {
        $(".containerVideo-connectText").animate({opacity: 0});
        $("#overlayVideo").animate({opacity: 1});
    }, 5000);
}

function disconnectPartner() {
    $(".containerVideo-connectText").animate({opacity: 0});
    $(".containerVideo-connectText").animate({opacity: 0});
    $("#overlayVideo").animate({opacity: 0});

}

function selectPartner(partner) {
    switch (partner) {
        case "chris":
            $("#overlayVideo").attr("src", "index/RES/chrisVideo.mp4");
            startGame();
            break;
        case "maurin":
            $("#overlayVideo").attr("src", "index/RES/maurinVideo.mp4");
            startGame();
            break;
        case "ahmet":
            $("#overlayVideo").attr("src", "index/RES/ahmetVideo.mp4");

            break;
        case "darian":
            $("#overlayVideo").attr("src", "index/RES/darianVideo.mp4");

            break;
    }


}