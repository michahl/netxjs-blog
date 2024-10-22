import Menu from "@/components/menu";
import { Button } from "@/components/ui/button";
import { Github, Twitter } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="max-w-2xl w-full mx-2 sm:mx-5 relative">
        <div className="my-12">

          {/* heading */}
          <div className="flex justify-between items-center">
            <h1 className="font-medium">FirstName LastName</h1>
            <div className="flex gap-1.5 items-center">
              <Link 
                href="/"
                target="_blank"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link 
                href="/"
                target="_blank"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <div className="my-10">
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
                <Github className="w-5 h-5" />
                Source code
              </Link>
            </Button>
          </div>

          <div>
            <h3 className="border-b dark:border-b-zinc-700">latest blog posts</h3>
            <div className="mt-2">


            </div>
              <ul className="list-inside list-disc">
                <li>
                  <Link href="/" target="_blank" className="font-medium text-blue-600 hover:text-blue-800">
                    welcome to my first blog
                  </Link>
                </li>
              </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
