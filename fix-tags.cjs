const fs = require('fs');

const filePath = 'src/pages/Academy.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Blue tags
content = content.replace(/bg-blue-50 text-blue-600/g, 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400');
content = content.replace(/bg-blue-100 text-blue-700/g, 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300');
content = content.replace(/bg-blue-50 text-\[var\(--theme-primary\)\]/g, 'bg-blue-50 text-[var(--theme-primary)] dark:bg-blue-900/30 dark:text-blue-400');

// Orange tags
content = content.replace(/bg-orange-50 text-orange-600/g, 'bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400');
content = content.replace(/bg-orange-100 text-orange-700/g, 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300');

// Green tags
content = content.replace(/bg-green-50 text-\[var\(--theme-accent\)\]/g, 'bg-green-50 text-[var(--theme-accent)] dark:bg-green-900/30 dark:text-green-400');
content = content.replace(/bg-green-100 text-green-700/g, 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300');

// Purple tags
content = content.replace(/bg-purple-100 text-purple-700/g, 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300');

// Red tags
content = content.replace(/bg-red-100 text-red-700/g, 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300');

// Gray tags
content = content.replace(/bg-\[var\(--bg-card\)\] text-\[var\(--text-muted\)\]/g, 'bg-[var(--bg-card)] text-[var(--text-muted)] dark:bg-[var(--bg-hover)]');

// Mockup bar chart
content = content.replace(/bg-blue-300 opacity-50/g, 'bg-blue-300 opacity-50 dark:bg-blue-800/50');

fs.writeFileSync(filePath, content);
console.log('Done');
