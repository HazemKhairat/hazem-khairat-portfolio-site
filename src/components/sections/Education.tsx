import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Education() {
  return (
    <section id="education" className="py-20 bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          Academic background and learning journey
        </p>

        <div className="max-w-2xl mx-auto mt-10">
          <Card className="card-hover">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
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
                <div className="flex-1">
                  <CardTitle className="text-xl">
                    Faculty of Computers and Artificial Intelligence
                  </CardTitle>
                  <p className="text-muted-foreground mt-1">
                    Information Technology • GPA: 3.2/4.0
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    09/2022 – 06/2026 • Beni-Suef, Egypt
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Currently pursuing a Bachelor's degree in Information Technology, focusing on software development, algorithms, and modern web technologies.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}