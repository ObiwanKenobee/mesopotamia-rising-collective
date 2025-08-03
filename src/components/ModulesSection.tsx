import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const modules = [
  {
    title: "AEGIS-X",
    desc: "Digital governance for anti-corruption and cultural AI.",
    outcome: "Trust-building between people and institutions.",
    color: "mesopotamian",
    icon: "🛡️"
  },
  {
    title: "Ethiconexus",
    desc: "Ethical finance, micro-equity for young entrepreneurs.",
    outcome: "Jobs and reduced state employment dependence.",
    color: "heritage",
    icon: "💰"
  },
  {
    title: "Genesis360",
    desc: "Education and skills hubs across Iraq.",
    outcome: "Prepares youth for AI, clean energy, and digital services.",
    color: "future-teal",
    icon: "🎓"
  },
  {
    title: "SecureFuture",
    desc: "Micro-insurance and health access.",
    outcome: "Safety net for families rebuilding their lives.",
    color: "ancient-bronze",
    icon: "🏥"
  },
  {
    title: "Evergreen",
    desc: "Digital archive of Mesopotamian heritage and art.",
    outcome: "Reclaims pride and showcases Iraq globally.",
    color: "mesopotamian",
    icon: "🏛️"
  }
];

const ModulesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-mesopotamian mb-6">
            Key Modules
          </h2>
          <div className="w-24 h-1 bg-heritage mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Five interconnected pillars designed to transform Iraq into a beacon of 
            ethical innovation and community-driven progress
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => (
            <Card 
              key={module.title} 
              className="group hover:shadow-heritage transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-deep rounded-2xl overflow-hidden"
            >
              <CardContent className="p-0">
                <div className={`h-2 bg-${module.color}`} />
                <div className="p-8">
                  <div className="text-4xl mb-4">{module.icon}</div>
                  <h3 className="text-2xl font-bold text-mesopotamian mb-4 group-hover:text-heritage transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    {module.desc}
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-muted-foreground italic">
                      <strong>Impact:</strong> {module.outcome}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-mesopotamian hover:bg-mesopotamian/90 text-white px-8 py-4"
          >
            Learn More About Our Modules
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;