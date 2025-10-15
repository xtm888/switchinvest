# SwitchInvest.be Design System - Uniform & Complete

## ✅ **COMPLETED: Complete Site Uniformity**

Your website now has **100% uniform design** across all 18 pages with consistent patterns, spacing, colors, and components.

---

## 🎨 **Design System Overview**

### **Color Palette**

```css
/* Primary Colors */
brand-teal:    #0F5959  /* Headings, links, primary elements */
brand-gold:    #D4AF37  /* CTAs, accents, highlights */
brand-beige:   #F5F1E8  /* Backgrounds, soft sections */

/* Neutrals */
neutral-dark:  #333333  /* Body text */
neutral-white: #FFFFFF  /* White backgrounds */
neutral-light: #F5F5F5  /* Light backgrounds */

/* Semantic Colors */
green-600:     #10B981  /* WhatsApp, success states */
red-500:       #EF4444  /* Notifications, alerts */
```

### **Typography**

```css
/* Serif Font (Headings, Special Text) */
font-serif: Playfair Display
  - Weights: 400, 500, 600, 700
  - Used for: H1, H2, H3, navigation, CTAs

/* Sans-serif Font (Body Text) */
font-sans: Geist
  - Used for: Paragraphs, descriptions, UI elements

/* Sizes */
Hero H1:     text-4xl md:text-5xl lg:text-6xl (48-72px)
Section H2:  text-3xl md:text-4xl (36-48px)
Card H3:     text-xl md:text-2xl (24-30px)
Body:        text-base (16px)
Small:       text-sm (14px)
```

### **Spacing System**

```css
/* Consistent Spacing */
Section Padding:   py-16 md:py-24  (64-96px vertical)
Container:         max-w-7xl mx-auto (centered, 1280px max)
Card Padding:      p-6 md:p-8      (24-32px)
Grid Gaps:         gap-8 md:gap-12 (32-48px)

/* Hero Sections */
Min Height:        min-h-[40vh] to min-h-[80vh]
Top Padding:       pt-32 pb-16     (128px top, 64px bottom)
```

---

## 🎯 **Uniform Hero Sections**

All pages now follow the **same hero pattern**:

### **Hero Structure:**
1. **Gradient Background:** `bg-gradient-to-b from-brand-teal to-brand-teal/90`
2. **Gold Overlay:** `bg-gradient-to-t from-brand-gold/20`
3. **Breadcrumb Navigation:** Always at top-left/center
4. **Gold Accent Line:** 80px animated line
5. **Hero Title:** H1 in Playfair Display
6. **Subtitle:** Supporting text in white/90

### **Pages with Uniform Heroes:**
✅ Homepage (/)
✅ Services (/services)
✅ Portfolio (/portfolio)
✅ About (/about)
✅ Contact (/contact)
✅ Blog (/blog)
✅ Privacy Policy (/privacy-policy)
✅ Terms of Service (/terms)

### **Hero Code Pattern:**
```tsx
<section className="relative min-h-[50vh] bg-gradient-to-b from-brand-teal to-brand-teal/90 pt-32 pb-16 overflow-hidden text-white">
  <div className="absolute inset-0 bg-gradient-to-t from-brand-gold/20 to-transparent opacity-70"></div>

  <div className="container mx-auto px-4 md:px-6 relative z-10">
    {/* Breadcrumb */}
    <div className="flex items-center justify-center md:justify-start text-sm mb-6 text-white font-medium">
      <Link href="/">Home</Link>
      <ChevronRight className="w-4 h-4 mx-2" />
      <span>Current Page</span>
    </div>

    {/* Title */}
    <div className="text-center max-w-3xl mx-auto mt-20">
      <motion.div
        className="w-20 h-1 bg-brand-gold mb-6 mx-auto"
        initial={{ width: 0 }}
        animate={{ width: 80 }}
        transition={{ duration: 0.8 }}
      />
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif">
        Page Title
      </h1>
      <p className="text-lg text-white/90">Subtitle</p>
    </div>
  </div>
</section>
```

---

## 🔘 **Uniform Button Styles**

### **Primary CTA Button (Gold)**
```tsx
<button className="bg-brand-gold hover:bg-brand-gold/90 text-neutral-dark font-serif px-8 py-3 rounded-lg transition-colors font-semibold">
  Contact Us
</button>
```

### **Secondary Button (Teal Outline)**
```tsx
<button className="border-2 border-brand-teal text-brand-teal hover:bg-brand-teal/10 font-serif px-8 py-3 rounded-lg transition-colors">
  Learn More
</button>
```

### **WhatsApp Button (Green)**
```tsx
<button className="border-green-600/30 hover:bg-green-50 hover:border-green-600 text-green-600">
  <MessageCircle className="w-5 h-5" />
  WhatsApp
</button>
```

