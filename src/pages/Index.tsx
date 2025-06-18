import React, { useEffect, useState } from "react";

import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import CustomCursor from "@/components/CustomCursor";
import HeroSection from "@/components/HeroSection";
import Layout from "@/components/Layout";
import ParticleBackground from "@/components/ParticleBackground";
import ProjectsSection from "@/components/ProjectsSection";
import SEO from "@/components/SEO";

const Index = () => {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
          }, 100); // slight delay ensures DOM is rendered
        }
      }
    };

    scrollToHash();
  }, []);

  const handleSectionChange = (section: string) => {
    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleScrollToNext = () => {
    handleSectionChange("about");
  };

  return (
    <>
      <SEO />
      <Layout>
        <CustomCursor />
        <ParticleBackground />

        <div className="relative z-10">
          {/* Hero Section */}
          <div id="home">
            <HeroSection onScrollToNext={handleScrollToNext} />
          </div>

          {/* About Section */}
          <div id="about">
            <AboutSection />
          </div>

          {/* Projects Section */}
          <div id="projects">
            <ProjectsSection />
          </div>

          {/* Blog Section */}
          <div id="blog">
            <BlogSection />
          </div>

          {/* Contact Section */}
          <div id="contact">
            <ContactSection />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Index;
