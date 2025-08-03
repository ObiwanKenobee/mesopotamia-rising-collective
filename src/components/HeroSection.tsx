import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mesopotamia-future.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-mesopotamian/80 via-mesopotamian/60 to-heritage/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          From Mesopotamia 
          <span className="block bg-gradient-to-r from-heritage to-future-teal bg-clip-text text-transparent">
            to the Future
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          The Company of Us - Iraq 2030: Rebuilding community, skills, and innovation 
          on the foundation of ancient wisdom
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-heritage hover:bg-heritage/90 text-mesopotamian font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 shadow-heritage"
          >
            Explore Modules
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white hover:text-mesopotamian font-semibold px-8 py-4 text-lg transition-all duration-300"
          >
            Join the Movement
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;