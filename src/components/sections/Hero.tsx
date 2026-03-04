import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";
import hazemPhoto from "@/assets/hazem-photo.jpeg";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pb-20 pt-32"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Terminal className="h-4 w-4" />
              Full-Stack Developer
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-primary">Hazem Khairat</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
              Building scalable web applications from front to back
            </p>
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
          </div>
          <div className="flex-shrink-0">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary">
              <img
                src={hazemPhoto}
                alt="Hazem Khairat"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
