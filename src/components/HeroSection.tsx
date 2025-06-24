import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/constants/portfolioData";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import logo from '@/images/satish_dabhi_logo.png';

interface HeroSectionProps {
  onScrollToNext: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToNext }) => {
  const titles = [
    "MERN Stack Developer",
    "React.js & Next.js Specialist",
    "React Native Mobile App Developer",
    "Liferay CMS Developer",
  ];

  const [typedText, setTypedText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseBeforeDeleting = 1500;

    const handleTyping = () => {
      if (!isDeleting && charIndex < currentTitle.length) {
        setTypedText(currentTitle.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setTypedText(currentTitle.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        if (!isDeleting) {
          setTimeout(() => setIsDeleting(true), pauseBeforeDeleting);
        } else {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg opacity-10" />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="pt-3 mb-5 animate-bounce-in">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-6xl font-bold text-gradient">
                {/* SD */}
                <img
                  src={logo}
                  alt="Logo"
                  className="h-28 w-28 pl-2 mr-2 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4 mb-8">
            <h1 className="text-5xl md:text-7xl font-bold animate-fade-in-up">
              <span className="text-gradient">{PERSONAL_INFO.name}</span>
            </h1>
            <div
              className="text-xl md:text-2xl text-muted-foreground animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <span className="typewriter">{typedText}</span>
            </div>
          </div>

          {/* Description */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            {PERSONAL_INFO.description.split("\n").map((line, index) => (
              <span
                key={index}
                style={{ display: "block", marginBottom: "1rem" }}
              >
                {line}
              </span>
            ))}
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-4 animate-fade-in-up"
            style={{ animationDelay: "600ms" }}
          >
            <Button
              className="hover-lift text-lg px-8 py-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transform transition-all duration-300"
              asChild
            >
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
            <Button
              variant="outline"
              className="hover-lift text-lg px-8 py-6 rounded-full border-2 hover:border-primary hover:text-primary transform transition-all duration-300"
              asChild
            >
              <a href={SOCIAL_LINKS.email}>
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div
            className="flex justify-center space-x-6 mb-12 animate-fade-in-up"
            style={{ animationDelay: "800ms" }}
          >
            {[
              { icon: Github, href: SOCIAL_LINKS.github, label: "GitHub" },
              {
                icon: Linkedin,
                href: SOCIAL_LINKS.linkedin,
                label: "LinkedIn",
              },
              { icon: Mail, href: SOCIAL_LINKS.email, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover-lift hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={onScrollToNext}
            className="animate-bounce hover:text-primary transition-colors duration-300"
            aria-label="Scroll to next section"
          >
            <ArrowDown className="h-6 w-6 mx-auto" />
          </button>
        </div>
      </div>

      {/* Floating elements */}
      <div
        className="absolute top-20 left-10 w-20 h-20 bg-purple-500/10 rounded-full animate-float"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-blue-500/10 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-40 left-20 w-12 h-12 bg-purple-500/10 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-20 right-10 w-24 h-24 bg-blue-500/10 rounded-full animate-float"
        style={{ animationDelay: "0.5s" }}
      />
    </section>
  );
};

export default HeroSection;
