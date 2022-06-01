const FileProcessor = require('./fileProcessor.js');
const MdTextProcessor = require('./mdTextProcessor.js');
const TextConversionCoordinator = require('./textConversionCoordinator.js');

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
    var textProcessor = new MdTextProcessor(tagsToReplace);
    var coordinator = new TextConversionCoordinator(fileProcessor, textProcessor);
    var status = coordinator.convertText();

    console.log(`Text extracted from file: ${status.textExtractedFromFile}`);
    console.log(`Text converted: ${status.textConverted}`);
    console.log(`Output file saved: ${status.outputFileSaved}`);

    if (status.error)
        console.log(`The following error occured: ${status.error}`);
        
    readline.close();
});