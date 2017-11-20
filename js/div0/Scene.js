var Scene = (function () {
    function Scene(index, useAnimation, animationUrl, infoText, whyText) {
        this.useAnimation = true;
        this.index = index;
        this.useAnimation = useAnimation;
        this.animationUrl = animationUrl;
        this.infoText = infoText;
        this.whyText = whyText;
    }
    Scene.prototype.isUseAnimation = function () {
        return this.useAnimation;
    };
    Scene.prototype.getAnimationUrl = function () {
        return this.animationUrl;
    };
    Scene.prototype.getInfoText = function () {
        return this.infoText;
    };
    Scene.prototype.getWhyText = function () {
        return this.whyText;
    };
    return Scene;
}());
//# sourceMappingURL=Scene.js.map