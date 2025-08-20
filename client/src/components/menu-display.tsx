import { motion } from "framer-motion";
import { menuData, CategoryData } from "@/data/menu-data";

interface MenuDisplayProps {
  category: string;
}

export default function MenuDisplay({ category }: MenuDisplayProps) {
  const data: CategoryData | undefined = menuData[category];

  if (!data) {
    return (
      <div className="py-16 px-4 text-center">
        <h2 className="font-playfair text-2xl text-deep-blue">Category not found</h2>
      </div>
    );
  }

  return (
    <motion.section 
      className="py-16 px-4 bg-gradient-to-b from-cream-white to-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl text-deep-blue mb-4">{data.title}</h2>
          <p className="font-dancing text-xl text-slate-blue">{data.subtitle}</p>
        </motion.div>

        <div className="space-y-8">
          {data.sections.map((section, sectionIndex) => (
            <motion.div
              key={section.name}
              className="bg-white rounded-2xl shadow-xl p-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.2, ease: "easeOut" }}
            >
              <h3 className="font-playfair text-2xl text-deep-blue mb-6 pb-2 border-b border-luxury-gold">
                {section.name}
              </h3>
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={`${item.name}-${itemIndex}`}
                    className="flex flex-col md:flex-row md:items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (sectionIndex * 0.2) + (itemIndex * 0.1) }}
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold text-deep-blue text-lg">{item.name}</h4>
                      {item.note && (
                        <p className="text-slate-blue text-sm mt-1">{item.note}</p>
                      )}
                    </div>
                    <div className="text-luxury-gold font-bold text-lg mt-2 md:mt-0">
                      ₹{item.price}/-
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
