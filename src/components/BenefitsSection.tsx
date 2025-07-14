
import { Bot, ShoppingCart, Heart } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Bot,
      title: "Geração de receitas com IA",
      description: "Nossa inteligência artificial cria receitas personalizadas baseadas nos seus gostos, restrições alimentares e ingredientes disponíveis."
    },
    {
      icon: ShoppingCart,
      title: "Lista de compras automática",
      description: "Gere automaticamente listas de compras organizadas por categoria, com quantidades exatas para cada receita que você escolher."
    },
    {
      icon: Heart,
      title: "Favoritos salvos",
      description: "Salve suas receitas preferidas, crie coleções temáticas e acesse rapidamente suas criações culinárias favoritas."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Por que escolher o <span className="text-orange-500">Receitas IA</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolucione sua experiência culinária com ferramentas inteligentes 
            que tornam cozinhar mais fácil, divertido e personalizado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index} 
                className="text-center group hover:scale-105 transition-transform duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-orange-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                  <IconComponent className="w-10 h-10 text-orange-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional stats section */}
        <div className="mt-20 bg-gradient-to-r from-orange-50 to-orange-100 rounded-4xl p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "10K+", label: "Receitas criadas" },
              { number: "95%", label: "Usuários satisfeitos" },
              { number: "500+", label: "Ingredientes na base" },
              { number: "24/7", label: "Suporte disponível" }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
