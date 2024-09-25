import { LuSunMedium } from "react-icons/lu";
import ThemeMode from "./ThemeMode";

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-5 pt-5 pb-5 backdrop-blur-sm bg-white/90">
        <div className="max-w-2xl mx-auto">
            <div className="flex justify-end">
                <div className="flex items-center gap-5">
                    <div className="flex flex-row gap-8 text-gray-600">
                        <a href="/" className="text-sm hover:text-gray-800">Home</a>
                        <a href="/blog" className="text-sm hover:text-gray-800">Blog</a>
                        <a href="/tags" className="text-sm hover:text-gray-800">Tags</a>
                        <a href="/about" className="text-sm hover:text-gray-800">About</a>
                    </div>
                    <div className="md:h-5 md:w-px md:bg-zinc-900/10"></div>
                    <ThemeMode />
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Header