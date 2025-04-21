
import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const techStackIcons = [
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
  },
  {
    name: 'TensorFlow',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
  },
  {
    name: 'AWS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg'
  },
];

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  const textToType = "Full-Stack Developer | ML Engineer | Open Source Contributor";
  
  // Typing animation effect
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= textToType.length) {
        setTypedText(textToType.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        
        // Keep cursor blinking after typing is complete
        const cursorInterval = setInterval(() => {
          setShowCursor(prev => !prev);
        }, 500);
        
        return () => clearInterval(cursorInterval);
      }
    }, 80);
    
    return () => clearInterval(typingInterval);
  }, []);
  
  return (
    <section 
      id="hero" 
      className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-20"></div>
      
      {/* Glowing orb effects */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-neon-green/10 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-neon-green/10 rounded-full blur-[80px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block">Hi, I'm</span>
              <span className="block text-neon-green neon-text-animated mt-2">Developer Name</span>
            </h1>
            
            <div className="text-xl md:text-2xl font-mono mb-8 h-8">
              <span>{typedText}</span>
              <span className={`inline-block w-2 h-5 ml-1 bg-neon-green ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Building innovative solutions across web development and machine learning.
              Open source enthusiast and continuous learner focused on creating impactful
              technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#projects" 
                className="btn btn-primary"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="btn btn-outline"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          {/* Anime character with floating animation */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Main character image - anime girl working */}
              <div className="animate-float rounded-2xl overflow-hidden neon-border-animated">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800"
                  alt="Anime girl working at a computer"
                  className="w-full h-auto rounded-xl"
                />
              </div>
              
              {/* Floating tech stack icons */}
              <div className="absolute inset-0 pointer-events-none">
                {techStackIcons.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="absolute rounded-full bg-dark/70 backdrop-blur-sm p-2 border border-neon-green/30 animate-float"
                    style={{
                      top: `${10 + (index * 45) % 80}%`,
                      left: `${5 + (index * 30) % 85}%`,
                      animationDelay: `${index * 0.2}s`,
                      zIndex: 20
                    }}
                  >
                    <img 
                      src={tech.icon} 
                      alt={tech.name} 
                      className="w-8 h-8"
                      title={tech.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-neon-green">
            <span className="mb-2 text-sm">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
