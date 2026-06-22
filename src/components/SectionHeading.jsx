export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.28em] text-copper">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-4xl font-extrabold tracking-tight text-bean-900 sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-8 text-bean-500">
          {description}
        </p>
      )}
    </div>
  )
}
