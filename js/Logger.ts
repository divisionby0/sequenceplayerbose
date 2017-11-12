class Logger {

    private static textArea:any;

    public static setContainer(textArea:any):void{
        this.textArea = textArea;
    }

    public static info(message):void{
        this.textArea.append("\n"+message);
    }
}
