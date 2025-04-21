import { useState } from 'react';
import { Github, ExternalLink, Youtube } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  live?: string;
  youtube?: string;
  techStack: string[];
  category: 'web' | 'ml' | 'dl' | 'ai';
  colab?: string;
};

const projects: Project[] = [
  // Web Development Projects
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&h=500",
    github: "https://github.com/yourusername/ecommerce-platform",
    live: "https://ecommerce-demo.example.com",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe"],
    category: "web"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates using Socket.io. Includes features like task assignment, priority setting, and progress tracking.",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=800&h=500",
    github: "https://github.com/yourusername/task-manager",
    live: "https://task-app.example.com",
    techStack: ["React", "TypeScript", "Node.js", "Socket.io", "PostgreSQL"],
    category: "web"
  },
  {
    id: 3,
    title: "Developer Portfolio",
    description: "A modern, responsive developer portfolio website built with React and Tailwind CSS. Featuring dark mode, animations, and contact form.",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=800&h=500",
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourusername.dev",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    category: "web"
  },
  {
    id: 4,
    title: "Real-time Chat Application",
    description: "A real-time messaging platform with private and group chats. Features include message encryption, file sharing, and message history.",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&h=500",
    github: "https://github.com/yourusername/chat-app",
    live: "https://chat.example.com",
    techStack: ["React", "Firebase", "WebRTC", "Redux"],
    category: "web"
  },
  {
    id: 5,
    title: "Blog & CMS",
    description: "A fully-featured blog and content management system. Includes rich text editing, image uploads, categories, tags, and SEO optimization.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&h=500",
    github: "https://github.com/yourusername/blog-cms",
    live: "https://blog.example.com",
    techStack: ["Next.js", "GraphQL", "Prisma", "PostgreSQL", "AWS S3"],
    category: "web"
  },
  
  // Machine Learning Projects
  {
    id: 6,
    title: "Image Classification Model",
    description: "An image classification model trained on ImageNet dataset using CNNs to identify objects in images with high accuracy.",
    image: "https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=800&h=500",
    github: "https://github.com/yourusername/image-classifier",
    colab: "https://colab.research.google.com/drive/your_colab_notebook_id_image_classifier",
    techStack: ["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib"],
    category: "ml"
  },
  {
    id: 7,
    title: "Sentiment Analysis Tool",
    description: "A NLP-based sentiment analysis tool for analyzing customer reviews and feedback. Includes visualization dashboard.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500",
    github: "https://github.com/yourusername/sentiment-analysis",
    colab: "https://colab.research.google.com/drive/your_colab_notebook_id_sentiment_analysis",
    techStack: ["Python", "NLTK", "scikit-learn", "Flask", "React"],
    category: "ml"
  },
  {
    id: 8,
    title: "Stock Price Predictor",
    description: "Time series forecasting model for stock price prediction using LSTM networks and historical market data.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&h=500",
    github: "https://github.com/yourusername/stock-predictor",
    colab: "https://colab.research.google.com/drive/your_colab_notebook_id_stock_predictor",
    techStack: ["Python", "Pandas", "TensorFlow", "Matplotlib", "Yahoo Finance API"],
    category: "ml"
  },
  {
    id: 9,
    title: "Recommendation System",
    description: "A collaborative filtering-based recommendation system for suggesting products based on user behavior and preferences.",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=800&h=500",
    github: "https://github.com/yourusername/recommendation-system",
    colab: "https://colab.research.google.com/drive/your_colab_notebook_id_recommendation_system",
    techStack: ["Python", "TensorFlow", "Surprise", "NumPy", "Flask"],
    category: "ml"
  },
  {
    id: 10,
    title: "Anomaly Detection System",
    description: "Machine learning model for detecting anomalies in network traffic data to identify potential security threats.",
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&h=500",
    github: "https://github.com/yourusername/anomaly-detection",
    colab: "https://colab.research.google.com/drive/your_colab_notebook_id_anomaly_detection",
    techStack: ["Python", "scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    category: "ml"
  },
  
  // Deep Learning Projects
  {
    id: 11,
    title: "Neural Style Transfer",
    description: "Implementation of neural style transfer algorithm to apply artistic styles to images using VGG19 network.",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=800&h=500",
    github: "https://github.com/yourusername/neural-style-transfer",
    colab: "https://colab.research.google.com/drive/your_colab_notebook_id_neural_style_transfer",
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy"],
    category: "dl"
  },
  {
    id: 12,
    title: "Object Detection System",
    description: "Real-time object detection system using YOLO algorithm for identifying and tracking objects in video streams.",
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&h=500",
    github: "https://github.com/yourusername/object-detection",
    colab: "https://colab.research.google.com/drive/your_colab_notebook_id_object_detection",
    techStack: ["Python", "PyTorch", "OpenCV", "CUDA", "Darknet"],
    category: "dl"
  },
  {
    id: 13,
    title: "Language Translation Model",
    description: "Sequence-to-sequence model for language translation using attention mechanism and Transformer architecture.",
    image: "https://images.unsplash.com/photo-1544163871-71163c8e13e0?auto=format&fit=crop&w=800&h=500",
    github: "https://github.com/yourusername/language-translation",
    colab: "https://colab.research.google.com/drive/your_colab_notebook_id_language_translation",
    techStack: ["Python", "TensorFlow", "Hugging Face", "NLTK"],
    category: "dl"
  },
  {
    id: 14,
    title: "GANs for Image Generation",
    description: "Implementation of Generative Adversarial Networks for creating realistic synthetic images from noise.",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&h=500",
    github: "https://github.com/yourusername/gans-image-generation",
    colab: "https://colab.research.google.com/drive/your_colab_notebook_id_gans_image_generation",
    techStack: ["Python", "PyTorch", "NumPy", "Matplotlib", "CUDA"],
    category: "dl"
  },
  {
    id: 15,
    title: "Speech Recognition System",
    description: "Deep learning-based speech recognition system using recurrent neural networks and spectrograms.",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=800&h=500",
    github: "https://github.com/yourusername/speech-recognition",
    colab: "https://colab.research.google.com/drive/your_colab_notebook_id_speech_recognition",
    techStack: ["Python", "TensorFlow", "Librosa", "SoundFile", "NumPy"],
    category: "dl"
  },
  
  // AI Project
  {
    id: 16,
    title: "AI Health Assistant",
    description: "An AI-powered health assistant that provides personalized health recommendations, medication reminders, and symptom analysis.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&h=500",
    github: "https://github.com/yourusername/health-assistant",
    live: "https://health-ai.example.com",
    colab: "https://colab.research.google.com/drive/your_colab_notebook_id_health_assistant",
    techStack: ["Python", "TensorFlow", "Flask", "React", "NLP", "MongoDB"],
    category: "ai"
  },
];

