import './Styles/Button.css'

function Button({children, ...props}) {
  return (
    <button {...props} className='Button'>{children}</button>
  )
}

export default Button