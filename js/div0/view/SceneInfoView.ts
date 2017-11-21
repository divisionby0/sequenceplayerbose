///<reference path="../../libs/jQuery/jqueryTS/jquery.d.ts"/>
///<reference path="../Scene.ts"/>
///<reference path="../../libs/events/EventBus.ts"/>
class SceneInfoView {
    private whyStateBackground:string = "url('assets/bg_about.jpg')";
    
    private currentScene:Scene;
    
    constructor() {
        $("#noAnimationContentButton").click(()=>this.onNoAnimationContentButtonClicked());
    }

    public restartAnimation():void{
        $("#gifAnimation").attr("src", this.currentScene.getAnimationUrl());
    }
    
    public setData(data:Scene, totalScenes:number):void{
        this.currentScene = data;
        var sceneInfoText:string = data.getInfoText();
        var sceneCounter:number = data.getCounter();

        //console.log("sceneInfoText="+sceneInfoText);
        
        $(".pagination").text(sceneCounter+"/"+totalScenes);

        if(data.isUseAnimation()){
            $(".noAnimationContainer").hide();
            $(".content").css("background-image", "none");
            $(".gifAnimationContainer").show();
            $(".infoContentContainer").show();
            $("#animationControl").show();
            $("#gifAnimation").attr("src", data.getAnimationUrl());
            $(".sceneTextContainer").text(sceneInfoText);
        }
        else{
            $(".gifAnimationContainer").hide();
            $(".infoContentContainer").hide();
            $("#animationControl").hide();

            $(".content").css("background-image", this.whyStateBackground);
            
            $(".noAnimationContainer").show();
            $("#noAnimationContentText").text(sceneInfoText);

            if(data.hasAdditionalControls()){
                $("#noAnimationContentButton").text(data.getControls()[0].text);

            }
        }
    }

    private onNoAnimationContentButtonClicked():void{
        EventBus.dispatchEvent("NO_ANIMATION_CONTENT_BUTTON_CLICKED", null);
    }
}
