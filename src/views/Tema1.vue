<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Experiencia de cliente

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3(data-aos="zoom-in")
        figure  
          img(src='@/assets/curso/temas/tema1/img1.svg', alt='Imagen decorativa')
      .col-lg-9(data-aos="zoom-in-right")
        p Álvarez, Marcos (2016) dice que #[i Customer Experience] (CX) o la experiencia de cliente es una estrategia que se convirtió en la actualidad en el genuino diferenciador entre los negocios y en una pieza clave del #[i customer centricity] o centricidad en el cliente. Es así que personifica una ventaja competitiva única, porque casi todas las ventajas racionales básicas ofrecidas por las marcas, son dadas por parte del cliente como si fueran un hecho. Por esta razón el cliente piensa que el producto es apto para la compra respondiendo a sus necesidades, así como que el producto llegará justo a tiempo y que en caso de tener problemas se le atenderá de la mejor forma. 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="zoom-in-right")
        p La experiencia de cliente es la imagen que un cliente posee de las interacciones vividas con una marca. Por eso, las interacciones se pueden producir en distintos momentos de la transacción comercial, como, por ejemplo:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.desktop(data-aos="zoom-in")
        figure        
          img(src='@/assets/curso/temas/tema1/img2.svg', alt='Se revelan 5 preguntas: 1- ¿Qué muestra el análisis DOFA? 2- ¿En qué áreas se encuentra y en qué áreas desea estar la empresa? 3- ¿Hay recursos suficientes para lograr los objetivos trazados? 4- ¿Los objetivos son realistas y se pueden alcanzar? 5- ¿Temporalmente cuál es el límite para alcanzarlos? ')
    .col-lg-12.movil(data-aos="zoom-in")
      figure
        img(src='@/assets/curso/temas/tema1/img2_1.svg', alt='Se revelan 5 preguntas: 1- ¿Qué muestra el análisis DOFA? 2- ¿En qué áreas se encuentra y en qué áreas desea estar la empresa? 3- ¿Hay recursos suficientes para lograr los objetivos trazados? 4- ¿Los objetivos son realistas y se pueden alcanzar? 5- ¿Temporalmente cuál es el límite para alcanzarlos? ')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="zoom-in-right")
        p La experiencia del cliente es la imagen general que tiene el cliente de todos esos momentos durante el #[i Customer Journey] (o sea el viaje realizado por el cliente para realizar una acción de compra).
        p Es difícil que las marcas puedan conservar el liderazgo diferenciándose con el producto o a través de su costo, durante mucho tiempo (debido a la competencia). Con la economía a gran escala, la producción industrial y el ahorro de costos es normal que existan marcas que lo hagan igual y más económico. Sin embargo, el cliente supone que están a la orden del día temas relevantes como el servicio, el precio y la calidad.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img3.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Por lo tanto, si las expectativas racionales no destacan a una marca, ¿Qué es lo que le permite hacerlo? La respuesta está en cómo hacer sentir al cliente. Se vive una era donde las marcas luchan por las emociones, y ahí es vital la experiencia del cliente. Es por esta razón que la clave es tener un enfoque centrado en el cliente, para motivarlo y fidelizarlo.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p En cada uno de los momentos de interacción que la marca tiene con el cliente, es una oportunidad para generar emociones concretas, las cuales se van sumando de a poco hasta lograr una experiencia positiva. Todo tiene que estar perfectamente encadenado. Por ejemplo, es posible que la acción de compra haya sido exitosa, pero en el momento de la asesoría algo falló. Así, cada uno de estos momentos acumulará percepciones hasta forjar una opinión personal, la cual determina la percepción general de la marca.
        p Como se trata de percepciones emocionales, cada cliente siente de forma subjetiva lo que experimentó, y eso termina con la generación de una opinión que evolucionará a un comportamiento. No se debe dejar nada al azar, y para evitar la incertidumbre de percepciones por parte de los clientes, lo ideal es brindar una experiencia de cliente sólida y permanente. Todos los empleados de la empresa que tengan contacto con el cliente deben estar alineados, día a día; igual ocurre con las estrategias y sus planes de acción porque todo debe salir perfecto, sólo así es más fácil de administrar y mejorar (en el momento que sea necesario). No se puede dejar a un lado la individualidad del cliente y su personalización. 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4.mb-4(style="background-color:#C8D8EF")
          p El cliente actual no compra productos, compra experiencias que se materializan a través de ellos.
   
    .row.align-items-center.mb-4
      .col-auto.pe-0.desktop(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema1/imgtitulo.svg').m-auto
      .col-auto.bg-c8(style="z-index:1;color:#4B6280")
        .p-2
          h3.mb-0 Beneficios de la experiencia de cliente
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Al tener una visión del #[i Customer Journey] y la gestión de las interacciones con la marca por parte del cliente se puede administrar y mejorar su experiencia. Los siguientes son algunos de los beneficios para las marcas:
    
    SlyderB.slyder-b-img.mb-5.p-5(:datos="datosSlyderEjemplo")

    .row.align-items-center.mb-4
      .col-auto.pe-0.desktop(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema1/imgtitulo.svg').m-auto
      .col-auto.bg-c8(style="z-index:1;color:#4B6280")
        .p-2
          h3.mb-0 Los pilares de la Experiencia de Cliente
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Para desarrollar un trabajo que logre beneficios para la marca es primordial tener claros los momentos en los que se apoya el CX. Una empresa tiene que ser precisa en su estrategia, consintiendo que dentro de ella se reconozcan algunas características claves como se pueden identificar a continuación:
    
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Mantener una identidad única")
        .col-md-12.mb-4.mb-md-0
          p No significa siempre hacer las mismas cosas que las demás marcas del sector. La estrategia de experiencia de cliente debe estar orientada a todo aquello que desea el cliente y, además, superar con creces esas expectativas. No se recomienda repetir planes anteriores, se sugiere intentar sobresalir en las ideas de manera original y creativa, porque de lo contrario, la marca será una más. 
        .col-md-12
          figure
            img(src='@/assets/curso/temas/tema1/img9.jpg', alt='Imagen decorativa')
      .row(titulo="Lograr impulso organizativo")
        .col-md-12.mb-4.mb-md-0
          p Toda la organización es responsable de crear, desarrollar y mantener  una CX,  aunque sí debe existir un responsable, puede ser un gerente comercial o un experto en mercadeo. Es cuando entra en acción la figura del #[i Chief Customer Officer], o sea, quien se responsabiliza de la CX. Es un cargo vital ya que, en la mayor parte de los casos, los negocios deben implementar una estrategia dentro de su cotidianidad. La función principal es el diseño y administración del CX en su versión transversal a través de la empresa. Es quien debe preocuparse por los momentos de la verdad en cada uno de los #[i touchpoint] (punto o momentos de contacto) que la marca tenga con el cliente. 
        .col-md-12
          figure
            img(src='@/assets/curso/temas/tema1/img10.jpg', alt='Imagen decorativa')
      .row(titulo="Involucrar a los empleados y conseguir que se involucren naturalmente")
        .col-md-12.mb-4.mb-md-0
          p Para desarrollar la estrategia de CX se necesita contar con los empleados del negocio. Al ser un proceso que debe pasar por varias etapas, lo ideal es que el CX incluya todos los departamentos, y por eso, es vital que todos los empleados tengan credibilidad y confianza en la estrategia. Tácticas como alinear las políticas de Recursos Humanos, informar y capacitar a toda la empresa o proporcionar importancia a los empleados en el diseñar de la estrategia. Los primeros clientes de una marca son siempre los empleados; a través de ellos es como se logra el éxito, y es donde entra en juego el concepto de #[i Employee Experience] (Experiencia del Empleado) que también es vital tenerlo en cuenta.
        .col-md-12
          figure
            img(src='@/assets/curso/temas/tema1/img11.jpg', alt='Imagen decorativa')
      .row(titulo="Generar interacciones de los productos")
        .col-md-12.mb-4.mb-md-0
          p La generación de interacciones de los productos con el cliente es vital, y más aún, si luego de ello se logra la recomendación. El #[i marketing] viral en todo su esplendor, logrando que los mismos usuarios recomienden la marca a sus contactos. Esto se logra cuando se tienen clientes que han vivido una CX inolvidable. Actualmente, existen un mundo de productos parecidos, un mundo de vendedores con ofreciendo lo mismo. Por eso, ser diferente es una opción que puede ser viable para los más ágiles en su relación con el cliente. El comercio electrónico y el #[i marketing] digital deben ser aprovechados al máximo para generar interacciones con los clientes y posteriormente las recomendaciones de ellos a sus contactos, usando herramientas como el correo electrónico, las redes sociales, el sitio #[i web] y el #[i blog], entre otras.
        .col-md-12
          figure
            img(src='@/assets/curso/temas/tema1/img12.jpg', alt='Imagen decorativa')
      .row(titulo="Interpretar los resultados del <em>Customer Experience</em> y actuar")
        .col-md-12.mb-4.mb-md-0
          p La CX, al poderse gestionar, se puede medir. Por lo tanto, se debe encontrar la métrica adecuada para cada cliente.
          p Resulta fundamental generar procesos de seguimiento y monitoreo a partir de los resultados, potencializando la experiencia post venta como parte de la estrategia de fidelización.
        .col-md-12
          figure
            img(src='@/assets/curso/temas/tema1/img13.jpg', alt='Imagen decorativa')

    Separador
    .row
      .col-xl-12
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.1 Mapa de experiencia de cliente
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Se trata de una representación visual de la experiencia vivida por el cliente con la marca. Se diseña a través de imágenes que muestran una historia sobre cómo un cliente se va moviendo a lo largo de cada etapa o momento donde interactuó con la marca y la experiencia que tuvo en cada una. Tiene que contener los momentos o puntos de contacto y los momentos de la verdad; así como también, las posibles emociones del cliente (frustración, confusión, felicidad), y las acciones que la marca desee que realice el cliente.
        p Su diseño debe ser personalizado al contexto empresarial, por lo que no existe un formato único. Se puede diseñar en algún #[i software] especializado como Microsoft Visio, Illustrator, CorelDraw, PowerPoint o Word. Aunque también existen plantillas o herramientas digitales para poderlas diligenciar y personalizar, como por ejemplo #[i Gliffy] (gratuita y de pago), #[i UXPressia] (grauita y de pago), #[i Smaply] (de pago), entre otras. A continuación, se presentan en las siguientes figuras dos ejemplos de diseño de mapa de CX:
    
    .titulo-sexto.color-acento-contenido.offset-1
      h5 Figura 1.
      span  #[i  Mapa de experiencia]
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.desktop
        figure
          img(src='@/assets/curso/temas/tema1/img14.svg', alt='En la figura 1 se muestra un ejemplo de un mapa de experiencia del cliente, como se descrebe a continución.') 
          figcaption Nota. 5 ejemplos de cómo crear un #[i Customer Journey] Map efectivo. Rojas (2017).
      .col-lg-12.movil
        figure
          img(src="@/assets/curso/temas/tema1/img14_1.svg", alt="En la figura 1 se muestra un ejemplo de un mapa de experiencia del cliente, como se descrebe a continución.")
          figcaption Nota. 5 ejemplos de cómo crear un #[i Customer Journey] Map efectivo. Rojas (2017).
    
    .titulo-sexto.color-acento-contenido.offset-1
      h5 Figura 2.
      span  #[i  Mapa de experiencia]
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.desktop
        figure
          img(src='@/assets/curso/temas/tema1/img15.svg', alt='Journey: Visita a un supermercado Leche Pre ¿Y la leche? No hay leche en la nevera Supermercado Voy al supermercado Cojo un carro Durante Recorro los pasillos Hay muchos productos Leche Localizo mi producto Post Me llevo la leche Pongo mi elección en mi  carrito Pago, compruebo mi ticket y me voy')
          figcaption Nota. 5 ejemplos de cómo crear un #[i Customer Journey] Map efectivo. Rojas (2017).
      .col-lg-12.movil
        figure
          img(src="@/assets/curso/temas/tema1/img15_1.svg", alt="Journey: Visita a un supermercado Leche Pre ¿Y la leche? No hay leche en la nevera Supermercado Voy al supermercado Cojo un carro Durante Recorro los pasillos Hay muchos productos Leche Localizo mi producto Post Me llevo la leche Pongo mi elección en mi  carrito Pago, compruebo mi ticket y me voy")
          figcaption Nota. 5 ejemplos de cómo crear un #[i Customer Journey] Map efectivo. Rojas (2017).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p El mapa se basa por lo general en un cronograma de actividades (puntos o momentos de contacto), como, por ejemplo:
    
    .tarjeta--container.row.mb-5
      .col-md.colorcol1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img16.svg', alt='Imagen decorativa')        
        p.text-center La primera vez que llegó al sitio #[i web].
      .col-md.tarjeta.colorcol2.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img17.svg', alt='Imagen decorativa')
        p.text-center La manera en que progresa hasta tener la primera        
      .col-md.tarjeta.colorcol1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img18.svg', alt='Imagen decorativa')
        p.text-center Continúa con la acción de compra.
      .col-md.tarjeta.colorcol2.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img19.svg', alt='Imagen decorativa')
        p.text-center Servicio posventa.
      .col-md.colorcol1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img20.svg', alt='Imagen decorativa')
        p.text-center Correos electrónicos de bienvenida, etc.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          p La mejor manera de personalizar el mapa, de identificar y ajustar las etapas es hablando con los clientes. Para ello, se puede realizar una investigación del público objetivo para entender cómo efectúan la toma de decisiones a la hora de comprar productos. Es necesario comprender a los clientes y sus necesidades para poder diseñar el mapa. Un mapa bien diseñado con la investigación correcta proporciona datos estratégicos para mejorar notablemente la CX en la empresa.
        p Cuando se crea de forma correcta el diseño de un mapa de experiencia del cliente ayuda a:
    
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="flip-right")
      .tarjeta.colortarj-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema1/img21.svg' alt='AvatarTop')
          .col-12
            p.text-center Incrementar el compromiso del cliente a través de la optimización de canales.
      .tarjeta.colortarj-2.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema1/img22.svg' alt='AvatarTop')
          .col-12
            p.text-center Identificar y perfeccionar los Momentos de verdad (MoT) en la experiencia del usuario (UX).
      .tarjeta.colortarj-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema1/img23.svg' alt='AvatarTop')
          .col-12
            p.text-center Erradicar incompetencias en los momentos o puntos de contacto.
      .tarjeta.colortarj-2.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema1/img24.svg' alt='AvatarTop')
          .col-12
            p.text-center Evolucionar de una perspectiva que se centra en el negocio a una que se centra en el cliente.
      .tarjeta.colortarj-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema1/img25.svg' alt='AvatarTop')
          .col-12
            p.text-center Unir los departamentos y cerrar las brechas entre ellos.
      .tarjeta.colortarj-2.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema1/img26.svg' alt='AvatarTop')
          .col-12
            p.text-center Crear campañas de #[i marketing] oportunas para mejorar la identidad.
      .tarjeta.colortarj-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema1/img27.svg' alt='AvatarTop')
          .col-12
            p.text-center Comprender los eventos que causaron anomalías en la información cuantitativa actual.
      .tarjeta.colortarj-2.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema1/img28.svg' alt='AvatarTop')
          .col-12
            p.text-center Fijar el compromiso en varios puntos de contacto con el cliente para acrecentar la rendición de cuentas de los empleados.
      .tarjeta.colortarj-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema1/img29.svg' alt='AvatarTop')
          .col-12
            p.text-center Poder evaluar el retorno de la inversión (ROI) de futuras inversiones en la experiencia del usuario y del cliente.
    .row.align-items-center.mb-4
      .col-auto.pe-0.desktop(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema1/imgtitulo.svg').m-auto
      .col-auto.bg-c8(style="z-index:1;color:#4B6280")
        .p-2
          h3.mb-0 Pasos para crear un mapa de la experiencia del cliente
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Para poder diseñar un mapa de la experiencia del cliente se requiere conocerlo profundamente. Este nivel de alta comprensión significa que la marca debe conocer la experiencia de su cliente. Una vez conocido lo que el cliente siente, observa, oye y toca en cada interacción, se tiene la base para comenzar a diseñar un mapa y medir la UX.
        p Se puede diseñar un mapa de la UX siguiendo estos pasos:
    
    TabsB.color-primario
      .py-4.py-md-5(titulo="Paso 1" :icono="require('@/assets/curso/temas/tema1/img30.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Realizar una investigación
            p Antes de comenzar el diseño del mapa es vital conocer el cliente. Es así como se puede conseguir la información requerida para continuar con el proceso. Las encuestas son herramientas que ayudan mucho para saber quién es y cuál es su necesidad en el mercado.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img34.jpg', alt='Imagen decorativa')
      .py-4.py-md-5(titulo="Paso 2" :icono="require('@/assets/curso/temas/tema1/img31.svg')")
        .row          
          .col-md-6
            h4 Seleccionar el #[i buyer] persona
            p Poseer un #[i Buyer] Persona ayuda a tener una representación ideal del cliente final de la marca. Se puede diseñar basándose en datos demográficos, actitudes, hábitos, necesidades y deseos. De esta manera, es más fácil ponerse en la piel del público objetivo. Usar un #[i Buyer] Persona permite alcanzar los objetivos empresariales y aumentar las ventas.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img35.jpg', alt='Imagen decorativa')
      .py-4.py-md-5(titulo="Paso 3" :icono="require('@/assets/curso/temas/tema1/img32.svg')")
        .row
          .col-md-6
            h4 Identificar los puntos de contacto con el cliente
            ul.lista-ul
              li
                i.fas.fa-angle-right
                | Contacto antes de encontrar tu negocio: Preguntar al cliente en qué medio encontró la empresa, marca o productos.
              li
                i.fas.fa-angle-right
                | Contacto mientras se encuentran en tu negocio: Descubrir por qué visitan la empresa (presencial o virtual), la razón, las necesidades que tuvo y el porqué de la compra.
              li
                i.fas.fa-angle-right
                | Contacto después de comprar en tu negocio: Conocer cómo fue la experiencia la marca, si pudo solucionar el problema, si fue bueno el servicio al cliente.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img36.jpg', alt='Imagen decorativa')
      .py-4.py-md-5(titulo="Paso 4" :icono="require('@/assets/curso/temas/tema1/img33.svg')")
        .row
          .col-md-6
            h4 Responder preguntas orientadoras relacionadas con el cliente
            p ¿A dónde va cuando tiene una necesidad? (La necesidad que la marca resuelve)
            p ¿Cómo descubrió la solución a su problema? 
            p ¿Qué lo motivó a comprar el producto? 
            p ¿Qué hace cuando requiere algo más de la empresa, después de realizar la compra? 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img37.jpg', alt='Imagen decorativa')
      .py-4.py-md-5(titulo="Paso 5" :icono="require('@/assets/curso/temas/tema1/img33.svg')")
        .row
          .col-md-6
            h4 Visualizar el mapa y analizar los resultados
            p Comprender los objetivos del negocio en general. Se necesita meditar si los clientes satisficieron las necesidades con la compra del producto, en dónde se pueden hacer correcciones, quiénes son la competencia y en qué momento del #[i Customer Journey] los clientes se retiran. Es vital visualizar estos datos, de lo contrario no se podría hacer un análisis de información profunda de cada uno de los puntos registrados en el mapa.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img37.jpg', alt='Imagen decorativa')
    Separador
    .row
      .col-xl-12       
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.2 Comunicación estratégica con clientes
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Haeske & Raabe De Fonrodona (2016) mencionan que escuchando a los clientes es la forma más segura para saber qué necesitan. Brindar canales o medios que faciliten el contacto con la empresa es vital para el diseño de estrategias comunicativas con el cliente. Lo cierto es que la comunicación lo es todo en el tema de las interacciones de servicio al cliente. Los expertos tienen que dar uso a sus habilidades y, además, a herramientas apropiadas para vincularse con los clientes de una forma natural, para que se sientan satisfechos, serenos, confiados y con credibilidad hacia la marca.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img38.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Siempre se debe seguir un plan de comunicación poderoso, sin importar si el cliente llega a la marca porque posee algún problema con ella o porque solicita asesoría en una compra. Una estrategia de comunicación con el cliente, diseñada de forma oportuna, puede fidelizarlo, además de agregarle valor para la marca.
    
    .row.align-items-center.mb-4
      .col-auto.pe-0.desktop(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema1/imgtitulo.svg').m-auto
      .col-auto.bg-c8(style="z-index:1;color:#4B6280")
        .p-2
          h3.mb-0 Pasos para diseñar una estrategia de comunicación comercial efectiva con el cliente
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Una estrategia de comunicación con el cliente es una ruta de navegación que formula cómo planear la transmisión de un mensaje específico al cliente objetivo por medio de distintos canales. Los tres (3) factores primordiales a tener en cuenta siempre en una estrategia de comunicación con el cliente son:
    
    .row.mb-5
      .col-md-6.col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img39.svg' alt='')
          .tarjeta.color-secundario.colortarj-1
            .p-4
              h2.text-center Mensaje
              p Qué se quiere comunicar.

      .col-md-6.col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img40.svg' alt='')
          .tarjeta.color-secundario.colortarj-1
            .p-4
              h2.text-center Objetivo
              p A quién se le desea comunicar.

      .col-md-6.col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img41.svg' alt='')
          .tarjeta.color-secundario.colortarj-1
            .p-4
              h2.text-center Medio
              p A través de qué canales se desea comunicar.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p Para que la comunicación sea un éxito, los tres (3) factores se deben complementar entre sí. Luego de concretar al público meta, de tener claro cuál es el mensaje que se desea enviar y de saber qué canales de comunicación usar, se continúa con la estrategia de comunicación, lo que integra la decisión sobre cómo se divulgarán los productos, cómo administrar la comunicación con los clientes a través de los canales elegidos para interactuar con los clientes, cuál será el lenguaje que la marca va a acoger y cuál será la dirección para lograr la satisfacción de las necesidades de los clientes.
        p Poseer un plan de comunicación estratégico es vital para que el mensaje se pueda transmitir de forma eficiente y precisa, que impida preocupaciones futuras. Es así como se pueden prever las dificultades y problemáticas que puedan aparecer en el camino.

    .row.align-items-center.mb-4
      .col-auto.pe-0.desktop(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema1/imgtitulo.svg').m-auto
      .col-auto.bg-c8(style="z-index:1;color:#4B6280")
        .p-2
          h3.mb-0 Cómo tener una comunicación efectiva con el cliente
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Tener una comunicación efectiva hace parte de la satisfacción del cliente y por eso, se debe certificar que se haga realidad. Los siguientes son algunas recomendaciones para lograrlo:
    
    .row.mb-5
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h5 Descubrir lo que los clientes quieren y medir su satisfacción. 
              p Escuchar a los clientes actuales es una de las excelentes prácticas de la atención al cliente. Y qué mejor forma de hacerlo que desarrollando un análisis de su nivel de satisfacción con la marca. La medición de la satisfacción del cliente permite la identificación de las fortalezas y debilidades de la estrategia, además de mostrar el éxito de los esfuerzos para mejorar la CX con la marca.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img42.png')})`}")
            
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario.tarjmovil(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h5 Ponerse en el lugar del cliente
              p La satisfacción del cliente se basa en la empatía. Si el cliente se ha contactado con la marca, es porque requiere que soluciones, algún problema o necesidad de forma rápida y efectiva. 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img43.png')})`}")
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-secundario.tarjmovil(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h5 Usar un lenguaje fácil de entender
              p Se requiere tener claridad con el cliente. El lenguaje debe ser fácil de entender, y al mismo tiempo, empático. De esta forma, se pueden crear enlaces más fuertes y leales con los clientes.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img44.png')})`}")
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Dando continuidad a las dinámicas propias de la comunicación, Castañeda (2016) dice que, además de lograr una estrategia eficiente es importante hacer una planeación efectiva. Los siguientes son ocho (8) pasos para planear la comunicación con el cliente de manera exitosa:
    .titulo-sexto.color-acento-contenido.offset-1
      h5 Figura 3.
      span  #[i  8 pasos para construir una estrategia de comunicación]
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.desktop
        figure
          img(src='@/assets/curso/temas/tema1/img45.svg', alt='En la figura 3 se muestran los 8 pasos para construir una estrategia de comunicación, inicia con el análisis y termina con el monitoreo y evaluación, se describe a continuación.')
          figcaption Nota. Imagen adaptada de 8 pasos para construir una Estrategia de Comunicación. Viñas (2016).
      .col-lg-12.movil
        figure
          img(src="@/assets/curso/temas/tema1/img45_1.svg", alt="En la figura 3 se muestran los 8 pasos para construir una estrategia de comunicación, inicia con el análisis y termina con el monitoreo y evaluación, se describe a continuación.")
          figcaption Nota. Imagen adaptada de 8 pasos para construir una Estrategia de Comunicación. Viñas (2016).
    
    .tarjeta.tarjeta--azul.colorcol1.p-4.mb-5
      PasosB.color-acento-contenido
        .row(titulo="Paso 1")
          .col-md-6.mb-4.mb-md-0.col-ipad
            h4 Análisis del contexto
            p Se debe desarrollar un análisis sobre los factores políticos, socioculturales, económicos, ambientales, legales y tecnológicos que tienen relación al impacto que pueden tener en el negocio. Para esto se puede usar el modelo PESTEL, que si está bien construido, permite prever cómo se va a mover el mercado para planear las acciones de mercadeo que se pueden desarrollar.
          .col-md-6.col-ipad
            figure
              img(src="@/assets/curso/temas/tema1/img46.jpg", alt="Imagen decorativa")
        .row(titulo="Paso 2")
          .col-md-6.mb-4.mb-md-0.col-ipad
            h4 Modelo de Comunicación
            p Con base en el contexto empresarial, se deben establecer los protocolos de comunicación para tomar decisiones, tener claro cómo funciona la resolución de problemas, la promoción de transparencia, la gobernanza, la rendición de cuentas y otros que pueden variar dependiendo del rótulo del negocio. Para que el protocolo sea funcional tiene que ser simple, debe transmitir cómo funciona la comunicación al interior del negocio y debe instaurar tiempos.
          .col-md-6.col-ipad
            figure
              img(src="@/assets/curso/temas/tema1/img47.jpg", alt="Imagen decorativa")
        .row(titulo="Paso 3")
          .col-md-6.mb-4.mb-md-0.col-ipad
            h4 Roles y Responsabilidades
            p Al establecer el modelo de comunicación, se hace necesaria una asignación de funciones al equipo interdisciplinario para que trabajen en el proceso de comunicaciones. Por ejemplo, un individuo que puede manejar todos los aspectos técnicos del negocio, pero si no tiene carisma, es mejor no elegirlo para esta función. Pese a que es la persona que mejor analiza y explica la situación, elegirlo como vocero sería un error. Lo mejor es que acompañe o asesore a quien se encargue de esta labor.
          .col-md-6.col-ipad
            figure
              img(src="@/assets/curso/temas/tema1/img48.jpg", alt="Imagen decorativa")
        .row(titulo="Paso 4")
          .col-md-6.mb-4.mb-md-0.col-ipad
            h4 Audiencias y Públicos
            p “Audiencia” hace referencia a aquellos individuos que estarán expuestos a los medios de comunicación usados por la marca; mientras que el “Público” es el cliente objetivo específico al que se desea informar y que se interesa por la empresa, siendo muy importante porque posee la peculiaridad de participar de manera frecuente en redes sociales. Debe ser clasificado según:
            ol.lista-ol
              li
                span.text-bold 1- 
                | Necesidades.
              li
                span.text-bold 2- 
                | Intereses.
              li
                span.text-bold 3- 
                | Sinergias comunicacionales. 
            p Siempre se debe recordar que esto tiene que investigarse, o sea, que no se inventen datos.

          .col-md-6.col-ipad
            figure
              img(src="@/assets/curso/temas/tema1/img49.jpg", alt="Imagen decorativa")
        .row(titulo="Paso 5")
          .col-md-6.mb-4.mb-md-0.col-ipad
            h4 Lineamientos
            p Se refiere a los rasgos frecuentes y primordiales que admiten la definición de una directriz o un plan que va a ayudar al mejoramiento de la reputación empresarial; no confundir con los objetivos de operaciones. Por ejemplo, un lineamiento puede ser certificar que los inversionistas sepan sobre las ventajas de trabajar con la empresa; y un objetivo expone cómo conseguir ese lineamiento en marcos de acción desarrollados a corto plazo.
          .col-md-6.col-ipad
            figure
              img(src="@/assets/curso/temas/tema1/img50.jpg", alt="Imagen decorativa")
        .row(titulo="Paso 6")
          .col-md-6.mb-4.mb-md-0.col-ipad
            h4 Resultados
            p Instaurar los objetivos de forma cuantificable, tanto en cantidad como calidad; esto es primordial porque así se pueden medir los impactos positivos o negativos que la marca va logrando. Estos resultados se deben alinear con los objetivos de la marca y provienen de lo cometido en la fase de lineamientos.
          .col-md-6.col-ipad
            figure
              img(src="@/assets/curso/temas/tema1/img51.jpg", alt="Imagen decorativa")
        .row(titulo="Paso 7")
          .col-md-6.mb-4.mb-md-0.col-ipad
            h4 Tácticas y Acciones
            p Esta es una etapa operativa de la estrategia y se centra en los planes de comunicación, que sujetarán los objetivos de operaciones para lograr los lineamientos comunicacionales. Estos planes deben ser desarrollados cada año para actualizar el contexto e introducir los nuevos medios comunicacionales que la empresa vaya eligiendo. Por otro lado, se deben enfocar en la constante información, en establecer diálogos vinculantes y disminuir los riesgos.
          .col-md-6.col-ipad
            figure
              img(src="@/assets/curso/temas/tema1/img52.jpg", alt="Imagen decorativa")
        .row(titulo="Paso 8")
          .col-md-6.mb-4.mb-md-0.col-ipad
            h4 Monitoreo y Evaluación
            p Es el método y las herramientas que se usarán para hacer medición sobre el impacto de cada acción de comunicación. Es vital no variar el método porque de esta forma se puede hacer comparación del progreso. Además, con los indicadores hallados se puede saber cuándo reorientar las acciones comunicacionales y establecer si se alcanzaron los resultados trazados.
          .col-md-6.col-ipad
            figure
              img(src="@/assets/curso/temas/tema1/img53.jpg", alt="Imagen decorativa")
    Separador
    .row
      .col-xl-12       
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.3 Los clientes y el ecosistema digital
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Quijano (2018) expresa que el cliente digital, también conocido como cliente 2.0, es el perfil de comprador #[i web] que ejecuta buena parte de sus compras a través de internet. Aunque, en ocasiones, no termine comprando de forma digital. Posee unas características específicas, como, por ejemplo, tener un ciclo de compra que pasa por la revisión de muchos datos antes de darle clic al botón de comprar y tener unas necesidades muy concretas y personalizadas; estas necesidades deben ser enfocadas por las empresas en los procesos de venta, servicio y atención al cliente. Las siguientes son algunas de las principales características del cliente digital:
    
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="flip-right")
      .tarjeta.colortarj-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema1/img54.svg' alt='AvatarTop')
          .col-12
            h5 Se informa antes de formalizar una compra
            p Visita #[i blogs], redes sociales, compara productos y lee bastante sobre lo que le gusta.
      .tarjeta.colortarj-2.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema1/img55.svg' alt='AvatarTop')
          .col-12
            h5 Es inteligente
            p Las marcas tienen el reto de alcanzar a un cliente que se informa y que es menos inmune a la publicidad tradicional.
      .tarjeta.colortarj-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema1/img56.svg' alt='AvatarTop')
          .col-12
            h5 Es riguroso y exigente
            p Desea que la atención sea buena, personalizada y rápida. No es de los que esperan y si en algunos clics no consigue lo que necesita se irá pronto a otro sitio #[i web].
      .tarjeta.colortarj-2.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema1/img57.svg' alt='AvatarTop')
          .col-12
            h5 Es diferente
            p Porque compra digitalmente no significa que no quiera que lo vean, lo que quiere es ahorrar tiempo y de pronto dinero. Requiere de una personalización máxima como cliente.
      .tarjeta.colortarj-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema1/img58.svg' alt='AvatarTop')
          .col-12
            h5 De difícil retención
            p Se hace compleja su fidelización porque siempre quiere experimentar cosas nuevas. Retenerlo no es un trabajo fácil. Pero, de hacerlo, será un excelente cliente.
      .tarjeta.colortarj-2.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema1/img58.svg' alt='AvatarTop')
          .col-12
            h5 Socializa
            p Le gusta compartir sus experiencias, bien sea a través de las redes sociales, un #[i blog] o el Whatsapp. Viraliza lo que le gusta de una marca, especialmente cuando tiene experiencias significativas. Pero si siente algo malo por parte de la marca (servicio, atención, garantía, etc.), también lo hará saber.
      .tarjeta.colortarj-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema1/img60.svg' alt='AvatarTop')
          .col-12
            h5 Edades
            p Tiene un rango de edad entre los 25 y 49 años. Vive en ciudades grandes o medias y posee algún tipo de estudio universitario.
      .tarjeta.colortarj-2.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema1/img61.svg' alt='AvatarTop')
          .col-12
            h5 Interacción
            p Tiene interacción tanto online como #[i offline]. Es posible que busque un producto de manera presencial para luego comprando por la #[i web], o viceversa.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Con base en los siguientes datos las marcas tienen que ajustar sus estrategias de venta y atención al cliente hacia nuevas opciones de interacción de tal manera que se fortalezca el negocio y el #[i engagement]:
      
    SlyderB.slyder-b-img.mb-5.p-5(:datos="datosSlyder")
    
    .row.align-items-center.mb-4
      .col-auto.pe-0.desktop(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema1/imgtitulo.svg').m-auto
      .col-auto.bg-c8(style="z-index:1;color:#4B6280")
        .p-2
          h3.mb-0 El ecosistema digital
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Quijano (2018) esclarece que los avances digitales y tecnológicos han evolucionado constantemente los procesos comerciales y han posibilitado que las pequeñas empresas tengan herramientas para desarrollar una mejor gestión. Un ecosistema digital es un conjunto de Tecnologías de la Información y la Comunicación (TIC) que se interconectan entre sí. El siguiente video permite entender con mayor claridad el concepto y la importancia del ecosistema digital.

    .row.justify-content-center.align-items-center.md-5.mb-5
      .col-lg-12(data-aos="fade-left")     
        figure
          .video          
            iframe(width="560" height="315" src="https://www.youtube.com/embed/T8R9m9ZTcMw" title="Ecosistema digital" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen)
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p En el ecosistema digital se encuentran todas aquellas aplicaciones disponibles en internet y que pueden ser usadas por las marcas para tramitar sus actividades a través de la #[i web]. El correo electrónico, sitio #[i web], redes sociales, chat, #[i blog], foro, ofimática y CRM son algunos de los ejemplos. Entre otras cosas, estas aplicaciones permiten:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.colorcajon.p-4.mb-4
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema1/img70.svg').m-auto
            .col-lg-8
              ul.lista-ul
                li
                  i.fas.fa-circle.fa-xs(style="color:#33ECE0")
                  | Poseer una comunicación interna mejor, con proveedores y clientes.
                li
                  i.fas.fa-circle.fa-xs(style="color:#33ECE0")
                  | Tener eficiencia en los procesos.
                li
                  i.fas.fa-circle.fa-xs(style="color:#33ECE0")
                  | Mayor productividad.
                li
                  i.fas.fa-circle.fa-xs(style="color:#33ECE0")
                  |	Reducir los costos.
                li
                  i.fas.fa-circle.fa-xs(style="color:#33ECE0")
                  | Tener información sobre los departamentos de la empresa.
                li
                  i.fas.fa-circle.fa-xs(style="color:#33ECE0")
                  |	Automatizar labores.
                li
                  i.fas.fa-circle.fa-xs(style="color:#33ECE0")
                  | Ahorrar tiempo para dedicarse en acciones que aporten valor al cliente.
                li
                  i.fas.fa-circle.fa-xs(style="color:#33ECE0")
                  | Acelerar la creación y lanzamiento de nuevos productos.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p Existen distintas formas para la creación de un ecosistema digital; de ellas se destacan las siguientes dos:
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.colorcol1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img71.svg', alt='')
        h2.text-center Locales
        p Hacen referencia a los programas que se deben instalar en los computadores. Por lo regular, necesitan mantenerse actualizados en cada equipo. Su naturaleza local impide acceder a la información desde otros equipos o ubicaciones (a no ser que el equipo tenga conexión #[i bluetooth]).
      .col-md.tarjeta.colortarj-2.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img72.svg', alt='')
        h2.text-center Basados en la nube
        p Hace referencia a aplicaciones que residen en la nube y se puede acceder a ellas sin importar en dónde se encuentre y desde cualquier dispositivo que tenga conexión a internet. Por lo tanto, no necesitan instalarse y se conservan actualizadas de forma permanente, sin necesidad de tener que descargar archivos o realizar alguna operación adicional. Otro beneficio es el respaldo porque toda la información queda almacenada en servidores externos. Se puede estar seguro que no se pierde la información, aunque el equipo sufra un accidente o se lo roben. 
        p El ecosistema digital es el favorito de muchas marcas porque les permite trabajar a distancia, no tener que instalar ningún #[i software] o aplicación y, además, acceder a la información cuando se desee, la cual está protegida en la #[i web].
    
    .row.align-items-center.mb-4
      .col-auto.pe-0.desktop(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema1/imgtitulo.svg').m-auto
      .col-auto.bg-c8(style="z-index:1;color:#4B6280")
        .p-2
          h3.mb-0 Elementos de un ecosistema digital
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Para crear un ecosistema digital requiere contar con herramientas específicas direccionadas a lograr el mismo objetivo.
      
    SlyderB.slyder-b-img.mb-5.p-5(:datos="datosSlyder2")
    
    .row.align-items-center.mb-4
      .col-auto.pe-0.desktop(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema1/imgtitulo.svg').m-auto
      .col-auto.bg-c8(style="z-index:1;color:#4B6280")
        .p-2
          h3.mb-0 Creación de un ecosistema digital

    TabsB.color-primario
      .py-4.py-md-5(titulo="Fase 1" :icono="require('@/assets/curso/temas/tema1/img80.svg')")
        .row         
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img84.jpg', alt='Imagen decorativa')
          .col-md-6.mb-4.mb-md-0
            h4 Elige el tipo de ecosistema utilizado
            p Se hace definición de cuáles son los colectivos que van a participar en el proceso, según los distintos tipos de ecosistemas que se logren desarrollar. Por ejemplo, empresas (fabricantes, proveedoras, distribuidoras); líderes, los creativos de una empresa; productos o servicios; segmentos de clientes.
      .py-4.py-md-5(titulo="Fase 2" :icono="require('@/assets/curso/temas/tema1/img81.svg')")
        .row         
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img85.jpg', alt='Imagen decorativa')
          .col-md-6.mb-4.mb-md-0
            h4 Organiza el entorno laboral
            p Para enfrentar los cambios, es necesario contar con un entorno laboral en el que todo el equipo de trabajo se encuentre alineado y enfocado al logro de resultados. Resulta fundamental para poder desarrollar una estrategia digital con un mismo hilo conductor. Parte de construir el entorno ideal, también depende de la inversión que haga la empresa en nuevas tecnologías que permitan adentrarse en el mundo digital de constante evolución.
      .py-4.py-md-5(titulo="Fase 3" :icono="require('@/assets/curso/temas/tema1/img82.svg')")
        .row         
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img86.jpg', alt='Imagen decorativa')
          .col-md-6.mb-4.mb-md-0
            h4 Implementa la orientación al cliente
            p Cultivar las buenas relaciones con los clientes también es un paso importante para poder crear un ecosistema digital. En estos tiempos en los que el mercado es tan competitivo y cambiante, conviene enfocarse en los intereses del cliente. Saber escuchar, proponer soluciones ante sus preocupaciones y cubrir sus necesidades para fidelizarlo a la marca.
      .py-4.py-md-5(titulo="Fase 4" :icono="require('@/assets/curso/temas/tema1/img83.svg')")
        .row         
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img87.jpg', alt='Imagen decorativa')
          .col-md-6.mb-4.mb-md-0
            h4 Promueve agilidad en la gestión
            p El éxito de un negocio o una marca también depende de la capacidad que tenga de responder con agilidad ante los cambios o retos que se presenten. Para poder crear y mantener un ecosistema digital, es necesario reforzar las capacidades que tenga la empresa y sus empleados de adaptarse a las diferentes exigencias del mercado, que a su vez están alineadas a las necesidades y gustos de los clientes o consumidores. 
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    datosSlyderEjemplo: [
      {
        titulo: 'Herramienta de fidelización de clientes',
        texto:
          'Cada vez que el consumidor interactúa con la marca posee la oportunidad de crear una percepción propia. Cada contacto se convierte, entonces, en una opción para lograr su fidelidad y prolongar la relación.',
        imagen: require('@/assets/curso/temas/tema1/img4.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Homogenización de procesos',
        texto:
          'Para producir experiencias sólidas y lograr que las interacciones sean estándares y coherentes entre sí, se requiere formalizar cada contacto que se tenga con el cliente. Lo que va a permitir la identificación de mejoras de forma más organizada.',
        imagen: require('@/assets/curso/temas/tema1/img5.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Escucha continua del cliente',
        texto:
          'Si se plantea el CX como herramienta, obliga a conocer mejor el público objetivo y a administrar su experiencia. Esto involucra hacer una medición sobre la imagen del cliente cada vez que interactúe con la marca y, además, estar siempre vigilante.',
        imagen: require('@/assets/curso/temas/tema1/img6.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Gestión de los momentos críticos del servicio',
        texto:
          'El CX tiene una ventaja importante, a través del mapa del viaje del cliente se identifican los “Momentos de la verdad” (MoT: <em>moments of truth</em>). Se trata de los momentos que poseen mayor impacto para el cliente y, también, para la marca. Esto permite centrar energías en los procesos más delicados.',
        imagen: require('@/assets/curso/temas/tema1/img7.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Guiar los procesos, decisiones y conductas de los empleados',
        texto:
          'Si se define una estrategia clara y transversal a la marca, ayudará a direccionar la acción donde exista un interés por lograr visibilidad. Esclareciendo qué es lo más importante para el éxito de la marca y, también, para la experiencia de los clientes.',
        imagen: require('@/assets/curso/temas/tema1/img8.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
    datosSlyder: [
      {
        titulo: '',
        texto:
          'Utilizar los datos para conocer qué quiere el cliente. La analítica ayuda para tener un rastro digital porque entrega información importantísima para mejorar la forma de acercarse y comunicarse con el cliente.',
        imagen: require('@/assets/curso/temas/tema1/img62.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          'Mejorar la CX para acelerar la compra. Es mejor que todo sea claro y fácil',
        imagen: require('@/assets/curso/temas/tema1/img63.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          'Integrar sistemas virtuales que faciliten todo el proceso de compraventa. Se debe hacer una inversión en digitalización.',
        imagen: require('@/assets/curso/temas/tema1/img64.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          'Brindar estrategias que puedan unir los mundos <em>offline</em> y <em>online</em>.',
        imagen: require('@/assets/curso/temas/tema1/img65.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto: 'Personalizar al máximo el trato y la promoción del producto.',
        imagen: require('@/assets/curso/temas/tema1/img66.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          'Recordar que la mayoría de las compras por internet, en la actualidad, se hacen por medio de la telefonía celular. Por eso es vital adaptar los productos a este sistema de comunicación.',
        imagen: require('@/assets/curso/temas/tema1/img67.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto: 'Ser siempre una marca honesta y transparente.',
        imagen: require('@/assets/curso/temas/tema1/img68.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          'Eficiencia y prontitud. Es vital tener activos varios medios de comunicación con el cliente digital.',
        imagen: require('@/assets/curso/temas/tema1/img69.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
    datosSlyder2: [
      {
        titulo: 'Sitio <em>web</em>',
        texto:
          'Casi todos los ecosistemas digitales se centran primordialmente en el sitio <em>web</em> de una marca, por lo que es imperativo poner mucho cuidado en esta herramienta. Es vital tener una buena organización del contenido, criterios unificados en el diseño y un impacto visual en el cliente. En el tema del contenido, se debe definir qué tipo de información se desea compartir a los clientes y cómo atraer su atención.',
        imagen: require('@/assets/curso/temas/tema1/img73.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '<em>Branding</em> / Marca',
        texto:
          'El diseño de la marca, la definición de la empresa y la manera en que se da conocer al cliente, son parte fundamental de las herramientas que conforman el ecosistema digital. A través de la marca se puede transmitir el mensaje de lo que se desea vender.',
        imagen: require('@/assets/curso/temas/tema1/img74.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Objetivos',
        texto:
          'Cualquiera que sea el proyecto se requiere contar con objetivos precisos y bien establecidos. En el <em>marketing</em> digital, por lo general, se establecen objetivos puntuales como, por ejemplo, diseñar una pauta publicitaria, mejorar la presencia <em>web</em> y la visibilidad, aumentar la tasa de conversión, definir la imagen para la marca, fidelizar el público objetivo o incrementar las ventas.',
        imagen: require('@/assets/curso/temas/tema1/img75.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Medios digitales y otros dispositivos',
        texto:
          'Otro factor importante para poder tener un ecosistema digital son los medios electrónicos a través de los cuales la marca tendrá presencia, como, por ejemplo, el sitio <em>web</em>, <em>blog</em>, correo electrónico, redes sociales y demás aplicaciones. Hay que analizar cuáles son los dispositivos a través de los cuales los clientes acceden, y, por otro lado, tener un excelente CRM (<em>Customer Relationship Management</em>) para que la empresa pueda gestionar su relación con los clientes.',
        imagen: require('@/assets/curso/temas/tema1/img76.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'SEO',
        texto:
          'Una estructura SEO (<em>Search Engine Marketing</em> – posicionamiento natural y orgánico) bien trabajada se consigue a través del uso de palabras clave, información valiosa, las meta descripciones y un contenido con una organización semántica sólida; esto ayudará a lograr un mayor alcance.',
        imagen: require('@/assets/curso/temas/tema1/img77.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'SEM',
        texto:
          'La estructura SEM (posicionamiento a través de campañas publicitarias) se desarrolla para públicos más específicos creando anuncios atractivos pagados, con los que es posible alcanzar los primeros lugares en los buscadores de internet.',
        imagen: require('@/assets/curso/temas/tema1/img78.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Analítica <em>web</em>',
        texto:
          'Hacer una medición de la gestión digital de la marca es un principio básico para poder comprender los distintos panoramas que se pueden exhibir. Es otra estrategia de <em>marketing</em> digital que entrega indicadores necesarios para la toma de decisiones y, posteriormente, desarrollar un plan de mejoramiento para continuar creciendo. <p>- ¿Está creciendo el ecosistema digital?</p><p>- ¿Está fallando el ecosistema digital?</p><p>- ¿Hay algo que pueda tener un cambio para mejorar?</p>',
        imagen: require('@/assets/curso/temas/tema1/img79.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
