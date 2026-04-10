const fs = require('fs');

const filePath = 'src/pages/Academy.tsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/bg-white/g, 'bg-[var(--bg-card)]');
content = content.replace(/bg-gray-50/g, 'bg-[var(--bg-hover)]');
content = content.replace(/border-gray-100/g, 'border-[var(--border-color)]');
content = content.replace(/border-gray-200/g, 'border-[var(--border-color)]');
content = content.replace(/text-gray-600/g, 'text-[var(--text-muted)]');
content = content.replace(/text-gray-500/g, 'text-[var(--text-muted)]');
content = content.replace(/text-gray-400/g, 'text-[var(--text-muted)]');
content = content.replace(/text-gray-800/g, 'text-[var(--text-main)]');
content = content.replace(/text-gray-900/g, 'text-[var(--text-main)]');
content = content.replace(/hover:bg-white/g, 'hover:bg-[var(--bg-card)]');

// Fix specific bg-[var(--bg-card)] that should be bg-[var(--bg-body)]
content = content.replace(/<div className="w-full bg-\[var\(--bg-card\)\]">/g, '<div className="w-full bg-[var(--bg-body)]">');
content = content.replace(/<section className="relative min-h-\[88vh\] bg-\[var\(--bg-card\)\]/g, '<section className="relative min-h-[88vh] bg-[var(--bg-body)]');
content = content.replace(/<section className="py-20 px-6 bg-\[var\(--bg-card\)\]/g, '<section className="py-20 px-6 bg-[var(--bg-body)]');
content = content.replace(/<section id="eventi" className="py-20 px-6 bg-\[var\(--bg-card\)\]/g, '<section id="eventi" className="py-20 px-6 bg-[var(--bg-body)]');

// Fix the blur circles that were bg-white
content = content.replace(/bg-\[var\(--bg-card\)\] opacity-5 rounded-full blur-\[100px\]/g, 'bg-white opacity-5 rounded-full blur-[100px]');

fs.writeFileSync(filePath, content);
console.log('Done');
