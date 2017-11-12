///<reference path="../../libs/jQuery/jqueryTS/jquery.d.ts"/>
///<reference path="../Sequence.ts"/>
///<reference path="PlayerView.ts"/>
class AnimationPlayer {
    // model
    private container:any;
    private currentSequence:Sequence;
    
    private animationCounter:number = 0;
    private incrementingPositionYProcent = 0;
    private currentIncrementingPositionYProcent = 0;

    private animationFrameHeight:number;

    private baseAnimationWidth:number = 590;
    private baseAnimationHeight:number = 460;
    private incrementCoeff:number = 1;
    private view:PlayerView;
    private currentTimeout:number;
    
    constructor(container:any, currentSequence:Sequence) {
        this.container = container;
        this.currentSequence = currentSequence;
        EventBus.addEventListener(AnimationViewEvent.ON_WINDOW_RESIZED, ()=>this.onWindowResized());

        this.view = new PlayerView(this.container);

        this.createAnimation();
    }
    

    private createAnimation():void{
        var sequenceTotalFrames:number = this.currentSequence.getTotalFrames();
        this.incrementingPositionYProcent = 100/sequenceTotalFrames;

        this.incrementCoeff = this.container.width()/this.baseAnimationWidth;
        this.animationFrameHeight = Math.round(this.currentSequence.getSequenceHeight()/this.currentSequence.getTotalFrames()*this.incrementCoeff);

        this.container.height(this.baseAnimationHeight*this.incrementCoeff);

        var src:string = 'img/'+ this.currentSequence.getId() + '.jpg';
        this.updateView(src, this.animationFrameHeight*this.animationCounter);

        if(this.currentTimeout){
            clearTimeout(this.currentTimeout);
        }
        this.currentTimeout = setTimeout(()=>this.onAnimationTick(), this.currentSequence.getInterval());
    }

    private updateView(src:string, data:number):void{
        if(src){
            this.view.setSource(src);
        }
        if(data){
            this.view.updateFrame(data);
        }
    }


    private onAnimationTick():void{
        this.animationCounter+=1;

        if(this.animationCounter < this.currentSequence.getTotalFrames()){
            this.currentIncrementingPositionYProcent+=this.incrementingPositionYProcent;

            this.updateView(null, this.animationFrameHeight*this.animationCounter);

            if(this.currentTimeout){
                clearTimeout(this.currentTimeout);
            }
            this.currentTimeout = setTimeout(()=>this.onAnimationTick(), this.currentSequence.getInterval());
        }
        else{
            //console.log("Finished");
        }
    }

    private onWindowResized():void{
        this.animationCounter = 0;
        this.createAnimation();
    }
}
