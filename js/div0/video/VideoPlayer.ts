///<reference path="../../libs/jQuery/jqueryTS/jquery.d.ts"/>
class VideoPlayer {

    private container:any;

    private videoPlayer:any;

    constructor(container:any, videoSource:string) {
        this.container = container;
        this.videoPlayer = $("<video id='animationVideo' autoplay></video>");
    }
}
