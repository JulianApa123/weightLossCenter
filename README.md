# Weight Loss Center Website

A modern, responsive website built with Next.js and Tailwind CSS.

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone this repository
2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
weight-loss-center/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles with Tailwind
├── public/              # Static assets (add images here)
├── package.json
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── next.config.ts       # Next.js configuration
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

Your site will be live in seconds with automatic SSL and global CDN!

## Customization

- Update content in `app/page.tsx`
- Modify colors in `tailwind.config.ts`
- Add images to the `public/` folder
- Update metadata in `app/layout.tsx`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Next Steps

1. Add your actual content and doctor information
2. Replace placeholder images
3. Set up contact form functionality
4. Add analytics (Google Analytics, etc.)
5. Customize colors to match your brand
