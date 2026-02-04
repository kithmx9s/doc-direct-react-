function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-light via-white to-blue-50">
      <div className="text-center animate-fadeIn">
        <h1 className="text-6xl font-bold text-primary mb-4">
          Doc Direct
        </h1>
        <p className="text-2xl text-gray-600 mb-8">
          Your Direct Path to Healthcare
        </p>
        <div className="flex gap-4 justify-center">
          <button className="btn-primary">
            Find a Doctor
          </button>
          <button className="btn-secondary">
            Find a Hospital
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home