import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 bg-secondary/50">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Academic background and learning journey</p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-2xl mx-auto mt-10">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">
                      Faculty of Computers and Artificial Intelligence
                    </CardTitle>
                    <p className="text-muted-foreground mt-1">Information Technology</p>
                    <p className="text-muted-foreground mt-1">GPA: 3.2/4.0</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Sep 2022 – Jun 2026 • Beni-Suef University, Egypt
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Relevant Courses: Web Development, Data Structures, Algorithms, OOP, Databases.
                </p>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
