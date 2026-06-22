import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { categories, products, formatPrice } from '../data/products.js'
import { reviews } from '../data/reviews.js'

export default function Home() {
  const bestSellers = products.filter((product) => product.bestSeller)

  return (
    <>
      <section className="relative">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:pb-28 lg:pt-24">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-bean-100 bg-white/65 px-4 py-2 text-sm font-bold text-bean-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-copper" />
              Freshly roasted every week in small batches
            </div>

            <h1 className="mt-7 font-display text-6xl font-extrabold leading-[0.95] tracking-tight text-bean-900 sm:text-7xl lg:text-8xl">
              Coffee with a point of view.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-9 text-bean-500">
              Roastory is a modern coffee brand for serious home brewers: traceable beans, expressive blends and minimal brewing tools built around ritual, not routine.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#products"
                className="rounded-full bg-bean-900 px-8 py-4 text-center text-sm font-extrabold uppercase tracking-[0.18em] text-cream shadow-glow transition hover:-translate-y-1 hover:bg-bean-700"
              >
                Shop Collection
              </a>
              <Link
                to="/product/highland-ritual"
                className="rounded-full border border-bean-200 bg-white/65 px-8 py-4 text-center text-sm font-extrabold uppercase tracking-[0.18em] text-bean-900 transition hover:-translate-y-1 hover:bg-white"
              >
                Taste Profile
              </Link>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-4">
              {[
                ['24h', 'dispatch'],
                ['4.8★', 'avg rating'],
                ['12k+', 'cups brewed'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-3xl border border-bean-100 bg-white/55 p-5 shadow-sm">
                  <p className="font-display text-3xl font-extrabold">{value}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-bean-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-copper/30 blur-3xl" />
            <div className="absolute -bottom-8 right-8 h-48 w-48 rounded-full bg-moss/25 blur-3xl" />

            <div className="relative overflow-hidden rounded-[3rem] bg-bean-900 p-5 shadow-glow">
              <img
                src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&w=1200&q=80"
                alt="Freshly roasted coffee beans and cup"
                className="h-[34rem] w-full rounded-[2.4rem] object-cover"
              />
              <div className="absolute inset-5 rounded-[2.4rem] bg-gradient-to-t from-bean-900/85 via-bean-900/20 to-transparent" />

              <div className="absolute bottom-10 left-10 right-10 rounded-[2rem] border border-white/15 bg-cream/90 p-6 shadow-soft backdrop-blur">
                <div className="flex items-center justify-between gap-5">
                  <div>
                    <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-copper">Featured Roast</p>
                    <h2 className="mt-2 font-display text-3xl font-extrabold text-bean-900">Highland Ritual</h2>
                  </div>
                  <p className="rounded-full bg-bean-900 px-4 py-2 text-sm font-black text-cream">
                    {formatPrice(1450)}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-7 text-bean-500">
                  Brown sugar, roasted almond and a clean citrus finish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Categories"
          title="Choose your brewing mood."
          description="Each collection is designed around a different coffee habit, from quick cold brew to precise pour-over."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <article
              key={category.name}
              className={`group min-h-64 overflow-hidden rounded-[2rem] bg-gradient-to-br ${category.tone} p-6 text-cream shadow-soft transition hover:-translate-y-2`}
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-cream/70">
                    {category.count}
                  </p>
                  <h3 className="mt-4 font-display text-3xl font-extrabold">{category.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-cream/75">{category.description}</p>
                </div>
                <span className="mt-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-2xl transition group-hover:translate-x-2">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Featured Products"
            title="Roasts with shelf appeal."
            description="A curated shop grid with strong product hierarchy, interactive cards and fast add-to-cart actions."
          />
          <Link to="/cart" className="font-bold text-bean-500 underline decoration-copper decoration-2 underline-offset-8 hover:text-bean-900">
            View Cart
          </Link>
        </div>

        <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-[3rem] bg-bean-900 shadow-glow lg:grid-cols-[0.9fr_1.1fr]">
          <div className="p-8 text-cream sm:p-12 lg:p-16">
            <p className="text-sm font-extrabold uppercase tracking-[0.26em] text-copper">Special Offer</p>
            <h2 className="mt-5 font-display text-5xl font-extrabold leading-tight">
              Build a café corner at home.
            </h2>
            <p className="mt-5 text-base leading-8 text-cream/70">
              Get Tk. 250 off when your cart reaches Tk. 3,500. Combine beans, cold brew and gear without writing any backend logic.
            </p>
            <Link
              to="/product/golden-hour-latte"
              className="mt-8 inline-flex rounded-full bg-copper px-8 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-bean-900 transition hover:-translate-y-1 hover:bg-cream"
            >
              Explore Bundle
            </Link>
          </div>
          <div className="relative min-h-[28rem]">
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80"
              alt="Coffee preparation setup"
              className="absolute inset-0 h-full w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-bean-900 via-bean-900/30 to-transparent lg:hidden" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Best Sellers"
          title="Customer favorites."
          description="These items can drive the strongest conversion path from landing page to cart."
          align="center"
        />

        <div className="mt-10 grid gap-7 md:grid-cols-3">
          {bestSellers.map((product, index) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="group rounded-[2rem] border border-bean-100 bg-white/70 p-6 shadow-soft transition hover:-translate-y-2 hover:shadow-glow"
            >
              <div className="flex items-center gap-5">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-bean-900 font-display text-xl font-extrabold text-cream">
                  {index + 1}
                </span>
                <div>
                  <p className="font-display text-2xl font-extrabold">{product.name}</p>
                  <p className="text-sm font-bold text-bean-400">{product.category}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-bean-500">{product.description}</p>
              <p className="mt-5 font-black text-copper">{formatPrice(product.price)}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Built like a real brand, not a tutorial clone."
            description="The interface uses a distinct palette, editorial typography, rounded premium cards, micro interactions and contextual shopping flows."
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ['Small-batch roasting', 'Roasts are positioned as fresh, traceable and intentionally limited.'],
              ['Design-led commerce', 'Product cards and checkout prioritize hierarchy, spacing and conversion clarity.'],
              ['Functional cart logic', 'Context API handles add, remove, quantity changes and totals without reloads.'],
              ['Responsive by default', 'The layout changes from editorial mobile flow to rich desktop composition.'],
            ].map(([title, description]) => (
              <div key={title} className="rounded-[2rem] border border-bean-100 bg-white/70 p-6 shadow-sm">
                <h3 className="font-display text-2xl font-extrabold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-bean-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Reviews"
          title="What customers are saying."
          align="center"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="rounded-[2rem] border border-bean-100 bg-white/70 p-7 shadow-soft">
              <p className="text-lg text-copper">{'★'.repeat(review.rating)}</p>
              <p className="mt-5 leading-8 text-bean-600">“{review.quote}”</p>
              <div className="mt-6 border-t border-bean-100 pt-5">
                <p className="font-bold">{review.name}</p>
                <p className="text-sm text-bean-400">{review.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[3rem] border border-bean-100 bg-white/70 p-8 text-center shadow-soft sm:p-12">
          <SectionHeading
            eyebrow="Newsletter"
            title="Get roast notes before they sell out."
            description="A frontend-only subscription UI that supports brand storytelling and repeat purchase behavior."
            align="center"
          />
          <form className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 rounded-[2rem] bg-bean-50 p-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="min-h-14 flex-1 rounded-full border border-transparent bg-white px-6 text-sm font-semibold outline-none focus:border-copper"
            />
            <button
              type="button"
              className="rounded-full bg-bean-900 px-8 py-4 text-sm font-extrabold uppercase tracking-[0.16em] text-cream transition hover:bg-copper hover:text-bean-900"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
