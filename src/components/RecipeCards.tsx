
import { Clock, Users } from "lucide-react";

const RecipeCards = () => {
  const recipes = [
    {
      id: 1,
      title: "Risotto de Cogumelos",
      description: "Cremoso risotto italiano com mix de cogumelos frescos e parmesão aged.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      time: "35 min",
      servings: "4 pessoas"
    },
    {
      id: 2,
      title: "Salmão com Legumes",
      description: "Salmão grelhado com vegetables da estação e molho de ervas finas.",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop",
      time: "25 min",
      servings: "2 pessoas"
    },
    {
      id: 3,
      title: "Brownie de Chocolate",
      description: "Brownie artesanal com chocolate belga e nozes crocantes por cima.",
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop",
      time: "45 min",
      servings: "8 porções"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Receitas que <span className="text-orange-500">inspiram</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra algumas das receitas mais populares criadas pela nossa IA. 
            Cada uma é única e personalizada para você.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {recipes.map((recipe, index) => (
            <div 
              key={recipe.id} 
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={recipe.image} 
                  alt={recipe.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {recipe.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {recipe.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{recipe.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{recipe.servings}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipeCards;
