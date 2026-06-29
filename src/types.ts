/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = "en" | "es";

export interface MenuItem {
  id: string;
  nameEn: string;
  nameEs: string;
  descriptionEn: string;
  descriptionEs: string;
  price: number;
  category: "mains" | "starters" | "sides" | "desserts" | "drinks";
  image: string;
  rating: number;
  tagsEn: string[];
  tagsEs: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  roleEn: string;
  roleEs: string;
  rating: number;
  commentEn: string;
  commentEs: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  titleEn: string;
  titleEs: string;
  category: "food" | "interior" | "events" | "culture";
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}

export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
  specialRequests?: string;
  status: "confirmed" | "pending";
  bookingCode: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  likes: number;
  comments: number;
  captionEn: string;
  captionEs: string;
}

// English and Spanish translations dictionary
export const translations = {
  en: {
    brandName: "MOS-DOLLI",
    brandSubtitle: "Senegalese Restaurant",
    nav: {
      home: "Home",
      about: "About Us",
      menu: "Menu",
      gallery: "Gallery",
      events: "Events",
      reservations: "Reservations",
      contact: "Contact",
      cta: "Reserve a Table",
    },
    hero: {
      badge: "AUTHENTIC SENEGALESE KITCHEN",
      titlePre: "A Journey to Senegal",
      titleHighlight: "in the District",
      titlePost: "of Vegueta",
      subtitle: "Our restaurant in Las Palmas offers an authentic journey to Senegal in the historic heart of Vegueta, preparing traditional dishes and special refreshing homemade drinks to transport you with every taste.",
      btnMenu: "View Menu",
      btnBook: "Book a Table",
    },
    features: {
      title: "The Spirit of MOS-DOLLI",
      subtitle: "What makes our Senegalese dining experience unique and unforgettable",
      cuisine: {
        title: "Authentic Senegalese Food",
        desc: "Traditional recipes prepared with deep-rooted passion by our family kitchen.",
      },
      ingredients: {
        title: "Fresh Ingredients",
        desc: "Carefully selected products and imported authentic spices for genuine flavors.",
      },
      hospitality: {
        title: "Warm Teranga",
        desc: "Friendly, welcoming service inspired by 'Teranga', the legendary Senegalese spirit of hospitality.",
      },
      experience: {
        title: "Cultural Journey",
        desc: "An immersive journey through African flavors, music, art, and authentic local heritage.",
      },
    },
    about: {
      badge: "OUR STORY",
      titlePre: "MOS-DOLLI — A",
      titleHighlight: "Love for Senegal",
      text1: "At MOS-DOLLI (which translates from Wolof as 'taste and repeat' or 'savor and add'), we share the soul of Senegal through its most delicious culinary masterpieces. Our dishes are prepared following age-old family recipes passed down through generations.",
      text2: "Located on Paseo de San José in the historic center of Vegueta, Las Palmas, our kitchen is dedicated to bringing authentic, traditional Senegalese home cooking directly to you.",
      chefNote: "“Teranga is not just a word; it is our way of living, sharing, and cooking with love.”",
      btn: "Our Journey",
    },
    menu: {
      badge: "OUR SIGNATURE DISHES",
      title: "Traditional Flavors & Refreshments",
      searchPlaceholder: "Search for Thieboudienne, Mafe, Yassa, Bissap...",
      categories: {
        all: "All Items",
        mains: "Senegalese Dishes",
        starters: "Starters / Traditional",
        sides: "Sides",
        desserts: "Desserts",
        drinks: "Senegalese Drinks",
      },
      noResults: "No dishes or drinks found matching your search. Try another query!",
      addToOrder: "Add to Order",
      added: "Added!",
      price: "Price",
    },
    testimonials: {
      badge: "LOVE FROM OUR GUESTS",
      title: "What Our Diners Are Saying",
      googleRating: "Google Rating",
      basedOn: "Based on 320+ authentic reviews",
    },
    gallery: {
      badge: "VISUAL JOURNEY",
      title: "Sights of MOS-DOLLI",
      filterAll: "All Sights",
      filterFood: "Dishes & Drinks",
      filterInterior: "Our Restaurant",
      filterEvents: "Events",
      filterCulture: "Cultural Art",
    },
    events: {
      badge: "CULTURAL EVENTS",
      title: "Upcoming African Events",
      subtitle: "Join us for musical evenings, storytelling dinners, and Senegalese tea rituals.",
      btnBookEvent: "Book Event Table",
      list: [
        {
          id: "ev1",
          titleEn: "Senegalese Sabar Drum Night",
          titleEs: "Noche de Tambores Sabar de Senegal",
          date: "Every Friday, 8:30 PM",
          descEn: "Enjoy authentic Sabar drumming rhythms and rich music while enjoying your favourite dishes.",
          descEs: "Disfruta de los auténticos ritmos de los tambores Sabar y de la música de Senegal mientras degustas tus platos favoritos."
        },
        {
          id: "ev2",
          titleEn: "African Gastronomy & Spices Workshop",
          titleEs: "Taller de Especias y Gastronomía de Senegal",
          date: "First Sunday of Month, 6:00 PM",
          descEn: "Learn the secrets behind the perfect Thieboudienne and homemade Bissap from our family chefs.",
          descEs: "Aprende los secretos del Thieboudienne perfecto y del Bissap casero de la mano de nuestros cocineros familiares."
        }
      ]
    },
    reservation: {
      badge: "TABLE RESERVATION",
      title: "Reserve Your Table",
      subtitle: "Secure your table to enjoy authentic Senegalese flavors. For groups larger than 10, please call us directly.",
      form: {
        name: "Your Name",
        email: "Email Address",
        phone: "Phone Number",
        guests: "Number of Guests",
        date: "Select Date",
        time: "Select Time",
        specialRequests: "Special Requests (Allergies, birthday celebrations, etc.)",
        btnSubmit: "Reserve Now",
        submitting: "Processing reservation...",
        errorName: "Name is required",
        errorEmail: "Please enter a valid email",
        errorPhone: "Please enter a valid phone number (+34 XXX XXX XXX)",
        errorGuests: "Guests must be between 1 and 20",
        errorDate: "Please select a future date",
        errorTime: "Please select a time between 12:00 PM and 11:00 PM",
      },
      modal: {
        title: "Reservation Confirmed!",
        greeting: "Thank you, {name}!",
        body: "Your table reservation is secured at MOS-DOLLI. We look forward to offering you an extraordinary Senegalese experience.",
        code: "Booking Code",
        details: "Reservation Details",
        guests: "Guests",
        date: "Date",
        time: "Time",
        status: "Status",
        statusConfirmed: "Confirmed",
        note: "A confirmation email has been sent. If you need to modify or cancel, please contact us at least 2 hours in advance.",
        btnClose: "Perfect, See You There!",
      }
    },
    contact: {
      badge: "FIND US",
      title: "Visit MOS-DOLLI",
      addressLabel: "Our Address",
      addressText: "Paseo de San José, Vegueta, 35015 Las Palmas de Gran Canaria, Spain",
      phoneLabel: "Phone Reservation / Info",
      phoneText: "+34 624 965 510",
      emailLabel: "Email Us",
      emailText: "fatimesy106@gmail.com",
      hoursLabel: "Opening Hours",
      hoursText: "Monday – Sunday: 12:00 PM – 11:00 PM",
      kitchenNote: "Kitchen closes at 10:30 PM daily.",
      newsletterTitle: "Join the Family Newsletter",
      newsletterPlaceholder: "Enter your email address",
      newsletterBtn: "Subscribe",
      newsletterSuccess: "Welcome to the family! Check your inbox for your 10% welcome discount."
    },
    ordering: {
      title: "MOS-DOLLI Online Ordering",
      subtitle: "Order authentic Senegalese dishes for pickup or home delivery",
      cartTitle: "Your Selection",
      emptyCart: "Your order is empty. Explore our signature dishes and add your favorites!",
      subtotal: "Subtotal",
      delivery: "Delivery Fee",
      deliveryFree: "Free",
      total: "Total",
      checkoutBtn: "Place Order",
      deliveryOption: "Home Delivery",
      pickupOption: "Restaurant Pickup",
      orderSuccess: "Order Received! We are preparing your fresh Senegalese meal. Estimated arrival: 35-45 minutes.",
      orderBtnClose: "Great, Thank You!",
    },
    instagram: {
      badge: "FOLLOW US",
      title: "On Instagram @mosdolli",
      likes: "likes",
      comments: "comments",
    }
  },
  es: {
    brandName: "MOS-DOLLI",
    brandSubtitle: "Restaurante Senegalés",
    nav: {
      home: "Inicio",
      about: "Nosotros",
      menu: "Carta",
      gallery: "Galería",
      events: "Eventos",
      reservations: "Reservas",
      contact: "Contacto",
      cta: "Reserva Ahora",
    },
    hero: {
      badge: "AUTÉNTICA COMIDA SENEGALESA",
      titlePre: "Un Viaje a Senegal",
      titleHighlight: "en el Barrio",
      titlePost: "de Vegueta",
      subtitle: "Nuestro restaurante en Las Palmas te invita a vivir un auténtico viaje a Senegal en el histórico barrio de Vegueta, donde preparamos platos tradicionales senegaleses y refrescos especiales caseros para transportarte con cada sabor.",
      btnMenu: "Ver Carta",
      btnBook: "Reserva Ahora",
    },
    features: {
      title: "El Espíritu de MOS-DOLLI",
      subtitle: "Lo que hace que nuestra experiencia gastronómica senegalesa sea única e inolvidable",
      cuisine: {
        title: "Auténtica Cocina Senegalesa",
        desc: "Recetas tradicionales senegalesas preparadas con inmensa pasión y amor por nuestra cocina familiar.",
      },
      ingredients: {
        title: "Ingredientes Frescos",
        desc: "Usamos productos frescos de mercado y especias originales importadas para lograr sabores únicos.",
      },
      hospitality: {
        title: "Cálida Teranga",
        desc: "Un servicio acogedor e inigualable inspirado en la 'Teranga', la legendaria hospitalidad de Senegal.",
      },
      experience: {
        title: "Inmersión Cultural",
        desc: "Un viaje a través de los sabores, ritmos, música, arte y tradiciones africanas en Gran Canaria.",
      },
    },
    about: {
      badge: "SOBRE NOSOTROS",
      titlePre: "MOS-DOLLI — Amor por la",
      titleHighlight: "Cocina de Senegal",
      text1: "En MOS-DOLLI (que se traduce del wolof como 'probar y repetir' o 'degustar y añadir'), compartimos la riqueza de la cocina de Senegal a través de cada plato tradicional. Cocinamos respetando las recetas familiares pasadas de generación en generación.",
      text2: "Ubicado en el Paseo de San José, en el corazón del centro histórico de Vegueta en Las Palmas, nuestra cocina está dedicada a ofrecerte el auténtico y reconfortante sabor tradicional de la cocina senegalesa.",
      chefNote: "“La Teranga no es solo una palabra; es nuestra forma de recibirte, compartir y cocinar con todo el corazón.”",
      btn: "Conócenos Más",
    },
    menu: {
      badge: "NUESTRA CARTA",
      title: "Platos Tradicionales y Bebidas Típicas",
      searchPlaceholder: "Buscar Thieboudienne, Mafe, Yassa, Bissap...",
      categories: {
        all: "Todo",
        mains: "Platos Senegaleses",
        starters: "Entrantes / Tradicionales",
        sides: "Guarniciones",
        desserts: "Postres",
        drinks: "Bebidas Senegalesas",
      },
      noResults: "No se encontraron platos ni bebidas que coincidan con tu búsqueda. ¡Prueba otra palabra!",
      addToOrder: "Añadir al Pedido",
      added: "¡Añadido!",
      price: "Precio",
    },
    testimonials: {
      badge: "NUESTROS CLIENTES OPINAN",
      title: "Lo que Dicen de Nosotros",
      googleRating: "Valoración Google",
      basedOn: "Basado en más de 320 reseñas reales",
    },
    gallery: {
      badge: "VIAJE VISUAL",
      title: "Momentos en MOS-DOLLI",
      filterAll: "Todo",
      filterFood: "Platos y Bebidas",
      filterInterior: "El Restaurante",
      filterEvents: "Eventos Especiales",
      filterCulture: "Arte y Cultura",
    },
    events: {
      badge: "CELEBRACIONES CULTURALES",
      title: "Próximos Eventos",
      subtitle: "Únete a nuestras noches de percusión tradicional, cenas con narración senegalesa y rituales de té.",
      btnBookEvent: "Reservar Mesa de Evento",
      list: [
        {
          id: "ev1",
          titleEn: "Senegalese Sabar Drum Night",
          titleEs: "Noche de Tambores Sabar de Senegal",
          date: "Todos los viernes, 20:30",
          descEn: "Enjoy authentic Sabar drumming rhythms and rich music while enjoying your favourite dishes.",
          descEs: "Disfruta de los auténticos ritmos de los tambores Sabar y de la música de Senegal mientras degustas tus platos favoritos."
        },
        {
          id: "ev2",
          titleEn: "African Gastronomy & Spices Workshop",
          titleEs: "Taller de Especias y Gastronomía de Senegal",
          date: "Primer domingo de cada mes, 18:00",
          descEn: "Learn the secrets behind the perfect Thieboudienne and homemade Bissap from our family chefs.",
          descEs: "Aprende los secretos del Thieboudienne perfecto y del Bissap casero de la mano de nuestros cocineros familiares."
        }
      ]
    },
    reservation: {
      badge: "RESERVAR MESA",
      title: "Reserva Tu Experiencia",
      subtitle: "Asegura tu mesa para disfrutar de la auténtica cocina de Senegal. Para grupos grandes, llámanos directamente.",
      form: {
        name: "Tu Nombre",
        email: "Correo Electrónico",
        phone: "Número de Teléfono",
        guests: "Número de Personas",
        date: "Selecciona Fecha",
        time: "Selecciona Hora",
        specialRequests: "Peticiones Especiales (Alergias, de celebraciones, cumpleaños, etc.)",
        btnSubmit: "Reserva Ahora",
        submitting: "Procesando reserva...",
        errorName: "El nombre es obligatorio",
        errorEmail: "Introduce un correo válido",
        errorPhone: "Introduce un número válido (+34 XXX XXX XXX)",
        errorGuests: "Los invitados deben ser entre 1 y 20 personas",
        errorDate: "Selecciona una fecha futura",
        errorTime: "Selecciona una hora entre las 12:00 y las 23:00",
      },
      modal: {
        title: "¡Reserva Confirmada!",
        greeting: "¡Muchas gracias, {name}!",
        body: "Tu mesa ha sido reservada con éxito en MOS-DOLLI. Estaremos encantados de ofrecerte una experiencia senegalesa inolvidable.",
        code: "Código de Reserva",
        details: "Detalles de la Reserva",
        guests: "Personas",
        date: "Fecha",
        time: "Hora",
        status: "Estado",
        statusConfirmed: "Confirmado",
        note: "Te hemos enviado un correo de confirmación. Si necesitas modificar o cancelar, contáctanos con al menos 2 horas de antelación.",
        btnClose: "¡Excelente, allí estaré!",
      }
    },
    contact: {
      badge: "CÓMO LLEGAR",
      title: "Visita MOS-DOLLI",
      addressLabel: "Nuestra Dirección",
      addressText: "Paseo de San José, Vegueta, 35015 Las Palmas de Gran Canaria, España",
      phoneLabel: "Reservas por Teléfono / Info",
      phoneText: "+34 624 965 510",
      emailLabel: "Envíanos un Email",
      emailText: "fatimesy106@gmail.com",
      hoursLabel: "Horario de Apertura",
      hoursText: "Lunes – Domingo: 12:00 – 23:00",
      kitchenNote: "La cocina cierra a las 22:30 todos los días.",
      newsletterTitle: "Únete a la Familia",
      newsletterPlaceholder: "Introduce tu correo electrónico",
      newsletterBtn: "Suscribirse",
      newsletterSuccess: "¡Bienvenido a la familia! Revisa tu correo para recibir un 10% de descuento de bienvenida."
    },
    ordering: {
      title: "MOS-DOLLI Online",
      subtitle: "Pide tus platos senegaleses tradicionales para recoger o a domicilio",
      cartTitle: "Tu Selección",
      emptyCart: "Tu pedido está vacío. ¡Explora nuestra carta y añade tus platos favoritos!",
      subtotal: "Subtotal",
      delivery: "Envío",
      deliveryFree: "Gratis",
      total: "Total",
      checkoutBtn: "Confirmar Pedido",
      deliveryOption: "Entrega a Domicilio",
      pickupOption: "Recoger en Restaurante",
      orderSuccess: "¡Pedido Recibido! Estamos preparando tu deliciosa comida senegalesa. Tiempo estimado: 35-45 minutos.",
      orderBtnClose: "¡Estupendo, gracias!",
    },
    instagram: {
      badge: "SÍGUENOS",
      title: "En Instagram @mosdolli",
      likes: "me gusta",
      comments: "comentarios",
    }
  },
};

