export const foodFacts = [
  { id: '1', fact: 'Avocados are a fruit, not a vegetable.' },
  { id: '2', fact: 'Honey never spoils. Archaeologists have found pots of honey in ancient tombs that are over 3000 years old and still edible.' },
  { id: '3', fact: 'Bananas are berries, but strawberries aren’t.' },
  { id: '4', fact: 'Carrots were originally purple, not orange.' },
];

export const categories = [
  { id: '1', 
    name: 'Breakfast',
    uri: 'https://images.immediate.co.uk/production/volatile/sites/30/2017/08/smoothie-bowl-3a8632c.jpg?quality=90&resize=556,505' 
  },
  { id: '2', 
    name: 'Lunch' ,
    uri: 'https://images.immediate.co.uk/production/volatile/sites/30/2023/03/Sumac-turkey-stuffed-pittas-73482d5.jpg?quality=90&resize=556,505',
  },
  { id: '3', 
    name: 'Dinner',
    uri: 'https://images.immediate.co.uk/production/volatile/sites/30/2023/09/Prawn-harissa-spaghetti--b3b0fdd.jpg?quality=90&webp=true&resize=300,272' 
  },
  { id: '4', 
    name: 'Desserts',
    uri: 'https://cdn.loveandlemons.com/wp-content/uploads/2021/06/summer-desserts-1.jpg' 
  },
  { id: '5', 
    name: 'Coffee',
    uri: 'https://media.post.rvohealth.io/wp-content/uploads/2020/08/coffee-worlds-biggest-source-of-antioxidants-1296x728-feature_0-732x549.jpg' 
  },
  { id: '6',
    name: 'Tea',
    uri:'https://media.post.rvohealth.io/wp-content/uploads/2020/09/chamomile-tea-thumb.jpg',
    //uri: 'https://www.earth.com/assets/_next/image/?url=https%3A%2F%2Fcff2.earth.com%2Fuploads%2F2024%2F02%2F08140346%2Fdrinking-tea_every-day_delays-aging_mint-tea_1m-1400x850.jpg&w=1200&q=75' 
  },
];

export const popularDishes = [
  {
    id: '1',
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh mozzarella, tomatoes, and basil.',
    uri: 'https://cdn.shopify.com/s/files/1/0274/9503/9079/files/20220211142754-margherita-9920_5a73220e-4a1a-4d33-b38f-26e98e3cd986.jpg?v=1723650067?w=1024',
    ingredients: [
      { id: '1-1', name: 'Pizza dough', quantity: '1 piece' },
      { id: '1-2', name: 'Mozzarella cheese', quantity: '200g' },
      { id: '1-3', name: 'Tomatoes', quantity: '2' },
      { id: '1-4', name: 'Fresh basil', quantity: '1 handful' },
      { id: '1-5', name: 'Olive oil', quantity: '2 tbsp' }
    ],
    shortRecipe: [
      '1. Preheat oven to 220°C (425°F).',
      '2. Roll out the pizza dough on a floured surface.',
      '3. Top with mozzarella cheese and sliced tomatoes.',
      '4. Add fresh basil leaves and drizzle with olive oil.',
      '5. Bake for 10-12 minutes until the crust is golden and the cheese is melted.'
    ],
    duration: '25 minutes',
    tags: ['Vegetarian']
  },
  {
    id: '2',
    name: 'Sushi Platter',
    description: 'Assorted sushi with fresh salmon, tuna, and avocado rolls.',
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-3BxKYmbMrurQm7J3ryKfOdgQAggnHrGUOw&s',
    ingredients: [
      { id: '2-1', name: 'Sushi rice', quantity: '200g' },
      { id: '2-2', name: 'Salmon', quantity: '100g' },
      { id: '2-3', name: 'Tuna', quantity: '100g' },
      { id: '2-4', name: 'Avocado', quantity: '1' },
      { id: '2-5', name: 'Nori sheets', quantity: '4' }
    ],
    shortRecipe: [
      '1. Cook the sushi rice according to package instructions and let it cool.',
      '2. Slice the salmon, tuna, and avocado thinly.',
      '3. Place a nori sheet on a bamboo mat and spread a layer of rice.',
      '4. Add salmon, tuna, and avocado slices, then roll tightly.',
      '5. Slice into bite-sized pieces and serve with soy sauce.'
    ],
    duration: '40 minutes',
    tags: ['Gluten-Free']
  },
  {
    id: '3',
    name: 'Spaghetti Carbonara',
    description: 'Creamy pasta with pancetta, egg, and parmesan cheese.',
    uri: 'https://www.jocooks.com/wp-content/uploads/2012/05/creamy-carbonara-1.jpg',
    ingredients: [
      { id: '3-1', name: 'Spaghetti', quantity: '200g' },
      { id: '3-2', name: 'Pancetta', quantity: '100g' },
      { id: '3-3', name: 'Eggs', quantity: '2' },
      { id: '3-4', name: 'Parmesan cheese', quantity: '50g' },
      { id: '3-5', name: 'Black pepper', quantity: '1 tsp' }
    ],
    shortRecipe: [
      '1. Cook the spaghetti according to package instructions.',
      '2. Fry the pancetta in a pan until crispy.',
      '3. In a bowl, mix eggs and grated parmesan cheese.',
      '4. Toss the hot spaghetti with pancetta, then add the egg mixture.',
      '5. Stir quickly to create a creamy sauce. Season with black pepper.'
    ],
    duration: '20 minutes',
    tags: []
  },
  {
    id: '4',
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing and croutons.',
    uri: 'https://shwetainthekitchen.com/wp-content/uploads/2022/09/vegetarian-caesar-salad.jpg',
    ingredients: [
      { id: '4-1', name: 'Romaine lettuce', quantity: '1 head' },
      { id: '4-2', name: 'Caesar dressing', quantity: '3 tbsp' },
      { id: '4-3', name: 'Croutons', quantity: '50g' },
      { id: '4-4', name: 'Parmesan cheese', quantity: '30g' }
    ],
    shortRecipe: [
      '1. Wash and chop the romaine lettuce.',
      '2. Toss the lettuce with Caesar dressing in a large bowl.',
      '3. Add croutons and sprinkle grated Parmesan cheese on top.',
      '4. Serve immediately.'
    ],
    duration: '10 minutes',
    tags: ['Vegetarian']
  },
  {
    id: '5',
    name: 'Tacos Al Pastor',
    description: 'Corn tortillas with marinated pork, pineapple, and cilantro.',
    uri: 'https://www.closetcooking.com/wp-content/uploads/2023/06/Ground-Pork-al-Pastor-Tacos-with-Pineapple-Salsa-1200-7035.jpg',
    ingredients: [
      { id: '5-1', name: 'Pork shoulder', quantity: '300g' },
      { id: '5-2', name: 'Corn tortillas', quantity: '4' },
      { id: '5-3', name: 'Pineapple', quantity: '100g' },
      { id: '5-4', name: 'Cilantro', quantity: '1 handful' },
      { id: '5-5', name: 'Onion', quantity: '1' }
    ],
    shortRecipe: [
      '1. Marinate pork in spices and cook until tender.',
      '2. Chop pineapple, cilantro, and onion.',
      '3. Warm the corn tortillas in a dry pan.',
      '4. Assemble tacos with pork, pineapple, onion, and cilantro.',
      '5. Serve with lime wedges.'
    ],
    duration: '35 minutes',
    tags: ['Gluten-Free', 'Lactose-Free']
  },
  {
    id: '6',
    name: 'Butter Chicken',
    description: 'Indian dish with creamy tomato sauce and tender chicken.',
    uri: 'https://cafedelites.com/wp-content/uploads/2019/01/Butter-Chicken-IMAGE-64.jpg',
    ingredients: [
      { id: '6-1', name: 'Chicken breast', quantity: '300g' },
      { id: '6-2', name: 'Tomato puree', quantity: '200g' },
      { id: '6-3', name: 'Butter', quantity: '50g' },
      { id: '6-4', name: 'Cream', quantity: '100ml' },
      { id: '6-5', name: 'Spices (garam masala, cumin, coriander)', quantity: '2 tsp' }
    ],
    shortRecipe: [
      '1. Cook the chicken until browned.',
      '2. Add tomato puree and spices, simmer for 10 minutes.',
      '3. Stir in butter and cream, and let it thicken.',
      '4. Serve with rice or naan.'
    ],
    duration: '30 minutes',
    tags: []
  },
  {
    id: '7',
    name: 'Ramen Noodles',
    description: 'Japanese noodles in savory broth with eggs and vegetables.',
    uri: 'https://www.kitchensanctuary.com/wp-content/uploads/2020/12/Quick-Chicken-Ramen-square-FS-22.jpg',
    ingredients: [
      { id: '7-1', name: 'Ramen noodles', quantity: '200g' },
      { id: '7-2', name: 'Chicken broth', quantity: '500ml' },
      { id: '7-3', name: 'Eggs', quantity: '2' },
      { id: '7-4', name: 'Vegetables (spinach, mushrooms)', quantity: '100g' },
      { id: '7-5', name: 'Soy sauce', quantity: '2 tbsp' }
    ],
    shortRecipe: [
      '1. Cook the ramen noodles in boiling broth.',
      '2. Add boiled eggs and vegetables (spinach, mushrooms).',
      '3. Stir in soy sauce and serve hot.'
    ],
    duration: '20 minutes',
    tags: []
  },
  {
    id: '8',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a gooey molten center.',
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGs6XBiWtiWDVUyHoE8q3ZyMJxdGFz-Xp5Ig&s',
    ingredients: [
      { id: '8-1', name: 'Dark chocolate', quantity: '100g' },
      { id: '8-2', name: 'Butter', quantity: '50g' },
      { id: '8-3', name: 'Flour', quantity: '50g' },
      { id: '8-4', name: 'Sugar', quantity: '50g' },
      { id: '8-5', name: 'Eggs', quantity: '2' }
    ],
    shortRecipe: [
      '1. Melt the dark chocolate and butter together.',
      '2. Whisk in flour, sugar, and eggs until smooth.',
      '3. Pour the mixture into ramekins and bake for 10-12 minutes.',
      '4. Serve warm with the gooey center.'
    ],
    duration: '15 minutes',
    tags: ['Dessert']
  }
];



