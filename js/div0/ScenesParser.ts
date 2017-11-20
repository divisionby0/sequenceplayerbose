///<reference path="../libs/collections/List.ts"/>
///<reference path="Scene.ts"/>

class ScenesParser {
    
    public static parse(data:any[]):List<Scene>{
        var scenes:List<Scene> = new List<Scene>("scenes");
        
        for(var i:number = 0; i< data.length; i++){
            var index:number = data[i].index;
            var counter:number = data[i].counter;
            var useAnimation:boolean = data[i].useAnimation;
            var animationUrl:string = data[i].animationUrl;
            var infoText:string = data[i].infoText;
            var whyText:string = data[i].whyText;

            var scene:Scene = new Scene(index, counter, useAnimation, animationUrl, infoText, whyText);
            scenes.add(scene);
        }
        
        return scenes;
    }
}
