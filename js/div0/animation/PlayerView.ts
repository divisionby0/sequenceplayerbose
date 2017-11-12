///<reference path="../../libs/jQuery/jqueryTS/jquery.d.ts"/>
///<reference path="AnimationViewEvent.ts"/>
///<reference path="../../libs/events/EventBus.ts"/>

class PlayerView {
    private container:any;

    constructor(container:any) {
        this.container = container;
        console.log("player container = ",this.container);
        $( window ).resize(()=>this.onWindowResized());
    }

    public updateFrame(value:number):void{
        this.container.css({backgroundPosition: '0 -'+value+'px'});
    }
    
    public setSource(source:string):void{
        this.container.css({'background-image' : 'url('+source+')'});
    }

    private onWindowResized():void{
        this.container.hide();
        this.container.css({backgroundPosition: '0px 0px'});
        EventBus.dispatchEvent(AnimationViewEvent.ON_WINDOW_RESIZED,null);
        this.container.show();
    }
}
