# Personal Portfolio Website

A modern, responsive personal portfolio website built with **React** and **Vite**. Showcase your professional skills, projects, experience, and get in touch with visitors through this sleek portfolio template.

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Component Guide](#component-guide)
- [Customization](#customization)
- [Deployment](#deployment)
- [Available Scripts](#available-scripts)
- [ESLint Configuration](#eslint-configuration)
- [Contributing](#contributing)

---

## ✨ Features

- **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean and professional interface with smooth interactions
- **Component-Based Architecture** - Modular React components for easy maintenance
- **Fast Performance** - Built with Vite for lightning-fast development and production builds
- **Hot Module Replacement (HMR)** - Instant feedback during development
- **Code Quality** - ESLint configured for code consistency
- **Optimized Build** - Production-ready minified bundle

### Included Sections

- **Navbar** - Navigation menu with smooth scrolling
- **Hero Section** - Eye-catching introduction
- **About** - Personal background and bio
- **Skills** - Technical skills showcase
- **Projects** - Portfolio of work with project details
- **Experience** - Professional work history and timeline
- **Contact** - Contact form or contact information

---

## 🛠 Tech Stack

| Technology            | Purpose                            |
| --------------------- | ---------------------------------- |
| **React 19.2.5**      | UI library for building components |
| **Vite 8.0.10**       | Build tool and dev server          |
| **JavaScript (ES6+)** | Programming language               |
| **CSS**               | Styling                            |
| **ESLint**            | Code quality and linting           |
| **Node.js/npm**       | Package management and runtime     |

---

## 📁 Project Structure

```
portfolio.github.io/
│
├── public/              # Static assets (images, files)
│
├── src/
│   ├── assets/          # Project images and media
│   │
│   ├── components/      # React components
│   │   ├── About.jsx         # About section
│   │   ├── Contact.jsx       # Contact section
│   │   ├── Experience.jsx    # Work experience
│   │   ├── Hero.jsx          # Hero/landing section
│   │   ├── Navbar.jsx        # Navigation bar
│   │   ├── Projects.jsx      # Projects showcase
│   │   └── Skills.jsx        # Skills section
│   │
│   ├── App.jsx          # Main App component
│   ├── App.css          # App styles
│   ├── index.css        # Global styles
│   └── main.jsx         # React entry point
│
├── eslint.config.js     # ESLint configuration
├── vite.config.js       # Vite configuration
├── index.html           # HTML entry point
├── package.json         # Project metadata and dependencies
└── README.md            # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (v6 or higher) - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/portfolio.github.io.git
   cd portfolio.github.io
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173` (or the URL shown in terminal)
   - Your portfolio will be live with hot reload enabled

---

## 💻 Development

### Development Server

Run the development server with hot module replacement:

```bash
npm run dev
```

**Benefits:**

- Instant code updates without page refresh
- Fast feedback loop
- Error reporting in browser

### Code Quality

Lint your code to maintain standards:

```bash
npm run lint
```

**What it checks:**

- Code consistency
- React best practices
- Variable naming conventions
- Unused variables and imports

### IDE Setup

**Recommended for VS Code:**

1. Install [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
2. Install [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
3. Enable format on save in settings

---

## 🏗 Building for Production

### Create Production Build

```bash
npm run build
```

This command:

- Optimizes and minifies all code
- Bundles assets
- Creates an optimized `dist/` folder
- Reduces file sizes for faster loading

**Output:** `dist/` folder with production-ready files (~100-200KB typically)

### Preview Production Build Locally

```bash
npm run preview
```

This runs your production build locally to verify it works before deployment.

---

## 🧩 Component Guide

### Navbar Component

**File:** `src/components/Navbar.jsx`

Displays navigation menu with links to all portfolio sections. Features:

- Responsive mobile menu (optional)
- Smooth scroll navigation
- Active link highlighting

**Edit:** Update navigation links and styling in this component

---

### Hero Component

**File:** `src/components/Hero.jsx`

Landing section that introduces you. Includes:

- Welcome message
- Professional title
- Call-to-action button
- Background image/gradient

**Customize:** Replace title, bio, and add your profile image

---

### About Component

**File:** `src/components/About.jsx`

Share your background and story. Includes:

- Professional bio
- Personal introduction
- Career highlights
- Profile photo

**Customize:** Add your biography, interests, and accomplishments

---

### Skills Component

**File:** `src/components/Skills.jsx`

Showcase your technical abilities. Display:

- Programming languages
- Frameworks and libraries
- Tools and technologies
- Skill level indicators (optional)

**Customize:** Update skill categories and proficiencies

---

### Projects Component

**File:** `src/components/Projects.jsx`

Portfolio of your work. Features:

- Project cards with descriptions
- Technology tags
- Links to live projects/GitHub repos
- Project images/screenshots

**Customize:** Add your projects with details and images

---

### Experience Component

**File:** `src/components/Experience.jsx`

Professional work history. Includes:

- Job titles and companies
- Employment dates
- Responsibilities and achievements
- Timeline view

**Customize:** Add your work experience entries

---

### Contact Component

**File:** `src/components/Contact.jsx`

Ways for visitors to reach you. Options:

- Contact form
- Email link
- Social media links
- Phone number

**Customize:** Add your contact information and social profiles

---

## 🎨 Customization Guide

### Updating Content

1. **Edit Component Files**
   - Open `src/components/*.jsx`
   - Update text, links, and data
   - Changes auto-reload during dev

2. **Add Images**
   - Save images to `public/` or `src/assets/`
   - Import in components: `import img from '../assets/image.jpg'`
   - Use in JSX: `<img src={img} alt="description" />`

3. **Modify Styles**
   - Global styles: `src/index.css`
   - Component styles: `src/App.css` or individual `.css` files
   - Create component-specific CSS files as needed

### Color Scheme

Edit color variables in `src/index.css` or `src/App.css`:

```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2c3e50;
  --accent-color: #e74c3c;
  /* Update these to match your brand */
}
```

### Adding New Sections

1. **Create a new component:**

   ```bash
   # Create: src/components/MyNewSection.jsx
   ```

2. **Add component code:**

   ```jsx
   export default function MyNewSection() {
     return <section>{/* Your content here */}</section>;
   }
   ```

3. **Import and add to App:**
   - Open `src/App.jsx`
   - Add import: `import MyNewSection from './components/MyNewSection'`
   - Add to JSX: `<MyNewSection />`

### Responsive Design Tips

- Use flexbox and CSS Grid for layouts
- Test on multiple screen sizes
- Use media queries for mobile optimization:
  ```css
  @media (max-width: 768px) {
    /* Mobile styles */
  }
  ```

---

## 🌐 Deployment

### Deploy to GitHub Pages

1. **Update package.json homepage:**

   ```json
   "homepage": "https://yourusername.github.io/"
   ```

2. **Install gh-pages (if not installed):**

   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy scripts to package.json:**

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

### Deploy to Other Platforms

**Vercel:**

- Connect your GitHub repo at [vercel.com](https://vercel.com)
- Auto-deploys on every push to main branch

**Netlify:**

- Connect at [netlify.com](https://netlify.com)
- Build command: `npm run build`
- Publish directory: `dist`

**Custom Server:**

1. Build project: `npm run build`
2. Upload `dist/` folder contents to your server
3. Configure server to serve `index.html` for SPA routing

---

## 📜 Available Scripts

### Development

```bash
npm run dev          # Start development server (localhost:5173)
```

### Production

```bash
npm run build        # Create optimized production build
npm run preview      # Preview production build locally
npm run deploy       # Deploy to GitHub Pages (if configured)
```

### Code Quality

```bash
npm run lint         # Check code quality with ESLint
npm run lint -- --fix  # Auto-fix ESLint issues
```

---

## 🔧 ESLint Configuration

The project uses ESLint with React-specific rules. Configuration file: `eslint.config.js`

**Included plugins:**

- `@vitejs/plugin-react` - React Fast Refresh
- `eslint-plugin-react-hooks` - React Hooks best practices
- `eslint-plugin-react-refresh` - Hot module reload support

**To extend ESLint for TypeScript:**

- Install: `npm install --save-dev typescript @typescript-eslint/eslint-plugin`
- See [TypeScript ESLint docs](https://typescript-eslint.io/) for setup

---

## 🤝 Contributing

### Making Changes

1. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and test locally:

   ```bash
   npm run dev
   npm run lint
   ```

3. Commit changes:

   ```bash
   git add .
   git commit -m "Add feature: description"
   ```

4. Push and create a pull request:
   ```bash
   git push origin feature/your-feature-name
   ```

### Best Practices

- Keep components small and focused
- Use meaningful component and file names
- Comment complex logic
- Test responsive design on multiple devices
- Run `npm run lint` before committing
- Keep CSS organized and maintainable

---

## 📝 Next Steps

1. **Personalize Content** - Update all sections with your information
2. **Add Images** - Include photos and project screenshots
3. **Customize Styling** - Match your personal brand
4. **Test Responsiveness** - Check on mobile and tablet
5. **Deploy** - Push your portfolio live
6. **Promote** - Share your portfolio on LinkedIn, Twitter, etc.

---

## 📧 Support & Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [ESLint Rules](https://eslint.org/docs/rules/)

---

## 📄 License

This project is open source and available under the MIT License.

---

**Last Updated:** April 2026

Built with ❤️ using React and Vite
