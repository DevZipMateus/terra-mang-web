import {
  Wrench,
  Droplet,
  Zap,
  Settings,
  ShieldCheck,
  PackageCheck,
  Leaf,
  FileText,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Droplet,
      title: "Mangueiras hidráulicas",
      description: "Montagem de mangueiras para alta pressão com qualidade certificada",
    },
    {
      icon: Settings,
      title: "Conexões hidráulicas e pneumáticas",
      description: "Conexões de latão e galvanizadas para diversas aplicações",
    },
    {
      icon: Zap,
      title: "Materiais elétricos",
      description: "Linha completa de materiais elétricos para indústria",
    },
    {
      icon: Wrench,
      title: "Máquinas e ferramentas",
      description: "Ferragens e ferramentas em geral para todas as necessidades",
    },
    {
      icon: PackageCheck,
      title: "Correias e vedação",
      description: "Linha completa de vedação hidráulica e correias industriais",
    },
    {
      icon: ShieldCheck,
      title: "EPI's e lubrificantes",
      description: "Equipamentos de proteção individual e lubrificantes de qualidade",
    },
    {
      icon: Leaf,
      title: "Linha de jardinagem",
      description: "Materiais e equipamentos para jardinagem e manutenção",
    },
    {
      icon: FileText,
      title: "Materiais para escritório",
      description: "Produtos e materiais para organização e gestão",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Nossos serviços
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Oferecemos soluções completas para sua empresa com produtos de qualidade e atendimento
            especializado
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-lg hover:shadow-xl transition-all duration-300 border border-border group"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
