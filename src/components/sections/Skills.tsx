import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Code2, Globe, Lightbulb, Wrench } from "lucide-react";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  color: string; // tailwind bg class using design tokens
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: <Code2 className="h-6 w-6" />,
    skills: [
      { name: "Python", color: "bg-blue-500/15 text-blue-600 dark:text-blue-400" },
      { name: "JavaScript", color: "bg-yellow-500/15 text-yellow-600 dark:text-yellow-400" },
      { name: "TypeScript", color: "bg-sky-500/15 text-sky-600 dark:text-sky-400" },
      { name: "C++", color: "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400" },
      { name: "Java", color: "bg-red-500/15 text-red-600 dark:text-red-400" },
      { name: "SQL", color: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" },
      { name: "PHP", color: "bg-violet-500/15 text-violet-600 dark:text-violet-400" },
    ],
  },
  {
    title: "Web Development",
    icon: <Globe className="h-6 w-6" />,
    skills: [
      { name: "HTML5", color: "bg-orange-500/15 text-orange-600 dark:text-orange-400" },
      { name: "CSS3", color: "bg-blue-500/15 text-blue-600 dark:text-blue-400" },
      { name: "Bootstrap", color: "bg-purple-500/15 text-purple-600 dark:text-purple-400" },
      { name: "Tailwind", color: "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400" },
      { name: "Angular", color: "bg-red-500/15 text-red-600 dark:text-red-400" },
      { name: "Laravel", color: "bg-rose-500/15 text-rose-600 dark:text-rose-400" },
      { name: "jQuery", color: "bg-blue-500/15 text-blue-600 dark:text-blue-400" },
      { name: "MySQL", color: "bg-sky-500/15 text-sky-600 dark:text-sky-400" },
    ],
  },
  {
    title: "Core Concepts",
    icon: <Lightbulb className="h-6 w-6" />,
    skills: [
      { name: "Data Structures", color: "bg-teal-500/15 text-teal-600 dark:text-teal-400" },
      { name: "Algorithms", color: "bg-green-500/15 text-green-600 dark:text-green-400" },
      { name: "OOP", color: "bg-amber-500/15 text-amber-600 dark:text-amber-400" },
      { name: "MVC", color: "bg-fuchsia-500/15 text-fuchsia-600 dark:text-fuchsia-400" },
      { name: "RESTful APIs", color: "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400" },
      { name: "SDLC", color: "bg-slate-500/15 text-slate-600 dark:text-slate-400" },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench className="h-6 w-6" />,
    skills: [
      { name: "Git", color: "bg-orange-500/15 text-orange-600 dark:text-orange-400" },
      { name: "GitHub", color: "bg-gray-500/15 text-gray-600 dark:text-gray-400" },
      { name: "Docker", color: "bg-blue-500/15 text-blue-600 dark:text-blue-400" },
      { name: "Linux", color: "bg-yellow-500/15 text-yellow-600 dark:text-yellow-400" },
      { name: "Postman", color: "bg-orange-500/15 text-orange-600 dark:text-orange-400" },
      { name: "CI/CD", color: "bg-green-500/15 text-green-600 dark:text-green-400" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">Technologies and concepts I've worked with</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card className="card-hover h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center gap-2 mb-4 text-primary">
                    {category.icon}
                    <h3 className="text-xl font-medium">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium ${skill.color} border border-current/10`}
                        whileHover={{ scale: 1.08 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
