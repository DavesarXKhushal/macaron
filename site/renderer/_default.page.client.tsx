import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { PageShell } from './PageShell';
import type { PageContextClient } from './types';

export { render };

let root: any;

async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext;
  const container = document.getElementById('page-view')!;

  const app = (
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );

  if (!root) {
    if (container.innerHTML) {
      // Hydrate if there's server-rendered content
      root = hydrateRoot(container, app);
    } else {
      // Create new root if no server content
      root = createRoot(container);
      root.render(app);
    }
  } else {
    // Update existing root
    root.render(app);
  }
}

export const clientRouting = true;
