const TextProcessorInterface = require('./textProcessorInterface.js');

class TextProcessor extends TextProcessorInterface {

    convertText(inputText) {
        
        var paragraphs = inputText.split(/[\r\n\?|\n]/);
        var textToWrite = '';
    
        for (var i = 0; i < paragraphs.length; i++) {
            if (paragraphs[i])
                textToWrite += `<p>${paragraphs[i]}</p>\n`;
        }
    
        textToWrite += '<br/>';
        return textToWrite;
    }
}

module.exports = TextProcessor;