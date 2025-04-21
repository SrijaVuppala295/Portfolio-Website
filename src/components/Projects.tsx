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
  {
    id: 1,
    title: "AI Career Coach - SensAI",
    description: "An AI-powered career guidance platform that offers resume analysis, personalized job suggestions, and interview prep tools using NLP and ML models.",
    image: "/banner.jpeg", // AI/tech themed
    github: "https://github.com/SrijaVuppala295/SensAI",
    // live: "https://sensai.example.com",
    techStack: ["Next.js", "Node.js", "TailwindCSS","PrismaORM", "Gemini API", "NeonDB"],
    category: "web"
  },
  {
    id: 2,
    title: "Charity & Fundraising Website - CompassionConnect",
    description: "A platform to connect charities and donors with seamless fundraising tools, donation tracking, and community features.",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&h=500", // community/help theme
    github: "https://github.com/SrijaVuppala295/Compassion-Connect",
    // live: "https://compassionconnect.example.com",
    techStack: ["Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    category: "web"
  },
  {
    id: 3,
    title: "Food Ordering Website - Tasteo",
    description: "A responsive food ordering platform with real-time menu updates, location-based search, and secure checkout.",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&h=500", // food theme
    github: "https://github.com/SrijaVuppala295/Tasteo-FoodOrderingWebsite",
    // live: "https://tasteo.example.com",
    techStack: ["HTML", "CSS", "JS", "Node.js", "Express.js", "MongoDB"],
    category: "web"
  },
  {
    id: 4,
    title: "SharkEdge - Tech Driven Solutions for Client Success",
    description: "A corporate tech consulting site offering solutions in AI, data analytics, and custom software development for enterprise clients.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&h=500", // corporate tech
    github: "https://github.com/SrijaVuppala295/SharkEdge-Media",
    live: "https://sharkedge.media",
    techStack: ["HTML","React", "TypeScript", "TailwindCSS", "Shadcn", "Node.js"],
    category: "web"
  },
  {
    id: 5,
    title: "AI Finance Platform - Welth (ONGOING PROJECT)",
    description: " An intelligent finance assistant for portfolio tracking, expense management, and personalized investment tips. Currently in development.",
    image: "/banner (1).jpeg", 
    github: "https://github.com/yourusername/welth",
    // live: "https://welth.example.com",
    techStack: ["Next.js", "Node.js", "TailwindCSS","PrismaORM", "Gemini API", "NeonDB"],
    category: "web"
  },
  
  // Machine Learning Projects
  {
    id: 6,
    title: "Sonar Rock vs Mine Classifier",
    description: "A binary classification model to differentiate between sonar signals bounced off rocks and mines using a neural network.",
    image: "/rock.jpg", // sonar/waves/ocean
    github: "https://github.com/SrijaVuppala295/Sonar-rock-vs-Mine",
    // colab: "https://colab.research.google.com/drive/your_colab_notebook_id_sonar",
    techStack: ["Python", "scikit-learn", "NumPy", "Matplotlib", "Pandas","Logistic Regression"],
    category: "ml"
  },
  {
    id: 7,
    title: "Credit Card Fraud Detection",
    description: "A machine learning model to detect fraudulent transactions using anomaly detection and classification techniques on imbalanced data.",
    image: "credit.jpeg", // finance/security theme
    github: "https://github.com/SrijaVuppala295/Credit-Card-Fraud-Detection",
    // colab: "https://colab.research.google.com/drive/your_colab_notebook_id_fraud_detection",
    techStack: ["Python", "Pandas", "scikit-learn","Matplotlib", "Seaborn","Logistic Regression"],
    category: "ml"
  },
  {
    id: 8,
    title: "Heart Disease Prediction",
    description: "A predictive analytics model that uses patient health indicators to assess the risk of heart disease.",
    image: "heart.jpeg", // healthcare theme
    github: "https://github.com/SrijaVuppala295/Heart-Disease-Prediction",
    // colab: "https://colab.research.google.com/drive/your_colab_notebook_id_heart",
    techStack: ["Python", "scikit-learn", "Pandas", "Logistic Regression", "Matplotlib"],
    category: "ml"
  },
  {
    id: 9,
    title: "House Price Prediction",
    description: "A regression model that estimates house prices based on multiple features like area, location, and number of bedrooms.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&h=500", // real estate/home
    github: "https://github.com/SrijaVuppala295/House-Price-Prediction",
    // colab: "https://colab.research.google.com/drive/your_colab_notebook_id_house",
    techStack: ["Python", "Pandas", "scikit-learn", "XGBoost", "Seaborn"],
    category: "ml"
  },
  {
    id: 10,
    title: "Movie Recommendation System",
    description: "A hybrid recommendation system using collaborative filtering and content-based filtering to suggest movies users might love.",
    image: "movie.webp", // cinema/movie theme
    github: "https://github.com/SrijaVuppala295/Movie-Recommendation-System",
    // colab: "https://colab.research.google.com/drive/your_colab_notebook_id_movie",
    techStack: ["Python", "Pandas", "Numpy", "scikit-learn", "Cosine Similarity Algorithm"],
    category: "ml"
  },  
  
  // Deep Learning Projects
  {
    id: 11,
    title: "Breast Cancer Detection",
    description: "A CNN-based model for classifying histopathology images to assist in early breast cancer diagnosis.",
    image: "breast.png", // medical imagery
    github: "https://github.com/SrijaVuppala295/Breast-Cancer-Detection",
    // colab: "https://colab.research.google.com/drive/your_colab_notebook_id_breast_cancer",
    techStack: ["Python", "TensorFlow", "Keras", "DeepLearning", "Pandas"],
    category: "dl"
  },
  {
    id: 12,
    title: "Potato Disease Classification",
    description: "Deep learning model to detect and classify common potato plant diseases using leaf image data.",
    image: "/potato.jpg", // agriculture/plants
    github: "https://github.com/SrijaVuppala295/Potato-Disease-Detection",
    colab: "https://colab.research.google.com/drive/your_colab_notebook_id_potato_disease",
    techStack: ["Python", "Keras", "TensorFlow", "DeepLearning", "Matplotlib"],
    category: "dl"
  },
  {
    id: 13,
    title: "CIFAR-10 Image Classifier",
    description: "A convolutional neural network built to classify images from the CIFAR-10 dataset into 10 different categories.",
    image: "/cifar.jpeg", // toy blocks, object category
    github: "https://github.com/SrijaVuppala295/CIFAR-10-Object-Recognition",
    // colab: "https://colab.research.google.com/drive/your_colab_notebook_id_cifar10",
    techStack: ["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib"],
    category: "dl"
  },
  // {
  //   id: 14,
  //   title: "MNIST Digit Recognizer",
  //   description: "A simple and effective CNN trained on the MNIST dataset to recognize handwritten digits in real-time.",
  //   image: "/mnist.png", // handwriting
  //   github: "https://github.com/yourusername/mnist-digit-recognition",
  //   colab: "https://colab.research.google.com/drive/your_colab_notebook_id_mnist",
  //   techStack: ["Python", "Keras", "TensorFlow", "NumPy", "Matplotlib"],
  //   category: "dl"
  // },
  {
    id: 14,
    title: "Face Mask Detection",
    description: "Real-time face mask detection system using deep learning and DeepLearning to enhance public safety measures.",
    image: "/face.jpeg", // face mask
    github: "https://github.com/SrijaVuppala295/Face-Mask-Detection",
    // colab: "https://colab.research.google.com/drive/your_colab_notebook_id_mask_detection",
    techStack: ["Python", "TensorFlow", "DeepLearning", "Keras", "Haar Cascades"],
    category: "dl"
  },
  {
    id: 15,
    title: "Dog vs Cat Image Classifier",
    description: "A convolutional neural network trained to distinguish between dog and cat images with high accuracy using Kaggle dataset.",
    image: "/dog.jpeg", // dog and cat
    github: "https://github.com/SrijaVuppala295/Dog-vs-Cat-Classifier",
    // colab: "https://colab.research.google.com/drive/your_colab_notebook_id_dog_vs_cat",
    techStack: ["Python", "TensorFlow", "Keras", "Deep Learning", "NumPy"],
    category: "dl"
  },
  
  // AI Project
  {
    id: 16,
    title: "AI Health Assistant",
    description: "An AI-powered health assistant that provides personalized health recommendations, medication reminders, and symptom analysis.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&h=500",
    github: "https://github.com/SrijaVuppala295/AI-Health-Assistant",
    // live: "https://health-ai.example.com",
    // colab: "https://colab.research.google.com/drive/your_colab_notebook_id_health_assistant",
    techStack: ["Python"],
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
