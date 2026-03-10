-- ============================================
-- Monbusinesslocal - Seed Data
-- Commerces locaux de Lausanne
-- ============================================

-- ============================================
-- COMMERCES
-- ============================================

INSERT INTO restaurants (slug, name_fr, name_de, name_en, description_fr, description_de, description_en, cuisine_type, canton, city, address, postal_code, phone, email, website, price_range, features, cover_image, is_featured, is_published, opening_hours) VALUES

-- 1. Boulangerie du Flon
('boulangerie-du-flon-lausanne',
  'Boulangerie du Flon',
  'Bäckerei du Flon',
  'Boulangerie du Flon',
  'Boulangerie artisanale au coeur du Flon. Pain au levain, viennoiseries maison et patisseries de saison preparees chaque matin avec des farines locales.',
  'Handwerkliche Bäckerei im Herzen des Flon. Sauerteigbrot, hausgemachte Backwaren und saisonale Patisserie, jeden Morgen mit lokalen Mehlen zubereitet.',
  'Artisan bakery in the heart of Flon. Sourdough bread, homemade pastries and seasonal treats prepared every morning with local flours.',
  'boulangerie', 'vaud', 'Lausanne', 'Voie du Chariot 4', '1003',
  '+41 21 311 22 33', 'contact@boulangerieduflon.ch', 'https://boulangerieduflon.ch',
  '1',
  ARRAY['wifi', 'terrasse', 'a-emporter'],
  'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
  true, true,
  '{"monday": {"open": "06:30", "close": "19:00"}, "tuesday": {"open": "06:30", "close": "19:00"}, "wednesday": {"open": "06:30", "close": "19:00"}, "thursday": {"open": "06:30", "close": "19:00"}, "friday": {"open": "06:30", "close": "19:00"}, "saturday": {"open": "07:00", "close": "17:00"}, "sunday": {"closed": true}}'
),

-- 2. Atelier Creatif Lausanne
('atelier-creatif-lausanne',
  'Atelier Creatif',
  'Kreativ Atelier',
  'Creative Workshop',
  'Espace de creation et boutique d artisanat local. Cours de poterie, peinture et bijoux. Decouvrez des pieces uniques creees par des artisans lausannois.',
  'Kreativraum und lokaler Handwerksladen. Kurse für Töpferei, Malerei und Schmuck. Entdecken Sie einzigartige Stücke von Lausanner Handwerkern.',
  'Creative space and local craft shop. Pottery, painting and jewelry classes. Discover unique pieces created by Lausanne artisans.',
  'artisanat', 'vaud', 'Lausanne', 'Rue de Bourg 18', '1003',
  '+41 21 312 44 55', 'hello@ateliercreatiflausanne.ch', 'https://ateliercreatiflausanne.ch',
  '2',
  ARRAY['wifi', 'accessible-pmr', 'cours'],
  'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80',
  true, true,
  '{"monday": {"closed": true}, "tuesday": {"open": "10:00", "close": "18:30"}, "wednesday": {"open": "10:00", "close": "18:30"}, "thursday": {"open": "10:00", "close": "20:00"}, "friday": {"open": "10:00", "close": "18:30"}, "saturday": {"open": "10:00", "close": "17:00"}, "sunday": {"closed": true}}'
),

