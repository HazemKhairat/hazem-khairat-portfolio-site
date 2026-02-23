import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import hazemPhoto from "@/assets/hazem-photo.jpeg";

export function Hero() {
  return (
    <section
      id="cover"
      className="min-h-screen flex items-center justify-center pb-20 pt-32"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-primary">Hazem Khairat</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-8">
              Full-Stack Developer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12">
              Building scalable web applications from front to back
            </p>
            <div className="flex justify-center md:justify-start">
              <Button className="group" size="lg" asChild>
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl" style={{ aspectRatio: '1/1' }}>
              <img
                src={hazemPhoto}
                alt="Hazem Khairat"
                width={384}
                height={384}
                loading="eager"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
