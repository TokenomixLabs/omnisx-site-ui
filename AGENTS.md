# OmnisX.ai — Project Rules

- The header renders the single owner-supplied master lockup `public/omnisx-logo.png` as one `<img>`; scale it with responsive height classes only (`h-[38px] md:h-[28px] lg:h-[52px]`). Why: the master defines the symbol/wordmark proportion, and separate icon + wordmark crops silently re-proportion approved brand artwork.
- `public/omnisx-favicon.png` and `public/favicon.ico` are derived from that same master's symbol; regenerate them only when the symbol itself changes. `index.html` JSON-LD `Organization.logo` points at `omnisx-logo.png`, so replacing the file keeps structured data correct.
