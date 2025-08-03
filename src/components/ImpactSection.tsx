import { Card, CardContent } from "@/components/ui/card";

const awards = [
  {
    title: "UNESCO Peace and Heritage Technology Award",
    category: "Cultural Innovation",
    year: "2030",
    description: "For bridging ancient heritage with modern digital solutions"
  },
  {
    title: "World Bank – Fragility to Opportunity Innovation Award",
    category: "Post-Conflict Recovery",
    year: "2029",
    description: "Outstanding model for community-driven rebuilding"
  },
  {
    title: "ILO – Regional Future of Work Programs",
    category: "Employment Innovation", 
    year: "2028",
    description: "Revolutionary approach to youth employment and skills"
  }
];

const ImpactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-desert-sand/30 to-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-mesopotamian mb-6">
            Global Impact
          </h2>
          <div className="w-24 h-1 bg-heritage mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A model for post-conflict nation rebuilding powered by ethics and innovation. 
            Iraq as the <span className="text-heritage font-semibold">Mesopotamia of Modern Innovation</span>.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Impact Stats */}
          <div className="bg-white rounded-2xl p-8 shadow-deep">
            <h3 className="text-2xl font-bold text-mesopotamian mb-8">Projected Impact by 2030</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-heritage mb-2">500K+</div>
                <div className="text-sm text-muted-foreground">Youth Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-future-teal mb-2">50K+</div>
                <div className="text-sm text-muted-foreground">Jobs Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ancient-bronze mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Innovation Hubs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-mesopotamian mb-2">1M+</div>
                <div className="text-sm text-muted-foreground">Lives Impacted</div>
              </div>
            </div>
          </div>
          
          {/* Regional Leadership */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-mesopotamian">Regional Innovation Hub</h3>
            <p className="text-foreground/80 leading-relaxed">
              By 2030, Iraq will serve as the Middle East's premier destination for 
              ethical technology, cultural preservation, and community-driven innovation.
            </p>
            <div className="bg-gradient-to-r from-heritage/10 to-future-teal/10 rounded-lg p-6">
              <h4 className="font-semibold text-mesopotamian mb-2">Export Markets</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Digital governance solutions to emerging democracies</li>
                <li>• Cultural AI preservation tools globally</li>
                <li>• Community rebuilding methodologies</li>
                <li>• Ethical finance innovations</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Awards Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-mesopotamian text-center mb-8">
            Anticipated International Recognition
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <Card key={index} className="border-0 shadow-lg rounded-xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="text-heritage text-sm font-semibold mb-2">{award.year}</div>
                  <h4 className="font-bold text-mesopotamian mb-2 text-sm leading-tight">
                    {award.title}
                  </h4>
                  <div className="text-xs text-muted-foreground mb-3">{award.category}</div>
                  <p className="text-xs text-foreground/70">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;