///<reference path="../../libs/jQuery/jqueryTS/jquery.d.ts"/>
///<reference path="../Scene.ts"/>
///<reference path="../../libs/events/EventBus.ts"/>
var SceneInfoView = (function () {
    function SceneInfoView() {
        var _this = this;
        this.whyStateBackground = "url('assets/bg_about.jpg')";
        $("#noAnimationContentButton").click(function () { return _this.onNoAnimationContentButtonClicked(); });
        $("#whyButton").click(function () { return _this.onWhyButtonClicked(); });
        $(".whyInfoContainerClose").click(function () { return _this.onWhyCloseButtonClicked(); });
    }
    SceneInfoView.prototype.restartAnimation = function () {
        $("#gifAnimation").attr("src", this.currentScene.getAnimationUrl());
    };
    SceneInfoView.prototype.setData = function (data, totalScenes) {
        this.currentScene = data;
        var sceneInfoText = data.getInfoText();
        var whyText = data.getWhyText();
        var sceneCounter = data.getCounter();
        console.log("sceneInfoText=" + sceneInfoText);
        console.log("sceneCounter=" + sceneCounter);
        $("#whyInfoContainer").hide();
        $(".pagination").text(sceneCounter + "/" + totalScenes);
        if (sceneCounter == 1) {
            $(".content").css("background-image", "none");
            $(".content").css("background-color", "#492F92");
            $(".introImages").show();
        }
        else {
            $(".content").css("background-color", "#FFF");
            $(".introImages").hide();
        }
        if (data.isUseAnimation()) {
            $("#noAnimationContent").addClass("noAnimationContent");
            $("#noAnimationContent").removeClass("noAnimationContentCustomImageBackground");
            $(".noAnimationContainer").hide();
            $(".content").css("background-image", "none");
            $(".gifAnimationContainer").show();
            $(".infoContentContainer").show();
            $("#animationControl").show();
            $("#gifAnimation").attr("src", data.getAnimationUrl());
            $(".sceneTextContainer").text(sceneInfoText);
            $("#whyInfoText").text(whyText);
        }
        else {
            $(".gifAnimationContainer").hide();
            $(".infoContentContainer").hide();
            $("#animationControl").hide();
            $("#noAnimationContentText").text(sceneInfoText);
            $(".noAnimationContainer").show();
            $("#noAnimationContent").addClass("noAnimationContent");
            $("#noAnimationContent").removeClass("noAnimationContentCustomImageBackground");
            switch (sceneCounter) {
                case 1:
                    $("#noAnimationContent").removeClass("noAnimationContent");
                    $("#noAnimationContent").addClass("noAnimationContentCustomImageBackground");
                    break;
                case 6:
                    $("#noAnimationContent").removeClass("noAnimationContent");
                    $("#noAnimationContent").addClass("noAnimationContentCustomImageBackground");
                    $(".content").css("background-image", this.whyStateBackground);
                    break;
            }
            if (data.hasAdditionalControls()) {
                $("#noAnimationContentButton").text(data.getControls()[0].text);
            }
        }
    };
    SceneInfoView.prototype.onWhyButtonClicked = function () {
        $("#whyInfoContainer").show();
        $("#animationControl").hide();
    };
    SceneInfoView.prototype.onWhyCloseButtonClicked = function () {
        $("#whyInfoContainer").hide();
        if (this.currentScene.isUseAnimation()) {
            $("#animationControl").show();
        }
    };
    SceneInfoView.prototype.onNoAnimationContentButtonClicked = function () {
        EventBus.dispatchEvent("NO_ANIMATION_CONTENT_BUTTON_CLICKED", null);
    };
    return SceneInfoView;
}());
//# sourceMappingURL=SceneInfoView.js.map