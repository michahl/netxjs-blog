import Menu from "@/components/menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import Header from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";

export default function Posts() {
    const posts = getAllPosts();
    return (
        <div className="flex justify-center min-h-screen">
            <div className="max-w-2xl w-full mx-2 sm:mx-5 relative">
                <div className="my-12">
                    <Header />
        
                    <div className="my-10">
                    <h3 className="border-b text-lg font-semibold dark:border-b-zinc-700">Recent posts</h3>

                    <div className="mt-5 grid grid-cols-1 gap-7">
                        {
                            posts.map( post => (
                                <div className="flex flex-col" key={post.slug}>
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm text-zinc-950/70 dark:text-zinc-100/65">{post.frontmatter.date}</p>
                                        <div className="flex gap-1">
                                            {
                                                post.frontmatter.tags.map( tag => (
                                                    <Link
                                                        key={tag}
                                                        href={`/tags/${tag}`}
                                                    >
                                                        <Badge variant="outline" className="rounded-2xl text-xs">{tag}</Badge>
                                                    </Link>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <Link
                                        href={`/post/${post.slug}`}
                                        className="text-[17px] font-semibold hover:underline"
                                    >
                                        {post.frontmatter.title}
                                    </Link>
                                    <p className="text-sm leading-3">{post.frontmatter.description}</p>
                                </div>
                            ))
                        }
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}