// Signature dishes raw data with Unsplash high quality food photos
export const signatureDishes: MenuItem[] = [
  {
    id: "dish1",
    nameEn: "Thieboudienne (Fish & Rice)",
    nameEs: "Thieboudienne (Pescado y Arroz)",
    descriptionEn: "The national dish of Senegal. Fragrant broken rice simmered in a rich tomato, herb, and spice broth, served with fresh fish, cassava, carrots, eggplant, and cabbage.",
    descriptionEs: "El plato nacional de Senegal. Arroz partido aromático cocinado en un rico caldo de tomate, hierbas y especias, servido con pescado fresco, yuca, zanahoria, berenjena y col.",
    price: 17.50,
    category: "mains",
    image: "/assets/images/regenerated_image_1782663993868.png",
    rating: 4.9,
    tagsEn: ["National Dish", "Senegalese", "Top Seller"],
    tagsEs: ["Plato Nacional", "Senegalés", "Más Vendido"]
  },
  {
    id: "dish2",
    nameEn: "Mafe (Peanut Stew)",
    nameEs: "Mafe (Estofado de Cacahuete)",
    descriptionEn: "A rich, creamy, and velvety West African peanut stew cooked with tender chunks of beef, sweet potatoes, and carrots, served with steamed white rice.",
    descriptionEs: "Un estofado rico, cremoso y aterciopelado de crema de cacahuete de África Occidental, cocinado con trozos tiernos de ternera, batatas y zanahorias, servido con arroz blanco.",
    price: 16.00,
    category: "mains",
    image: "/assets/images/mafe_stew_hero_1782734070520.jpg",
    rating: 4.8,
    tagsEn: ["Peanut Stew", "Comfort Food"],
    tagsEs: ["Guiso de Cacahuete", "Poco Picante"]
  },
  {
    id: "dish3",
    nameEn: "Yassa Poulet (Lemon Chicken)",
    nameEs: "Yassa Poulet (Pollo al Limón)",
    descriptionEn: "Tender grilled chicken marinated in a tangy blend of fresh lemon juice, garlic, mustard, and a mountain of sweet caramelized onions, served with white rice.",
    descriptionEs: "Tierno pollo marinado en una mezcla ácida de jugo de limón fresco, ajo, mostaza y una abundancia de cebollas caramelizadas, servido con arroz blanco.",
    price: 15.50,
    category: "mains",
    image: "/assets/images/yassa_poulet_hero_1782301879103.jpg",
    rating: 4.9,
    tagsEn: ["Tangy & Savory", "Popular"],
    tagsEs: ["Ácido y Sabroso", "Popular"]
  },
  {
    id: "dish4",
    nameEn: "Couscous Tamkarit (Thiéré Tamkarit)",
    nameEs: "Cuscús Tamkarit (Thiéré)",
    descriptionEn: "A traditional celebratory Senegalese millet couscous (Thiéré) steamed with deep-rooted love, served with a rich, aromatic sauce of tender beef, sweet potato, cassava, cabbage, and sweet raisins.",
    descriptionEs: "El tradicional cuscús de mijo senegalés (Thiéré) cocinado al vapor, servido con una salsa ricamente condimentada con tierna carne de ternera, batata, yuca, col y pasas dulce, típico de la festividad de Tamkharit.",
    price: 16.50,
    category: "mains",
    image: "/assets/images/regenerated_image_1782649008739.jpg",
    rating: 4.8,
    tagsEn: ["Tamkarit Festive", "Traditional Millet"],
    tagsEs: ["Festivo Tamkarit", "Mijo Tradicional"]
  },
  {
    id: "dish9",
    nameEn: "Thiakry (Sweet Millet & Yogurt Dessert)",
    nameEs: "Thiakry (Postre Dulce de Mijo y Yogur)",
    descriptionEn: "A famous, rich, and creamy traditional Senegalese dessert made of sweet steamed millet couscous (thiakry) mixed with a velvety, sweetened vanilla-infused yogurt and cream blend, served cold.",
    descriptionEs: "El postre tradicional senegalés más famoso, rico y cremoso, elaborado con cuscús de mijo dulce al vapor mezclado con un yogur aterciopelado endulzado con vainilla, servido bien frío.",
    price: 5.50,
    category: "desserts",
    image: "/assets/images/thiakry_dessert_1782304121792.jpg",
    rating: 5.0,
    tagsEn: ["Traditional Dessert", "Sweet & Creamy"],
    tagsEs: ["Postre Tradicional", "Dulce y Cremoso"]
  },
  {
    id: "dish5",
    nameEn: "Bissap (Hibiscus Drink)",
    nameEs: "Bissap (Zumo de Jamaica)",
    descriptionEn: "Senegal's beloved national beverage. A refreshing sweet red tea brewed from dried hibiscus flowers, infused with fresh mint and a touch of orange blossom.",
    descriptionEs: "La bebida nacional de Senegal. Un refrescante té rojo dulce elaborado a partir de flores de hibisco secas, infusionado con menta fresca y un toque de flor de azahar.",
    price: 3.50,
    category: "drinks",
    image: "/assets/images/bissap_drink_hero_1782311596810.jpg",
    rating: 5.0,
    tagsEn: ["Hibiscus", "Very Refreshing"],
    tagsEs: ["Hibisco", "Muy Refrescante"]
  },
  {
    id: "dish6",
    nameEn: "Ditakh Juice",
    nameEs: "Zumo de Ditakh",
    descriptionEn: "An exotic, nutrient-rich refreshing green juice made from the pulp of the wild Ditakh fruit, known for its unique sweet-and-sour flavor.",
    descriptionEs: "Un exótico zumo verde rico en nutrientes hecho de la pulpa de la fruta silvestre Ditakh, conocido por su inconfundible sabor agridulce.",
    price: 4.00,
    category: "drinks",
    image: "/assets/images/ditakh_juice_hero_1782311631507.jpg",
    rating: 4.8,
    tagsEn: ["Wild Fruit", "Exotic"],
    tagsEs: ["Fruta Silvestre", "Exótico"]
  },
  {
    id: "dish10",
    nameEn: "Jus de Bouye (Baobab Juice)",
    nameEs: "Zumo de Bouye (Zumo de Baobab)",
    descriptionEn: "A thick, velvety, and naturally sweet traditional juice made from the fruit of the majestic African Baobab tree, rich in Vitamin C and calcium with a hint of vanilla.",
    descriptionEs: "Un zumo tradicional espeso, aterciopelado y naturalmente dulce elaborado a partir del fruto del majestuoso árbol Baobab africano, rico en Vitamina C y calcio con un toque de vainilla.",
    price: 4.00,
    category: "drinks",
    image: "/assets/images/bouye_juice_hero_1782311579153.jpg",
    rating: 5.0,
    tagsEn: ["Baobab Fruit", "Creamy & Sweet"],
    tagsEs: ["Fruto de Baobab", "Cremoso y Dulce"]
  },
  {
    id: "dish11",
    nameEn: "Senegalese Drinks Sampler",
    nameEs: "Tabla de Bebidas Senegalesas",
    descriptionEn: "A spectacular tasting board featuring our four signature house-crafted artisanal drinks: vibrant red Bissap, creamy beige Bouye, tangy yellow ginger juice, and exotic brown tamarind juice.",
    descriptionEs: "Una espectacular tabla de degustación que incluye nuestras cuatro emblemáticas bebidas artesanales: vibrante Bissap rojo, cremoso Bouye beige, picante zumo de jengibre y exótico zumo de tamarindo.",
    price: 6.50,
    category: "drinks",
    image: "/assets/images/drinks_sampler_hero_1782311613885.jpg",
    rating: 4.9,
    tagsEn: ["Tasting Board", "Highly Recommended"],
    tagsEs: ["Tabla Degustación", "Muy Recomendado"]
  },
  {
    id: "dish7",
    nameEn: "Jus Gingembre (Ginger Juice)",
    nameEs: "Zumo de Jengibre (Jus Gingembre)",
    descriptionEn: "A spicy, sweet, and highly energizing fresh ginger juice sweetened with pineapple and a hint of lime.",
    descriptionEs: "Un zumo de jengibre fresco picante, dulce y muy energizante, endulzado con piña y un toque de lima.",
    price: 3.50,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&q=80",
    rating: 4.9,
    tagsEn: ["Spicy & Fresh", "Energizing"],
    tagsEs: ["Picante y Fresco", "Energizante"]
  },
  {
    id: "dish8",
    nameEn: "Café Touba (Spiced Coffee)",
    nameEs: "Café Touba (Café Especiado)",
    descriptionEn: "Traditional Senegalese coffee spiced with Selim pepper grains (Djar) and aromatic cloves, roasted and brewed sweet.",
    descriptionEs: "Café tradicional senegalés especiado con granos de pimienta de Selim (Djar) y clavo aromático, tostado y servido dulce.",
    price: 3.00,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&q=80",
    rating: 4.9,
    tagsEn: ["Spiced", "Traditional"],
    tagsEs: ["Especiado", "Tradicional"]
  }
];

