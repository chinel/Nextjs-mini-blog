import fs from "fs";
import path from "path";

const postDirectory = path.join(process.cwd(), "posts");

function getAllPosts() {
  const postFiles = fs.readdirSync(postDirectory); //Read dir sync will read through all the content synchronously in a blocking way.
}
