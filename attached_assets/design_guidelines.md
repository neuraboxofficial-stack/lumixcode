# Design Guidelines: AI-Powered Coding Platform Landing Page

## Design Approach
**Reference-Based Approach**: Drawing inspiration from futuristic SaaS products like Linear, Vercel, and GitHub with cinematic sci-fi aesthetics. Focus on bold gradients, glowing microinteractions, and premium visual polish.

## Core Visual Identity

### Color Palette
- **Primary Background**: Deep navy (#0A0E27, #1A1F3A)
- **Gradient Overlays**: Deep navy → Electric blue (#0066FF, #00D4FF)
- **Accent Color**: Neon purple (#A855F7, #C026D3) for CTAs, highlights, and glows
- **Text**: White/light gray for primary, muted gray for secondary
- **Glow Effects**: Subtle electric blue and purple glows on interactive elements

### Typography
- **Headlines**: Geometric sans-serif (Space Grotesk, Inter Display, or Outfit) - bold weights (700-800)
- **Body Text**: Clean sans-serif (Inter, System UI) - regular weight (400-500)
- **Hierarchy**: 
  - Hero tagline: 4xl-6xl (56-72px desktop)
  - Section headers: 3xl-4xl (36-48px)
  - Feature cards: xl-2xl (24-30px)
  - Body: base-lg (16-18px)

### Layout System
- **Spacing**: Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32 for consistent rhythm
- **Container**: max-w-7xl for main content, full-width for hero and colored sections
- **Section Padding**: py-20 to py-32 desktop, py-12 mobile

## Page Structure

### Hero Section (Full viewport height)
- **Layout**: Centered content with animated background
- **Tagline**: "Dream It. Launch It. Monetize It." - massive, bold, gradient text effect
- **Interactive Elements**: 
  - Input box (search/code snippet style) with subtle glow and focus state
  - Primary CTA: "Start Free" - electric blue with purple glow, hover lift effect
  - Secondary CTA: "Import from Figma/GitHub" - outline style with hover fill
- **Background**: Animated abstract AI visualization (particles, neural networks, or subtle rocket launch animation using CSS/canvas)
- **Image/Visual**: Abstract tech background with gradient overlay, animated elements

### Integrations Strip
- **Layout**: Horizontal scrolling row on mobile, fixed grid on desktop (6-8 logos)
- **Logos**: React, GitHub, Docker (and others) in monochrome/white with hover color transitions
- **Style**: Dark background with subtle borders, hover glow effects

### Trust Logos Section
- **Layout**: 4-6 columns grid (Adobe, Microsoft, etc.)
- **Treatment**: Grayscale logos with fade-in animations on scroll
- **Spacing**: Generous padding, centered alignment

### Feature Cards (Plan, Write, Test, Deploy, Earn)
- **Layout**: 5-column grid desktop, 2-column tablet, 1-column mobile
- **Card Design**: 
  - Dark background with gradient borders
  - Icon at top (glowing neon purple)
  - Title and description
  - Hover: Glow border intensifies, subtle lift transform
  - Microinteractions: Border pulse, icon color shift

### Additional Sections
- **Benefits/How It Works**: Alternating layout with visuals and text
- **Pricing** (if needed): Card-based comparison with highlighted tier
- **Social Proof/Testimonials**: 2-3 columns with subtle card design

### Footer
- **Background**: Darkest navy (#0A0E27) with subtle gradient
- **Layout**: 4-column grid - Company, Resources, Product, Social
- **Links**: Muted gray with purple hover state
- **Bottom Bar**: Copyright, legal links, social icons

## Animations & Interactions
- **Parallax**: Subtle background movement on scroll
- **Scroll Animations**: Fade-in-up for sections (stagger effect)
- **Hover Effects**: Glow intensification, subtle transforms (scale 1.02, translateY -2px)
- **Button Interactions**: Glow pulse on hover, click ripple effect
- **Performance**: Use CSS transforms and opacity for smooth 60fps animations

## Responsive Behavior
- **Mobile Navigation**: Hamburger menu with slide-in drawer, dark overlay
- **Touch Targets**: Minimum 44px height for all interactive elements
- **Hero**: Reduce font sizes, stack CTAs vertically, maintain visual impact
- **Feature Grid**: Collapse to single column, maintain card spacing
- **Integrations**: Horizontal scroll with snap points on mobile

## Images
- **Hero Background**: Abstract AI/tech visualization (neural networks, code patterns, or rocket launch) with deep blue/purple gradient overlay - full viewport coverage
- **Feature Card Icons**: Use icon library (Heroicons or Lucide) with neon purple treatment
- **Trust Logos**: PNG/SVG format, white/monochrome versions

## Component Library
- **Buttons**: Solid fill (primary), outline (secondary), both with glow effects
- **Input Fields**: Dark background, electric blue border, focus glow
- **Cards**: Dark backgrounds with gradient borders, hover glow states
- **Navigation**: Fixed header with blur backdrop, mobile drawer
- **Badges**: Small pill shapes for labels/tags with purple accent

## Tone & Content
- **Voice**: Conversational, empowering, futuristic ("Build the future", "Ship faster")
- **Messaging**: Focus on speed, AI assistance, monetization potential
- **CTAs**: Action-oriented ("Start Free", "Launch Now", "Import Project")