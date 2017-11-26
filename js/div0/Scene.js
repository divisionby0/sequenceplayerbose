var Scene = (function () {
    function Scene(index, counter, useAnimation, animationUrl, infoText, whyText, background) {
        this.useAnimation = true;
        this.controls = [];
        this.index = index;
        this.counter = counter;
        this.useAnimation = useAnimation;
        this.animationUrl = animationUrl;
        this.infoText = infoText;
        this.whyText = whyText;
        this.background = background;
    }
    Scene.prototype.addControl = function (control) {
        this.controls.push(control);
    };
    Scene.prototype.getControls = function () {
        return this.controls;
    };
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
    Scene.prototype.getCounter = function () {
        return this.counter;
    };
    Scene.prototype.hasAdditionalControls = function () {
        return this.controls.length > 0;
    };
    Scene.prototype.hasCustomBackground = function () {
        if (typeof this.background === 'undefined') {
            return false;
        }
        else {
            return true;
        }
    };
    Scene.prototype.getBackground = function () {
        return this.background;
    };
    return Scene;
}());
//# sourceMappingURL=Scene.js.map