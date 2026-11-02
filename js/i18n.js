/**
 * Golden Roast - Internationalization Engine (i18n)
 * Version: 2.1.0
 * Default Language: Spanish ('es')
 * Secondary Language: English ('en')
 * Floating Fluent/Apple language selector with country flags.
 */

const I18N_DICTIONARY = {
  es: {
    // Navigation & Global
    'nav.home': 'Inicio',
    'nav.shop': 'Tienda',
    'nav.team': 'Equipo',
    'nav.about': 'Sobre Nosotros',
    'nav.project': 'El Proyecto',
    'nav.contact': 'Contacto',
    'nav.account': 'Mi Cuenta',
    'nav.cart': 'Bolsa',
    'nav.announcement': 'Envío gratis en Comayagua en compras mayores a L 300 • Cosmética Natural',
    'nav.tag_badge': 'Golden Roast',
    'brand.slogan': 'The Golden touch of nature',

    // Hero Section
    'hero.badge_nature': '✦ 100% Inspirado en la Naturaleza',
    'hero.badge_sub': 'Cosmética Artesanal de Alta Pureza',
    'hero.badge_edition': 'Fórmula Botánica Prototipo · Comayagua, Honduras',
    'hero.title_pre': 'El poder renovador del',
    'hero.title_coffee': 'Café',
    'hero.title_and': 'y la suavidad pura de la',
    'hero.title_honey': 'Miel',
    'hero.desc': 'Fusión botánica de dos ingredientes extraordinarios en una rutina sinérgica de cuidado facial y corporal: exfoliación mecánica suave seguida de nutrición dérmica profunda.',
    'hero.cta_shop': 'Descubrir Productos',
    'hero.cta_project': 'Conocer el Proyecto',
    'hero.stat_prototypes': 'Fórmulas Prototipo',
    'hero.stat_natural': 'Ingredientes Puros',
    'hero.stat_team': 'Integrantes Emprendedores',
    'hero.pill_routine': 'Exfoliación + Hidratación',
    'hero.pill_artisan': 'Elaboración Artesanal',

    // Trust Bar
    'trust.ingredients.title': 'Materias Primas Nobles',
    'trust.ingredients.desc': 'Café de altura seleccionado, miel pura de abeja, gel de aloe vera y aceite de coco virgen.',
    'trust.softness.title': 'Suavidad Inmediata',
    'trust.softness.desc': 'Textura granulada calibrada que renueva la piel sin agredir su barrera protectora.',
    'trust.synergy.title': 'Rutina en Dos Pasos',
    'trust.synergy.desc': 'Diseñados en secuencia perfecta: primero limpiar y renovar, luego nutrir y sellar.',
    'trust.origin.title': 'Origen & Compromiso',
    'trust.origin.desc': 'Iniciativa nacida con rigor de formulación, responsabilidad y transparencia.',

    // Shop & Products
    // Home Ingredients Showcase
    'home.ing_coffee_title': 'Café Tostado',
    'home.ing_coffee_desc': 'Partículas granuladas que ejercen una exfoliación mecánica suave y estimulan la microcirculación cutánea.',
    'home.ing_honey_title': 'Miel Pura de Abeja',
    'home.ing_honey_desc': 'Humectante supremo con enzimas naturales que fijan el agua en la epidermis y aportan un brillo saludable.',
    'home.ing_aloe_title': 'Gel de Aloe Vera',
    'home.ing_aloe_desc': 'Fase acuosa refrescante que calma irritaciones, hidrata en profundidad y acondiciona los tejidos.',
    'home.ing_coconut_title': 'Aceite de Coco & Glicerina',
    'home.ing_coconut_desc': 'Emolientes lipídicos que sellan la hidratación cutánea y devuelven una elasticidad aterciopelada.',

    'shop.tag': 'Colección Esencial',
    'shop.title': 'Nuestros Productos de Cuidado Personal',
    'shop.subtitle': 'Formulaciones botánicas creadas para ofrecer una experiencia sensorial agradable y una piel visiblemente tersa.',
    'shop.filter_all': 'Todos los productos',
    'shop.filter_scrubs': 'Exfoliantes',
    'shop.filter_moisturizers': 'Hidratantes',
    'shop.filter_bundles': 'Packs de Rutina',
    'btn.add_to_cart': 'Añadir',
    'btn.view_details': 'Detalles',
    'btn.add_bundle': 'Añadir Set',
    'product.step1': 'Paso 1: Renueva',
    'product.step2': 'Paso 2: Nutre',
    'product.recommended': '⭐ Rutina Completa',

    // Products Data
    'prod.scrub.name': 'Exfoliante de Café',
    'prod.scrub.cat': 'Exfoliación Mecánica',
    'prod.scrub.summary': 'Gránulos de café tostado y azúcar que desprenden con delicadeza las células superficiales, mientras el aceite de coco y la miel aportan emoliencia.',
    'prod.scrub.ingredients_label': 'Ingredientes clave: Café tostado molido, azúcar, miel pura, aceite de coco virgen.',
    'prod.scrub.price': 'L 180.00',
    'prod.scrub.price_usd': '(aprox. $7.50 USD)',

    'prod.cream.name': 'Crema Hidratante de Miel',
    'prod.cream.cat': 'Hidratación & Nutrición',
    'prod.cream.summary': 'Crema humectante que combina miel de abeja pura, gel de aloe vera, glicerina vegetal y aceite de coco para retener la humedad y brindar elasticidad.',
    'prod.cream.ingredients_label': 'Ingredientes clave: 2 cdas miel pura, 4 cdas gel aloe vera, glicerina y coco.',
    'prod.cream.price': 'L 200.00',
    'prod.cream.price_usd': '(aprox. $8.50 USD)',

    'prod.bundle.name': 'Pack Golden Dúo',
    'prod.bundle.cat': 'Rutina Completa en 2 Pasos',
    'prod.bundle.summary': 'La experiencia integral Golden Roast: Exfoliante de Café (200g) + Hidratante de Miel (150ml). Ahorra L 30.00 al adquirir ambos.',
    'prod.bundle.ingredients_label': 'Beneficio: Sinergia de exfoliación previa e hidratación nutritiva.',
    'prod.bundle.price': 'L 350.00',
    'prod.bundle.original_price': 'L 380.00',

    // Routine Section
    'routine.tag': 'Sinergia Botánica',
    'routine.title': '¿Cómo Funciona la Rutina Golden Roast?',
    'routine.subtitle': 'El cuidado eficaz de la piel no requiere complejidad innecesaria. Nuestra propuesta se fundamenta en dos pasos armónicos.',
    'routine.step1.num': '1',
    'routine.step1.badge': 'Paso 1: Exfoliación & Renovación',
    'routine.step1.title': 'Renueva con Partículas de Café',
    'routine.step1.desc': 'Aplica el exfoliante sobre la piel húmeda con suaves movimientos circulares. Las partículas de café y azúcar remueven las células muertas superficiales mediante acción mecánica.',
    'routine.step1.p1': 'Fricción controlada que estimula la microcirculación superficial cutánea.',
    'routine.step1.p2': 'El aceite de coco y la miel pura suavizan y previenen la resequedad posterior.',

    'routine.step2.num': '2',
    'routine.step2.badge': 'Paso 2: Hidratación & Sellado',
    'routine.step2.title': 'Nutre con Miel y Aloe Vera',
    'routine.step2.desc': 'Con la piel limpia y receptiva tras la exfoliación, aplica la crema hidratante. La miel de abeja pura y la glicerina vegetal atraen agua mientras el aloe vera calma y refresca.',
    'routine.step2.p1': 'Retención sostenida del agua en las capas superficiales de la piel.',
    'routine.step2.p2': 'Tacto aterciopelado y suave sin dejar sensación grasosa o pegajosa.',

    // Value Proposition
    'value.tag': 'Nuestros Fundamentos',
    'value.title': 'Los Cuatro Pilares de Golden Roast',
    'value.subtitle': 'Una propuesta construida con dedicación estética, rigor de formulación y visión emprendedora.',
    'value.p1.title': 'Identidad de Marca',
    'value.p1.desc': 'Nombre y logotipo inspirados en los tonos dorados de la miel y tostados del café, transmitiendo calidez, honestidad y bienestar.',
    'value.p2.title': 'Productos Complementarios',
    'value.p2.desc': 'Dos formulaciones ideadas para trabajar en conjunto: la exfoliación previa deja la piel receptiva para absorber la hidratación.',
    'value.p3.title': 'Presentación Cuidada',
    'value.p3.desc': 'Envases de vidrio ámbar y etiquetas con diseño armónico que reflejan el valor artesanal del producto.',
    'value.p4.title': 'Espíritu Emprendedor',
    'value.p4.desc': 'Una plataforma de aprendizaje práctico para explorar formulaciones seguras, diseño de packaging y potencial comercial.',

    // Team
    'team.tag': 'El Equipo Emprendedor',
    'team.title': 'Las Personas Detrás de Golden Roast',
    'team.subtitle': 'Equipo multidisciplinario que concibió la idea, diseñó la marca y formuló los prototipos.',
    'team.member1': 'Joselin Cáceres',
    'team.role1': 'Formulación & Ingredientes',
    'team.member2': 'Sofia López',
    'team.role2': 'Diseño & Identidad de Marca',
    'team.member3': 'Ángel Guerra',
    'team.role3': 'Estrategia Comercial & Costos',
    'team.member4': 'Génesis López',
    'team.role4': 'Calidad & Seguridad del Consumidor',

    // Cart Drawer & Bag
    'cart.drawer.title': 'Tu Bolsa de Compras',
    'cart.drawer.empty': 'Tu bolsa está vacía',
    'cart.drawer.empty_desc': 'Descubre el toque dorado de la naturaleza con nuestros productos de café y miel.',
    'cart.drawer.subtotal': 'Subtotal estimado:',
    'cart.drawer.btn_checkout': 'Finalizar Pedido',
    'cart.drawer.btn_view_cart': 'Ver Bolsa Completa',
    'cart.shipping.congrats': '¡Felicidades! Calificas para Envío Gratis en Comayagua.',
    'cart.shipping.progress_pre': 'Agrega',
    'cart.shipping.progress_post': 'más para Envío Gratis',

    // Language Selector UI
    'lang.switcher_label': 'Idioma / Language',
    'lang.current': 'Español',
    'lang.select_title': 'Seleccionar Idioma / Choose Language',
    'lang.es_name': 'Español (Honduras)',
    'lang.en_name': 'English (United States)',
    'lang.close': 'Cerrar',
    // Auth & Account
    'auth.title': 'Mi Cuenta Golden Roast',
    'auth.desc': 'Accede a tu cuenta para gestionar tus pedidos y envíos en Comayagua.',
    'auth.tab_login': 'Iniciar Sesión',
    'auth.tab_register': 'Crear Cuenta',
    'auth.label_email': 'Correo Electrónico',
    'auth.label_password': 'Contraseña',
    'auth.help': 'Ayuda',
    'auth.btn_login': 'Ingresar a mi Cuenta',
    'auth.demo_access': 'Acceso Rápido Demo (Elena Morales)',
    'auth.label_name': 'Nombre Completo',
    'auth.label_phone': 'Teléfono / WhatsApp',
    'auth.label_password_reg': 'Contraseña (mín. 6 caracteres)',
    'auth.btn_register': 'Crear Cuenta de Cliente',
    'account.personal_panel': 'Panel Personal',
    'account.hello': 'Hola',
    'account.manage_desc': 'Gestiona tus datos de entrega en Comayagua y revisa tus compras.',
    'account.logout': 'Cerrar Sesión',
    'account.phone': 'Teléfono',
    'account.zone': 'Zona Principal',
    'account.orders_title': 'Historial de Pedidos Registrados',

    // Contact & FAQ
    'contact.tag': 'Estamos para Ayudarte',
    'contact.title': 'Contacto & Preguntas Frecuentes',
    'contact.subtitle': '¿Tienes consultas sobre nuestras fórmulas botánicas, puntos de entrega en Comayagua o la iniciativa de emprendimiento?',
    'contact.form_title': 'Envíanos un Mensaje',
    'contact.name_label': 'Nombre Completo *',
    'contact.name_placeholder': 'Tu Nombre',
    'contact.email_label': 'Correo Electrónico *',
    'contact.email_placeholder': 'tu@correo.com',
    'contact.subject_label': 'Asunto',
    'contact.subject_orders': 'Consulta sobre Pedidos y Entregas en Comayagua',
    'contact.subject_products': 'Dudas sobre Ingredientes y Formulaciones',
    'contact.subject_academic': 'Contacto Institucional / Académico',
    'contact.subject_other': 'Otro Asunto',
    'contact.message_label': 'Mensaje *',
    'contact.message_placeholder': 'Escribe aquí tu consulta o comentario...',
    'contact.btn_send': 'Enviar Mensaje',
    'contact.feedback': '✓ ¡Gracias! Tu mensaje ha sido recibido. El equipo de Golden Roast se pondrá en contacto contigo a la brevedad.',
    'contact.location_label': 'Ubicación:',
    'contact.location_val': 'Comayagua, Honduras.',
    'contact.hours_label': 'Horario de Atención:',
    'contact.hours_val': 'Lunes a Sábado, 8:00 AM – 5:00 PM.',
    'contact.team_label': 'Integrantes:',
    'contact.faq_title': 'Preguntas Frecuentes',
    'contact.faq1_q': '¿Cómo se realizan las entregas en Comayagua?',
    'contact.faq1_a': 'Coordinamos entregas directas en la zona central de Comayagua (Plaza Central, Catedral, Boulevard Roberto Romero Larios y campus universitario). En compras mayores a L 300.00 la entrega es totalmente gratuita; para montos menores, el costo de entrega es de L 40.00.',
    'contact.faq2_q': '¿Para qué tipo de piel son adecuados los productos?',
    'contact.faq2_a': 'Nuestros productos están formulados con ingredientes botánicos como café molido, miel pura y aloe vera. Son aptos para la mayoría de tipos de piel (normal a mixta o seca). En pieles sensibles recomendamos realizar una prueba preliminar de parche en el antebrazo.',
    'contact.faq3_q': '¿Por qué no incluyen bicarbonato de sodio en el exfoliante?',
    'contact.faq3_a': 'El bicarbonato de sodio posee un pH alcalino de aproximadamente 9, mientras que la piel humana tiene un pH ácido fisiológico entre 4.7 y 5.5. Para proteger la barrera cutánea contra la deshidratación y preservar la flora bacteriana saludable, optimizamos la fórmula basándonos en café molido fino, azúcar y aceite de coco virgen.',
    'contact.faq4_q': '¿Cuál es el beneficio de adquirir el Pack Golden Dúo?',
    'contact.faq4_a': 'El pack combina el Exfoliante de Café (Paso 1: Renovar) y la Crema Hidratante de Miel (Paso 2: Nutrir), permitiendo completar la rutina ideal de cuidado con un ahorro de L 30.00 frente al costo individual (L 350.00 en vez de L 380.00).',
    'contact.faq5_q': '¿Cuáles son los métodos de pago aceptados?',
    'contact.faq5_a': 'Aceptamos pago contra entrega en efectivo al recibir tu pedido en Comayagua, así como transferencias bancarias locales (Banco Atlántida, Ficohsa, BAC Credomatic) y pagos digitales seguros vía WhatsApp.',

    // About Us
    'about.tag': 'Nuestra Identidad',
    'about.title': 'Sobre Nosotros & Filosofía Botánica',
    'about.subtitle': 'Conoce la historia, los principios de formulación natural y el equipo multidisciplinario detrás de Golden Roast.',
    'about.mission_title': 'Misión',
    'about.mission_desc': 'Desarrollar y ofrecer productos de cuidado personal botánicos, efectivos y accesibles a base de café tostado y miel pura de abeja, promoviendo hábitos saludables de cuidado de la piel mediante formulaciones limpias, artesanales y responsables.',
    'about.vision_title': 'Visión',
    'about.vision_desc': 'Convertirnos en una marca de cuidado personal reconocida y confiable, distinguida por productos atractivos y accesibles inspirados en ingredientes naturales, diseñada para personas interesadas en cuidar y mantener la apariencia saludable de su piel.',

    // Cart Page
    'cart.tag': 'Tu Carrito',
    'cart.title': 'Bolsa de Compras',
    'cart.subtitle': 'Revisa los artículos seleccionados antes de confirmar tus datos de entrega en Comayagua.',
    'cart.th_product': 'Producto',
    'cart.th_price': 'Precio',
    'cart.th_quantity': 'Cantidad',
    'cart.th_subtotal': 'Subtotal',
    'cart.empty_title': 'Tu bolsa está vacía',
    'cart.empty_desc': 'Aún no has agregado productos botánicos a tu bolsa de compras.',
    'cart.explore_btn': 'Explorar Productos',
    'cart.summary_title': 'Resumen del Pedido',
    'cart.subtotal': 'Subtotal:',
    'cart.delivery': 'Entrega en Comayagua:',
    'cart.total': 'Total a Pagar:',
    'cart.checkout_btn': 'Proceder al Pago',
    'cart.continue_shopping': 'Continuar Comprando',

    // Checkout Page
    'checkout.tag': 'Confirmación de Pedido',
    'checkout.title': 'Finalizar Pedido',
    'checkout.subtitle': 'Completa tus datos de contacto y entrega para recibir tus productos botánicos.',
    'checkout.customer_info_title': 'Datos de Entrega en Comayagua',
    'checkout.name_label': 'Nombre y Apellido *',
    'checkout.phone_label': 'Teléfono / WhatsApp *',
    'checkout.email_label': 'Correo Electrónico *',
    'checkout.delivery_label': 'Punto o Zona de Entrega *',
    'checkout.address_label': 'Dirección o Referencia Específica *',
    'checkout.notes_label': 'Notas Adicionales (Opcional)',
    'checkout.payment_title': 'Método de Pago',
    'checkout.place_order_btn': 'Confirmar Pedido por WhatsApp',
    'checkout.summary_title': 'Resumen de Compra',
    'checkout.success_title': '¡Pedido Registrado con Éxito!',

    // Footer & Socials (ES)
    'footer.brand_desc': 'Cosmética botánica artesanal inspirada en café tostado y miel pura de abeja. Iniciativa universitaria desarrollada en el Centro Regional UNAH-CURC en Comayagua.',
    'footer.nav_title': 'Navegación',
    'footer.products_title': 'Productos',
    'footer.contact_title': 'Contacto & Envíos',
    'footer.team_label': 'Integrantes:',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.shipping_policy': 'Políticas y Envíos',
    'footer.privacy': 'Aviso Legal',
    'footer.newsletter_placeholder': 'Tu correo electrónico',
    'footer.newsletter_btn': 'Unirse',

  },

  en: {
    // Navigation & Global
    'nav.home': 'Home',
    'nav.shop': 'Shop',
    'nav.team': 'Founders',
    'nav.about': 'About Us',
    'nav.project': 'The Project',
    'nav.contact': 'Contact',
    'nav.account': 'My Account',
    'nav.cart': 'Bag',
    'nav.announcement': 'Free delivery in Comayagua on orders over L 300 • Natural Skincare',
    'nav.tag_badge': 'Golden Roast',
    'brand.slogan': 'The Golden touch of nature',

    // Hero Section
    'hero.badge_nature': '✦ 100% Inspired by Nature',
    'hero.badge_sub': 'High-Purity Artisan Skincare',
    'hero.badge_edition': 'Prototype Botanical Formula · Comayagua, Honduras',
    'hero.title_pre': 'The renewing power of',
    'hero.title_coffee': 'Coffee',
    'hero.title_and': 'and the pure gentleness of',
    'hero.title_honey': 'Honey',
    'hero.desc': 'A botanical fusion of two extraordinary ingredients in a synergistic face and body routine: gentle mechanical exfoliation followed by deep dermal replenishment.',
    'hero.cta_shop': 'Explore Products',
    'hero.cta_project': 'Our Academic Project',
    'hero.stat_prototypes': 'Prototype Formulas',
    'hero.stat_natural': 'Pure Ingredients',
    'hero.stat_team': 'Founding Members',
    'hero.pill_routine': 'Exfoliation + Hydration',
    'hero.pill_artisan': 'Artisan Craftsmanship',

    // Trust Bar
    'trust.ingredients.title': 'Noble Raw Ingredients',
    'trust.ingredients.desc': 'Selected high-altitude coffee, pure honey, fresh aloe vera gel, and virgin coconut oil.',
    'trust.softness.title': 'Immediate Suppleness',
    'trust.softness.desc': 'Calibrated granular texture that renews skin without compromising its moisture barrier.',
    'trust.synergy.title': 'Two-Step Routine',
    'trust.synergy.desc': 'Designed in perfect sequence: first cleanse and renew, then nourish and seal.',
    'trust.origin.title': 'Origin & Commitment',
    'trust.origin.desc': 'Initiative founded on formulation rigor, responsibility, and consumer safety.',

    // Shop & Products
    // Home Ingredients Showcase
    'home.ing_coffee_title': 'Roasted Coffee',
    'home.ing_coffee_desc': 'Natural granulated coffee particles providing gentle mechanical exfoliation to renew texture and stimulate surface microcirculation.',
    'home.ing_honey_title': 'Pure Honey',
    'home.ing_honey_desc': 'Potent natural humectant that locks moisture in the epidermis, imparting softness, elasticity, and a healthy golden glow.',
    'home.ing_aloe_title': 'Aloe Vera Gel',
    'home.ing_aloe_desc': 'Refreshing botanical soothing phase that conditions tissues, soothes skin, and provides lightweight hydration.',
    'home.ing_coconut_title': 'Coconut Oil & Glycerin',
    'home.ing_coconut_desc': 'Plant lipid emollients that seal moisture, restore epidermal barrier integrity, and leave skin velvety soft.',

    'shop.tag': 'Essential Collection',
    'shop.title': 'Our Personal Care Products',
    'shop.subtitle': 'Botanical formulations created to provide a soothing sensory experience and visibly soft skin.',
    'shop.filter_all': 'All Products',
    'shop.filter_scrubs': 'Exfoliants',
    'shop.filter_moisturizers': 'Moisturizers',
    'shop.filter_bundles': 'Routine Sets',
    'btn.add_to_cart': 'Add to Bag',
    'btn.view_details': 'Details',
    'btn.add_bundle': 'Add Set',
    'product.step1': 'Step 1: Renew',
    'product.step2': 'Step 2: Nourish',
    'product.recommended': '⭐ Complete Routine',

    // Products Data
    'prod.scrub.name': 'Coffee Exfoliant',
    'prod.scrub.cat': 'Mechanical Exfoliation',
    'prod.scrub.summary': 'Roasted coffee grounds and sugar that gently loosen surface dead cells, while coconut oil and honey nourish the skin.',
    'prod.scrub.ingredients_label': 'Key ingredients: Ground roasted coffee, sugar, pure honey, virgin coconut oil.',
    'prod.scrub.price': 'L 180.00',
    'prod.scrub.price_usd': '(approx. $7.50 USD)',

    'prod.cream.name': 'Honey Moisturizer',
    'prod.cream.cat': 'Hydration & Nutrition',
    'prod.cream.summary': 'Humectant cream blending pure honey, fresh aloe vera gel, plant glycerin, and coconut oil to retain moisture and restore suppleness.',
    'prod.cream.ingredients_label': 'Key ingredients: 2 tbsp pure honey, 4 tbsp aloe vera, glycerin & coconut.',
    'prod.cream.price': 'L 200.00',
    'prod.cream.price_usd': '(approx. $8.50 USD)',

    'prod.bundle.name': 'Golden Duo Set',
    'prod.bundle.cat': 'Complete 2-Step Routine',
    'prod.bundle.summary': 'The comprehensive Golden Roast experience: Coffee Exfoliant (200g) + Honey Moisturizer (150ml). Save L 30.00 with this bundle.',
    'prod.bundle.ingredients_label': 'Benefit: Synergy of prior exfoliation and nourishing hydration.',
    'prod.bundle.price': 'L 350.00',
    'prod.bundle.original_price': 'L 380.00',

    // Routine Section
    'routine.tag': 'Botanical Synergy',
    'routine.title': 'How the Golden Roast Routine Works',
    'routine.subtitle': 'Effective skincare does not require unnecessary complexity. Our proposal is built upon two harmonious steps.',
    'routine.step1.num': '1',
    'routine.step1.badge': 'Step 1: Exfoliation & Renewal',
    'routine.step1.title': 'Renew with Coffee Particles',
    'routine.step1.desc': 'Apply the scrub to damp skin with gentle circular motions. The coffee and sugar particles remove dead surface skin cells through mechanical action.',
    'routine.step1.p1': 'Controlled friction stimulates skin surface microcirculation.',
    'routine.step1.p2': 'Virgin coconut oil and pure honey condition and prevent post-cleanse dryness.',

    'routine.step2.num': '2',
    'routine.step2.badge': 'Step 2: Hydration & Sealing',
    'routine.step2.title': 'Nourish with Honey & Aloe Vera',
    'routine.step2.desc': 'Once skin is clean and receptive after exfoliation, apply the moisturizer. Pure honey and plant glycerin attract water while aloe vera calms and cools.',
    'routine.step2.p1': 'Sustained moisture retention in superficial skin layers.',
    'routine.step2.p2': 'Velvety, soft touch without greasy or sticky residue.',

    // Value Proposition
    'value.tag': 'Our Foundation',
    'value.title': 'The Four Pillars of Golden Roast',
    'value.subtitle': 'A proposal crafted with aesthetic care, formulation rigor, and entrepreneurial vision.',
    'value.p1.title': 'Brand Identity',
    'value.p1.desc': 'Name and logo inspired by roasted coffee shades and golden honey tones, conveying warmth, honesty, and well-being.',
    'value.p2.title': 'Complementary Products',
    'value.p2.desc': 'Two formulations designed to interact in sequence: prior exfoliation prepares the skin to absorb moisturizer nutrients.',
    'value.p3.title': 'Thoughtful Presentation',
    'value.p3.desc': 'Amber glass aesthetic and harmoniously designed labels reflecting the artisan value of the product.',
    'value.p4.title': 'Entrepreneurial Spirit',
    'value.p4.desc': 'A hands-on learning platform exploring safe cosmetic formulations, packaging design, and commercial potential.',

    // Team
    'team.tag': 'The Founding Team',
    'team.title': 'The People Behind Golden Roast',
    'team.subtitle': 'Multidisciplinary student team who conceived the concept, designed the brand, and formulated the prototypes.',
    'team.member1': 'Joselin Cáceres',
    'team.role1': 'Formulation & Ingredients',
    'team.member2': 'Sofia López',
    'team.role2': 'Brand Identity & Design',
    'team.member3': 'Ángel Guerra',
    'team.role3': 'Commercial Strategy & Viability',
    'team.member4': 'Génesis López',
    'team.role4': 'Quality & Consumer Safety',

    // Cart Drawer & Bag
    'cart.drawer.title': 'Your Shopping Bag',
    'cart.drawer.empty': 'Your bag is empty',
    'cart.drawer.empty_desc': 'Discover the golden touch of nature with our coffee and honey skincare products.',
    'cart.drawer.subtotal': 'Estimated Subtotal:',
    'cart.drawer.btn_checkout': 'Complete Order',
    'cart.drawer.btn_view_cart': 'View Full Bag',
    'cart.shipping.congrats': 'Congratulations! You qualify for Free Delivery in Comayagua.',
    'cart.shipping.progress_pre': 'Add',
    'cart.shipping.progress_post': 'more for Free Delivery',

    // Language Selector UI
    'lang.switcher_label': 'Language / Idioma',
    'lang.current': 'English',
    'lang.select_title': 'Choose Language / Seleccionar Idioma',
    'lang.es_name': 'Español (Honduras)',
    'lang.en_name': 'English (United States)',
    'lang.close': 'Close',
    // Footer & Socials
    'footer.brand_desc': 'Artisanal botanical personal-care formulations infused with roasted coffee grounds and pure raw honey. University entrepreneurial initiative from UNAH-CURC Comayagua.',
    'footer.nav_title': 'Navigation',
    'footer.products_title': 'Collection',
    'footer.contact_title': 'Contact & Dispatch',
    'footer.team_label': 'Founders:',
    'footer.rights': 'All rights reserved.',
    'footer.shipping_policy': 'Shipping & Returns',
    'footer.privacy': 'Legal Notice',
    'footer.newsletter_placeholder': 'Enter your email',
    'footer.newsletter_btn': 'Subscribe',
    // Auth & Account
    'auth.title': 'My Golden Roast Account',
    'auth.desc': 'Sign in to manage your skincare orders and campus delivery details.',
    'auth.tab_login': 'Sign In',
    'auth.tab_register': 'Create Account',
    'auth.label_email': 'Email Address',
    'auth.label_password': 'Password',
    'auth.help': 'Help',
    'auth.btn_login': 'Sign In to Account',
    'auth.demo_access': 'Quick Demo Access (Elena Morales)',
    'auth.label_name': 'Full Name',
    'auth.label_phone': 'Phone / WhatsApp',
    'auth.label_password_reg': 'Password (min. 6 characters)',
    'auth.btn_register': 'Create Client Account',
    'account.personal_panel': 'Personal Dashboard',
    'account.hello': 'Hello',
    'account.manage_desc': 'Manage your Comayagua delivery details and view order history.',
    'account.logout': 'Sign Out',
    'account.phone': 'Phone',
    'account.zone': 'Primary Zone',
    'account.orders_title': 'Registered Order History',

    // Contact & FAQ
    'contact.tag': 'Here to Help You',
    'contact.title': 'Contact & Frequently Asked Questions',
    'contact.subtitle': 'Have inquiries about our botanical formulas, Comayagua delivery points, or our academic venture?',
    'contact.form_title': 'Send Us a Message',
    'contact.name_label': 'Full Name *',
    'contact.name_placeholder': 'Your Name',
    'contact.email_label': 'Email Address *',
    'contact.email_placeholder': 'name@example.com',
    'contact.subject_label': 'Subject',
    'contact.subject_orders': 'Orders & Delivery Inquiry in Comayagua',
    'contact.subject_products': 'Ingredients & Formulations Inquiry',
    'contact.subject_academic': 'Institutional / Academic Inquiries',
    'contact.subject_other': 'Other Inquiry',
    'contact.message_label': 'Message *',
    'contact.message_placeholder': 'Write your inquiry or comment here...',
    'contact.btn_send': 'Send Message',
    'contact.feedback': '✓ Thank you! Your message has been received. The Golden Roast team will get back to you shortly.',
    'contact.location_label': 'Location:',
    'contact.location_val': 'Comayagua, Honduras.',
    'contact.hours_label': 'Service Hours:',
    'contact.hours_val': 'Monday to Saturday, 8:00 AM – 5:00 PM.',
    'contact.team_label': 'Founding Team:',
    'contact.faq_title': 'Frequently Asked Questions',
    'contact.faq1_q': 'How are deliveries handled in Comayagua?',
    'contact.faq1_a': 'We arrange direct dispatch points throughout central Comayagua (Central Plaza, Cathedral, Roberto Romero Larios Boulevard, and the university campus). Free delivery on orders over L 300.00; for smaller purchases, standard delivery is L 40.00.',
    'contact.faq2_q': 'What skin types are these botanical products suitable for?',
    'contact.faq2_a': 'Our products are formulated with gentle botanical actives including roasted coffee grounds, pure honey, and fresh aloe vera. They suit normal, combination, and dry skin types. For sensitive skin, we recommend a preliminary patch test on the inner forearm.',
    'contact.faq3_q': 'Why does the coffee exfoliant avoid baking soda?',
    'contact.faq3_a': 'Baking soda has an alkaline pH of ~9, whereas healthy human skin thrives in an acidic pH between 4.7 and 5.5. To protect your skin moisture barrier and microbiome, our gentle formula relies on finely ground coffee, organic sugar, and virgin coconut oil.',
    'contact.faq4_q': 'What is the benefit of the Golden Duo Pack?',
    'contact.faq4_a': 'The set unifies the Coffee Exfoliant (Step 1: Renew) and Honey Moisturizer (Step 2: Nourish), creating a complete synergic skincare ritual with a L 30.00 bundle savings (L 350.00 instead of L 380.00).',
    'contact.faq5_q': 'What payment methods do you accept?',
    'contact.faq5_a': 'We accept cash on delivery when receiving your order in Comayagua, local bank transfers (Banco Atlántida, Ficohsa, BAC Credomatic), and secure digital confirmations via WhatsApp.',

    // About Us
    'about.tag': 'Our Identity',
    'about.title': 'About Us & Botanical Philosophy',
    'about.subtitle': 'Discover the history, pure formulation principles, and multidisciplinary student founders behind Golden Roast.',
    'about.mission_title': 'Mission',
    'about.mission_desc': 'To formulate and provide accessible, effective botanical personal care products powered by roasted coffee and pure raw honey, inspiring radiant skin wellness through clean, handcrafted formulas.',
    'about.vision_title': 'Vision',
    'about.vision_desc': 'To establish Golden Roast as a trusted artisan skincare benchmark recognized for wholesome natural ingredients, accessible luxury, and formulation excellence.',

    // Cart Page
    'cart.tag': 'Your Cart',
    'cart.title': 'Shopping Bag',
    'cart.subtitle': 'Review your selected botanical items before confirming your delivery in Comayagua.',
    'cart.th_product': 'Product',
    'cart.th_price': 'Price',
    'cart.th_quantity': 'Quantity',
    'cart.th_subtotal': 'Subtotal',
    'cart.empty_title': 'Your bag is empty',
    'cart.empty_desc': 'You have not added any skincare products to your shopping bag yet.',
    'cart.explore_btn': 'Explore Products',
    'cart.summary_title': 'Order Summary',
    'cart.subtotal': 'Subtotal:',
    'cart.delivery': 'Comayagua Delivery:',
    'cart.total': 'Total Due:',
    'cart.checkout_btn': 'Proceed to Checkout',
    'cart.continue_shopping': 'Continue Shopping',

    // Checkout Page
    'checkout.tag': 'Order Confirmation',
    'checkout.title': 'Complete Your Order',
    'checkout.subtitle': 'Provide your contact and delivery location details to receive your botanical skincare package.',
    'checkout.customer_info_title': 'Comayagua Delivery Information',
    'checkout.name_label': 'Full Name *',
    'checkout.phone_label': 'Phone / WhatsApp *',
    'checkout.email_label': 'Email Address *',
    'checkout.delivery_label': 'Delivery Zone / Landmark *',
    'checkout.address_label': 'Exact Street Address or Reference *',
    'checkout.notes_label': 'Delivery Notes (Optional)',
    'checkout.payment_title': 'Payment Method',
    'checkout.place_order_btn': 'Confirm Order via WhatsApp',
    'checkout.summary_title': 'Order Summary',
    'checkout.success_title': 'Order Successfully Placed!',

  }
};

