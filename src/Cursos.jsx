import Navbar from "./components/navbarCurso";

export default function Cursos() {
  return (
    <div className="">
      <Navbar />
      <section 
        className="min-h-screen relative flex items-center justify-center parallax-bg" 
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"}}
      >
        <div className="absolute inset-0 gradient-overlay"></div>
        
        <div className="relative z-10 text-center px-4 curso-header">
          <div className="mb-8">
            <h1 className="text-5xl lg:text-7xl font-bebas text-light mb-4 text-shadow">
              SEJA UM
              <span className="text-gold"> BARBEIRO PROFISSIONAL</span>
            </h1>
            <div className="w-32 h-1 bg-light mx-auto mb-6"></div>
            <p className="text-xl lg:text-2xl font-light text-light text-shadow mb-4">
              APRENDA COM OS MELHORES
            </p>
            <p className="text-lg lg:text-xl text-light/80 text-shadow max-w-3xl mx-auto">
              Transforme sua paixão em profissão com nosso curso completo de barbearia premium
            </p>
          </div>
          
          <div className="space-y-4 lg:space-y-0 lg:space-x-6 lg:flex lg:justify-center">
            <a href="#detalhes" className="inline-block bg-light hover:bg-light/90 text-dark font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover-scale">
              VER DETALHES
            </a>
            <a href={""} target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-light text-light hover:bg-light hover:text-dark font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover-scale">
              INSCREVER-SE
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-light animate-bounce">
          <i className="fas fa-chevron-down text-2xl"></i>
        </div>
      </section>

      {/* Seção dos Instrutores */}
      <section id="instrutores" className="py-20 bg-charcoal instructors-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bebas text-light mb-6">
              SEUS INSTRUTORES
            </h2>
            <div className="w-20 h-1 bg-light mx-auto mb-8"></div>
            <p className="text-xl text-light/80 max-w-3xl mx-auto">
              Aprenda com profissionais experientes e reconhecidos no mercado
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Victor Borges */}
            <div className="instructor-card bg-dark p-8 rounded-xl hover-scale border border-light/20">
              <div className="text-center">
                <div className="w-32 h-32 bg-light/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <i className="fas fa-user text-4xl text-light"></i>
                </div>
                <h3 className="text-2xl font-bebas text-light mb-2">VICTOR BORGES</h3>
                <p className="text-light/60 mb-4">Barbeiro profissional</p>
                <p className="text-light/80 mb-6 leading-relaxed">
                  Com mais de 4 anos de experiência no mercado, Victor é especialista em cortes modernos. 
                  Mudou o rumo de sua vida quando decidiu deixar sua cidade e ir atrás de seu sonho: se tornar barbeiro.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center text-light/60">
                    <i className="fas fa-star text-light mr-2"></i>
                    <span>4+ anos de experiência</span>
                  </div>                  
                </div>
              </div>
            </div>

            {/* Warley Melo */}
            <div className="instructor-card bg-dark p-8 rounded-xl hover-scale border border-light/20">
              <div className="text-center">
                <div className="w-32 h-32 bg-light/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <i className="fas fa-user text-4xl text-light"></i>
                </div>
                <h3 className="text-2xl font-bebas text-light mb-2">WARLEY MELO</h3>
                <p className="text-light/60 mb-4">Especialista em corte e barba</p>
                <p className="text-light/80 mb-6 leading-relaxed">
                  Especialista em corte, design de barba e técnicas de acabamento. Warley traz uma abordagem moderna 
                  e criativa para o ensino, focando em tendências e inovações do mercado. 
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center text-light/60">
                    <i className="fas fa-star text-light mr-2"></i>
                    <span>6+ anos de experiência</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detalhes do Curso */}
      <section id="detalhes" className="py-20 bg-dark course-details">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bebas text-light mb-6">
              DETALHES DO CURSO
            </h2>
            <div className="w-20 h-1 bg-light mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Conteúdo do Curso */}
            <div className="course-content">
              <h3 className="text-2xl font-bebas text-light mb-6">O QUE VOCÊ VAI APRENDER</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="fas fa-check text-light mr-3 mt-1"></i>
                  <div>
                    <h4 className="text-light font-semibold mb-1">Técnicas Fundamentais</h4>
                    <p className="text-light/80">Cortes clássicos, fade, degradê e técnicas com tesoura</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check text-light mr-3 mt-1"></i>
                  <div>
                    <h4 className="text-light font-semibold mb-1">Design de Barba</h4>
                    <p className="text-light/80">Modelagem, contorno e manutenção de barbas</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check text-light mr-3 mt-1"></i>
                  <div>
                    <h4 className="text-light font-semibold mb-1">Atendimento ao Cliente</h4>
                    <p className="text-light/80">Como criar uma experiência única para seus clientes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check text-light mr-3 mt-1"></i>
                  <div>
                    <h4 className="text-light font-semibold mb-1">Gestão de Negócios</h4>
                    <p className="text-light/80">Como montar e administrar sua própria barbearia</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check text-light mr-3 mt-1"></i>
                  <div>
                    <h4 className="text-light font-semibold mb-1">Certificação</h4>
                    <p className="text-light/80">Certificado reconhecido no mercado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Informações do Curso */}
            <div className="course-content">
              <div className="bg-charcoal p-8 rounded-xl border border-light/20">
                <h3 className="text-2xl font-bebas text-light mb-6 text-center">INFORMAÇÕES</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-light/20 pb-4">
                    <span className="text-light/80">Duração:</span>
                    <span className="text-light font-semibold">3 meses</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-light/20 pb-4">
                    <span className="text-light/80">Carga Horária:</span>
                    <span className="text-light font-semibold">120 horas</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-light/20 pb-4">
                    <span className="text-light/80">Modalidade:</span>
                    <span className="text-light font-semibold">Online</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-light/20 pb-4">
                    <span className="text-light/80">Turmas:</span>
                    <span className="text-light font-semibold">Limitadas</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-light/20 pb-4">
                    <span className="text-light/80">Vagas:</span>
                    <span className="text-light font-semibold">Limitadas</span>
                  </div>
                  <div className="text-center pt-4">
                    <div className="text-3xl font-bebas text-light mb-2">R$ 1.900</div>
                    <div className="text-light/60 mb-4">ou 12x R$ 185</div>
                    <a href="" target="_blank" rel="noopener noreferrer" className="inline-block bg-light hover:bg-light/90 text-dark font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover-scale w-full">
                      INSCREVER-SE AGORA
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}