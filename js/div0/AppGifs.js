///<reference path="../libs/jQuery/jqueryTS/jquery.d.ts"/>
///<reference path="../libs/collections/List.ts"/>
///<reference path="Scene.ts"/>
///<reference path="ScenesParser.ts"/>
var AppGifs = (function () {
    function AppGifs() {
        this.currentSequenceIndex = 0;
        //private gifs:string[] = ["img/gifs/1.gif", "img/gifs/2.gif", "img/gifs/3.gif", "img/gifs/4.gif"];
        this.gifs = ["img/gifs/1.gif", "img/gifs/2.gif", "img/gifs/3.gif", "img/gifs/4.gif"];
        this.parseScenes();
        this.createPreloadCollection();
        //console.log("start preloading images ",this.gifs);
        //preloadImages(this.gifs, (value)=>this.preloadProgress(value), ()=>this.preloadFinished());
    }
    AppGifs.prototype.parseScenes = function () {
        this.scenes = ScenesParser.parse(Scenes);
    };
    AppGifs.prototype.createPreloadCollection = function () {
        var iterator = this.scenes.getIterator();
        while (iterator.next()) {
            var scene = iterator.next();
            if (scene.isUseAnimation()) {
                this.gifs.push(scene.getAnimationUrl());
            }
        }
    };
    AppGifs.prototype.start = function () {
        var _this = this;
        $("#gifAnimation").attr("src", this.gifs[this.currentSequenceIndex]);
        $("#prevButton").click(function () { return _this.onPrevButtonClicked(); });
        $("#nextButton").click(function () { return _this.onNextButtonClicked(); });
        $("#animationControl").click(function () { return _this.onRestartAnimationClicked(); });
    };
    AppGifs.prototype.onPrevButtonClicked = function () {
        this.currentSequenceIndex--;
        if (this.currentSequenceIndex < 0) {
            this.currentSequenceIndex = this.gifs.length - 1;
        }
        $("#gifAnimation").attr("src", this.gifs[this.currentSequenceIndex]);
    };
    AppGifs.prototype.onNextButtonClicked = function () {
        this.currentSequenceIndex++;
        if (this.currentSequenceIndex == this.gifs.length) {
            this.currentSequenceIndex = 0;
        }
        $("#gifAnimation").attr("src", this.gifs[this.currentSequenceIndex]);
    };
    AppGifs.prototype.onRestartAnimationClicked = function () {
        $("#gifAnimation").attr("src", this.gifs[this.currentSequenceIndex]);
    };
    AppGifs.prototype.preloadProgress = function (value) {
        console.log("gifs", this.gifs);
        var progress = Math.round(100 - value / this.gifs.length * 100);
        console.log("progress ", progress);
        $("#preloadProgress").text(progress + " %");
    };
    AppGifs.prototype.preloadFinished = function () {
        console.log("preload complete");
        $("#preloadProgress").text("");
        this.start();
    };
    return AppGifs;
}());
//# sourceMappingURL=AppGifs.js.map