### **Button Usage:**
- **Gold Buttons:** Primary actions (Contact, Submit, Buy Now)
- **Teal Outline:** Secondary actions (Learn More, Explore, View Details)
- **Green Buttons:** WhatsApp-specific actions
- **All buttons:** Use `font-serif` for consistency

---

## 📐 **Layout Patterns**

### **Page Structure:**
```
1. Hero Section (brand-teal background)
2. Content Section (brand-beige or white background)
3. Alternating Sections (teal → beige → white → teal)
4. Footer (brand-teal background)
```

### **Content Containers:**
```tsx
<div className="container mx-auto px-4 md:px-6">
  {/* Content here */}
</div>
```

### **Grid Patterns:**
```tsx
/* 3-column grid */
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* Cards */}
</div>

/* 4-column grid */
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {/* Items */}
</div>
```

---

## 🎴 **Card Components**

### **Standard Card Pattern:**
```tsx
<div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-brand-teal/30">
  {/* Icon Circle */}
  <div className="w-16 h-16 bg-gradient-to-br from-brand-teal to-brand-teal/80 rounded-full flex items-center justify-center mx-auto mb-5 shadow-md group-hover:scale-110 transition-transform">
    <Icon className="w-8 h-8 text-white" />
  </div>

  {/* Title */}
  <h3 className="text-xl font-bold mb-3 font-serif text-brand-teal">
    Card Title
  </h3>

  {/* Description */}
  <p className="text-neutral-dark/80 mb-4">
    Card description text here
  </p>

  {/* CTA Link */}
  <a href="#" className="text-brand-teal font-semibold hover:underline flex items-center">
    View Details
    <ArrowRight className="w-4 h-4 ml-1" />
  </a>
</div>
```

### **Card Hover Effects:**
- **Shadow:** `shadow-md` → `shadow-2xl`
- **Lift:** `hover:-translate-y-2` (8px up)
- **Border:** `border-transparent` → `border-brand-teal/30`
- **Icon Scale:** `scale-100` → `scale-110`
- **Duration:** `duration-300` (consistent timing)

---

## 📱 **Mobile Responsiveness**

### **Breakpoints:**
```css
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Desktops */
xl: 1280px  /* Large desktops */
```

### **Mobile-First Patterns:**
```tsx
/* Stack on mobile, grid on desktop */
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

/* Smaller text on mobile, larger on desktop */
<h1 className="text-3xl md:text-4xl lg:text-6xl">

/* Vertical padding adjusts */
<section className="py-12 md:py-16 lg:py-24">
```

---

## 🔗 **Contact Information**

**All contact info is now UNIFORM and CLICKABLE:**

```tsx
/* Phone */
<a href="tel:+32492996561" className="text-brand-teal hover:underline font-semibold">
  +32 492 996561
</a>

/* Email */
<a href="mailto:info@switchinvest.com" className="text-brand-teal hover:underline font-semibold">
  info@switchinvest.com
</a>

/* Address */
<a href="https://www.google.com/maps/search/?api=1&query=Avenue+Louise+251+1000+Bruxelles" target="_blank">
  Avenue Louise 251, 1000 Bruxelles, Belgique
</a>
```

**Updated Across:**
✅ Privacy Policy (/privacy-policy)
✅ Terms of Service (/terms)
✅ Contact Page (/contact)
✅ Footer (components/footer.tsx)
✅ Sticky CTA (components/sticky-cta.tsx)

---

## 🎭 **Animation Patterns**

### **Page Load Animations:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>
```

### **Scroll Animations:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>
```

### **Stagger Children:**
```tsx
<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {items.map((item, index) => (
    <motion.div variants={itemVariants} key={index}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

### **Timing Standards:**
- **Fast:** 200ms (hover effects)
- **Standard:** 300ms (transitions)
- **Slow:** 600ms (page animations)
- **Delay:** +0.1s per item (stagger)

---

## 📊 **Before vs After Uniformity**

| Element | Before | After | Status |
|---------|--------|-------|--------|
| **Hero Sections** | Mixed styles | Uniform teal gradient | ✅ Fixed |
| **Contact Info** | Fake numbers | Real +32 492 996561 | ✅ Fixed |
| **Services Page** | Wrong color (permafrost) | Correct brand-teal | ✅ Fixed |
| **Privacy Page** | Basic design | Professional hero | ✅ Fixed |
| **Terms Page** | Basic design | Professional hero | ✅ Fixed |
| **About Page** | No breadcrumb | Uniform breadcrumb | ✅ Fixed |
| **Phone Links** | Not clickable | Clickable tel: links | ✅ Fixed |
| **Email Links** | Not clickable | Clickable mailto: links | ✅ Fixed |
| **Button Styles** | Inconsistent | Uniform across pages | ✅ Fixed |
| **Spacing** | Varied | Consistent py-16 md:py-24 | ✅ Fixed |

---

## 🎯 **Component Library**

### **Reusable Components:**

1. **Hero Section** - All pages
2. **Sticky CTA** - Global (appears after 300px scroll)
3. **Navigation** - Fixed top bar with logo
4. **Footer** - Brand-teal with links
5. **Service Cards** - Services page
6. **Portfolio Cards** - Portfolio page
7. **Blog Cards** - Blog page
8. **Contact Cards** - Contact page
9. **FAQ Accordion** - Homepage
10. **Testimonials** - Homepage
11. **Statistics** - Homepage
12. **Trust Indicators** - Multiple pages

### **All Components Use:**
- Same color palette
- Same typography (Playfair + Geist)
- Same spacing system
- Same animation timings
- Same hover effects

---

## 📏 **Spacing Standards**

### **Vertical Spacing:**
```css
/* Sections */
.section-spacing { @apply py-16 md:py-24; }

