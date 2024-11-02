import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import { readFile, access } from "fs/promises";
import { notFound } from "next/navigation";
import MdxLayout from "@/components/mdx-layout";
import Socials from "@/components/socials";

const POSTS_FOLDER = path.join(process.cwd(), "posts");

async function readPostFile(slug) {
    const filePath = path.resolve(path.join(POSTS_FOLDER, `${slug}.mdx`));

    try {
        await access(filePath);
    } catch (err) {
        return null;
    }

    const fileContent = await readFile(filePath, { encoding: "utf8" });
    return fileContent;
}

export default async function PostPage({ params }) {
    const markdown = await readPostFile(params.slug);

    if (!markdown) {
        notFound();
    }

    const { content, frontmatter } = await compileMDX({
        source: markdown,
        options: { parseFrontmatter: true },
    });

    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="max-w-2xl w-full flex-grow">
                <div className="mt-14">
                    <article className="mx-2.5 sm:mx-5">
                        <h1 className="leading-4 font-medium">{frontmatter.title}</h1>
                        <p className="text-[#d9d9d9] font-light text-[15.5px]">Michail Christoforatos</p>
                        <div className="my-10">
                            <MdxLayout>{content}</MdxLayout>
                        </div>
                    </article>
                </div>
            </div>
            <Socials />
        </div>
    );
}