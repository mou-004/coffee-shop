import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import QuantitySelector from '../components/QuantitySelector.jsx'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice, getProductById, products } from '../data/products.js'

export default function ProductDetails() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(product?.gallery?.[0])

  const relatedProducts = useMemo(() => {
    if (!product) return []
    return products
      .filter((item) => item.category === product.category && item.id !== product.id)
      .concat(products.filter((item) => item.category !== product.category))
      .slice(0, 3)
  }, [product])

  if (!product) {
    return (
      <section className="mx-auto max-w-4xl px-4 py-24 text-center">
        <h1 className="font-display text-5xl font-extrabold">Product not found</h1>
        <Link to="/" className="mt-8 inline-flex rounded-full bg-bean-900 px-8 py-4 font-bold text-cream">
          Back to home
        </Link>
      </section>
    )
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <Link to="/" className="text-sm font-extrabold uppercase tracking-[0.18em] text-bean-400 hover:text-bean-900">
       
      </Link>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <div className="overflow-hidden rounded-[3rem] bg-white p-4 shadow-glow">
            <img
              src={activeImage}
              alt={product.name}
              className="h-[30rem] w-full rounded-[2.4rem] object-cover"
            />
          </div>

          <div className="no-scrollbar mt-5 flex gap-4 overflow-x-auto pb-2">
            {product.gallery.map((image) => (
              <button
                key={image}
                onClick={() => setActiveImage(image)}
                className={`h-24 w-28 shrink-0 overflow-hidden rounded-3xl border-2 transition ${
                  activeImage === image ? 'border-copper' : 'border-transparent'
                }`}
              >
                <img src={image} alt={`${product.name} gallery`} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="self-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-copper">
            {product.category}
          </p>
          <h1 className="mt-4 font-display text-6xl font-extrabold leading-tight text-bean-900">
            {product.name}
          </h1>
          <p className="mt-4 text-sm font-bold text-bean-500">
            ★ {product.rating} rating · {product.reviews} reviews · {product.origin}
          </p>

          <div className="mt-7 flex items-end gap-4">
            <p className="font-display text-5xl font-extrabold text-bean-900">{formatPrice(product.price)}</p>
            <p className="pb-2 text-xl font-bold text-bean-300 line-through">{formatPrice(product.oldPrice)}</p>
          </div>

          <p className="mt-7 text-lg leading-9 text-bean-500">{product.description}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {product.features.map((feature) => (
              <div key={feature} className="rounded-2xl border border-bean-100 bg-white/70 p-4 text-sm font-bold text-bean-600 shadow-sm">
                ✓ {feature}
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <QuantitySelector
              quantity={quantity}
              onDecrease={() => setQuantity((current) => Math.max(1, current - 1))}
              onIncrease={() => setQuantity((current) => current + 1)}
            />

            <button
              onClick={handleAddToCart}
              className="rounded-full bg-bean-900 px-9 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-cream shadow-glow transition hover:-translate-y-1 hover:bg-copper hover:text-bean-900"
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-8 rounded-[2rem] bg-bean-900 p-6 text-cream">
            <p className="font-display text-2xl font-extrabold">Roaster note</p>
            <p className="mt-3 text-sm leading-7 text-cream/70">
              This page demonstrates dynamic routing using React Router. Product content is loaded from local data by URL parameter.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-copper">Related Products</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold">More from the bar.</h2>
          </div>
          <Link to="/cart" className="hidden font-bold text-bean-500 underline decoration-copper decoration-2 underline-offset-8 sm:block">
            View Cart
          </Link>
        </div>

        <div className="mt-10 grid gap-7 md:grid-cols-3">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
