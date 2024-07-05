import BlogPost from "../components/Blog/BlogPost";
import PageBanner from "../components/Common/PageBanner";

const Blog = () => {
  return (
    <>
      <PageBanner
        pageTitle="Our Latest Articles"
        pageSubTitle="Novis is the easiest place to buy and sell cryptocurrency."
      />

      <BlogPost />
    </>
  );
};

export default Blog;
