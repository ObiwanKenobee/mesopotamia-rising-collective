const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-desert-sand/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-mesopotamian mb-6">
            Why Iraq?
          </h2>
          <div className="w-24 h-1 bg-heritage mx-auto mb-8" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Iraq sits at a critical intersection: recovering from conflict, rich in historical heritage, 
              and home to a young population eager for education, jobs, and stability.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              "Company of Us – Iraq 2030" focuses on rebuilding communities as the foundation 
              for individual growth, bridging ancient wisdom with modern innovation.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-deep">
            <h3 className="text-2xl font-bold text-mesopotamian mb-6">Our Vision: Iraq 2030</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-heritage rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-mesopotamian">2025–2027: Trust & Skills</h4>
                  <p className="text-muted-foreground">Building foundational trust and developing essential skills</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-future-teal rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-mesopotamian">2028–2030: You Inc in Community</h4>
                  <p className="text-muted-foreground">Empowering individual entrepreneurship within strong communities</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-ancient-bronze rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-mesopotamian">2030+: Export Innovations</h4>
                  <p className="text-muted-foreground">Sharing our model and innovations with the world</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;