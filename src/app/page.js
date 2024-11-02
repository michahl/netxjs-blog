import Menu from "@/components/menu";
import { Button } from "@/components/ui/button";
import { Github, Twitter } from "lucide-react";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import Header from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="flex justify-center min-h-screen">
      <div className="max-w-2xl w-full mx-2 sm:mx-5 relative">
        <div className="my-12">

          {/* heading */}
          <Header />
          
          <div className="my-8">
            <p>
              Nextjs starter template for next blog or personal website. Built with:
            </p>
            <ul className="mt-3 list-inside list-disc">
              <li>Nextjs</li>
              <li>TailwindCss</li>
              <li>Shadcn/ui</li>
            </ul>
            <Button className="my-1.5">
              <Link href="/" target="_blank" className="flex items-center justify-center gap-1 font-medium">
                <Icons.star className="w-5 h-5" />
                Star this project
              </Link>
            </Button>
          </div>

          <div>
            <h3 className="border-b dark:border-b-zinc-700">Latest Blog Posts</h3>
            <div className="mt-2">


            </div>
              <ul className="list-inside list-disc">
                {
                  posts.map(post => (
                    <div key={post.slug} className="flex justify-between items-center">
                      <div>
                        <div className="flex items-center gap-2">
                          <Link 
                            href="/" 
                            className="font-medium text-[17px] text-blue-600 hover:text-blue-800">
                            {post.frontmatter.title}
                          </Link>
                          <div className="flex gap-0.5">
                              {
                                post.frontmatter.tags.map(tag => (
                                  <Link 
                                    href={`/tags/${tag}`} 
                                    key={tag}
                                  >
                                    <Badge variant="outline" className="rounded-xl">{tag}</Badge>
                                  </Link>
                                ))
                              }
                          </div>
                        </div> 
                        <p className="text-sm">{post.frontmatter.description}</p>
                      </div>
                      <p className="text-xs">{post.frontmatter.date}</p>
                    </div>
                  ))
                }
              </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
