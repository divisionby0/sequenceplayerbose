///<reference path="../../libs/jQuery/jqueryTS/jquery.d.ts"/>
///<reference path="../Scene.ts"/>
///<reference path="../../libs/events/EventBus.ts"/>
var SceneInfoView = (function () {
    function SceneInfoView() {
        var _this = this;
        this.whyStateBackground = "url('assets/bg_about.jpg')";
        $("#noAnimationContentButton").click(function () { return _this.onNoAnimationContentButtonClicked(); });
    }
    SceneInfoView.prototype.restartAnimation = function () {
        $("#gifAnimation").attr("src", this.currentScene.getAnimationUrl());
    };
    SceneInfoView.prototype.setData = function (data, totalScenes) {
        this.currentScene = data;
        var sceneInfoText = data.getInfoText();
        var sceneCounter = data.getCounter();
        //console.log("sceneInfoText="+sceneInfoText);
        $(".pagination").text(sceneCounter + "/" + totalScenes);
        if (data.isUseAnimation()) {
            $(".noAnimationContainer").hide();
            $(".content").css("background-image", "none");
            $(".gifAnimationContainer").show();
            $(".infoContentContainer").show();
            $("#animationControl").show();
            $("#gifAnimation").attr("src", data.getAnimationUrl());
            $(".sceneTextContainer").text(sceneInfoText);
        }
        else {
            $(".gifAnimationContainer").hide();
            $(".infoContentContainer").hide();
            $("#animationControl").hide();
            $(".content").css("background-image", this.whyStateBackground);
            $(".noAnimationContainer").show();
            $("#noAnimationContentText").text(sceneInfoText);
            if (data.hasAdditionalControls()) {
                $("#noAnimationContentButton").text(data.getControls()[0].text);
            }
        }
    };
    SceneInfoView.prototype.onNoAnimationContentButtonClicked = function () {
        EventBus.dispatchEvent("NO_ANIMATION_CONTENT_BUTTON_CLICKED", null);
    };
    return SceneInfoView;
}());
//# sourceMappingURL=SceneInfoView.js.map