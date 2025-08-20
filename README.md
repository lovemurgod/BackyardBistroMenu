# The Backyard Bistro - Luxury Restaurant Website

A sophisticated, mobile-responsive website for The Backyard Bistro featuring elegant animations, category-based menu navigation, and a luxury design theme with charcoal grey, gold, and white colors.

## 🚀 Features

- **Opening Animation**: Stunning logo reveal with fade-in effects
- **Floating Bubbles**: Elegant animated golden bubbles throughout the site
- **Category-Based Navigation**: Intuitive tile-based menu browsing
- **Mobile Responsive**: Fully optimized for all device sizes
- **Luxury Design**: Premium charcoal grey background with gold accents
- **Complete Menu**: All menu items with prices from beverages to mains

## 🎨 Design Theme

- **Primary**: Charcoal Grey (`hsl(220, 13%, 18%)`)
- **Secondary**: Luxury Gold (`hsl(51, 100%, 50%)`)
- **Accent**: Cream White (`hsl(210, 40%, 98%)`)
- **Typography**: Playfair Display, Dancing Script, Inter

## 📁 Project Structure

```
client/
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── categories/          # All category images (SVG format)
│   │           ├── beverages.svg
│   │           ├── burgers.svg
│   │           ├── mains.svg
│   │           ├── pasta.svg
│   │           ├── pizza.svg
│   │           ├── salads.svg
│   │           ├── soups.svg
│   │           └── starters.svg
│   ├── components/
│   │   ├── category-tiles.tsx       # Menu category grid
│   │   ├── floating-bubbles.tsx     # Background animation
│   │   ├── menu-display.tsx         # Individual menu pages
│   │   └── opening-animation.tsx    # Intro animation
│   ├── data/
│   │   └── menu-data.ts            # Complete menu data structure
│   └── pages/
│       └── home.tsx                # Main page component
```

## 🖼️ Image Management

All category images are stored in `client/src/assets/images/categories/` as SVG files for optimal performance and scalability.

To replace images:
1. Add your new image to the `categories` folder
2. Import it in `client/src/data/menu-data.ts`
3. Update the `categoryImages` object with the new import

Example:
```typescript
import newImage from "@assets/images/categories/new-category.svg";

export const categoryImages = {
  // ... other images
  newCategory: newImage,
};
```

## 🍽️ Menu Categories

- **Beverages**: Coffee, Teas, Coolers & Shakes
- **Soups**: Warming & Nutritious Bowls  
- **Salads**: Fresh & Healthy Options
- **Starters**: Appetizers & Small Plates
- **Burgers**: Artisanal & Gourmet
- **Pizza**: Wood-Fired Perfection
- **Pasta**: Italian Classics
- **Mains**: Hearty Main Courses

## 🛠️ Technology Stack

- **Frontend**: React + TypeScript
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS + Custom CSS
- **UI Components**: Radix UI + shadcn/ui
- **Build Tool**: Vite
- **Routing**: Wouter

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5000](http://localhost:5000) in your browser

## 📱 Mobile Compatibility

The website is fully responsive and optimized for:
- Mobile phones (320px+)
- Tablets (768px+)
- Desktop screens (1024px+)

## ✨ Key Animations

- Logo fade-in with scale and position transitions
- Category tiles with hover effects and stagger animations
- Floating golden bubbles with continuous motion
- Menu items with slide-in effects and delays
- Smooth page transitions

## 🎯 User Experience

1. **Welcome Animation**: 3-second logo introduction
2. **Category Selection**: Click any category tile to view menu
3. **Menu Navigation**: Organized sections with pricing
4. **Easy Return**: Back button to return to categories
5. **Centered Logo**: Always visible in header for brand recognition

## 🔧 Customization

The website is designed for easy customization:

- **Colors**: Modify CSS variables in `client/src/index.css`
- **Fonts**: Update font imports and classes in Tailwind config
- **Images**: Replace SVGs in the categories folder
- **Menu Data**: Update `menu-data.ts` with new items/pricing
- **Animations**: Adjust Framer Motion configs in components

---

Created with ❤️ for The Backyard Bistro