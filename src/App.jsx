import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// IMAGES
import barbeirosBG from './assets/victorewarley.jpg'

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo('.hero-content h1',
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
      )
        .fromTo('.hero-content p',
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
          '-=0.5'
        )
        .fromTo('.hero-content a',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out' },
          '-=0.3'
        );

      gsap.fromTo('.about-text', { x: -100, opacity: 0 }, {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#about',
          start: 'top 80%'
        }
      });

      gsap.fromTo('.about-image', { x: 100, opacity: 0 }, {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#about',
          start: 'top 80%'
        }
      });

      gsap.fromTo('.services-header', { y: 50, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#services',
          start: 'top 80%'
        }
      });

      gsap.fromTo('.service-card', { y: 80, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#services',
          start: 'top 70%'
        }
      });

      gsap.fromTo('.gallery-header', { y: 50, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#gallery',
          start: 'top 80%'
        }
      });

      gsap.fromTo('.gallery-item', { scale: 0.8, opacity: 0 }, {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#gallery',
          start: 'top 70%'
        }
      });

      gsap.fromTo('.contact-info', { y: 50, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#contact',
          start: 'top 80%'
        }
      });

    });

    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-bg');

      parallaxElements.forEach((element, index) => {
        const speed = index === 0 ? 0.3 : 0.5;
        const yPos = -(scrolled * speed);
        element.style.backgroundPosition = `center ${yPos}px`;
      });
    };

    window.addEventListener('scroll', handleParallax);

    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  const whatsappNumber = "34997248137";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="font-poppins bg-dark text-light overflow-x-hidden">
      {/* Navigation */}
      <nav className="navbar fixed top-0 w-full z-50 glass-effect border-b border-light/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl lg:text-3xl font-bebas text-shadow transition-colors duration-300">
              BLACK ROCK
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-gold text-shadow transition-colors duration-300">Home</a>
              <a href="#about" className="hover:text-gold text-shadow transition-colors duration-300">Sobre</a>
              <a href="#services" className="hover:text-gold text-shadow transition-colors duration-300">Serviços</a>
              <a href="#gallery" className="hover:text-gold text-shadow transition-colors duration-300">Galeria</a>
              <a href="#contact" className="hover:text-gold text-shadow transition-colors duration-300">Contato</a>
            </div>
            <button
              className={`md:hidden text-light text-xl menu-icon ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden glass-effect border-t border-light/20 transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen
            ? 'max-h-80 opacity-100' 
            : 'max-h-0 opacity-0'   
          }`}>
          <div className={`container mx-auto px-4 space-y-4 transition-all duration-300 ease-in-out transform ${mobileMenuOpen
              ? 'py-4 translate-y-0'
              : 'py-0 -translate-y-4'
            }`}>
            <a href="#home" className="block hover:text-light transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#about" className="block hover:text-light transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Sobre</a>
            <a href="#services" className="block hover:text-light transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Serviços</a>
            <a href="#gallery" className="block hover:text-light transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Galeria</a>
            <a href="#contact" className="block hover:text-light transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen relative flex items-center justify-center parallax-bg"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')" }}
      >
        <div className="absolute inset-0 gradient-overlay"></div>

        <div className="relative z-10 text-center px-4 hero-content">
          <div className="mb-8">
            <h1 className="text-6xl lg:text-8xl font-bebas text-light mb-4 text-shadow animate-float">
              BLACK ROCK
            </h1>
            <div className="w-32 h-1 bg-light mx-auto mb-6"></div>
            <p className="text-xl lg:text-2xl font-light text-light text-shadow mb-2">
              BARBEARIA PREMIUM
            </p>
            <p className="text-lg lg:text-xl text-light/80 text-shadow max-w-2xl mx-auto">
              Onde tradição encontra modernidade. Cortes únicos, estilo incomparável.
            </p>
          </div>

          <div className="space-y-4 lg:space-y-0 lg:space-x-6 lg:flex lg:justify-center">
            <a href="#services" className="inline-block bg-light hover:bg-light/90 text-dark font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover-scale animate-pulse-light">
              NOSSOS SERVIÇOS
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-light text-light hover:bg-light hover:text-dark font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover-scale">
              AGENDAR HORÁRIO
            </a>
          </div>
        </div>

        {/* Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-light animate-bounce">
          <i className="fas fa-chevron-down text-2xl"></i>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-charcoal">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="about-text">
              <h2 className="text-4xl lg:text-5xl font-bebas text-light mb-6">
                SOBRE A BLACK ROCK
              </h2>
              <div className="w-20 h-1 bg-light mb-8"></div>

              <p className="text-lg text-light/80 mb-6 leading-relaxed">
                Fundada em 2025, a Black Rock nasceu da paixão por criar experiências únicas de cuidado masculino. Nossa barbearia combina técnicas tradicionais com tendências contemporâneas.
              </p>

              <p className="text-lg text-light/80 mb-8 leading-relaxed">
                Cada corte é uma obra de arte, cada cliente é tratado com exclusividade. Aqui temos boas histórias e um pouco de Rock.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bebas text-light">500+</div>
                  <div className="text-light/60">Clientes Satisfeitos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bebas text-light">3</div>
                  <div className="text-light/60">Anos de Experiência</div>
                </div>
              </div>
            </div>

            <div className="about-image">
              <img
                src={barbeirosBG}
                alt="Ferramentas profissionais de barbeiro"
                className="rounded-xl shadow-2xl w-full h-auto hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 services-header">
            <h2 className="text-4xl lg:text-5xl font-bebas text-light mb-6">
              NOSSOS SERVIÇOS
            </h2>
            <div className="w-20 h-1 bg-light mx-auto mb-8"></div>
            <p className="text-xl text-light/80 max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços premium para o homem moderno
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="service-card bg-charcoal p-8 rounded-xl hover-scale border border-light/20">
              <div className="text-center">
                <div className="text-4xl text-light mb-4">
                  <i className="fas fa-cut"></i>
                </div>
                <h3 className="text-xl font-bebas text-light mb-4">CORTE TRADICIONAL</h3>
                <p className="text-light/80 mb-4">
                  Corte clássico com tesoura e máquina, finalizado com produtos premium para um acabamento perfeito.
                </p>
                <div className="text-2xl font-bebas text-light">R$ 40</div>
              </div>
            </div>

            <div className="service-card bg-charcoal p-8 rounded-xl hover-scale border border-light/20">
              <div className="text-center">
                <div className="text-4xl text-light mb-4">
                  <i className="fas fa-user-tie"></i>
                </div>
                <h3 className="text-xl font-bebas text-light mb-4">CORTE + BARBA</h3>
                <p className="text-light/80 mb-4">
                  Combo completo: corte personalizado + desenho e aparação da barba com técnicas profissionais.
                </p>
                <div className="text-2xl font-bebas text-light">R$ 75</div>
              </div>
            </div>

            <div className="service-card bg-charcoal p-8 rounded-xl hover-scale border border-light/20">
              <div className="text-center">
                <div className="text-4xl text-light mb-4">
                  <i className="fas fa-fire"></i>
                </div>
                <h3 className="text-xl font-bebas text-light mb-4">CORTE + BARBA + SOBRANCELHA</h3>
                <p className="text-light/80 mb-4">
                  Combo Premium: corte personalizado + desenho e aparação da barba com técnicas profissionais + sobrancelha feita na navalha.
                </p>
                <div className="text-2xl font-bebas text-light">R$ 95</div>
              </div>
            </div>

            <div className="service-card bg-charcoal p-8 rounded-xl hover-scale border border-light/20">
              <div className="text-center">
                <div className="text-4xl text-light mb-4">
                  <i className="fas fa-star"></i>
                </div>
                <h3 className="text-xl font-bebas text-light mb-4">ACABAMENTO</h3>
                <p className="text-light/80 mb-4">
                  Acabamento: para quem precisa apenas do básico, e ainda sim ter uma experiência premium.
                </p>
                <div className="text-2xl font-bebas text-light">R$ 20</div>
              </div>
            </div>

            <div className="service-card bg-charcoal p-8 rounded-xl hover-scale border border-light/20">
              <div className="text-center">
                <div className="text-4xl text-light mb-4">
                  <i className="fas fa-paint-brush"></i>
                </div>
                <h3 className="text-xl font-bebas text-light mb-4">CORTE FEMININO</h3>
                <p className="text-light/80 mb-4">
                  Corte também para as mulheres, finalizado com produtos premium.
                </p>
                <div className="text-2xl font-bebas text-light">R$ 50</div>
              </div>
            </div>

            <div className="service-card bg-charcoal p-8 rounded-xl hover-scale border border-light/20">
              <div className="text-center">
                <div className="text-4xl text-light mb-4">
                  <i className="fas fa-spa"></i>
                </div>
                <h3 className="text-xl font-bebas text-light mb-4">SELAGEM</h3>
                <p className="text-light/80 mb-4">
                  Alinhe os fios e diga adeus ao frizz. Nossa selagem promove brilho intenso e maciez, deixando seu cabelo liso e prático por semanas.
                </p>
                <div className="text-2xl font-bebas text-light">R$ 50</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 bg-charcoal">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 gallery-header">
            <h2 className="text-4xl lg:text-5xl font-bebas text-light mb-6">
              GALERIA
            </h2>
            <div className="w-20 h-1 bg-light mx-auto mb-8"></div>
            <p className="text-xl text-light/80 max-w-3xl mx-auto">
              Confira alguns dos nossos trabalhos e o ambiente único da Black Rock
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="gallery-item overflow-hidden rounded-xl hover-scale">
              <img
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Corte de cabelo profissional"
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            <div className="gallery-item overflow-hidden rounded-xl hover-scale">
              <img
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Aparação de barba profissional"
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            <div className="gallery-item overflow-hidden rounded-xl hover-scale">
              <img
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Sessão de styling moderno"
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            <div className="gallery-item overflow-hidden rounded-xl hover-scale">
              <img
                src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Ferramentas profissionais de barbeiro"
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            <div className="gallery-item overflow-hidden rounded-xl hover-scale">
              <img
                src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Interior elegante da barbearia"
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            <div className="gallery-item overflow-hidden rounded-xl hover-scale">
              <img
                src="https://images.unsplash.com/photo-1512690459411-b9245aed614b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Técnica de corte de precisão"
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="contact-info">
              <h2 className="text-4xl lg:text-5xl font-bebas text-light mb-6">
                CONTATO
              </h2>
              <div className="w-20 h-1 bg-light mx-auto mb-12"></div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-map-marker-alt text-dark text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bebas text-light mb-2">ENDEREÇO</h3>
                  <p className="text-light/80">R. Antônio Caetano de Menezes, 09 - Bela Vista<br />Patos de Minas - MG, 38703-230</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-phone text-dark text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bebas text-light mb-2">TELEFONE</h3>
                  <p className="text-light/80">(34) 99724-8137</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-clock text-dark text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bebas text-light mb-2">HORÁRIO</h3>
                  <p className="text-light/80">
                    Segunda à Sábado: 9h às 20h<br />
                    Domingo: Fechado
                  </p>
                </div>
              </div>

              <div className="text-center">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-light hover:bg-light/90 text-dark font-semibold px-12 py-4 rounded-lg transition-all duration-300 hover-scale text-lg"
                >
                  <i className="fab fa-whatsapp mr-3 text-xl"></i>
                  AGENDAR PELO WHATSAPP
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Baseboard */}
      <footer className="bg-charcoal py-12 border-t border-light/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bebas text-light mb-4">BLACK ROCK</h3>
              <p className="text-light/60">
                Barbearia premium onde tradição encontra modernidade.
                Criando estilos únicos desde 2025.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-light mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-light/60">
                <li><a href="#home" className="hover:text-light transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-light transition-colors">Sobre</a></li>
                <li><a href="#services" className="hover:text-light transition-colors">Serviços</a></li>
                <li><a href="#contact" className="hover:text-light transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-light mb-4">Redes Sociais</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="https://www.instagram.com/barbeariablackrock/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-light rounded-full flex items-center justify-center text-dark hover:bg-light/90 transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-light rounded-full flex items-center justify-center text-dark hover:bg-light/90 transition-colors">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-light/20 mt-8 pt-8 text-center text-light/60">
            <p>&copy; 2025 BlackRock Barbearia. Todos os direitos reservados.</p>
            <p className="mt-2 text-sm">Desenvolvido com ❤️ para a melhor experiência de barbearia.</p>
          </div>
        </div>
      </footer>

      {/* Wpp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-light text-2xl shadow-lg hover:shadow-xl z-50"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
}