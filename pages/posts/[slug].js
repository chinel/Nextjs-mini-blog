import { Fragment } from "react";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../helpers/post-util";
import Head from "next/head";

function PostDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600, //in seconds
  };
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles();
  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({
      params: {
        slug: slug,
      }, //here we generate this single post page for all path in advance
    })),
    fallback: false,
  };
}

export default PostDetailPage;