class I18nEngine {
  constructor() {
    // Default language is English ('en') as required by user
    const saved = window.goldenStorage ? window.goldenStorage.getLanguage() : 'en';
    this.currentLang = (saved === 'es') ? 'es' : 'en';
    this.initFloatingSwitcher();
    this.applyTranslations();
  }

  setLanguage(lang) {
    this.currentLang = (lang === 'en') ? 'en' : 'es';
    if (window.goldenStorage) {
      window.goldenStorage.setLanguage(this.currentLang);
    }
    document.documentElement.lang = this.currentLang;
    this.applyTranslations();
    this.updateSwitcherUI();
    window.dispatchEvent(new CustomEvent('golden_lang_changed', { detail: { lang: this.currentLang } }));
  }

  t(key, fallback = '') {
    const dict = I18N_DICTIONARY[this.currentLang] || I18N_DICTIONARY.es;
    if (dict && dict[key]) return dict[key];
    const esDict = I18N_DICTIONARY.es;
    if (esDict && esDict[key]) return esDict[key];
    const enDict = I18N_DICTIONARY.en;
    if (enDict && enDict[key]) return enDict[key];
    return fallback || null;
  }

  applyTranslations() {
    document.documentElement.lang = this.currentLang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = this.t(key);
      if (translation) {
        el.textContent = translation;
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const translation = this.t(key);
      if (translation) {
        el.innerHTML = translation;
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const translation = this.t(key);
      if (translation) {
        el.setAttribute('placeholder', translation);
      }
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      const translation = this.t(key);
      if (translation) {
        el.setAttribute('title', translation);
      }
    });
  }

