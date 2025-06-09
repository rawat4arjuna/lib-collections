---
title: useRexoraOnline
---

# useRexoraOnline

The `useRexoraOnline` hook is a simple utility hook that allows you to detect if the user's browser is currently online or offline. It leverages the browser's `navigator.onLine` property and listens for `online` and `offline` events to provide a reactive state reflecting the network connection status.

## Functionality

This hook returns a boolean value that is `true` when the browser is online and `false` when it is offline. The returned value updates automatically in response to changes in the network connection.

## Parameters

This hook does not accept any parameters.

## Return Value

The hook returns a single boolean value:

- `boolean`: `true` if the browser is online, `false` if the browser is offline.

## Usage Examples
```
jsx
import React from 'react';
import useRexoraOnline from '@rexora-hooks/useRexoraOnline'; // Assuming your hooks are in a package

function OnlineStatusDisplay() {
  const isOnline = useRexoraOnline();

  return (
    <div>
      <p>You are currently: {isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}

export default OnlineStatusDisplay;
```
In this example, the `OnlineStatusDisplay` component uses `useRexoraOnline` to get the current online status and displays a message indicating whether the user is online or offline. The message will update automatically if the network connection changes.