(function () {
    navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia);

    navigator.getUserMedia(
        // constraints
        {video:true, audio:false},

        // success callback
        function (mediaStream) {
            var video = $("#videoElement");
            video.srcObject = mediaStream;

        },
        //handle error
        function (error) {
            console.log(error);
        })
})();