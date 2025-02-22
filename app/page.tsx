import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen p-8 text-center animate-fade-in hero-gradient">
        <div className="w-48 h-48 rounded-full overflow-hidden mb-8 border-4 border-primary/30 shadow-xl hover-scale relative">
          <Image
            src="/Profil.jpg"
            alt="Profil Fotoğrafı"
            fill
            className="object-cover rounded-full"
            priority
            sizes="(max-width: 768px) 192px, 192px"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">Merhaba, Ben Seher Akyel</h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-8">Full Stack Geliştirici</p>
        <div className="flex gap-4">
          <a
            href="#projeler"
            className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            Projelerimi Gör
          </a>
          <a
            href="#iletisim"
            className="px-6 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary/10 transition-all duration-300 transform hover:-translate-y-1"
          >
            İletişime Geç
          </a>
        </div>
      </section>

      {/* Hakkımda Section */}
      <section id="hakkimda" className="py-20 about-gradient">
        <div className="max-w-4xl mx-auto px-8 animate-slide-in">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Hakkımda</h2>
          <p className="text-lg leading-relaxed text-foreground/90 bg-background/50 backdrop-blur-sm p-6 rounded-xl shadow-lg">
            Ben Seher Akyel, 20 yaşındayım ve Türkiye'de yaşıyorum. Şu an yazılım geliştirme öğreniyorum.
          
          </p>
        </div>
      </section>

      {/* Yetenekler Section */}
      <section id="yetenekler" className="py-20 skills-gradient">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Yeteneklerim</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-background/50 backdrop-blur-sm rounded-xl shadow-lg hover-scale animate-scale-in" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="font-bold mb-2 text-primary">Frontend</h3>
              <p className="text-center text-sm">React, Next.js, TypeScript</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-background/50 backdrop-blur-sm rounded-xl shadow-lg hover-scale animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="font-bold mb-2 text-secondary">Backend</h3>
              <p className="text-center text-sm">Node.js, Express, PostgreSQL</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-background/50 backdrop-blur-sm rounded-xl shadow-lg hover-scale animate-scale-in" style={{animationDelay: '0.3s'}}>
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="font-bold mb-2 text-accent">Araçlar</h3>
              <p className="text-center text-sm">Git, Docker, AWS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projeler Section */}
      <section id="projeler" className="py-20 projects-gradient">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Projelerim</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover-scale animate-fade-in" style={{animationDelay: '0.1s'}}>
              <h3 className="font-bold text-xl mb-4 text-primary">Proje 1</h3>
              <p className="text-foreground/80 mb-4">Proje açıklaması buraya gelecek.</p>
              <div className="flex gap-4">
                <a href="#" className="text-sm text-primary hover:text-primary-dark transition-colors">Demo</a>
                <a href="#" className="text-sm text-primary hover:text-primary-dark transition-colors">GitHub</a>
              </div>
            </div>
            <div className="bg-background/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover-scale animate-fade-in" style={{animationDelay: '0.2s'}}>
              <h3 className="font-bold text-xl mb-4 text-primary">Proje 2</h3>
              <p className="text-foreground/80 mb-4">Proje açıklaması buraya gelecek.</p>
              <div className="flex gap-4">
                <a href="#" className="text-sm text-primary hover:text-primary-dark transition-colors">Demo</a>
                <a href="#" className="text-sm text-primary hover:text-primary-dark transition-colors">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim Section */}
      <section id="iletisim" className="py-20 contact-gradient">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 gradient-text">İletişime Geç</h2>
          <p className="mb-8 text-foreground/80">Benimle çalışmak ister misiniz? Hemen iletişime geçin!</p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="mailto:email@example.com"
              className="flex items-center gap-2 px-6 py-3 bg-background/50 backdrop-blur-sm rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            >
              <span>📧 email@example.com</span>
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-background/50 backdrop-blur-sm rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            >
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-background/50 backdrop-blur-sm rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            >
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-foreground/60 bg-background/50 backdrop-blur-sm mt-20">
        <p>© 2024 Seher Akyel. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}
