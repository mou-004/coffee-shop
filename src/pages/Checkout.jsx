import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice } from '../data/products.js'

export default function Checkout() {
  const { cartItems, subtotal, shipping, discount, total } = useCart()

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div>
        <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-copper">Checkout</p>
        <h1 className="mt-3 font-display text-6xl font-extrabold">Complete your order.</h1>
        
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_24rem]">
        <form className="space-y-8">
          <CheckoutPanel title="Customer Information">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input label="Full Name" placeholder="Alyssa Rahman" />
              <Input label="Phone Number" placeholder="+880 1XXX-XXXXXX" />
              <Input label="Email Address" type="email" placeholder="you@example.com" span />
            </div>
          </CheckoutPanel>

          <CheckoutPanel title="Shipping Address">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input label="Street Address" placeholder="House, road, area" span />
              <Input label="City" placeholder="Dhaka" />
              <Input label="Postal Code" placeholder="1207" />
              <Input label="Delivery Note" placeholder="Example: call before delivery" span />
            </div>
          </CheckoutPanel>

          <CheckoutPanel title="Payment Method">
            <div className="grid gap-4 md:grid-cols-3">
              {['Cash on Delivery', 'Card Payment', 'Mobile Banking'].map((method, index) => (
                <label
                  key={method}
                  className={`cursor-pointer rounded-[1.5rem] border p-5 transition hover:-translate-y-1 ${
                    index === 0 ? 'border-copper bg-copper/10' : 'border-bean-100 bg-white/60'
                  }`}
                >
                  <input name="payment" type="radio" defaultChecked={index === 0} className="accent-bean-900" />
                  <span className="mt-4 block font-bold text-bean-800">{method}</span>
                  
                </label>
              ))}
            </div>
          </CheckoutPanel>

          <button
            type="button"
            className="w-full rounded-full bg-bean-900 px-9 py-5 text-sm font-extrabold uppercase tracking-[0.18em] text-cream shadow-glow transition hover:-translate-y-1 hover:bg-copper hover:text-bean-900"
          >
            Place Order
          </button>
        </form>

        <aside className="h-fit rounded-[2rem] border border-bean-100 bg-white/75 p-7 shadow-soft">
          <h2 className="font-display text-3xl font-extrabold">Order Summary</h2>

          {cartItems.length === 0 ? (
            <div className="mt-6 rounded-3xl bg-bean-50 p-5 text-sm leading-7 text-bean-500">
              Your cart is empty. <Link className="font-bold text-bean-900 underline" to="/">Add products</Link> before placing an order.
            </div>
          ) : (
            <div className="mt-6 space-y-5">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img src={item.image} alt={item.name} className="h-16 w-16 rounded-2xl object-cover" />
                  <div className="flex-1">
                    <p className="font-bold">{item.name}</p>
                    <p className="text-sm text-bean-400">Qty {item.quantity}</p>
                  </div>
                  <p className="font-bold">{formatPrice(item.price * item.quantity)}</p>
                </div>
              ))}
            </div>
          )}

          <div className="mt-7 space-y-4 border-t border-bean-100 pt-6 text-sm">
            <SummaryRow label="Subtotal" value={formatPrice(subtotal)} />
            <SummaryRow label="Shipping" value={shipping === 0 ? 'Free' : formatPrice(shipping)} />
            <SummaryRow label="Discount" value={`- ${formatPrice(discount)}`} />
            <div className="flex justify-between border-t border-bean-100 pt-5 text-xl font-black">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

function CheckoutPanel({ title, children }) {
  return (
    <section className="rounded-[2rem] border border-bean-100 bg-white/75 p-6 shadow-soft">
      <h2 className="font-display text-3xl font-extrabold">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  )
}

function Input({ label, type = 'text', placeholder, span = false }) {
  return (
    <label className={span ? 'sm:col-span-2' : ''}>
      <span className="mb-2 block text-sm font-extrabold text-bean-600">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="min-h-14 w-full rounded-2xl border border-bean-100 bg-cream/50 px-5 text-sm font-semibold outline-none transition focus:border-copper focus:bg-white"
      />
    </label>
  )
}

function SummaryRow({ label, value }) {
  return (
    <div className="flex justify-between text-bean-500">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  )
}
