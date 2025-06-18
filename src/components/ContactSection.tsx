import { CONTACT_INFO, PERSONAL_INFO, SOCIAL_LINKS } from '@/constants/portfolioData';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

import { Button } from '@/components/ui/button';
import React from 'react';

const ContactSection: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: SOCIAL_LINKS.github, label: 'GitHub' },
    { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: SOCIAL_LINKS.email, label: 'Gmail' },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Looking for Web development or mobile app solutions? Let's connect and discuss your project
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {CONTACT_INFO.map((info, index) => {
                    const iconMap = {
                      'Email': Mail,
                      'Phone': Phone,
                      'Location': MapPin
                    };
                    const IconComponent = iconMap[info.title as keyof typeof iconMap];
                    
                    return (
                      <a
                        key={info.title}
                        href={info.href}
                        className="flex items-center space-x-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-lift group"
                        style={{ animationDelay: `${300 + index * 100}ms` }}
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{info.title}</p>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Social Links and CTA */}
              <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
                  <div className="flex space-x-4 mb-6">
                    {socialLinks.map((social, index) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target={social.label !== 'Gmail' ? '_blank' : undefined}
                        rel={social.label !== 'Gmail' ? 'noopener noreferrer' : undefined}
                        className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300 hover-lift hover:scale-110"
                        aria-label={social.label}
                        style={{ animationDelay: `${600 + index * 100}ms` }}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-6 rounded-lg border border-border">
                  <h4 className="text-lg font-semibold mb-2">Ready to start your project?</h4>
                  <p className="text-muted-foreground mb-4">
                    I'm available for Web development, React Native apps, and Liferay CMS projects.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="hover-lift" asChild>
                      <a href={SOCIAL_LINKS.email}>
                        <Mail className="w-4 h-4 mr-2" />
                        Send Email
                      </a>
                    </Button>
                    <Button variant="outline" className="hover-lift" asChild>
                      <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
