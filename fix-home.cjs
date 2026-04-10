const fs = require('fs');

const filePath = 'src/pages/Home.tsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/bg-white/g, 'bg-[var(--bg-card)]');
content = content.replace(/bg-\[var\(--bg-card\)\] text-\[var\(--theme-primary\)\] px-8 py-4/g, 'bg-white text-[var(--theme-primary)] px-8 py-4');
content = content.replace(/bg-\[var\(--bg-card\)\]\/20/g, 'bg-white/20');

fs.writeFileSync(filePath, content);
console.log('Done');
