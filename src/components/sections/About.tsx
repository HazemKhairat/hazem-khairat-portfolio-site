
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
              Currently studying Information Technology at the Faculty of Computers and Artificial Intelligence, I'm passionate about delivering high-quality, reliable solutions and continuously learning new technologies.
            </p>
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
