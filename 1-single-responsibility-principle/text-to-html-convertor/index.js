const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const fs = require('fs');

readline.question('Please specify the file to convert to HTML.', path => {
    processFileContent(path);
    readline.close();
});

function processFileContent(path) {
    var inputText = readAllText(path);
    var paragraphs = inputText.split(/[\r\n\?|\n]/);
    console.log(paragraphs[0]);
}

function readAllText(path) {
    return fs.readFileSync(path, 'utf8');
}

function writeToFile(path, text) {
    
}