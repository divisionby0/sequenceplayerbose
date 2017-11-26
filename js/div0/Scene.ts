
class Scene {
    private index:number;
    private counter:number;
    private useAnimation:boolean = true;
    private animationUrl:string;
    private infoText:string;
    private whyText:string;
    private controls:any[] = [];
    private background:string;
    
    constructor(index:number, counter:number, useAnimation:boolean, animationUrl:string, infoText:string, whyText:string, background:string) {
        this.index = index;
        this.counter = counter;
        this.useAnimation = useAnimation;
        this.animationUrl = animationUrl;
        this.infoText = infoText;
        this.whyText = whyText;
        this.background = background;
    }
    
    public addControl(control:any):void{
        this.controls.push(control);
    }
    public getControls():any[]{
        return this.controls;
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
    public getCounter():number{
        return this.counter;
    }
    
    public hasAdditionalControls():boolean{
        return this.controls.length>0;
    }
    
    public hasCustomBackground():boolean{
        
        if(typeof this.background === 'undefined'){
            return false;
        }
        else{
            return true;
        }
    }
    public getBackground():string{
        return this.background;
    }
}
