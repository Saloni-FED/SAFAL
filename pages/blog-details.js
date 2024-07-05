import BlogDetailsContent from "../components/Blog/BlogDetailsContent";
import RelatedBlogPost from "../components/Blog/RelatedBlogPost";
import RegisterArea from "../components/Common/RegisterArea";

const BlogDetails = () => {
  return (
    <>
      <BlogDetailsContent />

      <RelatedBlogPost />

      <RegisterArea ctaImage="/images/man.png" />
    </>
  );
};

export default BlogDetails;
