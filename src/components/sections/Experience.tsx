
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  link: string;
}

const certificates: Certificate[] = [
  {
    title: "Full-Stack Web Development Diploma",
    issuer: "Instant",
    date: "2023",
    link: "https://drive.google.com/file/d/1WdejMTGIKsyzFuycKg4xFvN6wS4MD1sy/view",
  },
  {
    title: "Version Control with Git and GitHub",
    issuer: "Coursera",
    date: "2023",
    link: "https://drive.google.com/file/d/17GyA1XAMDO0pKUqfCkmQEEJddH0mxwcR/view",
  },
  {
    title: "Linux Commands and Shell Scripting",
    issuer: "Coursera",
    date: "2023",
    link: "https://drive.google.com/file/d/1T7wsTwesJ7mho84zW7_-XBi4zaXbN3AS/view",
  },
];

export function Experience() {
  return (
    <section id="achievement" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Achievements</h2>
        <p className="section-subtitle">
          Professional development and certifications
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {certificates.map((cert, index) => (
            <Card key={index} className="card-hover">
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
                  className="inline-flex items-center text-primary hover:underline"
                >
                  View Certificate
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <path d="M15 3h6v6" />
                    <path d="M10 14L21 3" />
                  </svg>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>Resume</CardTitle>
              <CardDescription>
                Download my complete resume for more details
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <a
                href="/resume.pdf"
                download="Hazem_Khairat_Resume.pdf"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
