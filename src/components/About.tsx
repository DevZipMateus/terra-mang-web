import { Building2, Users, Award, Clock } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Building2,
      title: "Desde 2007",
      description: "Anos de experiência no mercado",
    },
    {
      icon: Users,
      title: "Clientes satisfeitos",
      description: "Parcerias sólidas e duradouras",
    },
    {
      icon: Award,
      title: "Qualidade garantida",
      description: "Produtos e serviços de excelência",
    },
    {
      icon: Clock,
      title: "Atendimento rápido",
      description: "Soluções ágeis e eficientes",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Sobre a Terra Mang
          </h2>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Fundada em 2007, a Terra Mang tem sua matriz localizada em Terra Preta, Mairiporã, e
              uma filial em Bom Jesus dos Perdões. Atuamos no comércio de materiais hidráulicos,
              com especialidade na montagem de mangueiras para alta pressão.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Ao longo da nossa trajetória, conquistamos a confiança de importantes clientes, como
              Prafesta, Embrafe, Marzo Vitorino, Oppeano, Auto Pista Fernão Dias, Micromax, Geotex,
              Unipel, S.L.C. e Neo Alumínio, entre outros.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Nosso grande diferencial é o atendimento de excelência: acreditamos que ouvir e
              entender a necessidade de cada cliente é o passo mais importante para oferecer
              soluções eficientes, seguras e de qualidade. Trabalhamos para garantir satisfação
              total, construindo parcerias sólidas e de longo prazo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-muted/50 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 border border-border"
              >
                <item.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