-- 3. Cafe de Grancy
('cafe-de-grancy-lausanne',
  'Cafe de Grancy',
  'Cafe de Grancy',
  'Cafe de Grancy',
  'Le cafe de quartier par excellence. Brunchs genereux le week-end, cafe de specialite torrefie localement et ambiance chaleureuse a deux pas de la gare.',
  'Das Quartier-Café schlechthin. Grosszügige Brunchs am Wochenende, lokal gerösteter Spezialitätenkaffee und warme Atmosphäre unweit des Bahnhofs.',
  'The quintessential neighborhood cafe. Generous weekend brunches, locally roasted specialty coffee and warm atmosphere near the station.',
  'cafe', 'vaud', 'Lausanne', 'Avenue de la Gare 12', '1003',
  '+41 21 616 88 99', 'info@cafedegrancy.ch', 'https://cafedegrancy.ch',
  '2',
  ARRAY['wifi', 'terrasse', 'brunch', 'a-emporter', 'vegetarien'],
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80',
  true, true,
  '{"monday": {"open": "07:00", "close": "22:00"}, "tuesday": {"open": "07:00", "close": "22:00"}, "wednesday": {"open": "07:00", "close": "22:00"}, "thursday": {"open": "07:00", "close": "23:00"}, "friday": {"open": "07:00", "close": "23:00"}, "saturday": {"open": "08:00", "close": "23:00"}, "sunday": {"open": "09:00", "close": "18:00"}}'
),

-- 4. Fleuriste Vert Tendre
('fleuriste-vert-tendre-lausanne',
  'Vert Tendre',
  'Vert Tendre',
  'Vert Tendre',
  'Fleuriste eco-responsable proposant des bouquets de saison avec des fleurs locales et suisses. Livraison a velo dans tout Lausanne.',
  'Umweltbewusster Florist mit saisonalen Sträussen aus lokalen und Schweizer Blumen. Fahrradlieferung in ganz Lausanne.',
  'Eco-friendly florist offering seasonal bouquets with local Swiss flowers. Bicycle delivery throughout Lausanne.',
  'fleuriste', 'vaud', 'Lausanne', 'Rue Centrale 7', '1003',
  '+41 21 323 11 22', 'fleurs@verttendre.ch', 'https://verttendre.ch',
  '2',
  ARRAY['livraison', 'eco-responsable', 'commande-en-ligne'],
  'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&q=80',
  false, true,
  '{"monday": {"open": "08:00", "close": "18:30"}, "tuesday": {"open": "08:00", "close": "18:30"}, "wednesday": {"open": "08:00", "close": "18:30"}, "thursday": {"open": "08:00", "close": "18:30"}, "friday": {"open": "08:00", "close": "18:30"}, "saturday": {"open": "08:00", "close": "16:00"}, "sunday": {"closed": true}}'
),

-- 5. Librairie Le Tramway
('librairie-le-tramway-lausanne',
  'Librairie Le Tramway',
  'Buchhandlung Le Tramway',
  'Le Tramway Bookshop',
  'Librairie independante depuis 1998. Selection pointue de litterature, essais et BD. Rencontres d auteurs et club de lecture mensuel.',
  'Unabhängige Buchhandlung seit 1998. Exquisite Auswahl an Literatur, Essays und Comics. Autorentreffen und monatlicher Buchclub.',
  'Independent bookshop since 1998. Curated selection of literature, essays and comics. Author meetings and monthly book club.',
  'librairie', 'vaud', 'Lausanne', 'Place de la Palud 2', '1003',
  '+41 21 311 55 66', 'info@librairietramway.ch', 'https://librairietramway.ch',
  '2',
  ARRAY['wifi', 'accessible-pmr', 'evenements'],
  'https://images.unsplash.com/photo-1526243741027-444d633d7365?w=800&q=80',
  false, true,
  '{"monday": {"open": "09:00", "close": "18:30"}, "tuesday": {"open": "09:00", "close": "18:30"}, "wednesday": {"open": "09:00", "close": "18:30"}, "thursday": {"open": "09:00", "close": "20:00"}, "friday": {"open": "09:00", "close": "18:30"}, "saturday": {"open": "09:00", "close": "17:00"}, "sunday": {"closed": true}}'
),

