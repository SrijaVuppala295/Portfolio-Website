
import React from 'react';

// Simple list of skills/tools - just a few examples for a beginner or intermediate profile
const skills = [
  "React",
  "TypeScript",
  "HTML/CSS",
  "Python",
  "Git",
  "MongoDB",
  "Node.js",
  "Jupyter Notebook",
  "Colab",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-dark-light relative font-inter">
      <div className="absolute top-0 left-0 right-0 h-px bg-neon-glow"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-neon-glow"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Skills & Tools</h2>
          <div className="h-1 w-20 bg-neon-green mx-auto"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            A few of the main technologies and tools I use or am learning:
          </p>
        </div>
        <ul className="flex flex-wrap gap-4 justify-center items-center">
          {skills.map(skill => (
            <li key={skill} className="px-6 py-2 glass text-base rounded-full font-semibold text-neon-green bg-dark shadow hover-scale">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
