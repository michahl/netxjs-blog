import { Button } from "@/components/ui/button";
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
            <h1 className="font-semibold mb-5">Michail Christoforatos</h1>
            <p>
              Nextjs starter template for next blog or personal website. Built with:
            </p>
            <ul className="mt-3 list-inside list-disc">
              <li>Nextjs</li>
              <li>TailwindCss</li>
              <li>Shadcn/ui</li>
            </ul>
            <Button className="my-1.5">
              <Link href="https://github.com/michahl/netxjs-blog" target="_blank" className="flex items-center justify-center gap-1 font-medium">
                <Icons.star className="w-5 h-5" />
                Star this project
              </Link>
            </Button>
          </div>

          <div>
            <h3 className="border-b dark:border-b-zinc-700">Latest Blog Posts</h3>
            <div className="mt-5 grid grid-cols-2 gap-2">
              {
                posts.map(post => (
                  <div key={post.slug} className="flex flex-col justify-between pt-5">
                    <div>
                      <h3>{post.frontmatter.title}</h3>
                      <p className="text-sm">{post.frontmatter.description}</p>
                    </div>

                    <Link 
                      href={`/post/${post.slug}`}
                      className="mt-10 text-sm flex items-center gap-1"
                    >
                      Read more
                      <Icons.arrow_right className="w-4 h-4"/>
                    </Link>
                  </div>
                )) 
              }
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
