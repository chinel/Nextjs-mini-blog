import PostHeader from "./post-header";

const DUMMY_POST = {
  title: "Getting Started with NextJs",
  slug: "getting-started-with-nextjs",
  image: "getting-started-nextjs.png",
  date: "2022-02-10",
  content: "# This is a first post",
};

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  );
};

export default PostContent;
