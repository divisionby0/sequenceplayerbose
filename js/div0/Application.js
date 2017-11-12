///<reference path="../libs/jQuery/jqueryTS/jquery.d.ts"/>
///<reference path="Sequence.ts"/>
///<reference path="animation/AnimationPlayer.ts"/>
var Application = (function () {
    function Application() {
        console.log("Im Application");
        var sequenceData = SequencesData[0];
        this.currentSequence = new Sequence(sequenceData.id, sequenceData.total, sequenceData.interval, sequenceData.sequenceHeight);
        new AnimationPlayer($("#animation"), this.currentSequence);
    }
    return Application;
}());
//# sourceMappingURL=Application.js.map