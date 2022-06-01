class TextConversionCoordinator {

    #textProcessor = null;
    #fileProcessor = null;

    convertText() {

        var status = {
            textExtractedFromFile: false,
            textConverted: false,
            outputFileSaved: false,
            error: null
        }

        var inputText;

        try {
            inputText = this.#fileProcessor.readAllText();
            status.textExtractedFromFile = true;
        }
        catch (err) {
            status.error = err;
            return status;
        }

        var outputText;

        try {
            outputText = this.#textProcessor.convertMdText(inputText);
            if (outputText != inputText)
                status.textConverted = true;
        }
        catch (err) {
            status.error = err;
            return status;
        }

        try {
            this.#fileProcessor.writeToFile(outputText);
            status.outputFileSaved = true;
        }
        catch (err) {
            status.error = err;
            return status;
        }

        return status;
    }

    constructor(fileProcessor, textProcessor) {
        this.#fileProcessor = fileProcessor;
        this.#textProcessor = textProcessor;
    }
}

module.exports = TextConversionCoordinator;