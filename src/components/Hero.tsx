
import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

// Beginner-friendly tech stack images
const techStack = [
  {
    name: "GitHub",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
  },
  {
    name: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    name: "Express.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
  },
  {
    name: "HTML5",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    name: "CSS3",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    name: "Google Colab",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecolab/googlecolab-original.svg"
  }
];

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const textToType = "Beginner Web Developer | Exploring Node.js & Colab";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= textToType.length) {
        setTypedText(textToType.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);

        const cursorInterval = setInterval(() => {
          setShowCursor(prev => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
      }
    }, 60);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden font-inter"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-20 pointer-events-none"></div>
      {/* Glowing orb effects */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-neon-green/10 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-neon-green/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Text content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair leading-snug break-words">
              <span className="block">Hi, I'm</span>
              <span className="block text-neon-green neon-text-animated mt-2 font-playfair truncate">Your Name</span>
            </h1>
            <div className="text-lg sm:text-xl md:text-2xl font-mono mb-5 h-fit max-w-full whitespace-normal break-words leading-tight">
              <span>{typedText}</span>
              <span className={`inline-block w-2 h-5 ml-1 bg-neon-green align-bottom ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
            </div>
            <p className="text-md sm:text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 break-words leading-relaxed">
              I'm learning the basics of web development. Comfortable with HTML, CSS, JS, Node.js, and trying Express and Google Colab. Always open to learning and new opportunities!
            </p>
            {/* Tech stack images */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
              {techStack.map(({ name, src }) => (
                <img
                  key={name}
                  src={src}
                  alt={name}
                  title={name}
                  className="w-10 h-10 object-contain bg-dark rounded shadow hover:scale-105 transition-transform"
                  loading="lazy"
                  style={{ background: "#222" }}
                />
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#achievements" className="btn btn-primary">
                View Achievements
              </a>
              <a href="#projects" className="btn btn-outline">
                View Projects
              </a>
              <a href="#contact" className="btn btn-outline">
                Get In Touch
              </a>
            </div>
          </div>
          {/* Image section */}
          <div className="lg:w-1/2 flex justify-center max-w-full">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              <div className="animate-float rounded-2xl overflow-hidden neon-border-animated mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800"
                  alt="Anime girl working at a computer"
                  className="w-full h-auto rounded-xl object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Scroll down indicator (properly placed below all content) */}
        <div className="w-full flex justify-center z-20 relative mt-16 mb-2">
          <a href="#about" className="flex flex-col items-center text-neon-green">
            <span className="mb-1 text-sm select-none">Scroll Down</span>
            <ArrowDown size={22} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

