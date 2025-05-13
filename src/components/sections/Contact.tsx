
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a question or want to work together? Feel free to contact me!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 items-start">
          <div>
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Here's how you can reach me
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="mailto:hazemkhairat4@gmail.com"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <span>hazemkhairat4@gmail.com</span>
                </a>
                
                <a
                  href="tel:+201144260150"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <span>(+20)1144260150</span>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/hazem-khairat-684538284/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <span>LinkedIn</span>
                </a>
                
                <a
                  href="https://github.com/HazemKhairat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <span>GitHub</span>
                </a>
                
                <a
                  href="https://leetcode.com/u/hazemkhairat4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <div className="bg-primary/10 p-3 rounded-full">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary"
                    >
                      <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.111.744 1.715.744.604 0 1.186-.244 1.634-.69.445-.446.685-1.067.685-1.695 0-.615-.249-1.205-.683-1.634l-2.713-2.655c-.466-.467-1.111-.662-1.823-.662h-5.575c-.712 0-1.357.195-1.824.662l-4.319 4.38c-.467.467-.702 1.111-.702 1.823s.235 1.357.702 1.824l4.319 4.38c.467.466 1.112.662 1.824.662h5.575c.712 0 1.357-.196 1.823-.662l2.697-2.606c.514-.515 1.111-.744 1.715-.744.604 0 1.186.244 1.634.69.445.445.685 1.067.685 1.695 0 .615-.249 1.205-.683 1.634l-2.713 2.655c-.466.467-1.111.662-1.823.662h-5.575c-.712 0-1.357-.195-1.824-.662l-4.319-4.38c-.467-.467-.702-1.111-.702-1.823s.235-1.357.702-1.824l4.319-4.38c.467-.466 1.112-.662 1.824-.662h5.575c.712 0 1.357.196 1.823.662l2.697 2.606c.514.515 1.111.744 1.715.744.604 0 1.186-.244 1.634-.69.445-.445.685-1.067.685-1.695 0-.615-.249-1.205-.683-1.634l-2.713-2.655c-.466-.467-1.111-.662-1.823-.662h-5.575c-.712 0-1.357.195-1.824.662l-4.319 4.38c-.467.467-.702 1.111-.702 1.823s.235 1.357.702 1.824l4.319 4.38c.467.466 1.112.662 1.824.662h5.575c.712 0 1.357-.196 1.823-.662l2.697-2.606c.514-.515 1.111-.744 1.715-.744.604 0 1.186.244 1.634.69.445.445.685 1.067.685 1.695 0 .615-.249 1.205-.683 1.634z" />
                    </svg>
                  </div>
                  <span>LeetCode</span>
                </a>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>
                  I'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      rows={5}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
