export default {
  global: {
    componenteFormativo: 'Analítica de <em>Buyer</em> Persona',
    descripcionCurso:
      'Es importante que las estrategias de la empresa con base en el <em>buyer</em> persona puedan ser analizadas para observar si las metas se están cumpliendo o, se deben hacer ajustes. Para ello, existen métricas y herramientas que pueden ser de utilidad para que los especialistas en mercadeo puedan desarrollar un análisis correcto sobre los procesos de creación del <em>buyer</em> Persona.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Experiencia de cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Mapa de experiencia de cliente',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Comunicación estratégica con clientes',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Los clientes y el ecosistema digital',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Perfilamiento del <em>Buyer</em> Persona',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de perfiles',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Elaboración de arquetipos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Diseño de reportes de <em>Buyer</em> Persona',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'KPI y acciones de mejoramiento',
            hash: 't_2_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_002_623605.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Experiencia de cliente',
      referencia:
        'Zepeda, C. (2021). <em>¿Qué es la Experiencia del Cliente (CX)</em>?. [Video] YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4qzq0vEa_k4 ',
    },
    {
      tema: 'Mapa de experiencia de cliente (Customer Journey Map)',
      referencia:
        'Aguilar, A. (2018). <em>Como hacer un CUSTOMER JOURNEY MAP o MAPA DE EXPERIENCIA CLIENTE | Las 7 ETAPAS.</em> [Video] YouTube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=__5oH-POHe4',
    },
    {
      tema: 'La propuesta de valor de la organización',
      referencia:
        'Iturralde, C. (2015). <em>La evolución del Cliente digital.</em> ',
      tipo: 'Artículo',
      link:
        'https://cdn5.icemd.com/app/uploads/2018/12/evolucion_cliente_digital.pdf',
    },
    {
      tema: 'El ecosistema digital',
      referencia:
        'Heredia Jerez, R.  (2019). <em>Ecosistemas Digitales, la revolución de todas las industrias.</em>',
      tipo: 'Libro',
      link:
        'https://kioscoganamas.com.pe/wp-content/uploads/2020/07/Libro-Ecosistemas-Digitales.pdf',
    },
    {
      tema: 'KPI’s y acciones de mejoramiento',
      referencia:
        'Cabello, E. [Encuestacom]. (2021). <em>Análisis del Buyer Persona. Métricas de Customer Experience.</em> [Video] YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-hQNp7xh_8c',
    },
  ],
  glosario: [
    {
      termino: 'Analítica <em>web</em>',
      significado:
        'es un grupo de técnicas que se relacionan con el análisis de información relacionada con las acciones desarrolladas por una marca en internet, desde herramientas o medios como el sitio <em>web</em>, las redes sociales, el correo electrónico, entre otros.',
    },
    {
      termino: 'Comunicación estratégica',
      significado:
        'es el proceso donde se planean acciones comunicacionales para dar cumplimiento a las metas trazadas por una marca. Estas acciones pueden servir para hacer promoción, promoción de ventas, lanzamiento de productos, posicionamiento o entregar algún tipo de información relevante para el cliente.',
    },
    {
      termino: '<em>Customer Journey</em>',
      significado:
        'traducido como “Viaje del Cliente” es el grupo de fases por las que cruza un cliente para hacer la acción de compra.',
    },
    {
      termino: 'Ecosistema digital',
      significado:
        'es un proceso óptimo para el posicionamiento de una idea, para dar comienzo a una campaña publicitaria o para hacer promoción de algún producto, a través de Tecnologías de la Información y la Comunicación (TIC), tales como redes sociales, correo electrónico, sitio <em>web</em>, blog y chat, entre otras.',
    },
    {
      termino: 'Experiencia de cliente',
      significado:
        'es la imagen que un cliente tiene luego de tener interacciones con una marca. Sin percepciones que afectan las conductas del cliente y generan recuerdos pueden impulsar la fidelidad por parte del cliente y, posteriormente, generar rentabilidad en la empresa. También se le conoce como CX (<em>Customer Experience</em>).',
    },
    {
      termino: '<em>Insight</em>',
      significado:
        'es una verdad o un conocimiento clave que una marca puede tener sobre los clientes. Si se interpreta de la manera correcta puede brindar datos lucrativos sobre la forma en el que consumidor se comporta, sobre sus necesidades y el porqué de sus acciones.',
    },
    {
      termino: '<em>KPIs (key performance indicator)</em>',
      significado:
        'son indicadores clave de gestión o rendimiento usados para estudiar el éxito de las actividades desarrolladas por una marca para establecer si están logrando los objetivos pactados o si se requiere de realizar algún ajuste o corrección.',
    },
    {
      termino: 'Métrica',
      significado:
        'en mercadeo son una manera cuantificable de detallar un rastreo del rendimiento empresarial y una herramienta vital para calcular la efectividad de las acciones y los esfuerzos publicitarios, de comunicación y promoción emprendidas por una marca.',
    },
    {
      termino: 'Momento de la verdad',
      significado:
        'es el punto de interacción o contacto de mayor relevancia que existe entre la marca y el cliente. Es vital para la experiencia de cliente porque es en un momento que debe ser tan significativo que logre la fidelización por parte del público objetivo.',
    },
    {
      termino: 'Perfilamiento de clientes',
      significado:
        'reside en la identificación de características del consumidor para brindarle la asesoría correcta y tener la mejor interacción posible con él. Se deben reunir la mayor cantidad de datos posibles para poder comprender cuál es su personalidad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Álvarez, M. (2016). <em>Customer Experience</em>. <em>La fórmula del éxito para enamorar a los clientes</em>. Edición Kindle, Profit Editorial.',
      link: '',
    },
    {
      referencia:
        'Beltrán, M., Ledesma, J., & Parrales, V. (2019). El <em>Buyer</em> Persona Como Factor Clave Entre Las Tendencias En Gestión Empresarial. <em>Revista Científica De La Investigación Y El Conocimiento</em>, p.p. 659-681.',
      link: '',
    },
    {
      referencia: 'Castañeda, C. (2016). <em>Acertá</em>. ',
      link: '',
    },
    {
      referencia:
        'Castañeda, V. (2022). Las Tres Claves Del Futuro De La Experiencia Del Cliente. <em>Expansión.</em> Digital.',
      link: '',
    },
    {
      referencia:
        'Haeske, U., & Raabe De Fonrodona, U. (2016). <em>Comunicación Con Clientes : El Camino Correcto.</em> Panamericana Editorial.',
      link: '',
    },
    {
      referencia:
        'Pozo, J. (2018). <em>Cuáles son los kpis de experiencia de clientes más utilizados.</em>',
      link:
        'https://elviajedelcliente.com/cuales-son-los-kpis-de-experiencia-de-clientes-mas-utilizados/',
    },
    {
      referencia:
        'Quijano, V. (2018). <em>Servicio Al Cliente 2.0</em> : Del Enfoque Reactivo Del Siglo XX , Al Proactivo Necesario. En: El XXI. Publicación independiente.',
      link: '',
    },
    {
      referencia:
        'Vásquez, N. (2021). <em>Arquetipos, Personalidad y Marca Personal: Transforma el poder de tu marca.</em> Tienda Kindle, Publicación Independiente.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lizeth Daniela Reinoso Diaz',
          cargo: 'Experta temática',
          centro: 'Regional Tolima. Centro Agropecuario La Granja',
        },
        {
          nombre: 'Oscar Absalón Guevara',
          cargo: 'Diseñador instruccional',
          centro:
            'Regional Santander. Centro de la Industria, la Empresa y los Servicios – CIES',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Asesora metodológica',
          centro: 'Regional Distrito Capital. Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura ',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de estilo',
          centro: 'egional Distrito Capital. Centro de Diseño y Metrología',
        },
        {
          nombre: 'Humberto Arias Díaz',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yobanni Penagos',
          cargo: 'Diseñador web',
          centro: 'Regional Tolima  Centro de Comercio y Servicios',
        },
        {
          nombre: 'Veimar Celis Melendez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Mauricio Oviedo',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
