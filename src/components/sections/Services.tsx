export function Services() {
  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">Offered Services</h2>
        <p className="section-subtitle">
          Services I provide to help bring your ideas to life
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="bg-card rounded-lg p-6 border card-hover">
            <h3 className="text-xl font-semibold mb-3">Custom Websites</h3>
            <p className="text-muted-foreground">
              A site designed to match your brand and goals, whether you need a portfolio, business website, or personal page.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-6 border card-hover">
            <h3 className="text-xl font-semibold mb-3">Mobile-Friendly Design</h3>
            <p className="text-muted-foreground">
              Your website will look great and work smoothly on phones, tablets, and computers.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-6 border card-hover">
            <h3 className="text-xl font-semibold mb-3">Website Improvements</h3>
            <p className="text-muted-foreground">
              Already have a site? I can refresh the design, fix issues, or add new features.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-6 border card-hover">
            <h3 className="text-xl font-semibold mb-3">Fast & Reliable Performance</h3>
            <p className="text-muted-foreground">
              I make sure your website loads quickly and works without errors so your visitors stay engaged.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-6 border card-hover md:col-span-2">
            <h3 className="text-xl font-semibold mb-3">Ongoing Support</h3>
            <p className="text-muted-foreground">
              Need updates or small changes later? I'll be there to keep everything running.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}