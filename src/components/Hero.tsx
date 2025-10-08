import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-32 relative bg-gradient-to-b from-muted/30 to-background">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/hero-background.jpg)' }} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Terra Mang Com e Import de Mangueiras e Conexões
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Especialistas em montagem de mangueiras hidráulicas, conexões e materiais para indústria desde 2007
          </h2>
          <p className="text-lg md:text-xl text-primary font-semibold mb-10">
            O almoxarifado da sua empresa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-secondary transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl flex items-center gap-2 group"
            >
              Entre em contato
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <a
              href="https://wa.me/5511968421387"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 text-foreground border-2 border-primary/60 px-8 py-4 rounded-lg hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 font-semibold text-lg"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