export const mockTestimonials: Testimonial[] = [
  {
    id: "test1",
    name: "Alejandro Pérez",
    roleEn: "Local Guide - Las Palmas",
    roleEs: "Guía Local - Las Palmas",
    rating: 5,
    commentEn: "The best Senegalese food in Gran Canaria. The atmosphere and hospitality are amazing, and the Thieboudienne is incredibly delicious!",
    commentEs: "La mejor comida senegalesa de Gran Canaria. El ambiente y la hospitalidad son increíbles, ¡y el Thieboudienne está espectacular!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
  },
  {
    id: "test2",
    name: "Fatoumata Diallo",
    roleEn: "Diner from Senegal",
    roleEs: "Comensal de Senegal",
    rating: 5,
    commentEn: "Authentic flavors that instantly reminded me of my mother's home cooking in Dakar. The Chicken Yassa is highly recommended!",
    commentEs: "Sabores auténticos que inmediatamente me recordaron a la cocina de mi madre en Dakar. ¡El Chicken Yassa es totalmente recomendado!",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&q=80"
  },
  {
    id: "test3",
    name: "Sarah & Mark Jansen",
    roleEn: "Tourists from Netherlands",
    roleEs: "Turistas de Países Bajos",
    rating: 5,
    commentEn: "An absolutely unique culinary journey in Las Palmas. The interior decoration with African masks and the background music create an authentic feeling.",
    commentEs: "Un viaje culinario absolutamente único en Las Palmas. La decoración con máscaras africanas y la música de fondo crean una sensación de total autenticidad.",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&q=80"
  },
  {
    id: "test4",
    name: "Elena Santana",
    roleEn: "Gran Canaria Resident",
    roleEs: "Residente de Gran Canaria",
    rating: 5,
    commentEn: "We celebrated my birthday here. The hospitality of the team was outstanding, and they even sang traditional Senegalese songs for us. We loved the Thieboudienne and Mafe!",
    commentEs: "Celebramos mi cumpleaños aquí. La hospitalidad del equipo fue increíble, incluso nos cantaron canciones tradicionales senegalesas. ¡Nos encantó el Thieboudienne y el Mafe!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80"
  }
];

