const fs = require('fs');

test('Проверка наличия index.html', () => {
    expect(fs.existsSync('index.html')).toBe(true);
});

test('Проверка наличия styles.css', () => {
    expect(fs.existsSync('styles.css')).toBe(true);
});