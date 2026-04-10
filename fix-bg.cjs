const fs = require('fs');

const filePath = 'src/pages/Academy.tsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/bg-gray-100/g, 'bg-[var(--border-color)]');
content = content.replace(/bg-gray-200/g, 'bg-[var(--border-color)]');

fs.writeFileSync(filePath, content);
console.log('Done');
