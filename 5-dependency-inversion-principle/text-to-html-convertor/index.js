const FileProcessor = require('./fileProcessor.js');
const MdTextProcessor = require('./mdTextProcessor.js');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const tagsToReplace = {
    '**': {
        opening: '<strong>',
        closing: '</strong>' 
    },
    '*': {
        opening: '<em>',
        closing: '</em>' 
    },
    '~~': {
        opening: '<del>',
        closing: '</del>' 
    }
};

readline.question('Please specify the file to convert to HTML.', path => {
    var fileProcessor = new FileProcessor(path);
    var texPtrocessor = new MdTextProcessor(tagsToReplace);

    var inputText = fileProcessor.readAllText();
    var outputText = texPtrocessor.convertMdText(inputText);
    fileProcessor.writeToFile(outputText);
    readline.close();
});