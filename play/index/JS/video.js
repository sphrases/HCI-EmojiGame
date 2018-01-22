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
    var difference = (viewportWidth - videoWidth) / 4;
    console.log(viewportWidth);
    console.log(videoWidth);

    console.log(difference);
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

function disconnectPartner() {
    $(".containerVideo-connectText").animate({opacity: 0});
    $("#overlayVideo").animate({opacity: 0});
    //document.getElementById("overlayVideo").pause();

}

function selectPartner(partner) {
    stopTimer();

    switch (partner) {
        case "chris":
            $("#overlayVideoSRC").empty();
            $("#overlayVideo")
                .html('<source id="overlayVideoSRC" src="index/RES/chrisVideo.mp4" type="video/mp4" />');
            startGame();
            break;
        case "maurin":
            $("#overlayVideoSRC").empty();
            $("#overlayVideo").html('<source id="overlayVideoSRC" src="index/RES/maurinVideo.mp4" type="video/mp4" />');
            startGame();
            break;
        case "mathis":
            $("#overlayVideoSRC").pause()
                .attr("src", "index/RES/mathisVideo.mp4")
                .play();
            startGame();
            break;
        case "jesse":
            $("#overlayVideoSRC").pause()
                .attr("src", "index/RES/jesseVideo.mp4")
                .play();
            startGame();
            break;
        case "ahmet":
            $("#overlayVideoSRC").pause()
                .attr("src", "index/RES/ahmetVideo.mp4")
                .play();
            startGame();
            break;
        case "aiko":
            $("#overlayVideoSRC").pause()
                .attr("src", "index/RES/aikoVideo.mp4")
                .play();
            startGame();
            break;
    }
}