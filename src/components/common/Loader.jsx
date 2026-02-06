
import Loader from './Loader'

function LoadingOverlay({ message = 'Loading...' }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-8 shadow-2xl text-center animate-scaleIn">
        <Loader size="large" className="mx-auto mb-4" />
        <p className="text-lg font-semibold text-gray-900">{message}</p>
      </div>
    </div>
  )
}

export default LoadingOverlay