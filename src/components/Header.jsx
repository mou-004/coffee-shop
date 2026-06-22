import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Cart', path: '/cart' },
  { label: 'Checkout', path: '/checkout' },
]

export default function Header() {
  const { cartCount } = useCart()

  return (
    <header className="sticky top-0 z-50 border-b border-bean-100/70 bg-cream/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-bean-900 text-lg font-black text-cream shadow-soft transition group-hover:rotate-6">
            S
          </span>
          <span>
            <span className="block font-display text-xl font-extrabold tracking-tight text-bean-900">
             Sip & Story
            </span>
            <span className="-mt-1 block text-xs font-semibold uppercase tracking-[0.24em] text-bean-400">
              Coffee 
            </span>
          </span>
        </Link>

        <div className="hidden rounded-full border border-bean-100 bg-white/55 p-1 shadow-sm md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `rounded-full px-5 py-2 text-sm font-bold transition ${
                  isActive
                    ? 'bg-bean-900 text-cream shadow-sm'
                    : 'text-bean-500 hover:bg-bean-50 hover:text-bean-900'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <Link
          to="/cart"
          className="relative rounded-full bg-bean-900 px-5 py-3 text-sm font-extrabold text-cream shadow-soft transition hover:-translate-y-0.5 hover:bg-bean-700"
        >
          Cart
          <span className="ml-2 rounded-full bg-copper px-2 py-0.5 text-xs text-bean-900">
            {cartCount}
          </span>
        </Link>
      </nav>
    </header>
  )
}
