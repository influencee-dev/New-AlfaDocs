const fs = require('fs');

const filePath = 'src/pages/Academy.tsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/border-gray-50/g, 'border-[var(--border-color)]');

fs.writeFileSync(filePath, content);
console.log('Done');
