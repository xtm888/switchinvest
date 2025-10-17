# Migration Guide: Moving Pages to [locale] Structure

This guide will help you migrate your existing pages to the new URL-based i18n routing structure.

## Overview

We're moving from client-side language switching to URL-based routing:
- **Before:** `switchinvest.be` (language via dropdown)
- **After:** `switchinvest.be/fr/`, `switchinvest.be/nl/`, `switchinvest.be/en/`

## What's Already Done ✅

1. ✅ `middleware.ts` created - handles URL routing
2. ✅ `app/[locale]/layout.tsx` created - locale-specific layout
3. ✅ `contexts/language-context.tsx` updated - uses URL locale
4. ✅ `app/[locale]/bruxelles/page.tsx` created - Brussels landing page
5. ✅ `app/sitemap.ts` updated - multilingual URLs
6. ✅ `public/robots.txt` created - crawler instructions

## What You Need to Do 📋

### Step 1: Move Existing Pages (Required)

You need to move all your existing pages under the `app/[locale]/` directory.

**Current structure:**
```
app/
├── page.tsx
├── about/page.tsx
├── services/
│   ├── page.tsx
│   ├── real-estate/page.tsx
│   └── development/page.tsx
├── portfolio/page.tsx
├── blog/
│   ├── page.tsx
│   └── [slug]/page.tsx
├── contact/page.tsx
├── technologies/page.tsx
├── client-portal/page.tsx
├── privacy-policy/page.tsx
└── terms/page.tsx
```

**New structure:**
```
app/
├── [locale]/
│   ├── layout.tsx ✅ (already created)
│   ├── page.tsx ⬅️ MOVE HERE
│   ├── about/page.tsx ⬅️ MOVE HERE
│   ├── services/
│   │   ├── page.tsx ⬅️ MOVE HERE
│   │   ├── real-estate/page.tsx ⬅️ MOVE HERE
│   │   └── development/page.tsx ⬅️ MOVE HERE
│   ├── portfolio/page.tsx ⬅️ MOVE HERE
│   ├── blog/
│   │   ├── page.tsx ⬅️ MOVE HERE
│   │   └── [slug]/page.tsx ⬅️ MOVE HERE
│   ├── contact/page.tsx ⬅️ MOVE HERE
│   ├── technologies/page.tsx ⬅️ MOVE HERE
│   ├── client-portal/page.tsx ⬅️ MOVE HERE
│   ├── privacy-policy/page.tsx ⬅️ MOVE HERE
│   ├── terms/page.tsx ⬅️ MOVE HERE
│   └── bruxelles/page.tsx ✅ (already created)
├── layout.tsx (keep - root layout)
├── globals.css (keep)
├── error.tsx (keep)
├── not-found.tsx (keep)
├── loading.tsx (keep)
└── metadata.ts (keep)
```

### Step 2: Use the Migration Script

**Option A: Manual Migration (Safest)**

1. Create the directories first:
```bash
cd /Users/xtm888/switchinvest

# Create subdirectories under [locale]
mkdir -p app/\[locale\]/about
mkdir -p app/\[locale\]/services/real-estate
mkdir -p app/\[locale\]/services/development
mkdir -p app/\[locale\]/portfolio
mkdir -p app/\[locale\]/blog/\[slug\]
mkdir -p app/\[locale\]/contact
mkdir -p app/\[locale\]/technologies
mkdir -p app/\[locale\]/client-portal
mkdir -p app/\[locale\]/privacy-policy
mkdir -p app/\[locale\]/terms
```

2. Move files one by one:
```bash
# Homepage
mv app/page.tsx app/\[locale\]/page.tsx

# About
mv app/about/page.tsx app/\[locale\]/about/page.tsx
mv app/about/metadata.ts app/\[locale\]/about/metadata.ts
mv app/about/loading.tsx app/\[locale\]/about/loading.tsx

# Services
mv app/services/page.tsx app/\[locale\]/services/page.tsx
mv app/services/loading.tsx app/\[locale\]/services/loading.tsx
mv app/services/real-estate/page.tsx app/\[locale\]/services/real-estate/page.tsx
mv app/services/development/page.tsx app/\[locale\]/services/development/page.tsx

# Portfolio
mv app/portfolio/page.tsx app/\[locale\]/portfolio/page.tsx
mv app/portfolio/metadata.ts app/\[locale\]/portfolio/metadata.ts
mv app/portfolio/loading.tsx app/\[locale\]/portfolio/loading.tsx

# Blog
mv app/blog/page.tsx app/\[locale\]/blog/page.tsx
mv app/blog/metadata.ts app/\[locale\]/blog/metadata.ts
mv app/blog/\[slug\]/page.tsx app/\[locale\]/blog/\[slug\]/page.tsx

# Contact
mv app/contact/page.tsx app/\[locale\]/contact/page.tsx
mv app/contact/metadata.ts app/\[locale\]/contact/metadata.ts

# Other pages
mv app/technologies/page.tsx app/\[locale\]/technologies/page.tsx
mv app/client-portal/page.tsx app/\[locale\]/client-portal/page.tsx
mv app/privacy-policy/page.tsx app/\[locale\]/privacy-policy/page.tsx
mv app/terms/page.tsx app/\[locale\]/terms/page.tsx
```

**Option B: Automated Script**

Run this script to move everything automatically:
```bash
cd /Users/xtm888/switchinvest
./migrate-to-locale.sh
```

(See `migrate-to-locale.sh` file below)

