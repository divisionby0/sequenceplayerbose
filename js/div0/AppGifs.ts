///<reference path="../libs/jQuery/jqueryTS/jquery.d.ts"/>
///<reference path="../libs/collections/List.ts"/>
///<reference path="Scene.ts"/>
///<reference path="ScenesParser.ts"/>
///<reference path="view/SceneInfoView.ts"/>
declare var preloadImages:any;
declare var Scenes:any;
class AppGifs {
    private ver:string = "0.0.1";
    private currentSequenceIndex:number = 0;

    private cache:string[];

    private scenes:List<Scene>;
    private currentScene:Scene;
    private view:SceneInfoView = new SceneInfoView();

    constructor() {
        $("#verContainer").text(this.ver);
        this.parseScenes();
        this.createPreloadCollection();
        this.preloadAnimation();
        EventBus.addEventListener("NO_ANIMATION_CONTENT_BUTTON_CLICKED", ()=>this.onNoAnimationContentButtonClicked());
    }
    
    private parseScenes():void{
        this.scenes = ScenesParser.parse(Scenes);
    }
    
    private createPreloadCollection():void{
        this.cache = [];
        var iterator:ListIterator = this.scenes.getIterator();
        while(iterator.hasNext()){
            var scene:Scene = iterator.next();
            if(scene.isUseAnimation()){
                this.cache.push(scene.getAnimationUrl());
            }
        }
    }
    private preloadAnimation():void{
        preloadImages(this.cache, (value)=>this.preloadProgress(value), ()=>this.preloadFinished());
    }

    private showScene():void{
        this.view.setData(this.currentScene, this.scenes.size());
    }

    private start():void{
        this.currentScene = this.scenes.get(this.currentSequenceIndex);
        this.showScene();

        $("#prevButton").click(()=>this.onPrevButtonClicked());
        $("#nextButton").click(()=>this.onNextButtonClicked());
        $("#rewindScenesButton").click(()=>this.onRewindButtonClicked());
        $("#animationControl").click(()=>this.onRestartAnimationClicked());
    }

    private onNoAnimationContentButtonClicked():void{
        console.log("onNoAnimationContentButtonClicked");
        this.onNextButtonClicked();
    }

    private onPrevButtonClicked():void{
        this.currentSequenceIndex--;
        if(this.currentSequenceIndex < 0){
            this.currentSequenceIndex = this.scenes.size()-1;
        }

        this.currentScene = this.scenes.get(this.currentSequenceIndex);
        this.showScene();
    }

    private onNextButtonClicked():void{
        this.currentSequenceIndex++;
        if(this.currentSequenceIndex == this.scenes.size()){
            this.currentSequenceIndex = 0;
        }
        this.currentScene = this.scenes.get(this.currentSequenceIndex);
        this.showScene();
    }
    private onRewindButtonClicked():void{
        this.currentSequenceIndex = 0;
        this.currentScene = this.scenes.get(this.currentSequenceIndex);
        this.showScene();
    }

    private onRestartAnimationClicked():void{
        this.view.restartAnimation();
    }

    private preloadProgress(value:number):void{
        var progress = Math.round(100 - value/this.cache.length*100);
        console.log("progress ",progress);
        $("#preloadProgress").text(progress+" %");
    }
    private preloadFinished():void{
        $("#preloadProgress").text("");
        this.start();
    }
}
