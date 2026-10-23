#!/bin/sh
# Bouwt de site en zet hem op de Hetzner-server (CloudPanel, site gty.nl).
# Deployt alleen exact wat op GitHub main staat, zodat er nooit een oude versie live gaat.
set -e
cd "$(dirname "$0")/.."

git fetch -q origin
if [ "$(git rev-parse HEAD)" != "$(git rev-parse origin/main)" ] || ! git diff --quiet HEAD; then
  echo "Stop: deze map is niet gelijk aan GitHub main. Eerst committen + pushen (of git pull)."
  exit 1
fi

npx astro build
rsync -az --delete -e "ssh -i ~/.ssh/gty_deploy" dist/ gty-deploy@195.201.197.20:/home/gty/htdocs/site/
echo "Live op https://gty.nl"
