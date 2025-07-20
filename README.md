# Fine & Dandy 🎨

A beautiful headless Shopify storefront built with Next.js 14, featuring a retro 70s-inspired design and modern e-commerce functionality.

## ✨ Features

- **🛍️ Headless Shopify Integration** - Connected to Shopify Storefront API
- **📱 Responsive Design** - Works perfectly on desktop and mobile
- **🖼️ Image Gallery** - Multi-image products with swipe navigation
- **🛒 Shopping Cart** - Full cart management with drawer interface
- **🎨 Retro 70s Aesthetic** - Warm colors, Polaroid-style cards, vintage typography
- **⚡ Modern Performance** - Built with Next.js 14 App Router
- **🔒 Type Safety** - Full TypeScript implementation

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **E-commerce**: Shopify Storefront API
- **Language**: TypeScript
- **UI Components**: Custom components with shadcn/ui
- **State Management**: React Context (Cart)
- **Deployment**: Vercel

## 🎯 Key Components

- **ProductGrid** - Displays products with filtering and pagination
- **ProductCard** - Individual product cards with image gallery
- **CartDrawer** - Shopping cart interface
- **ProductFilter** - Category filtering system
- **Image Gallery** - Swipeable image navigation on mobile

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Shopify store with Storefront API access

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/justinWaves/fine-and-dandy.git
   cd fine-and-dandy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file with your Shopify credentials:
   ```env
   SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
   SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-storefront-access-token
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Design System

The project uses a custom 70s-inspired design system with:

- **Colors**: Warm oranges, creams, and earth tones
- **Typography**: Permanent Marker for headings, system fonts for body
- **Components**: Polaroid-style cards with shadows and rotations
- **Animations**: Smooth transitions and hover effects

## 📱 Mobile Experience

- **Touch-friendly interface** with proper spacing
- **Swipe gestures** for image navigation
- **Visual indicators** for multiple images
- **Responsive layout** that adapts to all screen sizes

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your GitHub repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy automatically** on every push to main

### Manual Deployment

```bash
npm run build
npm start
```

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `SHOPIFY_STORE_DOMAIN` | Your Shopify store domain | Yes |
| `SHOPIFY_STOREFRONT_ACCESS_TOKEN` | Storefront API access token | Yes |

## 📁 Project Structure

```
fine-and-dandy/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # React components
│   ├── contexts/           # React contexts (Cart)
│   ├── lib/                # Utilities and API clients
│   └── styles/             # Global styles
├── public/                 # Static assets
└── package.json           # Dependencies and scripts
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Shopify** for the excellent Storefront API
- **Next.js team** for the amazing framework
- **Tailwind CSS** for the utility-first styling
- **shadcn/ui** for the component inspiration

---

Built with ❤️ by [Justin Waves](https://github.com/justinWaves)
