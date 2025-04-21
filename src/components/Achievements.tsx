
import { Award, Medal, Trophy, ExternalLink } from "lucide-react";

const achievements = [
  {
    title: "Ranked #1 (Girls) & 8th Globally - GSSoC'25",
    description: "Secured the top rank among girls and placed 8th overall globally in GirlScript Summer of Code 2025 after consistent open-source contributions.",
    icon: Medal,
    date: "Nov 2024",
    link: "https://drive.google.com/file/d/1MhV4spndE6GY78kDpHMyWV44bEqwZ-W9/view?usp=sharing" // Replace with your actual certificate link
  },
  {
    title: "Top 100 Contributor - SWOC'25",
    description: "Achieved Top 100 status among all contributors worldwide during Script Winter of Code 2025, working on impactful technical projects.",
    icon: Award,
    date: "Mar 2025",
    link: "https://drive.google.com/file/d/10HCfhZkBGMAFZvg9KtRkjV2dTl5772zU/view?usp=sharing" // Replace with your actual certificate link
  },
  {
    title: "Winner - Hackathons & Project Expo",
    description: "Won various hackathons and project expos for innovative solutions in web development and artificial intelligence.",
    icon: Trophy,
    date: "April 2025",
    link: "https://drive.google.com/file/d/1SkDkBQkQLp16MPrTXkye4Imx4MmOxIA2/view?usp=sharing" // Replace with your actual certificate link
  }
];

const Achievements = () => (
  <section id="achievements" className="py-20 bg-dark-light relative">
    <div className="absolute top-0 left-0 right-0 h-px bg-neon-glow"></div>
    <div className="absolute bottom-0 left-0 right-0 h-px bg-neon-glow"></div>

    <div className="container mx-auto px-4">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Achievements</h2>
        <div className="h-1 w-20 bg-neon-green mx-auto"></div>
        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
          Milestones in my open source and tech journey. Click for certificates!
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        {achievements.map(({ title, description, icon: Icon, date, link }, idx) => (
          <div
            key={title}
            className="glass flex-1 min-w-[260px] max-w-sm mx-auto px-6 py-8 text-center animate-fade-in"
            style={{ animationDelay: `${idx * 0.10}s` }}
          >
            <div className="flex justify-center mb-4"><Icon className="text-neon-green" size={38} /></div>
            <h3 className="font-bold text-neon-green text-xl mb-2">{title}</h3>
            <p className="text-muted-foreground mb-4 text-sm">{description}</p>
            <span className="inline-block px-3 py-1 bg-neon-green/10 text-neon-green text-xs rounded-full mb-3">{date}</span>
            <div>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neon-green hover:underline font-semibold transition"
              >
                <ExternalLink size={16} /> View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
