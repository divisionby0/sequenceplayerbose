///<reference path="../../libs/jQuery/jqueryTS/jquery.d.ts"/>
///<reference path="../Sequence.ts"/>
///<reference path="PlayerView.ts"/>
///<reference path="../../Logger.ts"/>
var AnimationPlayer = (function () {
    function AnimationPlayer(container, currentSequence) {
        var _this = this;
        this.animationCounter = 0;
        this.incrementingPositionYProcent = 0;
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
        Logger.info("createAnimation");
        var sequenceTotalFrames = this.currentSequence.getTotalFrames();
        this.incrementingPositionYProcent = 100 / sequenceTotalFrames;
        Logger.info("view width=" + this.view.getWidth());
        this.incrementCoeff = this.view.getWidth() / this.baseAnimationWidth;
        this.points = new Array();
        for (var i = 0; i < this.currentSequence.getTotalFrames(); i++) {
            var point;
            if (i < this.currentSequence.getTotalFrames() - 1) {
                if (!this.isEven(i)) {
                    point = Math.floor(this.baseAnimationHeight * i * this.incrementCoeff - this.currentSequence.getPointCompensation());
                }
                else {
                    point = Math.floor(this.baseAnimationHeight * i * this.incrementCoeff);
                }
            }
            else {
                point = Math.floor(this.baseAnimationHeight * i * this.incrementCoeff);
            }
            this.points.push(point);
            Logger.info("point: " + point);
        }
        Logger.info("this.incrementCoeff=" + this.incrementCoeff);
        this.animationFrameHeight = this.currentSequence.getSequenceHeight() / this.currentSequence.getTotalFrames() * this.incrementCoeff;
        //this.animationFrameHeight = this.view.getWidth()/this.aspect;
        Logger.info("this.animationFrameHeight=" + this.animationFrameHeight);
        //this.container.height(this.baseAnimationHeight*this.incrementCoeff);
        var viewHeight = this.baseAnimationHeight * this.incrementCoeff;
        this.view.setHeight(viewHeight);
        Logger.info("viewHeight= " + viewHeight);
        //this.animationCounter = 1;
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
            Logger.info("animationCounter=" + this.animationCounter);
            Logger.info("animationFrameHeight=" + this.animationFrameHeight);
            //var offset:number = this.animationFrameHeight*this.animationCounter;
            var offset = this.points[this.animationCounter];
            Logger.info("offset =" + offset);
            this.updateView(null, offset);
            this.currentTimeout = setTimeout(function () { return _this.onAnimationTick(); }, this.currentSequence.getInterval());
        }
        else {
            var offset = this.points[this.animationCounter - 1];
            //this.updateView(null, this.animationFrameHeight*(this.animationCounter-1));
            this.updateView(null, offset);
        }
    };
    AnimationPlayer.prototype.onWindowResized = function () {
        this.animationCounter = 0;
        this.createAnimation();
    };
    AnimationPlayer.prototype.isEven = function (num) {
        if (num % 2 === 0) {
            return true;
        }
        else {
            return false;
        }
    };
    return AnimationPlayer;
}());
//# sourceMappingURL=AnimationPlayer.js.map