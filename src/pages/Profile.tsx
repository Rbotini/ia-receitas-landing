import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, Clock, Heart, Users, Utensils, Leaf, Trophy, ArrowRight } from "lucide-react";

const Profile = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [profile, setProfile] = useState({
    dietaryRestrictions: [] as string[],
    cuisineTypes: [] as string[],
    cookingLevel: "",
    cookingTime: "",
    mealTypes: [] as string[],
    healthGoals: [] as string[]
  });

  const steps = [
    {
      title: "Restrições Alimentares",
      subtitle: "Nos conte sobre suas preferências dietéticas",
      options: [
        { id: "vegetarian", label: "Vegetariano", icon: Leaf },
        { id: "vegan", label: "Vegano", icon: Leaf },
        { id: "gluten-free", label: "Sem Glúten", icon: Heart },
        { id: "lactose-free", label: "Sem Lactose", icon: Heart },
        { id: "keto", label: "Cetogênica", icon: Trophy },
        { id: "none", label: "Nenhuma Restrição", icon: Utensils }
      ],
      field: "dietaryRestrictions"
    },
    {
      title: "Tipos de Cozinha Favoritos",
      subtitle: "Quais sabores você mais aprecia?",
      options: [
        { id: "brazilian", label: "Brasileira", icon: Heart },
        { id: "italian", label: "Italiana", icon: ChefHat },
        { id: "asian", label: "Asiática", icon: Utensils },
        { id: "mexican", label: "Mexicana", icon: Heart },
        { id: "mediterranean", label: "Mediterrânea", icon: Leaf },
        { id: "american", label: "Americana", icon: Users }
      ],
      field: "cuisineTypes"
    },
    {
      title: "Nível de Experiência",
      subtitle: "Como você se sente na cozinha?",
      options: [
        { id: "beginner", label: "Iniciante", icon: Heart },
        { id: "intermediate", label: "Intermediário", icon: ChefHat },
        { id: "advanced", label: "Avançado", icon: Trophy }
      ],
      field: "cookingLevel",
      single: true
    },
    {
      title: "Tempo Disponível",
      subtitle: "Quanto tempo você tem para cozinhar?",
      options: [
        { id: "15min", label: "Até 15 minutos", icon: Clock },
        { id: "30min", label: "Até 30 minutos", icon: Clock },
        { id: "1hour", label: "Até 1 hora", icon: Clock },
        { id: "2hours", label: "Mais de 1 hora", icon: Clock }
      ],
      field: "cookingTime",
      single: true
    }
  ];

  const currentStepData = steps[currentStep - 1];

  const handleOptionSelect = (optionId: string) => {
    const field = currentStepData.field as keyof typeof profile;
    
    if (currentStepData.single) {
      setProfile(prev => ({ ...prev, [field]: optionId }));
    } else {
      setProfile(prev => {
        const currentArray = prev[field] as string[];
        const updated = currentArray.includes(optionId)
          ? currentArray.filter(id => id !== optionId)
          : [...currentArray, optionId];
        return { ...prev, [field]: updated };
      });
    }
  };

  const isOptionSelected = (optionId: string) => {
    const field = currentStepData.field as keyof typeof profile;
    if (currentStepData.single) {
      return profile[field] === optionId;
    }
    return (profile[field] as string[]).includes(optionId);
  };

  const canProceed = () => {
    const field = currentStepData.field as keyof typeof profile;
    if (currentStepData.single) {
      return profile[field] !== "";
    }
    return (profile[field] as string[]).length > 0;
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Finalizar perfil
      console.log("Perfil completo:", profile);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <ChefHat className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Personalize suas Receitas
            </h1>
            <p className="text-xl text-orange-100 mb-8">
              Vamos conhecer seus gostos para criar receitas perfeitas para você
            </p>
            
            {/* Progress bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex justify-between text-sm text-orange-200 mb-2">
                <span>Passo {currentStep} de {steps.length}</span>
                <span>{Math.round((currentStep / steps.length) * 100)}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div 
                  className="bg-white rounded-full h-2 transition-all duration-300"
                  style={{ width: `${(currentStep / steps.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Step Content */}
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  {currentStepData.title}
                </h2>
                <p className="text-gray-600 text-lg">
                  {currentStepData.subtitle}
                </p>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {currentStepData.options.map((option) => {
                  const Icon = option.icon;
                  const selected = isOptionSelected(option.id);
                  
                  return (
                    <button
                      key={option.id}
                      onClick={() => handleOptionSelect(option.id)}
                      className={`p-6 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 text-left ${
                        selected
                          ? "border-orange-500 bg-orange-50 shadow-lg"
                          : "border-gray-200 bg-white hover:border-orange-300 hover:shadow-md"
                      }`}
                    >
                      <div className={`p-3 rounded-lg ${
                        selected ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-600"
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`font-semibold ${
                        selected ? "text-orange-700" : "text-gray-700"
                      }`}>
                        {option.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="px-8"
                >
                  Voltar
                </Button>

                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="px-8 bg-orange-500 hover:bg-orange-600 text-white"
                >
                  {currentStep === steps.length ? "Finalizar" : "Próximo"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Bottom text */}
          <div className="text-center mt-8">
            <p className="text-orange-100">
              🔒 Seus dados são privados e seguros
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;