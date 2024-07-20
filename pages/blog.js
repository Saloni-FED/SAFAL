import BlogPost from "../components/Blog/BlogPost";
import PageBanner from "../components/Common/PageBanner";

const Blog = () => {
  return (
    <>
      <PageBanner
        pageTitle="Important Tools For Investors"
        pageSubTitle="Data and Tools."
      />

      <BlogPost />
    </>
  );
};

export default Blog;
