const Gallery = () => {
  const products = [
    { image: "/galeria/mnagueiras_alta_pressao.jpg", name: "Mangueiras alta pressão", type: "image" },
    { image: "/galeria/conexoes_pneumaticas.jpg", name: "Conexões pneumáticas", type: "image" },
    { image: "/galeria/conexoes_em_latao.jpg", name: "Conexões em latão", type: "image" },
    { image: "/galeria/coneoes_galvanizadas.jpg", name: "Conexões galvanizadas", type: "image" },
    { image: "/galeria/camlock.jpg", name: "Camlock", type: "image" },
    { image: "/galeria/linha_hidraulica_agua.jpg", name: "Linha hidráulica água", type: "image" },
    { image: "/galeria/aneis_de_vedacao.jpg", name: "Anéis de vedação", type: "image" },
    { image: "/galeria/lencol_de_borracha.jpg", name: "Lençol de borracha", type: "image" },
    { image: "/galeria/correias_.png", name: "Correias", type: "image" },
    { image: "/galeria/eletrica_industrial.jpg", name: "Elétrica industrial", type: "image" },
    { image: "/galeria/iluminacao.jpg", name: "Iluminação", type: "image" },
    { image: "/galeria/compressores.jpg", name: "Compressores", type: "image" },
    { image: "/galeria/epi_s.jpg", name: "EPI's", type: "image" },
    { image: "/galeria/lubrificantes_em_geras.jpg", name: "Lubrificantes em geral", type: "image" },
    { image: "/galeria/abrasivos.jpg", name: "Abrasivos", type: "image" },
    { image: "/galeria/amarracao_de_cargas.jpg", name: "Amarração de cargas", type: "image" },
    { image: "/galeria/pistolas_de_pintura_.mp4", name: "Pistolas de pintura", type: "video" },
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Nossos produtos
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Conheça nossa linha completa de produtos para sua empresa
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border border-border bg-card hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="aspect-square overflow-hidden">
                  {product.type === "video" ? (
                    <video
                      src={product.image}
                      className="w-full h-full object-cover"
                      controls
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="p-4 bg-gradient-to-t from-background to-background/95 flex flex-col gap-3">
                  <h3 className="font-semibold text-foreground text-center">
                    {product.name}
                  </h3>
                  <a
                    href="https://wa.me/5511968421387"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-4 text-sm font-medium transition-colors"
                  >
                    Mais informações
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
