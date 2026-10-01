# BUNA menu site (static, Vercel-ready)
1. Deploy: drag this folder into Vercel, or run `vercel` inside it. No build step.
2. Photos: drop WebP files into /images using the names in the MENU list in index.html
   (hero.webp, coffee.webp, espresso.webp, ube-latte.webp, gallery-1..6.webp ...).
   Hero ~1600px wide, cards ~800px, keep each under ~150 KB. Missing photos show a branded fallback automatically.
3. Menu: edit the MENU array at the top of the script in index.html (prices, descriptions `d`, add-ons `opts:["Oat milk +€0.50"]`).
4. About text and footer: search for "[Add your café story here]" and "[Address]".

## Internet photos
Image order: /images/<name>.webp -> Unsplash (REMOTE map in index.html) -> branded fallback.
Currently wired: hero, espresso, coffee banner, latte. To add more, paste an Unsplash photo ID into REMOTE.
For production, download the photos, convert to WebP and put them in /images (faster and no third-party dependency).
