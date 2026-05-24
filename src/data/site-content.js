export const company = {
  name: 'Ingemant SPA',
  tagline:
    'Ingenieria y mantenimiento industrial orientados a continuidad operacional en sistemas de aire comprimido, oxigenacion y automatizacion.',
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
      'Diagnostico, montaje, optimizacion y mantenimiento de redes de aire comprimido para procesos industriales donde la calidad del aire define la confiabilidad del sistema.',
    bullets: [
      'Control de punto de rocio para mantener aire limpio y seco en lineas neumaticas criticas',
      'Prevencion de condensado, corrosion y contaminacion en valvulas, cilindros, motores e instrumentos',
      'Auditorias de fugas, eficiencia energetica y soporte preventivo y correctivo',
    ],
  },
  {
    title: 'Oxigenacion para Cultivo',
    description:
      'Ingenieria, mantenimiento e integracion de sistemas de oxigenacion para centros de cultivo con foco en estabilidad operacional y disponibilidad de equipos.',
    bullets: [
      'Integracion de equipos para sistemas de oxigenacion en centros de cultivo',
      'Control de parametros criticos para continuidad biologica y operacional',
      'Puesta en marcha y comisionamiento con estandares de seguridad y trazabilidad',
    ],
  },
  {
    title: 'Automatizacion',
    description:
      'Diseno e integracion de automatizacion para reducir riesgo operativo, aumentar disponibilidad y estandarizar procesos en entornos industriales exigentes.',
    bullets: [
      'Tableros y control para procesos neumaticos e industriales',
      'Integracion PLC/SCADA con monitoreo de variables operacionales',
      'Estandarizacion de procesos para reducir fallas y variabilidad',
    ],
  },
  {
    title: 'Mantenimiento Industrial',
    description:
      'Estrategias de mantenimiento basadas en confiabilidad y gestion de activos para reducir fallas, proteger la produccion y mejorar la seguridad operacional.',
    bullets: [
      'Planes preventivos para continuidad operacional y extension de vida util de equipos',
      'Intervenciones correctivas para recuperacion segura y rapida de sistemas criticos',
      'Mejora continua orientada a seguridad de personal, eficiencia energetica y reportabilidad',
    ],
  },
]

export const metrics = [
  { value: 'Ingenieria', label: 'Enfoque tecnico aplicado a terreno' },
  { value: 'Mantenimiento', label: 'Preventivo y correctivo para continuidad operacional' },
  { value: 'Confiabilidad', label: 'Calidad de aire, seguridad y control de procesos' },
]

export const aboutHighlights = [
  'En plantas de proceso en tierra, el aire comprimido limpio y seco es un requisito tecnico para proteger instrumentos y actuadores neumaticos.',
  'En centros de cultivo, los sistemas de oxigenacion requieren ejecucion y mantenimiento especializados para sostener una operacion estable y segura.',
  'El mantenimiento preventivo y correctivo bien planificado reduce fallas, mejora eficiencia energetica y prolonga la vida util de los activos.',
]

export const teamProfiles = [
  {
    id: 'daniel-lucero',
    name: 'Daniel Lucero',
    title: 'CEO & Founder Ingemant',
    area: 'Direccion',
    photo: '/team/daniel-lucero.jpg',
    yearsExperience: 15,
    location: 'Puerto Montt',
    bio:
      'Lidera la direccion estrategica, el desarrollo de servicios y la relacion tecnica-comercial con clientes industriales.',
    skills: ['Direccion estrategica', 'Desarrollo de negocios', 'Gestion operativa', 'Relacion con clientes'],
    certifications: ['Gestion de Activos', 'Liderazgo y Direccion de Equipos'],
    portfolio: [
      'Estructuracion de servicios de ingenieria y mantenimiento orientados a continuidad operacional.',
      'Coordinacion de lineamientos de crecimiento y desarrollo tecnico-comercial.',
    ],
  },
  {
    id: 'carol-pereira-de-la-hoz',
    name: 'Carol Pereira de la Hoz',
    title: 'Gerente Administracion y Desarrollo Organizacional',
    area: 'Administracion',
    photo: '/team/carol-pereira-de-la-hoz.jpg',
    yearsExperience: 11,
    location: 'Puerto Montt',
    bio:
      'Lidera procesos administrativos y desarrollo organizacional para fortalecer soporte interno y estandares de gestion.',
    skills: ['Gestion administrativa', 'Desarrollo organizacional', 'Gestion documental', 'Coordinacion interna'],
    certifications: ['Gestion de Personas', 'Administracion y Control de Procesos'],
    portfolio: [
      'Estandarizacion de flujos administrativos y operativos de soporte.',
      'Implementacion de practicas de mejora organizacional y control de gestion interno.',
    ],
  },
  {
    id: 'jose-scheffer',
    name: 'Jose Scheffer',
    title: 'Tecnico en Mantenimiento Industrial',
    area: 'Tecnicos',
    photo: '/team/jose-scheffer.jpg',
    yearsExperience: 9,
    location: 'Puerto Montt',
    bio:
      'Especialista en mantenimiento industrial con foco en diagnostico de fallas e intervenciones en terreno.',
    skills: ['Mantenimiento industrial', 'Inspecciones tecnicas', 'Mantenimiento preventivo', 'Diagnostico de fallas'],
    certifications: ['Tecnico en Mantenimiento Industrial', 'Seguridad industrial'],
    portfolio: [
      'Ejecucion de programas preventivos en activos criticos de planta.',
      'Soporte tecnico para reducir fallas repetitivas y mejorar disponibilidad operacional.',
    ],
  },
  {
    id: 'daniel-mardones',
    name: 'Daniel Mardones',
    title: 'Supervisor de Mantenimiento',
    area: 'Supervision',
    photo: '/team/daniel-mardones.jpg',
    yearsExperience: 10,
    location: 'Puerto Montt',
    bio:
      'Supervisa planificacion y ejecucion de mantenimiento, asegurando seguridad, calidad y continuidad operacional.',
    skills: ['Supervision de mantenimiento', 'Planificacion operativa', 'Seguridad en terreno', 'Control de calidad'],
    certifications: ['Supervisor de Mantenimiento', 'Gestion de Activos'],
    portfolio: [
      'Coordinacion de equipos tecnicos en intervenciones programadas y correctivas.',
      'Fortalecimiento del cumplimiento de planes de mantenimiento y trazabilidad de actividades.',
    ],
  },
]
