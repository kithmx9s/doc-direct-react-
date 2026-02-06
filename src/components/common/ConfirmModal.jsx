
import { AlertTriangle } from 'lucide-react'
import Button from './Button'

function ConfirmModal({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title = 'Confirm Action',
  message = 'Are you sure you want to proceed?',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  type = 'warning' // warning, danger
}) {
  if (!isOpen) return null

  const iconColors = {
    warning: 'bg-warning/10 text-warning',
    danger: 'bg-error/10 text-error',
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl animate-scaleIn">
        <div className={`${iconColors[type]} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
          <AlertTriangle className="h-8 w-8" />
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">{title}</h2>
        <p className="text-gray-600 text-center mb-6">{message}</p>

        <div className="flex gap-3">
          <Button variant="secondary" fullWidth onClick={onClose}>
            {cancelText}
          </Button>
          <Button 
            variant={type === 'danger' ? 'danger' : 'primary'} 
            fullWidth 
            onClick={() => {
              onConfirm()
              onClose()
            }}
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal