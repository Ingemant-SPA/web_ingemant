export const company = {
  name: 'Ingemant SPA',
  tagline: 'Ingenieria aplicada para continuidad operacional industrial.',
  email: 'contacto@ingemantspa.com',
  phone: '+56 9 0000 0000',
  location: 'Puerto Montt, Chile',
}

export const navItems = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Proyectos', to: '/proyectos' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Equipo', to: '/equipo' },
  { label: 'Contacto', to: '/contacto' },
]

export const services = [
  {
    title: 'Aire Comprimido',
    description:
      'Diagnostico, montaje, mejora y mantenimiento de redes de aire comprimido para procesos criticos.',
    bullets: ['Auditorias de fugas', 'Optimización de consumo', 'Soporte preventivo y correctivo'],
  },
  {
    title: 'Oxigenacion para Cultivo',
    description:
      'Soluciones para plantas de tratamiento y centros de cultivo con foco en estabilidad operacional.',
    bullets: ['Integracion de equipos', 'Control de parametros', 'Puesta en marcha y comisionamiento'],
  },
  {
    title: 'Automatizacion',
    description:
      'Diseño e integracion de automatizacion para reducir riesgo operativo y aumentar disponibilidad.',
    bullets: ['Tableros y control', 'Integracion PLC/SCADA', 'Estandarizacion de procesos'],
  },
  {
    title: 'Mantenimiento Industrial',
    description:
      'Estrategias de mantenimiento basadas en confiabilidad y gestion de activos.',
    bullets: ['Planes preventivos', 'Intervenciones correctivas', 'Mejora continua y reportabilidad'],
  },
]

export const metrics = [
  { value: '24/7', label: 'Respuesta operativa' },
  { value: '4', label: 'Lineas de servicio clave' },
  { value: '100%', label: 'Enfoque en seguridad y trazabilidad' },
]

export const aboutHighlights = [
  'Equipo tecnico con experiencia en mantenimiento y continuidad operacional.',
  'Orientacion a resultados medibles y mejora progresiva en terreno.',
  'Arquitectura digital preparada para escalamiento a integraciones IoT.',
]