-- 6. Velo Station Lausanne
('velo-station-lausanne',
  'Velo Station',
  'Velo Station',
  'Velo Station',
  'Atelier de reparation et boutique velo au centre de Lausanne. Vente de velos neufs et occasion, entretien et accessoires. Conseils personnalises.',
  'Fahrradwerkstatt und -laden im Zentrum von Lausanne. Verkauf neuer und gebrauchter Fahrräder, Wartung und Zubehör.',
  'Bike repair shop and store in central Lausanne. New and used bikes, maintenance and accessories. Personalized advice.',
  'sport', 'vaud', 'Lausanne', 'Rue du Petit-Chene 22', '1003',
  '+41 21 320 77 88', 'info@velostation.ch', 'https://velostation.ch',
  '2',
  ARRAY['reparation', 'location', 'conseil'],
  'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
  false, true,
  '{"monday": {"open": "09:00", "close": "18:00"}, "tuesday": {"open": "09:00", "close": "18:00"}, "wednesday": {"open": "09:00", "close": "18:00"}, "thursday": {"open": "09:00", "close": "18:00"}, "friday": {"open": "09:00", "close": "18:00"}, "saturday": {"open": "09:00", "close": "16:00"}, "sunday": {"closed": true}}'
),

-- 7. Epicerie Fine du Marche
('epicerie-fine-du-marche-lausanne',
  'Epicerie du Marche',
  'Feinkostladen du Marche',
  'Epicerie du Marche',
  'Epicerie fine proposant des produits locaux et artisanaux du canton de Vaud. Fromages, charcuteries, vins et specialites du terroir.',
  'Feinkostladen mit lokalen und handwerklichen Produkten aus dem Kanton Waadt. Käse, Wurstwaren, Weine und regionale Spezialitäten.',
  'Fine grocery store featuring local artisan products from Canton Vaud. Cheeses, charcuterie, wines and regional specialties.',
  'epicerie', 'vaud', 'Lausanne', 'Rue de l Ale 25', '1003',
  '+41 21 312 33 44', 'bonjour@epiceriedumarche.ch', 'https://epiceriedumarche.ch',
  '2',
  ARRAY['produits-locaux', 'degustation', 'panier-cadeau'],
  'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&q=80',
  true, true,
  '{"monday": {"closed": true}, "tuesday": {"open": "08:30", "close": "18:30"}, "wednesday": {"open": "08:30", "close": "18:30"}, "thursday": {"open": "08:30", "close": "18:30"}, "friday": {"open": "08:30", "close": "19:00"}, "saturday": {"open": "08:00", "close": "16:00"}, "sunday": {"closed": true}}'
),

-- 8. Studio Zen Yoga
('studio-zen-yoga-lausanne',
  'Studio Zen',
  'Studio Zen',
  'Studio Zen',
  'Studio de yoga et bien-etre au coeur de Lausanne. Cours de yoga, pilates et meditation pour tous les niveaux. Espace calme et lumineux.',
  'Yoga- und Wellness-Studio im Herzen von Lausanne. Yoga-, Pilates- und Meditationskurse für alle Niveaus. Ruhiger und heller Raum.',
  'Yoga and wellness studio in the heart of Lausanne. Yoga, pilates and meditation classes for all levels. Calm and bright space.',
  'bien-etre', 'vaud', 'Lausanne', 'Avenue de Montchoisi 15', '1006',
  '+41 21 601 22 33', 'namaste@studiozenlausanne.ch', 'https://studiozenlausanne.ch',
  '2',
  ARRAY['cours', 'douches', 'materiel-fourni'],
  'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80',
  false, true,
  '{"monday": {"open": "07:00", "close": "21:00"}, "tuesday": {"open": "07:00", "close": "21:00"}, "wednesday": {"open": "07:00", "close": "21:00"}, "thursday": {"open": "07:00", "close": "21:00"}, "friday": {"open": "07:00", "close": "20:00"}, "saturday": {"open": "08:00", "close": "16:00"}, "sunday": {"open": "09:00", "close": "14:00"}}'
),

