
import { useState } from 'react';
import { Mail } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ status: 'sending', message: "Sending your message..." });
  
    try {
      // Create URL parameters from form data
      const formParams = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formParams.append(key, value);
      });
  
      const response = await fetch("https://script.google.com/macros/s/AKfycbwwcUZeewE2kvHAPPxH_9XjQV0tTHCxZjwLCb8I1KvVyB-4A99se7JLSS1pgP3xkIRJhg/exec", {
        method: "POST",
        body: formParams,
        // Remove the Content-Type header to let it default to application/x-www-form-urlencoded
      });
  
      const result = await response.json();
  
      if (result.result === "success") {
        setFormStatus({ status: 'success', message: result.message });
        setFormData({ name: '', email: '', message: '' });
  
        setTimeout(() => {
          setFormStatus({ status: 'idle', message: '' });
        }, 5000);
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setFormStatus({ 
        status: 'error', 
        message: error.message || "Something went wrong. Try again!" 
      });
    }
  };
  

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Contact Me</h2>
          <div className="h-1 w-20 bg-neon-green mx-auto"></div>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Questions, thoughts, or ideas? I'd love to chat! Use the form below or email me directly.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-12 max-w-3xl mx-auto glass p-10 md:p-14 rounded-2xl mt-8 shadow-lg">
          {/* Left: Form */}
          <form onSubmit={handleSubmit} className="flex-1 space-y-6 w-full md:max-w-md mx-auto">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-neon-green font-playfair">
                Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="bg-background border-neon-green/20 focus:border-neon-green"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-neon-green font-playfair">
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@email.com"
                className="bg-background border-neon-green/20 focus:border-neon-green"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-neon-green font-playfair">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                className="bg-background border-neon-green/20 focus:border-neon-green"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full mt-2"
              disabled={formStatus.status === 'sending'}
            >
              {formStatus.status === 'sending' ? "Sending..." : "Send Message"}
            </button>
            {formStatus.status === 'success' && (
              <div className="p-3 bg-neon-green/10 border border-neon-green rounded-lg text-neon-green text-center mt-4 transition">
                {formStatus.message}
              </div>
            )}
          </form>
          {/* Right: Email Info */}
          <div className="flex-1 flex flex-col items-center justify-center text-center gap-5 border-t md:border-t-0 md:border-l border-neon-green/20 pt-8 md:pt-0 md:pl-12">
            <Mail size={40} className="text-neon-green mb-2" />
            <span className="text-lg font-semibold text-muted-foreground">Prefer Email?</span>
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center text-neon-green font-bold hover:underline"
            >
             srijavuppala295@gmail.com
            </a>
            <div className="text-sm text-muted-foreground">
              I aim to reply within 24 hours!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
