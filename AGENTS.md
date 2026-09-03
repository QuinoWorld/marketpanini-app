<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# MarketPanini product rules

Before implementing any significant feature, read:

- `docs/00_PROJECT_BIBLE.md`
- `docs/01_PRODUCT_VISION.md`
- `docs/02_PRODUCT_SPECIFICATION.md`
- `docs/03_USER_EXPERIENCE.md`

Treat these documents as the primary source of truth for the product.

- The physical album is always the protagonist, and "Mi Álbum" is the functional center of MarketPanini.
- Marketplace, community, AI, statistics, and sticker registration exist to support the album experience, never to compete with it.
- Do not make album content, national teams, stickers, or editions hardcoded data in the definitive architecture. Preserve compatibility with multiple future album editions through configurable data.
- Prioritize simplicity, speed, and user experience in product and technical decisions.
- AI should feel naturally integrated across the experience, not presented as a protagonist or standalone module.
- Before introducing a new dependency, architecture, or technology, explain why it is necessary and what product need it serves.
- Treat all current dashboard data as mockups, not real product data or established domain rules.
- If code and product documentation conflict, stop and report the contradiction before making an important decision.
