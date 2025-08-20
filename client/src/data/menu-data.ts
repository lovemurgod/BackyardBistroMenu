// Import all category images in WebP format
import beveragesImage from "@assets/images/categories/beverages.webp";
import soupsImage from "@assets/images/categories/soups.webp";
import saladsImage from "@assets/images/categories/salads.webp";
import startersImage from "@assets/images/categories/starters.webp";
import burgersImage from "@assets/images/categories/burgers.webp";
import pizzaImage from "@assets/images/categories/pizza.webp";
import pastaImage from "@assets/images/categories/pasta.webp";
import mainsImage from "@assets/images/categories/mains.webp";

export interface MenuItem {
  name: string;
  price: string;
  note?: string;
}

export interface MenuSection {
  name: string;
  items: MenuItem[];
}

export interface CategoryData {
  title: string;
  subtitle: string;
  sections: MenuSection[];
}

// Category images mapping for easy replacement
export const categoryImages = {
  beverages: beveragesImage,
  soups: soupsImage,
  salads: saladsImage,
  starters: startersImage,
  burgers: burgersImage,
  pizza: pizzaImage,
  pasta: pastaImage,
  mains: mainsImage,
};

export const menuData: Record<string, CategoryData> = {
  beverages: {
    title: "Beverages",
    subtitle: "Coffee, Teas, Coolers & Specialty Drinks",
    sections: [
      {
        name: "Support Drinks",
        items: [
          { name: "Water", price: "20" },
          { name: "Lemonade", price: "129" },
          { name: "Fresh Watermelon Juice", price: "129" }
        ]
      },
      {
        name: "Organic Teas",
        items: [
          { name: "Peppermint", price: "79" },
          { name: "Chamomile", price: "79" },
          { name: "Hibiscus", price: "79" },
          { name: "Rose", price: "79" },
          { name: "Blue Pea Butterfly Tea", price: "89" }
        ]
      },
      {
        name: "Hot Coffee",
        items: [
          { name: "Espresso", price: "79" },
          { name: "Double Espresso", price: "99" },
          { name: "Americano", price: "109", note: "(Hot/Iced)" },
          { name: "Macchiato", price: "129" },
          { name: "Flat White", price: "149" },
          { name: "Café Latte", price: "149", note: "Add on (caramel, vanilla, Irish, hazelnut) +39" },
          { name: "Cappuccino", price: "169", note: "Add on (caramel, vanilla, Irish, hazelnut) +39" },
          { name: "Irish Coffee", price: "169" },
          { name: "Café Mocha", price: "179", note: "Add on (roasted almond, butterscotch) +39" },
          { name: "Caramel Latte", price: "179" },
          { name: "Vanilla Latte", price: "179" },
          { name: "Hazelnut Latte", price: "179" },
          { name: "Snowy Mocha", price: "179" },
          { name: "Spanish Latte", price: "179" },
          { name: "Vietnamese Coffee", price: "179" },
          { name: "Lotus Biscoff Latte", price: "179" },
          { name: "Tiramisu Latte", price: "179" },
          { name: "French Vanilla Latte", price: "179" },
          { name: "English Toffee Latte", price: "179" },
          { name: "Hot Chocolate", price: "199", note: "Add on (hazelnut, vanilla, caramel) +39" }
        ]
      },
      {
        name: "Cold Coffee",
        items: [
          { name: "Iced Americano", price: "99" },
          { name: "Affogato", price: "149" },
          { name: "Cold Coffee", price: "169", note: "Add on (caramel, vanilla, Irish, hazelnut) +39" },
          { name: "Iced Caramel Macchiato", price: "169" },
          { name: "Iced Mocha", price: "179" },
          { name: "Iced Latte", price: "179", note: "Add on (caramel, vanilla, Irish, hazelnut) +39" },
          { name: "Iced Caramel Latte", price: "179" },
          { name: "Iced Vanilla Latte", price: "179" },
          { name: "Iced Hazelnut Latte", price: "179" },
          { name: "Cranberry Espresso", price: "169" },
          { name: "French Vanilla Cold Coffee", price: "179" },
          { name: "Iced Snowy Mocha", price: "179" },
          { name: "Iced Vietnamese Coffee", price: "179" },
          { name: "Irish Coffee", price: "179" },
          { name: "Twisted Brownie Frappe", price: "249" },
          { name: "Temptation", price: "249" }
        ]
      },
      {
        name: "Noble Coolers",
        items: [
          { name: "Tropical Tremble", price: "219", note: "Muddled mandarin and mint topped with orange juice and cranberry" },
          { name: "The Backyard Colada", price: "249", note: "Our very own special drink with the goodness of orange pineapple coconut milk and vanilla" },
          { name: "Virgin Pinacolada", price: "249", note: "Pineapple juice, coconut milk and coconut syrup" },
          { name: "Blooming Blossom", price: "249", note: "The goodness of fresh watermelon, cranberry, rose and cherry blended well for you" },
          { name: "Copegan", price: "249", note: "Fresh muddled dragon fruit mixed with coconut water and peach" },
          { name: "Tropical Paradise", price: "249", note: "Fresh pomegranate, mandarin, mint, lime and fizz" },
          { name: "The Classic Mojito", price: "199", note: "An all-time favorite drink with flavor of your choice watermelon/kiwi/apple" },
          { name: "Pomo Punch Nade", price: "219", note: "Kokum syrup, black salt, jaljeera, pomegranate juice and mint" },
          { name: "The Pink Lady", price: "199", note: "Apple juice, pineapple juice, pomegranate, passionfruit and lime" },
          { name: "Blue Pea Butterfly Ice Tea", price: "219", note: "A magical blue hued-tea that changes color and refreshes with every sip" },
          { name: "Rose Ice Tea", price: "219", note: "A delicate and fragrant brew infused with the timeless elegance of roses" },
          { name: "Game Over", price: "219", note: "Green chilies, ginger, mint and lemonade" },
          { name: "Shaken Iced Tea", price: "219", note: "Peach, lemon, passion fruit" }
        ]
      },
      {
        name: "Bubble Tea & Shakes",
        items: [
          { name: "Regally Blonde (Tea)", price: "229" },
          { name: "Coffee Tea", price: "249" },
          { name: "Nutella", price: "249" },
          { name: "Berry Blast", price: "249" },
          { name: "Lotus Biscoff", price: "249" },
          { name: "Cold Chocolate", price: "249" },
          { name: "Oreo Love", price: "249" },
          { name: "Salted Caramel", price: "249" }
        ]
      }
    ]
  },
  soups: {
    title: "Soups",
    subtitle: "Warming & Nutritious Bowls",
    sections: [
      {
        name: "Signature Soups",
        items: [
          { name: "Mushroom & Cottage Cheese", price: "129", note: "Mushroom with crumbled cottage cheese" },
          { name: "Lemon Pepper", price: "129", note: "Asian style exotic vegetable broth cooked with chunks of zucchini" },
          { name: "Roasted Tomato and Basil", price: "129", note: "Roasted tomato broth with garlic crostini" },
          { name: "Cream of Broccoli", price: "149", note: "Cubes of broccoli and broccoli paste cooked in vegetable broth topped with fresh cream" },
          { name: "Chicken Fagioli Soup", price: "149", note: "Tangy red kidney beans puree topped with Marconi garnish" },
          { name: "Tuscan Chicken Soup", price: "149", note: "Cubes of chicken, celery & carrot cooked in chicken broth, Tuscan style" }
        ]
      }
    ]
  },
  salads: {
    title: "Salads",
    subtitle: "Fresh & Healthy Options",
    sections: [
      {
        name: "Fresh Salads",
        items: [
          { name: "Caesar Veg Salad", price: "249", note: "Ice berg romaine garlic croutons and parmesan shavings and classic Caesar dressing" },
          { name: "Caesar Chicken Salad", price: "279", note: "Ice berg romaine garlic croutons and parmesan shavings and classic Caesar dressing" },
          { name: "Honey Mustard Chicken Salad", price: "249", note: "Grilled chicken chunks chicken sausages and romaine lettuce dressed in honey mustard dressing" },
          { name: "Fruit & Fiber Salad", price: "249", note: "Apple & pears slices ice berg topped with walnut mix & lemon chili vinaigrette" },
          { name: "Fattoush", price: "249", note: "A Lebanese origin salad with roman lettuce, other vegetables pita bread chips, sumac, olive oil and lemon juice" },
          { name: "Spicy Mexican", price: "249", note: "Spicy tangy Mexican sauce mixed with red kidney beans, olives, onions, capsicum & corn" },
          { name: "Fruit Bowl", price: "249", note: "A seasonal fruit bowl" },
          { name: "Smoothie Bowl", price: "249", note: "Hung curd mixed with strawberry/blueberry and topped with fresh fruits" },
          { name: "Protein Veg Bowl", price: "299", note: "baked exotic veggies topped with herb marinated Roasted chicken breast dressed with homemade vinaigrette" },
          { name: "Protein Chicken Bowl", price: "299", note: "baked exotic veggies topped with herb marinated Roasted chicken breast dressed with homemade vinaigrette" }
        ]
      }
    ]
  },
  starters: {
    title: "Starters",
    subtitle: "Appetizers & Small Plates",
    sections: [
      {
        name: "Appetizers",
        items: [
          { name: "Salted Fries", price: "149", note: "Potato fries served with tomato ketchup" },
          { name: "Peri Peri Fries", price: "169", note: "Potato fries served with tomato ketchup" },
          { name: "Chicken Peri Peri Fries", price: "199", note: "Peri peri fries with crunchy chicken chunks topped with cheddar cheese sauce" },
          { name: "Backyard Chilli Wontons", price: "199", note: "Crispy deep fried wontons served with our fiery backyard chilli dip—bold, crunchy, unforgettable (Veg/Chicken)" },
          { name: "Salsa Nachos", price: "219", note: "An all-time favourite snack with a combination of nachos salsa and sour cream (Add on chicken +50)" },
          { name: "Honey Paprika Oyster Mushrooms", price: "219", note: "Deep fried oyster mushrooms tossed in honey paprika oyster sauce" },
          { name: "Lotus Stem", price: "249", note: "Choice of Sauces (Honey Chilli, Honey Chipotle, Barbecue Sauce, Schezwan)" },
          { name: "Tempura Baby Corn", price: "199", note: "Baby corn coated with tempura batter and fried, tossed with homemade spicy sauce" },
          { name: "Tempura Paneer", price: "249", note: "Paneer coated with tempura batter and fried, tossed with homemade spicy sauce" },
          { name: "Tempura Chicken", price: "249", note: "Chicken strips coated with tempura batter and fried, tossed with homemade spicy sauce" },
          { name: "Crispy Peri Peri Chicken", price: "219", note: "Deep fried chicken pieces which is marinated with robust flavors and tossed in peri peri sprinkler" },
          { name: "Smokey Chicken Tenders", price: "249", note: "Marinated chicken tenders fried and then tossed in chilli oil" },
          { name: "Chilli Basil Paneer/Chicken", price: "249", note: "Fried chicken cubes tossed in chilli soy sauce with exotic veggies and a touch of pesto sauce" },
          { name: "Chipotle Chicken Tenders", price: "249", note: "Deep fried tender chicken fingers tossed in honey chipotle sauce" },
          { name: "Honey Chilli Sesame Chicken", price: "249", note: "A classic Chinese delicacy made of fried chicken cubes tossed in honey chilli sauce" },
          { name: "Teriyaki Chicken", price: "249", note: "Fried chicken chunks tossed in flavored teriyaki sauce" },
          { name: "Thai Chicken Satay with Peanut Sauce", price: "249", note: "A southeast Asian skewer grilled and served with a delicious peanut sauce" },
          { name: "Grill Chicken Wings with Chef Special Sauce", price: "249", note: "grilled Chicken wings marinated in herbs and tossed in homemade Hawaiian sauce" }
        ]
      }
    ]
  },
  burgers: {
    title: "Burgers",
    subtitle: "Artisanal & Gourmet",
    sections: [
      {
        name: "Gourmet Burgers",
        items: [
          { name: "Virgin Lentil Burger", price: "199", note: "Mixed lentil patty+ ice berg+ coleslaw+ tomato+ cucumber+ garlic mayo+ spicy mayo" },
          { name: "Veg Protein Burger", price: "199", note: "Veg protein patty+ ice berg+ tomato+ onion+ cucumber+ cheddar cheese" },
          { name: "Paneer Tikka Burger", price: "249", note: "Sliced paneer tossed in homemade tandoori masala+ ice berg+ mint mayo+ lacha pyaaz+ coleslaw" },
          { name: "Paneer BBQ Burger", price: "249", note: "BBQ paneer chunks+ ice berg+ caramelized onion+ Sliced cheese" },
          { name: "Chicken BBQ Burger", price: "249", note: "BBQ chicken strips + ice berg + caramelized onions + sunny side up egg" },
          { name: "Grill Chicken Burger", price: "249", note: "Ice berg+ coleslaw+ Marinated grilled chicken breast+ jalapeños+ sliced cheese" },
          { name: "Nashville Fried Chicken Burger", price: "279", note: "A crispy chicken patty stuffed between the buns with ice berg cheese sauce and jalapenos" },
          { name: "Butter Chicken Burger", price: "359", note: "Mint-kissed chicken patty with creamy butter chicken sauce, fresh coriander, and tangy pickled onions in a soft bun" },
          { name: "Smash Lamb Burger", price: "399", note: "Two Crispy thin smash lamb patty+ caramelized onion+ cheddar cheese+ sliced cheese" },
          { name: "Signature Lamb Burger", price: "399", note: "Homemade lamb patty+ caramelized pineapple slice+ caramelized onion+ chef's special sauce+ cheddar sauce" }
        ]
      }
    ]
  },
  pizza: {
    title: "Pizza",
    subtitle: "Wood-Fired Perfection",
    sections: [
      {
        name: "Artisan Pizzas",
        items: [
          { name: "Margherita", price: "379", note: "classic Italian tomato sauce with mozzarella and basil" },
          { name: "Hawaiian Delight Veg", price: "399", note: "Bell peppers+ pineapple+ sundried tomato+ paprika" },
          { name: "Mushroom And Broccoli", price: "419", note: "Mushroom+ broccoli+ olives+ cheese" },
          { name: "Country Side Veg", price: "419", note: "American corn+ capsicum+ onion+ zucchini + cheese+ jalapenos" },
          { name: "BBQ Paneer", price: "419", note: "BBQ flavoured paneer topped with sweet caramelized, jalapeño and mozzarella" },
          { name: "Backyard's Summer Veggie", price: "419", note: "The house special fully loaded pizza topped with American corn onions, olive, bell pepper and jalapeno" },
          { name: "Spicy Chicken Paprika", price: "449", note: "Chicken cubes+ onion+ paprika+ bell peppers" },
          { name: "Meat Lover's Pizza", price: "479", note: "Chicken keema+ chicken salami+ chicken sausages+ jalapenos+ balsamic reduction" }
        ]
      }
    ]
  },
  pasta: {
    title: "Pasta",
    subtitle: "Italian Classics",
    sections: [
      {
        name: "Traditional Pasta",
        items: [
          { name: "Mac N Cheese", price: "299", note: "A traditional dish of macaroni and baked until creamy and cheesy" },
          { name: "Alfredo", price: "299", note: "Penne& exotic veggies/chicken& penne cooked in a delicious homemade alfredo sauce topped with black olives and parmesan" },
          { name: "Arrabiata", price: "299", note: "Penne& exotic veggies/chicken & penne cooked with rich and spicy Italian sauce" },
          { name: "Basil Pesto", price: "299", note: "Penne& exotic veggies/chicken & penne cooked in a traditional homemade pesto sauce topped with black olives and parmesan served with garlic bread" },
          { name: "Aglio e Olio", price: "299", note: "Spaghetti tossed in garlic crushed chilli & extra virgin olive oil with some exotic vegetables/chicken" },
          { name: "Devil Spaghetti With Chicken Meatball", price: "349", note: "Spaghetti tossed in homemade devil's sauce + baked chicken meat balls+ garlic bread" },
          { name: "Spaghetti Meat Bowl", price: "399", note: "Spaghetti & tender lamb meatballs cooked together in a homemade Italian spicy sauce" }
        ]
      }
    ]
  },
  mains: {
    title: "Mains",
    subtitle: "Hearty Main Courses",
    sections: [
      {
        name: "Rice & Noodle Dishes",
        items: [
          { name: "Fried Rice (Veg/Non-Veg)", price: "179/199", note: "Wok tossed Chinese style rice" },
          { name: "Hakka Noodles (Veg/Non Veg)", price: "179/199", note: "Wok tossed Chinese style noodles" },
          { name: "Schezwan Noodles (Veg/Non-Veg)", price: "179/199", note: "Wok tossed Chinese style noodles mixed with Schezwan sauce" },
          { name: "Schezwan Rice (Veg/Non-Veg)", price: "179/199", note: "Wok tossed Chinese style rice mixed with Schezwan sauce" },
          { name: "Rajma Chaval", price: "179", note: "A comforting wholesome meal Punjabi style rajma chaval served with kachumber chilli and lemon" },
          { name: "Spicy Korean (Veg/Non-Veg)", price: "219/249", note: "Noodles/Rice tossed in a fiery gochujang sauce mixed with cottage cheese/chicken" },
          { name: "Uncle Maung Noodles/Rice", price: "219/249", note: "Veg/chicken tossed in differently made chilli garlic sauce tamarind and vegetables" },
          { name: "Backyard Style Noodles/Rice", price: "219/249", note: "Veg/nonveg tossed in exotic robust flavours and veggies" },
          { name: "Thai Curry Rice (Chicken/Veg)", price: "250", note: "Rich coconut gravy and aromatic spices. Served with hot steam rice" },
          { name: "Backyard's Rice Bowl", price: "249", note: "Rice tossed in exotic veggies red chilly and curry powder served with lemon grass flavoured curry" },
          { name: "Mongolian Chicken", price: "249", note: "Broasted chicken tossed in homemade brown sauce with bell peppers served with burnt garlic rice" },
          { name: "Pan Fried Noodles (Veg/Non-Veg)", price: "249", note: "Crispy pan-fried noodle cake mixed with saucy vegetables/served with a sunny side up egg" }
        ]
      },
      {
        name: "Specialties",
        items: [
          { name: "Khow Suey (Veg/Chicken)", price: "399", note: "This one dish meal is sure to strike every single one of your taste buds with its vibrant flavours. The Burmese Khowsuey features noodles, a vegetable curry made with coconut milk and elaborate spices and an array of toppings" },
          { name: "Ramen Bowl (Veg/Chicken)", price: "299", note: "Veg/chicken broth+ udon noodles+ exotic veggies+ tender/chicken/paneer/egg" },
          { name: "Kung Pao Sizzling Steak (Veg/Chicken)", price: "379/399", note: "Chicken/paneer steak tossed with homemade kung pao sauce served with spicy noodle/rice and exotic vegetables" },
          { name: "Grilled Chicken Peanut Butter Sizzling Steak (Chicken/Paneer)", price: "379/399", note: "Chicken/paneer steak tossed with homemade peanut butter sauce served with French fries and salad mixed with Italian dressing" },
          { name: "Stroganoff (Veg/Chicken)", price: "229/249", note: "exotic veggies/Chicken chunks cooked in a delicious homemade stroganoff served with a bowl of rice" },
          { name: "Makhani With Flavoured Rice (Veg/Non-Veg)", price: "219", note: "Choice of fresh n soft paneer/chicken cubes marinated with Indian spice smoked & tossed in tomato base gravy + butter + cream" }
        ]
      },
      {
        name: "Grilled Bao",
        items: [
          { name: "Crispy Paneer Bao", price: "219", note: "Deep fried crispy paneer fingers tossed with spicy mayo" },
          { name: "Exotic Veg Bao", price: "219", note: "Exotic vegetables tossed in coconut-based gravy" },
          { name: "Korean Chicken Bao", price: "219", note: "Pan tossed tender Chicken chunks mixed with Korean sauce topped with sesame seeds" },
          { name: "Spicy Chicken Bao", price: "219", note: "Minced chicken tossed in homemade spicy sauce" }
        ]
      }
    ]
  }
};


