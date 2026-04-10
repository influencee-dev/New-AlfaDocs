const fs = require('fs');

const filePath = 'src/pages/Solution.tsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/<section className="py-24 px-6 text-center bg-white border-t border-\[var\(--border-color\)\]">/g, '<section className="py-24 px-6 text-center bg-[var(--bg-card)] border-t border-[var(--border-color)]">');
content = content.replace(/bg-white border border-\[var\(--card-border\)\]/g, 'bg-[var(--bg-card)] border border-[var(--card-border)]');

fs.writeFileSync(filePath, content);
console.log('Done');
