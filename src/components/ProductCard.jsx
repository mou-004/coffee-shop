import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice } from '../data/products.js'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-bean-100 bg-white/70 shadow-soft backdrop-blur transition duration-300 hover:-translate-y-2 hover:shadow-glow">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative h-64 overflow-hidden bg-bean-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bean-900/65 via-transparent to-transparent" />
          <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-bean-700">
            {product.badge}
          </span>
          <span className="absolute bottom-4 left-4 rounded-full bg-bean-900/85 px-4 py-2 text-sm font-bold text-cream backdrop-blur">
            {product.roast}
          </span>
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-copper">{product.category}</p>
            <Link to={`/product/${product.id}`}>
              <h3 className="mt-1 font-display text-2xl font-extrabold text-bean-900">
                {product.name}
              </h3>
            </Link>
          </div>
          <div className="text-right">
            <p className="text-lg font-black text-bean-900">{formatPrice(product.price)}</p>
            <p className="text-sm font-semibold text-bean-300 line-through">
              {formatPrice(product.oldPrice)}
            </p>
          </div>
        </div>

        <p className="mt-4 line-clamp-2 text-sm leading-7 text-bean-500">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-sm font-bold text-bean-500">
            ★ {product.rating} <span className="font-medium">({product.reviews})</span>
          </span>
          <button
            onClick={() => addToCart(product, 1)}
            className="rounded-full bg-bean-900 px-5 py-3 text-sm font-extrabold text-cream transition hover:-translate-y-0.5 hover:bg-copper hover:text-bean-900"
          >
            Add
          </button>
        </div>
      </div>
    </article>
  )
}
