export default function Button ({ children, className, type, action, id }) {
  return (
    <button className={className} type={type} onClick={() => action(id)}>
      {children}
    </button>
  )
}
