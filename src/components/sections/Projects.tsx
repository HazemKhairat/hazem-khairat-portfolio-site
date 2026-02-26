import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import courseManagementImg from "@/assets/course-management.png";
import myDriveAppImg from "@/assets/mydrive-app.png";
import sleekShopImg from "@/assets/sleekshop-cover.png";
interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink?: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Sleek Shop",
    description: "Built a responsive Angular e-commerce store with user authentication and secure login functionality. Implemented product catalog with search and filtering, and a shopping cart with quantity control.",
    technologies: ["Angular", "JavaScript", "TypeScript", "Tailwind", "CI/CD", "Ecommerce"],
    githubLink: "https://github.com/HazemKhairat/angular-ecommerce",
    demoLink: "https://hazemkhairat.github.io/angular-ecommerce/#/",
    image: sleekShopImg
  },
  {
    title: "Course Management System",
    description: "Developed an MVC-based course management system for efficient course handling with secure user authentication and role-based authorization.",
    technologies: ["Laravel", "MySQL", "Bootstrap", "MVC", "PHP"],
    githubLink: "https://github.com/HazemKhairat/course-management-system",
    image: courseManagementImg
  },
  {
    title: "MyDrive App",
    description: "Built with Laravel and Breeze for user authentication. Implements authentication, authorization, and file access control. Users can upload, view, and download public/shared files.",
    technologies: ["Laravel", "MySQL", "Breeze", "File Management", "PHP"],
    githubLink: "https://github.com/HazemKhairat/user-drive-system",
    image: myDriveAppImg
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden card-hover"
            >
              <div className="h-48 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
                {project.demoLink && (
                  <Button size="sm" asChild>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
