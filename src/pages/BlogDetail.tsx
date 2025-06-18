import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { BLOG_DATA } from "@/constants/blogData";
import { Button } from "@/components/ui/button";
import CustomCursor from "@/components/CustomCursor";
import Layout from "@/components/Layout";
import ParticleBackground from "@/components/ParticleBackground";
import React from "react";
import SEO from "@/components/SEO";

const BlogDetail: React.FC = () => {
  const { title } = useParams<{ title: string }>();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);

  const post = BLOG_DATA.find((p) => p.url === title);

  if (!post) {
    return (
      <>
        <SEO
          title="Blog Post Not Found - Satish Dabhi"
          description="The requested blog post could not be found on Satish Dabhi's portfolio."
        />
        <Layout>
          <CustomCursor />
          <ParticleBackground />
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
              <p className="text-muted-foreground mb-8">
                The blog post you're looking for doesn't exist.
              </p>
              <Link to="/blog">
                <Button>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blogs
                </Button>
              </Link>
            </div>
          </div>
        </Layout>
      </>
    );
  }

  return (
    <>
      <SEO
        title={`${post.title} - Satish Dabhi Blog`}
        description={`${post.content
          .replace(/<[^>]*>/g, "")
          .substring(0, 160)}...`}
        keywords={`${post.tags.join(
          ", "
        )}, Satish Dabhi, Blog, Web Development`}
      />
      <Layout>
        <CustomCursor />
        <ParticleBackground />
        <article className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <Link to="/blog" className="inline-block mb-8">
                <Button variant="ghost" className="hover-lift">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blogs
                </Button>
              </Link>

              {/* Hero Image */}
              <div className="relative overflow-hidden rounded-lg mb-8">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>

              {/* Article Header */}
              <header className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </header>

              {/* Article Content */}
              <div
                className="prose prose-lg max-w-none dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </article>
      </Layout>
    </>
  );
};

export default BlogDetail;
