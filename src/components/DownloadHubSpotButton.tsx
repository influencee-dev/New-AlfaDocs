import React from 'react';
import { useLocation } from 'react-router-dom';
import { Download } from 'lucide-react';

export default function DownloadHubSpotButton() {
  const location = useLocation();

  const handleDownload = () => {
    // 1. Target the main content area (excluding header/footer)
    const mainElement = document.querySelector('main');
    if (!mainElement) return;

    // Clone the element to manipulate it without affecting the live page
    const contentClone = mainElement.cloneNode(true) as HTMLElement;
    
    // Remove the download button itself from the clone
    const downloadBtn = contentClone.querySelector('#download-hubspot-btn');
    if (downloadBtn) downloadBtn.remove();

    // 2. Extract styles
    let styles = '';
    const styleSheets = document.styleSheets;
    for (let i = 0; i < styleSheets.length; i++) {
      try {
        const rules = styleSheets[i].cssRules;
        for (let j = 0; j < rules.length; j++) {
          styles += rules[j].cssText + '\n';
        }
      } catch (e) {
        // Skip cross-origin stylesheets that we can't access
        console.warn('Could not access stylesheet:', styleSheets[i].href);
      }
    }

    // 3. Extract scripts (optional, but requested "java" which likely means JS)
    // For a static HubSpot page, we might not need all React scripts, 
    // but we can include a placeholder or basic interactivity scripts if needed.
    const scripts = `
      console.log('Page loaded in HubSpot');
      // Add any custom JS here
    `;

    // 4. Handle internal links
    // Convert /path to path.html for HubSpot compatibility
    const links = contentClone.querySelectorAll('a');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('/') && !href.startsWith('//')) {
        let newHref = href === '/' ? 'index.html' : href.substring(1).replace(/\//g, '-') + '.html';
        // Handle dynamic routes like soluzioni/:category
        if (newHref.includes(':')) {
            newHref = newHref.replace(/:/g, '');
        }
        link.setAttribute('href', newHref);
      }
    });

    // 5. Build the final HTML structure
    const pageTitle = document.title || 'AlfaDocs Page';
    const finalHtml = `
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${pageTitle}</title>
    <!-- HubSpot Template Variables can be added here -->
    <style>
        /* Reset and Base Styles */
        body { margin: 0; font-family: sans-serif; }
        ${styles}
    </style>
</head>
<body>
    <!-- Start of HubSpot Content Area -->
    <div class="hubspot-exported-content">
        ${contentClone.innerHTML}
    </div>
    <!-- End of HubSpot Content Area -->

    <script>
        (function() {
            console.log('AlfaDocs Page Exported for HubSpot');
            // Basic interactivity for exported page
            ${scripts}
        })();
    </script>
</body>
</html>
    `.trim();

    // 6. Trigger download
    const fileName = location.pathname === '/' ? 'index.html' : location.pathname.substring(1).replace(/\//g, '-') + '.html';
    const blob = new Blob([finalHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex justify-center py-12 bg-gray-50 border-t border-gray-200 no-print" id="download-hubspot-btn">
      <button
        onClick={handleDownload}
        className="flex items-center gap-2 bg-[#3b3582] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#2d2966] transition-all shadow-lg"
      >
        <Download size={20} />
        Scarica Codice HubSpot
      </button>
    </div>
  );
}
