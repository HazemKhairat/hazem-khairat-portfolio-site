
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
    title: "Course Management System",
    description: "Developed an MVC-based course management system for efficient course handling with secure user authentication and role-based authorization.",
    technologies: ["Laravel", "MySQL", "Bootstrap", "MVC", "PHP"],
    githubLink: "https://github.com/HazemKhairat/course-management-system",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    title: "File Management System",
    description: "Built with Laravel and Breeze for user authentication. Implements authentication, authorization, and file access control. Users can upload, view, and download public/shared files.",
    technologies: ["Laravel", "MySQL", "Breeze", "File Management", "PHP"],
    githubLink: "https://github.com/HazemKhairat/user-drive-system",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
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
              <div className="h-48 overflow-hidden">
                <img
                  src={`${project.image}?w=600&h=300&auto=format&fit=crop`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
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
