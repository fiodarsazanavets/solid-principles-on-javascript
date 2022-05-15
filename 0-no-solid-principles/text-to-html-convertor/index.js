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
    var textToWrite = '';

    for (var i = 0; i < paragraphs.length; i++) {
        if (paragraphs[i])
            textToWrite += `<p>${paragraphs[i]}</p>\n`;
    }

    textToWrite += '<br/>';
    writeToFile(path, textToWrite);
}

function readAllText(path) {
    return fs.readFileSync(path, 'utf8');
}

function writeToFile(path, content) {
    var outputPath = path.replace(/\.[^/.]+$/, '') + '.html';

    fs.writeFile(outputPath, content, err => {
        if (err) {
          console.error(err);
        }
        console.log('HTML file created successfully.');
      });
}