export const meals = [
  {
    id: 'm1',
    title: 'Pancakes',
    categoryIds: ['1'], // Breakfast
    description: 'Fluffy pancakes served with syrup and fresh fruits.',
    uri: 'https://www.inspiredtaste.net/wp-content/uploads/2024/03/Easy-Fluffy-Pancakes-Recipe-Video.jpg',
    ingredients: [
      { id: 'm1-1', name: 'All-purpose flour', quantity: '1 cup' },
      { id: 'm1-2', name: 'Milk', quantity: '1 cup' },
      { id: 'm1-3', name: 'Egg', quantity: '1' },
      { id: 'm1-4', name: 'Sugar', quantity: '2 tbsp' },
      { id: 'm1-5', name: 'Baking powder', quantity: '2 tsp' },
      { id: 'm1-6', name: 'Salt', quantity: '1/4 tsp' },
      { id: 'm1-7', name: 'Butter', quantity: '2 tbsp' }
    ],
    shortRecipe: [
      '1. In a bowl, mix flour, sugar, baking powder, and salt.',
      '2. In another bowl, whisk milk, egg, and melted butter.',
      '3. Combine wet and dry ingredients; mix until smooth.',
      '4. Heat a skillet and pour batter to form pancakes.',
      '5. Cook until bubbles form, then flip and cook until golden.',
      '6. Serve with syrup and fruits.'
    ],
    duration: '20 minutes',
    tags: ['Vegetarian']
  },
  {
    id: 'm2',
    title: 'Waffles',
    categoryIds: ['1'], // Breakfast
    description: 'Crispy waffles topped with whipped cream and berries.',
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNr5gp_QyGzFVMb9BrUcrYYnjvY8GZ6_Mxgw&s',
    ingredients: [
      { id: 'm2-1', name: 'All-purpose flour', quantity: '2 cups' },
      { id: 'm2-2', name: 'Milk', quantity: '1 3/4 cups' },
      { id: 'm2-3', name: 'Eggs', quantity: '2' },
      { id: 'm2-4', name: 'Sugar', quantity: '1 tbsp' },
      { id: 'm2-5', name: 'Baking powder', quantity: '1 tbsp' },
      { id: 'm2-6', name: 'Salt', quantity: '1/2 tsp' },
      { id: 'm2-7', name: 'Butter', quantity: '1/2 cup' }
    ],
    shortRecipe: [
      '1. Preheat waffle iron.',
      '2. In a bowl, mix flour, sugar, baking powder, and salt.',
      '3. In another bowl, whisk milk and eggs; stir in melted butter.',
      '4. Combine wet and dry ingredients; mix until smooth.',
      '5. Pour batter onto preheated waffle iron and cook until golden.',
      '6. Serve with toppings of your choice.'
    ],
    duration: '25 minutes',
    tags: ['Vegetarian']
  },
  {
    id: 'm3',
    title: 'French Toast',
    categoryIds: ['1'], // Breakfast
    description: 'Delicious French toast served with maple syrup.',
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpsz22s6tBQt44tq6xRyrF8em4G6clIyjkvg&s',
    ingredients: [
      { id: 'm3-1', name: 'Bread slices', quantity: '4' },
      { id: 'm3-2', name: 'Eggs', quantity: '2' },
      { id: 'm3-3', name: 'Milk', quantity: '1/2 cup' },
      { id: 'm3-4', name: 'Vanilla extract', quantity: '1 tsp' },
      { id: 'm3-5', name: 'Cinnamon', quantity: '1/2 tsp' },
      { id: 'm3-6', name: 'Butter', quantity: '2 tbsp' }
    ],
    shortRecipe: [
      '1. Whisk eggs, milk, vanilla, and cinnamon in a bowl.',
      '2. Dip bread slices in the mixture until soaked.',
      '3. Heat butter in a skillet and cook bread until golden on both sides.',
      '4. Serve with syrup and powdered sugar.'
    ],
    duration: '15 minutes',
    tags: ['Vegetarian']
  },
  {
    id: 'm4',
    title: 'Omelette',
    categoryIds: ['1'], // Breakfast
    description: 'A classic omelette filled with cheese and vegetables.',
    uri: 'https://static01.nyt.com/images/2023/12/05/multimedia/MC-Omelet-zpqh/MC-Omelet-zpqh-largeHorizontal375.jpg?quality=75&auto=webp',
    ingredients: [
      { id: 'm4-1', name: 'Eggs', quantity: '3' },
      { id: 'm4-2', name: 'Cheese', quantity: '1/2 cup' },
      { id: 'm4-3', name: 'Bell pepper', quantity: '1/4 cup, chopped' },
      { id: 'm4-4', name: 'Onion', quantity: '1/4 cup, chopped' },
      { id: 'm4-5', name: 'Salt', quantity: '1/4 tsp' },
      { id: 'm4-6', name: 'Pepper', quantity: '1/4 tsp' },
      { id: 'm4-7', name: 'Butter', quantity: '1 tbsp' }
    ],
    shortRecipe: [
      '1. Whisk eggs with salt and pepper.',
      '2. Melt butter in a skillet over medium heat.',
      '3. Pour in the eggs and cook until edges set.',
      '4. Add cheese and vegetables, fold the omelette, and cook until fully set.',
      '5. Serve warm.'
    ],
    duration: '10 minutes',
    tags: ['Vegetarian']
  },
  {
    id: 'm5',
    title: 'Breakfast Burrito',
    categoryIds: ['1'], // Breakfast
    description: 'A hearty burrito filled with eggs, beans, and salsa.',
    uri: 'https://t4.ftcdn.net/jpg/09/66/03/61/360_F_966036178_5zbG2TV4s18p2S6AEYhSXSUE4WhY8AsF.jpg',
    ingredients: [
      { id: 'm5-1', name: 'Flour tortillas', quantity: '2' },
      { id: 'm5-2', name: 'Eggs', quantity: '4' },
      { id: 'm5-3', name: 'Black beans', quantity: '1/2 cup' },
      { id: 'm5-4', name: 'Cheese', quantity: '1/2 cup' },
      { id: 'm5-5', name: 'Salsa', quantity: '1/4 cup' },
      { id: 'm5-6', name: 'Avocado', quantity: '1, sliced' },
      { id: 'm5-7', name: 'Salt', quantity: '1/4 tsp' },
      { id: 'm5-8', name: 'Pepper', quantity: '1/4 tsp' }
    ],
    shortRecipe: [
      '1. Scramble eggs in a skillet with salt and pepper.',
      '2. Warm tortillas in another skillet.',
      '3. Fill each tortilla with eggs, beans, cheese, and salsa.',
      '4. Roll up tightly and serve with avocado slices.'
    ],
    duration: '15 minutes',
    tags: ['Vegetarian']
  },
  {
    id: 'm6',
    title: 'Smoothie Bowl',
    categoryIds: ['1'], // Breakfast
    description: 'A refreshing smoothie bowl topped with fruits and granola.',
    uri: 'https://www.shutterstock.com/image-photo/healthy-summer-breakfast-concept-colorful-600nw-418208623.jpg',
    ingredients: [
      { id: 'm6-1', name: 'Banana', quantity: '1' },
      { id: 'm6-2', name: 'Spinach', quantity: '1 cup' },
      { id: 'm6-3', name: 'Almond milk', quantity: '1 cup' },
      { id: 'm6-4', name: 'Greek yogurt', quantity: '1/2 cup' },
      { id: 'm6-5', name: 'Granola', quantity: '1/4 cup' },
      { id: 'm6-6', name: 'Berries', quantity: '1/2 cup' }
    ],
    shortRecipe: [
      '1. Blend banana, spinach, almond milk, and yogurt until smooth.',
      '2. Pour into a bowl and top with granola and berries.',
      '3. Serve immediately.'
    ],
    duration: '10 minutes',
    tags: ['Vegetarian', 'Vegan']
  },
  {
    id: 'm7',
    title: 'Granola with Yogurt',
    categoryIds: ['1'], // Breakfast
    description: 'Crunchy granola served with creamy yogurt and fresh fruits.',
    uri: 'https://thumbs.dreamstime.com/b/diet-dessert-yogurt-granola-fresh-berries-close-up-horizontal-109939106.jpg',
    ingredients: [
      { id: 'm7-1', name: 'Granola', quantity: '1 cup' },
      { id: 'm7-2', name: 'Yogurt', quantity: '1 cup' },
      { id: 'm7-3', name: 'Mixed berries', quantity: '1/2 cup' },
      { id: 'm7-4', name: 'Honey', quantity: '1 tbsp' }
    ],
    shortRecipe: [
      '1. In a bowl, layer yogurt and granola.',
      '2. Top with mixed berries and drizzle with honey.',
      '3. Serve chilled.'
    ],
    duration: '5 minutes',
    tags: ['Vegetarian']
  },
  {
    id: 'm8',
    title: 'Avocado Toast',
    categoryIds: ['1'], // Breakfast
    description: 'Creamy avocado spread on toasted bread, topped with radishes.',
    uri: 'https://hips.hearstapps.com/hmg-prod/images/del119923-avocado-toast-web-305-rv-hires-index-6564c205a3402.jpg',
    ingredients: [
      { id: 'm8-1', name: 'Bread slices', quantity: '2' },
      { id: 'm8-2', name: 'Avocado', quantity: '1' },
      { id: 'm8-3', name: 'Radishes', quantity: '2, sliced' },
      { id: 'm8-4', name: 'Lemon juice', quantity: '1 tsp' },
      { id: 'm8-5', name: 'Salt', quantity: '1/4 tsp' },
      { id: 'm8-6', name: 'Pepper', quantity: '1/4 tsp' }
    ],
    shortRecipe: [
      '1. Toast the bread slices until golden.',
      '2. Mash the avocado with lemon juice, salt, and pepper.',
      '3. Spread the avocado mixture on the toasted bread.',
      '4. Top with sliced radishes and serve.'
    ],
    duration: '10 minutes',
    tags: ['Vegetarian', 'Vegan']
  },
  {
    id: 'm9',
    title: 'Breakfast Sandwich',
    categoryIds: ['1'], // Breakfast
    description: 'A hearty sandwich filled with eggs, cheese, and bacon.',
    uri: 'https://png.pngtree.com/thumb_back/fw800/background/20230306/pngtree-gourmet-appetizing-breakfast-sandwiches-portion-horizontal-gourmet-photo-image_50023496.jpg',
    ingredients: [
      { id: 'm9-1', name: 'Bread slices', quantity: '2' },
      { id: 'm9-2', name: 'Eggs', quantity: '2' },
      { id: 'm9-3', name: 'Cheese slice', quantity: '1' },
      { id: 'm9-4', name: 'Bacon strips', quantity: '2' },
      { id: 'm9-5', name: 'Butter', quantity: '1 tbsp' }
    ],
    shortRecipe: [
      '1. Cook bacon in a skillet until crispy.',
      '2. Fry eggs in the same skillet.',
      '3. Toast bread and spread butter on one slice.',
      '4. Assemble the sandwich with eggs, bacon, and cheese.',
      '5. Serve warm.'
    ],
    duration: '15 minutes',
    tags: ['Non-Vegetarian']
  },
  {
    id: 'm10',
    title: 'Muffins',
    categoryIds: ['1'], // Breakfast
    description: 'Delicious muffins made with fresh fruits and nuts.',
    uri: 'https://thumbs.dreamstime.com/b/muffins-cupcakes-apple-slices-apple-muffin-platform-horizontal-photo-minimalism-ai-generated-muffins-cupcakes-apple-slices-296504267.jpg',
    ingredients: [
      { id: 'm10-1', name: 'All-purpose flour', quantity: '2 cups' },
      { id: 'm10-2', name: 'Sugar', quantity: '1 cup' },
      { id: 'm10-3', name: 'Baking powder', quantity: '2 tsp' },
      { id: 'm10-4', name: 'Milk', quantity: '1 cup' },
      { id: 'm10-5', name: 'Eggs', quantity: '2' },
      { id: 'm10-6', name: 'Chopped fruits or nuts', quantity: '1 cup' }
    ],
    shortRecipe: [
      '1. Preheat the oven to 350°F (175°C).',
      '2. In a bowl, mix flour, sugar, baking powder, and chopped fruits or nuts.',
      '3. In another bowl, whisk milk and eggs; combine with dry ingredients.',
      '4. Pour batter into muffin tins and bake for 20-25 minutes.',
      '5. Allow to cool before serving.'
    ],
    duration: '30 minutes',
    tags: ['Vegetarian']
  },
  {
      id: 'm11',
      title: 'Turkey Sandwich',
      categoryIds: ['2'], // Lunch
      color: '#FFA07A',
      uri: 'https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipesmedia/recipes/foodservice/desktop%20images/2019/jan/2019_com_alfredo-dijon-turkey-sandwich_900x600.jpg?ext=.jpg',
      description: 'A delicious turkey sandwich with Dijon mustard and fresh greens.',
      ingredients: [
        { id: 'm11-1', name: 'Turkey slices', quantity: '4 oz' },
        { id: 'm11-2', name: 'Dijon mustard', quantity: '1 tbsp' },
        { id: 'm11-3', name: 'Lettuce', quantity: '2 leaves' },
        { id: 'm11-4', name: 'Tomato slices', quantity: '2' },
        { id: 'm11-5', name: 'Whole grain bread', quantity: '2 slices' }
      ],
      shortRecipe: [
        '1. Spread Dijon mustard on one slice of bread.',
        '2. Layer turkey, lettuce, and tomato on top.',
        '3. Top with the second slice of bread and serve.'
      ],
      duration: '5 minutes',
      tags: ['Non-Vegetarian']
    },
    {
      id: 'm12',
      title: 'Caesar Salad',
      categoryIds: ['2'], // Lunch
      color: '#FFA07A',
      uri: 'https://shwetainthekitchen.com/wp-content/uploads/2022/09/vegetarian-caesar-salad.jpg',
      description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
      ingredients: [
        { id: 'm12-1', name: 'Romaine lettuce', quantity: '1 head' },
        { id: 'm12-2', name: 'Caesar dressing', quantity: '1/4 cup' },
        { id: 'm12-3', name: 'Croutons', quantity: '1/2 cup' },
        { id: 'm12-4', name: 'Parmesan cheese', quantity: '1/4 cup, grated' }
      ],
      shortRecipe: [
        '1. Tear romaine lettuce into bite-sized pieces.',
        '2. Toss with Caesar dressing and croutons.',
        '3. Sprinkle with parmesan and serve.'
      ],
      duration: '10 minutes',
      tags: ['Vegetarian']
    },
    {
      id: 'm13',
      title: 'Grilled Chicken Wrap',
      categoryIds: ['2'], // Lunch
      color: '#FFA07A',
      uri: 'https://recipes.net/wp-content/uploads/2023/05/grilled-chicken-sandwich-recipe_ebd0403939d98e157fea1bd85a8c557d.jpeg',
      description: 'A hearty wrap filled with grilled chicken and fresh veggies.',
      ingredients: [
        { id: 'm13-1', name: 'Grilled chicken', quantity: '4 oz' },
        { id: 'm13-2', name: 'Whole wheat wrap', quantity: '1' },
        { id: 'm13-3', name: 'Lettuce', quantity: '1 leaf' },
        { id: 'm13-4', name: 'Tomato', quantity: '1, sliced' },
        { id: 'm13-5', name: 'Ranch dressing', quantity: '2 tbsp' }
      ],
      shortRecipe: [
        '1. Lay the wrap flat and spread ranch dressing.',
        '2. Layer grilled chicken, lettuce, and tomato.',
        '3. Roll tightly and slice in half to serve.'
      ],
      duration: '15 minutes',
      tags: ['Non-Vegetarian']
    },
    {
      id: 'm14',
      title: 'Quinoa Salad',
      categoryIds: ['2'], // Lunch
      color: '#FFA07A',
      uri: 'https://www.eatingbirdfood.com/wp-content/uploads/2024/04/easy-quinoa-salad-hero-cropped.jpg',
      description: 'A nutritious salad packed with quinoa, vegetables, and a zesty dressing.',
      ingredients: [
        { id: 'm14-1', name: 'Quinoa', quantity: '1 cup, cooked' },
        { id: 'm14-2', name: 'Cucumber', quantity: '1, diced' },
        { id: 'm14-3', name: 'Bell pepper', quantity: '1, diced' },
        { id: 'm14-4', name: 'Lemon juice', quantity: '2 tbsp' },
        { id: 'm14-5', name: 'Olive oil', quantity: '1 tbsp' }
      ],
      shortRecipe: [
        '1. In a bowl, combine cooked quinoa, cucumber, and bell pepper.',
        '2. Drizzle with lemon juice and olive oil.',
        '3. Toss to combine and serve chilled.'
      ],
      duration: '15 minutes',
      tags: ['Vegetarian', 'Vegan']
    },
    {
      id: 'm15',
      title: 'BLT Sandwich',
      categoryIds: ['2'], // Lunch
      color: '#FFA07A',
      uri: 'https://www.shutterstock.com/image-photo/traditional-american-blt-sandwich-bacon-600nw-2469808265.jpg',
      description: 'A classic BLT sandwich with crispy bacon, lettuce, and tomato.',
      ingredients: [
        { id: 'm15-1', name: 'Bacon strips', quantity: '4' },
        { id: 'm15-2', name: 'Lettuce', quantity: '2 leaves' },
        { id: 'm15-3', name: 'Tomato slices', quantity: '2' },
        { id: 'm15-4', name: 'Mayonnaise', quantity: '2 tbsp' },
        { id: 'm15-5', name: 'Bread slices', quantity: '2' }
      ],
      shortRecipe: [
        '1. Cook bacon until crispy.',
        '2. Spread mayonnaise on bread.',
        '3. Layer bacon, lettuce, and tomato between bread slices.',
        '4. Cut and serve.'
      ],
      duration: '10 minutes',
      tags: ['Non-Vegetarian']
    },
    {
      id: 'm16',
      title: 'Chicken Caesar Wrap',
      categoryIds: ['2'], // Lunch
      color: '#FFA07A',
      uri: 'https://tastesbetterfromscratch.com/wp-content/uploads/2020/04/Chicken-Caesar-Wrap-4.jpg',
      description: 'A delicious wrap with grilled chicken, romaine, and Caesar dressing.',
      ingredients: [
        { id: 'm16-1', name: 'Grilled chicken', quantity: '4 oz' },
        { id: 'm16-2', name: 'Romaine lettuce', quantity: '1 leaf' },
        { id: 'm16-3', name: 'Caesar dressing', quantity: '2 tbsp' },
        { id: 'm16-4', name: 'Whole wheat wrap', quantity: '1' },
        { id: 'm16-5', name: 'Parmesan cheese', quantity: '2 tbsp, grated' }
      ],
      shortRecipe: [
        '1. Spread Caesar dressing on the wrap.',
        '2. Add grilled chicken, romaine, and parmesan.',
        '3. Roll up tightly and slice to serve.'
      ],
      duration: '15 minutes',
      tags: ['Non-Vegetarian']
    },
    {
      id: 'm17',
      title: 'Caprese Salad',
      categoryIds: ['2'], // Lunch
      color: '#FFA07A',
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCgKPcJZzTIx5BaJefwpKCJwJ3VlY90oFO7Q&s',
      description: 'A fresh salad with tomatoes, mozzarella, basil, and balsamic glaze.',
      ingredients: [
        { id: 'm17-1', name: 'Tomatoes', quantity: '2, sliced' },
        { id: 'm17-2', name: 'Mozzarella cheese', quantity: '1 ball, sliced' },
        { id: 'm17-3', name: 'Fresh basil', quantity: '1/4 cup' },
        { id: 'm17-4', name: 'Balsamic glaze', quantity: '2 tbsp' }
      ],
      shortRecipe: [
        '1. Layer sliced tomatoes and mozzarella on a plate.',
        '2. Top with fresh basil and drizzle with balsamic glaze.',
        '3. Serve immediately.'
      ],
      duration: '10 minutes',
      tags: ['Vegetarian', 'Vegan']
    },
     {
    id: 'm18',
    title: 'Burger',
    categoryIds: ['2'], // Lunch
    color: '#FFA07A',
    uri: 'https://static.vecteezy.com/system/resources/previews/039/626/804/non_2x/ai-generated-grilled-beef-burger-with-cheese-tomato-and-fresh-vegetables-generated-by-ai-photo.jpg',
    description: 'A classic grilled beef burger topped with cheese and fresh vegetables.',
    ingredients: [
      { id: 'm18-1', name: 'Ground beef', quantity: '4 oz' },
      { id: 'm18-2', name: 'Burger bun', quantity: '1' },
      { id: 'm18-3', name: 'Cheese slice', quantity: '1' },
      { id: 'm18-4', name: 'Lettuce', quantity: '1 leaf' },
      { id: 'm18-5', name: 'Tomato', quantity: '1 slice' },
      { id: 'm18-6', name: 'Pickles', quantity: '2 slices' },
      { id: 'm18-7', name: 'Ketchup', quantity: '1 tbsp' },
      { id: 'm18-8', name: 'Mustard', quantity: '1 tbsp' }
    ],
    shortRecipe: [
      '1. Form the ground beef into a patty and grill until cooked.',
      '2. Toast the burger bun and place the patty on it.',
      '3. Add cheese, lettuce, tomato, pickles, ketchup, and mustard.',
      '4. Serve hot.'
    ],
    duration: '20 minutes',
    tags: ['Non-Vegetarian']
  },
  {
    id: 'm19',
    title: 'Veggie Wrap',
    categoryIds: ['2'], // Lunch
    color: '#FFA07A',
    uri: 'https://simplegreensmoothies.com/wp-content/uploads/veggie-wrap-hummus-easy-lunch-healthy-2.jpg',
    description: 'A healthy wrap loaded with fresh vegetables and hummus.',
    ingredients: [
      { id: 'm19-1', name: 'Whole wheat wrap', quantity: '1' },
      { id: 'm19-2', name: 'Hummus', quantity: '2 tbsp' },
      { id: 'm19-3', name: 'Cucumber', quantity: '1/2, sliced' },
      { id: 'm19-4', name: 'Bell pepper', quantity: '1/2, sliced' },
      { id: 'm19-5', name: 'Carrots', quantity: '1/4 cup, grated' },
      { id: 'm19-6', name: 'Spinach', quantity: '1/2 cup' }
    ],
    shortRecipe: [
      '1. Spread hummus on the wrap.',
      '2. Layer cucumber, bell pepper, carrots, and spinach.',
      '3. Roll up tightly and slice to serve.'
    ],
    duration: '10 minutes',
    tags: ['Vegetarian', 'Vegan']
  },
  {
    id: 'm20',
    title: 'Falafel Wrap',
    categoryIds: ['2'], // Lunch
    color: '#FFA07A',
    uri: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/falafel_wraps_59124_16x9.jpg',
    description: 'A flavorful wrap filled with crispy falafel and fresh vegetables.',
    ingredients: [
      { id: 'm20-1', name: 'Falafel balls', quantity: '4-5' },
      { id: 'm20-2', name: 'Whole wheat wrap', quantity: '1' },
      { id: 'm20-3', name: 'Tahini sauce', quantity: '2 tbsp' },
      { id: 'm20-4', name: 'Tomato', quantity: '1, diced' },
      { id: 'm20-5', name: 'Cucumber', quantity: '1/2, diced' },
      { id: 'm20-6', name: 'Lettuce', quantity: '1 leaf' }
    ],
    shortRecipe: [
      '1. Place falafel balls on the wrap.',
      '2. Add tahini sauce, tomato, cucumber, and lettuce.',
      '3. Roll up tightly and enjoy.'
    ],
    duration: '15 minutes',
    tags: ['Vegetarian', 'Vegan']
  },
  {
    id: 'm21',
    title: 'Spaghetti',
    categoryIds: ['3'], // Dinner
    color: '#FF6347',
    uri: 'https://somuchfoodblog.com/wp-content/uploads/2022/01/spaghetti-and-meatballs11-scaled.jpg',
    description: 'Classic spaghetti served with rich meatballs and marinara sauce.',
    ingredients: [
      { id: 'm21-1', name: 'Spaghetti', quantity: '200 g' },
      { id: 'm21-2', name: 'Ground beef', quantity: '300 g' },
      { id: 'm21-3', name: 'Marinara sauce', quantity: '1 cup' },
      { id: 'm21-4', name: 'Parmesan cheese', quantity: '50 g' },
      { id: 'm21-5', name: 'Olive oil', quantity: '2 tbsp' },
      { id: 'm21-6', name: 'Garlic', quantity: '2 cloves, minced' },
      { id: 'm21-7', name: 'Basil', quantity: '1 tsp, dried' }
    ],
    shortRecipe: [
      '1. Cook spaghetti according to package instructions.',
      '2. In a pan, heat olive oil and sauté garlic until fragrant.',
      '3. Add ground beef, cook until browned, and mix in marinara sauce.',
      '4. Serve over spaghetti, topped with Parmesan and basil.'
    ],
    duration: '30 minutes',
    tags: ['Non-Vegetarian']
  },
  {
    id: 'm22',
    title: 'Grilled Salmon',
    categoryIds: ['3'], // Dinner
    color: '#FF6347',
    uri: 'https://www.thecookierookie.com/wp-content/uploads/2023/05/grilled-salmon-recipe-2.jpg',
    description: 'Tender and flaky grilled salmon fillet seasoned to perfection.',
    ingredients: [
      { id: 'm22-1', name: 'Salmon fillet', quantity: '200 g' },
      { id: 'm22-2', name: 'Lemon juice', quantity: '1 tbsp' },
      { id: 'm22-3', name: 'Olive oil', quantity: '1 tbsp' },
      { id: 'm22-4', name: 'Garlic powder', quantity: '1 tsp' },
      { id: 'm22-5', name: 'Salt', quantity: 'to taste' },
      { id: 'm22-6', name: 'Pepper', quantity: 'to taste' }
    ],
    shortRecipe: [
      '1. Preheat grill to medium-high heat.',
      '2. Mix olive oil, lemon juice, garlic powder, salt, and pepper.',
      '3. Brush mixture onto salmon and grill for about 6-8 minutes per side.',
      '4. Serve with lemon wedges.'
    ],
    duration: '15 minutes',
    tags: ['Non-Vegetarian']
  },
  {
    id: 'm23',
    title: 'Chicken Stir-Fry',
    categoryIds: ['3'], // Dinner
    color: '#FF6347',
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaf6LMEpbsUnDg1rSY-EI_bxyutytoECyb-w&s',
    description: 'A colorful mix of chicken and vegetables stir-fried in a savory sauce.',
    ingredients: [
      { id: 'm23-1', name: 'Chicken breast', quantity: '250 g, sliced' },
      { id: 'm23-2', name: 'Bell peppers', quantity: '1 cup, sliced' },
      { id: 'm23-3', name: 'Broccoli', quantity: '1 cup, florets' },
      { id: 'm23-4', name: 'Soy sauce', quantity: '2 tbsp' },
      { id: 'm23-5', name: 'Ginger', quantity: '1 tsp, minced' },
      { id: 'm23-6', name: 'Garlic', quantity: '2 cloves, minced' },
      { id: 'm23-7', name: 'Olive oil', quantity: '2 tbsp' }
    ],
    shortRecipe: [
      '1. Heat oil in a pan, add ginger and garlic, sauté for 1 minute.',
      '2. Add chicken and cook until browned.',
      '3. Add bell peppers and broccoli, stir-fry for 5 minutes.',
      '4. Add soy sauce, stir well, and serve hot.'
    ],
    duration: '20 minutes',
    tags: ['Non-Vegetarian']
  },
  {
    id: 'm24',
    title: 'Tacos',
    categoryIds: ['3'], // Dinner
    color: '#FF6347',
    uri: 'https://hips.hearstapps.com/hmg-prod/images/delish-202104-birriatacos-033-1619806490.jpg?crop=1.00xw:0.846xh;0,0',
    description: 'Delicious tacos filled with your choice of meat and fresh toppings.',
    ingredients: [
      { id: 'm24-1', name: 'Taco shells', quantity: '4' },
      { id: 'm24-2', name: 'Ground beef', quantity: '300 g' },
      { id: 'm24-3', name: 'Cheddar cheese', quantity: '1 cup, shredded' },
      { id: 'm24-4', name: 'Lettuce', quantity: '1 cup, shredded' },
      { id: 'm24-5', name: 'Tomato', quantity: '1, diced' },
      { id: 'm24-6', name: 'Sour cream', quantity: '1/2 cup' }
    ],
    shortRecipe: [
      '1. Cook ground beef until browned, season as desired.',
      '2. Fill taco shells with beef, cheese, lettuce, and tomato.',
      '3. Top with sour cream and serve immediately.'
    ],
    duration: '25 minutes',
    tags: ['Non-Vegetarian']
  },
  {
    id: 'm25',
    title: 'Chicken Stew',
    categoryIds: ['3'], // Dinner
    color: '#FF6347',
    uri: 'https://www.yummytummyaarthi.com/wp-content/uploads/2022/06/kerala-chicken-stew-1.jpeg',
    description: 'A hearty chicken stew cooked with spices and vegetables.',
    ingredients: [
      { id: 'm25-1', name: 'Chicken', quantity: '300 g, chopped' },
      { id: 'm25-2', name: 'Potatoes', quantity: '2, diced' },
      { id: 'm25-3', name: 'Carrots', quantity: '2, sliced' },
      { id: 'm25-4', name: 'Onion', quantity: '1, chopped' },
      { id: 'm25-5', name: 'Coconut milk', quantity: '1 cup' },
      { id: 'm25-6', name: 'Spices', quantity: '1 tbsp (curry powder)' }
    ],
    shortRecipe: [
      '1. Sauté onion until translucent in a pot.',
      '2. Add chicken and spices, cook until browned.',
      '3. Add potatoes, carrots, and coconut milk, simmer until vegetables are tender.',
      '4. Serve hot.'
    ],
    duration: '40 minutes',
    tags: ['Non-Vegetarian']
  },
  {
    id: 'm26',
    title: 'Roast Chicken',
    categoryIds: ['3'], // Dinner
    color: '#FF6347',
    uri: 'https://realfood.tesco.com/media/images/RFO-1400x919-Spiced-Roast-Chicken-09a6012a-910c-4cd0-b20d-a16bb16e7d57-0-1400x919.jpg',
    description: 'Juicy roast chicken seasoned with spices and herbs.',
    ingredients: [
      { id: 'm26-1', name: 'Whole chicken', quantity: '1 kg' },
      { id: 'm26-2', name: 'Olive oil', quantity: '3 tbsp' },
      { id: 'm26-3', name: 'Rosemary', quantity: '1 tbsp, chopped' },
      { id: 'm26-4', name: 'Garlic', quantity: '4 cloves, minced' },
      { id: 'm26-5', name: 'Lemon', quantity: '1, juiced' },
      { id: 'm26-6', name: 'Salt', quantity: 'to taste' },
      { id: 'm26-7', name: 'Pepper', quantity: 'to taste' }
    ],
    shortRecipe: [
      '1. Preheat oven to 200°C (400°F).',
      '2. Rub chicken with olive oil, lemon juice, garlic, rosemary, salt, and pepper.',
      '3. Roast in the oven for 1 hour or until cooked through.',
      '4. Let rest before carving and serving.'
    ],
    duration: '1 hour 15 minutes',
    tags: ['Non-Vegetarian']
  },
  {
    id: 'm27',
    title: 'Veggie Stir-Fry',
    categoryIds: ['3'], // Dinner
    color: '#FF6347',
    uri: 'https://images.themodernproper.com/billowy-turkey/production/posts/VegetableStirFry_9.jpg?w=1200&h=1200&q=60&fm=jpg&fit=crop&dm=1703377301&s=3484d660c4b404c6d23b0c3ec7ac66eb',
    description: 'A quick and easy stir-fry of seasonal vegetables in a savory sauce.',
    ingredients: [
      { id: 'm27-1', name: 'Broccoli', quantity: '1 cup, florets' },
      { id: 'm27-2', name: 'Bell peppers', quantity: '1 cup, sliced' },
      { id: 'm27-3', name: 'Carrots', quantity: '1 cup, julienned' },
      { id: 'm27-4', name: 'Soy sauce', quantity: '2 tbsp' },
      { id: 'm27-5', name: 'Sesame oil', quantity: '1 tbsp' },
      { id: 'm27-6', name: 'Garlic', quantity: '2 cloves, minced' },
      { id: 'm27-7', name: 'Ginger', quantity: '1 tsp, grated' }
    ],
    shortRecipe: [
      '1. Heat sesame oil in a pan, add garlic and ginger, sauté for 1 minute.',
      '2. Add all vegetables and stir-fry for 5-7 minutes until tender.',
      '3. Pour in soy sauce, stir well, and serve hot.'
    ],
    duration: '15 minutes',
    tags: ['Vegetarian', 'Vegan']
  },
  {
    id: 'm28',
    title: 'Lasagna',
    categoryIds: ['3'], // Dinner
    color: '#FF6347',
    uri: 'https://www.skinnytaste.com/wp-content/uploads/2023/09/Lasagna-12.jpg',
    description: 'Layers of pasta, rich meat sauce, and creamy cheese baked to perfection.',
    ingredients: [
      { id: 'm28-1', name: 'Lasagna noodles', quantity: '12 sheets' },
      { id: 'm28-2', name: 'Ground beef', quantity: '400 g' },
      { id: 'm28-3', name: 'Marinara sauce', quantity: '3 cups' },
      { id: 'm28-4', name: 'Ricotta cheese', quantity: '2 cups' },
      { id: 'm28-5', name: 'Mozzarella cheese', quantity: '2 cups, shredded' },
      { id: 'm28-6', name: 'Parmesan cheese', quantity: '1 cup, grated' },
      { id: 'm28-7', name: 'Egg', quantity: '1' },
      { id: 'm28-8', name: 'Italian seasoning', quantity: '1 tbsp' }
    ],
    shortRecipe: [
      '1. Preheat oven to 180°C (350°F).',
      '2. Cook lasagna noodles according to package instructions.',
      '3. In a bowl, mix ricotta cheese, egg, and Italian seasoning.',
      '4. In a baking dish, layer noodles, meat sauce, ricotta mixture, and mozzarella. Repeat layers.',
      '5. Top with remaining mozzarella and Parmesan. Bake for 30-40 minutes until bubbly.'
    ],
    duration: '1 hour 10 minutes',
    tags: ['Non-Vegetarian']
  },
  {
    id: 'm29',
    title: 'BBQ Ribs',
    categoryIds: ['3'], // Dinner
    color: '#FF6347',
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO83cidF6A8RTI8372IUJdwbL3o0p456Y6gg&s',
    description: 'Tender pork ribs coated in a flavorful BBQ sauce.',
    ingredients: [
      { id: 'm29-1', name: 'Pork ribs', quantity: '1 kg' },
      { id: 'm29-2', name: 'BBQ sauce', quantity: '1 cup' },
      { id: 'm29-3', name: 'Salt', quantity: 'to taste' },
      { id: 'm29-4', name: 'Pepper', quantity: 'to taste' },
      { id: 'm29-5', name: 'Garlic powder', quantity: '1 tsp' },
      { id: 'm29-6', name: 'Onion powder', quantity: '1 tsp' }
    ],
    shortRecipe: [
      '1. Preheat oven to 150°C (300°F).',
      '2. Rub ribs with salt, pepper, garlic powder, and onion powder.',
      '3. Bake for 2.5 hours, covered in foil.',
      '4. Brush with BBQ sauce and grill for an additional 15 minutes.'
    ],
    duration: '3 hours',
    tags: ['Non-Vegetarian']
  },
  {
    id: 'm30',
    title: 'Stuffed Peppers',
    categoryIds: ['3'], // Dinner
    color: '#FF6347',
    uri: 'https://www.wellplated.com/wp-content/uploads/2019/09/Italian-Stuffed-Peppers-with-rice-or-without-rice.jpg',
    description: 'Bell peppers stuffed with a savory mixture of rice, meat, and spices.',
    ingredients: [
      { id: 'm30-1', name: 'Bell peppers', quantity: '4, halved' },
      { id: 'm30-2', name: 'Ground beef', quantity: '300 g' },
      { id: 'm30-3', name: 'Cooked rice', quantity: '1 cup' },
      { id: 'm30-4', name: 'Tomato sauce', quantity: '1 cup' },
      { id: 'm30-5', name: 'Onion', quantity: '1, chopped' },
      { id: 'm30-6', name: 'Cheddar cheese', quantity: '1 cup, shredded' },
      { id: 'm30-7', name: 'Italian seasoning', quantity: '1 tsp' }
    ],
    shortRecipe: [
      '1. Preheat oven to 180°C (350°F).',
      '2. In a skillet, cook onion and ground beef until browned.',
      '3. Mix in rice, tomato sauce, and Italian seasoning.',
      '4. Stuff bell pepper halves with the mixture, top with cheese.',
      '5. Bake for 30-35 minutes until peppers are tender.'
    ],
    duration: '1 hour',
    tags: ['Non-Vegetarian']
  },
  {
    id: 'm31',
    title: 'Ice Cream',
    categoryIds: ['4'], // Desserts
    color: '#87CEEB',
    uri: 'https://carveyourcraving.com/wp-content/uploads/2021/06/chocolate-icecream-in-an-icecream-maker-500x500.jpg',
    description: 'Creamy and delicious homemade ice cream with rich chocolate flavor.',
    ingredients: [
      { id: 'm31-1', name: 'Heavy cream', quantity: '2 cups' },
      { id: 'm31-2', name: 'Sweetened condensed milk', quantity: '1 can' },
      { id: 'm31-3', name: 'Cocoa powder', quantity: '1/2 cup' },
      { id: 'm31-4', name: 'Vanilla extract', quantity: '1 tsp' }
    ],
    shortRecipe: [
      '1. In a bowl, mix heavy cream and cocoa powder until smooth.',
      '2. Stir in sweetened condensed milk and vanilla.',
      '3. Pour the mixture into an ice cream maker and churn according to the manufacturer’s instructions.'
    ],
    duration: '30 minutes (plus freezing time)',
    tags: ['Vegetarian']
  },
  {
    id: 'm32',
    title: 'Chocolate Cake',
    categoryIds: ['4'], // Desserts
    color: '#87CEEB',
    uri: 'https://food-images.files.bbci.co.uk/food/recipes/easy_chocolate_cake_31070_16x9.jpg',
    description: 'Rich and moist chocolate cake, perfect for any celebration.',
    ingredients: [
      { id: 'm32-1', name: 'All-purpose flour', quantity: '1 3/4 cups' },
      { id: 'm32-2', name: 'Cocoa powder', quantity: '3/4 cup' },
      { id: 'm32-3', name: 'Sugar', quantity: '2 cups' },
      { id: 'm32-4', name: 'Baking powder', quantity: '1 1/2 tsp' },
      { id: 'm32-5', name: 'Baking soda', quantity: '1 1/2 tsp' },
      { id: 'm32-6', name: 'Eggs', quantity: '2' },
      { id: 'm32-7', name: 'Milk', quantity: '1 cup' },
      { id: 'm32-8', name: 'Vegetable oil', quantity: '1/2 cup' },
      { id: 'm32-9', name: 'Vanilla extract', quantity: '2 tsp' }
    ],
    shortRecipe: [
      '1. Preheat oven to 175°C (350°F). Grease and flour cake pans.',
      '2. In a large bowl, mix flour, cocoa, sugar, baking powder, and baking soda.',
      '3. Add eggs, milk, oil, and vanilla. Beat for 2 minutes on medium speed.',
      '4. Pour into prepared pans and bake for 30-35 minutes.'
    ],
    duration: '1 hour',
    tags: ['Vegetarian']
  },
  {
    id: 'm33',
    title: 'Cheesecake',
    categoryIds: ['4'], // Desserts
    color: '#87CEEB',
    uri: 'https://static01.nyt.com/images/2024/07/29/multimedia/strawberry-cheesecake-cjbt/strawberry-cheesecake-cjbt-googleFourByThree.jpg',
    description: 'Smooth and creamy cheesecake topped with fresh strawberries.',
    ingredients: [
      { id: 'm33-1', name: 'Cream cheese', quantity: '4 packs (8 oz each)' },
      { id: 'm33-2', name: 'Sugar', quantity: '1 cup' },
      { id: 'm33-3', name: 'Eggs', quantity: '3' },
      { id: 'm33-4', name: 'Sour cream', quantity: '1 cup' },
      { id: 'm33-5', name: 'Vanilla extract', quantity: '2 tsp' },
      { id: 'm33-6', name: 'Graham cracker crumbs', quantity: '1 1/2 cups' },
      { id: 'm33-7', name: 'Butter', quantity: '1/2 cup, melted' }
    ],
    shortRecipe: [
      '1. Preheat oven to 175°C (350°F).',
      '2. Mix graham cracker crumbs and melted butter, press into the bottom of a springform pan.',
      '3. In a bowl, beat cream cheese and sugar until smooth, then add eggs one at a time.',
      '4. Stir in sour cream and vanilla. Pour over crust and bake for 55-60 minutes.'
    ],
    duration: '1 hour 30 minutes',
    tags: ['Vegetarian']
  },
  {
    id: 'm34',
    title: 'Apple Pie',
    categoryIds: ['4'], // Desserts
    color: '#87CEEB',
    uri: 'https://sallysbakingaddiction.com/wp-content/uploads/2017/07/slice-of-apple-pie-2.jpg',
    description: 'Classic apple pie with a flaky crust and sweet apple filling.',
    ingredients: [
      { id: 'm34-1', name: 'Apples', quantity: '6, peeled and sliced' },
      { id: 'm34-2', name: 'Sugar', quantity: '3/4 cup' },
      { id: 'm34-3', name: 'Cinnamon', quantity: '1 tsp' },
      { id: 'm34-4', name: 'Lemon juice', quantity: '2 tbsp' },
      { id: 'm34-5', name: 'All-purpose flour', quantity: '2 tbsp' },
      { id: 'm34-6', name: 'Pie crust', quantity: '2' }
    ],
    shortRecipe: [
      '1. Preheat oven to 220°C (425°F).',
      '2. In a bowl, mix apples, sugar, cinnamon, lemon juice, and flour.',
      '3. Place one pie crust in a pie dish and fill with apple mixture. Cover with the second crust.',
      '4. Bake for 45-50 minutes until golden brown.'
    ],
    duration: '1 hour 15 minutes',
    tags: ['Vegetarian']
  },
  {
    id: 'm35',
    title: 'Brownies',
    categoryIds: ['4'], // Desserts
    color: '#87CEEB',
    uri: 'https://www.cookingclassy.com/wp-content/uploads/2019/05/brownies-22.jpg',
    description: 'Rich and fudgy brownies that are simple to make and oh-so-delicious.',
    ingredients: [
      { id: 'm35-1', name: 'Unsalted butter', quantity: '1 cup' },
      { id: 'm35-2', name: 'Sugar', quantity: '2 cups' },
      { id: 'm35-3', name: 'Eggs', quantity: '4' },
      { id: 'm35-4', name: 'Vanilla extract', quantity: '2 tsp' },
      { id: 'm35-5', name: 'All-purpose flour', quantity: '1 cup' },
      { id: 'm35-6', name: 'Cocoa powder', quantity: '1/2 cup' },
      { id: 'm35-7', name: 'Salt', quantity: '1/2 tsp' }
    ],
    shortRecipe: [
      '1. Preheat oven to 175°C (350°F) and grease a baking dish.',
      '2. Melt butter and stir in sugar, then add eggs and vanilla.',
      '3. Mix in flour, cocoa, and salt until combined.',
      '4. Pour batter into the dish and bake for 20-25 minutes.'
    ],
    duration: '45 minutes',
    tags: ['Vegetarian']
  },
  {
    id: 'm36',
    title: 'Tiramisu',
    categoryIds: ['4'], // Desserts
    color: '#87CEEB',
    uri: 'https://sarasellos.com/wp-content/uploads/2024/04/tiramisu3.jpg',
    description: 'Classic Italian dessert made with coffee-soaked ladyfingers and mascarpone cheese.',
    ingredients: [
      { id: 'm36-1', name: 'Mascarpone cheese', quantity: '500 g' },
      { id: 'm36-2', name: 'Coffee', quantity: '1 cup, brewed' },
      { id: 'm36-3', name: 'Ladyfinger cookies', quantity: '24' },
      { id: 'm36-4', name: 'Eggs', quantity: '3, separated' },
      { id: 'm36-5', name: 'Sugar', quantity: '1/2 cup' },
      { id: 'm36-6', name: 'Cocoa powder', quantity: '2 tbsp' }
    ],
    shortRecipe: [
      '1. Brew coffee and let it cool.',
      '2. In a bowl, beat egg yolks and sugar until creamy.',
      '3. Add mascarpone and mix until smooth.',
      '4. Dip ladyfingers in coffee and layer them in a dish, alternating with the mascarpone mixture.',
      '5. Dust with cocoa powder and refrigerate for at least 4 hours before serving.'
    ],
    duration: '20 minutes (plus chilling time)',
    tags: ['Vegetarian']
  },
  {
    id: 'm37',
    title: 'Panna Cotta',
    categoryIds: ['4'], // Desserts
    color: '#87CEEB',
    uri: 'https://food-images.files.bbci.co.uk/food/recipes/vanillapannacotta_87907_16x9.jpg',
    description: 'A silky smooth Italian dessert made with cream and vanilla, served with a berry coulis.',
    ingredients: [
      { id: 'm37-1', name: 'Heavy cream', quantity: '2 cups' },
      { id: 'm37-2', name: 'Sugar', quantity: '1/2 cup' },
      { id: 'm37-3', name: 'Gelatin', quantity: '1 packet (2 1/4 tsp)' },
      { id: 'm37-4', name: 'Vanilla bean', quantity: '1' },
      { id: 'm37-5', name: 'Water', quantity: '3 tbsp (for gelatin)' }
    ],
    shortRecipe: [
      '1. Sprinkle gelatin over cold water and let it bloom for 5 minutes.',
      '2. In a saucepan, heat cream and sugar, and stir until dissolved.',
      '3. Remove from heat, add gelatin and vanilla bean seeds, and mix well.',
      '4. Pour into molds and refrigerate for at least 4 hours.'
    ],
    duration: '15 minutes (plus chilling time)',
    tags: ['Vegetarian']
  },
  {
    id: 'm38',
    title: 'Fruit Tart',
    categoryIds: ['4'], // Desserts
    color: '#87CEEB',
    uri: 'https://hips.hearstapps.com/hmg-prod/images/fruit-tart-secondary-65ef54d7e8efd.jpg',
    description: 'A beautiful tart filled with pastry cream and topped with fresh fruit.',
    ingredients: [
      { id: 'm38-1', name: 'Tart crust', quantity: '1 (store-bought or homemade)' },
      { id: 'm38-2', name: 'Pastry cream', quantity: '1 cup' },
      { id: 'm38-3', name: 'Mixed fresh fruits', quantity: '2 cups (berries, kiwi, etc.)' },
      { id: 'm38-4', name: 'Apricot glaze', quantity: '1/4 cup (optional)' }
    ],
    shortRecipe: [
      '1. Bake the tart crust according to package or recipe instructions.',
      '2. Fill the cooled crust with pastry cream.',
      '3. Arrange fresh fruit on top and brush with apricot glaze if using.',
      '4. Chill before serving.'
    ],
    duration: '1 hour (plus chilling time)',
    tags: ['Vegetarian']
  },
  {
    id: 'm39',
    title: 'Creme Brulee',
    categoryIds: ['4'], // Desserts
    color: '#87CEEB',
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdJh9MsrfROuJ5YctY9m_v4q9dIk6QBDPIOg&s',
    description: 'A rich custard base topped with a layer of hard caramel.',
    ingredients: [
      { id: 'm39-1', name: 'Heavy cream', quantity: '2 cups' },
      { id: 'm39-2', name: 'Egg yolks', quantity: '5' },
      { id: 'm39-3', name: 'Sugar', quantity: '1/2 cup' },
      { id: 'm39-4', name: 'Vanilla extract', quantity: '1 tsp' },
      { id: 'm39-5', name: 'Brown sugar', quantity: 'for topping' }
    ],
    shortRecipe: [
      '1. Preheat oven to 150°C (300°F).',
      '2. In a saucepan, heat cream until simmering. In a bowl, whisk yolks and sugar until light.',
      '3. Gradually add cream to yolk mixture, then stir in vanilla.',
      '4. Pour into ramekins and bake in a water bath for 30-40 minutes.',
      '5. Cool, then sprinkle with brown sugar and caramelize with a torch or broiler.'
    ],
    duration: '1 hour (plus chilling time)',
    tags: ['Vegetarian']
  },
  {
    id: 'm40',
    title: 'Churros',
    categoryIds: ['4'], // Desserts
    color: '#87CEEB',
    uri: 'https://i.guim.co.uk/img/media/254cfbd170a0139ed71bdc0e2c44e2d8c7af9dcd/1260_1143_5723_3431/master/5723.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=cd325a9f647f9affa21f4f45f354b566',
    description: 'Crispy on the outside and soft on the inside, churros are a beloved treat.',
    ingredients: [
      { id: 'm40-1', name: 'Water', quantity: '1 cup' },
      { id: 'm40-2', name: 'Butter', quantity: '2 tbsp' },
      { id: 'm40-3', name: 'Sugar', quantity: '1 tbsp' },
      { id: 'm40-4', name: 'Salt', quantity: '1/4 tsp' },
      { id: 'm40-5', name: 'All-purpose flour', quantity: '1 cup' },
      { id: 'm40-6', name: 'Eggs', quantity: '2' },
      { id: 'm40-7', name: 'Cinnamon sugar', quantity: 'for dusting' },
      { id: 'm40-8', name: 'Oil', quantity: 'for frying' }
    ],
    shortRecipe: [
      '1. In a saucepan, combine water, butter, sugar, and salt; bring to a boil.',
      '2. Remove from heat and stir in flour until a dough forms.',
      '3. Allow to cool slightly, then mix in eggs one at a time.',
      '4. Heat oil in a deep pan and pipe dough into hot oil, frying until golden brown.',
      '5. Drain and dust with cinnamon sugar before serving.'
    ],
    duration: '45 minutes',
    tags: ['Vegetarian']
  },
  {
    id: 'm41',
    title: 'Espresso',
    categoryIds: ['5'], // Coffee
    color: '#8B4513',
    uri: 'https://www.tasteofhome.com/wp-content/uploads/2023/03/TOH-espresso-GettyImages-1291298315-JVcrop.jpg',
    description: 'A concentrated coffee brewed by forcing hot water through finely-ground coffee.',
    ingredients: [
      { id: 'm41-1', name: 'Espresso coffee grounds', quantity: '2 tbsp' },
      { id: 'm41-2', name: 'Water', quantity: '1 oz' }
    ],
    shortRecipe: [
      '1. Fill the espresso machine with water and ground coffee.',
      '2. Turn on the machine and allow it to heat up.',
      '3. Brew the espresso for about 25-30 seconds.',
      '4. Serve immediately in a small cup.'
    ],
    duration: '5 minutes',
    tags: ['Caffeine']
  },
  {
    id: 'm42',
    title: 'Latte',
    categoryIds: ['5'], // Coffee
    color: '#8B4513',
    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Caffe_Latte_at_Pulse_Cafe.jpg/640px-Caffe_Latte_at_Pulse_Cafe.jpg',
    description: 'A creamy coffee drink made with espresso and steamed milk, often topped with foam.',
    ingredients: [
      { id: 'm42-1', name: 'Espresso', quantity: '1 shot' },
      { id: 'm42-2', name: 'Steamed milk', quantity: '6 oz' },
      { id: 'm42-3', name: 'Foamed milk', quantity: 'for topping' }
    ],
    shortRecipe: [
      '1. Brew a shot of espresso.',
      '2. Steam the milk until hot and frothy.',
      '3. Pour the steamed milk over the espresso.',
      '4. Top with foamed milk.'
    ],
    duration: '10 minutes',
    tags: ['Caffeine', 'Milk']
  },
  {
    id: 'm43',
    title: 'Cappuccino',
    categoryIds: ['5'], // Coffee
    color: '#8B4513',
    uri: 'https://baristacourseadelaide.com.au/wp-content/uploads/2022/03/Black-Neon-Pixels-Gamer-YouTube-Banner-1-1080x675.png.webp',
    description: 'A coffee drink consisting of equal parts espresso, steamed milk, and frothed milk.',
    ingredients: [
      { id: 'm43-1', name: 'Espresso', quantity: '1 shot' },
      { id: 'm43-2', name: 'Steamed milk', quantity: '2 oz' },
      { id: 'm43-3', name: 'Foamed milk', quantity: '2 oz' }
    ],
    shortRecipe: [
      '1. Brew a shot of espresso.',
      '2. Steam milk until it’s frothy.',
      '3. Pour steamed milk over espresso and add foamed milk on top.'
    ],
    duration: '10 minutes',
    tags: ['Caffeine', 'Milk']
  },
  {
    id: 'm44',
    title: 'Macchiato',
    categoryIds: ['5'], // Coffee
    color: '#8B4513',
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTotrTCaOI2T9FN1-xp_84nhAcV2dzUR76X8Q&s',
    description: 'An espresso coffee drink with a small amount of steamed milk or milk foam.',
    ingredients: [
      { id: 'm44-1', name: 'Espresso', quantity: '1 shot' },
      { id: 'm44-2', name: 'Steamed milk', quantity: '1 oz' }
    ],
    shortRecipe: [
      '1. Brew a shot of espresso.',
      '2. Add a small amount of steamed milk or foam on top.'
    ],
    duration: '5 minutes',
    tags: ['Caffeine']
  },
  {
    id: 'm45',
    title: 'Mocha',
    categoryIds: ['5'], // Coffee
    color: '#8B4513',
    uri: 'https://images.immediate.co.uk/production/volatile/sites/2/2021/11/Mocha-1fc71f7.png?quality=90&resize=556,505',
    description: 'A delicious blend of espresso, steamed milk, and chocolate syrup.',
    ingredients: [
      { id: 'm45-1', name: 'Espresso', quantity: '1 shot' },
      { id: 'm45-2', name: 'Steamed milk', quantity: '6 oz' },
      { id: 'm45-3', name: 'Chocolate syrup', quantity: '2 tbsp' },
      { id: 'm45-4', name: 'Whipped cream', quantity: 'for topping' }
    ],
    shortRecipe: [
      '1. Brew a shot of espresso.',
      '2. Mix in chocolate syrup.',
      '3. Steam the milk and pour it over the espresso mixture.',
      '4. Top with whipped cream.'
    ],
    duration: '10 minutes',
    tags: ['Caffeine', 'Chocolate']
  },
  {
    id: 'm46',
    title: 'Affogato',
    categoryIds: ['5'], // Coffee
    color: '#8B4513',
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTkJykUxHNyOWnO96woV8qLwGsbs1z8tq93w&s',
    description: 'A dessert consisting of a scoop of vanilla gelato or ice cream topped with a shot of hot espresso.',
    ingredients: [
      { id: 'm46-1', name: 'Espresso', quantity: '1 shot' },
      { id: 'm46-2', name: 'Vanilla ice cream', quantity: '1 scoop' }
    ],
    shortRecipe: [
      '1. Brew a shot of espresso.',
      '2. Place a scoop of vanilla ice cream in a bowl.',
      '3. Pour the hot espresso over the ice cream and serve immediately.'
    ],
    duration: '5 minutes',
    tags: ['Caffeine', 'Dessert']
  },
  {
    id: 'm47',
    title: 'Americano',
    categoryIds: ['5'], // Coffee
    color: '#8B4513',
    uri: 'https://majestycoffee.com/cdn/shop/articles/americano_b74a8154-454b-4f74-9a6c-95fbc4152ed3.jpg?v=1684048195',
    description: 'A coffee drink made by diluting espresso with hot water.',
    ingredients: [
      { id: 'm47-1', name: 'Espresso', quantity: '1 shot' },
      { id: 'm47-2', name: 'Hot water', quantity: '6 oz' }
    ],
    shortRecipe: [
      '1. Brew a shot of espresso.',
      '2. Add hot water to the espresso to reach desired strength.'
    ],
    duration: '5 minutes',
    tags: ['Caffeine']
  },
  {
    id: 'm48',
    title: 'Irish Coffee',
    categoryIds: ['5'], // Coffee
    color: '#8B4513',
    uri: 'https://www.marthastewart.com/thmb/O1VuPgo_GZesbQU4l6xcifUr6eY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/maple-irish-coffee-0218-103228749_xl-horiz-3a084885d2ae4faf90e2c1c7aac7af84.jpg',
    description: 'A cocktail consisting of hot coffee, Irish whiskey, and sugar, stirred, and topped with cream.',
    ingredients: [
      { id: 'm48-1', name: 'Hot coffee', quantity: '1 cup' },
      { id: 'm48-2', name: 'Irish whiskey', quantity: '1.5 oz' },
      { id: 'm48-3', name: 'Sugar', quantity: '1-2 tsp' },
      { id: 'm48-4', name: 'Heavy cream', quantity: 'for topping' }
    ],
    shortRecipe: [
      '1. Brew hot coffee.',
      '2. Stir in Irish whiskey and sugar until dissolved.',
      '3. Top with lightly whipped heavy cream.'
    ],
    duration: '5 minutes',
    tags: ['Caffeine', 'Alcohol']
  },
  {
    id: 'm49',
    title: 'Flat White',
    categoryIds: ['5'], // Coffee
    color: '#8B4513',
    uri: 'https://cdn.shopify.com/s/files/1/0660/8571/6215/files/Flat_White.jpg?v=1682415837',
    description: 'A coffee drink consisting of espresso with microfoam (steamed milk with fine, velvety bubbles) poured over it.',
    ingredients: [
      { id: 'm49-1', name: 'Espresso', quantity: '1 shot' },
      { id: 'm49-2', name: 'Steamed milk', quantity: '4 oz' }
    ],
    shortRecipe: [
      '1. Brew a shot of espresso.',
      '2. Steam the milk to create microfoam.',
      '3. Pour the steamed milk over the espresso, creating a velvety texture.'
    ],
    duration: '10 minutes',
    tags: ['Caffeine', 'Milk']
  },
  {
    id: 'm50',
    title: 'Frappe',
    categoryIds: ['5'], // Coffee
    color: '#8B4513',
    uri: 'https://www.shutterstock.com/image-photo/glasses-tasty-frappe-coffee-beans-260nw-1537039769.jpg',
    description: 'A blended coffee drink typically served cold, made with instant coffee, water, and milk or cream.',
    ingredients: [
      { id: 'm50-1', name: 'Instant coffee', quantity: '2 tbsp' },
      { id: 'm50-2', name: 'Cold water', quantity: '1 cup' },
      { id: 'm50-3', name: 'Milk or cream', quantity: 'to taste' },
      { id: 'm50-4', name: 'Sugar', quantity: 'to taste' }
    ],
    shortRecipe: [
      '1. Combine instant coffee, cold water, and sugar in a blender.',
      '2. Blend until frothy.',
      '3. Pour into a glass and top with milk or cream.'
    ],
    duration: '5 minutes',
    tags: ['Caffeine', 'Cold']
  },
  {
    id: 'm51',
    title: 'Green Tea',
    categoryIds: ['6'], // Tea
    color: '#32CD32',
    uri: 'https://cf-img-a-in.tosshub.com/sites/visualstory/stories/2023_08/story_55314/assets/2.jpeg?time=1691768874',
    description: 'A popular beverage made from unoxidized leaves, known for its light, refreshing taste and numerous health benefits.',
    ingredients: [
        { id: 'm51-1', name: 'Green tea leaves', quantity: '1 tsp' },
        { id: 'm51-2', name: 'Water', quantity: '1 cup' }
    ],
    shortRecipe: [
        '1. Boil water and let it cool slightly.',
        '2. Steep green tea leaves in hot water for 2-3 minutes.',
        '3. Strain and serve.'
    ],
    duration: '5 minutes',
    tags: ['Antioxidant', 'Healthy']
},
{
    id: 'm52',
    title: 'Chamomile Tea',
    categoryIds: ['6'], // Tea
    color: '#32CD32',
    uri: 'https://images-prod.healthline.com/hlcmsresource/images/chamomile-tea.jpg',
    description: 'A soothing herbal tea made from chamomile flowers, known for its calming effects.',
    ingredients: [
        { id: 'm52-1', name: 'Chamomile flowers', quantity: '1 tbsp' },
        { id: 'm52-2', name: 'Water', quantity: '1 cup' }
    ],
    shortRecipe: [
        '1. Boil water.',
        '2. Steep chamomile flowers in hot water for 5 minutes.',
        '3. Strain and enjoy.'
    ],
    duration: '7 minutes',
    tags: ['Relaxing', 'Herbal']
},
{
    id: 'm53',
    title: 'Earl Grey Tea',
    categoryIds: ['6'], // Tea
    color: '#32CD32',
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKZDlcOlUk9LlU-k0_ZGG3mngMcznTJ5IK4A&s',
    description: 'A flavored black tea infused with oil of bergamot, known for its distinctive aroma.',
    ingredients: [
        { id: 'm53-1', name: 'Earl Grey tea leaves', quantity: '1 tsp' },
        { id: 'm53-2', name: 'Water', quantity: '1 cup' },
        { id: 'm53-3', name: 'Milk (optional)', quantity: 'to taste' }
    ],
    shortRecipe: [
        '1. Boil water.',
        '2. Steep Earl Grey tea leaves in hot water for 3-5 minutes.',
        '3. Add milk if desired and serve.'
    ],
    duration: '5 minutes',
    tags: ['Classic', 'Black Tea']
},
{
    id: 'm54',
    title: 'Peppermint Tea',
    categoryIds: ['6'], // Tea
    color: '#32CD32',
    uri: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325242/peppermint-tea.jpg',
    description: 'A refreshing herbal tea made from peppermint leaves, known for its soothing properties.',
    ingredients: [
        { id: 'm54-1', name: 'Peppermint leaves', quantity: '1 tbsp' },
        { id: 'm54-2', name: 'Water', quantity: '1 cup' }
    ],
    shortRecipe: [
        '1. Boil water.',
        '2. Steep peppermint leaves in hot water for 5 minutes.',
        '3. Strain and enjoy.'
    ],
    duration: '7 minutes',
    tags: ['Refreshing', 'Herbal']
},
{
    id: 'm55',
    title: 'Chai Tea',
    categoryIds: ['6'], // Tea
    color: '#32CD32',
    uri: 'https://www.shutterstock.com/image-photo/indian-masala-chai-spice-tea-260nw-2044879739.jpg',
    description: 'A spiced tea beverage made by brewing black tea with various spices and herbs.',
    ingredients: [
        { id: 'm55-1', name: 'Black tea leaves', quantity: '2 tsp' },
        { id: 'm55-2', name: 'Water', quantity: '1 cup' },
        { id: 'm55-3', name: 'Milk', quantity: '1/2 cup' },
        { id: 'm55-4', name: 'Spices (cinnamon, cardamom, etc.)', quantity: 'to taste' }
    ],
    shortRecipe: [
        '1. Boil water with spices.',
        '2. Add black tea leaves and simmer for 3 minutes.',
        '3. Add milk, boil, and strain before serving.'
    ],
    duration: '10 minutes',
    tags: ['Spicy', 'Caffeine']
},
{
    id: 'm56',
    title: 'Matcha Tea',
    categoryIds: ['6'], // Tea
    color: '#32CD32',
    uri: 'https://thumbs.dreamstime.com/b/matcha-latte-art-heart-shape-top-wooden-table-some-gr-green-tea-powder-tools-tea-making-japanese-style-87708022.jpg',
    description: 'A traditional Japanese green tea made from finely ground powdered tea leaves.',
    ingredients: [
        { id: 'm56-1', name: 'Matcha powder', quantity: '1 tsp' },
        { id: 'm56-2', name: 'Hot water', quantity: '1 cup' }
    ],
    shortRecipe: [
        '1. Whisk matcha powder with hot water until frothy.',
        '2. Serve in a bowl or cup.'
    ],
    duration: '5 minutes',
    tags: ['Healthy', 'Antioxidant']
},
{
    id: 'm57',
    title: 'Hibiscus Tea',
    categoryIds: ['6'], // Tea
    color: '#32CD32',
    uri: 'https://media.istockphoto.com/id/1940388079/photo/delicious-hibiscus-tea-and-flowers-on-wooden-table-top-view-space-for-text.jpg?s=612x612&w=0&k=20&c=ydkYaVudWvE2go3n2whwKy4p50VqrvbWA-hXJA0mRdk=',
    description: 'A tart, red herbal tea made from dried hibiscus flowers, known for its vibrant color and flavor.',
    ingredients: [
        { id: 'm57-1', name: 'Dried hibiscus flowers', quantity: '1 tbsp' },
        { id: 'm57-2', name: 'Water', quantity: '1 cup' }
    ],
    shortRecipe: [
        '1. Boil water.',
        '2. Steep dried hibiscus flowers in hot water for 5-7 minutes.',
        '3. Strain and serve hot or cold.'
    ],
    duration: '7 minutes',
    tags: ['Tart', 'Herbal']
},
{
    id: 'm58',
    title: 'Jasmine Tea',
    categoryIds: ['6'], // Tea
    color: '#32CD32',
    uri: 'https://res.cloudinary.com/perkchops/image/upload/v1600295447/product/2020817130/kijcol4qdjjbk0npgcfw.jpg',
    description: 'A fragrant tea made by infusing green or black tea with jasmine flowers, known for its aromatic flavor.',
    ingredients: [
        { id: 'm58-1', name: 'Jasmine tea leaves', quantity: '1 tsp' },
        { id: 'm58-2', name: 'Water', quantity: '1 cup' }
    ],
    shortRecipe: [
        '1. Boil water.',
        '2. Steep jasmine tea leaves in hot water for 3-5 minutes.',
        '3. Strain and serve.'
    ],
    duration: '5 minutes',
    tags: ['Aromatic', 'Floral']
},
{
    id: 'm59',
    title: 'Rooibos Tea',
    categoryIds: ['6'], // Tea
    color: '#32CD32',
    uri: 'https://media.istockphoto.com/id/1130648899/photo/tea-cup-surrounded-by-several-kinds-of-dried-herbs-for-preparing-infusion.jpg?s=612x612&w=0&k=20&c=YwGs3esmCM0Y8YQk14UHh88cKe02NOlbwOzCm96aAOI=',
    description: 'A naturally caffeine-free herbal tea made from the leaves of the rooibos plant, known for its rich flavor.',
    ingredients: [
        { id: 'm59-1', name: 'Rooibos tea leaves', quantity: '1 tbsp' },
        { id: 'm59-2', name: 'Water', quantity: '1 cup' }
    ],
    shortRecipe: [
        '1. Boil water.',
        '2. Steep rooibos tea leaves in hot water for 5-7 minutes.',
        '3. Strain and serve.'
    ],
    duration: '7 minutes',
    tags: ['Caffeine-free', 'Herbal']
},
{
    id: 'm60',
    title: 'Lemon Ginger Tea',
    categoryIds: ['6'], // Tea
    color: '#32CD32',
    uri: 'https://www.shutterstock.com/image-photo/green-tea-lemon-ginger-260nw-2341140515.jpg',
    description: 'A zesty tea made with fresh ginger and lemon, known for its warming and digestive properties.',
    ingredients: [
        { id: 'm60-1', name: 'Fresh ginger', quantity: '1-inch piece, sliced' },
        { id: 'm60-2', name: 'Lemon juice', quantity: '1 tbsp' },
        { id: 'm60-3', name: 'Water', quantity: '1 cup' },
        { id: 'm60-4', name: 'Honey (optional)', quantity: 'to taste' }
    ],
    shortRecipe: [
        '1. Boil water with sliced ginger for 5 minutes.',
        '2. Remove from heat, add lemon juice, and stir.',
        '3. Sweeten with honey if desired and serve.'
    ],
    duration: '10 minutes',
    tags: ['Zesty', 'Digestive']
}


];


  