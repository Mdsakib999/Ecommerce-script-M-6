import {
    CheckCircleIcon,
    ExclamationTriangleIcon,
    InformationCircleIcon,
    XCircleIcon,
    XMarkIcon
} from '@heroicons/react/24/outline';

export default function Message({ children, type = 'info', onClose }) {
  const variants = {
    success: {
      bg: 'bg-green-50 border-green-200',
      text: 'text-green-800',
      icon: <CheckCircleIcon className="w-5 h-5 text-green-600" />
    },
    error: {
      bg: 'bg-red-50 border-red-200',
      text: 'text-red-800',
      icon: <XCircleIcon className="w-5 h-5 text-red-600" />
    },
    warning: {
      bg: 'bg-amber-50 border-amber-200',
      text: 'text-amber-800',
      icon: <ExclamationTriangleIcon className="w-5 h-5 text-amber-600" />
    },
    info: {
      bg: 'bg-blue-50 border-blue-200',
      text: 'text-blue-800',
      icon: <InformationCircleIcon className="w-5 h-5 text-blue-600" />
    }
  };

  const variant = variants[type] || variants.info;

  return (
    <div className={`${variant.bg} ${variant.text} border rounded-lg p-4 flex items-start gap-3 animate-slide-in-left shadow-sm`}>
      <div className="flex-shrink-0 mt-0.5">
        {variant.icon}
      </div>
      <div className="flex-1 text-sm leading-relaxed">
        {children}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="flex-shrink-0 p-1 rounded-md hover:bg-black/5 transition-colors"
          aria-label="Close message"
        >
          <XMarkIcon className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
