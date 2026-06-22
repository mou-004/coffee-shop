import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-24 text-center">
      <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-copper">404</p>
      <h1 className="mt-4 font-display text-6xl font-extrabold">This page went cold.</h1>
      <p className="mx-auto mt-5 max-w-xl leading-8 text-bean-500">
        The route you opened does not exist in this frontend project.
      </p>
      <Link
        to="/"
        className="mt-9 inline-flex rounded-full bg-bean-900 px-9 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-cream shadow-glow"
      >
        Back Home
      </Link>
    </section>
  )
}
