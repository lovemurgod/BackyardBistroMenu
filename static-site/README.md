# The Backyard Bistro - Static Website

A luxury restaurant menu website created as a static HTML page for GitHub Pages deployment.

## 🌟 Features

- **Elegant Design**: Luxury restaurant theme with deep blue, gold, and cream colors
- **Animated Opening**: Welcome screen with smooth transitions
- **Category Navigation**: Beautiful category tiles with hover effects
- **Complete Menu**: Full restaurant menu with prices and descriptions
- **Mobile Responsive**: Works perfectly on all devices
- **Fast Loading**: Optimized images and pure HTML/CSS/JavaScript

## 📁 File Structure

```
static-site/
├── index.html          # Main website file
├── images/
│   ├── logo.webp      # Restaurant logo
│   └── categories/    # Category images
│       ├── beverages.webp
│       ├── burgers.webp
│       ├── mains.webp
│       ├── pasta.webp
│       ├── pizza.webp
│       ├── salads.webp
│       ├── soups.webp
│       └── starters.webp
└── README.md          # This file
```

## 🚀 Deploy to GitHub Pages

### Option 1: Using GitHub Web Interface

1. **Create a new repository** on GitHub
2. **Upload files**:
   - Go to your repository
   - Click "uploading an existing file"
   - Drag and drop all files from the `static-site` folder
   - Commit the changes

3. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / master
   - Folder: / (root)
   - Click Save

4. **Access your site** at: `https://yourusername.github.io/your-repository-name`

### Option 2: Using Git Commands

```bash
# Clone or create your repository
git clone https://github.com/yourusername/your-repository-name.git
cd your-repository-name

# Copy all files from static-site folder to your repository
cp -r path/to/static-site/* .

# Add and commit files
git add .
git commit -m "Add Backyard Bistro restaurant website"
git push origin main

# Enable GitHub Pages in repository settings
```

## 🎨 Customization

### Changing Colors
Edit the CSS variables in the `<style>` section of `index.html`:

```css
:root {
    --charcoal-grey: hsl(220, 13%, 18%);    /* Background */
    --deep-blue: hsl(215, 25%, 12%);        /* Dark elements */
    --luxury-gold: hsl(51, 100%, 50%);      /* Accent color */
    --cream-white: hsl(210, 40%, 98%);      /* Text color */
}
```

### Updating Menu Items
Modify the `menuData` object in the JavaScript section to add, remove, or edit menu items.

### Replacing Images
Replace images in the `images/` folder with your own. Make sure to use the same filenames or update the references in the code.

## 📱 Browser Support

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile browsers

## 🔧 Technical Details

- **Pure HTML/CSS/JavaScript** - No framework dependencies
- **WebP Images** - Optimized for fast loading
- **CSS Grid & Flexbox** - Modern responsive layout
- **CSS Animations** - Smooth transitions and effects
- **SEO Optimized** - Proper meta tags and semantic HTML

## 📄 License

This website template is created for The Backyard Bistro restaurant. Modify as needed for your own use.

## 🤝 Support

For issues or questions about deployment, refer to [GitHub Pages documentation](https://docs.github.com/en/pages).