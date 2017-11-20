///<reference path="../libs/jQuery/jqueryTS/jquery.d.ts"/>
///<reference path="Sequence.ts"/>
///<reference path="animation/AnimationPlayer.ts"/>
///<reference path="../Logger.ts"/>
var Application = (function () {
    function Application() {
        var _this = this;
        this.ver = "0.0.4";
        this.currentSequenceIndex = 0;
        Logger.setContainer($("#logContainer"));
        Logger.info(this.ver);
        this.createSequence();
        this.createAnimation();
        $("#prevButton").click(function () { return _this.onPrevButtonClicked(); });
        $("#nextButton").click(function () { return _this.onNextButtonClicked(); });
    }
    Application.prototype.createSequence = function () {
        var sequenceData = SequencesData[this.currentSequenceIndex];
        this.currentSequence = new Sequence(sequenceData.id, sequenceData.total, sequenceData.interval, sequenceData.sequenceHeight, sequenceData.pointCompensation);
    };
    Application.prototype.createAnimation = function () {
        new AnimationPlayer($("#animation"), this.currentSequence);
    };
    Application.prototype.onPrevButtonClicked = function () {
        this.currentSequenceIndex--;
        if (this.currentSequenceIndex < 0) {
            this.currentSequenceIndex = SequencesData.length - 1;
        }
        Logger.info("this.currentSequenceIndex=" + this.currentSequenceIndex);
        this.createSequence();
        this.createAnimation();
    };
    Application.prototype.onNextButtonClicked = function () {
        this.currentSequenceIndex++;
        if (this.currentSequenceIndex == SequencesData.length) {
            this.currentSequenceIndex = 0;
        }
        Logger.info("this.currentSequenceIndex=" + this.currentSequenceIndex);
        this.createSequence();
        this.createAnimation();
    };
    return Application;
}());
//# sourceMappingURL=Application.js.map