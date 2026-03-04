import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Trophy, Award, ExternalLink } from "lucide-react";

interface Achievement {
  title: string;
  description: string;
  icon: "trophy" | "award";
}

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  link: string;
}

const achievements: Achievement[] = [
  {
    title: "Knight on LeetCode",
    description: "Rating of 1868 — Top 5% globally among 800K+ developers.",
    icon: "trophy",
  },
  {
    title: "LeetCode Weekly Contest 468",
    description: "Ranked in the top 1.6% (582nd out of 36,305 participants worldwide).",
    icon: "trophy",
  },
  {
    title: "1,500+ Problems Solved",
    description: "Solved 1,500+ algorithmic problems using Python and C++.",
    icon: "award",
  },
  {
    title: "SQL Golden Badge — HackerRank",
    description: "Demonstrating advanced SQL query writing skills.",
    icon: "award",
  },
];

const certificates: Certificate[] = [
  {
    title: "Full-Stack Web Development",
    issuer: "Instant (9 months Diploma)",
    date: "2024",
    link: "https://drive.google.com/file/d/1WdejMTGIKsyzFuycKg4xFvN6wS4MD1sy/view",
  },
  {
    title: "Version Control with Git and GitHub",
    issuer: "Coursera",
    date: "2024",
    link: "https://drive.google.com/file/d/17GyA1XAMDO0pKUqfCkmQEEJddH0mxwcR/view",
  },
  {
    title: "Linux Commands and Shell Scripting",
    issuer: "Coursera",
    date: "2024",
    link: "https://drive.google.com/file/d/1T7wsTwesJ7mho84zW7_-XBi4zaXbN3AS/view",
  },
];

const IconMap = { trophy: Trophy, award: Award };

export function Experience() {
  return (
    <section id="achievement" className="py-20">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">Competitive programming milestones and certifications</p>
        </AnimatedSection>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {achievements.map((item, index) => {
            const Icon = IconMap[item.icon];
            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="card-hover h-full">
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="bg-primary/10 p-3 rounded-full shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Certifications */}
        <AnimatedSection delay={0.3}>
          <h3 className="text-2xl font-bold mt-16 mb-8 text-center">Certifications</h3>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <AnimatedSection key={index} delay={0.3 + index * 0.1}>
              <Card className="card-hover h-full">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <Badge variant="outline">{cert.date}</Badge>
                  </div>
                  <CardDescription>{cert.issuer}</CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    View Certificate
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
