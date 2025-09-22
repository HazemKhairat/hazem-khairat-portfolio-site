
import { Card, CardContent } from "@/components/ui/card";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    skills: ["C++", "Python", "JavaScript", "TypeScript", "PHP", "Java", "SQL"],
  },
  {
    title: "Web Development",
    skills: ["HTML5", "CSS3", "Bootstrap", "Laravel", "Angular", "MySQL"],
  },
  {
    title: "Core Concepts",
    skills: ["MVC", "RESTful APIs", "Agile", "OOP", "Data Structures", "Algorithms"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Linux", "Postman", "Swagger", "Docker"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">
          Technologies and concepts I've worked with
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-4 text-center">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="skill-badge"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