export const mockGallery: GalleryItem[] = [
  {
    id: "gal1",
    image: "/assets/images/regenerated_image_1782663993868.png",
    titleEn: "Fresh Thieboudienne National Dish",
    titleEs: "Plato de Thieboudienne Fresco",
    category: "food"
  },
  {
    id: "gal2",
    image: "/assets/images/yassa_poulet_hero_1782301879103.jpg",
    titleEn: "Chicken Yassa with Caramelized Onions",
    titleEs: "Pollo Yassa con Cebolla Caramelizada",
    category: "food"
  },
  {
    id: "gal3",
    image: "/assets/images/mafe_stew_hero_1782734070520.jpg",
    titleEn: "Mafe Traditional Peanut Stew",
    titleEs: "Estofado de Cacahuete Mafe",
    category: "food"
  },
  {
    id: "gal4",
    image: "/assets/images/ditakh_juice_hero_1782311631507.jpg",
    titleEn: "Ditakh Traditional Exotic Juice",
    titleEs: "Zumo Exótico Tradicional de Ditakh",
    category: "food"
  },
  {
    id: "gal5",
    image: "/assets/images/drinks_sampler_hero_1782311613885.jpg",
    titleEn: "Artisanal Drinks Tasting Board",
    titleEs: "Tabla Degustación de Bebidas Artesanales",
    category: "food"
  },
  {
    id: "gal6",
    image: "/assets/images/bissap_drink_hero_1782311596810.jpg",
    titleEn: "Bissap Sweet Hibiscus Drink",
    titleEs: "Bissap Dulce de Flor de Jamaica",
    category: "food"
  },
  {
    id: "gal7",
    image: "/assets/images/bouye_juice_hero_1782311579153.jpg",
    titleEn: "Sweet Bouye Baobab Juice",
    titleEs: "Zumo Dulce de Bouye Baobab",
    category: "food"
  }
];

