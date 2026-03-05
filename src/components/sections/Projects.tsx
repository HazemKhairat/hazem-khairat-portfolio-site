import { Button } from "@/components/ui/button";
import {
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Github } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import myDriveAppImg from "@/assets/mydrive-app.png";
import sleekShopImg from "@/assets/sleekshop-cover.png";
import frontendEvalImg from "@/assets/frontendeval-labs.png";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Sleek Shop",
    description:
      "Built a responsive Angular e-commerce store with user authentication and secure login functionality. Implemented product catalog with search and filtering, and a shopping cart with quantity control. Optimized initial load performance, reducing LCP by 47%.",
    technologies: ["Angular", "TypeScript", "Tailwind", "CI/CD"],
    githubLink: "https://github.com/HazemKhairat/angular-ecommerce",
    demoLink: "https://hazemkhairat.github.io/angular-ecommerce/#/",
    image: sleekShopImg,
  },
  {
    title: "MyDrive App",
    description:
      "Developed and deployed a file management system using Laravel with role-based access control. Designed RESTful APIs with Postman and Swagger. Built an analytics dashboard using Eloquent and SQL.",
    technologies: ["Laravel", "MySQL", "PHP", "RESTful APIs"],
    githubLink: "https://github.com/HazemKhairat/user-drive-system",
    demoLink: "https://mydrive1.great-site.net/",
    image: myDriveAppImg,
  },
  {
    title: "FrontendEval Labs",
    description:
      "Built a comprehensive collection of 22 interactive web applications mastering Vanilla JavaScript. Developed a Snake game using Linked List for O(1) movement. Implemented Debouncing, Lazy Loading, and more.",
    technologies: ["JavaScript", "HTML5", "CSS3", "DOM"],
    githubLink: "https://github.com/HazemKhairat",
    image: frontendEvalImg,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Here are some of the projects I've worked on</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card className="overflow-hidden card-hover h-full flex flex-col">
                {project.image && (
                  <div className="h-48 overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                  {project.demoLink && (
                    <Button size="sm" asChild>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <Globe className="mr-2 h-4 w-4" /> Website
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
