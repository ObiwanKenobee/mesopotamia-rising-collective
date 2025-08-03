import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const roles = [
  {
    title: "Partner",
    description: "Collaborate with us on implementing community-driven solutions",
    icon: "🤝",
    action: "Join as Partner"
  },
  {
    title: "Investor", 
    description: "Fund the future of ethical innovation and community rebuilding",
    icon: "💡",
    action: "Invest in Iraq 2030"
  },
  {
    title: "Mentor",
    description: "Share your expertise with the next generation of Iraqi innovators",
    icon: "👨‍🏫",
    action: "Become a Mentor"
  },
  {
    title: "Youth Participant",
    description: "Be part of the movement that will transform Iraq's future",
    icon: "🌟",
    action: "Join the Program"
  }
];

const GetInvolvedSection = () => {
  return (
    <section className="py-20 bg-mesopotamian">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get Involved
          </h2>
          <div className="w-24 h-1 bg-heritage mx-auto mb-8" />
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Join us in building the future of Iraq. Whether you're a global partner, 
            investor, mentor, or young Iraqi ready to make change happen.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {roles.map((role, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{role.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{role.title}</h3>
                <p className="text-white/80 text-sm mb-4 leading-relaxed">
                  {role.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-heritage text-heritage hover:bg-heritage hover:text-mesopotamian transition-all duration-300"
                >
                  {role.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start?</h3>
            <p className="text-white/80 mb-6">
              Take the first step towards being part of Iraq's transformation journey.
            </p>
            <Button 
              size="lg"
              className="bg-heritage hover:bg-heritage/90 text-mesopotamian font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
            >
              Sign Up Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;