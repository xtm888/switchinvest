# Google Analytics 4 Integration - Verification Guide

## ✅ Installation Complete

Your Google Analytics 4 tracking code has been successfully integrated into SwitchInvest.be.

**Tracking ID:** `G-BP7KNJXL5G`

---

## 📍 Where It's Installed

**File:** `app/layout.tsx:92-103`

The GA4 script is loaded using Next.js `<Script>` component with `strategy="afterInteractive"` for optimal performance. This ensures:
- ✅ Analytics loads after the page becomes interactive
- ✅ No blocking of initial page render
- ✅ Proper tracking across all pages
- ✅ Works in production builds

---

## 🧪 How to Verify It's Working

### **Method 1: Real-Time Reports (Easiest)**

1. **Deploy your site** to production (Vercel/Netlify/etc.)
2. Go to Google Analytics: https://analytics.google.com
3. Select your property (G-BP7KNJXL5G)
4. Navigate to: **Reports → Realtime**
5. Open your site in a new tab: https://switchinvest.be
6. Within 30 seconds, you should see:
   - **1 active user** (you!)
   - Your page view in the realtime report
   - Your location on the map

### **Method 2: Browser DevTools (Technical)**

1. Open your site: https://switchinvest.be
2. Open Chrome DevTools (F12 or Right-click → Inspect)
3. Go to **Network** tab
4. Filter by "google-analytics" or "gtag"
5. Refresh the page
6. You should see requests to:
   - `https://www.googletagmanager.com/gtag/js?id=G-BP7KNJXL5G`
   - `https://www.google-analytics.com/g/collect?...`

### **Method 3: Google Tag Assistant (Chrome Extension)**

1. Install: [Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-companion/jmekfmbnaedfebfnmakmokmlfpblbfdm)
2. Open your site
3. Click the extension icon
4. You should see **Google Analytics: GA4** with status "Working"

---

## 📊 What Data Will Be Tracked

### **Automatically Tracked (No Code Needed):**
- ✅ Page views (all 18 pages)
- ✅ Session duration
- ✅ Bounce rate
- ✅ User location (country, city)
- ✅ Device type (desktop, mobile, tablet)
- ✅ Browser and OS
- ✅ Traffic sources (direct, organic, referral)
- ✅ Language
- ✅ Screen resolution

### **Events You Can Track Later (Custom):**
- Contact form submissions
- Phone number clicks
- WhatsApp button clicks
- Property inquiry form
- Email clicks
- Social media link clicks
- File downloads (PDFs, brochures)

---

## 🎯 Next Steps for Analytics

### **Week 1 (Set Up Goals)**
1. In GA4, go to **Admin → Events**
2. Mark important events:
   - `page_view` (already tracked)
   - `session_start` (already tracked)
   - Add custom conversions later

### **Week 2 (Connect Google Search Console)**
1. Go to GA4 → **Admin → Product Links**
2. Click **Search Console links**
3. Link your GSC property
4. **Benefit:** See which Google searches bring traffic

### **Week 3 (Set Up Custom Events)**
Create custom tracking for:
```typescript
// Example: Track contact form submission
gtag('event', 'contact_form_submit', {
  form_name: 'Contact Page',
  form_location: '/contact'
});

// Example: Track phone call click
gtag('event', 'phone_call_click', {
  phone_number: '+32 2 123 45 67'
});
```

### **Month 1 (Create Custom Reports)**
1. Go to **Explore** in GA4
2. Create reports for:
   - Landing pages performance
   - Traffic sources breakdown
   - User journey flow
   - Conversion funnel

---

## 🔍 Troubleshooting

### **Not Seeing Data?**

**1. Check if site is deployed:**
- GA4 won't work on localhost by default
- Deploy to production first

**2. Wait 24-48 hours:**
- Historical reports take time to populate
- Use Realtime reports for immediate feedback

**3. Check ad blockers:**
- Disable ad blockers (uBlock Origin, AdBlock Plus)
- Try incognito mode

**4. Verify tracking code:**
```bash
curl -s https://switchinvest.be | grep "G-BP7KNJXL5G"
```
Should return results showing the tracking ID.

**5. Check browser console:**
- Open DevTools → Console
- Look for errors related to "gtag" or "analytics"

---

## 📈 Expected Results (30 Days)

After 30 days of tracking, you should see:
- **10,000+** page views (if marketing is active)
- **2,000+** unique visitors
- **Average session duration:** 2-3 minutes
- **Bounce rate:** 40-60%
- **Top pages:** Homepage, Services, Contact
- **Top sources:** Google Organic, Direct, Referral

---

## 🎯 Key Metrics to Monitor

| Metric | Target | Why Important |
|--------|--------|---------------|
| **Organic Traffic** | +20% monthly | SEO effectiveness |
| **Bounce Rate** | < 50% | Content engagement |
| **Session Duration** | > 2 minutes | User interest |
| **Pages per Session** | > 3 pages | Site stickiness |
| **Conversion Rate** | > 3% | Lead generation |
| **Contact Form Submissions** | Track count | Sales pipeline |

---

## 🚀 Advanced Features to Enable

### **1. Enhanced Measurement (Recommended)**
In GA4 → **Admin → Data Streams → Web → Enhanced Measurement**

Enable:
- ✅ Scrolls (track how far users scroll)
- ✅ Outbound clicks (track external links)
- ✅ Site search (if you add search feature)
- ✅ Video engagement (for future video content)
- ✅ File downloads (PDFs, brochures)

### **2. User Properties**
Track custom user attributes:
- Language preference (FR/NL/EN/DE)
- Returning vs. new visitors
- Property interest type (residential/commercial)

### **3. Audiences**
Create audiences for:
- High-intent visitors (visited 3+ pages)
- Contact form viewers
- Blog readers
- Service page visitors

---

## ✅ Integration Checklist

- [x] GA4 tracking code added to layout.tsx
- [x] Build successful without errors
- [x] Script uses optimal loading strategy
- [x] Tracking ID: G-BP7KNJXL5G
- [ ] Site deployed to production
- [ ] Verified in GA4 Realtime reports
- [ ] Search Console linked
- [ ] Enhanced Measurement enabled
- [ ] Custom events configured
- [ ] Team members added to GA4 property

---

## 📞 Support Resources

- **GA4 Documentation:** https://support.google.com/analytics/answer/10089681
- **GA4 Training:** https://analytics.google.com/analytics/academy/
- **Debug View:** https://support.google.com/analytics/answer/7201382
- **Next.js Analytics Guide:** https://nextjs.org/docs/app/building-your-application/optimizing/analytics

---

**Status:** ✅ Ready for Production
**Last Updated:** January 2025
**Integration Method:** Next.js Script Component
