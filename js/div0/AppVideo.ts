///<reference path="../libs/jQuery/jqueryTS/jquery.d.ts"/>
///<reference path="../Logger.ts"/>
declare var SequencesData;
class AppVideo {
    private ver:string = "0.0.1";
    
    constructor() {
        Logger.setContainer($("#logContainer"));
        Logger.info(this.ver);
        var sequenceData = SequencesData[0];
        var video:string = sequenceData.video;
    }
}
