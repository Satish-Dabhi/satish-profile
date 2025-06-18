import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import { BLOG_DATA } from "@/constants/blogData";
import { Button } from "@/components/ui/button";
import CustomCursor from "@/components/CustomCursor";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import ParticleBackground from "@/components/ParticleBackground";
import React from "react";
import SEO from "@/components/SEO";

const Blog: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Blog - Satish Dabhi"
        description="Read all my blog posts about web development, MERN stack, React.js, Node.js, and technology insights."
        keywords="Satish Dabhi Blog, Web Development Blog, React Blog, Node.js Blog, MERN Stack Blog"
      />
      <Layout>
        <CustomCursor />
        <ParticleBackground />
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Page Header */}
              <div className="text-center mb-16 animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  My <span className="text-gradient">Blogs</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Sharing knowledge and insights about web development,
                  technology, and best practices.
                </p>
              </div>

              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {BLOG_DATA.map((post, index) => (
                  <Card
                    key={post.id}
                    className="group hover-lift overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${200 + index * 100}ms` }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>

                      <Link to={`/blog/${post.url}`}>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                          {post.title}
                        </h3>
                      </Link>

                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link to={`/blog/${post.url}`}>
                        <Button
                          variant="ghost"
                          className="p-0 h-auto text-primary hover:text-primary/80 group"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Blog;
