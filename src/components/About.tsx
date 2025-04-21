
import { Github, Calendar } from 'lucide-react';

const openSourceContributions = [
  {
    id: 1,
    title: 'GSSoC\'25',
    period: 'May 2025 - August 2025',
    description: 'Contributed to multiple open-source projects as part of GirlScript Summer of Code 2025. Made significant improvements to documentation and added several new features.',
    achievements: [
      'Merged 20+ pull requests',
      'Reviewed code for junior contributors',
      'Added Typescript support to legacy Javascript projects',
      'Improved test coverage by 30%'
    ],
    link: 'https://gssoc.girlscript.tech/',
    icon: Github
  },
  {
    id: 2,
    title: 'SWOC\'25',
    period: 'January 2025 - March 2025',
    description: 'Participated in Script Winter of Code 2025, focusing on backend development and API improvements for community projects.',
    achievements: [
      'Built RESTful APIs with Express.js',
      'Implemented authentication using JWT',
      'Fixed critical security vulnerabilities',
      'Mentored 5 newcomers to open source'
    ],
    link: 'https://swoc.scriptindia.org/',
    icon: Github
  },
  {
    id: 3,
    title: 'Hacktoberfest\'24',
    period: 'October 2024',
    description: 'Successfully completed Hacktoberfest 2024 with quality contributions to multiple repositories focused on web technologies and machine learning.',
    achievements: [
      'Contributed to TensorFlow documentation',
      'Fixed UI bugs in React applications',
      'Improved accessibility in open-source libraries',
      'Added new machine learning visualizations'
    ],
    link: 'https://hacktoberfest.com/',
    icon: Github
  }
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-neon-green mx-auto"></div>
        </div>
        
        {/* Personal information */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              I'm a passionate developer with expertise in both web development and machine learning. 
              With a strong foundation in computer science and continuous learning, I enjoy building 
              innovative solutions that solve real-world problems.
            </p>
            <p className="text-lg mb-6">
              My journey began with web development using React and Node.js, and eventually expanded 
              into the fascinating world of machine learning and deep learning. I love contributing 
              to open-source projects and sharing knowledge with the community.
            </p>
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Open Source Journey</h3>
          
          {/* Timeline component */}
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-neon-green/30"></div>
            
            {openSourceContributions.map((contribution, index) => (
              <div 
                key={contribution.id} 
                className="relative mb-16 last:mb-0 md:flex"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-neon-green transform -translate-x-1/2 mt-1.5 z-10"></div>
                
                {/* Date side */}
                <div className={`md:w-1/2 pb-8 md:pb-0 ${index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12 md:order-last'}`}>
                  <div className="flex items-center mb-2 justify-end md:justify-start">
                    <Calendar size={16} className="text-neon-green mr-2" />
                    <span className="text-neon-green font-mono text-sm">{contribution.period}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-2">{contribution.title}</h4>
                  <p className="text-muted-foreground mb-4">{contribution.description}</p>
                  
                  <ul className="list-disc list-inside text-sm space-y-1 mb-4 text-left">
                    {contribution.achievements.map((achievement, i) => (
                      <li key={i} className="text-muted-foreground">{achievement}</li>
                    ))}
                  </ul>
                  
                  <a 
                    href={contribution.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-neon-green hover:underline"
                  >
                    <contribution.icon size={16} className="mr-2" />
                    View Project
                  </a>
                </div>
                
                {/* Content side */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-right'}`}>
                  <div className="glass p-6 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                    <h4 className="text-xl font-bold text-neon-green mb-4">{contribution.title}</h4>
                    <p className="text-sm mb-4">{contribution.description}</p>
                    <div className="flex flex-wrap gap-2 justify-start">
                      {Array.from({ length: Math.min(3, contribution.achievements.length) }).map((_, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-1 bg-neon-green/10 text-neon-green text-xs rounded-full"
                        >
                          {contribution.achievements[i].split(' ')[0]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* GitHub activity section */}
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
