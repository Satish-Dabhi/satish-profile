import { Card, CardContent } from "@/components/ui/card";
import { Code, Globe, Palette, Smartphone, Users, Zap } from "lucide-react";

import { ABOUT_DATA } from "@/constants/portfolioData";
import React from "react";
import profileImg from '@/images/profile-cartoon.png';

const AboutSection: React.FC = () => {
  const skillIcons = [Code, Smartphone, Palette, Globe];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              MERN Stack Developer with expertise in mobile apps and CMS
              solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image and Description */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="relative">
                <div className="w-full max-w-md mx-auto">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-8 flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center overflow-hidden">
                      <img
                        src={profileImg}
                        alt="Satish Dabhi"
                        className="object-cover w-full h-full rounded-xl"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full animate-pulse-glow" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full animate-float" />
              </div>

              <div className="mt-8 space-y-4">
                {ABOUT_DATA.intro.map((paragraph, index) => (
                  <p key={index} className="text-lg text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Skills Grid */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ABOUT_DATA.skills.map((skill, index) => {
                  const IconComponent = skillIcons[index];
                  return (
                    <Card
                      key={skill.title}
                      className="hover-lift animate-fade-in-up border-border/50 hover:border-primary/50 transition-all duration-300"
                      style={{ animationDelay: `${400 + index * 100}ms` }}
                    >
                      <CardContent className="p-6">
                        <IconComponent className="h-8 w-8 text-primary mb-4 animate-bounce-in" />
                        <h3 className="font-semibold mb-2">{skill.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {skill.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Technologies */}
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "800ms" }}
              >
                <h3 className="text-xl font-semibold mb-4">
                  Technologies & Tools
                </h3>
                <div className="flex flex-wrap gap-3">
                  {ABOUT_DATA.technologies.map((tech, index) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-primary hover:text-primary transition-all duration-300 hover:scale-105 cursor-default"
                      style={{ animationDelay: `${900 + index * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Experience Stats */}
              <div
                className="grid grid-cols-3 gap-4 animate-fade-in-up"
                style={{ animationDelay: "1000ms" }}
              >
                {ABOUT_DATA.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-card border border-border rounded-lg"
                  >
                    <div className="text-2xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
