import { motion } from "framer-motion";
import { categoryImages } from "@/data/menu-data";

interface CategoryTilesProps {
  onCategorySelect: (category: string) => void;
}

const categories = [
  { key: "beverages", name: "Beverages", subtitle: "Coffee, Teas, Coolers & Shakes" },
  { key: "soups", name: "Soups", subtitle: "Warming & Nutritious Bowls" },
  { key: "salads", name: "Salads", subtitle: "Fresh & Healthy Options" },
  { key: "starters", name: "Starters", subtitle: "Appetizers & Small Plates" },
  { key: "burgers", name: "Burgers", subtitle: "Artisanal & Gourmet" },
  { key: "pizza", name: "Pizza", subtitle: "Wood-Fired Perfection" },
  { key: "pasta", name: "Pasta", subtitle: "Italian Classics" },
  { key: "mains", name: "Mains", subtitle: "Hearty Main Courses" },
];

export default function CategoryTiles({ onCategorySelect }: CategoryTilesProps) {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="font-playfair text-4xl md:text-6xl text-deep-blue mb-4">Our Menu</h1>
          <p className="font-dancing text-xl md:text-2xl gold-gradient">Discover culinary excellence</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.key}
              className="category-card bg-white rounded-2xl overflow-hidden shadow-xl cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 20px 40px hsla(51, 100%, 50%, 0.3)"
              }}
              onClick={() => onCategorySelect(category.key)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={categoryImages[category.key as keyof typeof categoryImages]}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-2xl text-deep-blue mb-2">{category.name}</h3>
                <p className="text-slate-blue mb-4">{category.subtitle}</p>
                <div className="bg-luxury-gold text-deep-blue px-4 py-2 rounded-full text-sm font-semibold inline-block">
                  Explore Menu
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
