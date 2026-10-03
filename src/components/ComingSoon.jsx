export default function ComingSoon({ title = "Coming Soon" }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 py-12">
      <div className="bg-[#162331] p-8 rounded-2xl border border-[#283c51] shadow-2xl max-w-md w-full relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#00a4fa] opacity-10 blur-[60px] rounded-full pointer-events-none"></div>

        <div className="flex justify-center mb-6 relative z-10">
          <img
            src="/coming-soon.png"
            alt="Coming Soon"
            style={{ width: '180px', height: '180px', objectFit: 'contain', filter: 'drop-shadow(0 0 24px rgba(0,164,250,0.35))' }}
          />
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-3 relative z-10">{title}</h2>
        
        <p className="text-[#8a90a2] mb-8 relative z-10 text-lg">
          We are crafting something amazing here. It will be available very soon!
        </p>
        
        <button 
          onClick={() => window.location.hash = ''}
          className="ui-button w-full relative z-10 hover:brightness-110 transition-all shadow-lg"
          style={{ background: 'var(--button-blue)', color: 'white', border: 'none' }}
        >
          Return Home
        </button>
      </div>
    </div>
  )
}
