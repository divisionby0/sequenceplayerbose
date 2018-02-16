///<reference path="../../libs/jQuery/jqueryTS/jquery.d.ts"/>
///<reference path="../Scene.ts"/>
///<reference path="../../libs/events/EventBus.ts"/>
var SceneInfoView = (function () {
    function SceneInfoView() {
        var _this = this;
        $("#noAnimationContentButton").click(function () { return _this.onNoAnimationContentButtonClicked(); });
        //$("#whyButton").click(()=>this.onWhyButtonClicked());
        $(".gifAnimationOverlayCloseButton").click(function () { return _this.onWhyCloseButtonClicked(); });
        $("#introButton").click(function () { return _this.onIntroButtonClicked(); });
        $("#outroButton").click(function () { return _this.onOutroButtonClicked(); });
    }
    SceneInfoView.prototype.restartAnimation = function () {
        $("#gifAnimation").attr("src", this.currentScene.getAnimationUrl());
    };
    SceneInfoView.prototype.setData = function (data, totalScenes) {
        var _this = this;
        this.currentScene = data;
        var sceneInfoText = data.getInfoText();
        var whyText = data.getWhyText();
        var sceneCounter = data.getCounter();
        var animationUrl = data.getAnimationUrl();
        $("#whyInfoContainer").hide();
        $(".navigationPagination").text(sceneCounter + "/" + totalScenes);
        if (data.hasAdditionalControls()) {
            $("#noAnimationContentButton").text(data.getControls()[0].text);
        }
        this.hideIntro();
        this.hideOutro();
        this.hideNoAnimationContent();
        this.hideGifAnimationOverlay();
        switch (sceneCounter) {
            case 1:
                this.updateIntroText(sceneInfoText);
                this.showIntro();
                this.hideAnimationContent();
                this.hideNoAnimationContent();
                break;
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
                this.updateAnimationContent(sceneInfoText, whyText, animationUrl);
                this.showAnimationContent();
                $("#whyButton").click(function () { return _this.onWhyButtonClicked(); });
                break;
            case 8:
                this.updateNoAnimationContent(sceneInfoText);
                this.hideAnimationContent();
                this.showNoAnimationContent();
                break;
            case 15:
                this.updateOutroText(sceneInfoText);
                this.showOutro();
                this.hideAnimationContent();
                this.hideNoAnimationContent();
                break;
        }
    };
    SceneInfoView.prototype.hideAnimationContent = function () {
        $("#contentHasAnimation").hide();
        $("#gifAnimation").attr("src", "none");
    };
    SceneInfoView.prototype.showAnimationContent = function () {
        $("#contentHasAnimation").show();
    };
    SceneInfoView.prototype.updateAnimationContent = function (sceneInfoText, whyText, animationUrl) {
        $("#gifAnimation").attr("src", animationUrl);
        $(".infoTextWithAnimation").html(sceneInfoText);
        $("#whyInfoText").text(whyText);
    };
    SceneInfoView.prototype.hideNoAnimationContent = function () {
        $("#contentNoAnimation").hide();
    };
    SceneInfoView.prototype.showNoAnimationContent = function () {
        $("#contentNoAnimation").show();
    };
    SceneInfoView.prototype.updateNoAnimationContent = function (text) {
        $("#noAnimationContentText").text(text);
    };
    SceneInfoView.prototype.hideIntro = function () {
        $("#contentIntro").hide();
    };
    SceneInfoView.prototype.showIntro = function () {
        $("#contentIntro").show();
    };
    SceneInfoView.prototype.showOutro = function () {
        $("#contentOutro").show();
    };
    SceneInfoView.prototype.hideOutro = function () {
        $("#contentOutro").hide();
    };
    SceneInfoView.prototype.updateIntroText = function (text) {
        $("#introText").html(text);
    };
    SceneInfoView.prototype.updateOutroText = function (text) {
        $("#outroText").html(text);
    };
    SceneInfoView.prototype.onIntroButtonClicked = function () {
        EventBus.dispatchEvent("INTRO_BUTTON_CLICKED", null);
    };
    SceneInfoView.prototype.onOutroButtonClicked = function () {
        EventBus.dispatchEvent("OUTRO_BUTTON_CLICKED", null);
    };
    SceneInfoView.prototype.onWhyButtonClicked = function () {
        $("#whyInfoContainer").show();
        $("#animationControl").hide();
        this.showGifAnimationOverlay();
    };
    SceneInfoView.prototype.onWhyCloseButtonClicked = function () {
        $("#whyInfoContainer").hide();
        this.hideGifAnimationOverlay();
        if (this.currentScene.isUseAnimation()) {
            $("#animationControl").show();
        }
    };
    SceneInfoView.prototype.showGifAnimationOverlay = function () {
        $(".gifAnimationOverlay").show();
    };
    SceneInfoView.prototype.hideGifAnimationOverlay = function () {
        $(".gifAnimationOverlay").hide();
    };
    SceneInfoView.prototype.onNoAnimationContentButtonClicked = function () {
        EventBus.dispatchEvent("NO_ANIMATION_CONTENT_BUTTON_CLICKED", null);
    };
    return SceneInfoView;
}());
//# sourceMappingURL=SceneInfoView.js.map