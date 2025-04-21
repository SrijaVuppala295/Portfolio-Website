
import { useState } from 'react';

const BlogPost = ({ post }: { post: any }) => {
  return (
    <div className="glass h-full group">
      <div className="overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <span className="text-xs bg-neon-green/20 text-neon-green px-2 py-1 rounded-full">{post.category}</span>
          <span className="text-xs text-muted-foreground ml-auto">{post.date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.summary}</p>
        <a href="#" className="text-neon-green text-sm font-medium hover:underline">Read More</a>
      </div>
    </div>
  );
};

const Blog = () => {
  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: "Introduction to Machine Learning with Python",
      summary: "Learn the basics of machine learning with Python and scikit-learn through practical examples and code snippets.",
      date: "April 15, 2025",
      category: "Machine Learning",
      image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&w=800"
    },
    {
      id: 2,
      title: "Building Responsive Web Apps with React and Tailwind",
      summary: "A comprehensive guide to creating beautiful responsive web applications using React and Tailwind CSS.",
      date: "March 22, 2025",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800"
    },
    {
      id: 3,
      title: "Deep Learning for Computer Vision",
      summary: "Exploring neural network architectures for image classification, object detection, and segmentation tasks.",
      date: "February 10, 2025",
      category: "Deep Learning",
      image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?auto=format&fit=crop&w=800"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-dark-light relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-neon-glow"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-neon-glow"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Blog</h2>
          <div className="h-1 w-20 bg-neon-green mx-auto"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Sharing insights, tutorials, and thoughts on web development, machine learning, and more.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="btn btn-outline">View All Posts</a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
