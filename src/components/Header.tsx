
import { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Menu, X, Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  
  // Track scrolling to change header style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // No actual light mode implementation as we're always in dark mode with green accents
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/yourusername', label: 'Instagram' }
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-dark/90 backdrop-blur-md shadow-md shadow-neon-green/5' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <span className="text-xl font-bold neon-text">&lt;/&gt;</span>
          <span className="font-semibold text-lg">DevPortfolio</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm hover:text-neon-green transition-colors relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-green transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
        
        {/* Desktop Social & Theme Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          {socialLinks.map((social) => (
            <a 
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-neon-green transition-colors"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </a>
          ))}
          
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-dark-light transition-colors"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <Sun className="text-neon-green" size={20} /> : <Moon className="text-neon-green" size={20} />}
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-neon-green"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[61px] bg-dark animate-fade-in z-40">
          <nav className="container mx-auto px-4 py-8 flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-lg font-medium hover:text-neon-green transition-colors py-2 border-b border-neon-green/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex items-center space-x-8 pt-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-neon-green transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
              
              <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-dark-light transition-colors ml-auto"
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? <Sun className="text-neon-green" size={24} /> : <Moon className="text-neon-green" size={24} />}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
