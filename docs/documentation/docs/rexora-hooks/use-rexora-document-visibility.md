---
id: use-rexora-document-visibility
title: useRexoraDocumentVisibility
---

The `useRexoraDocumentVisibility` hook is a utility that allows you to track the visibility state of the document. It provides a simple way to determine if the user is currently viewing the page or if it's hidden (e.g., in another tab or minimized).

## Usage
```
jsx
import { useRexoraDocumentVisibility } from 'rexora-hooks';

function MyComponent() {
  const visibilityState = useRexoraDocumentVisibility();

  return (
    <div>
      <p>Document is currently: {visibilityState}</p>
      {visibilityState === 'visible' ? (
        <p>Welcome back!</p>
      ) : (
        <p>We'll be here when you return.</p>
      )}
    </div>
  );
}
```
## Parameters

The `useRexoraDocumentVisibility` hook does not accept any parameters.

## Return Value

The hook returns a single string value representing the current visibility state of the document. The possible values are:

*   `'visible'`: The page content is at least partially visible.
*   `'hidden'`: The page content is not visible to the user.
*   `'prerender'`: The page is being prerendered and is not yet visible.
*   `'unloaded'`: The page is being unloaded.

## Description

This hook leverages the browser's `document.visibilityState` API and the `visibilitychange` event. It initializes the state with the current `document.visibilityState` when the component mounts and updates the state whenever the `visibilitychange` event fires. This provides a reactive way to keep track of whether the user is actively viewing your page.

This can be useful for various scenarios, such as:

*   Pausing or resuming animations or video playback when the tab is not active.
*   Stopping or starting data fetching or background processes when the page is hidden or becomes visible.
*   Tracking user engagement based on how long they spend with the tab in focus.

The hook ensures that event listeners are properly added and removed to prevent memory leaks.