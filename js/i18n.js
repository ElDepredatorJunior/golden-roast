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

    // Added Bilingual Support Keys (Spanish)
    'nav.home': "Inicio",
    'nav.shop': "Tienda",
    'nav.team': "Equipo",
    'nav.about': "Sobre Nosotros",
    'nav.project': "El Proyecto",
    'nav.contact': "Contacto",
    'nav.account': "Mi Cuenta",
    'nav.cart': "Bolsa",
    'nav.whatsapp': "WhatsApp",
    'nav.announcement': "Envío gratis en Comayagua en compras mayores a L 300 • Cosmética Natural",
    'brand.slogan': "The Golden touch of nature",
    'project.page_title': "El Proyecto | Golden Roast - Memoria Académica y Emprendimiento",
    'project.page_desc': "Documentación académica del proyecto Golden Roast: Universidad Politécnica de Honduras, Centro Asociado de Comayagua. Objetivos, formulación y análisis de seguridad.",
    'project.badge_univ': "Universidad Politécnica de Honduras",
    'project.hero_title': "Iniciativa de Emprendimiento Universitario: Golden Roast",
    'project.hero_desc': "Centro Asociado de Comayagua · Documentación académica sobre objetivos de investigación, desarrollo de prototipos, propuesta de valor y consideraciones técnicas.",
    'project.team_badge': "Integrantes: Joselin Cáceres, Sofia López, Ángel Guerra, Génesis López",
    'project.sec1_title': "1. Introducción al Proyecto",
    'project.sec1_p1': "Golden Roast es un proyecto de negocio desarrollado alrededor de la idea de ofrecer productos de cuidado personal inspirados en ingredientes naturales como el café y la miel. Nuestra propuesta se centra en el cuidado de la piel a través de dos productos principales: un exfoliante a base de café y una crema hidratante inspirada en la miel, formulada con otros ingredientes destinados a ayudar a mantener la piel suave e hidratada.",
    'project.sec1_p2': "La presentación del negocio tiene como objetivo introducir nuestra idea de negocio, demostrar los prototipos y explicar cómo ambos productos podrían encajar en una rutina básica de cuidado de la piel. También queremos destacar la importancia de una presentación atractiva, una cuidadosa selección de ingredientes y la construcción de confianza entre las personas interesadas en nuestra propuesta.",
    'project.sec1_p3': "Con Golden Roast, buscamos convertir una idea simple en una oportunidad emprendedora, enfatizando el valor de la innovación, la creatividad y el cuidado personal.",
    'project.sec2_title': "2. Objetivos del Emprendimiento",
    'project.sec2_general_title': "Objetivo General:",
    'project.sec2_general_desc': "Desarrollar y presentar una propuesta de emprendimiento centrada en un exfoliante de café y una crema hidratante inspirada en la miel, destacando sus características, ingredientes, usos y potencial como productos de cuidado personal.",
    'project.sec2_specific_title': "Objetivos Específicos:",
    'project.sec2_obj1': "Presentar dos prototipos de productos para el cuidado de la piel: un exfoliante de café y una crema hidratante de miel.",
    'project.sec2_obj2': "Describir las características, usos, cualidades e ingredientes de cada producto formulado.",
    'project.sec2_obj3': "Fomentar el interés por el emprendimiento a través de una propuesta creativa y atractiva centrada en el cuidado personal.",
    'project.sec2_obj4': "Identificar oportunidades para mejorar la presentación, formulación y potencial comercialización de los productos en la región central de Honduras.",
    'project.sec3_title': "3. Formulación de Prototipos y Evaluación de Seguridad",
    'project.sec3_proto1_title': "Prototipo 1: Exfoliante de Café",
    'project.sec3_proto1_ing': "Ingredientes: Café tostado molido, azúcar, miel pura de abeja, aceite de coco virgen.",
    'project.sec3_proto1_mech': "Mecanismo de acción: Exfoliación mecánica superficial mediante micropartículas de café y cristales de azúcar disueltos en fase lipídica de coco. Remueve células desprendidas del estrato córneo estimulando la microcirculación cutánea superficial.",
    'project.sec3_proto2_title': "Prototipo 2: Crema Hidratante de Miel",
    'project.sec3_proto2_ing': "Ingredientes: 2 cucharadas de miel pura, 4 cucharadas de gel de aloe vera, 1 cucharadita de aceite de coco, 1/2 cucharadita de glicerina vegetal.",
    'project.sec3_proto2_mech': "Mecanismo de acción: Emulsión humectante que aporta hidratación directa por el contenido acuoso del aloe vera y retención transepidérmica mediada por la miel y la glicerina, sellada por triglicéridos de coco.",
    'project.sec3_ph_title': "Revisión dermatológica y pH (Bicarbonato de Sodio):",
    'project.sec3_ph_desc': "Durante las pruebas preliminares de formulación se consideró la inclusión de bicarbonato de sodio en la mezcla exfoliante. Tras evaluar los estándares dermocosméticos y el pH fisiológico de la piel humana (que oscila entre 4.7 y 5.5), se determinó omitir el bicarbonato (cuyo pH es cercano a 9), evitando así la alteración del manto lipídico protector y previniendo la resequedad en usuarios de piel sensible.",
    'project.sec4_title': "4. Conclusiones del Proyecto",
    'project.sec4_p1': "El proyecto Golden Roast demuestra la viabilidad de transformar materias primas emblemáticas de Honduras —como el café y la miel pura— en propuestas de cosmética artesanal con valor agregado y alto atractivo visual.",
    'project.sec4_c1': "La complementariedad del exfoliante y la crema hidratante conforma una rutina básica coherente de dos pasos (renovación e hidratación).",
    'project.sec4_c2': "El diseño de marca e identidad visual fortalece la percepción de calidad, generando confianza en el consumidor.",
    'project.sec4_c3': "La implementación de esta plataforma de comercio electrónico sienta las bases técnicas para una futura comercialización formal en el mercado hondureño.",
    'project.sec5_title': "5. Integrantes del Equipo Emprendedor",
    'project.sec5_desc': "Estudiantes universitarios que conceptualizaron la marca, formularon los prototipos botánicos y desarrollaron la propuesta comercial en Comayagua.",
    'project.team1_name': "Joselin Cáceres",
    'project.team1_role': "Formulación Botánica",
    'project.team1_bio': "Granulometría de café tostado, emoliencia y equilibrio de absorción dérmica.",
    'project.team2_name': "Sofia López",
    'project.team2_role': "Diseño & Marca",
    'project.team2_bio': "Imagotipo de gota y café, empaques cosméticos y estética editorial dorada.",
    'project.team3_name': "Ángel Guerra",
    'project.team3_role': "Estrategia Comercial",
    'project.team3_bio': "Estructura de costos unitarios en Lempiras y logística local en Comayagua.",
    'project.team4_name': "Génesis López",
    'project.team4_role': "Calidad & Seguridad",
    'project.team4_bio': "Preservación del pH fisiológico cutáneo, inocuidad y protocolos de parche.",
    'about.philosophy_badge': "Filosofía de Marca",
    'about.philosophy_title': "¿Qué Define a Golden Roast?",
    'about.philosophy_p1': "Golden Roast es un proyecto de negocio desarrollado alrededor de la idea de ofrecer productos de cuidado personal inspirados en ingredientes naturales como el café y la miel. Nuestra propuesta se centra en el cuidado de la piel a través de dos productos principales: un exfoliante a base de café y una crema hidratante inspirada en la miel.",
    'about.philosophy_p2': "El nombre Golden Roast evoca los tonos dorados de la miel y los tonos tostados del café, los dos ingredientes principales. El logo, inspirado en una gota con una forma interior que recuerda a un grano de café, refuerza visualmente esta unión botánica.",
    'about.philosophy_quote': "\"Con Golden Roast, buscamos convertir una idea simple en una oportunidad emprendedora, enfatizando el valor de la innovación, la creatividad y el cuidado personal.\"",
    'policy.tag': "Transparencia & Confianza",
    'policy.title': "Políticas y Términos de Servicio",
    'policy.subtitle': "Conoce los lineamientos de entrega en Comayagua, recomendaciones de aplicación y el marco del proyecto Golden Roast.",
    'policy.sec1_title': "1. Entregas Locales y Envíos (Comayagua)",
    'policy.sec1_p1': "Todos los pedidos realizados a través de esta plataforma son coordinados directamente por nuestro equipo en puntos convenidos de la ciudad de Comayagua. La entrega es gratuita en órdenes de L 300.00 en adelante. Para pedidos inferiores, se aplica una tarifa fija de entrega local de L 40.00.",
    'policy.sec1_p2': "Los tiempos de entrega oscilan entre 24 y 48 horas hábiles tras la confirmación de la orden. En caso de requerir envíos hacia otras ciudades del país, la coordinación se realiza de mutuo acuerdo mediante empresas de mensajería autorizadas en Honduras.",
    'policy.sec2_title': "2. Recomendaciones de Uso y Prueba de Parche",
    'policy.sec2_p1': "Nuestros cosméticos están elaborados a partir de ingredientes de origen natural (café, miel pura de abeja, extracto de aloe vera y aceites vegetales). No obstante, los componentes botánicos activos pueden generar reacciones en personas con sensibilidades específicas o alergias previas.",
    'policy.sec2_p2': "Protocolo de prueba preliminar: Antes del primer uso, aplique una pequeña cantidad de producto en la cara interna del antebrazo y observe durante 24 horas. Si nota enrojecimiento, picor o irritación persistente, suspenda su uso y lave la zona con abundante agua.",
    'policy.sec2_p3': "No ingerir. Evitar el contacto con los ojos y mucosas. Conservar en un lugar fresco, seco y protegido de la radiación solar directa.",
    'policy.sec3_title': "3. Alcance del Proyecto & Aviso Legal",
    'policy.sec3_p1': "Golden Roast surge como una iniciativa académica de emprendimiento universitario desarrollada por los integrantes Joselin Cáceres, Sofia López, Ángel Guerra y Génesis López en la Universidad Politécnica de Honduras, Centro Asociado de Comayagua.",
    'policy.sec3_p2': "La presente tienda web opera como un entorno demostrativo y funcional de comercio electrónico. Los datos personales proporcionados durante el registro y confirmación de pedidos se almacenan localmente en el dispositivo del usuario con fines de demostración de flujo transaccional y validación logística, sin transmisión indebida a bases de datos de terceros.",
    'scrub.badge_natural': "Cosmética Natural",
    'scrub.desc': "El exfoliante de café Golden Roast es un producto de cuidado personal elaborado con café molido e ingredientes naturales que aportan una textura granulosa equilibrada. Su propósito es favorecer la exfoliación superficial mediante movimientos circulares, ayudando a remover células muertas y dejando la piel con una sensación más suave, fresca y revitalizada.",
    'scrub.btn_add': "Añadir a la Bolsa (L 180.00)",
    'scrub.feat1': "Textura artesanal controlada",
    'scrub.feat2': "Enriquecido con miel y coco",
    'scrub.feat3': "Renovación cutánea visible",
    'scrub.feat4': "Presentación frasco 200g",
    'scrub.tab_ing': "Ingredientes",
    'scrub.tab_use': "Modo de Uso",
    'scrub.tab_duo': "Sinergia Dúo",
    'scrub.ing_lead': "Formulación artesanal basada en el reporte de emprendimiento:",
    'scrub.ing1': "Café molido: Aporta la textura granulosa necesaria para la exfoliación física. Ayuda a retirar células muertas de la piel.",
    'scrub.ing2': "Azúcar: Actúa como agente exfoliante complementario suave, mejorando la textura sin ser excesivamente abrasivo.",
    'scrub.ing3': "Miel pura de abeja: Aporta propiedades humectantes, favorece la retención de agua y suaviza la sensación posterior.",
    'scrub.ing4': "Aceite de coco virgen: Proporciona lubricación durante el masaje, evitando la fricción excesiva y acondicionando la barrera lipídica.",
    'scrub.safety_note': "Nota técnica de formulación: En iteraciones de prueba se evaluó el uso de bicarbonato de sodio. Debido a su pH alcalino (alrededor de 9), la formulación final recomienda limitar o evitar el bicarbonato para mantener el manto ácido natural de la piel y prevenir sequedad.",
    'scrub.use_step1': "Humedecer la piel previamente con agua tibia para facilitar el deslizamiento.",
    'scrub.use_step2': "Tomar una porción pequeña del exfoliante y aplicar con movimientos circulares muy suaves durante 1 a 2 minutos.",
    'scrub.use_step3': "Evitar el contorno de ojos, labios o zonas con heridas, brotes activos o irritaciones.",
    'scrub.use_step4': "Aclarar con abundante agua templada y secar a toques suaves con una toalla limpia.",
    'scrub.use_step5': "Aplicar inmediatamente la Crema Hidratante de Miel Golden Roast para reponer la hidratación.",
    'scrub.freq': "Frecuencia recomendada: 1 a 2 veces por semana, según la tolerancia individual y el tipo de piel.",
    'scrub.duo_desc': "Para obtener el máximo beneficio de la rutina Golden Roast, se recomienda aplicar este exfoliante como Paso 1. Al retirar las impurezas y células queratinizadas acumuladas, los poros quedan limpios y la piel preparada para absorber eficientemente los agentes humectantes de la Crema de Miel en el Paso 2.",
    'scrub.duo_btn': "Ver Pack Golden Dúo (Ahorra L 30.00)",
    'cream.badge_natural': "Cosmética Natural",
    'cream.desc': "La crema hidratante de miel Golden Roast es una fórmula cosmética que combina miel pura, gel de aloe vera, glicerina vegetal y aceite de coco. Su propósito es ayudar a retener la hidratación natural de la piel, aportando suavidad sin sensación pesada ni grasa. Este producto complementa al exfoliante de café al acondicionar y proteger la piel después de la renovación celular.",
    'cream.btn_add': "Añadir a la Bolsa (L 200.00)",
    'cream.feat1': "Humectación prolongada",
    'cream.feat2': "Textura no grasa ni pegajosa",
    'cream.feat3': "Aloe vera calmante",
    'cream.feat4': "Presentación frasco 150ml",
    'cream.tab_ing': "Ingredientes & Fórmula",
    'cream.tab_use': "Modo de Aplicación",
    'cream.tab_duo': "Sinergia Dúo",
    'cream.ing_lead': "Formulación según la documentación técnica del proyecto:",
    'cream.ing1': "Miel pura de abeja (2 cucharadas soperas): Humectante natural de alta afinidad con el estrato córneo que retiene la humedad y aporta emoliencia.",
    'cream.ing2': "Gel de aloe vera (4 cucharadas soperas): Proporciona hidratación acuosa ligera y efecto refrescante calmante.",
    'cream.ing3': "Aceite de coco virgen (1 cucharadita): Aporta ácidos grasos esenciales para sellar la humedad sin ocluir los poros.",
    'cream.ing4': "Glicerina vegetal (media cucharadita): Agente higroscópico que atrae y retiene agua en las capas superficiales de la epidermis.",
    'cream.process_title': "Proceso de Emulsión Artesanal:",
    'cream.process_desc': "Se integran en frío las 2 cucharadas de miel y las 4 de aloe vera hasta lograr una base homogénea. Posteriormente se incorpora el aceite de coco y la glicerina, mezclando con movimientos envolventes para obtener una textura cremosa, ligera y de rápida absorción cutánea.",
    'cream.use_step1': "Limpiar o exfoliar la zona previamente para asegurar una absorción óptima.",
    'cream.use_step2': "Aplicar una pequeña cantidad de crema sobre la piel seca o ligeramente húmeda.",
    'cream.use_step3': "Distribuir con masajes circulares ascendentes hasta su completa absorción.",
    'cream.use_step4': "Puede utilizarse tanto de día como de noche para mantener la suavidad de la piel.",
    'cream.recommendation': "Recomendación: Apta para uso diario en rostro (piel normal a seca) y cuerpo. En pieles sensibles se aconseja una prueba de parche en el antebrazo.",
    'cream.duo_desc': "La crema hidratante constituye el Paso 2 de la rutina Golden Roast. Aplicada tras la exfoliación con café (Paso 1), sella los beneficios regenerativos y crea una capa protectora suave contra la deshidratación y los factores ambientales diarios.",
    'cream.duo_btn': "Ver Pack Golden Dúo (Ahorra L 30.00)",

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

    // Added Bilingual Support Keys (English)
    'nav.home': "Home",
    'nav.shop': "Shop",
    'nav.team': "Founders",
    'nav.about': "About Us",
    'nav.project': "The Project",
    'nav.contact': "Contact",
    'nav.account': "My Account",
    'nav.cart': "Bag",
    'nav.whatsapp': "WhatsApp",
    'nav.announcement': "Free delivery in Comayagua on orders over L 300 • Natural Skincare",
    'brand.slogan': "The Golden touch of nature",
    'project.page_title': "Our Academic Project | Golden Roast - University Venture & Research",
    'project.page_desc': "Academic documentation of the Golden Roast venture: Honduran Polytechnic University, Comayagua Associated Center. Objectives, formulation, and dermatological safety analysis.",
    'project.badge_univ': "Honduran Polytechnic University",
    'project.hero_title': "University Entrepreneurship Initiative: Golden Roast",
    'project.hero_desc': "Comayagua Associated Center · Academic documentation on research objectives, prototype formulation, value proposition, and technical considerations.",
    'project.team_badge': "Founding Members: Joselin Cáceres, Sofia López, Ángel Guerra, Génesis López",
    'project.sec1_title': "1. Project Introduction",
    'project.sec1_p1': "Golden Roast is an academic business initiative developed around formulating high-value personal care products inspired by natural ingredients such as coffee and pure honey. Our core proposal focuses on skincare through two primary hero products: a coffee-based scrub and a honey-inspired moisturizer, formulated with complementary ingredients designed to keep skin soft, hydrated, and protected.",
    'project.sec1_p2': "This business presentation aims to introduce our venture concept, demonstrate working prototypes, and explain how both products integrate into an essential skincare regimen. We also emphasize aesthetic elegance, rigorous ingredient selection, physiological skin safety, and building consumer trust.",
    'project.sec1_p3': "With Golden Roast, we transform a simple concept into an entrepreneurial opportunity, emphasizing the value of innovation, creativity, and personal care.",
    'project.sec2_title': "2. Entrepreneurship Objectives",
    'project.sec2_general_title': "General Objective:",
    'project.sec2_general_desc': "To develop and present an entrepreneurship proposal centered on a coffee exfoliant and a honey-inspired moisturizer, highlighting their features, ingredients, uses, and commercial potential as personal care products.",
    'project.sec2_specific_title': "Specific Objectives:",
    'project.sec2_obj1': "Present two skincare product prototypes: a coffee exfoliant and a honey moisturizer.",
    'project.sec2_obj2': "Describe the characteristics, applications, qualities, and ingredients of each formulated product.",
    'project.sec2_obj3': "Encourage entrepreneurial interest through a creative, attractive proposal focused on personal wellness.",
    'project.sec2_obj4': "Identify strategic opportunities to enhance product presentation, formulation, and commercialization across the central region of Honduras.",
    'project.sec3_title': "3. Prototype Formulation & Safety Assessment",
    'project.sec3_proto1_title': "Prototype 1: Coffee Exfoliant",
    'project.sec3_proto1_ing': "Ingredients: Ground roasted coffee, organic sugar, pure bee honey, virgin coconut oil.",
    'project.sec3_proto1_mech': "Mechanism of action: Gentle superficial mechanical exfoliation using coffee microparticles and sugar crystals dissolved in a coconut lipid phase. Removes dead surface cells from the stratum corneum while stimulating superficial skin microcirculation.",
    'project.sec3_proto2_title': "Prototype 2: Honey Moisturizer",
    'project.sec3_proto2_ing': "Ingredients: 2 tablespoons pure honey, 4 tablespoons aloe vera gel, 1 teaspoon coconut oil, 1/2 teaspoon vegetable glycerin.",
    'project.sec3_proto2_mech': "Mechanism of action: Humectant emulsion that provides direct aqueous hydration via aloe vera, transepidermal moisture retention mediated by honey and glycerin, and lipid barrier sealing from coconut triglycerides.",
    'project.sec3_ph_title': "Dermatological Safety Review & Physiological pH (Baking Soda Exclusion):",
    'project.sec3_ph_desc': "During preliminary formulation trials, the addition of sodium bicarbonate (baking soda) was evaluated for the exfoliating mixture. Following dermocosmetic standards and the physiological pH of human skin (ranging between 4.7 and 5.5), baking soda (with an alkaline pH near 9) was strictly excluded, preventing disruption of the protective acid mantle and avoiding dryness or irritation in sensitive skin.",
    'project.sec4_title': "4. Project Conclusions & Outlook",
    'project.sec4_p1': "The Golden Roast project demonstrates the viability of transforming emblematic Honduran raw materials — such as specialty coffee and pure honey — into artisan cosmetic products with high added value and strong visual appeal.",
    'project.sec4_c1': "The synergy between the exfoliant and the moisturizer creates a coherent two-step skincare routine (renewal and deep hydration).",
    'project.sec4_c2': "Brand design and visual identity reinforce the perception of quality, building consumer trust.",
    'project.sec4_c3': "The implementation of this digital platform establishes the technical foundation for future formal commercialization in the Honduran market.",
    'project.sec5_title': "5. Student Entrepreneurial Team",
    'project.sec5_desc': "University students who conceptualized the brand, formulated the botanical prototypes, and developed the commercial proposal in Comayagua.",
    'project.team1_name': "Joselin Cáceres",
    'project.team1_role': "Botanical Formulation",
    'project.team1_bio': "Roasted coffee granulometry, emollient balance, and dermal absorption testing.",
    'project.team2_name': "Sofia López",
    'project.team2_role': "Design & Branding",
    'project.team2_bio': "Droplet and coffee bean brandmark, cosmetic packaging, and editorial gold aesthetic.",
    'project.team3_name': "Ángel Guerra",
    'project.team3_role': "Commercial Strategy",
    'project.team3_bio': "Unit cost modeling in Honduran Lempiras and local distribution logistics in Comayagua.",
    'project.team4_name': "Génesis López",
    'project.team4_role': "Quality & Safety",
    'project.team4_bio': "Physiological skin pH preservation, raw material purity, and consumer patch test protocols.",
    'about.philosophy_badge': "Brand Philosophy",
    'about.philosophy_title': "What Defines Golden Roast?",
    'about.philosophy_p1': "Golden Roast is an entrepreneurial personal care project inspired by natural coffee and honey. Our core mission focuses on skin wellness through two handcrafted hero products: a coffee scrub and a honey moisturizing cream.",
    'about.philosophy_p2': "The name Golden Roast evokes the golden tones of pure honey and the roasted warmth of specialty coffee, our two star ingredients. The logo, inspired by a droplet containing an inner coffee bean motif, visually reinforces this botanical union.",
    'about.philosophy_quote': "\"With Golden Roast, we transform a simple concept into an entrepreneurial opportunity, emphasizing the value of innovation, creativity, and personal care.\"",
    'policy.tag': "Customer Care",
    'policy.title': "Terms, Shipping & Safety Guidelines",
    'policy.subtitle': "Clear guidelines regarding local orders in Comayagua, safe patch test protocols, and academic venture scope.",
    'policy.sec1_title': "1. Local Deliveries & Shipping (Comayagua)",
    'policy.sec1_p1': "All orders placed through this platform are coordinated directly by our team at designated pickup and drop-off points across Comayagua. Delivery is free on orders of L 300.00 and above. For smaller orders, a standard local delivery fee of L 40.00 applies.",
    'policy.sec1_p2': "Delivery times typically range between 24 and 48 business hours following order confirmation. If shipping to other cities in Honduras is required, dispatch is coordinated mutually via authorized regional courier services.",
    'policy.sec2_title': "2. Recommended Usage & Patch Test Protocol",
    'policy.sec2_p1': "Our cosmetics are handcrafted using ingredients of natural origin (high-altitude coffee, pure bee honey, aloe vera extract, and plant oils). However, active botanical ingredients can trigger sensitivity in individuals with unique allergies.",
    'policy.sec2_p2': "Preliminary patch test protocol: Before initial use, apply a small quantity of the product to the inner forearm and observe for 24 hours. If persistent redness, itching, or irritation occurs, discontinue use and wash thoroughly with fresh water.",
    'policy.sec2_p3': "Do not ingest. Avoid contact with eyes and mucous membranes. Store in a cool, dry place away from direct sunlight.",
    'policy.sec3_title': "3. Project Scope & Academic Disclaimer",
    'policy.sec3_p1': "Golden Roast originated as an academic university entrepreneurship initiative developed by students Joselin Cáceres, Sofia López, Ángel Guerra, and Génesis López at the Honduran Polytechnic University, Comayagua Associated Center.",
    'policy.sec3_p2': "This web store operates as a functional and demonstration e-commerce prototype. Personal contact information provided during registration and checkout is stored locally on the user device for transactional demonstration and logistical validation, without unauthorized third-party disclosure.",
    'scrub.badge_natural': "Natural Skincare",
    'scrub.desc': "The Golden Roast coffee exfoliant is a handcrafted skincare formulation made with roasted ground coffee and nourishing natural ingredients providing a balanced granular texture. It gently buffs away surface dead cells through light circular massage, leaving your skin soft, refreshed, and revitalized.",
    'scrub.btn_add': "Add to Bag (L 180.00)",
    'scrub.feat1': "Calibrated artisan texture",
    'scrub.feat2': "Enriched with pure honey & coconut",
    'scrub.feat3': "Visible skin renewal",
    'scrub.feat4': "200g jar presentation",
    'scrub.tab_ing': "Ingredients",
    'scrub.tab_use': "How to Use",
    'scrub.tab_duo': "Duo Synergy",
    'scrub.ing_lead': "Artisan formulation based on the venture research documentation:",
    'scrub.ing1': "Ground roasted coffee: Provides physical exfoliation texture to gently buff away dead epidermal cells and awaken skin vitality.",
    'scrub.ing2': "Sugar crystals: Acts as a complementary mild exfoliating agent that softens texture without being overly abrasive.",
    'scrub.ing3': "Pure bee honey: Imparts deep humectant properties, locking in moisture and leaving skin supple and nourished.",
    'scrub.ing4': "Virgin coconut oil: Provides emollient lubrication during massage, preventing excessive friction and conditioning the lipid barrier.",
    'scrub.safety_note': "Formulation safety note: During research trials, the inclusion of sodium bicarbonate was assessed. Due to its alkaline pH (~9), the finalized formulation strictly avoids bicarbonate to preserve skin natural acid mantle (pH 4.7-5.5) and prevent dryness.",
    'scrub.use_step1': "Dampen skin with lukewarm water to facilitate smooth application.",
    'scrub.use_step2': "Take a small portion of exfoliant and massage in gentle circular motions for 1 to 2 minutes.",
    'scrub.use_step3': "Avoid the delicate eye contour, lips, or areas with active breakouts or skin lesions.",
    'scrub.use_step4': "Rinse thoroughly with warm water and pat dry gently with a clean towel.",
    'scrub.use_step5': "Immediately follow with Golden Roast Honey Moisturizer to seal in hydration.",
    'scrub.freq': "Recommended frequency: 1 to 2 times weekly, based on individual skin type and tolerance.",
    'scrub.duo_desc': "To unlock the full benefits of the Golden Roast routine, apply this exfoliant as Step 1. By clearing away surface impurities and dead skin cells, pores are thoroughly cleansed and primed to absorb the humectant actives of the Honey Cream in Step 2.",
    'scrub.duo_btn': "View Golden Duo Pack (Save L 30.00)",
    'cream.badge_natural': "Natural Skincare",
    'cream.desc': "The Golden Roast honey moisturizer is a botanical skincare formula blending pure honey, fresh aloe vera gel, vegetable glycerin, and virgin coconut oil. It locks in natural hydration, imparting velvety softness without any heavy or greasy residue. It perfectly complements the coffee scrub by conditioning and protecting skin after cell renewal.",
    'cream.btn_add': "Add to Bag (L 200.00)",
    'cream.feat1': "Long-lasting moisture lock",
    'cream.feat2': "Non-greasy, non-sticky finish",
    'cream.feat3': "Soothing aloe vera",
    'cream.feat4': "150ml jar presentation",
    'cream.tab_ing': "Ingredients & Formula",
    'cream.tab_use': "Application Method",
    'cream.tab_duo': "Duo Synergy",
    'cream.ing_lead': "Formulation according to project technical documentation:",
    'cream.ing1': "Pure bee honey (2 tbsp): Highly skin-compatible natural humectant that draws in moisture and restores suppleness.",
    'cream.ing2': "Fresh aloe vera gel (4 tbsp): Provides lightweight aqueous hydration and a refreshing soothing effect.",
    'cream.ing3': "Virgin coconut oil (1 tsp): Supplies essential fatty acids to seal hydration without clogging pores.",
    'cream.ing4': "Vegetable glycerin (1/2 tsp): Hygroscopic active that binds water molecules within superficial epidermal layers.",
    'cream.process_title': "Artisan Emulsion Process:",
    'cream.process_desc': "Pure honey and fresh aloe vera gel are cold-blended until a homogenous base forms. Virgin coconut oil and vegetable glycerin are folded in with gentle enveloping motions, yielding a creamy, lightweight emulsion that absorbs rapidly into skin.",
    'cream.use_step1': "Cleanse or exfoliate skin beforehand to ensure optimal dermal absorption.",
    'cream.use_step2': "Dispense a modest amount of cream onto dry or slightly damp skin.",
    'cream.use_step3': "Distribute with upward circular motions until completely absorbed.",
    'cream.use_step4': "Suitable for both morning and evening application to maintain skin radiance.",
    'cream.recommendation': "Recommendation: Suitable for daily face (normal to dry skin) and body use. For sensitive skin, a preliminary forearm patch test is advised.",
    'cream.duo_desc': "The moisturizing cream represents Step 2 of the Golden Roast regimen. Applied following the coffee scrub (Step 1), it seals regenerative benefits and creates a soft protective shield against dehydration and daily stressors.",
    'cream.duo_btn': "View Golden Duo Pack (Save L 30.00)",

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
              <small>Honduras • Secundario</small>
            </div>
            <span class="check-icon">${this.currentLang === 'es' ? '✓' : ''}</span>
          </button>
          <button class="lang-option-btn ${this.currentLang === 'en' ? 'active' : ''}" data-choose-lang="en">
            <span class="lang-flag">🇺🇸</span>
            <div class="lang-details">
              <strong>English</strong>
              <small>United States • Default</small>
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