const ProjectCard = ({ project }: { project: Project & { colab?: string } }) => {
  return (
    <div className="glass h-full group">
      <div className="overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 bg-dark/80 rounded-full hover:bg-neon-green hover:text-dark transition-colors"
              aria-label={`View ${project.title} source code`}
            >
              <Github size={20} />
            </a>
          )}
          {project.live && (
            <a 
              href={project.live} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 bg-dark/80 rounded-full hover:bg-neon-green hover:text-dark transition-colors"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink size={20} />
            </a>
          )}
          {project.colab && (
            <a 
              href={project.colab}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-dark/80 rounded-full hover:bg-neon-green hover:text-dark transition-colors"
              aria-label={`Open ${project.title} in Google Colab`}
            >
              <ExternalLink size={20} />
            </a>
          )}
          {project.youtube && (
            <a 
              href={project.youtube} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 bg-dark/80 rounded-full hover:bg-neon-green hover:text-dark transition-colors"
              aria-label={`Watch ${project.title} demo video`}
            >
              <Youtube size={20} />
            </a>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-neon-green">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="px-2 py-1 bg-dark-light rounded-full text-xs">
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-1 bg-dark-light rounded-full text-xs">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'web' | 'ml' | 'dl' | 'ai'>('all');
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-neon-green mx-auto"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            A collection of my recent projects spanning web development, machine learning, 
            deep learning, and artificial intelligence.
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {['all', 'web', 'ml', 'dl', 'ai'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as any)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category 
                  ? 'bg-neon-green text-dark' 
                  : 'bg-dark-light text-foreground hover:bg-neon-green/20'
              }`}
            >
              {category === 'all' ? 'All Projects' : 
               category === 'web' ? 'Web Dev' : 
               category === 'ml' ? 'Machine Learning' :
               category === 'dl' ? 'Deep Learning' : 'AI'}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
