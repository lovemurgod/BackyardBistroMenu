import { useState } from "react";
import OpeningAnimation from "@/components/opening-animation";
import FloatingBubbles from "@/components/floating-bubbles";
import CategoryTiles from "@/components/category-tiles";
import MenuDisplay from "@/components/menu-display";
import logoImage from "@assets/Screenshot_2025-07-01_231322-removebg-preview_1755704800527.png";

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
    <div className="min-h-screen bg-cream-white overflow-x-hidden">
      <FloatingBubbles />
      
      {!showMain && (
        <OpeningAnimation onComplete={handleAnimationComplete} />
      )}

      {showMain && (
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          {/* Header */}
          <header className="gradient-bg py-4 sticky top-0 z-40 glass-effect">
            <div className="container mx-auto px-4 flex items-center justify-between">
              <img 
                src={logoImage} 
                alt="The Backyard Bistro" 
                className="h-12 md:h-16"
              />
              {selectedCategory && (
                <button 
                  onClick={handleBackToCategories}
                  className="bg-luxury-gold text-deep-blue px-6 py-2 rounded-full font-semibold hover:bg-amber-gold transition-colors"
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
