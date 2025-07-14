
import { Button } from "@/components/ui/button";
import { ChefHat, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
              <ChefHat className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Receitas IA</h2>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Descubra receitas{" "}
            <span className="relative">
              incríveis
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 text-yellow-300 animate-pulse" />
            </span>{" "}
            com IA
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-orange-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transforme sua cozinha com receitas personalizadas criadas por inteligência artificial. 
            Descubra novos sabores, economize tempo e crie memórias deliciosas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-50 font-semibold px-8 py-4 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Cadastrar Grátis
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 text-lg rounded-2xl transition-all duration-300 hover:scale-105"
            >
              <Link to="/profile">Entrar</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 text-orange-100">
            <p className="text-sm mb-4">Mais de 10.000 receitas já criadas</p>
            <div className="flex justify-center items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 lg:h-20">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
