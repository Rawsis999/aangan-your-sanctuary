

# Aangan Landing Page — Major UI Overhaul

## Summary of Changes

This plan covers 6 major changes the user requested:

1. **Sticky navbar** with logo + hamburger menu (Home, About, Menu, Reservation)
2. **Hero image** — generate a large cafe exterior image using AI, replace gradient background
3. **Color rules** — solid colors only; warm-only yellows (no red); cool-only blues; no mixed gradients
4. **Images for all sections** — generate earthy bistro images for Philosophy, Experiences, Community, Footer
5. **Instagram section** — placeholder layout only ("Image Here" placeholders), user will provide screenshots later
6. **Menu redesign** — collapsible tab-based menu with category bar on top (Sips, Bites, The Potli), click to expand

---

## 1. Sticky Navbar Component

**New file: `src/components/landing/Navbar.tsx`**

- Fixed/sticky at top with `backdrop-blur` and semi-transparent warm background
- Left: Aangan logo (copy `user-uploads://Gemini_Generated_Image_gm0g1ogm0g1ogm0g.svg` to `src/assets/aangan-logo.svg`)
- Right: Hamburger icon (3 lines) — on click, opens a fullscreen or slide-in overlay menu
- Menu items: **Home** (`#hero`), **About** (`#philosophy`), **Menu** (`#menu`), **Reservation** (`#reservation`)
- Smooth scroll behavior via `scroll-behavior: smooth` on `html` element
- Transparent on hero, becomes solid on scroll (using scroll listener + state)
- Also place the logo in the FooterSection

## 2. Hero Section — Full-Image Background

**Edit: `src/components/landing/HeroSection.tsx`**

- Use AI image generation (Nano banana 2) to create a warm, earthy exterior shot of a courtyard cafe entrance with mud walls, fairy lights, bougainvillea — matching the reference images
- Save generated image to `src/assets/hero-bg.jpg`
- Replace the gradient `div` with the generated image as a full-cover background
- Add a dark overlay (`bg-black/40`) for text readability
- Keep existing headline, sub-headline, CTA, fairy lights on top
- Add `id="hero"` to the section

## 3. Color Cleanup

**Edit: `src/index.css` and all section components**

- Remove any red hues from gradients — primary (terracotta) stays but no pure reds
- Gradients: only same-hue gradients (warm-to-warm or cool-to-cool), no warm-to-cool mixing
- Replace `linear-gradient(160deg, hsl(var(--primary)..., hsl(var(--mud))..., hsl(var(--twilight))...)` in hero with solid overlay
- Footer CTA: change from mud→twilight gradient to a solid `--mud` background
- Experiences section: change gradient to solid background color
- Use solid warm earth tones throughout

## 4. AI-Generated Section Images

Generate images using Nano banana 2 for:
- **Philosophy section**: A warm-lit courtyard interior with people relaxing on floor seating
- **Experiences section**: Individual card images or a section background — stargazing, picnic, charpai, earthing scenes
- **Community section**: Board games under trees, herb garden, book shelves
- **Footer**: Twilight courtyard with lanterns

Each image saved to `src/assets/` and imported into respective components. Used as section backgrounds or inline images alongside text.

## 5. Instagram/Social Feed Section

**Edit: `src/components/landing/SocialFeedSection.tsx`**

- Replace the current emoji-based post cards with a proper Instagram-style grid layout
- 3-column grid of square image placeholders
- Each placeholder: warm-toned card with centered text "Image Here" and a subtle camera icon
- Keep the "@aangan.official" header and "Raw & Unfiltered" title
- Keep the "Follow the chaos on Instagram" CTA link
- Remove likes, tags, captions — just clean image placeholders for now
- User will provide actual Instagram screenshots later

## 6. Menu Section — Tab-Based Collapsible

**Edit: `src/components/landing/MenuSection.tsx`**

- Replace the 3-column grid with a horizontal tab bar at the top: **Sips** | **Bites** | **The Potli**
- Clicking a tab expands/shows that category's items below with animation
- Only one category visible at a time (accordion-style)
- Tab bar styled with warm pill buttons, active tab highlighted with `--secondary` (amber/ochre)
- Menu items display in a clean list when expanded
- Add `id="menu"` (already exists)

## 7. Section IDs for Smooth Scroll

Add `id` attributes to all sections for navbar linking:
- Hero: `id="hero"`
- Philosophy: `id="philosophy"` (maps to "About" in nav)
- Experiences: `id="experiences"`
- Menu: `id="menu"` (already has this)
- Social: `id="social"`
- Community: `id="community"`
- Footer: `id="reservation"` on the CTA area (Reservation/Find Locations)

Add `scroll-behavior: smooth` to `html` in CSS.

---

## Files Modified/Created

| File | Action |
|------|--------|
| `src/assets/aangan-logo.svg` | Copy from uploads |
| `src/assets/hero-bg.jpg` | AI-generated |
| `src/assets/philosophy-bg.jpg` | AI-generated |
| `src/assets/experience-*.jpg` (4 images) | AI-generated |
| `src/assets/community-bg.jpg` | AI-generated |
| `src/components/landing/Navbar.tsx` | New — sticky nav with hamburger |
| `src/components/landing/HeroSection.tsx` | Full-image bg, solid overlay, id |
| `src/components/landing/PhilosophySection.tsx` | Add image, solid bg, id |
| `src/components/landing/ExperiencesSection.tsx` | Add images to cards, solid bg, id |
| `src/components/landing/MenuSection.tsx` | Tab-based collapsible redesign |
| `src/components/landing/SocialFeedSection.tsx` | Placeholder grid, id |
| `src/components/landing/CommunitySection.tsx` | Add image, id |
| `src/components/landing/FooterSection.tsx` | Add logo, solid bg, reservation id |
| `src/pages/Index.tsx` | Add Navbar component |
| `src/index.css` | Add `scroll-behavior: smooth`, color fixes |