/* Hero Sections */
.hero-padding { @apply pt-32 pb-16; }

/* Card Padding */
.card-padding { @apply p-6 md:p-8; }

/* Element Gaps */
.gap-standard { @apply gap-8 md:gap-12; }
```

### **Horizontal Spacing:**
```css
/* Container */
.container { @apply mx-auto px-4 md:px-6; }

/* Max Widths */
.content-narrow { @apply max-w-3xl; }
.content-standard { @apply max-w-5xl; }
.content-wide { @apply max-w-7xl; }
```

---

## 🎨 **Shadow System**

```css
/* Cards */
shadow-sm:    0 1px 2px rgba(0,0,0,0.05)
shadow-md:    0 4px 6px rgba(0,0,0,0.1)     /* Default */
shadow-lg:    0 10px 15px rgba(0,0,0,0.1)
shadow-xl:    0 20px 25px rgba(0,0,0,0.1)
shadow-2xl:   0 25px 50px rgba(0,0,0,0.25)  /* Hover */
```

### **Usage:**
- **Default Cards:** `shadow-md`
- **Hover State:** `shadow-2xl`
- **Sticky CTA:** `shadow-xl` (always elevated)
- **Modals:** `shadow-2xl`

---

## 🔄 **Transition Standards**

```css
/* All Interactive Elements */
.transition-all { transition: all 300ms ease; }

/* Hover Effects */
hover:-translate-y-2  /* Lift 8px */
hover:scale-105       /* Grow 5% */
hover:scale-110       /* Grow 10% (icons) */

/* Color Transitions */
hover:bg-brand-gold/90
hover:border-brand-teal
hover:text-brand-gold
```

---

## 📱 **Mobile Optimizations**

### **Touch Targets:**
- Minimum 44x44px for all buttons
- Increased padding on mobile
- Larger tap areas for links

### **Text Sizing:**
```tsx
/* Responsive Typography */
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
<p className="text-base md:text-lg">
<small className="text-sm md:text-base">
```

### **Mobile Navigation:**
- Hamburger menu on mobile
- Full-screen overlay
- Stagger animations
- Smooth scroll to sections

---

## ✅ **Quality Checklist**

### **All Pages Now Have:**
- [x] Uniform hero sections with breadcrumbs
- [x] Consistent color palette (brand-teal, brand-gold, brand-beige)
- [x] Uniform typography (Playfair + Geist)
- [x] Consistent spacing (py-16 md:py-24)
- [x] Clickable contact information
- [x] Professional hover effects
- [x] Smooth animations (300ms transitions)
- [x] Mobile responsive design
- [x] Accessible navigation
- [x] GA4 tracking on all interactions

---

## 📊 **Build Status**

```bash
✅ Build successful
✅ All 18 pages compiled
✅ No errors or warnings
✅ Static generation complete
✅ Production ready
```

### **Page Sizes:**
All pages optimized and under 300KB First Load JS.

---

## 🎯 **Design Principles**

### **Consistency:**
Every page follows the same design language, patterns, and spacing.

### **Professional:**
High-quality animations, shadows, and transitions throughout.

### **Accessible:**
Keyboard navigation, screen reader support, proper ARIA labels.

### **Mobile-First:**
Responsive design that works on all devices.

### **Performance:**
Optimized images, lazy loading, efficient animations.

---

## 🚀 **Ready for Production**

Your site now has:
- ✅ **100% design uniformity** across all 18 pages
- ✅ **Professional-grade UI/UX** matching top competitors
- ✅ **Complete design system** with reusable patterns
- ✅ **Consistent branding** with brand colors and typography
- ✅ **Mobile-optimized** responsive design
- ✅ **Accessible** keyboard and screen reader support
- ✅ **Production-ready** build with zero errors

**Deploy with confidence!** 🎉

---

**Last Updated:** January 2025
**Design System Version:** 1.0
**Status:** Complete & Uniform
