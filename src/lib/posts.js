import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_FOLDER = path.join(process.cwd(), "posts");

// Function to get all posts
export function getAllPosts() {
  const files = fs.readdirSync(POSTS_FOLDER); // Read all files in the 'posts' directory

  const posts = files.map((filename) => {
    // Remove .mdx extension to get the slug
    const slug = filename.replace(/\.mdx$/, "");

    // Read the file contents
    const filePath = path.join(POSTS_FOLDER, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");

    // Use gray-matter to parse the file frontmatter
    const { data: frontmatter } = matter(fileContents);

    return {
      slug,           // The slug (used for URLs)
      frontmatter,    // The frontmatter metadata (title, description, date, etc.)
    };
  });

  return posts;
}
// Function to get all tags from posts
export function getAllTags() {
  const files = fs.readdirSync(POSTS_FOLDER); // Read all files in the 'posts' directory

  const tags = new Set();

  files.forEach((filename) => {
    // Read the file contents
    const filePath = path.join(POSTS_FOLDER, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");

    // Use gray-matter to parse the file frontmatter
    const { data: frontmatter } = matter(fileContents);

    if (frontmatter.tags) {
      frontmatter.tags.forEach((tag) => tags.add(tag));
    }
  });

  return Array.from(tags);
}