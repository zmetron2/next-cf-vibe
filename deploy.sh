#!/bin/bash
export NPM_CONFIG_LEGACY_PEER_DEPS=true
alias npx='npx.cmd'
export -f npx
npx @cloudflare/next-on-pages
npx.cmd wrangler pages deploy .cloudflare --project-name next-cf-vibe

