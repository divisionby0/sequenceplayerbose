var Logger = (function () {
    function Logger() {
    }
    Logger.setContainer = function (textArea) {
        this.textArea = textArea;
    };
    Logger.info = function (message) {
        this.textArea.append("\n" + message);
    };
    return Logger;
}());
//# sourceMappingURL=Logger.js.map