const fs = require('fs');

class FileProcessor {

    #fullFilePath = '';

    readAllText() {
        return fs.readFileSync(this.#fullFilePath, 'utf8');
    }

    writeToFile(content) {
        var outputPath = this.#fullFilePath.replace(/\.[^/.]+$/, '') + '.html';
    
        fs.writeFile(outputPath, content, err => {
            if (err) {
              console.error(err);
            }
            console.log('HTML file created successfully.');
        });
    }

    constructor(fullFilePath) {
        this.#fullFilePath = fullFilePath;
    }
}

module.exports = FileProcessor;