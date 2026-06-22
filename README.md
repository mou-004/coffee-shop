# Roastory Coffee Co. — Assignment Ready React E-Commerce Project

Frontend-only modern coffee brand e-commerce landing page built with **React.js + Vite**, **React Router**, and **Tailwind CSS**.

### Required tech
- React.js using Vite
- React Router navigation
- Tailwind CSS styling
- No backend
- No database
- No Bootstrap, Material UI, Ant Design, Chakra UI, ShadCN, or downloaded component template

### Required pages
- `/` — Landing page
- `/product/:id` — Product details page
- `/cart` — Cart page
- `/checkout` — Checkout page

### Landing page sections
- Hero Banner
- Featured Categories
- Featured Products
- Best Sellers
- Special Offers
- Why Choose Us
- Customer Reviews
- Newsletter
- Footer

### Product details page includes
- Large product image
- Gallery thumbnails
- Price
- Product description
- Product features
- Quantity selector
- Add to Cart button
- Related products

### Cart page supports
- Add product
- Remove product
- Increase quantity
- Decrease quantity
- Dynamic total price
- Empty cart state

### Checkout page includes
- Customer information
- Shipping address
- Payment method selection UI
- Order summary
- Place Order button UI

## Run locally

Open PowerShell inside the project folder where `package.json` exists, then run:

```bash
npm install
npm run dev
```

If you previously installed packages in the wrong parent folder, run this from the actual project folder:

```bash
cd "C:\Users\DELL\Desktop\coffe shop\cofee shop"
npm install
npm run dev
```

## Build test

```bash
npm run build
```

This project has been build-tested successfully.

## Folder structure

```text
src/
  components/
    Footer.jsx
    Header.jsx
    ProductCard.jsx
    QuantitySelector.jsx
    SectionHeading.jsx
  context/
    CartContext.jsx
  data/
    products.js
    reviews.js
  pages/
    Home.jsx
    ProductDetails.jsx
    Cart.jsx
    Checkout.jsx
    NotFound.jsx
  App.jsx
  main.jsx
  index.css
```
