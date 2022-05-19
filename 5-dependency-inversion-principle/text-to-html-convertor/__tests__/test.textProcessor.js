const MdTextProcessor = require('../mdTextProcessor.js')
 
test('Test TextProcessor.convertText', () => {
    var originalText = 'This is the first paragraph. It has * and *.\r\n' +
                'This is the second paragraph. It has ** and **.';
                
    var expectedSting = '<p>This is the first paragraph. It has * and *.</p>\n' +
                '<p>This is the second paragraph. It has ** and **.</p>\n' +
                '<br/>';

    var tagsToReplace = {
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

    var textProcessor = new MdTextProcessor(tagsToReplace);

    expect(textProcessor.convertText(originalText)).toBe(expectedSting);
});