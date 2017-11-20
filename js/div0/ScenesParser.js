///<reference path="../libs/collections/List.ts"/>
///<reference path="Scene.ts"/>
var ScenesParser = (function () {
    function ScenesParser() {
    }
    ScenesParser.parse = function (data) {
        var scenes = new List("scenes");
        for (var i = 0; i < data.length; i++) {
            var index = data[i].index;
            var useAnimation = data[i].useAnimation;
            var animationUrl = data[i].animationUrl;
            var infoText = data[i].infoText;
            var whyText = data[i].whyText;
            var scene = new Scene(index, useAnimation, animationUrl, infoText, whyText);
            scenes.add(scene);
        }
        return scenes;
    };
    return ScenesParser;
}());
//# sourceMappingURL=ScenesParser.js.map