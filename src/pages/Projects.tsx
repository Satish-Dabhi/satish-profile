import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Filter, Github } from "lucide-react";
import {
  PROJECT_CATEGORIES,
  SOCIAL_LINKS,
} from "@/constants/portfolioData";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import CustomCursor from "@/components/CustomCursor";
import Layout from "@/components/Layout";
import { PROJECTS_DATA } from "@/constants/projctsData";
import ParticleBackground from "@/components/ParticleBackground";
import SEO from "@/components/SEO";

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((project) => project.category === activeFilter);

  return (
    <>
      <SEO
        title="Projects - Satish Dabhi"
        description="Explore all my MERN stack projects, mobile apps, and CMS solutions. React.js, Node.js, React Native applications and more."
        keywords="Satish Dabhi Projects, MERN Stack Projects, React Projects, Node.js Projects, Mobile Apps"
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
                  My <span className="text-gradient">Projects</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  A comprehensive showcase of MERN stack applications, mobile
                  apps, CMS solutions, and web development projects
                </p>
              </div>

              {/* Filter Buttons */}
              <div
                className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up"
                style={{ animationDelay: "200ms" }}
              >
                {PROJECT_CATEGORIES.map((category) => (
                  <Button
                    key={category}
                    variant={activeFilter === category ? "default" : "outline"}
                    onClick={() => setActiveFilter(category)}
                    className="hover-lift transition-all duration-300"
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    {category}
                  </Button>
                ))}
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <Card
                    key={project.id}
                    className="group hover-lift overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${400 + index * 100}ms` }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="flex space-x-2">
                          {project.demo !== "#" && (
                            <Button size="sm" variant="secondary" asChild>
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="w-4 h-4 mr-1" />
                                Demo
                              </a>
                            </Button>
                          )}
                          <Button size="sm" variant="secondary" asChild>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="w-4 h-4 mr-1" />
                              Code
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="mb-2">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 text-sm">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* GitHub Link */}
              <div
                className="text-center mt-12 animate-fade-in-up"
                style={{ animationDelay: "800ms" }}
              >
                <Button variant="outline" className="hover-lift" asChild>
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View All Projects on GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Projects;
