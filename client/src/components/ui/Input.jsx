import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { forwardRef, useState } from 'react';

/**
 * Input Component - Styled input field with label, error support, and icons
 * 
 * @param {Object} props
 * @param {string} props.label - Input label text
 * @param {string} props.error - Error message to display
 * @param {React.ReactNode} props.leftIcon - Icon to show on left inside input
 * @param {React.ReactNode} props.rightIcon - Icon to show on right inside input
 * @param {string} props.helperText - Helper text below input
 * @param {string} props.className - Additional CSS classes for wrapper
 * @param {string} props.inputClassName - Additional CSS classes for input element
 */
const Input = forwardRef(({
  label,
  error,
  leftIcon,
  rightIcon,
  helperText,
  className = '',
  inputClassName = '',
  type = 'text',
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword && showPassword ? 'text' : type;
  
  // Input styles
  const baseInputStyles = 'w-full px-4 py-2.5 border rounded-lg transition-all duration-200 focus-ring bg-white';
  const errorStyles = error
    ? 'border-red-500 focus:border-red-600 focus:ring-red-200'
    : 'border-gray-300 focus:border-purple-600 focus:ring-purple-200';
  const paddingLeft = leftIcon ? 'pl-10' : '';
  const paddingRight = rightIcon || isPassword ? 'pr-10' : '';
  
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {leftIcon}
          </div>
        )}
        
        <input
          ref={ref}
          type={inputType}
          className={`${baseInputStyles} ${errorStyles} ${paddingLeft} ${paddingRight} ${inputClassName}`}
          {...props}
        />
        
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            tabIndex={-1}
          >
            {showPassword ? (
              <EyeSlashIcon className="w-5 h-5" />
            ) : (
              <EyeIcon className="w-5 h-5" />
            )}
          </button>
        )}
        
        {rightIcon && !isPassword && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            {rightIcon}
          </div>
        )}
      </div>
      
      {error && (
        <p className="text-sm text-red-600 animate-slide-in-left">
          {error}
        </p>
      )}
      
      {helperText && !error && (
        <p className="text-sm text-gray-500">
          {helperText}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
