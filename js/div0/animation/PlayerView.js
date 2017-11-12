///<reference path="../../libs/jQuery/jqueryTS/jquery.d.ts"/>
///<reference path="AnimationViewEvent.ts"/>
///<reference path="../../libs/events/EventBus.ts"/>
var PlayerView = (function () {
    function PlayerView(container) {
        var _this = this;
        this.container = container;
        console.log("player container = ", this.container);
        $(window).resize(function () { return _this.onWindowResized(); });
    }
    PlayerView.prototype.updateFrame = function (value) {
        this.container.css({ backgroundPosition: '0 -' + value + 'px' });
    };
    PlayerView.prototype.setSource = function (source) {
        this.container.css({ 'background-image': 'url(' + source + ')' });
    };
    PlayerView.prototype.onWindowResized = function () {
        this.container.hide();
        this.container.css({ backgroundPosition: '0px 0px' });
        EventBus.dispatchEvent(AnimationViewEvent.ON_WINDOW_RESIZED, null);
        this.container.show();
    };
    return PlayerView;
}());
//# sourceMappingURL=PlayerView.js.map