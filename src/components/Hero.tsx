
import { useEffect, useState } from "react";

// Tech stack images (already correct as per your request)
const techStack = [
  {
    name: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "HTML5",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
];


const roles = [
  "Full Stack Web Developer",
  "Machine Learning Enthusiast",
  "Open Source Contributor"
];

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  // Animated subtitle
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState("");
  const [typingRole, setTypingRole] = useState(true);

  // Main subtitle to type out after the animated role
  // const mainSubtitle =
  //   "Building with Node.js, Express.js, HTML, CSS & JS | Exploring Google Colab";

  useEffect(() => {
    // Reveal animated role, one letter at a time
    let timeout: NodeJS.Timeout;
    if (typingRole && roleText.length < roles[roleIndex].length) {
      timeout = setTimeout(() => {
        setRoleText(roles[roleIndex].substring(0, roleText.length + 1));
      }, 70);
    } else if (typingRole && roleText.length === roles[roleIndex].length) {
      // Hold the complete word, then start erasing
      timeout = setTimeout(() => {
        setTypingRole(false);
      }, 1200);
    } else if (!typingRole && roleText.length > 0) {
      // Backspace effect
      timeout = setTimeout(() => {
        setRoleText(roles[roleIndex].substring(0, roleText.length - 1));
      }, 45);
    } else if (!typingRole && roleText.length === 0) {
      // Move to next role
      timeout = setTimeout(() => {
        setRoleIndex((idx) => (idx + 1) % roles.length);
        setTypingRole(true);
      }, 400);
    }
    return () => clearTimeout(timeout);
  }, [roleText, typingRole, roleIndex]);

  // // Main subtitle typing effect (runs once)
  // useEffect(() => {
  //   let currentIndex = 0;
  //   const typingInterval = setInterval(() => {
  //     if (currentIndex <= mainSubtitle.length) {
  //       setTypedText(mainSubtitle.substring(0, currentIndex));
  //       currentIndex++;
  //     } else {
  //       clearInterval(typingInterval);
  //       const cursorInterval = setInterval(() => {
  //         setShowCursor((prev) => !prev);
  //       }, 500);
  //       return () => clearInterval(cursorInterval);
  //     }
  //   }, 40);

  //   return () => clearInterval(typingInterval);
  // }, []);

  return (
    <section
      id="hero"
      className="min-h-[90vh] pt-20 flex flex-col justify-center relative overflow-hidden font-inter"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-15 pointer-events-none"></div>
      {/* Glowing orb effects */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-neon-green/10 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-neon-green/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-3 leading-snug">
              Hi, I'm{" "}
              <span className="block text-neon-green neon-text-animated font-playfair mt-2">
               Srija Vuppala
              </span>
            </h1>
            {/* Animated role text */}
            <div className="h-10 text-xl md:text-2xl font-semibold mt-2 flex justify-center lg:justify-start">
              <span className="text-neon-green font-mono">
                {roleText}
                <span
                  className={`inline-block w-2 h-5 ml-1 bg-neon-green align-bottom transition-opacity duration-300 ${
                    showCursor ? "opacity-100" : "opacity-0"
                  }`}
                ></span>
              </span>
            </div>
            {/* Main subtitle */}
            {/* <div className="text-base sm:text-xl md:text-2xl font-mono mb-4 mt-3 overflow-x-auto break-words whitespace-normal">
              <span>{typedText}</span>
              <span
                className={`inline-block w-2 h-5 ml-1 bg-neon-green align-bottom transition-opacity duration-300 ${
                  showCursor ? "opacity-100" : "opacity-0"
                }`}
              ></span>
            </div> */}
            <p className="text-md sm:text-base md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
  Always learning and building. Passionate about technology, teamwork,  
  and the open source community. Continuously exploring new ideas and turning them into reality.
</p>

            {/* Tech stack images */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-7 mt-2">
              {techStack.map(({ name, src }) => (
                <div key={name} className="flex flex-col items-center group">
                  <div className="bg-dark border border-neon-green/30 rounded-xl p-3 shadow transition-transform duration-200 hover:scale-105">
                    <img
                      src={src}
                      alt={name}
                      title={name}
                      className="w-10 h-10 object-contain"
                      loading="lazy"
                      style={{ background: "#222" }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground mt-1 group-hover:text-neon-green transition">
                    {name}
                  </span>
                </div>
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
          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center max-w-full">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              <div className="animate-float rounded-2xl overflow-hidden neon-border-animated mx-auto shadow-lg">
                <img
                  src="/srij.png"
                  alt="Anime girl working at a computer"
                  className="w-full h-auto rounded-xl object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Scroll down indicator */}
        <div className="w-full flex justify-center z-20 relative mt-14 mb-2">
          <a href="#about" className="flex flex-col items-center text-neon-green">
            <span className="mb-1 text-sm select-none">Scroll Down</span>
            {/* Down arrow indicator */}
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="animate-bounce"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

