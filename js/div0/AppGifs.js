///<reference path="../libs/jQuery/jqueryTS/jquery.d.ts"/>
///<reference path="../libs/collections/List.ts"/>
///<reference path="Scene.ts"/>
///<reference path="ScenesParser.ts"/>
///<reference path="view/SceneInfoView.ts"/>
var AppGifs = (function () {
    function AppGifs() {
        var _this = this;
        this.ver = "0.0.3";
        this.currentSequenceIndex = 0;
        this.view = new SceneInfoView();
        this.showPreloader();
        $("#verContainer").text(this.ver);
        this.parseScenes();
        this.createPreloadCollection();
        this.preloadAnimation();
        EventBus.addEventListener("NO_ANIMATION_CONTENT_BUTTON_CLICKED", function () { return _this.onNoAnimationContentButtonClicked(); });
        EventBus.addEventListener("INTRO_BUTTON_CLICKED", function () { return _this.onIntroButtonClicked(); });
    }
    AppGifs.prototype.parseScenes = function () {
        this.scenes = ScenesParser.parse(Scenes);
    };
    AppGifs.prototype.createPreloadCollection = function () {
        this.cache = [];
        var iterator = this.scenes.getIterator();
        while (iterator.hasNext()) {
            var scene = iterator.next();
            if (scene.isUseAnimation()) {
                this.cache.push(scene.getAnimationUrl());
            }
        }
    };
    AppGifs.prototype.preloadAnimation = function () {
        var _this = this;
        preloadImages(this.cache, function (value) { return _this.preloadProgress(value); }, function () { return _this.preloadFinished(); });
    };
    AppGifs.prototype.showScene = function () {
        this.view.setData(this.currentScene, this.scenes.size());
    };
    AppGifs.prototype.start = function () {
        var _this = this;
        this.currentScene = this.scenes.get(this.currentSequenceIndex);
        this.showScene();
        $("#prevButton").click(function () { return _this.onPrevButtonClicked(); });
        $("#nextButton").click(function () { return _this.onNextButtonClicked(); });
        $("#rewindScenesButton").click(function () { return _this.onRewindButtonClicked(); });
        $("#animationControl").click(function () { return _this.onRestartAnimationClicked(); });
        $(".navigationBtnBackBlack").click(function () { return _this.onPrevButtonClicked(); });
        $(".navigationBtnForwBlack").click(function () { return _this.onNextButtonClicked(); });
        $(".navigationBtnRewindBlack").click(function () { return _this.onRewindButtonClicked(); });
    };
    AppGifs.prototype.onNoAnimationContentButtonClicked = function () {
        this.onNextButtonClicked();
    };
    AppGifs.prototype.onIntroButtonClicked = function () {
        this.onNextButtonClicked();
    };
    AppGifs.prototype.onPrevButtonClicked = function () {
        this.currentSequenceIndex--;
        if (this.currentSequenceIndex < 0) {
            this.currentSequenceIndex = this.scenes.size() - 1;
        }
        this.currentScene = this.scenes.get(this.currentSequenceIndex);
        this.showScene();
    };
    AppGifs.prototype.onNextButtonClicked = function () {
        this.currentSequenceIndex++;
        if (this.currentSequenceIndex == this.scenes.size()) {
            this.currentSequenceIndex = 0;
        }
        this.currentScene = this.scenes.get(this.currentSequenceIndex);
        this.showScene();
    };
    AppGifs.prototype.onRewindButtonClicked = function () {
        this.currentSequenceIndex = 0;
        this.currentScene = this.scenes.get(this.currentSequenceIndex);
        this.showScene();
    };
    AppGifs.prototype.onRestartAnimationClicked = function () {
        this.view.restartAnimation();
    };
    AppGifs.prototype.preloadProgress = function (value) {
        var progress = Math.round(100 - value / this.cache.length * 100);
        console.log("progress ", progress);
        $("#preloadProgress").text(progress + " %");
    };
    AppGifs.prototype.preloadFinished = function () {
        this.hidePreloader();
        this.showHeader();
        $("#preloadProgress").text("");
        this.start();
    };
    AppGifs.prototype.showHeader = function () {
        $("#header").show();
    };
    AppGifs.prototype.hidePreloader = function () {
        $("#preloaderContainer").hide();
    };
    AppGifs.prototype.showPreloader = function () {
        $("#preloaderContainer").show();
    };
    return AppGifs;
}());
//# sourceMappingURL=AppGifs.js.map