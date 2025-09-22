
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section
      id="cover"
      className="min-h-screen flex items-center justify-center pb-20 pt-32"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Hazem Khairat</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-8">
            Full-Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12">
            Building scalable web applications from front to back
          </p>
          <div className="flex justify-center">
            <Button className="group" size="lg" asChild>
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
