///<reference path="../libs/jQuery/jqueryTS/jquery.d.ts"/>
///<reference path="../libs/collections/List.ts"/>
///<reference path="Scene.ts"/>
///<reference path="ScenesParser.ts"/>
declare var preloadImages:any;
declare var Scenes:any;
class AppGifs {
    private currentSequenceIndex:number = 0;

    //private gifs:string[] = ["img/gifs/1.gif", "img/gifs/2.gif", "img/gifs/3.gif", "img/gifs/4.gif"];
    private gifs:string[] = ["img/gifs/1.gif", "img/gifs/2.gif", "img/gifs/3.gif", "img/gifs/4.gif"];

    private scenes:List<Scene>;

    constructor() {
        this.parseScenes();
        this.createPreloadCollection();
        //console.log("start preloading images ",this.gifs);
        //preloadImages(this.gifs, (value)=>this.preloadProgress(value), ()=>this.preloadFinished());
    }
    
    private parseScenes():void{
        this.scenes = ScenesParser.parse(Scenes);
    }
    
    private createPreloadCollection():void{

        var iterator:ListIterator = this.scenes.getIterator();
        while(iterator.next()){
            var scene:Scene = iterator.next();
            if(scene.isUseAnimation()){
                this.gifs.push(scene.getAnimationUrl());
            }
        }
    }

    private start():void{
        $("#gifAnimation").attr("src", this.gifs[this.currentSequenceIndex]);

        $("#prevButton").click(()=>this.onPrevButtonClicked());
        $("#nextButton").click(()=>this.onNextButtonClicked());
        $("#animationControl").click(()=>this.onRestartAnimationClicked());
    }

    private onPrevButtonClicked():void{
        this.currentSequenceIndex--;
        if(this.currentSequenceIndex<0){
            this.currentSequenceIndex = this.gifs.length-1;
        }
        $("#gifAnimation").attr("src", this.gifs[this.currentSequenceIndex]);
    }
    private onNextButtonClicked():void{
        this.currentSequenceIndex++;
        if(this.currentSequenceIndex == this.gifs.length){
            this.currentSequenceIndex = 0;
        }
        $("#gifAnimation").attr("src", this.gifs[this.currentSequenceIndex]);
    }

    private onRestartAnimationClicked():void{
        $("#gifAnimation").attr("src", this.gifs[this.currentSequenceIndex]);
    }

    private preloadProgress(value:number):void{
        console.log("gifs",this.gifs);
        var progress = Math.round(100 - value/this.gifs.length*100);
        console.log("progress ",progress);
        $("#preloadProgress").text(progress+" %");
    }
    private preloadFinished():void{
        console.log("preload complete");
        $("#preloadProgress").text("");
        this.start();
    }
}
