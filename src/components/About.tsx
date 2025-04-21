
import { Github } from "lucide-react";

const openSourceIntro = (
  <div className="w-full h-full flex flex-col justify-center items-center px-2">
    <h3 className="text-xl md:text-2xl font-bold text-neon-green mb-3">
      Open Source Journey
    </h3>
    <p className="max-w-md text-center text-muted-foreground text-sm">
      Contributing to open source transformed my skills, mindset, and network. I've collaborated on impactful codebases, mentored newcomers, and championed docs and quality. Every merged PR is a small step in giving back and growing together!
    </p>
  </div>
);

const openSourceContributions = [
  {
    id: 1,
    title: "GSSoC'25",
    period: "May 2025 - August 2025",
    description:
      "Contributed to multiple open-source projects as part of GirlScript Summer of Code 2025. Made significant improvements to documentation and added several new features.",
    achievements: [
      "Merged 20+ pull requests",
      "Reviewed code for junior contributors",
      "Added Typescript support to legacy Javascript projects",
      "Improved test coverage by 30%",
    ],
    link: "https://gssoc.girlscript.tech/",
    icon: Github,
  },
  {
    id: 2,
    title: "SWOC'25",
    period: "January 2025 - March 2025",
    description:
      "Participated in Script Winter of Code 2025, focusing on backend development and API improvements for community projects.",
    achievements: [
      "Built RESTful APIs with Express.js",
      "Implemented authentication using JWT",
      "Fixed critical security vulnerabilities",
      "Mentored 5 newcomers to open source",
    ],
    link: "https://swoc.scriptindia.org/",
    icon: Github,
  },
  {
    id: 3,
    title: "Hacktoberfest'24",
    period: "October 2024",
    description:
      "Successfully completed Hacktoberfest 2024 with quality contributions to multiple repositories focused on web technologies and machine learning.",
    achievements: [
      "Contributed to TensorFlow documentation",
      "Fixed UI bugs in React applications",
      "Improved accessibility in open-source libraries",
      "Added new machine learning visualizations",
    ],
    link: "https://hacktoberfest.com/",
    icon: Github,
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-light relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-neon-glow"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-neon-glow"></div>
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
            About Me
          </h2>
          <div className="h-1 w-20 bg-neon-green mx-auto"></div>
        </div>
        {/* Personal information */}
        <div className="mb-14">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              I'm a passionate developer with expertise in both web development and machine learning. With a strong foundation in computer science and continuous learning, I enjoy building innovative solutions that solve real-world problems.
            </p>
            <p className="text-lg mb-6">
              My journey began with web development using React and Node.js, and eventually expanded into the fascinating world of machine learning and deep learning. I love contributing to open-source projects and sharing knowledge with the community.
            </p>
          </div>
        </div>
        {/* Open Source Journey & Timeline */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-14 lg:gap-28">
            {/* Left: Open Source Journey Info */}
            <div className="md:w-[32%] bg-dark rounded-2xl neon-border flex items-center justify-center mb-8 md:mb-0 shadow-lg p-4 md:p-6 h-fit min-h-[220px] animate-fade-in lg:sticky lg:top-32">
              {openSourceIntro}
            </div>
            {/* Right: Timeline */}
            <div className="md:w-[68%] relative">
              <div className="absolute left-4 md:left-0 top-0 bottom-0 hidden md:block w-0.5 bg-neon-green/20"></div>
              <div className="flex flex-col gap-12">
                {openSourceContributions.map((c, i) => (
                  <div
                    key={c.id}
                    className="flex flex-col md:flex-row items-center md:items-stretch animate-fade-in gap-6 md:gap-0"
                    style={{ animationDelay: `${i * 0.10}s` }}
                  >
                    {/* Timeline dot for desktop */}
                    <div className="hidden md:block relative md:w-8 flex-shrink-0">
                      <div className="absolute left-3 top-2 w-5 h-5 rounded-full bg-neon-green border-4 border-dark z-10"></div>
                    </div>
                    {/* Card with details */}
                    <div
                      className={`flex-1 bg-dark py-6 px-6 sm:px-8 rounded-2xl neon-border shadow-lg md:ml-8`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <c.icon className="text-neon-green" size={20} />
                        <span className="font-mono text-sm text-neon-green">{c.period}</span>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-10">
                        {/* Title and Description */}
                        <div className="md:w-[55%]">
                          <h4 className="text-xl font-bold text-neon-green mb-1">
                            {c.title}
                          </h4>
                          <p className="text-muted-foreground mb-3 text-sm">
                            {c.description}
                          </p>
                        </div>
                        {/* Achievements and Link */}
                        <div className="md:w-[45%]">
                          <ul className="list-disc list-inside text-xs space-y-1 mb-2 text-muted-foreground">
                            {c.achievements.map((ach, idx) => (
                              <li key={idx}>{ach}</li>
                            ))}
                          </ul>
                          <a
                            href={c.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-neon-green hover:underline mt-1 font-bold"
                          >
                            <c.icon size={15} className="mr-1" /> View Project
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* GitHub activity section kept as before */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-8">GitHub Activity</h3>
          <div className="glass p-4 md:p-8 max-w-4xl mx-auto">
            <div className="bg-dark rounded-lg p-4 overflow-hidden">
              <img
                src={`https://ghchart.rshah.org/00ff7f/yourusername`}
                alt="GitHub Contribution Chart"
                className="w-full h-auto"
              />
              <p className="text-xs text-center mt-2 text-muted-foreground">
                Replace 'yourusername' with your actual GitHub username
              </p>
            </div>
          </div>
          <div className="mt-8">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <Github className="mr-2" size={18} />
              View My GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

