import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Github, Linkedin, Mail, Phone, MessageSquare } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

interface Message {
  name: string;
  email: string;
  message: string;
  date: string;
}

function getMessages(): Message[] {
  try {
    return JSON.parse(localStorage.getItem("portfolio_messages") || "[]");
  } catch { return []; }
}

function saveMessage(msg: Message) {
  const messages = getMessages();
  messages.unshift(msg);
  localStorage.setItem("portfolio_messages", JSON.stringify(messages));
}

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [messages, setMessages] = useState<Message[]>(getMessages());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const newMsg: Message = { ...formData, date: new Date().toLocaleString() };
    saveMessage(newMsg);
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setMessages(getMessages());
      setIsSubmitting(false);
    }, 800);
  };

  const contactLinks = [
    { href: "mailto:hazemkhairat4@gmail.com", icon: Mail, label: "hazemkhairat4@gmail.com" },
    { href: "tel:+201144260150", icon: Phone, label: "(+20)1144260150" },
    { href: "https://www.linkedin.com/in/hazem-khairat-684538284/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://github.com/HazemKhairat", icon: Github, label: "GitHub" },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Have a question or want to work together? Feel free to contact me!</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 items-start">
          <AnimatedSection delay={0.1}>
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Here's how you can reach me</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                  >
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span>{label}</span>
                  </a>
                ))}
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Send Me a Message</CardTitle>
                  <CardDescription>I'll get back to you as soon as possible</CardDescription>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => { setShowMessages(!showMessages); setMessages(getMessages()); }}
                  className="relative"
                >
                  <MessageSquare className="h-5 w-5" />
                  {messages.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {messages.length}
                    </span>
                  )}
                </Button>
              </CardHeader>
              <CardContent>
                {showMessages ? (
                  <div className="space-y-3 max-h-80 overflow-y-auto">
                    {messages.length === 0 ? (
                      <p className="text-muted-foreground text-center py-4">No messages yet.</p>
                    ) : (
                      messages.map((msg, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="p-3 rounded-lg bg-secondary/80 border text-left"
                        >
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium text-sm">{msg.name}</span>
                            <span className="text-xs text-muted-foreground">{msg.date}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">{msg.email}</p>
                          <p className="text-sm mt-1">{msg.message}</p>
                        </motion.div>
                      ))
                    )}
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your email address" required />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                      <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your message" rows={5} required />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
