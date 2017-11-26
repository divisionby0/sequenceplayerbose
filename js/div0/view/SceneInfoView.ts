///<reference path="../../libs/jQuery/jqueryTS/jquery.d.ts"/>
///<reference path="../Scene.ts"/>
///<reference path="../../libs/events/EventBus.ts"/>
class SceneInfoView {
    private whyStateBackground:string = "url('assets/bg_about.jpg')";
    
    private currentScene:Scene;
    
    constructor() {
        $("#noAnimationContentButton").click(()=>this.onNoAnimationContentButtonClicked());
        $("#whyButton").click(()=>this.onWhyButtonClicked());
        $(".whyInfoContainerClose").click(()=>this.onWhyCloseButtonClicked());
    }

    public restartAnimation():void{
        $("#gifAnimation").attr("src", this.currentScene.getAnimationUrl());
    }
    
    public setData(data:Scene, totalScenes:number):void{
        this.currentScene = data;
        var sceneInfoText:string = data.getInfoText();
        var whyText:string = data.getWhyText();
        var sceneCounter:number = data.getCounter();
        console.log("sceneInfoText="+sceneInfoText);
        console.log("sceneCounter="+sceneCounter);

        $("#whyInfoContainer").hide();
        $(".pagination").text(sceneCounter+"/"+totalScenes);

        if(sceneCounter == 1){
            $(".content").css("background-image", "none");
            $(".content").css("background-color", "#492F92");
            $(".introImages").show();
        }
        else{
            $(".content").css("background-color", "#FFF");
            $(".introImages").hide();
        }

        if(data.isUseAnimation()){
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
        else{
            $(".gifAnimationContainer").hide();
            $(".infoContentContainer").hide();
            $("#animationControl").hide();

            $("#noAnimationContentText").text(sceneInfoText);
            $(".noAnimationContainer").show();


            $("#noAnimationContent").addClass("noAnimationContent");
            $("#noAnimationContent").removeClass("noAnimationContentCustomImageBackground");

            switch(sceneCounter){
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
            
            if(data.hasAdditionalControls()){
                $("#noAnimationContentButton").text(data.getControls()[0].text);
            }
        }
    }

    private onWhyButtonClicked():void{
        $("#whyInfoContainer").show();
        $("#animationControl").hide();
    }
    private onWhyCloseButtonClicked():void{
        $("#whyInfoContainer").hide();
        if(this.currentScene.isUseAnimation()){
            $("#animationControl").show();
        }
    }

    private onNoAnimationContentButtonClicked():void{
        EventBus.dispatchEvent("NO_ANIMATION_CONTENT_BUTTON_CLICKED", null);
    }
}
