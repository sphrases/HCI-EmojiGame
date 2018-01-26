/**
 * JS for managing the video playback as well as webcam access.
 *
 * @author ABenjamins
 * @author CFelder
 * @since  10.01.2018
 */
var video = document.querySelector("#videoElement");
var currentPartner = "";
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
    var difference = (viewportWidth - videoWidth) / 4;
    if (viewportWidth == videoWidth) {
        difference = 0;
    }
    $("#videoElement").css("left", "0")
        .css("margin-left", "0");
}


function pos_to_neg(num) {
    return -Math.abs(num);
}

function connectPartner() {
    $(".containerVideo-connectText").animate({opacity: 1});
    setTimeout(function () {
        $(".containerVideo-connectText").animate({opacity: 0});
        $("#overlayVideo").animate({opacity: 1});
        //document.getElementById("overlayVideo").play();
    }, 3000);
}


function reConnectPartner() {
    if (currentPartner != "") {
        $("#overlayVideo").animate({opacity: 1});
    }
}

function disconnectPartner() {
    $(".containerVideo-connectText").animate({opacity: 0});
    $("#overlayVideo").animate({opacity: 0});
    //document.getElementById("overlayVideo").pause();

}

function selectPartner(partner) {
    stopTimer();
    switch (partner) {
        case "chris":
            currentPartner = "chris";
            changeVideo('chris');
            startGame();
            break;
        case "maurin":
            currentPartner = "maurin";
            changeVideo('maurin');
            startGame();
            break;
        case "mathis":
            currentPartner = "mathis";
            changeVideo('mathis');
            startGame();
            break;
        case "jesse":
            currentPartner = "jesse";
            changeVideo('jesse');
            startGame();
            break;
        case "ahmet":
            currentPartner = "ahmet";
            changeVideo('ahmet');
            startGame();
            break;
        case "aiko":
            currentPartner = "aiko";
            changeVideo('aiko');
            startGame();
            break;
    }
}


function changeVideo(video) {
    var newVideo = ['' +
    '<p class="containerVideo-connectText">partner connecting...</p>' +
    '<video id="overlayVideo" autoplay muted loop>' +
    '<source id="overlayVideoSrc" type="video/mp4" src="index/RES/' + video + 'Video.mp4"/>' +
    '</video>'
    ];
    $("#containerVideo").children().filter("video").each(function () {
        this.pause();
        delete this;
        $(this).remove();
    });
    $("#containerVideo").empty()
        .append(newVideo);
}