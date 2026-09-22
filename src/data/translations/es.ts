import type { PortfolioTranslation } from "../translationTypes";

export const es: PortfolioTranslation = {
  profile: {
    role: "Ingeniero de Machine Learning y Desarrollador Full-Stack",
    summary:
      "Estudiante de ciencias de la computación que desarrolla investigación en seguridad de IA, agentes conversacionales, sistemas de datos y productos full-stack con resultados técnicos medibles.",
    graduation: "Graduación esperada en mayo de 2027",
  },
  impactMetrics: {
    "Project Case Studies": { label: "Casos de Estudio de Proyectos", detail: "IA, sistemas de datos y proyectos full-stack" },
    "Model Accuracy": { label: "Precisión del Modelo", detail: "Investigación en detección de inyección de prompts" },
    "Certifications": { label: "Certificaciones", detail: "IA, ML, soporte de TI e ingeniería de software" },
    "Infrastructure Uptime": { label: "Disponibilidad de Infraestructura", detail: "Entorno de soporte tecnológico universitario" },
  },
  focusAreas: {
    "AI Security": {
      label: "Seguridad de IA",
      value: "Detección de inyección de prompts, puntuación de riesgo y flujos de trabajo de agentes más seguros.",
    },
    "Applied Machine Learning": {
      label: "Machine Learning Aplicado",
      value: "Pipelines de NLP, aprendizaje supervisado, evaluación y automatización útil.",
    },
    "Full-Stack Systems": {
      label: "Sistemas Full-Stack",
      value: "Next.js, Flask, SQL, modelos de datos local-first e interfaces prácticas.",
    },
  },
  experience: {
    "sju-it-support": {
      role: "Trabajador Estudiantil de TI",
      summary:
        "Brinda soporte a las operaciones tecnológicas del campus, incluyendo hardware, sistemas de aulas, infraestructura de seguridad y flujos de atención al usuario.",
      highlights: [
        "Diagnostica y resuelve problemas de hardware manteniendo un 99.2% de disponibilidad en infraestructura crítica.",
        "Despliega y optimiza más de 50 cámaras de seguridad en todo el campus con scripts de monitoreo personalizados.",
        "Gestiona más de 100 consultas técnicas mensuales con una calificación de satisfacción de 4.8/5.",
        "Realiza mantenimiento preventivo que redujo las llamadas de emergencia en un 35%.",
      ],
    },
    "techx-data-engineer": {
      role: "Pasante de Ingeniería de Datos",
      summary:
        "Diseñó aplicaciones de NLP dentro de sprints Agile usando Python y flujos de trabajo modernos de machine learning.",
      highlights: [
        "Realizó revisiones de código para más de 20 pull requests en funciones de datos y automatización.",
        "Implementó herramientas de IA generativa que aumentaron la eficiencia de automatización en un 40%.",
        "Tradujo requisitos de producto ambiguos en tareas de procesamiento de datos verificables.",
      ],
    },
    "neuralseek-agent-builder": {
      role: "Pasante de Creación de Agentes de IA",
      summary:
        "Construyó agentes conversacionales usando flujos de trabajo de LLM, ingeniería de prompts, evaluación y prácticas éticas de IA.",
      highlights: [
        "Construyó más de 15 agentes conversacionales para flujos de trabajo de asistentes prácticos.",
        "Optimizó la precisión de las respuestas en un 28% mediante el refinamiento iterativo de prompts y comportamiento.",
        "Documentó patrones de comportamiento de agentes para respaldar la mantenibilidad y un despliegue más seguro.",
      ],
    },
  },
  projects: {
    "personal-finance-tracker": {
      title: "Rastreador de Finanzas Personales",
      description:
        "Sistema de gestión financiera full-stack con CLI, GUI de escritorio y aplicación web Flask. Incluye detección de pagos recurrentes, previsión de presupuesto y visualizaciones dinámicas.",
      summary:
        "Una herramienta de planificación financiera multi-interfaz diseñada para facilitar la comprensión de los patrones de gasto, las obligaciones recurrentes y las decisiones de presupuesto.",
      problem:
        "Las herramientas de presupuesto personal suelen ocultar los detalles de implementación que hacen útil la previsión. Este proyecto se centra en hacer transparentes la entrada de transacciones, los pagos recurrentes, los límites de presupuesto y los informes en múltiples interfaces.",
      architecture: [
        "SQLite almacena transacciones, categorías, pagos recurrentes y reglas de presupuesto.",
        "Una capa de servicio compartida en Python alimenta el CLI, la interfaz de escritorio en Tkinter y la aplicación web Flask.",
        "Pandas transforma los registros sin procesar en resúmenes mensuales, tendencias por categoría e insumos de previsión.",
      ],
      technicalDecisions: [
        "Se mantuvo la lógica financiera central independiente de la interfaz para que el CLI, la app de escritorio y la app web permanezcan consistentes.",
        "Se usó SQLite para un flujo de trabajo local-first portátil con suficiente estructura relacional para los informes.",
        "Se modeló la detección de pagos recurrentes por separado de la entrada de transacciones para mantener flexible la automatización futura.",
      ],
      challenges: [
        "Normalizar descripciones de transacciones inconsistentes sin sobreajustarse a un solo formato de exportación bancaria.",
        "Mantener útil el resultado de la previsión evitando una falsa precisión en conjuntos de datos pequeños.",
        "Diseñar tres interfaces sin duplicar la lógica de negocio.",
      ],
      learnings: [
        "Un modelo de datos claro importa más que el pulido de la interfaz a medida que crecen las funciones de análisis.",
        "Las pequeñas funciones de automatización generan más confianza cuando los usuarios pueden inspeccionar los registros subyacentes.",
      ],
      highlights: [
        "Se construyeron interfaces de CLI, escritorio y web sobre un modelo de datos compartido.",
        "Se agregó detección de pagos recurrentes para identificar suscripciones y costos fijos.",
        "Se usaron resúmenes basados en Pandas para impulsar la previsión y los informes visuales.",
      ],
      outcomes: [
        "Se convirtió la revisión manual del presupuesto en un flujo de trabajo repetible.",
        "Se creó una arquitectura de proyecto reutilizable para futuras funciones financieras.",
      ],
    },
    "multi-interface-nlp-chatbot": {
      title: "Chatbot de NLP Multi-Interfaz",
      description:
        "Chatbot conversacional que utiliza NLTK para análisis de sentimiento, reconocimiento de entidades y respuestas conscientes del contexto. Incluye entrada/salida de voz e historial de conversación persistente.",
      summary:
        "Un proyecto de IA conversacional centrado en flujos de trabajo prácticos de lenguaje natural en interfaces de escritorio, web y con voz.",
      problem:
        "Muchas demostraciones de chatbots se limitan a un simple cuadro de texto. Este proyecto explora cómo el mismo motor de NLP puede admitir diferentes modos de interacción preservando el contexto y el historial del usuario.",
      architecture: [
        "Los pipelines de NLTK manejan la tokenización, las señales de sentimiento y la extracción de entidades.",
        "Un servicio Flask expone la capa de conversación a los clientes web.",
        "Los clientes de Tkinter y de entrada/salida de voz reutilizan los mismos módulos de respuesta e historial.",
      ],
      technicalDecisions: [
        "Se separó el procesamiento del lenguaje de la presentación para que cada interfaz pueda evolucionar de forma independiente.",
        "Se persistieron las conversaciones para hacer verificable el comportamiento multi-turno en lugar de puramente efímero.",
        "Se mantuvo la primera versión centrada en NLP clásico para que la base fuera comprensible antes de agregar LLMs.",
      ],
      challenges: [
        "Equilibrar las respuestas deterministas basadas en reglas con entradas de lenguaje más flexibles.",
        "Mantener la entrada de voz resiliente cuando la salida del reconocimiento de voz es imperfecta.",
        "Diseñar una memoria de conversación que ayude sin hacer que las respuestas se sientan repetitivas.",
      ],
      learnings: [
        "Una base modesta de NLP es útil porque hace medibles las futuras mejoras con LLM.",
        "Las aplicaciones multi-interfaz necesitan contratos compartidos desde el principio, incluso cuando cada interfaz comienza siendo pequeña.",
      ],
      highlights: [
        "Se implementó análisis de sentimiento y extracción de entidades con NLTK.",
        "Se persistió el historial de conversación para interacciones multi-turno más útiles.",
        "Se conectó la misma lógica de asistente a flujos de trabajo web, de escritorio y de voz.",
      ],
      outcomes: [
        "Se demostró cómo los sistemas de NLP pueden empaquetarse para múltiples contextos de usuario.",
        "Se creó una base sólida para futuras mejoras basadas en recuperación o LLM.",
      ],
    },
    "prompt-injection-detector": {
      title: "Detector de Inyección de Prompts para LLM",
      description:
        "Proyecto de investigación sobre detección de ataques adversarios en sistemas de IA generativa. Se desarrollaron modelos de clasificación para identificar patrones de prompts maliciosos con un 92% de precisión.",
      summary:
        "Un sistema de machine learning orientado a la investigación para identificar patrones de prompts adversarios antes de que lleguen a los agentes de IA posteriores.",
      problem:
        "Las aplicaciones de LLM pueden fallar cuando se introducen instrucciones maliciosas de forma encubierta en los prompts del usuario o en el contenido recuperado. Este proyecto investiga si un clasificador puede señalar prompts riesgosos con suficiente antelación para respaldar flujos de trabajo de agentes de IA más seguros.",
      architecture: [
        "Se etiquetan muestras de prompts curadas en categorías benignas y adversarias.",
        "El preprocesamiento de texto prepara los prompts para el entrenamiento y la evaluación del modelo.",
        "Los clasificadores de PyTorch puntúan el riesgo del prompt antes de que instrucciones inseguras lleguen a una capa de agente.",
      ],
      technicalDecisions: [
        "Se centró en la detección antes de la generación de respuestas para que el sistema pueda actuar como una barrera de seguridad.",
        "Se hizo seguimiento de la precisión junto con el tamaño del conjunto de datos para hacer concretas las afirmaciones del modelo.",
        "Se mantuvo el proyecto orientado a la investigación, con espacio para comparar líneas base clásicas y neuronales.",
      ],
      challenges: [
        "Evitar la fuga de información entre los prompts de entrenamiento y evaluación cuando la redacción del ataque es repetitiva.",
        "Manejar ataques que son semánticamente dañinos sin palabras clave maliciosas evidentes.",
        "Explicar los falsos positivos con suficiente claridad para que un revisor humano confíe en el flujo de trabajo.",
      ],
      learnings: [
        "La defensa contra inyección de prompts necesita controles en capas; un clasificador es útil, pero no una historia de seguridad completa.",
        "El diseño de la evaluación es tan importante como la selección del modelo en proyectos de seguridad de IA.",
      ],
      highlights: [
        "Se exploraron técnicas de prompts adversarios y patrones de detección.",
        "Se entrenaron modelos de clasificación para la identificación de prompts maliciosos.",
        "Se evaluó el comportamiento del modelo frente a un conjunto de datos curado de ataques por prompt.",
      ],
      outcomes: [
        "Se construyó un caso de estudio de seguridad de IA listo para portafolio con resultados medibles.",
        "Se conectaron las decisiones de modelado de ML con riesgos de seguridad reales en sistemas de IA generativa.",
      ],
    },
    "sju-tech-commons-database": {
      title: "Base de Datos de SJU Tech Commons",
      description:
        "Base de datos SQL empresarial para gestionar una flota de impresoras 3D, seguimiento de inventario, registros de mantenimiento y análisis de uso en toda la universidad.",
      summary:
        "Un proyecto de diseño de base de datos para hacer seguimiento de dispositivos, materiales, mantenimiento y uso en un espacio tecnológico universitario.",
      problem:
        "Los espacios tecnológicos compartidos necesitan registros confiables de dispositivos, materiales, reparaciones y uso. Este proyecto modela esas operaciones para que el personal pueda responder rápidamente preguntas de mantenimiento e inventario.",
      architecture: [
        "Tablas relacionales modelan dispositivos, usuarios, materiales, registros de mantenimiento y eventos de uso.",
        "Consultas SQL respaldan los informes de inventario, utilización y mantenimiento.",
        "Flujos de trabajo en Java proporcionan una capa de acceso práctica para tareas operativas comunes.",
      ],
      technicalDecisions: [
        "Se usó un esquema relacional normalizado para mantener consistentes los registros de inventario y mantenimiento.",
        "Se diseñaron las consultas de informes en torno a preguntas operativas reales en lugar de paneles genéricos.",
        "Se mantuvo el análisis de uso vinculado a las entidades de dispositivo y material para un mejor reporte a largo plazo.",
      ],
      challenges: [
        "Diseñar relaciones que respalden tanto el inventario actual como el uso histórico.",
        "Mantener los registros de mantenimiento lo suficientemente detallados para ser útiles sin ralentizar el trabajo del personal.",
        "Evitar consultas analíticas que dependan de convenciones de nomenclatura manual frágiles.",
      ],
      learnings: [
        "Las bases de datos operativas son más sólidas cuando reflejan la forma en que el personal ya piensa sobre el trabajo.",
        "Un buen reporte comienza con restricciones y relaciones, no con gráficos.",
      ],
      highlights: [
        "Se modelaron entidades de inventario, dispositivos, usuarios y mantenimiento.",
        "Se diseñaron consultas SQL para reportes operativos y análisis de uso.",
        "Se combinó la estructura de la base de datos con flujos de trabajo en Java para un acceso práctico.",
      ],
      outcomes: [
        "Se mejoró la visibilidad de los patrones de mantenimiento y el uso de recursos.",
        "Se demostró un diseño de base de datos orientado a producción para un flujo de trabajo real del campus.",
      ],
    },
  },
  researchFocus: {
    title: "Detección de Inyección de Prompts Adversarios",
    abstract:
      "Investigación centrada en identificar patrones de prompts maliciosos que intentan anular las instrucciones del sistema, filtrar contexto oculto o manipular agentes de IA posteriores.",
    methods: [
      "Se curaron ejemplos de prompts benignos y adversarios para clasificación binaria y por categoría de riesgo.",
      "Se compararon estrategias de preprocesamiento para prompts de formato corto, ataques de juego de roles e intentos de anulación de instrucciones.",
      "Se evaluó el rendimiento de detección usando precisión, revisión de falsos positivos y cobertura de familias de prompts.",
    ],
    implications: [
      "El filtrado de prompts debería ser una capa dentro de una estrategia de defensa más amplia que incluya permisos de herramientas, aislamiento de contexto y revisión humana para acciones sensibles.",
      "Los sistemas de detección necesitan datos de evaluación que incluyan ataques parafraseados e indirectos, no solo patrones de palabras clave evidentes.",
    ],
    performance: {
      "Classifier Accuracy": { label: "Precisión del Clasificador" },
      "Prompt Samples": { label: "Muestras de Prompts" },
      "Focus Area": { label: "Área de Enfoque" },
    },
  },
};
