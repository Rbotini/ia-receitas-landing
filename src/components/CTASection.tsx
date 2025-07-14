
import { Button } from "@/components/ui/button";
import { ArrowRight, ChefHat } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Icon */}
          <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <ChefHat className="w-10 h-10 text-white" />
          </div>

          {/* Main heading */}
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Pronto para transformar sua 
            <span className="block text-yellow-300">experiência culinária?</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-orange-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Junte-se a milhares de pessoas que já descobriram o poder da culinária inteligente. 
            Comece gratuitamente hoje mesmo!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-50 font-bold px-8 py-4 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              Começar Gratuitamente
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 text-lg rounded-2xl transition-all duration-300 hover:scale-105"
            >
              <Link to="/profile">Fazer Login</Link>
            </Button>
          </div>

          {/* Trust elements */}
          <div className="text-orange-100 space-y-2">
            <p className="font-medium">✨ Sem cartão de crédito necessário</p>
            <p className="text-sm opacity-75">Cancele a qualquer momento • Suporte 24/7</p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-red-400/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CTASection;
