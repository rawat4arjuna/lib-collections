#!/bin/bash

# === CONFIG ===
PACKAGE_DIR="../packages/hooks"   # Relative path from scripts/ folder
ACCESS="public"                    # Use "restricted" for private scoped packages
VERSION=${1:-patch}                # Default to patch, allow optional arg (patch/minor/major)
echo "✅ Started Package publishing from $PACKAGE_DIR (version bumped as $VERSION)"
# === Go to package directory ===
cd "$(dirname "$0")/$PACKAGE_DIR" || exit

# === Bump version ===
npm version $VERSION

# === Build the package ===
npm run build

# === Publish the package ===
npm publish --access "$ACCESS"

# === Done ===
echo "✅ Package published successfully from $PACKAGE_DIR (version bumped as $VERSION)"
