#!/bin/bash

# Create directories for assets
mkdir -p public/images/{logos,trust,team,blog}
mkdir -p public/favicons

echo "Downloading WordPress assets..."

# Logos
echo "Downloading logos..."
curl -sSL -o public/images/logos/ai-therapy-logo-light.png \
  "https://aitherapy.support/wp-content/uploads/elementor/thumbs/ai-therapy-logo-light-qyo1c6kks9g5nqubpx3aw3xtwc5tqj48vu0kfcmcxc.png" 2>/dev/null || echo "  - ai-therapy-logo-light.png: Not found"

curl -sSL -o public/images/logos/therapysupport.png \
  "https://aitherapy.support/wp-content/uploads/elementor/thumbs/therapysupport-qyn6d4fke7qrqfq1vvvjvh3f6m25s3sbv39gu7t69s.png" 2>/dev/null || echo "  - therapysupport.png: Not found"

# Trust logos
echo "Downloading trust/partner logos..."
curl -sSL -o public/images/trust/unicorn-hub.png \
  "https://aitherapy.support/wp-content/uploads/2025/12/Screenshot-2025-12-24-at-11.51.08.png" 2>/dev/null || echo "  - unicorn-hub.png: Not found"

curl -sSL -o public/images/logos/microsoft-for-startups.png \
  "https://aitherapy.support/wp-content/uploads/2025/12/logo_microsoft_for_startups.png" 2>/dev/null || echo "  - microsoft-for-startups.png: Not found"

# Favicons
echo "Downloading favicons..."
curl -sSL -o public/favicon.ico \
  "https://aitherapy.support/favicon.ico" 2>/dev/null || echo "  - favicon.ico: Not found"

curl -sSL -o public/favicons/favicon-32x32.png \
  "https://aitherapy.support/wp-content/uploads/2025/10/cropped-favicon-ats-32x32.png" 2>/dev/null || echo "  - favicon-32x32.png: Not found"

curl -sSL -o public/favicons/apple-touch-icon.png \
  "https://aitherapy.support/wp-content/uploads/2025/10/cropped-favicon-ats-180x180.png" 2>/dev/null || echo "  - apple-touch-icon.png: Not found"

echo ""
echo "Asset download complete!"
echo ""
echo "Summary:"
ls -lh public/images/logos/ 2>/dev/null | grep -v "^total" | wc -l | xargs echo "  - Logos:"
ls -lh public/images/trust/ 2>/dev/null | grep -v "^total" | wc -l | xargs echo "  - Trust logos:"
ls -lh public/favicons/ 2>/dev/null | grep -v "^total" | wc -l | xargs echo "  - Favicons:"
