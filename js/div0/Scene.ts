
class Scene {
    private index:number;
    private useAnimation:boolean = true;
    private animationUrl:string;
    private infoText:string;
    private whyText:string;
    
    constructor(index:number, useAnimation:boolean, animationUrl:string, infoText:string, whyText:string) {
        this.index = index;
        this.useAnimation = useAnimation;
        this.animationUrl = animationUrl;
        this.infoText = infoText;
        this.whyText = whyText;
    }
    
    public isUseAnimation():boolean{
        return this.useAnimation;
    }
    
    public getAnimationUrl():string{
        return this.animationUrl;
    }
    public getInfoText():string{
        return this.infoText;
    }
    public getWhyText():string{
        return this.whyText;
    }
}