-- 9. Barbier du Lac
('barbier-du-lac-lausanne',
  'Barbier du Lac',
  'Barbier du Lac',
  'Barbier du Lac',
  'Barbier traditionnel avec une touche moderne. Coupes, tailles de barbe, soins et rasage a l ancienne. Sur rendez-vous.',
  'Traditioneller Barbier mit modernem Touch. Haarschnitte, Bartpflege und klassische Rasur. Nach Vereinbarung.',
  'Traditional barber with a modern touch. Haircuts, beard trimming, grooming and old-school shaving. By appointment.',
  'beaute', 'vaud', 'Lausanne', 'Rue du Grand-Pont 8', '1003',
  '+41 21 311 99 00', 'rdv@barbierdulac.ch', 'https://barbierdulac.ch',
  '2',
  ARRAY['sur-rendez-vous', 'wifi', 'produits-bio'],
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80',
  false, true,
  '{"monday": {"closed": true}, "tuesday": {"open": "09:00", "close": "19:00"}, "wednesday": {"open": "09:00", "close": "19:00"}, "thursday": {"open": "09:00", "close": "20:00"}, "friday": {"open": "09:00", "close": "19:00"}, "saturday": {"open": "08:00", "close": "16:00"}, "sunday": {"closed": true}}'
),

-- 10. Restaurant La Table Vaudoise
('la-table-vaudoise-lausanne',
  'La Table Vaudoise',
  'La Table Vaudoise',
  'La Table Vaudoise',
  'Restaurant de cuisine traditionnelle vaudoise. Papet vaudois, filets de perche et fondues dans un cadre authentique. Terrasse avec vue sur le lac.',
  'Restaurant mit traditioneller Waadtländer Küche. Papet Vaudois, Eglifilets und Fondues in authentischem Ambiente. Terrasse mit Seeblick.',
  'Traditional Vaudois cuisine restaurant. Papet vaudois, perch fillets and fondues in an authentic setting. Terrace with lake view.',
  'restaurant', 'vaud', 'Lausanne', 'Place de la Navigation 5', '1006',
  '+41 21 617 44 55', 'reservation@latablevaudoise.ch', 'https://latablevaudoise.ch',
  '3',
  ARRAY['terrasse', 'vue-lac', 'parking', 'accessible-pmr', 'vegetarien'],
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
  true, true,
  '{"monday": {"closed": true}, "tuesday": {"open": "11:30", "close": "14:30"}, "wednesday": {"open": "11:30", "close": "14:30"}, "thursday": {"open": "11:30", "close": "22:00"}, "friday": {"open": "11:30", "close": "22:30"}, "saturday": {"open": "11:30", "close": "22:30"}, "sunday": {"open": "11:30", "close": "15:00"}}'
),

-- 11. Boutique Mode Ethique
('mode-ethique-lausanne',
  'Mode Ethique',
  'Ethische Mode',
  'Ethical Fashion',
  'Boutique de mode durable et ethique. Vetements, accessoires et maroquinerie de createurs suisses et europeens engages. Pieces uniques et intemporelles.',
  'Nachhaltiger und ethischer Modeladen. Kleidung, Accessoires und Lederwaren von engagierten Schweizer und europäischen Designern.',
  'Sustainable and ethical fashion boutique. Clothing, accessories and leather goods from committed Swiss and European designers.',
  'mode', 'vaud', 'Lausanne', 'Rue Saint-Francois 12', '1003',
  '+41 21 320 55 66', 'hello@modeethique.ch', 'https://modeethique.ch',
  '3',
  ARRAY['eco-responsable', 'createurs-locaux', 'retouches'],
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
  false, true,
  '{"monday": {"open": "10:00", "close": "18:30"}, "tuesday": {"open": "10:00", "close": "18:30"}, "wednesday": {"open": "10:00", "close": "18:30"}, "thursday": {"open": "10:00", "close": "20:00"}, "friday": {"open": "10:00", "close": "18:30"}, "saturday": {"open": "10:00", "close": "17:00"}, "sunday": {"closed": true}}'
),

