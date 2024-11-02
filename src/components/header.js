import Link from "next/link";
import { Icons } from "./icons";
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
                        href="/blogs"
                        className="text-sm text-zinc-700/80 hover:text-zinc-700 dark:text-zinc-200/90 dark:hover:text-zinc-200"
                    >
                        Blogs
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
            <h1 className="font-medium">Michail Christoforatos</h1>
        </div>
    )
}