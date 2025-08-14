import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

// ==================== ICONO DE ESTRELLA ====================
const StarIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 
    1 0 00.95.69h3.462c.969 0 1.371 1.24.588 
    1.81l-2.8 2.034a1 1 0 
    00-.364 1.118l1.07 3.292c.3.921-.755 
    1.688-1.54 1.118l-2.8-2.034a1 1 
    0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 
    1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 
    1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// ==================== BURBUJAS DE FONDO ====================
const Bubbles = () => {
  const bubbles = Array.from({ length: 10 });
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {bubbles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{
            width: Math.random() * 40 + 20,
            height: Math.random() * 40 + 20,
            left: `${Math.random() * 100}%`,
            bottom: `-${Math.random() * 100}px`,
          }}
          animate={{
            y: ["100%", "-150%"],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

// ==================== IMAGEN FLOTANTE ====================
const FloatingImage = () => {
  return (
    <div className="lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0 relative">
      <Bubbles />
      <motion.img
        src="/page2.png" // PNG con fondo transparente (sirviéndose desde /public)
        alt="FitAI App Preview"
        className="w-auto max-h-[800px] object-contain"
        style={{ backgroundColor: "transparent" }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://placehold.co/350x700/transparent/png?text=App+Image';
        }}
        animate={{
          y: [0, -15, 0],
          rotate: [0, 0, 0, 0, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

// ==================== SECCIÓN FEATURES ====================
const FeaturesSection = () => {
  return (
    <section id="features" className="py-32 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
            ¿Por qué elegir <span className="text-foreground">FitAI</span>?
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            Revoluciona tu forma de entrenar con tecnología de inteligencia artificial
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* IA Personalizada */}
          {/* IA Personalizada */}
          <div className="bg-neutral-500/10 backdrop-blur-xl border border-neutral-100/10 rounded-2xl text-white shadow-sm p-10 hover:shadow-xl transition-all duration-500 hover:-translate-y-3 animate-scale-in ">
            <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center mb-8 group-hover: transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 text-black">
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-6 tracking-tight">IA Personalizada</h3>
            <p className="text-muted-foreground leading-relaxed font-light text-lg">
              Algoritmos avanzados que se adaptan a tu nivel, objetivos y progreso para crear rutinas únicas.
            </p>
          </div>

          {/* Objetivos Inteligentes */}
          <div className="bg-neutral-500/10 backdrop-blur-xl border border-neutral-100/10 rounded-2xl text-white shadow-sm p-10 hover:shadow-xl transition-all duration-500 hover:-translate-y-3 animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center mb-8 group-hover: transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 text-black">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-6 tracking-tight">Objetivos Inteligentes</h3>
            <p className="text-muted-foreground leading-relaxed font-light text-lg">
              Define metas específicas y recibe un plan de entrenamiento optimizado para alcanzarlas.
            </p>
          </div>

          {/* Comunidad Activa */}
          <div className="bg-neutral-500/10 backdrop-blur-xl border border-neutral-100/10 rounded-2xl text-white shadow-sm p-10 hover:shadow-xl transition-all duration-500 hover:-translate-y-3 animate-scale-in" style={{ animationDelay: "0.4s" }}>
            <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center mb-8 group-hover: transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 text-black">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-6 tracking-tight">Comunidad Activa</h3>
            <p className="text-muted-foreground leading-relaxed font-light text-lg">
              Conecta con otros usuarios, comparte logros y mantente motivado en tu journey fitness.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

// ==================== SECCIÓN FEATURES ====================
const HowToUse = () => {
  return (
    <section id="howtouse" className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
            ¿Cómo usar <span className="text-foreground">FitAI</span>?
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            Comienza tu transformación en solo 3 simples pasos
          </p>
        </div>

        <div className="relative">
          {/* Móvil */}
          <div className="md:hidden space-y-12">
            {/* Paso 1 */}
            <div className="text-center animate-fade-in-up">
              <div className="relative inline-block mb-8">
                <img
                  src="/how-to-use/1.png"
                  alt="Paso 1: Crea tu perfil"
                  className="max-w-full h-auto"
                />
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-neutral-500/10 backdrop-blur-xl border border-neutral-100/10 rounded-2xl rounded-full flex items-center justify-center text-background font-bold text-xl shadow-lg">
                  1
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">
                Crea tu perfil
              </h3>
              <p className="text-muted-foreground text-lg font-light max-w-sm mx-auto">
                Ingresa tus datos básicos, objetivos y nivel de experiencia
              </p>
            </div>

            {/* Paso 2 */}
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative inline-block mb-8">
                <img
                  src="/how-to-use/2.png"
                  alt="Paso 2: Recibe tu plan IA"
                  className="max-w-full h-auto"
                />
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-neutral-500/10 backdrop-blur-xl border border-neutral-100/10 rounded-2xl rounded-full flex items-center justify-center text-background font-bold text-xl shadow-lg">
                  2
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">
                Recibe tu plan IA
              </h3>
              <p className="text-muted-foreground text-lg font-light max-w-sm mx-auto">
                La IA genera un plan personalizado de entrenamiento y nutrición
              </p>
            </div>

            {/* Paso 3 */}
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="relative inline-block mb-8">
                <img
                  src="/how-to-use/5.png"
                  alt="Paso 3: Entrena y progresa"
                  className="max-w-full h-auto"
                />
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-neutral-500/10 backdrop-blur-xl border border-neutral-100/10 rounded-2xl rounded-full flex items-center justify-center text-background font-bold text-xl shadow-lg">
                  3
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">
                Entrena y progresa
              </h3>
              <p className="text-muted-foreground text-lg font-light max-w-sm mx-auto">
                Sigue tu plan, registra tu progreso y alcanza tus objetivos
              </p>
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-center justify-center gap-8 lg:gap-16">
            {/* Paso 1 */}
            <div className="text-center animate-fade-in-up">
              <div className="relative inline-block mb-8">
                <img
                  src="/how-to-use/1.png"
                  alt="Paso 1: Crea tu perfil"
                  className="w-64 lg:w-80 h-auto"
                />
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-neutral-500/10 backdrop-blur-xl border border-neutral-100/10 rounded-2xl rounded-full flex items-center justify-center text-background font-bold text-xl shadow-lg">
                  1
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">
                Crea tu perfil
              </h3>
              <p className="text-muted-foreground text-lg font-light max-w-xs">
                Ingresa tus datos básicos, objetivos y nivel de experiencia
              </p>
            </div>

            {/* Flecha 1 */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right h-12 w-12 text-foreground/60 animate-pulse"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>

            {/* Paso 2 */}
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative inline-block mb-8">
                <img
                  src="/how-to-use/2.png"
                  alt="Paso 2: Recibe tu plan IA"
                  className="w-64 lg:w-80 h-auto"
                />
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-neutral-500/10 backdrop-blur-xl border border-neutral-100/10 rounded-2xl rounded-full flex items-center justify-center text-background font-bold text-xl shadow-lg">
                  2
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">
                Recibe tu plan IA
              </h3>
              <p className="text-muted-foreground text-lg font-light max-w-xs">
                La IA genera un plan personalizado de entrenamiento y nutrición
              </p>
            </div>

            {/* Flecha 2 */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right h-12 w-12 text-foreground/60 animate-pulse"
                style={{ animationDelay: '0.5s' }}
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>

            {/* Paso 3 */}
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="relative inline-block mb-8">
                <img
                  src="/how-to-use/5.png"
                  alt="Paso 3: Entrena y progresa"
                  className="w-64 lg:w-80 h-auto"
                />
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-neutral-500/10 backdrop-blur-xl border border-neutral-100/10 rounded-2xl rounded-full flex items-center justify-center text-background font-bold text-xl shadow-lg">
                  3
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">
                Entrena y progresa
              </h3>
              <p className="text-muted-foreground text-lg font-light max-w-xs">
                Sigue tu plan, registra tu progreso y alcanza tus objetivos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


  );
};

const MoreInfo = () => {
  return (
    //more info here 
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {/* Estadística 1 */}
          <div className="animate-fade-in-up">
            <div className="text-6xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight">
              50K+
            </div>
            <p className="text-muted-foreground text-xl font-light">
              Usuarios activos
            </p>
          </div>

          {/* Estadística 2 */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-6xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight">
              1M+
            </div>
            <p className="text-muted-foreground text-xl font-light">
              Entrenamientos completados
            </p>
          </div>

          {/* Estadística 3 */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-6xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight">
              98%
            </div>
            <p className="text-muted-foreground text-xl font-light">
              Satisfacción de usuarios
            </p>
          </div>
        </div>
      </div>
    </section>

  );
};

const LastInfo = () => {
  return (
    <section className="py-32 px-6 bg-muted/20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
        <h2 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
          Comienza tu transformación
          <span className="block text-foreground">hoy mismo</span>
        </h2>
        <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Únete a miles de personas que ya están transformando sus vidas con FitAI
        </p>
        <a
          href="https://apps.apple.com/es/app/fitai-ai-trainer-y-nutritian/id6747785726"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className=" text-black bg-white inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors 
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                         disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 
                         h-11 rounded-md bg-foreground text-background hover:text-white hover:bg-neutral-500/10 backdrop-blur-xl border border-neutral-100/10 rounded-2xl transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; transition-font-bold text-xl px-12 py-8 animate-pulse-subtle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-play mr-3 h-7 w-7 hover:text-white"
            >
              <polygon points="6 3 20 12 6 21 6 3"></polygon>
            </svg>
            Descargar Gratis
          </button>
        </a>
      </div>
    </section>


  );
};

const FooterFinal = () => {
  return (
    <footer className="w-full border-t border-border py-16 px-6">
      {/* Contenido centrado */}
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 text-3xl font-bold text-foreground mb-6 tracking-tight">
          <img
            src="/logo.png"
            alt="FitAI Logo"
            className="h-14 w-14 filter brightness-0 invert"
          />
          FitAI
        </div>
        <p className="text-muted-foreground font-light">
          © 2025 FitAI. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};


// ==================== APP PRINCIPAL ====================
function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-white font-grotesk p-4 sm:p-6 bg-[#0a0a0a]">

      {/* HEADER */}
      <header className="flex justify-center items-center fixed top-4 left-0 right-0 z-50 px-4 transition-all duration-300">
        <div
          className={`flex items-center justify-between w-full transition-all duration-300 px-4 py-2 backdrop-blur-xl border border-neutral-100/10 rounded-2xl bg-neutral-500/10 ${
            isScrolled ? "max-w-xl" : "max-w-7xl"
          }`}
        >
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="FitAI Logo"
              className="w-14 h-14 rounded-lg"
            />
            <span className="text-white font-medium text-3xl hidden sm:block">
              FitAI
            </span>
          </div>
          <nav className="flex items-center gap-4 sm:gap-6">
            <a
              href="#features"
              className="text-white font-semibold text-sm sm:text-base hover:text-gray-300 transition-colors"
            >
              Características
            </a>
            <a
              href="#howtouse"
              className="text-white font-semibold text-sm sm:text-base hover:text-gray-300 transition-colors"
            >
              ¿Cómo usar?
            </a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="flex flex-col items-center pt-32 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl px-4 gap-12">

          {/* Texto Izquierda */}
          <div className="lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Tu entrenador y <br /> nutricionista <br /> personal con IA

            </h1>

            <p className="mt-6 text-base md:text-lg text-neutral-300 max-w-md">
              Revoluciona tu forma de entrenar con inteligencia artificial. Rutinas personalizadas, seguimiento inteligente y resultados garantizados.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">

              <a
                href="https://apps.apple.com/es/app/fitai-ai-trainer-y-nutritian/id6747785726"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="bg-white text-black font-bold py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-gray-200 transition-transform hover:scale-105 w-full sm:w-auto justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                  Descargar App
                </button>
              </a>

              <a
                href="#demo"
                className="w-full sm:w-auto"
              >
                <button className="text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-neutral-800 transition-colors w-full sm:w-auto justify-center">
                  Ver Demo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>


                </button>
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-neutral-400 font-medium">
                4.9/5 - +100,000 descargas
              </span>
            </div>
          </div>

          {/* Imagen Derecha */}
          <FloatingImage />

        </div>
      </main>

      {/* Sección Features */}
      <FeaturesSection />
      {/* Sección HowToUse */}
      <HowToUse />
      {/* Sección moreInfo */}
      <MoreInfo />
      {/* Sección moreInfo */}
      <LastInfo />
      {/* Sección FooterFinal */}
      <FooterFinal />

    </div>
  );
}

export default App;