-- 12. Fromagerie Lactee
('fromagerie-lactee-lausanne',
  'Fromagerie Lactee',
  'Käserei Lactée',
  'Fromagerie Lactee',
  'Fromagerie artisanale specialisee dans les fromages vaudois et suisses. Gruyere AOP, Tomme Vaudoise, L Etivaz. Degustations et plateaux sur commande.',
  'Handwerkliche Käserei spezialisiert auf Waadtländer und Schweizer Käse. Gruyère AOP, Tomme Vaudoise, L''Etivaz. Degustationen und Platten auf Bestellung.',
  'Artisan cheese shop specializing in Vaudois and Swiss cheeses. Gruyere AOP, Tomme Vaudoise, L''Etivaz. Tastings and platters to order.',
  'alimentation', 'vaud', 'Lausanne', 'Rue de la Louve 3', '1003',
  '+41 21 312 88 99', 'fromage@fromagerie-lactee.ch', 'https://fromagerie-lactee.ch',
  '2',
  ARRAY['produits-locaux', 'degustation', 'panier-cadeau', 'commande-en-ligne'],
  'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=800&q=80',
  false, true,
  '{"monday": {"closed": true}, "tuesday": {"open": "08:00", "close": "18:30"}, "wednesday": {"open": "08:00", "close": "18:30"}, "thursday": {"open": "08:00", "close": "18:30"}, "friday": {"open": "08:00", "close": "19:00"}, "saturday": {"open": "07:30", "close": "16:00"}, "sunday": {"closed": true}}'
);

-- ============================================
-- REVIEWS
-- ============================================

INSERT INTO reviews (restaurant_id, author_name, rating, comment, is_verified) VALUES
((SELECT id FROM restaurants WHERE slug = 'boulangerie-du-flon-lausanne'), 'Marie L.', 5, 'Le meilleur pain au levain de Lausanne ! Les croissants sont incroyables aussi.', true),
((SELECT id FROM restaurants WHERE slug = 'boulangerie-du-flon-lausanne'), 'Thomas R.', 4, 'Tres bonne boulangerie, produits frais et personnel agreable.', true),
((SELECT id FROM restaurants WHERE slug = 'cafe-de-grancy-lausanne'), 'Julie M.', 5, 'Mon cafe prefere a Lausanne. Le brunch du samedi est une tuerie !', true),
((SELECT id FROM restaurants WHERE slug = 'cafe-de-grancy-lausanne'), 'Nicolas P.', 4, 'Ambiance super, bon cafe et terrasse agreable en ete.', true),
((SELECT id FROM restaurants WHERE slug = 'la-table-vaudoise-lausanne'), 'Sophie D.', 5, 'Le papet vaudois est un delice. Vue magnifique sur le lac depuis la terrasse.', true),
((SELECT id FROM restaurants WHERE slug = 'la-table-vaudoise-lausanne'), 'Pierre B.', 4, 'Cuisine traditionnelle excellente. Service impeccable.', true),
((SELECT id FROM restaurants WHERE slug = 'epicerie-fine-du-marche-lausanne'), 'Claire V.', 5, 'Des produits locaux d une qualite exceptionnelle. Les paniers cadeaux sont parfaits.', true),
((SELECT id FROM restaurants WHERE slug = 'atelier-creatif-lausanne'), 'Laura S.', 5, 'J ai adore le cours de poterie ! Ambiance tres detendue et la prof est geniale.', true),
((SELECT id FROM restaurants WHERE slug = 'librairie-le-tramway-lausanne'), 'Antoine G.', 5, 'Une librairie comme on les aime. Conseils personnalises et selection pointue.', true),
((SELECT id FROM restaurants WHERE slug = 'fleuriste-vert-tendre-lausanne'), 'Emma F.', 5, 'Bouquets magnifiques et livraison a velo, j adore le concept !', true),
((SELECT id FROM restaurants WHERE slug = 'studio-zen-yoga-lausanne'), 'Camille R.', 4, 'Tres bon studio, profs competents. L espace est lumineux et calme.', true),
((SELECT id FROM restaurants WHERE slug = 'barbier-du-lac-lausanne'), 'Marc D.', 5, 'Le meilleur barbier de la ville. Rasage impeccable et ambiance top.', true),
((SELECT id FROM restaurants WHERE slug = 'mode-ethique-lausanne'), 'Isabelle K.', 4, 'Belle selection de vetements ethiques. Prix un peu eleves mais qualite au rendez-vous.', true),
((SELECT id FROM restaurants WHERE slug = 'fromagerie-lactee-lausanne'), 'Paul M.', 5, 'Un paradis pour les amateurs de fromage. Le Gruyere AOP est exceptionnel.', true);