### Step 3: Update Internal Links

After moving pages, update all internal links to use the locale:

**Before:**
```tsx
<Link href="/about">About</Link>
<Link href="/services">Services</Link>
<Link href="/contact">Contact</Link>
```

**After:**
```tsx
import { useLanguage } from '@/contexts/language-context'

const { language } = useLanguage()

<Link href={`/${language}/about`}>About</Link>
<Link href={`/${language}/services`}>Services</Link>
<Link href={`/${language}/contact`}>Contact</Link>
```

**Files that need link updates:**
- `components/navigation.tsx`
- `components/footer.tsx`
- Any page with internal links

### Step 4: Update Metadata Per Language

For each page, you can now provide different metadata per language.

**Example for homepage (`app/[locale]/page.tsx`):**

Add this at the top of the file:
```typescript
import type { Metadata } from 'next'

interface Props {
  params: { locale: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params

  const metadata = {
    fr: {
      title: "Vendre Maison Rapidement Belgique | Offre Sous 48H | SwitchInvest",
      description: "Besoin de vendre votre maison rapidement en Belgique? SwitchInvest achète votre propriété en l'état. Offre en 24-48h, paiement comptant, zéro commission.",
    },
    nl: {
      title: "Huis Snel Verkopen België | Bod Binnen 48 Uur | SwitchInvest",
      description: "Moet u uw huis snel verkopen in België? SwitchInvest koopt uw woning in huidige staat. Bod binnen 24-48u, contante betaling, geen commissie.",
    },
    en: {
      title: "Sell House Fast Belgium | Cash Offer Within 48 Hours | SwitchInvest",
      description: "Need to sell your house quickly in Belgium? SwitchInvest buys your property as-is. Offer in 24-48hrs, cash payment, zero commission.",
    }
  }

  return metadata[locale as keyof typeof metadata] || metadata.fr
}
```

### Step 5: Test the Migration

1. **Start development server:**
```bash
npm run dev
```

2. **Test these URLs:**
- `http://localhost:3000` → should redirect to `/fr`
- `http://localhost:3000/fr` → French homepage
- `http://localhost:3000/nl` → Dutch homepage
- `http://localhost:3000/en` → English homepage
- `http://localhost:3000/fr/about` → French about page
- `http://localhost:3000/fr/bruxelles` → Brussels landing page

3. **Check for errors:**
- Open browser console
- Look for 404 errors
- Check that language switcher works
- Verify translations load correctly

### Step 6: Clean Up Old Directories

After confirming everything works, clean up old directories:

```bash
# Remove old directories (only after confirming new structure works!)
rm -rf app/about
rm -rf app/services
rm -rf app/portfolio
rm -rf app/blog
rm -rf app/contact
rm -rf app/technologies
rm -rf app/client-portal
rm -rf app/privacy-policy
rm -rf app/terms
```

## Troubleshooting

### Issue: "Cannot find module" errors

**Solution:** Make sure you moved the metadata.ts and loading.tsx files along with page.tsx

### Issue: Links not working

**Solution:** Update all internal links to include `/${language}` prefix

### Issue: Translations not loading

**Solution:** Check that `useLanguage()` hook is being called and that the LanguageProvider is wrapping your components

### Issue: Middleware not redirecting

**Solution:** Check that middleware.ts matcher config is correct and restart dev server

## What URLs Will Work After Migration

| Before | After |
|--------|-------|
| `switchinvest.be` | `switchinvest.be/fr` (redirects) |
| N/A | `switchinvest.be/nl` (new) |
| N/A | `switchinvest.be/en` (new) |
| `switchinvest.be/about` | `switchinvest.be/fr/about` |
| `switchinvest.be/services` | `switchinvest.be/fr/services` |
| `switchinvest.be/contact` | `switchinvest.be/fr/contact` |
| N/A | `switchinvest.be/fr/bruxelles` (new!) |
| N/A | `switchinvest.be/nl/bruxelles` (new!) |

## Expected SEO Impact

**Week 1:**
- Google discovers new URL structure
- Starts indexing /fr/, /nl/, /en/ versions
- May see temporary ranking fluctuations

**Week 2-4:**
- Google indexes all language versions
- Rankings stabilize
- New keywords start appearing (Dutch, English)

**Month 2-3:**
- Strong rankings for Brussels keywords
- Increased organic traffic (2-3x)
- Better targeting of Dutch-speaking Belgium

## Need Help?

If you encounter issues during migration:
1. Check the Next.js dev server console for errors
2. Verify file paths are correct
3. Make sure all imports still work
4. Test each language version manually

## Next Steps After Migration

1. ✅ Migration complete
2. 📝 Write 3 Brussels blog posts (FR + NL)
3. 📍 Set up Google Business Profile
4. 📊 Monitor Google Search Console for indexing
5. 🔗 Build Belgian citations (30 directories)
6. 📈 Track rankings for Brussels keywords

---

**Migration Checklist:**

- [ ] Created [locale] directories
- [ ] Moved all pages to [locale] structure
- [ ] Updated internal links with language prefix
- [ ] Added locale-specific metadata
- [ ] Tested all language versions
- [ ] Verified translations work
- [ ] Checked sitemap generates correctly
- [ ] Tested Brussels landing page (/fr/bruxelles, /nl/bruxelles)
- [ ] Cleaned up old directories
- [ ] Deployed to production

**Once complete, your site will be fully SEO-optimized for multilingual Belgium! 🎉**
