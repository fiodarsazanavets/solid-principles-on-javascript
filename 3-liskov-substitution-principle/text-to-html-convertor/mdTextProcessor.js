const TextProcessor = require('./textProcessor.js');

class MdTextProcessor extends TextProcessor {

    #tagsToReplace = null;

    convertMdText(inputText) {
        
        var processedText = super.convertText(inputText);

        for (const [key, value] of Object.entries(this.#tagsToReplace)) {
            var replacementTags = key;
            if (this.countStringOccurrences(processedText, key) % 2 == 0)
                    processedText = this.applyTagReplacement(processedText, key, value.opening, value.closing);
        }

        return processedText;
    }

    countStringOccurrences(text, pattern) {
        var count = 0;
        var currentIndex = 0;

        while ((currentIndex = text.indexOf(pattern, currentIndex)) != -1) {
            currentIndex += pattern.length;
            count++;
        }

        return count;
    }

    applyTagReplacement(text, inputTag, openingTag, closingTag)
    {
        var count = 0;
        var currentIndex = 0;

        while ((currentIndex = text.indexOf(inputTag, currentIndex)) != -1) {
            count++;
            var replacement = count % 2 != 0 ? openingTag : closingTag;
            text = text.replace(inputTag, replacement);
        }
        
        return text;
    }

    constructor(tagsToReplace) {
        super();
        this.#tagsToReplace = tagsToReplace;    
    }
}

module.exports = MdTextProcessor;