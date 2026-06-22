import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-bean-100 bg-bean-900 text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Link to="/" className="font-display text-3xl font-extrabold">Roastory</Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-cream/70">
            Small-batch coffee, precise brew gear and café-style bundles for people who treat their morning cup as a ritual.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Shop</h3>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            <li>Single Origin</li>
            <li>Espresso</li>
            <li>Cold Brew</li>
            <li>Brew Gear</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold">Brand</h3>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            <li>Roast Journal</li>
            <li>Wholesale</li>
            <li>Sustainability</li>
            <li>Gift Cards</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            <li>hello@roastory.test</li>
            <li>Dhaka, Bangladesh</li>
            <li>Sat–Thu, 9 AM–8 PM</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-cream/50">
        © 2026 Roastory Coffee Co. Frontend demo project.
      </div>
    </footer>
  )
}
