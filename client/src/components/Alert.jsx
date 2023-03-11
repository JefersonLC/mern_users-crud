export default function Alert ({ children, type }) {
  return (
    <div
      className={'alert ' + (type === 'error' ? 'alert-error' : 'alert-success')}
    >
      {type && (
        <div className='alert-head'>
          {type === 'error' && 'Error!'}
          {type === 'success' && 'Success!'}
        </div>
      )}
      <hr />
      <div className='alert-body'>{children}</div>
    </div>
  )
}
