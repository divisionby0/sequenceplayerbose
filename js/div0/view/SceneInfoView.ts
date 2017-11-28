///<reference path="../../libs/jQuery/jqueryTS/jquery.d.ts"/>
///<reference path="../Scene.ts"/>
///<reference path="../../libs/events/EventBus.ts"/>
class SceneInfoView {
   
    private currentScene:Scene;
    
    constructor() {
        $("#noAnimationContentButton").click(()=>this.onNoAnimationContentButtonClicked());
        //$("#whyButton").click(()=>this.onWhyButtonClicked());
        $(".gifAnimationOverlayCloseButton").click(()=>this.onWhyCloseButtonClicked());
        $("#introButton").click(()=>this.onIntroButtonClicked());
    }

    public restartAnimation():void{
        $("#gifAnimation").attr("src", this.currentScene.getAnimationUrl());
    }
    
    public setData(data:Scene, totalScenes:number):void{
        this.currentScene = data;
        var sceneInfoText:string = data.getInfoText();
        var whyText:string = data.getWhyText();
        var sceneCounter:number = data.getCounter();
        var animationUrl:string = data.getAnimationUrl();

        $("#whyInfoContainer").hide();
        $(".navigationPagination").text(sceneCounter+"/"+totalScenes);
        
        if(data.hasAdditionalControls()){
            $("#noAnimationContentButton").text(data.getControls()[0].text);
        }

        this.hideIntro();
        this.hideNoAnimationContent();
        this.hideGifAnimationOverlay();

        switch(sceneCounter){
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
                this.updateAnimationContent(sceneInfoText, whyText, animationUrl);
                this.showAnimationContent();
                $("#whyButton").click(()=>this.onWhyButtonClicked());
                break;
            case 6:
                this.updateNoAnimationContent(sceneInfoText);
                this.hideAnimationContent();
                this.showNoAnimationContent();
                break;
        }
        
    }

    private hideAnimationContent():void{
        $("#contentHasAnimation").hide();
    }
    private showAnimationContent():void{
        $("#contentHasAnimation").show();
    }
    private updateAnimationContent(sceneInfoText:string, whyText:string, animationUrl:string):void{
        $("#gifAnimation").attr("src", animationUrl);
        $(".infoTextWithAnimation").html(sceneInfoText);
        $("#whyInfoText").text(whyText);
    }
    
    private hideNoAnimationContent():void{
        $("#contentNoAnimation").hide();
    }
    private showNoAnimationContent():void{
        $("#contentNoAnimation").show();
    }
    private updateNoAnimationContent(text:string):void{
        $("#noAnimationContentText").text(text);
    }
    
    private hideIntro():void{
        $("#contentIntro").hide();
    }
    private showIntro():void{
        $("#contentIntro").show();
    }
    private updateIntroText(text:string):void{
        $("#introText").html(text);
    }

    private onIntroButtonClicked():void{
        EventBus.dispatchEvent("INTRO_BUTTON_CLICKED", null);
    }
    
    private onWhyButtonClicked():void{
        console.log("why clicked");
        $("#whyInfoContainer").show();
        $("#animationControl").hide();
        this.showGifAnimationOverlay();
    }
    private onWhyCloseButtonClicked():void{
        $("#whyInfoContainer").hide();
        this.hideGifAnimationOverlay();
        if(this.currentScene.isUseAnimation()){
            $("#animationControl").show();
        }
    }

    private showGifAnimationOverlay():void{
        $(".gifAnimationOverlay").show();
    }
    private hideGifAnimationOverlay():void{
        $(".gifAnimationOverlay").hide();
    }

    private onNoAnimationContentButtonClicked():void{
        EventBus.dispatchEvent("NO_ANIMATION_CONTENT_BUTTON_CLICKED", null);
    }
}
