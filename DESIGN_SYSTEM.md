# Fine & Dandy - Retro 70s Design System

## 🎨 Color Palette

### Primary Colors
- **Primary**: Warm Orange (`hsl(25 85% 55%)`) - Main brand color
- **Secondary**: Muted Terracotta (`hsl(15 45% 65%)`) - Supporting color
- **Accent**: Golden Yellow (`hsl(45 85% 65%)`) - Highlight color

### Background Colors
- **Background**: Warm Cream (`hsl(48 33% 97%)`) - Main background
- **Card**: Pure Cream (`hsl(48 33% 97%)`) - Card backgrounds
- **Muted**: Soft Beige (`hsl(35 25% 90%)`) - Subtle backgrounds

### Text Colors
- **Foreground**: Deep Brown (`hsl(25 35% 18%)`) - Main text
- **Muted Foreground**: Muted Brown (`hsl(25 25% 45%)`) - Secondary text

## 🔤 Typography

### Font Families
- **Playfair Display**: Retro serif for headings and brand text
- **Inter**: Clean sans-serif for body text
- **Space Mono**: Monospace for code and technical content

### Typography Classes
```css
.text-retro          /* Playfair Display, bold, retro styling */
.text-retro-light    /* Playfair Display, regular weight */
.text-body           /* Inter, regular, good line height */
.text-body-bold      /* Inter, semibold */
.font-display        /* Playfair Display family */
.font-body           /* Inter family */
.font-mono           /* Space Mono family */
```

## 🎯 Component Classes

### Buttons
```css
.btn-retro           /* Primary retro button with hover effects */
.btn-retro-outline   /* Outline retro button */
```

### Cards
```css
.card-retro          /* Retro card with hover lift effect */
```

### Inputs
```css
.input-retro         /* Retro styled input fields */
```

### Badges
```css
.badge-retro         /* Retro styled badges */
```

## 🌈 Background Patterns & Gradients

### Gradients
```css
.bg-retro-gradient           /* Primary to accent gradient */
.bg-retro-gradient-subtle    /* Muted to background gradient */
```

### Patterns
```css
.bg-pattern-retro    /* Subtle radial gradient pattern */
.bg-pattern-dots     /* Dot pattern background */
.bg-pattern-lines    /* Diagonal line pattern */
```

## ✨ Effects & Animations

### Text Shadows
```css
.text-shadow-retro           /* Subtle text shadow */
.text-shadow-retro-strong    /* Stronger text shadow */
```

### Hover Effects
```css
.hover-retro-lift    /* Scale and shadow on hover */
.hover-retro-glow    /* Glow effect on hover */
```

### Animations
```css
.animate-retro-bounce    /* Bouncy animation */
.animate-retro-pulse     /* Pulsing animation */
```

### Border Styles
```css
.border-retro          /* Standard retro border */
.border-retro-dashed   /* Dashed retro border */
```

## 🎨 Usage Examples

### Hero Section
```jsx
<section className="bg-retro-gradient text-white py-20 bg-pattern-retro">
  <h1 className="text-4xl md:text-6xl text-retro text-shadow-retro-strong">
    Your Heading
  </h1>
  <p className="text-body text-white/90">
    Your description
  </p>
  <Button className="btn-retro">
    Call to Action
  </Button>
</section>
```

### Product Card
```jsx
<Card className="card-retro hover-retro-lift">
  <CardHeader className="p-0">
    <div className="aspect-[3/4] bg-muted rounded-t-lg" />
  </CardHeader>
  <CardContent className="p-4">
    <h3 className="text-body-bold mb-2">Product Name</h3>
    <span className="text-lg text-body-bold text-primary">$45</span>
    <Button className="btn-retro">
      <ShoppingCart className="h-4 w-4" />
    </Button>
  </CardContent>
</Card>
```

### Navigation
```jsx
<nav className="flex items-center space-x-6">
  <Link className="text-body-bold hover:text-primary hover-retro-glow">
    Home
  </Link>
</nav>
```

## 🎯 Design Principles

1. **Warm & Inviting**: Use warm colors and soft shadows
2. **Retro Typography**: Playfair Display for headings, Inter for body
3. **Subtle Animations**: Gentle hover effects and transitions
4. **Consistent Spacing**: Use the established spacing scale
5. **Accessibility**: Maintain good contrast ratios
6. **Mobile First**: Responsive design with retro aesthetics

## 🔧 Customization

### Adding New Colors
Add to `:root` in `globals.css`:
```css
--your-color: 25 85% 55%;
--your-color-foreground: 48 33% 97%;
```

### Adding New Components
Create new classes in the `@layer components` section:
```css
.your-component {
  @apply bg-primary text-primary-foreground font-body-bold;
}
```

### Adding New Utilities
Add to `@layer utilities`:
```css
.your-utility {
  /* Your utility styles */
}
```

## 📱 Responsive Design

The design system is built with mobile-first principles:
- Use responsive prefixes (`md:`, `lg:`, `xl:`)
- Test on various screen sizes
- Maintain retro aesthetics across devices

## 🌙 Dark Mode

Dark mode colors are automatically applied when the `.dark` class is present:
- Deep brown backgrounds
- Cream text colors
- Adjusted contrast ratios
- Maintained retro feel

## 🎨 Brand Guidelines

- **Logo**: Use `text-retro` class for brand text
- **Primary Actions**: Use `btn-retro` class
- **Secondary Actions**: Use `btn-retro-outline` class
- **Headings**: Use `text-retro` for main headings
- **Body Text**: Use `text-body` for readable content 