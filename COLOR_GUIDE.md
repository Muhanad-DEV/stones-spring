# Stones Spring Minerals - Brand Color Guide
## دليل ألوان العلامة التجارية لستونز سبرينغ للمعادن

This comprehensive color guide provides all the brand colors, usage guidelines, and implementation examples for the Stones Spring Minerals React application.

## 🎨 Color Palette Overview

### Core Brand / Primary Colors (الألوان الأساسية)

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Navy Stone** / الأزرق الصخري | `#1E294C` | Headers, dark sections, nav bars, overlays on photos |
| **Midnight Navy** | `#1F214A` | Cards, ribbons, and alternating dark blocks |
| **Steel Blue** | `#222D4F` | Secondary panels, tabs, section bars |
| **Ink** | `#000000` | Icons/shadows (use sparingly, not for large fills) |

### Accent Desert Gold Colors (ألوان التمييز الذهبي)

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Gold (CTA Primary)** | `#D09F3E` | Primary buttons/CTAs, key highlights, section tags |
| **Saffron (Hover/Active)** | `#CB9A36` | Button hover, active states, infographic bars |
| **Bronze (Depth/Icons)** | `#AC8434` | Icons on dark navy, data markers |
| **Soft Gold** | `#D5AD6D` | Badges, subtle highlights on light backgrounds |
| **Sand Beige** | `#C7AE83` | Light accent blocks behind quotes/notes |

### Quarry Neutrals (الألوان المحايدة)

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Cloud (Page BG)** | `#F7F7F7` | Default page/background for airy feel |
| **Fog (Dividers/Cards)** | `#E4E4E4` | Dividers, card borders, subtle lines |
| **Slate (Body Text)** | `#515050` | Paragraph text on white/light backgrounds |
| **Cool Gray (UI Chrome)** | `#9CA7B6` | Table headers, charts' neutral bars, muted icons |
| **Pure White** | `#FFFFFF` | Text on dark navy and for high-contrast blocks |

## 🌈 Gradients

| Gradient Name | CSS Value |
|---------------|-----------|
| **Navy Ribbon** | `linear-gradient(135deg, #1E294C 0%, #222D4F 100%)` |
| **Gold Band** | `linear-gradient(135deg, #D09F3E 0%, #AC8434 100%)` |

## 💻 Implementation

### 1. CSS Variables (Recommended)

All colors are available as CSS custom properties:

```css
/* Primary Colors */
--color-navy-stone: #1E294C;
--color-midnight-navy: #1F214A;
--color-steel-blue: #222D4F;
--color-ink: #000000;

/* Accent Colors */
--color-gold: #D09F3E;
--color-saffron: #CB9A36;
--color-bronze: #AC8434;
--color-soft-gold: #D5AD6D;
--color-sand-beige: #C7AE83;

/* Neutral Colors */
--color-cloud: #F7F7F7;
--color-fog: #E4E4E4;
--color-slate: #515050;
--color-cool-gray: #9CA7B6;
--color-pure-white: #FFFFFF;

/* Gradients */
--gradient-navy-ribbon: linear-gradient(135deg, #1E294C 0%, #222D4F 100%);
--gradient-gold-band: linear-gradient(135deg, #D09F3E 0%, #AC8434 100%);
```

### 2. JavaScript Import

```javascript
import { primary, accent, neutral, gradients, combinations } from './colors';

// Usage in React components
const buttonStyle = {
  backgroundColor: accent.gold,
  color: primary.navyStone,
  border: 'none',
  padding: '12px 24px',
  borderRadius: '6px'
};
```

### 3. Predefined Combinations

The color system includes ready-to-use combinations:

```javascript
// CTA Button States
combinations.ctaButton.default    // { backgroundColor: '#D09F3E', color: '#1E294C' }
combinations.ctaButton.hover      // { backgroundColor: '#CB9A36', color: '#1E294C' }
combinations.ctaButton.active     // { backgroundColor: '#AC8434', color: '#FFFFFF' }

// Dark Sections
combinations.darkSection          // { backgroundColor: '#1E294C', color: '#FFFFFF', iconColor: '#D09F3E' }

// Cards
combinations.card                 // { backgroundColor: '#FFFFFF', border: '1px solid #E4E4E4', ... }
```

## 📋 Usage Guidelines

### Typography

- **H1-H2 Headings**: `#1E294C` on `#FFFFFF` or `#F7F7F7`
- **Body Text**: `#515050` on `#FFFFFF` or `#F7F7F7`
- **Text on Dark**: `#FFFFFF` on `#1E294C`

### Interactive Elements

- **Primary CTA Button**: 
  - Default: `#D09F3E` background, `#1E294C` text
  - Hover: `#CB9A36` background, `#1E294C` text
  - Active: `#AC8434` background, `#FFFFFF` text

### Layout Sections

- **Dark Sections** (e.g., "Sustainability Commitment"):
  - Background: `#1E294C`
  - Headings: `#FFFFFF`
  - Icons: `#D09F3E`

- **Info Bands/Ribbons**:
  - Background: `#222D4F`
  - Text: `#FFFFFF`
  - Accent: Thin underline in `#D09F3E`

- **Cards on Light Pages**:
  - Background: `#FFFFFF` or `#F7F7F7`
  - Border: `#E4E4E4`
  - Title: `#1F214A`

## ✅ Contrast Pairs

These combinations provide excellent accessibility:

- **Dark Navy** (`#1E294C`) ↔ **White** (`#FFFFFF`) ✅
- **Gold** (`#D09F3E`) ↔ **Dark Navy** (`#1E294C`) ✅
- **Gold** (`#D09F3E`) ↔ **White** (`#FFFFFF`) ✅
- **Body Gray** (`#515050`) ↔ **White** (`#FFFFFF`) ✅

⚠️ **Avoid**: Slate gray on sand/beige (too low contrast)

## 🎯 Quick Reference

### All Color Codes
```
#1E294C, #1F214A, #222D4F, #000000,
#D09F3E, #CB9A36, #AC8434, #D5AD6D, #C7AE83,
#F7F7F7, #E4E4E4, #515050, #9CA7B6, #FFFFFF
```

### File Structure
```
src/
├── colors.js          # Complete color system
├── ColorPalette.js    # Visual color showcase component
└── index.css          # CSS variables and base styles
```

## 🚀 Getting Started

1. **Import colors in your components:**
   ```javascript
   import { primary, accent, neutral } from './colors';
   ```

2. **Use CSS variables in your styles:**
   ```css
   .my-component {
     background: var(--color-gold);
     color: var(--color-navy-stone);
   }
   ```

3. **View the live color palette** by running the app and scrolling to the color showcase section.

## 📱 Responsive Considerations

- Colors maintain their contrast ratios across all device sizes
- Gradients work well on both desktop and mobile
- Consider using lighter variants for mobile interfaces if needed

---

*This color guide is part of the Stones Spring Minerals React development environment. Keep this file updated as the brand evolves.*
