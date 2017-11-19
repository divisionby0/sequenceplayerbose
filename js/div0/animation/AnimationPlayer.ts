///<reference path="../../libs/jQuery/jqueryTS/jquery.d.ts"/>
///<reference path="../Sequence.ts"/>
///<reference path="PlayerView.ts"/>
///<reference path="../../Logger.ts"/>
class AnimationPlayer {
    // model
    private container:any;
    private currentSequence:Sequence;
    
    private animationCounter:number = 0;
    private incrementingPositionYProcent = 0;

    private animationFrameHeight:number;

    private baseAnimationWidth:number = 590;
    private baseAnimationHeight:number = 460;
    private aspect:number = 1.2826;
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
        Logger.info("createAnimation");
        var sequenceTotalFrames:number = this.currentSequence.getTotalFrames();
        this.incrementingPositionYProcent = 100/sequenceTotalFrames;

        Logger.info("view width="+this.view.getWidth());

        this.incrementCoeff = this.view.getWidth()/this.baseAnimationWidth;
        //this.animationFrameHeight = Math.round(this.currentSequence.getSequenceHeight()/this.currentSequence.getTotalFrames()*this.incrementCoeff);

        this.animationFrameHeight = this.view.getWidth()/this.aspect;


        Logger.info("this.animationFrameHeight="+this.animationFrameHeight);

        //this.container.height(this.baseAnimationHeight*this.incrementCoeff);

        var viewHeight:number = this.baseAnimationHeight*this.incrementCoeff;
        this.view.setHeight(viewHeight);
        Logger.info("viewHeight= "+viewHeight);
        //this.animationCounter = 1;

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

            Logger.info("animationCounter="+this.animationCounter);
            Logger.info("animationFrameHeight="+this.animationFrameHeight);


            var offset:number = this.animationFrameHeight*this.animationCounter;
            Logger.info("offset ="+offset);

            this.updateView(null, offset);

            this.currentTimeout = setTimeout(()=>this.onAnimationTick(), this.currentSequence.getInterval());
        }
        else{
            this.updateView(null, this.animationFrameHeight*(this.animationCounter-1));
        }
    }

    private onWindowResized():void{
        this.animationCounter = 0;
        this.createAnimation();
    }
}
