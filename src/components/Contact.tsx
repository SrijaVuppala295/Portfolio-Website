
import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    status: 'idle' | 'sending' | 'success' | 'error';
    message: string;
  }>({
    status: 'idle',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Set loading state
    setFormStatus({
      status: 'sending',
      message: 'Sending message...'
    });
    
    // Simulate form submission (replace with actual backend integration)
    setTimeout(() => {
      // Success!
      setFormStatus({
        status: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Real-time update notification would go here (Firebase, etc.)
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-neon-green mx-auto"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-dark border border-neon-green/20 rounded-lg focus:outline-none focus:border-neon-green transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-dark border border-neon-green/20 rounded-lg focus:outline-none focus:border-neon-green transition-colors"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 bg-dark border border-neon-green/20 rounded-lg focus:outline-none focus:border-neon-green transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={6} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-dark border border-neon-green/20 rounded-lg resize-none focus:outline-none focus:border-neon-green transition-colors"
                  required
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="btn btn-primary w-full flex items-center justify-center"
                  disabled={formStatus.status === 'sending'}
                >
                  {formStatus.status === 'sending' ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2" size={18} />
                      Send Message
                    </span>
                  )}
                </button>
              </div>
              
              {formStatus.status === 'success' && (
                <div className="p-4 bg-neon-green/10 border border-neon-green rounded-lg text-neon-green text-center">
                  {formStatus.message}
                </div>
              )}
              
              {formStatus.status === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-500 text-center">
                  {formStatus.message}
                </div>
              )}
            </form>
            
            <div className="mt-8 pt-8 border-t border-neon-green/20 text-center">
              <p className="text-muted-foreground mb-4">
                Prefer email? Reach out directly:
              </p>
              <a 
                href="mailto:your.email@example.com" 
                className="inline-flex items-center text-neon-green hover:underline"
              >
                <Mail className="mr-2" size={18} />
                your.email@example.com
              </a>
            </div>
          </div>
          
          <div className="mt-12 text-center text-muted-foreground text-sm">
            <p>
              For real-time updates, this form would be connected to a database like Firebase or a server-side implementation.
              To implement this functionality, you would need to set up a backend or use a service like Firebase Firestore.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
