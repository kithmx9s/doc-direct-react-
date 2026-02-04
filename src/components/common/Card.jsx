function Card({ 
  children, 
  className = '', 
  hoverable = true,
  onClick 
}) {
  const hoverClass = hoverable ? 'card' : 'bg-white rounded-xl shadow-card p-6'
  const clickClass = onClick ? 'cursor-pointer' : ''

  return (
    <div 
      className={`${hoverClass} ${clickClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Card