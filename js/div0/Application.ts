///<reference path="../libs/jQuery/jqueryTS/jquery.d.ts"/>
///<reference path="Sequence.ts"/>
///<reference path="animation/AnimationPlayer.ts"/>
///<reference path="../Logger.ts"/>
declare var SequencesData;
class Application {

    private currentSequence:Sequence;
    
    private ver:string = "0.0.4";
    
    private currentSequenceIndex:number = 0;
    
    constructor() {
        Logger.setContainer($("#logContainer"));
        Logger.info(this.ver);

        this.createSequence();
        this.createAnimation();

        $("#prevButton").click(()=>this.onPrevButtonClicked());
        $("#nextButton").click(()=>this.onNextButtonClicked());

    }

    private createSequence():void{
        var sequenceData = SequencesData[this.currentSequenceIndex];
        this.currentSequence = new Sequence(sequenceData.id, sequenceData.total, sequenceData.interval, sequenceData.sequenceHeight, sequenceData.pointCompensation);
    }
    private createAnimation():void{
        new AnimationPlayer($("#animation"), this.currentSequence);
    }

    private onPrevButtonClicked():void{
        this.currentSequenceIndex--;
        if(this.currentSequenceIndex<0){
            this.currentSequenceIndex = SequencesData.length-1;
        }
        Logger.info("this.currentSequenceIndex="+this.currentSequenceIndex);
        this.createSequence();
        this.createAnimation();
    }
    private onNextButtonClicked():void{
        this.currentSequenceIndex++;
        if(this.currentSequenceIndex == SequencesData.length){
            this.currentSequenceIndex = 0;
        }
        Logger.info("this.currentSequenceIndex="+this.currentSequenceIndex);
        this.createSequence();
        this.createAnimation();
    }
}