-- ============================================
-- MENU ITEMS (produits et services)
-- ============================================

INSERT INTO menu_items (restaurant_id, name_fr, name_de, name_en, description_fr, price, category, position, is_available) VALUES
-- Boulangerie du Flon
((SELECT id FROM restaurants WHERE slug = 'boulangerie-du-flon-lausanne'), 'Pain au levain', 'Sauerteigbrot', 'Sourdough bread', 'Pain au levain naturel, farine bio', 6.50, 'Pains', 1, true),
((SELECT id FROM restaurants WHERE slug = 'boulangerie-du-flon-lausanne'), 'Croissant beurre', 'Buttercroissant', 'Butter croissant', 'Croissant pur beurre fait maison', 3.20, 'Viennoiseries', 2, true),
((SELECT id FROM restaurants WHERE slug = 'boulangerie-du-flon-lausanne'), 'Tarte aux fruits', 'Früchtetorte', 'Fruit tart', 'Tarte de saison aux fruits frais', 5.80, 'Patisseries', 3, true),

-- Cafe de Grancy
((SELECT id FROM restaurants WHERE slug = 'cafe-de-grancy-lausanne'), 'Espresso', 'Espresso', 'Espresso', 'Cafe de specialite torrefie localement', 4.50, 'Boissons', 1, true),
((SELECT id FROM restaurants WHERE slug = 'cafe-de-grancy-lausanne'), 'Brunch du samedi', 'Samstagsbrunch', 'Saturday brunch', 'Buffet brunch complet avec boisson chaude', 38.00, 'Brunch', 2, true),
((SELECT id FROM restaurants WHERE slug = 'cafe-de-grancy-lausanne'), 'Avocado toast', 'Avocado-Toast', 'Avocado toast', 'Toast avocat, oeuf poche, graines', 18.50, 'Plats', 3, true),

-- La Table Vaudoise
((SELECT id FROM restaurants WHERE slug = 'la-table-vaudoise-lausanne'), 'Papet vaudois', 'Papet Vaudois', 'Papet vaudois', 'Poireaux, pommes de terre et saucisse aux choux', 32.00, 'Plats', 1, true),
((SELECT id FROM restaurants WHERE slug = 'la-table-vaudoise-lausanne'), 'Filets de perche', 'Eglifilets', 'Perch fillets', 'Filets de perche du lac, frites maison', 38.00, 'Plats', 2, true),
((SELECT id FROM restaurants WHERE slug = 'la-table-vaudoise-lausanne'), 'Fondue moitie-moitie', 'Fondue halb-halb', 'Half-half fondue', 'Gruyere AOP et Vacherin fribourgeois', 28.00, 'Fondues', 3, true),

-- Epicerie du Marche
((SELECT id FROM restaurants WHERE slug = 'epicerie-fine-du-marche-lausanne'), 'Gruyere AOP 200g', 'Gruyère AOP 200g', 'Gruyere AOP 200g', 'Gruyere AOP affine 12 mois', 8.90, 'Fromages', 1, true),
((SELECT id FROM restaurants WHERE slug = 'epicerie-fine-du-marche-lausanne'), 'Panier decouverte', 'Entdeckungskorb', 'Discovery basket', 'Selection de produits du terroir vaudois', 65.00, 'Paniers', 2, true),
((SELECT id FROM restaurants WHERE slug = 'epicerie-fine-du-marche-lausanne'), 'Vin blanc Lavaux', 'Weisswein Lavaux', 'Lavaux white wine', 'Chasselas Grand Cru Dezaley 75cl', 28.00, 'Vins', 3, true);
