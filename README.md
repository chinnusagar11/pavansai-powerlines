# Pavan Sai Power Lines (PSPL) – Official Corporate Website

A modern, responsive, industrial corporate website developed for **Pavan Sai Power Lines (PSPL)**, an electrical power transmission and distribution materials supplier and stockist based in **Secunderabad, Telangana, India**.

This website is designed strictly as a high-trust, display-only corporate showcase to establish the company's digital presence, present its product catalog, and facilitate commercial inquiries via direct telephone, pre-filled WhatsApp, and email channels without requiring complex backend servers or databases.

---

## ⚡ Core Business Categories

The website showcases PSPL's 7 primary material divisions:
1. **HT/LT Overhead Line Materials** (Pin Insulators, Disc Insulators, PG Clamps, Stay Sets, Cross Arms)
2. **Transformer Spares** (Bushings, Silica Gel Breathers, MOG, Gaskets, Explosion Vents)
3. **AB Switches** (11kV & 33kV Gang-Operated Air Break Switches, Horn Gap Fuse Units, Spare Contacts)
4. **AAAC & ACSR Conductors** (Weasel, Rabbit, Dog, Panther, Zebra, and All-Aluminium Alloy Conductors)
5. **Earthing Materials** (Copper Bonded Chemical Earth Electrodes, GI Pipes, Earth Flats, Pit Covers)
6. **Industrial Electricals** (LT Feeder Pillars, Distribution Boxes, Cable Glands, Lugs, HRC Fuses)
7. **AIMS & GI Towers** (Hot-Dip Galvanized Lattice Transmission Towers, Substation Gantries, Foundation Stubs)

---

## 🛠️ Technology Stack

- **Frontend Framework:** React 18
- **Build Tool & Bundler:** Vite 5
- **Routing:** React Router DOM v6
- **Styling:** Tailwind CSS v3 with custom industrial dark/navy palette
- **Icons:** Lucide React
- **Typography:** Inter & Poppins (Google Fonts)
- **Deployment Targets:** GitHub & Vercel (SPA rewrite pre-configured via `vercel.json`)

---

## 📁 Project Structure

```text
Powerlines/
├── public/
│   ├── favicon.svg             # Custom high-voltage transmission logo icon
│   └── images/                 # Static brand assets
├── src/
│   ├── assets/                 # Icons and media
│   ├── components/
│   │   ├── Breadcrumb.jsx      # Accessible page hierarchy navigation
│   │   ├── EnquiryModal.jsx    # Real pre-filled WhatsApp & Email inquiry modal
│   │   ├── Footer.jsx          # Comprehensive corporate footer with Secunderabad location
│   │   ├── Navbar.jsx          # Responsive sticky navigation with mobile drawer
│   │   ├── ProductCard.jsx     # Product showcase card with specs and instant enquiry
│   │   └── WhatsAppButton.jsx  # Floating WhatsApp direct click-to-chat
│   ├── data/
│   │   ├── company.js          # Centralized company configuration (Phones, Address, Hours, GSTIN)
│   │   └── products.js         # Comprehensive product catalog with verified specifications
│   ├── layouts/
│   │   └── MainLayout.jsx      # Global layout wrapper with auto-scroll-to-top
│   ├── pages/
│   │   ├── About.jsx           # Grounded company overview, mission, and supply capabilities
│   │   ├── Contact.jsx         # Direct contact desk, functional inquiry generator & Google Map
│   │   ├── Home.jsx            # Hero banner, category highlights, why choose us, field applications
│   │   ├── NotFound.jsx        # Industrial 404 error page
│   │   ├── ProductDetails.jsx  # In-depth technical specs, features, and related products
│   │   └── Products.jsx        # Filterable and searchable product catalogue
│   ├── App.jsx                 # Client-side router configuration
│   ├── index.css               # Tailwind directives and custom industrial utilities
│   └── main.jsx                # React root entry point
├── index.html                  # HTML entry with Open Graph & SEO meta tags
├── package.json                # Project dependencies and build scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Custom industrial navy/sky theme tokens
├── vercel.json                 # Vercel SPA route rewrite rules
└── vite.config.js              # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm or pnpm package manager

### 1. Installation
Clone the repository and install required packages:
```bash
npm install
```

### 2. Run Locally in Development Mode
Start the Vite development server with hot-module reloading:
```bash
npm run dev
```
The application will launch at `http://localhost:3000` (or `http://localhost:5173`).

### 3. Production Build
Compile and bundle optimized production assets:
```bash
npm run build
```
The output files will be generated in the `dist/` directory.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## ⚙️ Updating Company Information & Product Data

All company contact details and product listings are completely decoupled into lightweight JavaScript files, making them easily editable without modifying layout code.

### Updating Contact Details & Visiting Card Information
Open `src/data/company.js`:
- **Phone Numbers:** Update `contact.primaryPhone` and `contact.secondaryPhone`.
- **WhatsApp:** Update `contact.whatsappNumber` (e.g. `"+919849012345"`).
- **Email:** Update `contact.primaryEmail` and `contact.salesEmail`.
- **Address & Landmarks:** Update `location.fullAddress` and `location.street`.
- **GSTIN & Registration:** Update `commercial.gstin`.

### Adding or Modifying Products
Open `src/data/products.js`:
Each product item is an object adhering to this structure:
```javascript
{
  id: "unique-slug-identifier",
  name: "Product Name",
  category: "HT/LT Overhead Line Materials", // Matches one of the 7 company categories
  categoryId: "overhead-lines",
  shortDescription: "Brief 1-2 sentence overview for cards",
  fullDescription: "Detailed technical summary for product details page",
  image: "https://example.com/image.jpg", // Local image in /public/images or remote URL
  features: [
    "Feature bullet 1",
    "Feature bullet 2"
  ],
  specifications: {
    "Voltage Class": "11 kV / 33 kV",
    "Standard Compliance": "IS 1445 / IS 731"
  },
  applications: [
    "Substation feeder busbar supports"
  ]
}
```

---

## 🌐 Deployment Instructions

### Deploying to GitHub
1. Initialize a git repository if not already done:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Pavan Sai Power Lines corporate website"
   ```
2. Create a repository on GitHub (e.g. `pavan-sai-power-lines`).
3. Link and push your code:
   ```bash
   git remote add origin https://github.com/<your-username>/pavan-sai-power-lines.git
   git branch -M main
   git push -u origin main
   ```

### Deploying to Vercel
1. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
2. Import your GitHub repository.
3. Framework preset will automatically detect **Vite**.
4. The pre-configured `vercel.json` in the root folder ensures that deep links (e.g. `/products/ht-pin-insulators` or `/about`) refresh cleanly without `404` errors:
   ```json
   {
     "rewrites": [
       { "source": "/(.*)", "destination": "/index.html" }
     ]
   }
   ```
5. Click **Deploy**. Your professional corporate website will be live worldwide with SSL.

---

## 🛡️ Business Integrity & Compliance Note
This website is crafted specifically to represent **Pavan Sai Power Lines** honestly and authentically. It contains no synthetic claims, fabricated customer testimonials, or fake order backends. Inquiries are dispatched through standard, accessible communication channels (WhatsApp click-to-chat, click-to-call, and direct email) directly to the company's desk in Secunderabad, Telangana.

