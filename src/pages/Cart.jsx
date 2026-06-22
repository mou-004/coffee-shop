import { Link } from 'react-router-dom'
import QuantitySelector from '../components/QuantitySelector.jsx'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice } from '../data/products.js'

export default function Cart() {
  const {
    cartItems,
    subtotal,
    shipping,
    discount,
    total,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart()

  if (cartItems.length === 0) {
    return (
      <section className="mx-auto max-w-4xl px-4 py-24 text-center">
        <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-copper">Cart</p>
        <h1 className="mt-4 font-display text-6xl font-extrabold">Your cart is empty.</h1>
        <p className="mx-auto mt-5 max-w-xl leading-8 text-bean-500">
          Add coffee, brew gear or a latte kit from the landing page. The cart updates instantly with React state.
        </p>
        <Link
          to="/"
          className="mt-9 inline-flex rounded-full bg-bean-900 px-9 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-cream shadow-glow"
        >
          Start Shopping
        </Link>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-copper">Cart</p>
          <h1 className="mt-3 font-display text-6xl font-extrabold">Your brew box.</h1>
        </div>
        <Link to="/" className="font-bold text-bean-500 underline decoration-copper decoration-2 underline-offset-8 hover:text-bean-900">
          Continue Shopping
        </Link>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_24rem]">
        <div className="space-y-5">
          {cartItems.map((item) => (
            <article key={item.id} className="grid gap-5 rounded-[2rem] border border-bean-100 bg-white/75 p-5 shadow-soft sm:grid-cols-[9rem_1fr_auto] sm:items-center">
              <img src={item.image} alt={item.name} className="h-36 w-full rounded-[1.5rem] object-cover sm:w-36" />

              <div>
                <p className="text-sm font-bold text-copper">{item.category}</p>
                <h2 className="mt-1 font-display text-2xl font-extrabold">{item.name}</h2>
                <p className="mt-2 text-sm leading-6 text-bean-500">{item.offer}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-4 text-sm font-extrabold text-bean-400 underline decoration-bean-200 underline-offset-4 hover:text-bean-900"
                >
                  Remove
                </button>
              </div>

              <div className="flex items-center justify-between gap-5 sm:flex-col sm:items-end">
                <p className="font-display text-2xl font-extrabold">{formatPrice(item.price * item.quantity)}</p>
                <QuantitySelector
                  quantity={item.quantity}
                  onDecrease={() => decreaseQuantity(item.id)}
                  onIncrease={() => increaseQuantity(item.id)}
                />
              </div>
            </article>
          ))}
        </div>

        <aside className="h-fit rounded-[2rem] bg-bean-900 p-7 text-cream shadow-glow">
          <h2 className="font-display text-3xl font-extrabold">Order Summary</h2>

          <div className="mt-7 space-y-4 text-sm">
            <div className="flex justify-between text-cream/70">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-cream/70">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
            </div>
            <div className="flex justify-between text-cream/70">
              <span>Discount</span>
              <span>- {formatPrice(discount)}</span>
            </div>
            <div className="border-t border-white/10 pt-5">
              <div className="flex justify-between text-xl font-black">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
          </div>

          <Link
            to="/checkout"
            className="mt-8 block rounded-full bg-copper px-8 py-4 text-center text-sm font-extrabold uppercase tracking-[0.18em] text-bean-900 transition hover:-translate-y-1 hover:bg-cream"
          >
            Checkout
          </Link>
        </aside>
      </div>
    </section>
  )
}
