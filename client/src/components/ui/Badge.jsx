/**
 * Badge Component - For product status, categories, and labels
 * 
 * @param {Object} props
 * @param {'success'|'warning'|'error'|'info'|'neutral'} props.variant - Badge color variant
 * @param {'sm'|'md'|'lg'} props.size - Badge size
 * @param {boolean} props.dot - Show dot indicator
 * @param {boolean} props.pill - Pill-shaped (more rounded)
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Badge content
 */
export default function Badge({
  variant = 'neutral',
  size = 'md',
  dot = false,
  pill = false,
  className = '',
  children
}) {
  // Base styles
  const baseStyles = 'inline-flex items-center font-medium';
  
  // Variant styles
  const variants = {
    success: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
    warning: 'bg-amber-100 text-amber-700 border border-amber-200',
    error: 'bg-red-100 text-red-700 border border-red-200',
    info: 'bg-blue-100 text-blue-700 border border-blue-200',
    neutral: 'bg-gray-100 text-gray-700 border border-gray-200'
  };
  
  // Size styles
  const sizes = {
    sm: 'px-2 py-0.5 text-xs gap-1',
    md: 'px-2.5 py-1 text-sm gap-1.5',
    lg: 'px-3 py-1.5 text-base gap-2'
  };
  
  // Border radius
  const radius = pill ? 'rounded-full' : 'rounded-md';
  
  // Dot indicator colors
  const dotColors = {
    success: 'bg-emerald-500',
    warning: 'bg-amber-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    neutral: 'bg-gray-500'
  };
  
  return (
    <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${radius} ${className}`}>
      {dot && (
        <span className={`w-1.5 h-1.5 rounded-full ${dotColors[variant]}`}></span>
      )}
      {children}
    </span>
  );
}
