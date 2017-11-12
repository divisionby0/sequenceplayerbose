///<reference path="../libs/jQuery/jqueryTS/jquery.d.ts"/>
///<reference path="Sequence.ts"/>
///<reference path="animation/AnimationPlayer.ts"/>
///<reference path="../Logger.ts"/>
var Application = (function () {
    function Application() {
        this.ver = "0.0.3";
        Logger.setContainer($("#logContainer"));
        Logger.info(this.ver);
        var sequenceData = SequencesData[0];
        this.currentSequence = new Sequence(sequenceData.id, sequenceData.total, sequenceData.interval, sequenceData.sequenceHeight);
        new AnimationPlayer($("#animation"), this.currentSequence);
    }
    return Application;
}());
//# sourceMappingURL=Application.js.map