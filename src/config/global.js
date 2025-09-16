export default {
  global: {
    Name: 'Fundamentos del presupuesto organizacional y su estructura técnica',
    Description:
      'Este componente introduce al aprendiz en los conceptos fundamentales del presupuesto empresarial. Se exploran los tipos de presupuestos, sus componentes, así como los conceptos contables básicos requeridos para su elaboración técnica. El enfoque está en interpretar la información financiera clave que sirve como base para estructurar presupuestos coherentes con las necesidades organizacionales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
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
        titulo: 'Presupuesto organizacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición y tipos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Componentes y etapas',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Contabilidad aplicada al presupuesto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Conceptos y cuentas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Principios y normativa',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Ingresos y egresos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Definición',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Clases',
            hash: 't_3_2',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
      tema: 'Presupuesto organizacional',
      referencia:
        'Burbano Ruiz, J. E. (2011). <em>Presupuestos: un enfoque estratégico, gestión y control de recursos</em> (4.a ed.). McGraw‑Hill Latinoamericana.',
      tipo: 'Capítulo de libro (Anexo)',
      link: '',
    },
    {
      tema: 'Presupuesto organizacional',
      referencia:
        'YouTube. (2020). <em>Presupuestos empresariales | 1. Introducción a ... </em>[Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=vb2UceFVZSg',
    },
  ],
  glosario: [
    {
      termino: 'Flujo de caja',
      significado:
        'movimiento de entrada y salida de efectivo en un periodo específico, fundamental para evaluar la liquidez y capacidad de pago de una organización.',
    },
    {
      termino: 'Gastos operativos',
      significado:
        'costos necesarios para el funcionamiento diario de una empresa, como sueldos, servicios, suministros y mantenimiento.',
    },
    {
      termino: 'Ingresos operacionales',
      significado:
        'recursos económicos que obtiene la empresa por la venta de bienes o la prestación de servicios que constituyen su actividad principal.',
    },
    {
      termino: 'Partida presupuestal',
      significado:
        'unidad o categoría específica dentro de un presupuesto que representa un gasto o ingreso estimado, clasificada según su naturaleza o función.',
    },
    {
      termino: 'Planeación financiera',
      significado:
        'herramienta financiera que permite proyectar ingresos, gastos e inversiones de una organización en un período determinado, facilitando la planificación, el control y la toma de decisiones.',
    },
    {
      termino: 'Presupuesto',
      significado:
        'herramienta financiera que permite proyectar ingresos, gastos e inversiones de una organización en un período determinado, facilitando la planificación, el control y la toma de decisiones.',
    },
    {
      termino: 'Presupuesto maestro',
      significado:
        'conjunto integrado de presupuestos operativos y financieros que presentan un panorama global y coordinado de las actividades económicas de una organización.',
    },
    {
      termino: 'Supuestos presupuestales',
      significado:
        'estimaciones o condiciones previas que se consideran al elaborar el presupuesto, como tasas de crecimiento, inflación o comportamiento del mercado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Burbano Ruiz, J. E. (2011). Presupuestos: un enfoque estratégico, gestión y control de recursos (4.ª ed.). McGraw-Hill Latinoamericana.',
      link: '',
    },
    {
      referencia:
        'León García, O. (2009). Administración financiera. Prensa Moderna Editores.',
      link: '',
    },
    {
      referencia:
        'Ortiz Anaya, H. (2018). Análisis financiero aplicado. Universidad Externado.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje SENA. (2023). Clasificación Nacional de Ocupaciones. Diccionario ocupacional e índice alfabético de denominaciones ocupacionales. ',
      link: 'https://observatorio.sena.edu.co/clasificacion/cno',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2015). Sistema Nacional de Formación para el Trabajo. SENA. ',
      link:
        'https://competencias.sena.edu.co/page?3,plantilla,productos-aprobados,O,es,0',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
}
