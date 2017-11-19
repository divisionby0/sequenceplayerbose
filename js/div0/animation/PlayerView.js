///<reference path="../../libs/jQuery/jqueryTS/jquery.d.ts"/>
///<reference path="AnimationViewEvent.ts"/>
///<reference path="../../libs/events/EventBus.ts"/>
var PlayerView = (function () {
    function PlayerView(container) {
        var _this = this;
        this.container = container;
        console.log("player container = ", this.container);
        this.createControls();
        $(window).resize(function () { return _this.onWindowResized(); });
    }
    PlayerView.prototype.createControls = function () {
        var _this = this;
        $("#restartButton").click(function () { return _this.onRestartRequest(); });
    };
    PlayerView.prototype.onRestartRequest = function () {
        this.restart();
    };
    PlayerView.prototype.setHeight = function (value) {
        this.container.height(value);
    };
    PlayerView.prototype.getWidth = function () {
        return Math.ceil(this.container.width());
    };
    PlayerView.prototype.updateFrame = function (value) {
        this.container.css({ backgroundPosition: '0px -' + value + 'px' });
    };
    PlayerView.prototype.setSource = function (source) {
        this.container.css({ 'background-image': 'url(' + source + ')' });
    };
    PlayerView.prototype.restart = function () {
        this.container.hide();
        this.container.css({ backgroundPosition: '0px 0px' });
        EventBus.dispatchEvent(AnimationViewEvent.ON_WINDOW_RESIZED, null);
        this.container.show();
    };
    PlayerView.prototype.onWindowResized = function () {
        this.restart();
    };
    return PlayerView;
}());
//# sourceMappingURL=PlayerView.js.map