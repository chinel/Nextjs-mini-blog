import fs from "fs";
import path from "path";
import matter from "gray-matter";
const postDirectory = path.join(process.cwd(), "posts");

export function getPostsFiles() {
  console.log(fs.readdirSync(postDirectory));
  return fs.readdirSync(postDirectory);
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // removes the file extension
  const filePath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostsFiles();
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;

  //here we are still reading through all the files again.
  //this is performat for larger blogs a better approach will be to
  //have a separate json file that holds the isFeatured property for each post and then you can use the json file to retrieve files that should be featured post
  //This is way much better for blog with hundreds of post
}
