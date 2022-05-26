import FeaturedPosts from "../components/home/featured-posts";
import Hero from "../components/home/hero";
import { getFeaturedPosts } from "../helpers/post-util";
import Head from "next/head";

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

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Nelly's Blog</title>
        <meta
          name="description"
          content="I post about progamming and web development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
