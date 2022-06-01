const TextConversionCoordinator = require('../textConversionCoordinator.js')

test('Test TextConversionCoordinator.convertText can process text', () => {
    
    var fileProcessor = {
        readAllText() {
            return 'input';
        },
        writeToFile() {
            return;
        }
    };

    var textProcessor = {
        convertMdText(input) {
            return 'altered input';
        }
    }

    var status = new TextConversionCoordinator(fileProcessor, textProcessor).convertText();
    
    expect(status.textExtractedFromFile).toBe(true);
    expect(status.textConverted).toBe(true);
    expect(status.outputFileSaved).toBe(true);
    expect(status.error).toBeNull();
})

test('Test TextConversionCoordinator.convertText can detect unconverted text', () => {
    
    var fileProcessor = {
        readAllText() {
            return 'input';
        },
        writeToFile() {
            return;
        }
    };

    var textProcessor = {
        convertMdText(input) {
            return 'input';
        }
    }

    var status = new TextConversionCoordinator(fileProcessor, textProcessor).convertText();
    
    expect(status.textExtractedFromFile).toBe(true);
    expect(status.textConverted).toBe(false);
    expect(status.outputFileSaved).toBe(true);
    expect(status.error).toBeNull();
})

test('Test TextConversionCoordinator.convertText can detect unsuccessful read', () => {
    
    var fileProcessor = {
        readAllText() {
            throw 'Read error occurred.';
        },
        writeToFile() {
            return;
        }
    };

    var textProcessor = {
        convertMdText(input) {
            return 'input';
        }
    }

    var status = new TextConversionCoordinator(fileProcessor, textProcessor).convertText();
    
    expect(status.textExtractedFromFile).toBe(false);
    expect(status.textConverted).toBe(false);
    expect(status.outputFileSaved).toBe(false);
    expect(status.error).toBe('Read error occurred.');
})

test('Test TextConversionCoordinator.convertText can detect unsuccessful convert', () => {
    
    var fileProcessor = {
        readAllText() {
            return 'input';
        },
        writeToFile() {
            return;
        }
    };

    var textProcessor = {
        convertMdText(input) {
            throw 'Conversion error occurred.';
        }
    }

    var status = new TextConversionCoordinator(fileProcessor, textProcessor).convertText();
    
    expect(status.textExtractedFromFile).toBe(true);
    expect(status.textConverted).toBe(false);
    expect(status.outputFileSaved).toBe(false);
    expect(status.error).toBe('Conversion error occurred.');
})

test('Test TextConversionCoordinator.convertText can detect unsuccessful save', () => {
    
    var fileProcessor = {
        readAllText() {
            return;
        },
        writeToFile() {
            throw 'Unable to save the file.';
        }
    };

    var textProcessor = {
        convertMdText(input) {
            return 'altered input';
        }
    }

    var status = new TextConversionCoordinator(fileProcessor, textProcessor).convertText();
    
    expect(status.textExtractedFromFile).toBe(true);
    expect(status.textConverted).toBe(true);
    expect(status.outputFileSaved).toBe(false);
    expect(status.error).toBe('Unable to save the file.');
})