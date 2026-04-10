const fs = require('fs');

const filePath = 'src/pages/Pricing.tsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/bg-white/g, 'bg-[var(--bg-card)]');
content = content.replace(/bg-gray-50/g, 'bg-[var(--bg-hover)]');
content = content.replace(/bg-gray-100/g, 'bg-[var(--border-color)]');
content = content.replace(/bg-gray-200/g, 'bg-[var(--border-color)]');
content = content.replace(/border-gray-100/g, 'border-[var(--border-color)]');
content = content.replace(/border-gray-200/g, 'border-[var(--border-color)]');
content = content.replace(/text-gray-600/g, 'text-[var(--text-muted)]');
content = content.replace(/text-gray-500/g, 'text-[var(--text-muted)]');
content = content.replace(/text-gray-400/g, 'text-[var(--text-muted)]');
content = content.replace(/text-gray-800/g, 'text-[var(--text-main)]');
content = content.replace(/text-gray-900/g, 'text-[var(--text-main)]');
content = content.replace(/hover:bg-white/g, 'hover:bg-[var(--bg-card)]');

// Fix specific bg-[var(--bg-card)] that should be bg-[var(--bg-body)]
content = content.replace(/<div className="w-full pt-20 pb-32 bg-\[var\(--bg-card\)\]">/g, '<div className="w-full pt-20 pb-32 bg-[var(--bg-body)]">');

fs.writeFileSync(filePath, content);
console.log('Done');
