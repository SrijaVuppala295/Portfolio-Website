import React from 'react';

interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

const skills: Skill[] = [
  // Frontend
  { name: "React", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "Next.js", level: 80, category: "Frontend" },
  { name: "Redux", level: 75, category: "Frontend" },
  
  // Backend
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Express", level: 80, category: "Backend" },
  { name: "MongoDB", level: 75, category: "Backend" },
  { name: "PostgreSQL", level: 70, category: "Backend" },
  { name: "GraphQL", level: 65, category: "Backend" },
  
  // Machine Learning
  { name: "Python", level: 90, category: "ML/DL" },
  { name: "TensorFlow", level: 80, category: "ML/DL" },
  { name: "PyTorch", level: 75, category: "ML/DL" },
  { name: "scikit-learn", level: 85, category: "ML/DL" },
  { name: "NLP", level: 70, category: "ML/DL" },
  
  // Tools
  { name: "Git", level: 90, category: "Tools" },
  { name: "Docker", level: 75, category: "Tools" },
  { name: "CI/CD", level: 70, category: "Tools" },
  { name: "AWS", level: 65, category: "Tools" },
  { name: "Linux", level: 80, category: "Tools" },
];

const skillsByCategory = skills.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {} as Record<string, Skill[]>);

const categories = Object.keys(skillsByCategory);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-dark-light relative font-inter">
      <div className="absolute top-0 left-0 right-0 h-px bg-neon-glow"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-neon-glow"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-neon-green mx-auto"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            My technical skills span web development, machine learning, and deep learning technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category} className="glass p-8 flex flex-col">
              <h3 className="text-xl font-semibold mb-4 text-neon-green">{category}</h3>
              <div className="space-y-4">
                {skillsByCategory[category].map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{skill.name}</span>
                      <span className="text-neon-green">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-dark rounded-full overflow-hidden">
                      <div
                        className="h-full bg-neon-green"
                        style={{ width: `${skill.level}%`, transition: 'width 1s ease-in-out' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
