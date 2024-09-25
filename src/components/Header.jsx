import ThemeMode from "./ThemeMode";

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-5 pt-5 pb-5 backdrop-blur-sm bg-white/90 dark:bg-zinc-950/10">
        <div className="max-w-2xl mx-auto">
            <div className="flex justify-end">
                <div className="flex items-center gap-5">
                    <div className="flex flex-row gap-8 text-gray-600 dark:text-gray-400">
                        <a href="/" className="text-sm hover:text-gray-800 dark:hover:text-gray-200">Home</a>
                        <a href="/blog" className="text-sm hover:text-gray-800 dark:hover:text-gray-200">Blog</a>
                        <a href="/tags" className="text-sm hover:text-gray-800 dark:hover:text-gray-200">Tags</a>
                        <a href="/about" className="text-sm hover:text-gray-800 dark:hover:text-gray-200">About</a>
                    </div>
                    <div className="h-5 w-px bg-zinc-900/10 dark:bg-zinc-100/20"></div>
                    <ThemeMode />
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Header