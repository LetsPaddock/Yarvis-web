# Yarvis Website

A beautiful, modern website for the state-of-the-art macOS screensaver **Yarvis**.

## Features

- **Adaptive Design**: Automatically switches between light and dark themes based on user's OS preference
- **SF Pro Font**: Uses Apple's native SF Pro font family for authentic macOS feel
- **Responsive Layout**: Optimized for desktop and mobile devices
- **Interactive Roadmap**: Visual development timeline with current progress
- **Modern Animations**: Smooth transitions and hover effects
- **Call to Action**: Direct link to purchase on Gumroad

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React** - Component-based UI library

## Project Structure

```
├── app/
│   ├── components/
│   │   └── Roadmap.tsx          # Interactive roadmap component
│   ├── globals.css              # Global styles and Tailwind directives
│   ├── layout.tsx               # Root layout with metadata
│   └── page.tsx                 # Main landing page
├── public/
│   ├── Background_1.jpg         # Light mode background
│   └── Darkmode-Background_1.jpg # Dark mode background
├── Resources/                   # Original background images
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (preferred) or npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd yarvis-web
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development Roadmap

The website features an interactive roadmap showing the current development status:

1. **✅ Alpha Live** - Initial release with core screensaver functionality (Current Stage)
2. **🔄 Custom Backgrounds & Fonts** - Personalize your screensaver with custom backgrounds and typography
3. **⏳ More Widgets** - Extended widget library with customizable information displays

## Customization

### Background Images

The website automatically switches between light and dark backgrounds based on the user's system preference. Background images are located in the `public/` directory:

- `Background_1.jpg` - Light mode background
- `Darkmode-Background_1.jpg` - Dark mode background

### Gumroad Link

Update the Gumroad purchase link in `app/page.tsx`:

```tsx
<a 
  href="https://gumroad.com/your-actual-link" 
  target="_blank" 
  rel="noopener noreferrer"
  className="btn-primary inline-block"
>
  Get Yarvis on Gumroad
</a>
```

### Twitter Handle

The "Request a Feature" button links to Twitter. Update it in `app/components/Roadmap.tsx`:

```tsx
<a 
  href="https://x.com/YourTwitterHandle" 
  target="_blank" 
  rel="noopener noreferrer"
  className="btn-secondary inline-block"
>
  Request a Feature on Twitter
</a>
```

## Deployment

The website can be deployed on various platforms:

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify

1. Build the project: `pnpm build`
2. Deploy the `out/` directory to Netlify

### Other Platforms

The website exports as a static site and can be deployed on any static hosting service.

## Performance

- Optimized images with Next.js Image component
- CSS-in-JS with Tailwind for minimal bundle size
- Tree-shaking and code splitting out of the box
- Responsive images for different screen sizes

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Website: [Your Website]
- Twitter: [@LetsPaddock](https://x.com/LetsPaddock)
- Email: [Your Email]

---

Built with ❤️ for macOS enthusiasts 