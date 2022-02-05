import fs from "fs";
import path from "path";
import matter from "gray-matter";
const postDirectory = path.join(process.cwd(), "posts");

function getPostData(fileName) {
  const filePath = path.join(postDirectory.fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent); //This matter returns the content as two properties one that contains the matter data and one that contains the actual content
  const postSlug = fileName.replace(/\.md$/, ""); //this removes the file extension

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

function getAllPosts() {
  const postFiles = fs.readdirSync(postDirectory); //Read dir sync will read through all the content synchronously in a blocking way.

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}
