///<reference path="../../libs/jQuery/jqueryTS/jquery.d.ts"/>
///<reference path="../Sequence.ts"/>
///<reference path="PlayerView.ts"/>
var AnimationPlayer = (function () {
    function AnimationPlayer(container, currentSequence) {
        var _this = this;
        this.animationCounter = 0;
        this.incrementingPositionYProcent = 0;
        this.currentIncrementingPositionYProcent = 0;
        this.baseAnimationWidth = 590;
        this.baseAnimationHeight = 460;
        this.incrementCoeff = 1;
        this.container = container;
        this.currentSequence = currentSequence;
        EventBus.addEventListener(AnimationViewEvent.ON_WINDOW_RESIZED, function () { return _this.onWindowResized(); });
        this.view = new PlayerView(this.container);
        this.createAnimation();
    }
    AnimationPlayer.prototype.createAnimation = function () {
        var _this = this;
        var sequenceTotalFrames = this.currentSequence.getTotalFrames();
        this.incrementingPositionYProcent = 100 / sequenceTotalFrames;
        this.incrementCoeff = this.container.width() / this.baseAnimationWidth;
        this.animationFrameHeight = Math.round(this.currentSequence.getSequenceHeight() / this.currentSequence.getTotalFrames() * this.incrementCoeff);
        this.container.height(this.baseAnimationHeight * this.incrementCoeff);
        var src = 'img/' + this.currentSequence.getId() + '.jpg';
        this.updateView(src, this.animationFrameHeight * this.animationCounter);
        if (this.currentTimeout) {
            clearTimeout(this.currentTimeout);
        }
        this.currentTimeout = setTimeout(function () { return _this.onAnimationTick(); }, this.currentSequence.getInterval());
    };
    AnimationPlayer.prototype.updateView = function (src, data) {
        if (src) {
            this.view.setSource(src);
        }
        if (data) {
            this.view.updateFrame(data);
        }
    };
    AnimationPlayer.prototype.onAnimationTick = function () {
        var _this = this;
        this.animationCounter += 1;
        if (this.animationCounter < this.currentSequence.getTotalFrames()) {
            this.currentIncrementingPositionYProcent += this.incrementingPositionYProcent;
            this.updateView(null, this.animationFrameHeight * this.animationCounter);
            if (this.currentTimeout) {
                clearTimeout(this.currentTimeout);
            }
            this.currentTimeout = setTimeout(function () { return _this.onAnimationTick(); }, this.currentSequence.getInterval());
        }
        else {
        }
    };
    AnimationPlayer.prototype.onWindowResized = function () {
        this.animationCounter = 0;
        this.createAnimation();
    };
    return AnimationPlayer;
}());
//# sourceMappingURL=AnimationPlayer.js.map