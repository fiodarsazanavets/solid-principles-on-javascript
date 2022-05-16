const FileProcessor = require('./fileProcessor.js');
const TextProcessor = require('./textProcessor.js');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Please specify the file to convert to HTML.', path => {
    var fileProcessor = new FileProcessor(path);
    var textrocessor = new TextProcessor(fileProcessor);
    textrocessor.convertText();
    readline.close();
});