export const teamProfiles = [
  {
    id: 'constanza-rojas',
    name: 'Constanza Rojas',
    title: 'CEO',
    area: 'Direccion',
    photo: '/team/constanza-rojas.jpg',
    yearsExperience: 14,
    location: 'Puerto Montt',
    bio:
      'Lidera la estrategia de crecimiento de Ingemant y la relacion con clientes industriales de alta criticidad operativa.',
    skills: ['Estrategia operacional', 'Gestion de contratos', 'Continuidad operacional', 'Relacion cliente'],
    certifications: ['Diplomado en Gestion de Activos', 'Auditor Interno ISO 9001'],
    portfolio: [
      'Escalamiento de cartera de mantenimiento multisitio para industria acuicola.',
      'Implementacion de modelo de seguimiento KPI para contratos de servicio.',
    ],
  },
  {
    id: 'matias-fuentes',
    name: 'Matias Fuentes',
    title: 'Co-CEO',
    area: 'Direccion',
    photo: '/team/matias-fuentes.jpg',
    yearsExperience: 12,
    location: 'Puerto Montt',
    bio:
      'Coordina iniciativas de innovacion aplicada, estandarizacion tecnica y expansion de servicios de automatizacion.',
    skills: ['Planificacion estrategica', 'Automatizacion industrial', 'Desarrollo comercial tecnico', 'Gestion de riesgo'],
    certifications: ['PMP', 'Especializacion en Automatizacion y Control'],
    portfolio: [
      'Despliegue de estandares de ingenieria para proyectos de tableros y control.',
      'Apertura de nuevas lineas de servicio con enfoque en eficiencia energetica.',
    ],
  },
  {
    id: 'claudio-alvarado',
    name: 'Claudio Alvarado',
    title: 'Supervisor de Operaciones',
    area: 'Supervision',
    photo: '/team/claudio-alvarado.jpg',
    yearsExperience: 10,
    location: 'Puerto Montt',
    bio:
      'Gestiona cuadrillas en terreno, asegura estandares de seguridad y controla la ejecucion tecnica del plan semanal.',
    skills: ['Supervision en terreno', 'Seguridad operacional', 'Control de calidad', 'Coordinacion de cuadrillas'],
    certifications: ['Supervisor HSE', 'Trabajo en altura y espacios confinados'],
    portfolio: [
      'Reduccion de tiempos de detencion mediante planificacion diaria de actividades criticas.',
      'Implementacion de checklist digital para trazabilidad de mantenimiento.',
    ],
  },
  {
    id: 'camila-oyarzun',
    name: 'Camila Oyarzun',
    title: 'Planificadora de Mantenimiento',
    area: 'Planificacion',
    photo: '/team/camila-oyarzun.jpg',
    yearsExperience: 8,
    location: 'Puerto Montt',
    bio:
      'Orquesta ventanas de mantenimiento, recursos y abastecimiento para asegurar cumplimiento y disponibilidad operacional.',
    skills: ['Programacion de mantenimiento', 'Gestion de repuestos', 'Indicadores de confiabilidad', 'Control documental'],
    certifications: ['Especializacion en Planificacion de Mantenimiento', 'Power BI para Operaciones'],
    portfolio: [
      'Diseno de plan maestro trimestral con trazabilidad por activo critico.',
      'Integracion de tableros de cumplimiento de OT y backlog tecnico.',
    ],
  },
  {
    id: 'felipe-cardenas',
    name: 'Felipe Cardenas',
    title: 'Tecnico Electromecanico',
    area: 'Tecnicos',
    photo: '/team/felipe-cardenas.jpg',
    yearsExperience: 9,
    location: 'Puerto Montt',
    bio:
      'Especialista en montaje, diagnostico y mantenimiento de sistemas electromecanicos industriales.',
    skills: ['Montaje industrial', 'Diagnostico de fallas', 'Motores y bombas', 'Aire comprimido'],
    certifications: ['Tecnico Nivel Superior en Electromecanica', 'Analisis de vibraciones I'],
    portfolio: [
      'Recuperacion de linea de bombeo en ventana critica de 48 horas.',
      'Mejora de eficiencia en red de aire comprimido con disminucion de fugas.',
    ],
  },
  {
    id: 'javier-molina',
    name: 'Javier Molina',
    title: 'Tecnico en Automatizacion',
    area: 'Tecnicos',
    photo: '/team/javier-molina.jpg',
    yearsExperience: 7,
    location: 'Puerto Montt',
    bio:
      'Ejecuta integracion de PLC, tableros de control y ajustes de logica para estabilizar procesos criticos.',
    skills: ['PLC', 'SCADA', 'Instrumentacion', 'Puesta en marcha'],
    certifications: ['Programacion PLC Siemens', 'Electricidad industrial SEC'],
    portfolio: [
      'Migracion de control local a esquema centralizado en planta de proceso.',
      'Comisionamiento de tableros con pruebas FAT/SAT documentadas.',
    ],
  },
  {
    id: 'nicolas-sepulveda',
    name: 'Nicolas Sepulveda',
    title: 'Tecnico de Mantenimiento Industrial',
    area: 'Tecnicos',
    photo: '/team/nicolas-sepulveda.jpg',
    yearsExperience: 6,
    location: 'Puerto Montt',
    bio:
      'Desarrolla mantenimiento preventivo y correctivo orientado a confiabilidad y reduccion de fallas repetitivas.',
    skills: ['Mantenimiento preventivo', 'Mantenimiento correctivo', 'Analisis causa raiz', 'Inspecciones tecnicas'],
    certifications: ['Tecnico en Mantenimiento Industrial', 'Metodologia RCA'],
    portfolio: [
      'Estandarizacion de rutinas de inspeccion en activos rotativos.',
      'Reduccion de fallas recurrentes en sistema de oxigenacion.',
    ],
  },
  {
    id: 'daniela-soto',
    name: 'Daniela Soto',
    title: 'Tecnica de Terreno',
    area: 'Tecnicos',
    photo: '/team/daniela-soto.jpg',
    yearsExperience: 5,
    location: 'Puerto Montt',
    bio:
      'Soporta ejecucion en terreno con foco en seguridad, orden tecnico y calidad de cierre de actividades.',
    skills: ['Ejecucion en terreno', 'Levantamiento tecnico', 'Protocolos de seguridad', 'Reportabilidad'],
    certifications: ['Tecnico en Instrumentacion', 'Primeros auxilios industriales'],
    portfolio: [
      'Documentacion fotografica y tecnica de intervenciones en activos criticos.',
      'Apoyo en mejoras de estandar de cierre y trazabilidad de OT.',
    ],
  },
]
