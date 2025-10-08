import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Entre em contato
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Informações de contato
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Endereço</h4>
                    <p className="text-muted-foreground">
                      Av. Santos Dumont, 525 - Laranja Azeda
                      <br />
                      Bom Jesus dos Perdões - SP, 12955-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                    <a
                      href="https://wa.me/5511968421387"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      (11) 96842-1387
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                    <a
                      href="mailto:rosana@terramang.com.br"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      rosana@terramang.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Horário de funcionamento</h4>
                    <p className="text-muted-foreground">
                      Segunda a sexta: 8:00 - 18:00
                      <br />
                      Sábado: 8:00 - 12:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Instagram className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Instagram</h4>
                    <a
                      href="https://instagram.com/terramangg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      @terramangg
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-[400px] lg:h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.8!2d-46.4384!3d-23.2145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef0b4e4b4b4b4%3A0x1!2sAv.%20Santos%20Dumont%2C%20525%20-%20Laranja%20Azeda%2C%20Bom%20Jesus%20dos%20Perd%C3%B5es%20-%20SP%2C%2012955-000!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Terra Mang"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
