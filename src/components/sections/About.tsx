
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Layout, Server } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              I'm a FullStack developer with one year of experience in building web applications using technologies such as Laravel, MySQL and Angular. My competitive programming background has sharpened my problem-solving skills and algorithmic thinking.
            </p>
            <p className="text-lg">
              Currently studying Information Technology at the Faculty of Computers and Artificial Intelligence (GPA: 3.2/4.0), I'm passionate about delivering high-quality, reliable solutions and continuously learning new technologies.
            </p>
            <div className="pt-4">
              <h3 className="text-xl font-medium mb-4">Education</h3>
              <div className="flex items-start gap-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">
                    Faculty of Computers and Artificial Intelligence
                  </h4>
                  <p className="text-muted-foreground">
                    Information Technology • GPA: 3.2/4.0
                  </p>
                  <p className="text-sm text-muted-foreground">
                    09/2022 – 06/2026 • Beni-Suef, Egypt
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex justify-center mb-6">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
                <img
                  src="/lovable-uploads/6e962e76-968b-4d7a-9e76-3827aa1f99df.png"
                  alt="Hazem Khairat"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <h3 className="text-xl font-medium mb-4 text-center">Full-Stack Expertise</h3>
            <div className="grid grid-cols-2 gap-4">
              <Card className="card-hover">
                <CardContent className="flex flex-col items-center p-6">
                  <Layout className="h-10 w-10 text-primary mb-2" />
                  <h4 className="font-medium">Frontend</h4>
                  <p className="text-sm text-center text-muted-foreground">
                    Modern & responsive UI development
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardContent className="flex flex-col items-center p-6">
                  <Server className="h-10 w-10 text-primary mb-2" />
                  <h4 className="font-medium">Backend</h4>
                  <p className="text-sm text-center text-muted-foreground">
                    Scalable API & server development
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardContent className="flex flex-col items-center p-6">
                  <Database className="h-10 w-10 text-primary mb-2" />
                  <h4 className="font-medium">Databases</h4>
                  <p className="text-sm text-center text-muted-foreground">
                    Efficient data storage & management
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardContent className="flex flex-col items-center p-6">
                  <Code className="h-10 w-10 text-primary mb-2" />
                  <h4 className="font-medium">Problem Solving</h4>
                  <p className="text-sm text-center text-muted-foreground">
                    Algorithmic thinking & debugging
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
