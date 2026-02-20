export const menuCategories = [
  {
    id: 'coffee',
    name: 'Coffee',
    image: 'https://images.unsplash.com/photo-1758180447681-970a25db7d98?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxsYXR0ZSUyMGFydCUyMGNvZmZlZSUyMGN1cCUyMG9uJTIwd29vZGVuJTIwdGFibGUlMjB3YXJtJTIwY296eXxlbnwwfHx8fDE3NzE2MDU0MjZ8MA&ixlib=rb-4.1.0&q=85'
  },
  {
    id: 'frappe',
    name: 'Frappe',
    image: 'https://images.pexels.com/photos/6767147/pexels-photo-6767147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    id: 'cozy-sips',
    name: 'Cozy Sips',
    image: 'https://images.pexels.com/photos/6767147/pexels-photo-6767147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    id: 'iced-teas',
    name: 'Iced Teas',
    image: 'https://images.pexels.com/photos/905485/pexels-photo-905485.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    id: 'hot-teas',
    name: 'Hot Teas',
    image: 'https://images.pexels.com/photos/905485/pexels-photo-905485.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    id: 'sandwiches',
    name: 'Sandwiches',
    image: 'https://images.unsplash.com/photo-1767034235859-d656cd447242?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHw0fHxnb3VybWV0JTIwc2FuZHdpY2glMjBvbiUyMHBsYXRlJTIwY2FmZSUyMHNldHRpbmd8ZW58MHx8fHwxNzcxNjA1NDI3fDA&ixlib=rb-4.1.0&q=85'
  },
  {
    id: 'rolls-fries',
    name: 'Rolls & Fries',
    image: 'https://images.pexels.com/photos/12420469/pexels-photo-12420469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    id: 'pizza-burger',
    name: 'Pizza, Burger & Bruschetta',
    image: 'https://images.pexels.com/photos/12420469/pexels-photo-12420469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    id: 'pastries-cakes',
    name: 'Pastries & Cakes',
    image: 'https://images.unsplash.com/photo-1705471993878-38697f37d550?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHwzfHxkZWxpY2lvdXMlMjBjaG9jb2xhdGUlMjBjYWtlJTIwc2xpY2UlMjBvbiUyMHBsYXRlfGVufDB8fHx8MTc3MTYwNTQzNnww&ixlib=rb-4.1.0&q=85'
  },
  {
    id: 'milkshakes-desserts',
    name: 'Milkshakes & Desserts',
    image: 'https://images.pexels.com/photos/28525200/pexels-photo-28525200.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  }
];

export const menuItems = [
  // Coffee
  { id: 1, name: 'Espresso', category: 'coffee', description: 'Rich and bold espresso shot, crafted from premium Arabica beans', price: { small: 90, large: 120 } },
  { id: 2, name: 'Americano', category: 'coffee', description: 'Smooth espresso diluted with hot water for a refined taste', price: { small: 110, large: 140 } },
  { id: 3, name: 'Cafe Latte', category: 'coffee', description: 'Creamy espresso blended with steamed milk and delicate foam', price: { small: 130, large: 180 } },
  { id: 4, name: 'Cappuccino', category: 'coffee', description: 'Perfect harmony of espresso, steamed milk, and velvety foam', price: { small: 130, large: 180 } },
  { id: 5, name: 'Cafe Mocha', category: 'coffee', description: 'Indulgent blend of espresso, chocolate, and steamed milk', price: { small: 170, large: 230 } },
  { id: 6, name: 'Caramel Macchiato', category: 'coffee', description: 'Sweet caramel meets bold espresso with layers of foam', price: { small: 170, large: 230 } },
  { id: 7, name: 'Bean Board Signature', category: 'coffee', description: 'Our exclusive house blend with a unique aromatic profile', price: { small: 150, large: 190 } },
  { id: 8, name: 'Belgian Hot Chocolate', category: 'coffee', description: 'Rich Belgian chocolate melted into creamy steamed milk', price: { small: 210, large: 360 } },
  { id: 9, name: 'Marble Mocha', category: 'coffee', description: 'Swirled white and dark chocolate with espresso perfection', price: { small: 190, large: 290 } },
  { id: 10, name: 'Brewed Coffee Jar', category: 'coffee', description: 'Freshly brewed artisan coffee served in a rustic jar', price: { small: 190, large: 340 } },
  { id: 11, name: 'Cortado', category: 'coffee', description: 'Perfectly balanced espresso cut with warm steamed milk', price: { small: 110 } },

  // Frappe
  { id: 12, name: 'Chocolate Chip', category: 'frappe', description: 'Blended iced frappe with chocolate chips and cream', price: { regular: 160 } },
  { id: 13, name: 'White Chocolate', category: 'frappe', description: 'Creamy white chocolate blended into an icy delight', price: { regular: 160 } },
  { id: 14, name: 'Raspberry Chocolate', category: 'frappe', description: 'Tangy raspberry swirled with rich chocolate frappe', price: { regular: 190 } },
  { id: 15, name: 'Strawberry Chocolate', category: 'frappe', description: 'Fresh strawberry essence mixed with velvety chocolate', price: { regular: 190 } },
  { id: 16, name: 'Blueberry Chocolate', category: 'frappe', description: 'Antioxidant-rich blueberries blended with chocolate', price: { regular: 190 } },
  { id: 17, name: 'Blueberry Cream', category: 'frappe', description: 'Smooth blueberry frappe with whipped cream topping', price: { regular: 160 } },
  { id: 18, name: 'Strawberry Cream', category: 'frappe', description: 'Sweet strawberry blended with luscious cream', price: { regular: 160 } },
  { id: 19, name: 'Black Current Cream', category: 'frappe', description: 'Bold black currant flavor with creamy smooth texture', price: { regular: 160 } },

  // Cozy Sips
  { id: 20, name: 'Flavoured Steamer', category: 'cozy-sips', description: 'Steamed milk infused with your choice of flavor syrup', price: { regular: 160 } },
  { id: 21, name: 'Hot Chocolate', category: 'cozy-sips', description: 'Classic hot chocolate made with premium cocoa', price: { regular: 180 } },
  { id: 22, name: 'Coffee Frappe', category: 'cozy-sips', description: 'Chilled coffee blended with ice and cream', price: { regular: 160 } },
  { id: 23, name: 'Mocha Frappe', category: 'cozy-sips', description: 'Iced mocha perfection blended smooth and creamy', price: { regular: 190 } },
  { id: 24, name: 'Affogato', category: 'cozy-sips', description: 'Vanilla ice cream drowned in hot espresso shot', price: { regular: 160 } },
  { id: 25, name: 'Frappogato', category: 'cozy-sips', description: 'Frappe meets affogato - iced coffee with ice cream', price: { regular: 250 } },
  { id: 26, name: 'Iced Americano', category: 'cozy-sips', description: 'Chilled Americano over ice for a refreshing kick', price: { regular: 130 } },
  { id: 27, name: 'Iced Latte', category: 'cozy-sips', description: 'Cold milk poured over espresso with ice cubes', price: { regular: 180 } },
  { id: 28, name: 'Iced Mocha', category: 'cozy-sips', description: 'Chocolate mocha served chilled over ice', price: { regular: 190 } },

  // Iced Teas
  { id: 29, name: 'Blueberry', category: 'iced-teas', description: 'Refreshing iced tea infused with blueberry essence', price: { regular: 130 } },
  { id: 30, name: 'Raspberry / Raspberry Mint', category: 'iced-teas', description: 'Tangy raspberry tea with optional cooling mint', price: { regular: 130 } },
  { id: 31, name: 'Lime Mint / Ginger Mint', category: 'iced-teas', description: 'Zesty lime or spicy ginger paired with fresh mint', price: { regular: 130 } },
  { id: 32, name: 'Orange', category: 'iced-teas', description: 'Citrusy orange iced tea bursting with flavor', price: { regular: 130 } },
  { id: 33, name: 'Blue Curacao', category: 'iced-teas', description: 'Vibrant blue iced tea with tropical fruit notes', price: { regular: 130 } },
  { id: 34, name: 'Green Apple / Apple', category: 'iced-teas', description: 'Crisp apple flavored iced tea for a fruity refresh', price: { regular: 130 } },
  { id: 35, name: 'Black Current', category: 'iced-teas', description: 'Deep black currant tea with a rich berry profile', price: { regular: 130 } },
  { id: 36, name: 'Kiwi / Kiwi Mint / Black Kiwi', category: 'iced-teas', description: 'Exotic kiwi iced tea in various refreshing blends', price: { regular: 130 } },
  { id: 37, name: 'Strawberry', category: 'iced-teas', description: 'Sweet strawberry iced tea perfect for summer days', price: { regular: 130 } },
  { id: 38, name: 'Peach / Rio', category: 'iced-teas', description: 'Juicy peach tea with tropical undertones', price: { regular: 130 } },
  { id: 39, name: 'Lime / Ramwara', category: 'iced-teas', description: 'Tangy lime iced tea with a traditional twist', price: { regular: 130 } },
  { id: 40, name: 'Watermelon', category: 'iced-teas', description: 'Light watermelon iced tea, hydrating and sweet', price: { regular: 130 } },

  // Hot Teas
  { id: 41, name: 'Black Tea', category: 'hot-teas', description: 'Classic black tea steeped to perfection', price: { regular: 80 } },
  { id: 42, name: 'Green Tea', category: 'hot-teas', description: 'Antioxidant-rich green tea for wellness', price: { regular: 80 } },
  { id: 43, name: 'Green Mint', category: 'hot-teas', description: 'Soothing green tea with fresh mint leaves', price: { regular: 80 } },
  { id: 44, name: 'Earl Grey', category: 'hot-teas', description: 'Aromatic Earl Grey with bergamot essence', price: { regular: 80 } },
  { id: 45, name: 'Masala Tea', category: 'hot-teas', description: 'Spiced Indian chai with aromatic spices', price: { regular: 80 } },
  { id: 46, name: 'Lemon Tea', category: 'hot-teas', description: 'Refreshing tea infused with tangy lemon', price: { regular: 80 } },

  // Sandwiches
  { id: 47, name: 'Paneer Sandwich', category: 'sandwiches', description: 'Grilled sandwich with cottage cheese, veggies, and chutney', price: { regular: 170 } },
  { id: 48, name: 'Spinach Sandwich', category: 'sandwiches', description: 'Healthy spinach and cheese grilled sandwich', price: { regular: 180 } },
  { id: 49, name: 'Chicken Tikka Sandwich', category: 'sandwiches', description: 'Tandoori chicken tikka in a toasted sandwich', price: { regular: 190 } },
  { id: 50, name: 'Fiery Sandwich', category: 'sandwiches', description: 'Spicy grilled sandwich with bold flavors', price: { regular: 180 } },
  { id: 51, name: 'Tandoori Sandwich', category: 'sandwiches', description: 'Tandoori spiced paneer and veggies grilled perfectly', price: { regular: 180 } },
  { id: 52, name: 'Grilled Chicken Sandwich', category: 'sandwiches', description: 'Juicy grilled chicken with fresh greens', price: { regular: 190 } },
  { id: 53, name: 'Cheese Chicken Sandwich', category: 'sandwiches', description: 'Chicken and melted cheese in a toasted bun', price: { regular: 190 } },

  // Rolls & Fries
  { id: 54, name: 'Smoked Roll', category: 'rolls-fries', description: 'Smoky flavored wrap with savory fillings', price: { regular: 180 } },
  { id: 55, name: 'Tandoori Roll', category: 'rolls-fries', description: 'Tandoori spiced wrap with fresh vegetables', price: { regular: 180 } },
  { id: 56, name: 'Paneer Roll', category: 'rolls-fries', description: 'Cottage cheese roll with tangy sauces', price: { regular: 150 } },
  { id: 57, name: 'French Fries', category: 'rolls-fries', description: 'Crispy golden fries seasoned to perfection', price: { regular: 160 } },
  { id: 58, name: 'Potato Garlic Poppers', category: 'rolls-fries', description: 'Bite-sized potato poppers with garlic seasoning', price: { regular: 150 } },
  { id: 59, name: 'Hash Browns', category: 'rolls-fries', description: 'Crispy shredded potato patties', price: { regular: 190 } },

  // Pizza, Burger & Bruschetta
  { id: 60, name: 'Veg Paradise Pizza', category: 'pizza-burger', description: 'Loaded vegetable pizza with cheese and herbs', price: { regular: 220 } },
  { id: 61, name: 'Corn Cheese Pizza', category: 'pizza-burger', description: 'Sweet corn and mozzarella cheese pizza', price: { regular: 220 } },
  { id: 62, name: 'Paneer Pizza', category: 'pizza-burger', description: 'Indian-style pizza with cottage cheese cubes', price: { regular: 220 } },
  { id: 63, name: 'Chicken Supreme Pizza', category: 'pizza-burger', description: 'Premium chicken toppings with rich cheese', price: { regular: 250 } },
  { id: 64, name: 'Chicken Tikka Pizza', category: 'pizza-burger', description: 'Tandoori chicken tikka on a cheesy base', price: { regular: 250 } },
  { id: 65, name: 'Supreme Special Pizza', category: 'pizza-burger', description: 'Loaded with all your favorite toppings', price: { regular: 250 } },
  { id: 66, name: 'Veg Burger', category: 'pizza-burger', description: 'Juicy veggie patty with fresh veggies and sauces', price: { regular: 150 } },
  { id: 67, name: 'Chicken Burger', category: 'pizza-burger', description: 'Grilled chicken patty with lettuce and mayo', price: { regular: 180 } },
  { id: 68, name: 'Veg Bruschetta', category: 'pizza-burger', description: 'Toasted bread with tomato, basil, and olive oil', price: { regular: 150 } },
  { id: 69, name: 'Chicken Bruschetta', category: 'pizza-burger', description: 'Grilled chicken on crispy bruschetta bread', price: { regular: 180 } },

  // Pastries & Cakes
  { id: 70, name: 'Mocha Pastry', category: 'pastries-cakes', description: 'Rich mocha pastry with coffee cream layers', price: { regular: 140 } },
  { id: 71, name: 'Blueberry Pastry', category: 'pastries-cakes', description: 'Fresh blueberries baked into a soft pastry', price: { regular: 140 } },
  { id: 72, name: 'Hazelnut Pastry', category: 'pastries-cakes', description: 'Decadent hazelnut praline pastry', price: { regular: 140 } },
  { id: 73, name: 'Rocky Road Pastry', category: 'pastries-cakes', description: 'Chocolate pastry with marshmallow and nuts', price: { regular: 140 } },
  { id: 74, name: 'Eggless Chocolate Pastry', category: 'pastries-cakes', description: 'Moist eggless chocolate pastry for everyone', price: { regular: 120 } },
  { id: 75, name: 'Banana / Blueberry / Butter Cake', category: 'pastries-cakes', description: 'Moist cake in your choice of classic flavors', price: { regular: 90 } },
  { id: 76, name: 'Apple / Carrot Cake', category: 'pastries-cakes', description: 'Spiced cake with apple or carrot goodness', price: { regular: 120 } },
  { id: 77, name: 'Cheese Cake', category: 'pastries-cakes', description: 'Creamy cheesecake with graham crust', price: { regular: 150 } },
  { id: 78, name: 'Cinnamon Roll / Brownie', category: 'pastries-cakes', description: 'Sweet cinnamon roll or fudgy brownie', price: { regular: 100 } },
  { id: 79, name: 'Brownie with Ice Cream', category: 'pastries-cakes', description: 'Warm brownie topped with vanilla ice cream', price: { regular: 160 } },
  { id: 80, name: 'Mocha Crunch', category: 'pastries-cakes', description: 'Crunchy mocha dessert with crispy layers', price: { regular: 120 } },
  { id: 81, name: 'Red Velvet Cake', category: 'pastries-cakes', description: 'Classic red velvet with cream cheese frosting', price: { regular: 150 } },

  // Milkshakes & Desserts
  { id: 82, name: 'Oreo Shake', category: 'milkshakes-desserts', description: 'Thick Oreo milkshake with cookie crumbles', price: { regular: 210 } },
  { id: 83, name: 'Kit-Kat Shake', category: 'milkshakes-desserts', description: 'Chocolate Kit-Kat blended into creamy shake', price: { regular: 210 } },
  { id: 84, name: 'Brownie Fudge Shake', category: 'milkshakes-desserts', description: 'Rich brownie blended with ice cream and fudge', price: { regular: 240 } },
  { id: 85, name: 'Melting Brownie', category: 'milkshakes-desserts', description: 'Warm gooey brownie with molten chocolate center', price: { regular: 90 } },
  { id: 86, name: 'Nutella Bombolone', category: 'milkshakes-desserts', description: 'Italian doughnut filled with Nutella cream', price: { regular: 160 } },
  { id: 87, name: 'Chocolate Mousse', category: 'milkshakes-desserts', description: 'Silky chocolate mousse with whipped cream', price: { regular: 180 } }
];