
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
    setFormStatus({ status: 'sending', message: "Sending your message..." });
    setTimeout(() => {
      setFormStatus({ status: 'success', message: "Thank you! I'll get back to you soon." });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1100);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Get In Touch</h2>
          <div className="h-1 w-20 bg-neon-green mx-auto"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Reach out with ideas, collaboration offers, or just say hi!
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
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
                  placeholder="Reason for contacting"
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
                  placeholder="Type your message here..."
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
                    <span className="flex items-center">Sending...</span>
                  ) : (
                    <span className="flex items-center"><Send className="mr-2" size={18} />Send Message</span>
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
              For real-time updates for each contact message, connect this form to a backend (e.g. Supabase, Firebase) so new messages instantly display to you. 
              <span className="block mt-1">
                <strong>Recommended:</strong> Activate Supabase integration using the green button above for frontend-to-backend messaging!
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
