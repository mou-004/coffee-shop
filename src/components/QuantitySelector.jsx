export default function QuantitySelector({ quantity, onDecrease, onIncrease }) {
  return (
    <div className="inline-flex items-center overflow-hidden rounded-full border border-bean-100 bg-white shadow-sm">
      <button
        type="button"
        onClick={onDecrease}
        className="h-12 w-12 text-xl font-black text-bean-700 transition hover:bg-bean-50"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="grid h-12 w-12 place-items-center border-x border-bean-100 text-sm font-black">
        {quantity}
      </span>
      <button
        type="button"
        onClick={onIncrease}
        className="h-12 w-12 text-xl font-black text-bean-700 transition hover:bg-bean-50"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  )
}
