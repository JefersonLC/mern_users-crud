export default function Button ({ children, className, type }) {
  return (
    <button className={className} type={type}>
      {children}
    </button>
  )
}
