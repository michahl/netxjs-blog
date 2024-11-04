import Header from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { getAllTags } from "@/lib/posts";
import Link from "next/link";

export default function Tags() {
    const tags = getAllTags();
    return (
        <div className="flex justify-center min-h-screen">
            <div className="max-w-2xl w-full mx-2 sm:mx-5 relative">
                <div className="my-12">
                    <Header />
        
                    <div className="mt-10">
                        <h3 className="text-lg font-semibold">Topics I&#39;ve written about</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-5">
                    {
                        tags.map(tag => (
                            <Link 
                                key={tag} 
                                className="flex justify-between items-center"
                                href={`/tags/${tag}`}
                            >
                                <Badge variant="outline" className="hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 rounded-2xl text-sm">{tag}</Badge>
                            </Link>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}