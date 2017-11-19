///<reference path="../libs/jQuery/jqueryTS/jquery.d.ts"/>
///<reference path="Sequence.ts"/>
///<reference path="animation/AnimationPlayer.ts"/>
///<reference path="../Logger.ts"/>
declare var SequencesData;
class Application {

    private currentSequence:Sequence;
    
    private ver:string = "0.0.3";
    
    constructor() {
        Logger.setContainer($("#logContainer"));
        Logger.info(this.ver);
        var sequenceData = SequencesData[1];
        this.currentSequence = new Sequence(sequenceData.id, sequenceData.total, sequenceData.interval, sequenceData.sequenceHeight);

        new AnimationPlayer($("#animation"), this.currentSequence);
        
        
    }
}
