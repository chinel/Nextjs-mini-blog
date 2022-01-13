import AllPosts from "../../components/posts/all-post";

const DUMMY_POSTS = [
  {
    title: "Getting Started with NextJs",
    slug: "getting-started-with-nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React framework for production -  it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2022-02-10",
  },
  {
    title: "Getting Started with NextJs",
    slug: "getting-started-with-nextjs2",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React framework for production -  it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2022-02-10",
  },
  {
    title: "Getting Started with NextJs",
    slug: "getting-started-with-nextjs3",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React framework for production -  it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2022-02-10",
  },
  {
    title: "Getting Started with NextJs",
    slug: "getting-started-with-nextjs4",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React framework for production -  it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2022-02-10",
  },
];

function AllPostPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostPage;
