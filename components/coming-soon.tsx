import Image from "next/image"
import Link from "next/link"

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-[#1e2837] flex flex-col">
      {/* Header */}
      <header className="w-full py-4 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
              <Image id="logo_wide" src="/logo.png" width="208" height="47" alt="HHB Historical Household Budgets" />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute inset-0 bg-repeat bg-center" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-white tracking-tight">
            The HHB Project
          </h1>
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl text-white font-light">
              Historical Household Budgets
            </h2>
            <p className="text-xl text-slate-300 italic max-w-2xl mx-auto">
              Two Centuries of Well-being, Poverty and Inequality Around the World
            </p>
            <p className="text-xl text-white">
              Coming Back Soon
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 px-4 bg-[#182330]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Historical Household Budgets Project</p>
          <Link
            href="https://www.hhbproject.com/"
            className="text-[#ff6b6b] hover:text-[#ff8585] transition-colors"
          >
            www.hhbproject.com
          </Link>
        </div>
      </footer>
    </div>
  )
}
