///<reference path="../../libs/jQuery/jqueryTS/jquery.d.ts"/>
///<reference path="AnimationViewEvent.ts"/>
///<reference path="../../libs/events/EventBus.ts"/>

class PlayerView {
    protected container:any;

    constructor(container:any) {
        this.container = container;
        console.log("player container = ",this.container);
        this.createControls();
        $( window ).resize(()=>this.onWindowResized());
    }

    protected createControls():void{
        $("#restartButton").click(()=>this.onRestartRequest());
    }

    protected onRestartRequest():void{
        this.restart();
    }
    
    public setHeight(value:number):void{
        this.container.height(value);
        
    }
    public getWidth():number{
        return Math.ceil(this.container.width());
    }
    
    public updateFrame(value:number):void{
        this.container.css({backgroundPosition: '0px -'+value+'px'});
    }
    
    public setSource(source:string):void{
        this.container.css({'background-image' : 'url('+source+')'});
    }

    private restart():void{
        this.container.hide();
        this.container.css({backgroundPosition: '0px 0px'});
        EventBus.dispatchEvent(AnimationViewEvent.ON_WINDOW_RESIZED,null);
        this.container.show();
    }

    private onWindowResized():void{
        this.restart();
    }
}
