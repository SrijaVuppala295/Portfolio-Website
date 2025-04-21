
import { useState } from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    setFormStatus({ status: 'sending', message: "Sending your message..." });
    setTimeout(() => {
      setFormStatus({ status: 'success', message: "Thank you for reaching out!" });
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 900);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Contact Me</h2>
          <div className="h-1 w-20 bg-neon-green mx-auto"></div>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Have a question or want to connect? Fill out the form and I'll reply soon!
          </p>
        </div>
        <div className="max-w-xl mx-auto">
          <div className="glass p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  placeholder="Your Name"
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
                  placeholder="you@email.com"
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
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  className="w-full p-3 bg-dark border border-neon-green/20 rounded-lg resize-none focus:outline-none focus:border-neon-green transition-colors"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={formStatus.status === 'sending'}
              >
                {formStatus.status === 'sending' ? "Sending..." : "Send Message"}
              </button>

              {formStatus.status === 'success' && (
                <div className="p-3 bg-neon-green/10 border border-neon-green rounded-lg text-neon-green text-center mt-4">
                  {formStatus.message}
                </div>
              )}
            </form>
            <div className="mt-6 text-center">
              <p className="text-muted-foreground mb-2">
                Prefer email? Contact:
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
        </div>
      </div>
    </section>
  );
};

export default Contact;

