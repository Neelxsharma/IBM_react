const photo = (id, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export const categories = [
  { id: 'easy-care', name: 'Easy care', note: 'Good company, no fuss.' },
  { id: 'statement-makers', name: 'Statement makers', note: 'A little room to grow.' },
  { id: 'pet-friendly', name: 'Pet friendly', note: 'Safe for curious noses.' },
];

export const plants = [
  { id: 'snake-plant', name: 'Snake Plant', category: 'easy-care', price: 28, description: 'Upright, sculptural leaves that thrive on neglect.', image: photo('photo-1593482892290-f54927ae2b34') },
  { id: 'zz-plant', name: 'ZZ Plant', category: 'easy-care', price: 32, description: 'Glossy foliage for the corners that get forgotten.', image: photo('photo-1632207691143-643e2a4a9361') },
  { id: 'pothos', name: 'Golden Pothos', category: 'easy-care', price: 24, description: 'A trailing favourite with heart-shaped leaves.', image: photo('photo-1600411833110-6c7caa7b9a3a') },
  { id: 'rubber-plant', name: 'Rubber Plant', category: 'easy-care', price: 38, description: 'Deep green, polished leaves with real presence.', image: photo('photo-1509423350716-97f9360b4e09') },
  { id: 'cast-iron-plant', name: 'Cast Iron Plant', category: 'easy-care', price: 34, description: 'A quietly handsome plant for low-light rooms.', image: photo('photo-1597055181300-7a9e6c2f6d7d') },
  { id: 'jade-plant', name: 'Jade Plant', category: 'easy-care', price: 22, description: 'A small, sturdy succulent with rounded leaves.', image: photo('photo-1501004318641-b39e6451bec6') },
  { id: 'monstera', name: 'Monstera Deliciosa', category: 'statement-makers', price: 48, description: 'Iconic split leaves that bring the jungle indoors.', image: photo('photo-1614594975525-e45190c55d0b') },
  { id: 'fiddle-leaf', name: 'Fiddle Leaf Fig', category: 'statement-makers', price: 68, description: 'Oversized fiddle-shaped leaves, beautifully bold.', image: photo('photo-1597055181300-7a9e6c2f6d7d') },
  { id: 'bird-of-paradise', name: 'Bird of Paradise', category: 'statement-makers', price: 74, description: 'Tropical leaves with a sunny, architectural feel.', image: photo('photo-1593691509543-c55fb32e5cee') },
  { id: 'alocasia', name: 'Alocasia Polly', category: 'statement-makers', price: 42, description: 'Arrow-shaped leaves with dramatic pale veins.', image: photo('photo-1593691509543-c55fb32e5cee') },
  { id: 'kentia-palm', name: 'Kentia Palm', category: 'statement-makers', price: 62, description: 'Soft, arching fronds that bring a room to life.', image: photo('photo-1518531933037-91b2f5f229cc') },
  { id: 'calathea-orbifolia', name: 'Calathea Orbifolia', category: 'statement-makers', price: 46, description: 'Broad silver-striped leaves, like living brushstrokes.', image: photo('photo-1597055181300-7a9e6c2f6d7d') },
  { id: 'boston-fern', name: 'Boston Fern', category: 'pet-friendly', price: 26, description: 'A soft cascade of fronds for a shelf or hanging pot.', image: photo('photo-1597055181300-7a9e6c2f6d7d') },
  { id: 'parlor-palm', name: 'Parlor Palm', category: 'pet-friendly', price: 30, description: 'An easygoing palm with graceful, feathery leaves.', image: photo('photo-1518531933037-91b2f5f229cc') },
  { id: 'spider-plant', name: 'Spider Plant', category: 'pet-friendly', price: 20, description: 'Playful arching leaves and tiny hanging plantlets.', image: photo('photo-1572688484438-313a6e50c333') },
  { id: 'peperomia', name: 'Peperomia Obtusifolia', category: 'pet-friendly', price: 23, description: 'Compact, rounded leaves with a lovely waxy shine.', image: photo('photo-1485955900006-10f4d324d411') },
  { id: 'prayer-plant', name: 'Prayer Plant', category: 'pet-friendly', price: 29, description: 'Patterned leaves that fold up gently each evening.', image: photo('photo-1597055181300-7a9e6c2f6d7d') },
  { id: 'haworthia', name: 'Haworthia', category: 'pet-friendly', price: 18, description: 'A petite, low-water succulent for a bright windowsill.', image: photo('photo-1501004318641-b39e6451bec6') },
];
