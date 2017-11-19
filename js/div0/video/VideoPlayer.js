///<reference path="../../libs/jQuery/jqueryTS/jquery.d.ts"/>
var VideoPlayer = (function () {
    function VideoPlayer(container, videoSource) {
        this.container = container;
        this.videoPlayer = $("<video id='animationVideo' autoplay></video>");
    }
    return VideoPlayer;
}());
//# sourceMappingURL=VideoPlayer.js.map