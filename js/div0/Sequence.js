var Sequence = (function () {
    function Sequence(id, totalFrames, interval, sequenceHeight) {
        this.id = id;
        this.interval = interval;
        this.totalFrames = totalFrames;
        this.sequenceHeight = sequenceHeight;
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
    return Sequence;
}());
//# sourceMappingURL=Sequence.js.map