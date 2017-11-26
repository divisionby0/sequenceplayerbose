///<reference path="../libs/collections/List.ts"/>
///<reference path="Scene.ts"/>
var ScenesParser = (function () {
    function ScenesParser() {
    }
    ScenesParser.parse = function (data) {
        var scenes = new List("scenes");
        for (var i = 0; i < data.length; i++) {
            var index = data[i].index;
            var counter = data[i].counter;
            var useAnimation = data[i].useAnimation;
            var animationUrl = data[i].animationUrl;
            var infoText = data[i].infoText;
            var whyText = data[i].whyText;
            var controls = data[i].controls;
            var background = data[i].background;
            var scene = new Scene(index, counter, useAnimation, animationUrl, infoText, whyText, background);
            if (controls) {
                for (var j = 0; j < controls.length; j++) {
                    scene.addControl(controls[j]);
                }
            }
            scenes.add(scene);
        }
        return scenes;
    };
    return ScenesParser;
}());
//# sourceMappingURL=ScenesParser.js.map