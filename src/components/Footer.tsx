
import { Github, Linkedin, Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark py-12 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-neon-glow"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <div className="text-2xl font-bold neon-text">&lt;/&gt;</div>
          </div>
          
          <div className="flex space-x-6 mb-8">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-neon-green transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-neon-green transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-neon-green transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="https://instagram.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-neon-green transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className="text-muted-foreground hover:text-neon-green transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <div className="text-center text-muted-foreground">
            <p className="mb-2">© {new Date().getFullYear()} Developer Portfolio. All rights reserved.</p>
            <p className="text-sm">
              Built with React, TypeScript, Tailwind CSS, and D3.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
