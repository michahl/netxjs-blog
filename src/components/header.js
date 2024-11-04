import Link from "next/link";
import { ModeToggle } from "./modetoggle";

export default function Header() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-end">
                <div className="flex gap-6 items-center">
                    <Link
                        href="/"
                        className="text-sm text-zinc-700/80 hover:text-zinc-700 dark:text-zinc-200/90 dark:hover:text-zinc-200"
                    >
                        Home
                    </Link>
                    <Link
                        href="/posts"
                        className="text-sm text-zinc-700/80 hover:text-zinc-700 dark:text-zinc-200/90 dark:hover:text-zinc-200"
                    >
                        Blog
                    </Link>
                    <Link
                        href="/tags"
                        className="text-sm text-zinc-700/80 hover:text-zinc-700 dark:text-zinc-200/90 dark:hover:text-zinc-200"
                    >
                        Tags
                    </Link>
                    <ModeToggle />
                </div>
            </div>
            
        </div>
    )
}