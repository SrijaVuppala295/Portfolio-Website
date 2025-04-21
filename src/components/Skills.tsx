
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

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
  const radarChartRef = useRef<SVGSVGElement>(null);
  
  // D3.js radar chart
  useEffect(() => {
    if (!radarChartRef.current) return;
    
    // Clear previous chart
    d3.select(radarChartRef.current).selectAll("*").remove();
    
    const margin = { top: 50, right: 80, bottom: 50, left: 80 };
    const width = 500 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;
    const radius = Math.min(width, height) / 2;
    
    const svg = d3.select(radarChartRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${(width / 2) + margin.left}, ${(height / 2) + margin.top})`);
    
    // Define radar chart properties
    const allSkills = skills.map(s => s.name);
    const total = allSkills.length;
    const angleSlice = (Math.PI * 2) / total;
    
    // Scale for the radius
    const rScale = d3.scaleLinear()
      .range([0, radius])
      .domain([0, 100]);
    
    // Create circular grid
    const axisGrid = svg.append("g").attr("class", "axis-grid");
    
    // Draw the background circles
    const circles = [20, 40, 60, 80, 100];
    axisGrid.selectAll(".grid-circle")
      .data(circles)
      .enter()
      .append("circle")
      .attr("class", "grid-circle")
      .attr("r", d => rScale(d))
      .style("fill", "none")
      .style("stroke", "rgba(0, 255, 127, 0.1)")
      .style("stroke-dasharray", "4,4");
    
    // Add labels for the levels
    axisGrid.selectAll(".axis-label")
      .data(circles)
      .enter()
      .append("text")
      .attr("class", "axis-label")
      .attr("x", 4)
      .attr("y", d => -rScale(d))
      .attr("dy", "0.4em")
      .style("font-size", "10px")
      .style("fill", "rgba(255, 255, 255, 0.5)")
      .text(d => d.toString());
    
    // Create the straight lines radiating from the center
    const axis = axisGrid.selectAll(".axis")
      .data(allSkills)
      .enter()
      .append("g")
      .attr("class", "axis");
    
    axis.append("line")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", (d, i) => rScale(105) * Math.cos(angleSlice * i - Math.PI / 2))
      .attr("y2", (d, i) => rScale(105) * Math.sin(angleSlice * i - Math.PI / 2))
      .style("stroke", "rgba(0, 255, 127, 0.15)")
      .style("stroke-width", "1px");
    
    // Add labels for each axis
    axis.append("text")
      .attr("class", "legend")
      .style("font-size", "11px")
      .style("fill", "white")
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .attr("x", (d, i) => rScale(110) * Math.cos(angleSlice * i - Math.PI / 2))
      .attr("y", (d, i) => rScale(110) * Math.sin(angleSlice * i - Math.PI / 2))
      .text(d => d);
    
    // Draw the radar chart blobs for each skill category
    const radarLine = d3.lineRadial<Skill>()
      .radius(d => rScale(d.level))
      .angle((d, i) => allSkills.indexOf(d.name) * angleSlice);
    
    // Create a wrapper for the blobs
    const blobWrapper = svg.append("g").attr("class", "radar-wrapper");
    
    // Helper function to get skill data array in the correct order
    const getOrderedSkills = (categorySkills: Skill[]) => {
      return allSkills.map(name => {
        const skill = categorySkills.find(s => s.name === name);
        return skill || { name, level: 0, category: '' };
      });
    };
    
    // Loop through each category and add its blob
    const colorScale = d3.scaleOrdinal<string>()
      .domain(categories)
      .range(["rgba(0, 255, 127, 0.7)", "rgba(45, 255, 145, 0.7)", "rgba(0, 204, 102, 0.7)", "rgba(0, 153, 76, 0.7)"]);
    
    categories.forEach(category => {
      const dataCategory = getOrderedSkills(skillsByCategory[category]);
      
      // Draw the blob
      blobWrapper.append("path")
        .datum(dataCategory)
        .attr("class", "radar-area")
        .attr("d", d => radarLine(d) || "")
        .style("fill", colorScale(category))
        .style("fill-opacity", 0.6)
        .style("stroke", colorScale(category))
        .style("stroke-width", "2px")
        .on("mouseover", function() {
          d3.select(this)
            .transition()
            .duration(200)
            .style("fill-opacity", 0.8);
        })
        .on("mouseout", function() {
          d3.select(this)
            .transition()
            .duration(200)
            .style("fill-opacity", 0.6);
        });
    });
    
    // Add a legend
    const legend = svg.append("g")
      .attr("class", "legend")
      .attr("transform", `translate(${radius + 20}, ${-radius})`);
    
    categories.forEach((category, i) => {
      const legendRow = legend.append("g")
        .attr("transform", `translate(0, ${i * 20})`);
      
      legendRow.append("rect")
        .attr("width", 10)
        .attr("height", 10)
        .style("fill", colorScale(category));
      
      legendRow.append("text")
        .attr("x", 20)
        .attr("y", 10)
        .attr("text-anchor", "start")
        .style("font-size", "12px")
        .style("fill", "white")
        .text(category);
    });
    
  }, []);
  
  return (
    <section id="skills" className="py-20 bg-dark-light relative">
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
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Skill Categories */}
          <div className="lg:col-span-2 glass p-8">
            {categories.map((category) => (
              <div key={category} className="mb-8 last:mb-0">
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
          
          {/* Radar Chart */}
          <div className="lg:col-span-3 flex justify-center items-center glass p-8">
            <div className="radar-chart-container">
              <svg ref={radarChartRef} className="w-full max-w-lg"></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
