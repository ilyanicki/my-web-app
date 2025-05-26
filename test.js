const fs = require('fs');

describe('File existence checks', () => {
  test('index.html exists', () => {
    expect(fs.existsSync('index.html')).toBe(true);
  });
  
  test('styles.css exists', () => {
    expect(fs.existsSync('styles.css')).toBe(true);
  });
});