import { useState } from "react";
import OpeningAnimation from "@/components/opening-animation";
import FloatingBubbles from "@/components/floating-bubbles";
import CategoryTiles from "@/components/category-tiles";
import MenuDisplay from "@/components/menu-display";
import logoImage from "@assets/generated_images/Luxury_bistro_golden_logo_c69da49e.png";

export default function Home() {
  const [showMain, setShowMain] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleAnimationComplete = () => {
    setShowMain(true);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen bg-charcoal-grey overflow-x-hidden">
      <FloatingBubbles />
      
      {!showMain && (
        <OpeningAnimation onComplete={handleAnimationComplete} />
      )}

      {showMain && (
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          {/* Header */}
          <header className="bg-charcoal-grey py-4 sticky top-0 z-40 border-b border-luxury-gold/20">
            <div className="container mx-auto px-4 flex items-center justify-center">
              <div className="flex-1 flex justify-center">
                <img 
                  src={logoImage} 
                  alt="The Backyard Bistro" 
                  className="h-16 md:h-20"
                />
              </div>
              {selectedCategory && (
                <button 
                  onClick={handleBackToCategories}
                  className="absolute right-4 bg-luxury-gold text-deep-blue px-6 py-2 rounded-full font-semibold hover:bg-amber-gold transition-colors"
                >
                  Back to Categories
                </button>
              )}
            </div>
          </header>

          {/* Main Content */}
          {!selectedCategory ? (
            <CategoryTiles onCategorySelect={handleCategorySelect} />
          ) : (
            <MenuDisplay category={selectedCategory} />
          )}
        </div>
      )}
    </div>
  );
}
