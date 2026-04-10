const fs = require('fs');

const filePath = 'src/pages/Home.tsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/bg-gray-300/g, 'bg-[var(--border-color)]');
content = content.replace(/bg-gray-100/g, 'bg-[var(--bg-hover)]');

fs.writeFileSync(filePath, content);
console.log('Done');
