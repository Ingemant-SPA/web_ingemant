# Propuesta de Plan y Cotizacion Escalable

## Resumen Ejecutivo
Esta propuesta define una estrategia de crecimiento tecnologico para Ingemant, comenzando con un esquema costo-eficiente en Vercel y evolucionando hacia una plataforma robusta en GCP cuando aumente el volumen de datos, usuarios y proyectos.

El objetivo no es solo mantener la web corporativa, sino construir una base comun para multiples soluciones: formularios, apps de analitica de datos (PSA y compresores de aire), procesamiento de archivos USB/SD, generacion de informes y capacidades de IA generativa.

## Objetivos de Negocio
- Mantener la web publica estable y facil de actualizar.
- Asegurar captura de solicitudes comerciales y trazabilidad de contactos.
- Consolidar una plataforma de datos para todos los proyectos tecnicos.
- Preparar una migracion ordenada a infraestructura cloud empresarial (GCP) sin rehacer todo.
- Escalar analitica e IA sobre datos historicos de equipos industriales.

## Alcance Considerado
- Web corporativa publica.
- Backend para formularios y APIs.
- Base de datos operacional y base de datos historica.
- Almacenamiento de archivos de entrada (USB/SD) y reportes generados.
- Contenedores para apps existentes de analitica.
- Integracion gradual de IA generativa en flujos de informe.

## Estado Actual
- Web desplegada en Vercel, con pipeline por commit/push.
- Galeria e interfaz moderna operativas.
- Formularios en transicion a un flujo backend mas robusto.
- Apps de analitica existentes para PSA y compresores.

## Estrategia de Evolucion por Etapas

### Etapa 1: Operacion Liviana y Rapida (0-3 meses)
Infraestructura principal en Vercel + servicios gestionados.

Componentes:
- Frontend en Vercel.
- API ligera (Vercel Functions) para contacto y endpoints basicos.
- Correo transaccional (Resend/SendGrid/Postmark).
- Base de datos SQL administrada de entrada (PostgreSQL small).
- Almacenamiento objeto economico para archivos y reportes.

Objetivo:
- Operar rapido, bajo costo, minimo mantenimiento.

### Etapa 2: Plataforma de Datos Compartida (3-9 meses)
Consolidar almacenamiento, pipelines y calidad de datos.

Componentes:
- Ingesta estructurada de archivos USB/SD (colas + jobs).
- Estandarizacion de esquemas de datos PSA/compresores.
- Data mart para consultas historicas e informes comparativos.
- Observabilidad basica (logs, errores, alertas).

Objetivo:
- Pasar de app por proyecto a plataforma reutilizable.

### Etapa 3: Escalamiento Cloud Empresarial (9-24 meses)
Migracion progresiva a GCP para cargas mayores y multiples apps.

Componentes sugeridos en GCP:
- Cloud Run para APIs y microservicios.
- Cloud SQL (PostgreSQL) para operaciones transaccionales.
- Cloud Storage para archivos y reportes.
- BigQuery para analitica de volumen y modelos historicos.
- Pub/Sub + Cloud Scheduler para ingesta y automatizaciones.
- Vertex AI (segun caso) para evolutivo de IA generativa.

Objetivo:
- Alta escalabilidad, mejor gobernanza y ecosistema unificado para todos los proyectos.

## Arquitectura Objetivo (Agnostica)
- Capa Presentacion: Web corporativa y paneles tecnicos.
- Capa API: Servicios de contacto, autenticacion, reportes, ingestion.
- Capa Procesamiento: ETL/ELT, validacion de datos, generacion de informes.
- Capa Datos:
  - Operacional: PostgreSQL.
  - Historica/analitica: Data warehouse (BigQuery en etapa avanzada).
  - Archivos: Object storage.
- Capa IA: Servicios de resumen y generacion asistida de informes.

## Cotizacion Referencial Mensual (USD)

### Escenario A: Base Operativa
- Hosting frontend/CDN: 0-20
- API serverless: 0-20
- Email transaccional: 0-25
- DB pequena administrada: 0-30
- Object storage inicial: 0-10
- Total estimado: 0-105/mes

### Escenario B: Plataforma Recomendada
- Frontend/CDN: 20-40
- API y jobs: 20-80
- PostgreSQL mediana: 30-120
- Storage + backups: 15-60
- Email transaccional: 20-60
- Monitoreo/alertas: 10-40
- Total estimado: 115-400/mes

### Escenario C: Escala Empresarial (GCP orientado)
- Cloud Run/API microservicios: 60-250
- Cloud SQL (HA opcional): 100-450
- Cloud Storage + transferencias: 30-180
- BigQuery (segun consultas): 40-400
- Pub/Sub + orquestacion: 20-120
- Observabilidad y seguridad ampliada: 30-180
- Total estimado: 280-1,580/mes

## Costos de Implementacion (Pago Unico)

### Implementacion Inicial (Etapa 1)
- 20-40 horas
- Rango referencial: 700-2,200 USD

### Plataforma de Datos (Etapa 2)
- 40-90 horas
- Rango referencial: 1,400-4,950 USD

### Migracion y Escalamiento GCP (Etapa 3)
- 80-180 horas
- Rango referencial: 2,800-9,900 USD

Nota: rangos dependen de alcance final, seguridad requerida, SLA y nivel de automatizacion.

## Beneficios Clave para Direccion
- Inversion progresiva: no sobredimensionar antes de tiempo.
- Reutilizacion: una base tecnica para varios proyectos industriales.
- Menor riesgo: migracion planificada, no improvisada.
- Mejor control: trazabilidad de datos y reportes centralizados.
- Escalabilidad real: camino claro de Vercel a GCP.

## Riesgos y Mitigaciones
- Riesgo: dependencia de servicios externos puntuales.
  - Mitigacion: arquitectura con proveedores intercambiables y fallback.
- Riesgo: crecimiento desordenado por proyecto aislado.
  - Mitigacion: modelo de plataforma comun y estandar de datos.
- Riesgo: costos cloud variables al escalar.
  - Mitigacion: presupuestos con alertas, quotas y revisiones mensuales.

## Recomendacion para Aprobacion (Lunes)
1. Aprobar Etapa 1 inmediata para continuidad comercial.
2. Aprobar diseno de Etapa 2 en paralelo (modelo de datos comun PSA/compresores).
3. Definir hito de migracion a GCP segun umbrales:
   - volumen mensual de datos,
   - cantidad de apps activas,
   - necesidad de analitica historica avanzada.
4. Aprobar una bolsa de implementacion por etapas en lugar de un unico paquete rigido.

## Proximos Pasos Propuestos
- Semana 1:
  - Cerrar alcance tecnico y costos base.
  - Formalizar backend de contacto y almacenamiento inicial.
- Semana 2-3:
  - Definir esquema unificado de datos PSA/compresores.
  - Implementar pipeline de ingreso de archivos USB/SD.
- Mes 2-3:
  - Dashboard consolidado de proyectos.
  - Roadmap tecnico-financiero de migracion gradual a GCP.

---
Documento preparado para presentacion ejecutiva interna.
Fecha: 24-05-2026
