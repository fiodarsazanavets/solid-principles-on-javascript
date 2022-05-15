class TextProcessor {

    #fileProcessor = null;

    convertText() {
        var inputText = this.#fileProcessor.readAllText();

        var paragraphs = inputText.split(/[\r\n\?|\n]/);
        var textToWrite = '';
    
        for (var i = 0; i < paragraphs.length; i++) {
            if (paragraphs[i])
                textToWrite += `<p>${paragraphs[i]}</p>\n`;
        }
    
        textToWrite += '<br/>';
        this.#fileProcessor.writeToFile(textToWrite);
    }

    constructor(fileProcessor) {
        this.#fileProcessor = fileProcessor;
    }
}

module.exports = TextProcessor;