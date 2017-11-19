///<reference path="../libs/jQuery/jqueryTS/jquery.d.ts"/>
///<reference path="../Logger.ts"/>
var AppVideo = (function () {
    function AppVideo() {
        this.ver = "0.0.1";
        Logger.setContainer($("#logContainer"));
        Logger.info(this.ver);
        var sequenceData = SequencesData[0];
        var video = sequenceData.video;
    }
    return AppVideo;
}());
//# sourceMappingURL=AppVideo.js.map