import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import hazemPhoto from "@/assets/hazem-photo.jpeg";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pb-20 pt-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-base font-semibold mb-6">
              <Terminal className="h-5 w-5" />
              Full-Stack Developer
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-primary">Hazem Khairat</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
              Building scalable web applications from front to back
            </p>

            <div className="flex justify-center md:justify-start gap-3 mb-8">
              {[
                { href: "https://www.linkedin.com/in/hazem-khairat-684538284/", icon: Linkedin, label: "LinkedIn" },
                { href: "https://github.com/HazemKhairat", icon: Github, label: "GitHub" },
                { href: "mailto:hazemkhairat4@gmail.com", icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
              <motion.a
                href="https://leetcode.com/u/hazemkhairat4/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LeetCode"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                </svg>
              </motion.a>
            </div>

            <div className="flex justify-center md:justify-start gap-4">
              <Button className="group" size="lg" asChild>
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary shadow-2xl shadow-primary/20">
              <img src={hazemPhoto} alt="Hazem Khairat" className="object-cover w-full h-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
