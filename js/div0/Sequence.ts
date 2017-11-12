class Sequence {
    private id:string;
    private totalFrames:number;
    private interval:number;
    private sequenceHeight:number;
    
    constructor(id:string, totalFrames:number, interval:number, sequenceHeight:number) {
        this.id = id;
        this.interval = interval;
        this.totalFrames = totalFrames;
        this.sequenceHeight = sequenceHeight;
    }

    public getId():string{
        return this.id;
    }
    
    public getTotalFrames():number{
        return this.totalFrames;
    }
    public getInterval():number{
        return this.interval;
    }
    
    public getSequenceHeight():number{
        return this.sequenceHeight;
    }
}