export const mockInstagramPosts: InstagramPost[] = [
  {
    id: "ig1",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80",
    likes: 124,
    comments: 12,
    captionEn: "Spicing up your Tuesday with our signature Thieboudienne! 🔥 Have you booked your table yet? Link in bio.",
    captionEs: "¡Dando sabor a tu martes con nuestro Thieboudienne insignia! 🔥 ¿Ya reservaste tu mesa? Enlace en bío."
  },
  {
    id: "ig2",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&q=80",
    likes: 245,
    comments: 18,
    captionEn: "Spreading warm hospitality and rich culture every single night in Las Palmas. We love our guests! 💛",
    captionEs: "Ofreciendo una cálida hospitalidad y una rica cultura cada noche en Las Palmas. ¡Amamos a nuestros clientes! 💛"
  },
  {
    id: "ig3",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&q=80",
    likes: 189,
    comments: 8,
    captionEn: "Traditional African masks decorate our warm dining hall. Come experience the true atmosphere! 🎭",
    captionEs: "Máscaras tradicionales africanas decoran nuestro cálido comedor. ¡Ven a vivir la auténtica atmósfera! 🎭"
  },
  {
    id: "ig4",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80",
    likes: 312,
    comments: 24,
    captionEn: "Spiced Café Touba freshly brewed with Selim pepper and cloves. Warm and deeply aromatic! ☕",
    captionEs: "Café Touba especiado recién preparado con pimienta de Selim y clavo. ¡Cálido y aromático! ☕"
  }
];
