var Sequence = (function () {
    function Sequence(id, totalFrames, interval, sequenceHeight, pointCompensation) {
        this.pointCompensation = 0;
        this.id = id;
        this.interval = interval;
        this.totalFrames = totalFrames;
        this.sequenceHeight = sequenceHeight;
        this.pointCompensation = pointCompensation;
    }
    Sequence.prototype.getId = function () {
        return this.id;
    };
    Sequence.prototype.getTotalFrames = function () {
        return this.totalFrames;
    };
    Sequence.prototype.getInterval = function () {
        return this.interval;
    };
    Sequence.prototype.getSequenceHeight = function () {
        return this.sequenceHeight;
    };
    Sequence.prototype.getPointCompensation = function () {
        return this.pointCompensation;
    };
    return Sequence;
}());
//# sourceMappingURL=Sequence.js.map