  initFloatingSwitcher() {
    if (document.getElementById('floatingLangSwitcher')) return;

    const switcher = document.createElement('div');
    switcher.id = 'floatingLangSwitcher';
    switcher.className = 'floating-lang-switcher';
    switcher.innerHTML = `
      <button class="btn-lang-pill" id="btnLangToggle" aria-haspopup="dialog" aria-expanded="false" title="Cambiar Idioma / Change Language">
        <span class="flag-icon" id="currentFlag">${this.currentLang === 'es' ? '🇭🇳' : '🇺🇸'}</span>
        <span class="lang-text" id="currentLangLabel">${this.currentLang === 'es' ? 'Español' : 'English'}</span>
        <svg class="chevron-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      <div class="lang-popover" id="langPopover" role="dialog" aria-modal="true" aria-label="Selector de Idioma">
        <div class="lang-popover-header">
          <span class="lang-popover-title">Idioma / Language</span>
          <button class="btn-close-lang" id="btnCloseLang" aria-label="Cerrar">&times;</button>
        </div>
        <div class="lang-options">
          <button class="lang-option-btn ${this.currentLang === 'es' ? 'active' : ''}" data-choose-lang="es">
            <span class="lang-flag">🇭🇳</span>
            <div class="lang-details">
              <strong>Español</strong>
              <small>Honduras • Predeterminado</small>
            </div>
            <span class="check-icon">${this.currentLang === 'es' ? '✓' : ''}</span>
          </button>
          <button class="lang-option-btn ${this.currentLang === 'en' ? 'active' : ''}" data-choose-lang="en">
            <span class="lang-flag">🇺🇸</span>
            <div class="lang-details">
              <strong>English</strong>
              <small>United States • Secondary</small>
            </div>
            <span class="check-icon">${this.currentLang === 'en' ? '✓' : ''}</span>
          </button>
        </div>
      </div>
    `;

    const mount = document.getElementById('footerLangMount');
    if (mount) {
      switcher.classList.add('footer-docked-lang');
      mount.appendChild(switcher);
    } else {
      document.body.appendChild(switcher);
    }

    const toggleBtn = switcher.querySelector('#btnLangToggle');
    const popover = switcher.querySelector('#langPopover');
    const closeBtn = switcher.querySelector('#btnCloseLang');

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = popover.classList.toggle('active');
      toggleBtn.setAttribute('aria-expanded', isActive);
    });

    const closePopover = (e) => {
      if (e) { e.preventDefault(); e.stopPropagation(); }
      popover.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    };
    closeBtn.addEventListener('click', closePopover);
    closeBtn.addEventListener('touchend', closePopover, { passive: false });

    document.addEventListener('click', (e) => {
      if (!switcher.contains(e.target)) {
        popover.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });

    switcher.querySelectorAll('[data-choose-lang]').forEach(btn => {
      btn.addEventListener('click', () => {
        const selected = btn.getAttribute('data-choose-lang');
        this.setLanguage(selected);
        popover.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  updateSwitcherUI() {
    const flagEl = document.getElementById('currentFlag');
    const labelEl = document.getElementById('currentLangLabel');
    if (flagEl) flagEl.textContent = this.currentLang === 'es' ? '🇭🇳' : '🇺🇸';
    if (labelEl) labelEl.textContent = this.currentLang === 'es' ? 'Español' : 'English';

    document.querySelectorAll('.lang-option-btn').forEach(btn => {
      const l = btn.getAttribute('data-choose-lang');
      const isCur = (l === this.currentLang);
      btn.classList.toggle('active', isCur);
      const check = btn.querySelector('.check-icon');
      if (check) check.textContent = isCur ? '✓' : '';
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.i18n = new I18nEngine();
});
