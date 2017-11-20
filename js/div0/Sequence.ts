class Sequence {
    private id:string;
    private totalFrames:number;
    private interval:number;
    private sequenceHeight:number;
    private pointCompensation:number = 0;
    
    constructor(id:string, totalFrames:number, interval:number, sequenceHeight:number, pointCompensation:number) {
        this.id = id;
        this.interval = interval;
        this.totalFrames = totalFrames;
        this.sequenceHeight = sequenceHeight;
        this.pointCompensation = pointCompensation;
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
    public getPointCompensation():number{
        return this.pointCompensation;
    }
}
