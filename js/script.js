// ponytail: single-file panel logic, no framework
const MODULES = [
  { id:1, title:"Cambio de paradigma y uso responsable de IA", file:"modulo1",
    lessons:[
      { id:1, title:"Programación tradicional vs desarrollo con IA", file:"m1-leccion1" },
      { id:2, title:"El ingeniero como arquitecto-supervisor", file:"m1-leccion2" },
      { id:3, title:"Qué puede y qué no puede delegarse a la IA", file:"m1-leccion3" },
      { id:4, title:"Reglas mínimas de uso responsable", file:"m1-leccion4" },
      { id:5, title:"Escenarios de decisión (Quiz)", file:"m1-leccion5" },
    ]},
  { id:2, title:"De la idea al requerimiento", file:"modulo2",
    lessons:[
      { id:1, title:"El problema de pedir código con ideas vagas", file:"m2-leccion1" },
      { id:2, title:"Preguntas de descubrimiento", file:"m2-leccion2" },
      { id:3, title:"Requerimientos funcionales", file:"m2-leccion3" },
      { id:4, title:"Criterios de aceptación", file:"m2-leccion4" },
      { id:5, title:"Casos borde", file:"m2-leccion5" },
      { id:6, title:"Convertir una idea en requerimiento (Ejercicio)", file:"m2-leccion6" },
      { id:7, title:"Detectar requerimientos incompletos (Quiz)", file:"m2-leccion7" },
    ]},
  { id:3, title:"Contexto y Prompts Encadenados", file:"modulo3",
    lessons:[
      { id:1, title:"Prompt vs Contexto", file:"m3-leccion1" },
      { id:2, title:"Qué información necesita la IA", file:"m3-leccion2" },
      { id:3, title:"Qué información sobra o confunde", file:"m3-leccion3" },
      { id:4, title:"Plantilla de contexto", file:"m3-leccion4" },
      { id:5, title:"Encadenación de prompts", file:"m3-leccion5" },
      { id:6, title:"Crear una cadena de prompts (Ejercicio)", file:"m3-leccion6" },
      { id:7, title:"Evaluar si un prompt es claro (Quiz)", file:"m3-leccion7" },
    ]},
  { id:4, title:"Desarrollo asistido por IA", file:"modulo4",
    lessons:[
      { id:1, title:"Qué es el desarrollo asistido por IA", file:"m4-leccion1" },
      { id:2, title:"Qué no debe hacerse: pedir 'todo el sistema'", file:"m4-leccion2" },
      { id:3, title:"Implementar por pasos pequeños", file:"m4-leccion3" },
      { id:4, title:"Cómo pedir correcciones a la IA", file:"m4-leccion4" },
      { id:5, title:"Cómo revisar una respuesta de código", file:"m4-leccion5" },
      { id:6, title:"Corregir una mala salida de IA (Ejercicio)", file:"m4-leccion6" },
      { id:7, title:"Decidir si aceptar o rechazar código (Quiz)", file:"m4-leccion7" },
    ]},
  { id:5, title:"Validación, pruebas y documentación", file:"modulo5",
    lessons:[
      { id:1, title:"Por qué no se debe confiar ciegamente en la IA", file:"m5-leccion1" },
      { id:2, title:"Pruebas mínimas necesarias", file:"m5-leccion2" },
      { id:3, title:"Casos borde y errores esperados", file:"m5-leccion3" },
      { id:4, title:"Revisión de código generado", file:"m5-leccion4" },
      { id:5, title:"Documentar prompts y decisiones", file:"m5-leccion5" },
      { id:6, title:"Auditar una solución generada por IA (Ejercicio)", file:"m5-leccion6" },
      { id:7, title:"Quiz de validación", file:"m5-leccion7" },
    ]},
  { id:6, title:"Proyecto Final Integrador", file:"modulo6",
    lessons:[
      { id:1, title:"Recibir una idea inicial", file:"m6-leccion1" },
      { id:2, title:"Convertir la idea en un requerimiento", file:"m6-leccion2" },
      { id:3, title:"Crear el contexto para la IA", file:"m6-leccion3" },
      { id:4, title:"Crear una cadena de prompts", file:"m6-leccion4" },
      { id:5, title:"Generar una solución asistida por IA", file:"m6-leccion5" },
      { id:6, title:"Validar la solución", file:"m6-leccion6" },
      { id:7, title:"Documentar el proceso completo", file:"m6-leccion7" },
      { id:8, title:"Autoevaluación final (Quiz / Checklist)", file:"m6-leccion8" },
    ]},
];

// ponytail: single data array with details for modal, one field shape fits all categories
const TOOLS = [
  // ========== CATEGORÍA 1: AGENTES DE IA ==========
  { id:'chatgpt', name:'ChatGPT', category:'ia-agents', description:'Asistente conversacional de OpenAI para generar código, explicar conceptos y depurar.', url:'https://chat.openai.com', licencia:'Freemium', sistemas:'Web, Windows, macOS, Linux', nivel:'Principiante', tags:['web','gratuito','pago'], details:[
      { label:'¿Qué es?', text:'ChatGPT es un asistente de inteligencia artificial desarrollado por OpenAI, basado en la familia de modelos GPT. Permite mantener conversaciones naturales, generar código, explicar conceptos complejos y asistir en tareas de programación.' },
      { label:'¿Para qué sirve?', text:'Sirve como asistente de programación en tiempo real: genera fragmentos de código, explica cómo funcionan librerías y APIs, ayuda a depurar errores, sugiere arquitecturas y traduce requisitos a implementaciones.' },
      { label:'Características técnicas', text:'• Modelo: GPT-4o, GPT-4.1, GPT-4.1-mini, o1, o3\n• Contexto máximo: 128K tokens (GPT-4o) / 1M tokens (GPT-4.1)\n• Precio: Gratuito (GPT-4o limitado) / Plus $20/mes / Pro $200/mes\n• API disponible: sí, OpenAI API (pago por uso)\n• Plugins: sí, GPTs personalizados y GPT Store\n• Multimodal: texto, imágenes, audio, subida de archivos' },
      { label:'Ejemplo de uso', text:'Prompt: "Genera una función en Python que lea un archivo CSV, calcule el promedio de una columna numérica y devuelva los resultados agrupados por categoría. Incluye manejo de errores."\n\nResultado típico: ChatGPT genera el código completo con explicación paso a paso, incluyendo validaciones, manejo de excepciones y un ejemplo de uso con datos de muestra.' },
      { label:'Casos de uso', text:'• Generación de código boilerplate\n• Depuración y explicación de errores\n• Refactorización de código legado\n• Aprendizaje de nuevos lenguajes y frameworks\n• Creación de documentación técnica' },
      { label:'Ventajas', text:'• Amplio conocimiento en múltiples lenguajes\n• Interfaz conversacional intuitiva\n• Capacidad para mantener contexto largo\n• Gran ecosistema de plugins y GPTs personalizados\n• Actualizaciones frecuentes' },
      { label:'Desventajas', text:'• Puede generar código con errores sutiles\n• Sin conexión a internet en modo gratuito\n• Limitaciones de privacidad en datos compartidos\n• Dependencia de servidores externos' },
      { label:'Comparativa', text:'vs Claude: ChatGPT tiene más plugins y GPTs personalizados; Claude maneja mejor contextos muy largos (200K tokens) y es más seguro.\nvs Gemini: ChatGPT tiene mejor ecosistema de desarrollo; Gemini se integra nativamente con Google Cloud y Workspace.\nvs Copilot: ChatGPT es conversacional, Copilot es autocompletado en IDE; se complementan.' },
      { label:'Recursos', text:'Documentación: https://platform.openai.com/docs\nPlayground: https://platform.openai.com/playground\nComunidad: https://community.openai.com\nAPI Reference: https://platform.openai.com/docs/api-reference' }
  ]},
  { id:'claude', name:'Claude', category:'ia-agents', description:'Asistente de IA de Anthropic con fuerte capacidad de análisis y generación de código.', url:'https://claude.ai', licencia:'Freemium', sistemas:'Web, iOS, Android', nivel:'Principiante', tags:['web','gratuito','pago','premium'], details:[
      { label:'¿Qué es?', text:'Claude es un asistente de IA desarrollado por Anthropic, diseñado con un enfoque en seguridad, análisis profundo y generación de código de alta calidad. Destaca por su capacidad para manejar contextos extensos.' },
      { label:'¿Para qué sirve?', text:'Ideal para análisis profundo de código, revisión de arquitecturas, generación de documentación técnica, y asistencia en proyectos complejos de software.' },
      { label:'Características técnicas', text:'• Modelo: Claude Opus 4, Claude Sonnet 4, Claude Haiku 3.5\n• Contexto máximo: 200K tokens\n• Precio: Gratuito (limitado) / Pro $20/mes / Max $100/mes\n• API disponible: sí, Anthropic API\n• Modalidades: texto, subida de archivos (PDF, imágenes, código)\n• Destaca por: safety training, Constitutional AI' },
      { label:'Ejemplo de uso', text:'Prompt: "Analiza este código y dime qué vulnerabilidades de seguridad encuentra. Revisa: inyección SQL, XSS, manejo de autenticación y almacenamiento de datos sensibles. Proporciona soluciones para cada una."\n\nResultado típico: Claude analiza el código línea por línea, identifica vulnerabilidades con su nivel de severidad, y sugiere correcciones específicas con fragmentos de código.' },
      { label:'Casos de uso', text:'• Análisis de código legacy\n• Generación de documentación técnica\n• Revisión de seguridad en código\n• Análisis de arquitecturas de software\n• Procesamiento de grandes volúmenes de código' },
      { label:'Ventajas', text:'• Contexto extenso (200K tokens)\n• Enfoque en seguridad y reducción de alucinaciones\n• Excelente para análisis profundos\n• Capacidad de procesar archivos completos' },
      { label:'Desventajas', text:'• Menos integraciones directas con IDEs\n• Sin plan gratuito ilimitado\n• Catálogo de plugins más limitado que ChatGPT' },
      { label:'Comparativa', text:'vs ChatGPT: Claude tiene contexto más grande (200K vs 128K), mejor en análisis extenso; ChatGPT gana en plugins y personalización.\nvs Gemini: Claude es superior en análisis detallado y seguridad; Gemini gana en integración con servicios Google.\nIdeal para: revisión de código, documentación, análisis de seguridad.' },
      { label:'Recursos', text:'Documentación: https://docs.anthropic.com\nAPI: https://console.anthropic.com\nCookbook: https://github.com/anthropics/anthropic-cookbook' }
  ]},
  { id:'gemini', name:'Gemini', category:'ia-agents', description:'Asistente multimodal de Google para investigación técnica, análisis y generación de código.', url:'https://gemini.google.com', licencia:'Gratuito (Free) / Pago (Advanced)', sistemas:'Web, Android, iOS', nivel:'Principiante', tags:['web','gratuito','pago'], details:[
      { label:'¿Qué es?', text:'Gemini es el asistente de IA multimodal de Google, sucesor de Bard. Integra comprensión de texto, imágenes, audio y código en un solo modelo.' },
      { label:'¿Para qué sirve?', text:'Sirve para investigación técnica, generación de código, análisis de repositorios, integración con servicios de Google y desarrollo de aplicaciones.' },
      { label:'Características técnicas', text:'• Modelo: Gemini 2.5 Pro, Gemini 2.5 Flash\n• Contexto máximo: 1M tokens (Pro), 256K (Flash)\n• Precio: Gratuito (Flash limitado) / Advanced $20/mes\n• API disponible: sí, Google AI Studio y Vertex AI\n• Multimodal: texto, imágenes, audio, video, subida de archivos\n• Integración: Gmail, Docs, Drive, Google Cloud' },
      { label:'Ejemplo de uso', text:'Prompt: "Analiza esta carpeta de proyecto y dime cuál es la arquitectura general, qué patrones de diseño se usan, y sugiere mejoras para escalabilidad."\n\nResultado típico: Gemini analiza múltiples archivos del proyecto, identifica la estructura, patrones y ofrece recomendaciones específicas con referencias a partes del código.' },
      { label:'Casos de uso', text:'• Investigación técnica rápida\n• Análisis de repositorios completos\n• Integración con Google Workspace\n• Generación de código con contexto de Google Cloud' },
      { label:'Ventajas', text:'• Integración nativa con ecosistema Google\n• Capacidades multimodales avanzadas\n• Modelo gratuito muy capaz\n• Conexión a internet en tiempo real' },
      { label:'Desventajas', text:'• Disponible en menos regiones\n• Menor adopción en comunidades de desarrollo\n• Dependencia del ecosistema Google' },
      { label:'Comparativa', text:'vs ChatGPT: Gemini tiene contexto más grande (1M tokens) y mejor integración Google; ChatGPT tiene mejor ecosistema de plugins.\nvs Claude: Gemini gana en multimodal y precio (gratuito generoso); Claude gana en análisis profundo.\nvS Cursor: Gemini es web, Cursor es editor; se complementan.' },
      { label:'Recursos', text:'Documentación: https://ai.google.dev\nAPI: https://makersuite.google.com\nStudio: https://aistudio.google.com' }
  ]},
  { id:'github-copilot', name:'GitHub Copilot', category:'ia-agents', description:'Autocompletado de código con IA integrado en VS Code, JetBrains y otros editores.', url:'https://github.com/features/copilot', licencia:'De pago (gratuito para estudiantes)', sistemas:'VS Code, JetBrains, Neovim, Visual Studio', nivel:'Intermedio', tags:['pago','windows','linux','macos'], details:[
      { label:'¿Qué es?', text:'GitHub Copilot es un asistente de codificación basado en IA desarrollado por GitHub en colaboración con OpenAI. Se integra directamente en el editor de código para sugerir líneas y funciones completas.' },
      { label:'¿Para qué sirve?', text:'Autocompleta código mientras escribes, sugiere implementaciones completas basadas en comentarios, genera tests y boilerplate, y aprende del contexto del proyecto.' },
      { label:'Características técnicas', text:'• Modelo: GPT-4o (Copilot), Claude Sonnet, Gemini (Copilot Chat)\n• Contexto: archivo abierto + tabs relacionados\n• Precio: $10/mes (Individual), $19/user/mes (Business), $39/user/mes (Enterprise)\n• Gratuito para: estudiantes verificados y mantenedores de OSS\n• Integraciones: VS Code, JetBrains, Neovim, Visual Studio, Xcode, Azure Data Studio\n• Extras: Copilot Chat, Copilot Code Review, Copilot Voice' },
      { label:'Ejemplo de uso', text:'Escenario: Escribes un comentario en VS Code "// función que valida email con regex"\n\nResultado: Copilot sugiere automáticamente:\n```js\nfunction validateEmail(email) {\n  const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n  return re.test(email);\n}\n```\nAceptas con Tab y el código se inserta.' },
      { label:'Casos de uso', text:'• Autocompletado en tiempo real\n• Generación de funciones desde comentarios\n• Creación de tests unitarios\n• Sugerencias contextuales según el proyecto' },
      { label:'Ventajas', text:'• Integración nativa en IDE\n• Sugerencias en tiempo real\n• Aprende del contexto del proyecto\n• Soporte para múltiples lenguajes' },
      { label:'Desventajas', text:'• Solo funciona online\n• Puede sugerir código inseguro\n• No es gratuito (excepto estudiantes)\n• Dependencia de servidores GitHub' },
      { label:'Comparativa', text:'vs ChatGPT: Copilot es autocompletado en IDE (más rápido para código); ChatGPT es conversacional (mejor para entender conceptos).\nvs Cursor: Cursor es un editor completo con IA; Copilot es un plugin para tu editor favorito.\nvs Continue: Continue es open-source y permite modelos locales; Copilot es privativo pero más pulido.' },
      { label:'Recursos', text:'Documentación: https://docs.github.com/copilot\nPrecios: https://github.com/features/copilot/plans\nCopilot Chat: integrado en VS Code, JetBrains y GitHub.com' }
  ]},
  { id:'cursor', name:'Cursor', category:'ia-agents', description:'Editor de código con IA integrada diseñado específicamente para desarrollo asistido.', url:'https://cursor.sh', licencia:'Freemium', sistemas:'Windows, macOS, Linux', nivel:'Intermedio', tags:['gratuito','pago','windows','linux','macos'], details:[
      { label:'¿Qué es?', text:'Cursor es un editor de código basado en VS Code que integra IA de forma nativa. Permite editar múltiples archivos, chatear con el código y generar funcionalidades completas desde el editor.' },
      { label:'¿Para qué sirve?', text:'Sirve como entorno de desarrollo completo con IA integrada: permite editar código mediante comandos de lenguaje natural, navegar por el código con IA y generar aplicaciones completas.' },
      { label:'Características técnicas', text:'• Base: fork de VS Code (misma interfaz, mismos plugins)\n• Modelos: Claude, GPT-4o, Gemini, y modelos propios\n• Contexto: archivos, carpetas, documentación, web\n• Precio: Gratuito (2000 requests/mes) / Pro $20/mes / Business $40/mes\n• Funciones clave: Composer (multi-archivo), Chat, Ctrl+K, Contexto @\n• Extras: carga de docs, reglas personalizadas, Codebase indexing' },
      { label:'Ejemplo de uso', text:'Comando: "Crea un componente React que muestre una lista de tareas con estado, filtros y persistencia en localStorage"\n\nResultado (Composer): Cursor genera 3 archivos: TaskList.jsx (componente principal), useTasks.js (hook personalizado), y TaskItem.jsx (subcomponente). Los crea automáticamente y explica la estructura.' },
      { label:'Casos de uso', text:'• Edición de código con lenguaje natural\n• Generación de proyectos desde cero\n• Refactorización multi-archivo\n• Depuración asistida\n• Navegación inteligente del código' },
      { label:'Ventajas', text:'• IA integrada nativamente\n• Edición en múltiples archivos\n• Composer para cambios complejos\n• Basado en VS Code (familiar)\n• Buen plan gratuito' },
      { label:'Desventajas', text:'• Editor separado (no es plugin)\n• Consume muchos recursos\n• Curva de aprendizaje del modo IA\n• Versión gratuita limitada en requests' },
      { label:'Comparativa', text:'vs Copilot: Cursor es un editor completo (no solo plugin); Copilot funciona en tu editor actual. Cursor más potente para cambios grandes.\nvs Continue: Cursor es producto comercial más pulido; Continue es open-source más modular.\nIdeal para: quienes quieren un entorno todo-en-uno con IA.' },
      { label:'Recursos', text:'Documentación: https://docs.cursor.sh\nChangelog: https://changelog.cursor.sh\nPrecios: https://cursor.sh/pricing' }
  ]},
  { id:'opencode', name:'OpenCode', category:'ia-agents', description:'Herramienta de código abierto para desarrollo asistido por IA directamente en la terminal.', url:'https://opencode.ai', licencia:'Open Source (MIT)', sistemas:'Windows, macOS, Linux', nivel:'Intermedio', tags:['open-source','gratuito','windows','linux','macos'], details:[
      { label:'¿Qué es?', text:'OpenCode es una herramienta open-source que permite interactuar con modelos de IA directamente desde la terminal. Está diseñada para flujos de trabajo de desarrollo asistido sin salir de la línea de comandos.' },
      { label:'¿Para qué sirve?', text:'Permite ejecutar prompts de IA para generar, modificar y revisar código desde la terminal. Ideal para automatizaciones y flujos de trabajo de desarrollo sin interfaz gráfica.' },
      { label:'Características técnicas', text:'• Lenguaje: TypeScript (Node.js)\n• Modelos: OpenAI, Anthropic, Google, AWS Bedrock, Ollama (modelos locales)\n• Instalación: npm install -g opencode\n• Precio: gratuito (open-source), solo pagas API keys\n• Funciones: chat, edición de archivos, ejecución de comandos, integración MCP\n• Plugins: sistema de skills e integraciones' },
      { label:'Ejemplo de uso', text:'Comando en terminal:\n$ opencode "Crea un script en Python que monitoree una carpeta en busca de archivos nuevos y los procese con IA"\n\nResultado: OpenCode genera el script, lo guarda en un archivo, y puede ejecutarlo. Muestra el progreso y permite iterar desde la terminal.' },
      { label:'Casos de uso', text:'• Automatización de tareas de codificación\n• Integración en pipelines CI/CD\n• Revisión de código desde terminal\n• Edición rápida de archivos\n• Flujos de trabajo headless' },
      { label:'Ventajas', text:'• Código abierto (MIT)\n• Multi-plataforma\n• Sin dependencia de IDE\n• Ideal para automatización\n• Comunidad activa' },
      { label:'Desventajas', text:'• Interfaz solo terminal\n• Requiere configuración inicial\n• Sin interfaz gráfica' },
      { label:'Comparativa', text:'vs Aider: OpenCode tiene sistema de skills y MCP; Aider se integra mejor con Git (commits automáticos).\nvs Claude Code: OpenCode es más customizable; Claude Code está más pulido pero es de pago.\nvs Codex CLI: OpenCode es más maduro y activo en desarrollo.' },
      { label:'Recursos', text:'Repositorio: https://github.com/anomalyco/opencode\nDocumentación: https://opencode.ai/docs\nSkills: https://opencode.ai/skills' }
  ]},
  { id:'continue', name:'Continue', category:'ia-agents', description:'Extensión open-source para VS Code y JetBrains que añade asistencia de IA.', url:'https://continue.dev', licencia:'Open Source (Apache 2.0)', sistemas:'VS Code, JetBrains', nivel:'Intermedio', tags:['open-source','gratuito','windows','linux','macos'], details:[
      { label:'¿Qué es?', text:'Continue es una extensión open-source para VS Code y JetBrains que proporciona asistencia de IA personalizable. Permite usar diferentes modelos (locales o en la nube) y crear flujos de trabajo personalizados.' },
      { label:'¿Para qué sirve?', text:'Añade un panel de chat, autocompletado y comandos contextuales de IA al editor, permitiendo elegir entre múltiples proveedores de modelos.' },
      { label:'Características técnicas', text:'• Compatibilidad: VS Code, JetBrains (IDEs)\n• Modelos: OpenAI, Anthropic, Ollama, LM Studio, Azure, Google, AWS Bedrock\n• Precio: totalmente gratuito (open-source)\n• Funciones: chat lateral, autocompletado, reglas personalizadas, contexto @\n• Privacidad: soporta modelos 100% locales (Ollama)\n• Configurable: archivo ~/.continue/config.json' },
      { label:'Ejemplo de uso', text:'Seleccionas código en VS Code, abres Continue Chat y preguntas:\n"Explica este código y sugiere mejoras de rendimiento"\n\nResultado: Continue analiza el código seleccionado, explica qué hace, identifica cuellos de botella y sugiere optimizaciones con ejemplos de código.' },
      { label:'Casos de uso', text:'• Chat con IA sobre el código\n• Autocompletado con modelos locales\n• Creación de reglas personalizadas\n• Uso de modelos offline\n• Integración con Ollama, OpenAI, Anthropic' },
      { label:'Ventajas', text:'• Open-source y gratuito\n• Soporta modelos locales (privacidad)\n• Altamente personalizable\n• Múltiples proveedores de modelos\n• Activo desarrollo comunitario' },
      { label:'Desventajas', text:'• Requiere configuración inicial\n• Dependencia de VS Code/JetBrains\n• Modelos locales requieren hardware' },
      { label:'Comparativa', text:'vs Copilot: Continue es open-source y permite modelos locales; Copilot es más pulido pero privativo. Continue más flexible, Copilot más plug-and-play.\nvs Cursor: Continue se integra en tu editor actual; Cursor es un editor separado.\nIdeal para: quienes quieren privacidad con modelos locales.' },
      { label:'Recursos', text:'Repositorio: https://github.com/continuedev/continue\nDocs: https://docs.continue.dev\nDiscord: https://discord.gg/continue' }
  ]},
  { id:'cline', name:'Cline', category:'ia-agents', description:'Agente de IA autónomo para VS Code que puede crear y editar archivos.', url:'https://github.com/cline/cline', licencia:'Open Source (Apache 2.0)', sistemas:'VS Code, Windows, macOS, Linux', nivel:'Avanzado', tags:['open-source','gratuito','windows','linux','macos'], details:[
      { label:'¿Qué es?', text:'Cline es un agente de IA autónomo para VS Code que puede crear, modificar y eliminar archivos, ejecutar comandos, interactuar con terminales y navegar por el proyecto de forma autónoma.' },
      { label:'¿Para qué sirve?', text:'Sirve como asistente de desarrollo autónomo que puede ejecutar tareas complejas sin supervisión constante: implementar features, corregir bugs y refactorizar código.' },
      { label:'Características técnicas', text:'• Extensión de VS Code (instalación desde marketplace)\n• Modelos: OpenAI, Anthropic, Ollama, Google, AWS Bedrock\n• Precio: gratuito (open-source), costos de API\n• Acceso: sistema de archivos, terminal, navegador\n• Límite: editable por el usuario (máximo de requests, tokens)\n• Modo: Plan/Act (planifica antes de ejecutar)' },
      { label:'Ejemplo de uso', text:'Tarea: "Agrega un endpoint GET /api/users/:id a la API Express, con validación, manejo de errores y test unitario"\n\nResultado: Cline analiza el proyecto, identifica los archivos relevantes, modifica routes/users.js, crea middleware de validación, agrega test en __tests__, y ejecuta los tests para verificar.' },
      { label:'Casos de uso', text:'• Implementación autónoma de features\n• Corrección de bugs con análisis contextual\n• Refactorización de código\n• Ejecución de comandos y scripts\n• Navegación y comprensión del proyecto' },
      { label:'Ventajas', text:'• Acceso autónomo al sistema de archivos\n• Ejecución de comandos en terminal\n• Integración profunda con VS Code\n• Open-source\n• Capacidad de tareas complejas' },
      { label:'Desventajas', text:'• Puede ser peligroso si no se supervisa\n• Consume muchos tokens\n• Requiere modelos avanzados\n• Curva de aprendizaje' },
      { label:'Comparativa', text:'vs Roo Code: Cline es más estable; Roo Code tiene mejor planificación autónoma.\nvs Continue: Cline es agente autónomo (actúa por sí mismo); Continue es asistente (responde a comandos).\nvs Copilot: Cline es mucho más autónomo pero requiere más supervisión.' },
      { label:'Recursos', text:'Repositorio: https://github.com/cline/cline\nDocumentación en el repositorio\nMarketplace: instalar desde extensiones VS Code' }
  ]},
  { id:'roo-code', name:'Roo Code', category:'ia-agents', description:'Agente de IA para desarrollo de software con capacidades de planificación y ejecución.', url:'https://github.com/RooVeteran/Roo-Code', licencia:'Open Source', sistemas:'VS Code, Windows, macOS, Linux', nivel:'Avanzado', tags:['open-source','gratuito','windows','linux','macos'], details:[
      { label:'¿Qué es?', text:'Roo Code es un agente de IA para VS Code especializado en desarrollo de software con capacidades de planificación autónoma, ejecución de tareas y edición multi-archivo.' },
      { label:'¿Para qué sirve?', text:'Permite delegar tareas complejas de desarrollo al agente, que planifica y ejecuta los cambios necesarios en el código de forma autónoma.' },
      { label:'Características técnicas', text:'• Extensión de VS Code (fork de Cline)\n• Modos: Plan, Act, Code, Architect, Debug, Custom\n• Modelos: OpenAI, Anthropic, Ollama, Google, AWS\n• Precio: gratuito (open-source), costos de API\n• Funciones: planificación visual, edición multi-archivo, terminal integrada\n• Custom modes: crear modos personalizados con instrucciones específicas' },
      { label:'Ejemplo de uso', text:'Modo Architect: "Diseña una arquitectura para un sistema de autenticación con OAuth2, JWT y roles"\n\nResultado: Roo Code genera un plan detallado con estructura de carpetas, archivos necesarios, flujo de datos y recomendaciones técnicas antes de escribir código.' },
      { label:'Casos de uso', text:'• Planificación autónoma de implementaciones\n• Edición multi-archivo coordinada\n• Depuración y corrección autónoma\n• Refactorización a gran escala' },
      { label:'Ventajas', text:'• Capacidad de planificación autónoma\n• Edición multi-archivo\n• Open-source\n• Integración con VS Code' },
      { label:'Desventajas', text:'• Alto consumo de tokens\n• Requiere supervisión\n• Proyecto relativamente nuevo' },
      { label:'Comparativa', text:'vs Cline: Roo Code tiene mejores modos de planificación (Architect, Plan); Cline es más estable y probado.\nvs Continue: Roo Code es agente autónomo; Continue es asistente conversacional.\nIdeal para: proyectos complejos que requieren planificación antes de ejecutar.' },
      { label:'Recursos', text:'Repositorio: https://github.com/RooVeteran/Roo-Code\nDocumentación en el repositorio' }
  ]},
  // ========== CATEGORÍA 2: AGENTES CLI ==========
  { id:'opencode-cli', name:'OpenCode (CLI)', category:'cli-agents', description:'Herramienta CLI open-source para desarrollo asistido por IA desde la terminal.', url:'https://opencode.ai', licencia:'Open Source (MIT)', sistemas:'Windows, macOS, Linux', nivel:'Intermedio', tags:['open-source','gratuito','windows','linux','macos'], details:[
      { label:'Descripción', text:'OpenCode es una herramienta de terminal que permite interactuar con modelos de IA para desarrollo de software. Funciona como un agente CLI que puede leer, escribir y modificar archivos del proyecto.' },
      { label:'Funcionalidades', text:'• Asistencia de IA en terminal\n• Edición de archivos\n• Ejecución de comandos\n• Integración con Git\n• Múltiples proveedores de IA' },
      { label:'Características técnicas', text:'• Lenguaje: TypeScript (Node.js 18+)\n• Instalación: npm install -g opencode\n• Modelos: OpenAI, Anthropic, Google, AWS Bedrock, Ollama\n• Precio: gratuito (solo pagas APIs)\n• Extras: sistema de skills, MCP, plugins de archivos' },
      { label:'Ejemplo de uso', text:'$ opencode "Haz un refactor del archivo src/utils/api.ts para separar las llamadas HTTP en un servicio independiente"\n\nOpenCode analiza el archivo actual, crea src/services/apiService.ts, actualiza los imports, y verifica que no haya errores. Todo desde terminal.' },
      { label:'Comparativa', text:'vs Aider: OpenCode más customizable (skills); Aider mejor integración Git.\nvs Claude Code: OpenCode es gratuito y open-source; Claude Code es de pago.\nIdeal para: automatización y CI/CD.' },
      { label:'Requisitos', text:'• Node.js 18 o superior\n• npm o yarn\n• API key del proveedor de IA\n• Terminal compatible' },
      { label:'Instalación', text:'npm install -g opencode\n\nO desde el repositorio:\ngit clone https://github.com/anomalyco/opencode\ncd opencode && npm install && npm run build' },
      { label:'Casos de uso', text:'• Automatización de tareas de codificación\n• Desarrollo headless en servidores\n• Integración en scripts y pipelines\n• Edición rápida sin IDE' },
      { label:'Documentación oficial', text:'https://opencode.ai/docs' }
  ]},
  { id:'claude-code', name:'Claude Code', category:'cli-agents', description:'Agente CLI de Anthropic para desarrollo asistido directamente desde la terminal.', url:'https://docs.anthropic.com/en/docs/claude-code/overview', licencia:'De pago (API)', sistemas:'Windows, macOS, Linux', nivel:'Intermedio', tags:['pago','windows','linux','macos'], details:[
      { label:'Descripción', text:'Claude Code es un agente de IA para terminal desarrollado por Anthropic que permite interactuar con Claude directamente desde la línea de comandos para tareas de desarrollo de software.' },
      { label:'Funcionalidades', text:'• Edición de archivos desde terminal\n• Análisis de código\n• Comandos de desarrollo asistidos\n• Integración con Git\n• Contexto del proyecto completo' },
      { label:'Características técnicas', text:'• Lenguaje: TypeScript (Node.js 18+)\n• Modelo: Claude (Opus, Sonnet)\n• Precio: pago por uso de API (+ $20/mes Claude Pro)\n• Instalación: npm install -g @anthropic-ai/claude-code\n• Contexto: hasta 200K tokens por request\n• Soporte: oficial Anthropic, actualizaciones frecuentes' },
      { label:'Ejemplo de uso', text:'$ claude code\n> "Crea un Dockerfile multi-stage para una app Node.js con Express, optimizado para producción"\n\nClaude Code genera el Dockerfile, sugiere un .dockerignore, y puede crear un docker-compose.yml para desarrollo. Explica cada etapa del multi-stage build.' },
      { label:'Comparativa', text:'vs OpenCode: Claude Code está más pulido y tiene soporte oficial de Anthropic; OpenCode es más customizable.\nvs Aider: Claude Code tiene mejor contexto (200K tokens); Aider es gratuito.\nIdeal para: equipos que ya usan Claude.' },
      { label:'Requisitos', text:'• Node.js 18+\n• API key de Anthropic\n• Terminal Unix o Windows (WSL recomendado)' },
      { label:'Instalación', text:'npm install -g @anthropic-ai/claude-code\n\nConfigurar API key:\nexport ANTHROPIC_API_KEY=tu-key' },
      { label:'Casos de uso', text:'• Desarrollo sin IDE\n• Automatización en servidores\n• Revisión de código en terminal\n• Generación de proyectos completos' },
      { label:'Documentación oficial', text:'https://docs.anthropic.com/en/docs/claude-code/overview' }
  ]},
  { id:'gemini-cli', name:'Gemini CLI', category:'cli-agents', description:'CLI de Google para interactuar con Gemini desde la terminal en tareas de desarrollo.', url:'https://google-gemini.github.io/gemini-cli/', licencia:'Open Source', sistemas:'Windows, macOS, Linux', nivel:'Intermedio', tags:['open-source','gratuito','windows','linux','macos'], details:[
      { label:'Descripción', text:'Gemini CLI es la herramienta oficial de Google para interactuar con el modelo Gemini desde la terminal, enfocada en tareas de desarrollo de software.' },
      { label:'Funcionalidades', text:'• Chat interactivo en terminal\n• Generación de código\n• Análisis de archivos\n• Integración con Google Cloud\n• Soporte multimodal' },
      { label:'Características técnicas', text:'• Lenguaje: TypeScript\n• Instalación: npm install -g @google/gemini-cli\n• Modelo: Gemini 2.5 Pro / Flash\n• Precio: gratuito (crédito gratis de API incluido)\n• Integración: Google Cloud, Gmail, Drive\n• Contexto: hasta 1M tokens (Gemini 2.5 Pro)' },
      { label:'Ejemplo de uso', text:'$ gemini-cli "Analiza el archivo server.js y dime qué vulnerabilidades tiene"\n\nGemini CLI lee el archivo, analiza el código, identifica problemas de seguridad, sugiere correcciones y explica cada vulnerabilidad con referencias a OWASP.' },
      { label:'Comparativa', text:'vs Claude Code: Gemini CLI tiene contexto mucho mayor (1M tokens) y es gratuito; Claude Code tiene mejor integración con desarrollo de software.\nvs Codex CLI: Gemini CLI tiene ventaja del ecosistema Google Cloud.\nIdeal para: proyectos en Google Cloud.' },
      { label:'Requisitos', text:'• Node.js 18+\n• API key de Google AI Studio\n• Cuenta de Google' },
      { label:'Instalación', text:'npm install -g @google/gemini-cli\n\nO desde el repositorio:\ngit clone https://github.com/google-gemini/gemini-cli' },
      { label:'Casos de uso', text:'• Desarrollo con Google Cloud\n• Automatización de tareas\n• Análisis técnico desde terminal\n• Integración con servicios Google' },
      { label:'Documentación oficial', text:'https://google-gemini.github.io/gemini-cli/' }
  ]},
  { id:'codex-cli', name:'Codex CLI', category:'cli-agents', description:'CLI de OpenAI basado en Codex para desarrollo asistido desde la terminal.', url:'https://github.com/openai/codex', licencia:'Open Source', sistemas:'Windows, macOS, Linux', nivel:'Avanzado', tags:['open-source','gratuito','windows','linux','macos'], details:[
      { label:'Descripción', text:'Codex CLI es la herramienta de terminal de OpenAI que permite usar modelos Codex para desarrollo asistido, con capacidades de edición de código y ejecución de comandos.' },
      { label:'Funcionalidades', text:'• Edición de código en terminal\n• Ejecución de comandos supervisada\n• Integración con Git\n• Sandbox seguro\n• Múltiples modelos disponibles' },
      { label:'Características técnicas', text:'• Lenguaje: TypeScript\n• Modelos: GPT-4o, o3, o4-mini\n• Precio: pago por uso de API\n• Seguridad: sandbox de ejecución, requires aprobación del usuario\n• Instalación: npm install -g @openai/codex\n• Reciente: lanzado 2025, en desarrollo activo' },
      { label:'Ejemplo de uso', text:'$ codex deploy "Actualiza el README con las instrucciones de instalación y configuración del proyecto"\n\nCodex CLI lee el proyecto, analiza package.json, scripts y documentación existente, y actualiza el README con instrucciones precisas y actualizadas.' },
      { label:'Comparativa', text:'vs Aider: Codex CLI tiene sandbox de seguridad más robusto; Aider es más maduro en integración Git.\nvs Claude Code: Codex CLI usa modelos OpenAI; Claude Code usa Claude. Diferencia principal es el modelo subyacente.\nvs OpenCode: Codex CLI es más nuevo y tiene menos features.' },
      { label:'Requisitos', text:'• Node.js 18+\n• API key de OpenAI\n• Sistema operativo compatible' },
      { label:'Instalación', text:'npm install -g @openai/codex\n\nO descargar desde:\nhttps://github.com/openai/codex-cli/releases' },
      { label:'Casos de uso', text:'• Automatización segura de código\n• Desarrollo en entornos restringidos\n• Ejecución controlada de comandos\n• Refactorización asistida' },
      { label:'Documentación oficial', text:'https://github.com/openai/codex' }
  ]},
  { id:'aider', name:'Aider', category:'cli-agents', description:'Asistente de codificación por IA en terminal con edición directa de archivos y control de versiones.', url:'https://aider.chat', licencia:'Open Source (Apache 2.0)', sistemas:'Windows, macOS, Linux', nivel:'Intermedio', tags:['open-source','gratuito','windows','linux','macos'], details:[
      { label:'Descripción', text:'Aider es un asistente de codificación por IA que trabaja desde la terminal. Se integra con Git y permite editar archivos directamente con comandos de lenguaje natural.' },
      { label:'Funcionalidades', text:'• Edición directa de archivos\n• Integración con Git (commits automáticos)\n• Soporte multi-lenguaje\n• Mapas de repositorio para contexto\n• Múltiples proveedores de IA' },
      { label:'Características técnicas', text:'• Lenguaje: Python\n• Instalación: pip install aider-chat\n• Modelos: GPT-4o, Claude, Gemini, DeepSeek, Ollama\n• Precio: gratuito (open-source), costos de API\n• Git: commits automáticos con mensajes descriptivos\n• Mapas: analiza el repositorio entero para contexto' },
      { label:'Ejemplo de uso', text:'$ aider\n> "Refactoriza la función handleRequest en el archivo api.js para que use async/await en lugar de callbacks"\n\nAider lee el archivo, aplica el refactor, verifica que no haya errores y hace un commit automático con el mensaje "refactor: convert handleRequest to async/await".' },
      { label:'Comparativa', text:'vs OpenCode: Aider se integra mejor con Git (commits automáticos); OpenCode es más flexible con skills.\nvs Claude Code: Aider es gratuito y open-source; Claude Code es de pago pero más pulido.\nIdeal para: quienes quieren control de versiones automático.' },
      { label:'Requisitos', text:'• Python 3.8+\n• pip\n• API key del proveedor de IA\n• Git instalado' },
      { label:'Instalación', text:'pip install aider-chat\n\nConfigurar:\nexport ANTHROPIC_API_KEY=tu-key\no\nexport OPENAI_API_KEY=tu-key' },
      { label:'Casos de uso', text:'• Pair programming desde terminal\n• Refactorización con control de versiones\n• Generación de features con commits\n• Depuración asistida con Git' },
      { label:'Documentación oficial', text:'https://aider.chat/docs/\nhttps://github.com/paul-gauthier/aider' }
  ]},
  { id:'goose', name:'Goose', category:'cli-agents', description:'Agente de IA para desarrolladores con ejecución de código y automatización.', url:'https://block.github.io/goose/', licencia:'Open Source', sistemas:'Windows, macOS, Linux', nivel:'Avanzado', tags:['open-source','gratuito','windows','linux','macos'], details:[
      { label:'Descripción', text:'Goose es un agente de IA para desarrolladores que puede ejecutar código, automatizar tareas y navegar por el sistema de archivos desde la terminal.' },
      { label:'Funcionalidades', text:'• Ejecución de código en sandbox\n• Automatización de tareas\n• Navegación del sistema de archivos\n• Instalación de dependencias\n• Integración con múltiples LLMs' },
      { label:'Características técnicas', text:'• Lenguaje: TypeScript (Node.js 18+)\n• Instalación: npm install -g @block/goose\n• Modelos: GPT-4o, Claude, Gemini, Ollama\n• Precio: gratuito (open-source), costos de API\n• Uso: general-purpose, no limitado a código\n• Shell: integración con shell del sistema' },
      { label:'Ejemplo de uso', text:'$ goose\n> "Configura un entorno de desarrollo para este proyecto: instala dependencias, crea la base de datos, y ejecuta las migraciones"\n\nGoose ejecuta npm install, configura variables de entorno, crea la BD, corre migraciones, y verifica que todo funcione correctamente.' },
      { label:'Comparativa', text:'vs Aider: Goose es más general (automatización completa); Aider está enfocado en edición de código.\nvs OpenCode: Goose tiene mejor ejecución de comandos del sistema; OpenCode más enfocado en edición de archivos.\nIdeal para: automatización DevOps y configuración de entornos.' },
      { label:'Requisitos', text:'• Node.js 18+\n• npm\n• API key del proveedor de IA' },
      { label:'Instalación', text:'npm install -g @block/goose\n\nO desde repositorio:\ngit clone https://github.com/block/goose\ncd goose && npm install' },
      { label:'Casos de uso', text:'• Automatización de DevOps\n• Desarrollo en entornos headless\n• Pruebas de seguridad\n• Gestión de infraestructura' },
      { label:'Documentación oficial', text:'https://block.github.io/goose/\nhttps://github.com/block/goose' }
  ]},
  // ========== CATEGORÍA 3: CONCEPTOS Y ARQUITECTURAS ==========
  { id:'prompt-engineering', name:'Prompt Engineering', category:'concepts', description:'Disciplina que estudia cómo diseñar y optimizar instrucciones para modelos de IA.', url:'', licencia:'—', sistemas:'—', nivel:'Principiante', tags:[], details:[
      { label:'¿Qué es?', text:'El Prompt Engineering es la disciplina de diseñar, probar y optimizar las instrucciones (prompts) que se le dan a un modelo de IA para obtener respuestas precisas y útiles.' },
      { label:'¿Para qué sirve?', text:'Permite comunicarse eficazmente con la IA, reduciendo la ambigüedad y mejorando la calidad de las respuestas. Es la habilidad fundamental para trabajar con modelos de lenguaje.' },
      { label:'Técnicas principales', text:'• Few-shot: dar ejemplos en el prompt\n• Chain-of-thought: pedir razonamiento paso a paso\n• Role prompting: asignar un rol a la IA\n• Zero-shot: instrucción directa sin ejemplos\n• System prompts: instrucciones de sistema persistentes' },
      { label:'Ejemplo práctico', text:'Prompt básico:\n"Escribe una función en Python que ordene una lista de diccionarios por una clave específica"\n\nPrompt optimizado:\n"Actúa como desarrollador Python senior. Necesito una función ordenar_lista(lista, clave, ascendente=True) que:\n1. Valide que todos los diccionarios tengan la clave\n2. Use sorted() con key y reverse\n3. Maneje TypeError con mensaje claro\n4. Incluya type hints y docstring\n5. Agrega 3 casos de prueba con assert"\n\nLa diferencia es enorme en calidad del resultado.' },
      { label:'Importancia', text:'Un buen prompt puede marcar la diferencia entre una respuesta útil y una respuesta incorrecta o incompleta. Es la interfaz principal entre el humano y la IA.' },
      { label:'Herramientas relacionadas', text:'• PromptingGuide: https://promptingguide.ai\n• OpenAI Cookbook: https://cookbook.openai.com\n• Anthropic Prompt Library\n• AIPRM (extension Chrome para prompts)' },
      { label:'Recursos', text:'Prompt Engineering Guide: https://promptingguide.ai\nOpenAI Cookbook: https://cookbook.openai.com\nBest practices: https://platform.openai.com/docs/guides/prompt-engineering' }
  ]},
  { id:'context-engineering', name:'Context Engineering', category:'concepts', description:'Técnica para estructurar y optimizar el contexto que se proporciona a la IA.', url:'', licencia:'—', sistemas:'—', nivel:'Intermedio', tags:[], details:[
      { label:'¿Qué es?', text:'El Context Engineering es la práctica de seleccionar, estructurar y optimizar toda la información contextual que se proporciona a un modelo de IA para mejorar la calidad de sus respuestas.' },
      { label:'¿Para qué sirve?', text:'Asegura que la IA tenga la información necesaria para entender el problema, evitando ruido y mejorando la precisión de las respuestas. Es especialmente importante en proyectos grandes.' },
      { label:'Componentes', text:'• Contexto del proyecto (stack, estructura)\n• Contexto del archivo específico\n• Instrucciones y reglas del equipo\n• Historia relevante de la conversación\n• Restricciones y requisitos' },
      { label:'Ejemplo práctico', text:'Contexto mínimo para desarrollo:\n---\nProyecto: E-commerce API (Node.js/Express, MongoDB)\nStack: Express 4, Mongoose 8, Jest, Redis\nEstructura: /src/{routes,controllers,models,middleware}\nConvenciones: camelCase, async/await, errores con AppError\nInstrucción: Genera el controlador de productos\n---\n\nEste contexto le dice a la IA exactamente cómo debe escribir el código.' },
      { label:'Buenas prácticas', text:'• Ser selectivo con la información\n• Estructurar el contexto de lo general a lo específico\n• Actualizar el contexto según avanza el proyecto\n• Eliminar información obsoleta o irrelevante' },
      { label:'Herramientas relacionadas', text:'• Prompt Manager (incluido en CleverLabs)\n• .cursorrules (Cursor)\n• .clinerules (Cline)\n• CLAUDE.md (Claude Code)\n• continue.json (Continue)' },
      { label:'Recursos', text:'Ver lecciones del Módulo 3 del curso' }
  ]},
  { id:'harness-engineering', name:'Harness Engineering', category:'concepts', description:'Metodología para construir entornos controlados que optimizan la interacción con IA.', url:'', licencia:'—', sistemas:'—', nivel:'Avanzado', tags:[], details:[
      { label:'¿Qué es un Harness?', text:'Un Harness es un entorno estructurado que envuelve la interacción con la IA, proporcionando contexto, reglas, herramientas y límites para garantizar resultados predecibles y de calidad.' },
      { label:'¿Qué es Harness Engineering?', text:'Es la disciplina de diseñar, construir y mantener estos entornos (harnesses) para optimizar la interacción con modelos de IA en proyectos de software.' },
      { label:'¿Para qué sirve?', text:'Estandariza la comunicación con la IA, reduce la variabilidad en las respuestas, facilita la colaboración en equipo y permite escalar el uso de IA en proyectos grandes.' },
      { label:'Componentes', text:'1. System Prompt: instrucciones base del asistente\n2. Contexto del proyecto: documentación relevante\n3. Reglas y restricciones: límites de actuación\n4. Herramientas: APIs, scripts, acceso a archivos\n5. Pipeline de validación: revisión y pruebas\n6. Feedback loop: mejora continua del harness' },
      { label:'Cómo crear uno', text:'1. Definir el objetivo del harness\n2. Identificar la información necesaria\n3. Estructurar el system prompt\n4. Agregar reglas y límites\n5. Configurar herramientas disponibles\n6. Establecer validaciones\n7. Probar e iterar' },
      { label:'Ejemplo práctico', text:'Harness mínimo para equipo backend:\n---\nSystem Prompt: "Eres un desarrollador backend senior especializado en Node.js y TypeScript"\nContexto: README.md, package.json, tsconfig.json, estructura de carpetas\nReglas: "Usa siempre tipos estrictos. No uses any. Tests obligatorios."\nHerramientas: ESLint, Prettier, Jest, TypeScript compiler\nValidación: "Ejecuta npm run build y npm test antes de finalizar"\n---' },
      { label:'Casos de uso', text:'• Equipos que usan IA diariamente\n• Proyectos con múltiples desarrolladores\n• Automatización de tareas repetitivas\n• Integración de IA en pipelines CI/CD\n• Estandarización de calidad de código' },
      { label:'Ventajas', text:'• Consistencia en resultados\n• Escalabilidad del uso de IA\n• Reducción de errores\n• Facilitación de onboarding\n• Trazabilidad y control' },
      { label:'Desventajas', text:'• Requiere inversión inicial\n• Mantenimiento continuo\n• Puede ser demasiado rígido\n• Curva de aprendizaje del equipo' },
      { label:'Buenas prácticas', text:'• Mantener el harness simple al inicio\n• Iterar basado en resultados reales\n• Documentar cambios y decisiones\n• Versionar el harness (como código)\n• Solicitar retroalimentación del equipo' }
  ]},
  { id:'mcp', name:'MCP (Model Context Protocol)', category:'concepts', description:'Protocolo abierto para conectar modelos de IA con fuentes de datos y herramientas externas.', url:'https://modelcontextprotocol.io', licencia:'Open Source', sistemas:'Multi-plataforma', nivel:'Avanzado', tags:['open-source'], details:[
      { label:'¿Qué es?', text:'MCP (Model Context Protocol) es un protocolo abierto desarrollado por Anthropic que permite conectar modelos de IA con fuentes de datos externas, APIs y herramientas de forma estandarizada.' },
      { label:'¿Para qué sirve?', text:'Proporciona una interfaz estándar para que los modelos de IA accedan a información actualizada, bases de conocimiento, sistemas de archivos y servicios externos de manera segura.' },
      { label:'Arquitectura', text:'• Host: aplicación que aloja el modelo (IDE, CLI)\n• Client: conexión del host al servidor MCP\n• Server: proveedor de recursos y herramientas\n• Resources: datos y archivos expuestos\n• Tools: funciones ejecutables por la IA' },
      { label:'Ejemplo práctico', text:'Caso: Un servidor MCP para base de datos PostgreSQL\n---\nHerramientas expuestas:\n• query_database(sql): ejecuta SELECTs\n• get_schema(table): obtén estructura de tabla\n• list_tables(): lista las tablas disponibles\n\nUso: el modelo de IA detecta cuándo necesita datos, llama a la herramienta adecuada, y usa el resultado para generar respuestas precisas basadas en datos reales.' },
      { label:'Importancia', text:'MCP estandariza cómo los modelos de IA se conectan con el mundo exterior, eliminando la necesidad de integraciones personalizadas para cada herramienta.' },
      { label:'Herramientas relacionadas', text:'• MCP Servers oficiales: filesystem, GitHub, PostgreSQL, SQLite\n• MCP Marketplace (community servers)\n• OpenCode: soporta MCP nativamente' },
      { label:'Recursos', text:'Sitio oficial: https://modelcontextprotocol.io\nRepositorio: https://github.com/modelcontextprotocol\nServidores: https://github.com/modelcontextprotocol/servers' }
  ]},
  { id:'rag', name:'RAG (Retrieval-Augmented Generation)', category:'concepts', description:'Técnica que combina recuperación de información con generación de texto.', url:'', licencia:'—', sistemas:'—', nivel:'Intermedio', tags:[], details:[
      { label:'¿Qué es?', text:'RAG (Retrieval-Augmented Generation) es una técnica que combina un sistema de recuperación de información con un modelo generativo de IA para producir respuestas basadas en datos reales y actualizados.' },
      { label:'¿Para qué sirve?', text:'Permite que la IA responda con información factual y actualizada sin necesitar reentrenamiento, al recuperar documentos relevantes de una base de conocimiento antes de generar la respuesta.' },
      { label:'Componentes', text:'• Base de conocimiento (vectores, documentos)\n• Embeddings (representación vectorial)\n• Retrieval (búsqueda semántica)\n• Generación (modelo de IA)\n• Orquestación (flujo recuperación-generación)' },
      { label:'Ejemplo práctico', text:'Flujo RAG para documentación técnica:\n1. Usuario pregunta "¿Cómo configuro la autenticación en Express?"\n2. Sistema convierte la pregunta en vector (embedding)\n3. Busca en la BD vectorial documentos similares\n4. Recupera los 3 fragmentos más relevantes de la docs\n5. Envía pregunta + fragmentos al modelo de IA\n6. La IA genera respuesta basada en los fragmentos\n\nResultado: respuesta precisa, actualizada y con citas a la fuente.' },
      { label:'Casos de uso', text:'• Chatbots con documentación técnica\n• Asistentes con conocimiento actualizado\n• Búsqueda semántica en repositorios\n• Análisis de documentación extensa' },
      { label:'Herramientas relacionadas', text:'• LangChain: framework para RAG\n• LlamaIndex: optimizado para indexación\n• ChromaDB, Pinecone, Weaviate (BD vectoriales)\n• OpenAI Embeddings, Anthropic Embeddings' },
      { label:'Recursos', text:'Guía de RAG: https://python.langchain.com/docs/tutorials/rag/\nLlamaIndex: https://www.llamaindex.ai' }
  ]},
  { id:'tool-calling', name:'Tool Calling', category:'concepts', description:'Capacidad de los modelos de IA para invocar funciones y APIs externas.', url:'', licencia:'—', sistemas:'—', nivel:'Avanzado', tags:[], details:[
      { label:'¿Qué es?', text:'Tool Calling (anteriormente Function Calling) es la capacidad de los modelos de IA de detectar cuándo deben invocar una función externa y generar los parámetros necesarios para hacerlo.' },
      { label:'¿Para qué sirve?', text:'Permite que la IA interactúe con el mundo real: ejecutar consultas a bases de datos, llamar a APIs, enviar emails, crear archivos, y cualquier otra acción programática.' },
      { label:'Flujo de trabajo', text:'1. Definir herramientas (nombre, descripción, parámetros)\n2. Enviar prompt + definición de herramientas al modelo\n3. El modelo decide si invocar una herramienta\n4. Ejecutar la función en el sistema\n5. Devolver el resultado al modelo para continuar' },
      { label:'Ejemplo práctico', text:'Definición de herramienta:\n---\n{\n  name: "get_weather",\n  description: "Obtiene el clima actual de una ciudad",\n  parameters: {\n    city: { type: "string", description: "Nombre de la ciudad" }\n  }\n}\n---\n\nUsuario: "¿Qué clima hace en Madrid?"\nModelo: detecta que debe llamar a get_weather con parámetro "Madrid"\nSistema: ejecuta la función, obtiene datos meteorológicos\nModelo: genera respuesta "En Madrid hace 28°C con cielo despejado"' },
      { label:'Casos de uso', text:'• Asistentes que ejecutan código\n• Chatbots que consultan bases de datos\n• Agentes que realizan acciones en sistemas\n• Automatización de tareas administrativas' },
      { label:'Herramientas relacionadas', text:'• OpenAI Function Calling: API de herramientas\n• Anthropic Tool Use: API de herramientas\n• MCP: protocolo estándar para herramientas\n• LangChain: integración de herramientas' },
      { label:'Recursos', text:'OpenAI: https://platform.openai.com/docs/guides/function-calling\nAnthropic: https://docs.anthropic.com/en/docs/build-with-claude/tool-use' }
  ]},
  { id:'ai-agents', name:'AI Agents', category:'concepts', description:'Sistemas autónomos que usan IA para planificar y ejecutar tareas complejas.', url:'', licencia:'—', sistemas:'—', nivel:'Avanzado', tags:[], details:[
      { label:'¿Qué es?', text:'Un AI Agent es un sistema autónomo que utiliza un modelo de IA para percibir su entorno, razonar, planificar y ejecutar acciones para lograr objetivos específicos sin intervención humana constante.' },
      { label:'¿Para qué sirve?', text:'Automatiza tareas complejas que requieren múltiples pasos, toma de decisiones y adaptación a condiciones cambiantes. Pueden desde responder emails hasta gestionar infraestructura cloud.' },
      { label:'Componentes', text:'• Modelo de IA (cerebro del agente)\n• Percepción (entrada de información)\n• Memoria (historial y contexto)\n• Planificación (descomposición de tareas)\n• Herramientas (capacidades de acción)\n• Bucle de retroalimentación (evaluación y ajuste)' },
      { label:'Ejemplo práctico', text:'Agente para desarrollo de software:\n---\nTarea: "Implementa un endpoint de registro de usuarios"\n\n1. Planificación: el agente descompone la tarea\n   - Crear modelo User en MongoDB\n   - Crear ruta POST /api/auth/register\n   - Crear controlador con validaciones\n   - Agregar tests\n   - Ejecutar pruebas\n\n2. Ejecuta cada paso usando sus herramientas\n3. Verifica resultados con tests\n4. Reporta progreso y finalización\n---' },
      { label:'Tipos de agentes', text:'• Agentes reactivos: respuesta inmediata a estímulos\n• Agentes con memoria: mantienen historial\n• Agentes con planificación: descomponen objetivos\n• Multi-agente: varios agentes colaborando' },
      { label:'Herramientas relacionadas', text:'• LangGraph: framework para agentes\n• CrewAI: orquestación multi-agente\n• Autogen: agentes conversacionales\n• OpenAI Agents SDK\n• Anthropic Agent Cookbook' },
      { label:'Recursos', text:'Anthropic: https://docs.anthropic.com/en/docs/agents-and-tools\nOpenAI: https://platform.openai.com/docs/guides/agents\nLangGraph: https://langchain-ai.github.io/langgraph/' }
  ]},
  { id:'workflows-ia', name:'Workflows de IA', category:'concepts', description:'Patrones para orquestar múltiples llamadas a IA en flujos de trabajo estructurados.', url:'', licencia:'—', sistemas:'—', nivel:'Avanzado', tags:[], details:[
      { label:'¿Qué es?', text:'Los Workflows de IA son patrones de orquestación que encadenan múltiples llamadas a modelos de IA en una secuencia estructurada, donde cada paso procesa el resultado del anterior.' },
      { label:'¿Para qué sirve?', text:'Permiten construir aplicaciones complejas de IA que van más allá de una sola llamada, como sistemas de revisión multi-etapa, generación con validación, y procesamiento pipeline.' },
      { label:'Patrones comunes', text:'• Chain: secuencia lineal de pasos\n• Router: enrutamiento a diferentes especialistas\n• Parallel: ejecución simultánea de tareas\n• Orchestrator: coordinador central que delega\n• Evaluator-optimizer: generación + revisión cíclica' },
      { label:'Ejemplo práctico', text:'Workflow de generación de código con revisión:\n---\n1. Generación: IA escribe código basado en requisitos\n2. Revisión: segunda IA revisa seguridad y calidad\n3. Tests: tercera IA genera tests unitarios\n4. Ejecución: sistema ejecuta tests\n5. Feedback: si falla, vuelve al paso 1 con feedback\n6. Documentación: cuarta IA documenta el código final\n\nResultado: código generado, revisado, testeado y documentado.' },
      { label:'Casos de uso', text:'• Generación de código con revisión automática\n• Traducción multi-idioma con verificación\n• Análisis de documentación en pipeline\n• Sistemas de recomendación multi-paso' },
      { label:'Herramientas relacionadas', text:'• LangChain: cadenas y workflows\n• LangGraph: grafos de estados para agentes\n• Anthropic Workflows: guía de patrones\n• Temporal: orquestación de workflows' },
      { label:'Recursos', text:'Anthropic: https://docs.anthropic.com/en/docs/build-with-claude/agentic-workflows\nOpenAI: https://platform.openai.com/docs/guides/agents\nLangChain: https://python.langchain.com/docs/how_to/' }
  ]},
];

const TOTAL_LESSONS = MODULES.reduce((s,m) => s + m.lessons.length, 0);

function getUser() {
  try { return JSON.parse(localStorage.getItem('cursoUser')) || null }
  catch { return null }
}

function saveUser(u) {
  localStorage.setItem('cursoUser', JSON.stringify(u))
}

function getCompleted() {
  try { return JSON.parse(localStorage.getItem('cursoCompleted')) || [] }
  catch { return [] }
}

function saveCompleted(arr) {
  localStorage.setItem('cursoCompleted', JSON.stringify(arr))
}

function getGrades() {
  try { return JSON.parse(localStorage.getItem('cursoGrades')) || {} }
  catch { return {} }
}

function saveGrades(g) {
  localStorage.setItem('cursoGrades', JSON.stringify(g))
}

document.addEventListener('DOMContentLoaded', function() {
  initPrefs()
  initPromptBlocks()
  if (document.getElementById('panelContent')) {
    initPanel()
  }
  if (document.getElementById('configForm')) {
    initConfig()
  }
  if (document.getElementById('registroForm')) {
    document.getElementById('registroForm').addEventListener('submit', handleRegistro)
  }
  if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', handleLogin)
  }
})

function handleRegistro(e) {
  e.preventDefault()
  const name = document.getElementById('regName').value.trim()
  const email = document.getElementById('regEmail').value.trim()
  const pass = document.getElementById('regPassword').value
  if (!name || !email || !pass) { alert('Completa todos los campos'); return }
  const users = JSON.parse(localStorage.getItem('cursoUsers') || '[]')
  if (users.find(u => u.email === email)) { alert('Este correo ya está registrado'); return }
  const user = { name, email, password: pass, photo: '' }
  users.push(user)
  localStorage.setItem('cursoUsers', JSON.stringify(users))
  const session = { name, email, photo: '' }
  saveUser(session)
  window.location.href = 'panel.html'
}

function handleLogin(e) {
  e.preventDefault()
  const email = document.getElementById('loginEmail').value.trim()
  const pass = document.getElementById('loginPassword').value
  const users = JSON.parse(localStorage.getItem('cursoUsers') || '[]')
  const found = users.find(u => u.email === email && u.password === pass)
  if (!found) { alert('Correo o contraseña incorrectos'); return }
  const session = { name: found.name, email: found.email, photo: found.photo || '' }
  saveUser(session)
  window.location.href = 'panel.html'
}

function handleSuperAdminLogin(e) {
  e.preventDefault()
  const email = document.getElementById('superadminEmail').value.trim()
  const pass = document.getElementById('superadminPassword').value
  if (email === 'superadmin@cleverlabs.com' && pass === 'SuperAdmin123') {
    const session = { name: 'Super Administrador', email: email, photo: '', isAdmin: true, isSuperAdmin: true }
    saveUser(session)
    window.location.href = 'superadmin.html'
  } else {
    alert('Credenciales incorrectas')
  }
}

function initPanel() {
  const user = getUser()
  if (!user) { window.location.href = 'login.html'; return }

  renderPerfilEnPanel(user)
  updateProgress()
  renderInitialView()

  document.getElementById('sidebarToggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('collapsed')
  })

  document.querySelectorAll('.sidebar-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      renderView(this.dataset.section)
    })
  })

  document.getElementById('profileTrigger').addEventListener('click', function(e) {
    e.stopPropagation()
    document.getElementById('profileDropdown').classList.toggle('show')
  })

  document.addEventListener('click', function() {
    document.getElementById('profileDropdown').classList.remove('show')
  })

  document.getElementById('photoInput').addEventListener('change', function(e) {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = function(ev) {
      const dataUrl = ev.target.result
      document.getElementById('dropdownPic').src = dataUrl
      document.getElementById('profilePic').src = dataUrl
      const user = getUser()
      if (user) { user.photo = dataUrl; saveUser(user) }
    }
    reader.readAsDataURL(file)
  })
}

function renderPerfilEnPanel(user) {
  const src = user.photo || 'img/default-avatar.svg'
  document.getElementById('profilePic').src = src
  document.getElementById('dropdownPic').src = src
  document.getElementById('dropdownName').value = user.name
  document.getElementById('dropdownEmail').textContent = user.email
}

function guardarPerfil() {
  const user = getUser()
  if (!user) return
  user.name = document.getElementById('dropdownName').value.trim() || user.name
  user.photo = document.getElementById('dropdownPic').src
  saveUser(user)
  renderPerfilEnPanel(user)
  document.getElementById('profileDropdown').classList.remove('show')
  alert('Perfil actualizado')
}

function cerrarSesion() {
  localStorage.removeItem('cursoUser')
}

function renderInitialView() {
  const content = document.getElementById('panelContent')
  const completed = getCompleted()
  if (completed.length > 0) {
    const lastKey = completed[completed.length - 1]
    const m = lastKey.match(/m(\d+)-l(\d+)/)
    if (m) {
      const mod = MODULES.find(function(x) { return x.id === parseInt(m[1]) })
      const les = mod && mod.lessons.find(function(x) { return x.id === parseInt(m[2]) })
      if (mod && les) {
        content.innerHTML = '<div class="progress-banner"><p><strong>Continuar desde:</strong> Módulo ' + mod.id + ', Lección ' + les.id + ' — ' + les.title + '</p><button class="boton" onclick="loadLesson(' + mod.id + ',' + les.id + ')">Continuar</button></div>'
        return
      }
    }
  }
  content.innerHTML = '<div class="progress-banner watermark"><p>Sin progreso</p></div>'
}

function renderView(section) {
  const content = document.getElementById('panelContent')
  if (section === 'modulos') {
    content.innerHTML = '<h2 class="section-title">Módulos del Curso</h2><div class="modulos-grid" id="modulosGrid"></div>'
    const grid = document.getElementById('modulosGrid')
    MODULES.forEach(function(m) {
      const card = document.createElement('div')
      card.className = 'modulo-card'
      card.style.cursor = 'pointer'
      card.innerHTML = '<h3>Módulo ' + m.id + '</h3><p>' + m.title + '</p><span class="boton" style="margin-top:0">Ver módulo</span>'
      card.addEventListener('click', function() { renderModuleLessons(m.id) })
      grid.appendChild(card)
    })
  } else if (section === 'herramientas') {
    renderHerramientas(content)
  } else if (section === 'calificaciones') {
    renderCalificaciones()
  }
}

// ============================================================
// HERRAMIENTAS — categorized view with search, filters, detail
// ============================================================

function renderHerramientas(container) {
  const CATEGORIES = [
    { key:'ia-agents', icon:'🤖', label:'Agentes de IA' },
    { key:'cli-agents', icon:'💻', label:'Agentes para CLI' },
    { key:'concepts', icon:'🧠', label:'Conceptos y Arquitecturas' },
  ]

  // Intro for CLI agents
  const CLI_INTRO = '<div class="herramientas-intro"><strong>¿Qué es un agente CLI?</strong> Un agente CLI (Command Line Interface) es una herramienta de IA que opera directamente desde la terminal. A diferencia de las interfaces gráficas, los agentes CLI permiten automatizar tareas, integrarse en pipelines y trabajar en entornos headless como servidores o contenedores. <strong>Ventajas:</strong> mayor control, automatizable, menor consumo de recursos, ideal para CI/CD. <strong>Flujo típico:</strong> instalación → configuración → prompt → revisión → iteración.</div>'

  let html = '<h2 class="section-title">🔧 Herramientas</h2>'

  // Search + filters
  html += '<div class="herramientas-controls">'
  html += '<input type="text" id="herramientasSearch" class="herramientas-search" placeholder="Buscar herramientas y conceptos..." oninput="filterHerramientas()">'
  html += '<div class="herramientas-filters" id="herramientasFilters">'
  html += '<button class="filter-btn active" data-filter="all" onclick="setFilter(\'all\')">Todas</button>'
  html += '<button class="filter-btn" data-filter="ia-agents" onclick="setFilter(\'ia-agents\')">🤖 Agentes IA</button>'
  html += '<button class="filter-btn" data-filter="cli-agents" onclick="setFilter(\'cli-agents\')">💻 CLI</button>'
  html += '<button class="filter-btn" data-filter="concepts" onclick="setFilter(\'concepts\')">🧠 Conceptos</button>'
  html += '<button class="filter-btn" data-filter="open-source" onclick="setFilter(\'open-source\')">Open Source</button>'
  html += '<button class="filter-btn" data-filter="gratuito" onclick="setFilter(\'gratuito\')">Gratuito</button>'
  html += '<button class="filter-btn" data-filter="pago" onclick="setFilter(\'pago\')">De pago</button>'
  html += '<span class="filter-sep"></span>'
  html += '<button class="filter-btn" data-filter="windows" onclick="setFilter(\'windows\')">Windows</button>'
  html += '<button class="filter-btn" data-filter="linux" onclick="setFilter(\'linux\')">Linux</button>'
  html += '<button class="filter-btn" data-filter="macos" onclick="setFilter(\'macos\')">macOS</button>'
  html += '<button class="filter-btn" data-filter="web" onclick="setFilter(\'web\')">Web</button>'
  html += '</div></div>'

  // Categories
  html += '<div id="herramientasCategories">'
  CATEGORIES.forEach(function(cat) {
    const items = TOOLS.filter(function(t) { return t.category === cat.key })
    if (items.length === 0) return
    html += '<div class="herramientas-category" data-category="' + cat.key + '">'
    html += '<h3 class="category-title">' + cat.icon + ' ' + cat.label + '</h3>'
    if (cat.key === 'cli-agents') html += CLI_INTRO
    html += '<div class="tools-grid">'
    items.forEach(function(t) {
      const tagHtml = (t.licencia && t.licencia !== '—') ? '<span class="tool-licencia">' + t.licencia + '</span>' : ''
      html += '<div class="tool-card" data-category="' + t.category + '" data-tags="' + (t.tags || []).join(',') + '">'
      html += '<h3>' + t.name + '</h3>'
      html += '<p>' + t.description + '</p>'
      html += tagHtml
      html += '<div class="tool-actions"><button class="boton" onclick="showToolDetail(\'' + t.id + '\')" style="margin-top:10px">Ver más</button>'
      if (t.url) html += '<a href="' + t.url + '" target="_blank" class="boton boton-outline" style="margin-top:10px">Sitio oficial</a>'
      html += '</div></div>'
    })
    html += '</div></div>'
  })
  html += '</div>'

  container.innerHTML = html
}

// ponytail: minimal code formatter for detail text
function formatDetailText(text) {
  text = text.replace(/```(\w*)\n?([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
  return text.replace(/\n/g, '<br>')
}

function showToolDetail(id) {
  const t = TOOLS.find(function(x) { return x.id === id })
  if (!t) return

  let body = '<div class="tool-detail">'

  // Header
  body += '<div class="detail-header">'
  if (t.url) body += '<a href="' + t.url + '" target="_blank" class="boton" style="margin-top:0">Visitar sitio oficial →</a>'
  body += '</div>'

  // Description
  body += '<p class="detail-desc">' + t.description + '</p>'

  // Meta info
  body += '<div class="detail-meta">'
  if (t.nivel) body += '<span><strong>Nivel:</strong> ' + t.nivel + '</span>'
  if (t.sistemas && t.sistemas !== '—') body += '<span><strong>Sistemas:</strong> ' + t.sistemas + '</span>'
  if (t.licencia && t.licencia !== '—') body += '<span><strong>Licencia:</strong> ' + t.licencia + '</span>'
  body += '</div>'

  // Detail sections
  t.details.forEach(function(d) {
    body += '<div class="detail-section">'
    body += '<h4>' + d.label + '</h4>'
    body += '<div class="detail-text">' + formatDetailText(d.text) + '</div>'
    body += '</div>'
  })

  body += '</div>'
  abrirModal(t.name, body)
}

// Filter + search state
var HERRAMIENTAS_FILTER = 'all'

function setFilter(filter) {
  HERRAMIENTAS_FILTER = filter
  document.querySelectorAll('#herramientasFilters .filter-btn').forEach(function(b) {
    b.classList.toggle('active', b.dataset.filter === filter)
  })
  filterHerramientas()
}

function filterHerramientas() {
  const q = (document.getElementById('herramientasSearch').value || '').toLowerCase().trim()
  const filter = HERRAMIENTAS_FILTER

  document.querySelectorAll('#herramientasCategories .herramientas-category').forEach(function(cat) {
    let visibleCount = 0
    cat.querySelectorAll('.tool-card').forEach(function(card) {
      const name = card.querySelector('h3').textContent.toLowerCase()
      const desc = card.querySelector('p').textContent.toLowerCase()
      const tags = (card.dataset.tags || '').split(',')
      const catKey = card.dataset.category

      // Search match
      const matchSearch = !q || name.indexOf(q) !== -1 || desc.indexOf(q) !== -1
      // Filter match
      let matchFilter = filter === 'all'
      if (!matchFilter) {
        if (filter === catKey) matchFilter = true
        else matchFilter = tags.indexOf(filter) !== -1
      }

      const show = matchSearch && matchFilter
      card.style.display = show ? '' : 'none'
      if (show) visibleCount++
    })
    cat.style.display = visibleCount > 0 ? '' : 'none'
  })
}

function renderModuleLessons(modId) {
  const mod = MODULES.find(function(m) { return m.id === modId })
  if (!mod) return
  const content = document.getElementById('panelContent')
  const completed = getCompleted()
  const records = getGradeRecords()
  let html = '<h2 class="section-title">Módulo ' + mod.id + ': ' + mod.title + '</h2>'
  html += '<ul class="lesson-list">'

  // Find the first incomplete lesson index to mark subsequent as locked
  let firstIncompleteIdx = -1
  for (var i = 0; i < mod.lessons.length; i++) {
    const key = 'm' + mod.id + '-l' + mod.lessons[i].id
    if (completed.indexOf(key) === -1) { firstIncompleteIdx = i; break }
  }

  mod.lessons.forEach(function(les, idx) {
    const key = 'm' + mod.id + '-l' + les.id
    const done = completed.indexOf(key) !== -1
    // Unlocked if: already completed, first incomplete, or previous lesson is completed
    const unlocked = done || idx === firstIncompleteIdx || (firstIncompleteIdx !== -1 && idx < firstIncompleteIdx)
    const record = records.find(function(r) { return r.lessonKey === key })
    const gradeStr = record ? ' (' + record.grade + '%)' : ''
    html += '<li>'
    html += '<a href="#" data-module="' + mod.id + '" data-lesson="' + les.id + '" style="' + (unlocked ? '' : 'opacity:0.6') + '">'
    html += '<span class="lesson-item">'
    if (done) {
      html += '<span class="check-icon">✓</span>'
    } else if (!unlocked) {
      html += '<span class="lock-icon">🔒</span>'
    }
    html += '<span class="lesson-title">' + les.title + gradeStr + '</span>'
    html += '</span>'
    html += '</a></li>'
  })
  html += '</ul>'
  html += '<button class="boton" onclick="renderView(\'modulos\')" style="margin-top:20px">← Volver a módulos</button>'
  content.innerHTML = html
  content.querySelectorAll('.lesson-list a').forEach(function(a) {
    a.addEventListener('click', function(e) {
      e.preventDefault()
      loadLesson(parseInt(this.dataset.module), parseInt(this.dataset.lesson))
    })
  })
}

// --- Almacenamiento de lecciones editadas ---
function getEditedLessons() {
  try { return JSON.parse(localStorage.getItem('cursoEditedLessons')) || {} }
  catch { return {} }
}
function saveEditedLessons(obj) {
  localStorage.setItem('cursoEditedLessons', JSON.stringify(obj))
}
function getEditedLesson(key) {
  return getEditedLessons()[key] || null
}
function setEditedLesson(key, html) {
  var all = getEditedLessons()
  all[key] = html
  saveEditedLessons(all)
}

async function loadLesson(modId, lesId) {
  const mod = MODULES.find(function(m) { return m.id === modId })
  if (!mod) return
  const les = mod.lessons.find(function(l) { return l.id === lesId })
  if (!les) return
  const content = document.getElementById('panelContent')
  content.innerHTML = '<div class="loading">Cargando lección...</div>'
  try {
    var html
    var key = 'm' + modId + '-l' + lesId
    var edited = getEditedLesson(key)
    if (edited) {
      html = edited
    } else {
      var res = await fetch('lecciones/' + les.file + '.html')
      html = await res.text()
    }
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')
    const article = doc.querySelector('.lesson-content')
    if (!article) { content.innerHTML = '<p>Error al cargar la lección</p>'; return }
    content.innerHTML = ''
    const wrapper = document.createElement('div')
    wrapper.className = 'lesson-view'
    wrapper.innerHTML = article.innerHTML
    content.appendChild(wrapper)

    initPromptBlocks()

    // If it's a quiz lesson, init interactive quiz
    const subtitleEl = wrapper.querySelector('.subtitle')
    if (subtitleEl && /quiz/i.test(subtitleEl.textContent)) {
      initQuiz(wrapper, modId, lesId)
    }

    // Completion button
    renderCompleteButton(wrapper, modId, lesId)

    // Evidence section (skip for quiz lessons)
    if (!subtitleEl || !/quiz/i.test(subtitleEl.textContent)) {
      if (modId === 3) {
        initPromptEvidenceSection(wrapper, key)
      } else {
        initEvidenceSection(wrapper, key)
      }
    }

    const nav = document.createElement('div')
    nav.className = 'lesson-nav'
    const idx = mod.lessons.indexOf(les)
    if (idx > 0) {
      const prev = mod.lessons[idx - 1]
      nav.innerHTML += '<button class="prev" onclick="loadLesson(' + modId + ',' + prev.id + ')">← ' + prev.title + '</button>'
    }
    if (idx < mod.lessons.length - 1) {
      const next = mod.lessons[idx + 1]
      nav.innerHTML += '<button class="next" onclick="loadLesson(' + modId + ',' + next.id + ')">' + next.title + ' →</button>'
    }
    nav.innerHTML += '<button class="back" onclick="renderModuleLessons(' + modId + ')">Volver al módulo</button>'
    content.appendChild(nav)
    window.scrollTo(0, 0)
  } catch(e) {
    content.innerHTML = '<p>Error al cargar la lección: ' + e.message + '</p>'
  }
}

function marcarCompletada(modId, lesId) {
  const completed = getCompleted()
  const key = 'm' + modId + '-l' + lesId
  if (completed.indexOf(key) === -1) {
    completed.push(key)
    saveCompleted(completed)
    updateProgress()
  }
}

function updateProgress() {
  const completed = getCompleted()
  const pct = Math.round((completed.length / TOTAL_LESSONS) * 100)
  const fill = document.getElementById('progressFill')
  const label = document.getElementById('progressPercent')
  if (fill) fill.style.width = pct + '%'
  if (label) label.textContent = pct + '% (' + completed.length + '/' + TOTAL_LESSONS + ')'
}

function renderCalificaciones() {
  const records = getGradeRecords()
  const completed = getCompleted()
  const content = document.getElementById('panelContent')

  // Stats
  const totalLessons = TOTAL_LESSONS
  const completedCount = completed.length
  const approvedCount = records.filter(function(r) { return r.status === 'Aprobado' }).length
  const avg = records.length > 0 ? Math.round(records.reduce(function(s,r) { return s + r.grade }, 0) / records.length) : 0

  let html = '<h2 class="section-title">Calificaciones</h2>'

  // Summary cards
  html += '<div class="grades-summary">'
  html += '<div class="summary-card"><h4>Promedio general</h4><div class="summary-value">' + avg + '%</div></div>'
  html += '<div class="summary-card"><h4>Lecciones completadas</h4><div class="summary-value">' + completedCount + '/' + totalLessons + '</div></div>'
  html += '<div class="summary-card"><h4>Cuestionarios aprobados</h4><div class="summary-value">' + approvedCount + '</div></div>'
  html += '</div>'

  // Full grades table
  if (records.length === 0) {
    html += '<p style="text-align:center;color:#94a3b8;padding:30px">Aún no hay calificaciones registradas. Completa lecciones y quizzes para ver tus resultados aquí.</p>'
  } else {
    html += '<div class="grade-module"><table class="grade-table">'
    html += '<thead><tr><th>Módulo</th><th>Lección</th><th>Calificación</th><th>Fecha</th><th>Estado</th></tr></thead><tbody>'
    // Sort by date desc
    const sorted = records.slice().sort(function(a,b) { return b.date.localeCompare(a.date) })
    sorted.forEach(function(r) {
      const badgeClass = r.status === 'Aprobado' ? 'badge-aprobado' : 'badge-reprobado'
      html += '<tr><td>Módulo ' + r.module + '</td><td>' + r.lesson + '</td><td><strong>' + r.grade + '%</strong></td><td>' + r.date + '</td><td><span class="badge ' + badgeClass + '">' + r.status + '</span></td></tr>'
    })
    html += '</tbody></table></div>'
  }

  // Legacy: show module grade tables too
  html += '<h3 style="margin-top:30px;color:#0f172a;font-size:1.1rem">Detalle por módulo</h3>'
  MODULES.forEach(function(mod) {
    html += '<div class="grade-module"><h3>Módulo ' + mod.id + ': ' + mod.title + '</h3><table class="grade-table"><thead><tr><th>Lección</th><th>Calificación</th><th>Estado</th></tr></thead><tbody>'
    mod.lessons.forEach(function(les) {
      const key = 'm' + mod.id + '-l' + les.id
      const record = records.find(function(r) { return r.lessonKey === key })
      const gradeVal = record ? record.grade : '—'
      const statusVal = record ? '<span class="badge ' + (record.status === 'Aprobado' ? 'badge-aprobado' : 'badge-reprobado') + '">' + record.status + '</span>' : '<span style="color:#94a3b8">Pendiente</span>'
      html += '<tr><td>' + les.title + '</td><td><strong>' + gradeVal + (typeof gradeVal === 'number' ? '%' : '') + '</strong></td><td>' + statusVal + '</td></tr>'
    })
    html += '</tbody></table></div>'
  })

  content.innerHTML = html
}

// ============================================================
// PREFERENCES (dark mode, font size, animations)
// ============================================================

const PREFS_KEY = 'cursoPrefs'

function getPrefs() {
  try { return JSON.parse(localStorage.getItem(PREFS_KEY)) || defaultPrefs() }
  catch { return defaultPrefs() }
}

function defaultPrefs() {
  return { darkMode: false, fontSize: 'medium', animations: true }
}

function savePrefs(p) {
  localStorage.setItem(PREFS_KEY, JSON.stringify(p))
}

function applyPrefs(p) {
  const body = document.body
  // Light/dark mode
  body.classList.remove('dark-mode', 'light-mode')
  body.classList.add(p.darkMode ? 'dark-mode' : 'light-mode')
  // Font size
  body.classList.remove('font-small', 'font-medium', 'font-large')
  if (p.fontSize === 'small') body.classList.add('font-small')
  else if (p.fontSize === 'large') body.classList.add('font-large')
  // Animations
  body.classList.toggle('no-animations', !p.animations)
}

function initPrefs() {
  // Apply saved prefs on page load
  const p = getPrefs()
  applyPrefs(p)

  // Bind UI controls if on config page
  const darkToggle = document.getElementById('prefDarkMode')
  const fontSizeBtns = document.querySelectorAll('.font-btn')
  const animToggle = document.getElementById('prefAnimations')
  if (!darkToggle) return

  // Set initial state
  darkToggle.checked = p.darkMode
  animToggle.checked = p.animations
  fontSizeBtns.forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.size === p.fontSize)
  })

  // Dark mode toggle
  darkToggle.addEventListener('change', function() {
    const prefs = getPrefs()
    prefs.darkMode = this.checked
    savePrefs(prefs)
    applyPrefs(prefs)
    updatePreview()
  })

  // Font size buttons
  fontSizeBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      fontSizeBtns.forEach(function(b) { b.classList.remove('active') })
      this.classList.add('active')
      const prefs = getPrefs()
      prefs.fontSize = this.dataset.size
      savePrefs(prefs)
      applyPrefs(prefs)
      updatePreview()
    })
  })

  // Animations toggle
  animToggle.addEventListener('change', function() {
    const prefs = getPrefs()
    prefs.animations = this.checked
    savePrefs(prefs)
    applyPrefs(prefs)
    updatePreview()
  })
}

// Update the preview box in config page
function updatePreview() {
  const preview = document.querySelector('.preview-box .preview-card')
  if (!preview) return
  const p = getPrefs()
  preview.style.background = p.darkMode ? '#0f172a' : '#fff'
  preview.style.color = p.darkMode ? '#e2e8f0' : '#333'
  const title = preview.querySelector('h4')
  if (title) title.style.color = p.darkMode ? '#60a5fa' : '#2563eb'
}

// ============================================================
// GRADES (new structure for quiz grades)
// ============================================================

const GRADE_KEY = 'cursoGradeRecords'

function getGradeRecords() {
  try { return JSON.parse(localStorage.getItem(GRADE_KEY)) || [] }
  catch { return [] }
}

function saveGradeRecords(arr) {
  localStorage.setItem(GRADE_KEY, JSON.stringify(arr))
}

function getTodayStr() {
  const d = new Date()
  return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0')
}

function isQuizLesson(lessonTitle) {
  return /quiz/i.test(lessonTitle)
}

// ============================================================
// QUIZ — interactive quiz builder
// ============================================================

function initQuiz(container, modId, lesId) {
  // Find questions: h2 with "Pregunta" or similar numbering
  const questions = container.querySelectorAll('h2')
  if (questions.length === 0) return null

  const quizWrap = document.createElement('div')
  quizWrap.className = 'quiz-wrap'

  const quizData = [] // { questionText, options: [{letter,text}], answer }
  let validQuiz = false

  questions.forEach(function(q) {
    const qText = q.textContent.trim()
    // Check if this looks like a question (contains "Pregunta" or "Checklist" etc)
    if (!/pregunta|checklist|autoevaluación/i.test(qText)) return

    // Next sibling until next h2 or conlusion/conclusion
    let el = q.nextElementSibling
    let questionP = null
    const options = []
    let answerFound = null
    let explanation = ''

    while (el && el.tagName !== 'H2') {
      if (el.tagName === 'P' && !el.querySelector('strong')) {
        questionP = el.textContent.trim()
      }
      if (el.tagName === 'UL' || el.tagName === 'OL') {
        const items = el.querySelectorAll('li')
        items.forEach(function(li) {
          const txt = li.textContent.trim()
          if (/^[a-z][\)\.]/.test(txt)) {
            options.push({ letter: txt[0], text: txt.substring(2).trim() })
          }
        })
      }
      if (el.tagName === 'P' && el.querySelector('strong')) {
        const strong = el.querySelector('strong')
        const strongText = strong.textContent.trim()
        if (/respuesta/i.test(strongText)) {
          const match = strongText.match(/[:\s]+([a-dA-D])/i) || strongText.match(/\b([a-dA-D])\b/)
          if (match) answerFound = match[1].toLowerCase()
        } else if (/explicación/i.test(strongText)) {
          explanation = el.textContent.replace(/^Explicación:\s*/i, '').trim()
        }
      }
      el = el.nextElementSibling
    }

    if (options.length > 0) {
      quizData.push({ questionText: questionP || qText, options: options, answer: answerFound, explanation: explanation })
      validQuiz = true
    }
  })

  if (!validQuiz) return null

  // Build interactive quiz
  let html = '<h3 style="text-align:center;margin-bottom:15px;color:#2563eb">📝 Quiz interactivo</h3>'
  quizData.forEach(function(q, idx) {
    html += '<div class="quiz-question">'
    html += '<p><strong>Pregunta ' + (idx+1) + ':</strong> ' + q.questionText + '</p>'
    q.options.forEach(function(opt) {
      html += '<div class="quiz-option" data-q="' + idx + '" data-letter="' + opt.letter + '">'
      html += '<input type="radio" name="quiz-q' + idx + '" id="quiz-q' + idx + '-' + opt.letter + '" value="' + opt.letter + '">'
      html += '<label for="quiz-q' + idx + '-' + opt.letter + '">' + opt.letter + ') ' + opt.text + '</label>'
      html += '</div>'
    })
    html += '<div class="quiz-explanation" id="quiz-explanation-' + idx + '" style="display:none;"></div>'
    html += '</div>'
  })
  html += '<button class="btn-quiz-submit" id="btnQuizSubmit">Enviar respuestas</button>'
  html += '<button class="btn-quiz-retry" id="btnQuizRetry" style="display:none;">Volver a intentar</button>'
  html += '<div id="quizResult" class="quiz-result" style="display:none"></div>'

  // Hide original questions
  questions.forEach(function(q) {
    if (/pregunta/i.test(q.textContent)) {
      q.style.display = 'none'
      let s = q.nextElementSibling
      while (s && s.tagName !== 'H2') {
        const next = s.nextElementSibling
        s.style.display = 'none'
        s = next
      }
    }
  })

  quizWrap.innerHTML = html
  container.appendChild(quizWrap)

  // Submit handler
  document.getElementById('btnQuizSubmit').addEventListener('click', function() {
    let correct = 0
    const total = quizData.length
    let allAnswered = true

    // Clear previous results
    document.querySelectorAll('.quiz-option').forEach(function(opt) {
      opt.classList.remove('correct', 'wrong', 'disabled')
    })
    document.querySelectorAll('.quiz-explanation').forEach(function(d) { d.style.display = 'none' })

    // Check all answered
    quizData.forEach(function(q, idx) {
      const selected = document.querySelector('input[name="quiz-q' + idx + '"]:checked')
      if (!selected) allAnswered = false
    })

    if (!allAnswered) {
      const resultDiv = document.getElementById('quizResult')
      resultDiv.style.display = 'block'
      resultDiv.textContent = '⚠️ Debes responder todas las preguntas antes de verificar.'
      resultDiv.className = 'quiz-result reprobado'
      return
    }

    quizData.forEach(function(q, idx) {
      const selected = document.querySelector('input[name="quiz-q' + idx + '"]:checked')
      if (selected) {
        const letter = selected.value
        const optDiv = selected.closest('.quiz-option')
        if (letter === q.answer) {
          correct++
          optDiv.classList.add('correct')
        } else {
          optDiv.classList.add('wrong')
          document.querySelectorAll('.quiz-option[data-q="' + idx + '"]').forEach(function(o) {
            if (o.dataset.letter === q.answer) o.classList.add('correct')
          })
        }
      } else {
        document.querySelectorAll('.quiz-option[data-q="' + idx + '"]').forEach(function(o) {
          if (o.dataset.letter === q.answer) o.classList.add('correct')
        })
      }
      // Show explanation
      const explDiv = document.getElementById('quiz-explanation-' + idx)
      if (explDiv && q.explanation) {
        explDiv.style.display = 'block'
        explDiv.innerHTML = '<strong>Explicación:</strong> ' + q.explanation
      }
    })

    document.querySelectorAll('.quiz-option').forEach(function(o) { o.classList.add('disabled') })
    document.querySelectorAll('.quiz-option input').forEach(function(i) { i.disabled = true })
    this.disabled = true

    const pct = Math.round((correct / total) * 100)
    const passed = pct >= 80
    const resultDiv = document.getElementById('quizResult')
    resultDiv.style.display = 'block'

    let msg = 'Calificación: ' + pct + '% (' + correct + '/' + total + ')'
    if (passed) {
      msg += ' — ✅ Aprobado'
    } else {
      msg += ' — ❌ Reprobado. Puedes volver a intentarlo.'
    }
    resultDiv.textContent = msg
    resultDiv.className = 'quiz-result ' + (passed ? 'aprobado' : 'reprobado')

    document.getElementById('btnQuizRetry').style.display = passed ? 'none' : 'inline-block'

    // Save grade record
    const mod = MODULES.find(function(m) { return m.id === modId })
    const les = mod && mod.lessons.find(function(l) { return l.id === lesId })
    if (mod && les) {
      const records = getGradeRecords()
      const existing = records.findIndex(function(r) { return r.lessonKey === 'm' + modId + '-l' + lesId })
      const record = {
        lessonKey: 'm' + modId + '-l' + lesId,
        module: modId,
        moduleTitle: mod.title,
        lesson: les.title,
        grade: pct,
        date: getTodayStr(),
        status: passed ? 'Aprobado' : 'Reprobado'
      }
      if (existing !== -1) {
        records[existing] = record
      } else {
        records.push(record)
      }
      saveGradeRecords(records)
    }

    if (passed) {
      marcarCompletada(modId, lesId)
      renderCompleteButton(document.querySelector('.lesson-view'), modId, lesId)
    }
  })

  // Retry handler
  document.getElementById('btnQuizRetry').addEventListener('click', function() {
    quizData.forEach(function(q, idx) {
      const inputs = document.querySelectorAll('input[name="quiz-q' + idx + '"]')
      inputs.forEach(function(i) { i.checked = false; i.disabled = false })
      document.querySelectorAll('.quiz-option[data-q="' + idx + '"]').forEach(function(o) {
        o.classList.remove('correct', 'wrong', 'disabled')
      })
      const explDiv = document.getElementById('quiz-explanation-' + idx)
      if (explDiv) explDiv.style.display = 'none'
    })
    document.getElementById('btnQuizSubmit').disabled = false
    document.getElementById('btnQuizRetry').style.display = 'none'
    document.getElementById('quizResult').style.display = 'none'
  })

  return quizWrap
}

// ============================================================
// LESSON COMPLETION BUTTON
// ============================================================

function renderCompleteButton(container, modId, lesId) {
  const wrap = document.createElement('div')
  wrap.className = 'complete-lesson-wrap'

  const btn = document.createElement('button')
  btn.className = 'btn-complete'

  const completed = getCompleted()
  const key = 'm' + modId + '-l' + lesId
  const isCompleted = completed.indexOf(key) !== -1

  if (isCompleted) {
    btn.disabled = true
    btn.innerHTML = '✓ Lección completada'
    btn.style.background = '#22c55e'
  } else {
    btn.innerHTML = '✓ Marcar lección como completada'
    btn.addEventListener('click', function() {
      marcarCompletada(modId, lesId)

      // Also save a grade record for non-quiz lessons (auto-100% for completion)
      const mod = MODULES.find(function(m) { return m.id === modId })
      const les = mod && mod.lessons.find(function(l) { return l.id === lesId })
      if (mod && les && !isQuizLesson(les.title)) {
        const records = getGradeRecords()
        const existing = records.findIndex(function(r) { return r.lessonKey === key })
        if (existing === -1) {
          records.push({
            lessonKey: key,
            module: modId,
            moduleTitle: mod.title,
            lesson: les.title,
            grade: 100,
            date: getTodayStr(),
            status: 'Aprobado'
          })
          saveGradeRecords(records)
        }
      }

      btn.disabled = true
      btn.innerHTML = '✓ Lección completada'
      updateProgress()
      // Refresh module list icon when user navigates back
    })
  }

  wrap.appendChild(btn)
  container.appendChild(wrap)
}

// ============================================================
// EVIDENCE SECTION
// ============================================================

function initEvidenceSection(container, lessonKey) {
  const form = container.querySelector('#evidenceForm-' + lessonKey)
  if (!form) return
  const saved = localStorage.getItem('evidencia_' + lessonKey)
  if (saved) {
    try {
      const data = JSON.parse(saved)
      form.style.display = 'none'
      var fnEl = container.querySelector('#fileName-' + lessonKey)
      var rfEl = container.querySelector('#savedReflection-' + lessonKey)
      var subEl = container.querySelector('#evidenceSubmitted-' + lessonKey)
      if (fnEl) fnEl.textContent = data.fileName
      if (rfEl) rfEl.textContent = data.reflection
      if (subEl) subEl.style.display = 'block'
    } catch(e) {}
  }
}

function enviarEvidencia(lessonKey) {
  var fileInput = document.getElementById('fileInput-' + lessonKey)
  var reflection = document.getElementById('reflection-' + lessonKey)
  var msg = document.getElementById('msg-' + lessonKey)

  if (!fileInput || !reflection || !msg) return

  if (!fileInput.files || !fileInput.files[0]) {
    msg.innerHTML = '⚠️ Por favor, selecciona un archivo para subir.'
    msg.style.color = '#ef4444'
    return
  }
  if (!reflection.value.trim()) {
    msg.innerHTML = '⚠️ Por favor, escribe una reflexión sobre lo que aprendiste.'
    msg.style.color = '#ef4444'
    return
  }

  var evidence = {
    fileName: fileInput.files[0].name,
    reflection: reflection.value.trim(),
    timestamp: new Date().toISOString()
  }

  localStorage.setItem('evidencia_' + lessonKey, JSON.stringify(evidence))

  document.getElementById('evidenceForm-' + lessonKey).style.display = 'none'
  document.getElementById('fileName-' + lessonKey).textContent = evidence.fileName
  document.getElementById('savedReflection-' + lessonKey).textContent = evidence.reflection
  document.getElementById('evidenceSubmitted-' + lessonKey).style.display = 'block'
  msg.innerHTML = ''
}

function actualizarContador(lessonKey) {
  var textarea = document.getElementById('reflection-' + lessonKey)
  var counter = document.getElementById('counter-' + lessonKey)
  if (textarea && counter) {
    counter.textContent = textarea.value.length
  }
}

// ============================================================
// ADMIN PANEL
// ============================================================

function initAdminPanel() {
  const user = getUser()
  if (!user || !user.isAdmin) { window.location.href = 'login.html'; return }

  // Set role badge and profile info
  var roleBadge = document.getElementById('adminRoleBadge')
  if (roleBadge) {
    roleBadge.textContent = user.isSuperAdmin ? 'SUPER ADMIN' : 'ADMIN'
    roleBadge.style.background = user.isSuperAdmin ? '#dc2626' : '#f59e0b'
  }
  var nameEl = document.getElementById('dropdownAdminName')
  if (nameEl) nameEl.textContent = user.name
  var emailEl = document.getElementById('dropdownAdminEmail')
  if (emailEl) emailEl.textContent = user.email

  // Register last login
  let logins = JSON.parse(localStorage.getItem('cursoLogins') || '[]')
  logins.unshift({ email: user.email, date: getTodayStr(), time: new Date().toLocaleTimeString() })
  if (logins.length > 50) logins = logins.slice(0, 50)
  localStorage.setItem('cursoLogins', JSON.stringify(logins))

  // Sidebar toggle
  document.getElementById('sidebarToggle')?.addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('collapsed')
  })

  // Profile dropdown
  document.getElementById('profileTrigger')?.addEventListener('click', function(e) {
    e.stopPropagation()
    document.getElementById('profileDropdown').classList.toggle('show')
  })
  document.addEventListener('click', function() {
    document.getElementById('profileDropdown')?.classList.remove('show')
  })

  // Sidebar buttons
  document.querySelectorAll('.sidebar-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      renderAdminSection(this.dataset.section)
    })
  })

  // Default view
  renderAdminSection('dashboard')
}

function renderAdminSection(section) {
  const content = document.getElementById('adminContent')
  if (!content) return

  switch(section) {
    case 'dashboard': renderAdminDashboard(content); break
    case 'usuarios': renderAdminUsers(content); break
    case 'modulos': renderAdminModulos(content); break
    case 'lecciones': renderAdminLecciones(content); break
    case 'calificaciones': renderAdminCalificaciones(content); break
    case 'config': renderAdminConfig(content); break
    default: renderAdminDashboard(content)
  }
}

function renderAdminDashboard(content) {
  const users = JSON.parse(localStorage.getItem('cursoUsers') || '[]')
  const completed = getCompleted()
  const records = getGradeRecords()
  const logins = JSON.parse(localStorage.getItem('cursoLogins') || '[]')

  // Stats
  const totalUsers = users.length
  const completedCount = completed.length
  const avg = records.length > 0 ? Math.round(records.reduce(function(s,r) { return s + r.grade }, 0) / records.length) : 0

  // Most advanced module
  const modCounts = {}
  completed.forEach(function(key) {
    const m = key.match(/m(\d+)/)
    if (m) modCounts[m[1]] = (modCounts[m[1]] || 0) + 1
  })
  let topMod = 'Ninguno'
  let topCount = 0
  Object.keys(modCounts).forEach(function(k) {
    if (modCounts[k] > topCount) { topCount = modCounts[k]; topMod = 'Módulo ' + k }
  })

  let html = '<h2 class="section-title">Dashboard</h2>'
  html += '<div class="admin-stats-grid">'
  html += '<div class="admin-stat"><h4>Usuarios registrados</h4><div class="stat-value">' + totalUsers + '</div></div>'
  html += '<div class="admin-stat"><h4>Lecciones completadas</h4><div class="stat-value">' + completedCount + '/' + TOTAL_LESSONS + '</div></div>'
  html += '<div class="admin-stat"><h4>Promedio general</h4><div class="stat-value">' + avg + '%</div></div>'
  html += '<div class="admin-stat"><h4>Módulo más avanzado</h4><div class="stat-value">' + topMod + '</div></div>'
  html += '</div>'

  // Last logins
  html += '<div class="admin-section"><h3>Últimos ingresos</h3>'
  if (logins.length === 0) {
    html += '<p style="color:#94a3b8">Sin registros</p>'
  } else {
    logins.slice(0, 10).forEach(function(log) {
      html += '<div class="login-item">' + log.email + ' — ' + log.date + ' ' + log.time + '</div>'
    })
  }
  html += '</div>'

  content.innerHTML = html
}

function renderAdminUsers(content) {
  const users = JSON.parse(localStorage.getItem('cursoUsers') || '[]')
  const completed = getCompleted()

  let html = '<h2 class="section-title">Usuarios</h2>'
  html += '<div class="admin-table-wrap"><table class="admin-table">'
  html += '<thead><tr><th>Nombre</th><th>Correo</th><th>Progreso</th><th>Estado</th><th>Acciones</th></tr></thead><tbody>'

  if (users.length === 0) {
    html += '<tr><td colspan="5" style="text-align:center;color:#94a3b8;padding:20px">No hay usuarios registrados</td></tr>'
  } else {
    users.forEach(function(u, idx) {
      const userCompleted = completed.length // simplistic: total system progress
      const pct = Math.round((userCompleted / TOTAL_LESSONS) * 100)
      html += '<tr>'
      html += '<td><strong>' + u.name + '</strong></td>'
      html += '<td>' + u.email + '</td>'
      html += '<td>' + userCompleted + '/' + TOTAL_LESSONS + ' (' + pct + '%)</td>'
      html += '<td><span class="badge badge-aprobado">Activo</span></td>'
      html += '<td><button class="btn-small btn-edit" onclick="alert(\'Editar usuario: ' + u.name + '\')">Editar</button> '
      html += '<button class="btn-small btn-delete" onclick="eliminarUsuario(' + idx + ')">Eliminar</button> '
      html += '<button class="btn-small btn-view" onclick="alert(\'Progreso de ' + u.name + ': ' + userCompleted + ' lecciones\')">Ver progreso</button></td>'
      html += '</tr>'
    })
  }
  html += '</tbody></table></div>'
  content.innerHTML = html
}

function eliminarUsuario(idx) {
  if (!confirm('¿Eliminar este usuario?')) return
  const users = JSON.parse(localStorage.getItem('cursoUsers') || '[]')
  users.splice(idx, 1)
  localStorage.setItem('cursoUsers', JSON.stringify(users))
  renderAdminSection('usuarios')
}

function renderAdminLecciones(content) {
  let html = '<h2 class="section-title">Lecciones</h2>'
  html += '<div class="admin-table-wrap"><table class="admin-table">'
  html += '<thead><tr><th>Módulo</th><th>Lección</th><th>Orden</th><th>Estado</th><th>Acciones</th></tr></thead><tbody>'

  MODULES.forEach(function(mod) {
    mod.lessons.forEach(function(les, idx) {
      const key = 'm' + mod.id + '-l' + les.id
      const hidden = JSON.parse(localStorage.getItem('cursoHiddenLessons') || '[]')
      const isHidden = hidden.indexOf(key) !== -1
      html += '<tr>'
      html += '<td>Módulo ' + mod.id + '</td>'
      html += '<td>' + les.title + '</td>'
      html += '<td>' + (idx + 1) + '</td>'
      html += '<td>' + (isHidden ? '<span class="badge badge-reprobado">Oculta</span>' : '<span class="badge badge-aprobado">Visible</span>') + '</td>'
      html += '<td>'
      html += '<button class="btn-small btn-edit" onclick="adminEditLesson(' + mod.id + ',' + les.id + ')">Editar</button> '
      html += '<button class="btn-small btn-view" onclick="alert(\'Cambiar orden (simulado)\')">Orden</button> '
      if (isHidden) {
        html += '<button class="btn-small badge-aprobado" onclick="mostrarLeccion(\'' + key + '\')">Mostrar</button>'
      } else {
        html += '<button class="btn-small badge-reprobado" onclick="ocultarLeccion(\'' + key + '\')">Ocultar</button>'
      }
      html += '</td>'
      html += '</tr>'
    })
  })

  html += '</tbody></table></div>'
  content.innerHTML = html
}

function ocultarLeccion(key) {
  let hidden = JSON.parse(localStorage.getItem('cursoHiddenLessons') || '[]')
  if (hidden.indexOf(key) === -1) hidden.push(key)
  localStorage.setItem('cursoHiddenLessons', JSON.stringify(hidden))
  renderAdminSection('lecciones')
}

function mostrarLeccion(key) {
  let hidden = JSON.parse(localStorage.getItem('cursoHiddenLessons') || '[]')
  hidden = hidden.filter(function(h) { return h !== key })
  localStorage.setItem('cursoHiddenLessons', JSON.stringify(hidden))
  renderAdminSection('lecciones')
}

// --- Editor de contenido de lecciones (superadmin) ---
function adminEditLesson(modId, lesId) {
  var mod = MODULES.find(function(m) { return m.id === modId })
  if (!mod) return
  var les = mod.lessons.find(function(l) { return l.id === lesId })
  if (!les) return
  var content = document.getElementById('adminContent')
  var key = 'm' + modId + '-l' + lesId

  content.innerHTML = '<div class="loading">Cargando editor...</div>'

  // Load current content (edited version or original)
  var edited = getEditedLesson(key)
  var loadPromise = edited ? Promise.resolve(edited) : fetch('lecciones/' + les.file + '.html').then(function(r) { return r.text() })

  loadPromise.then(function(html) {
    content.innerHTML =
      '<div class="editor-wrap">' +
      '<div class="editor-header">' +
      '<h3>Editando: Módulo ' + modId + ' — ' + les.title + '</h3>' +
      '<div class="editor-actions">' +
      '<button class="btn-small btn-view" onclick="adminSaveLesson(' + modId + ',' + lesId + ')">💾 Guardar</button> ' +
      '<button class="btn-small btn-delete" onclick="adminPreviewLesson(' + modId + ',' + lesId + ')">👁 Vista previa</button> ' +
      '<button class="btn-small" style="background:#e2e8f0;color:#333" onclick="renderAdminSection(\'lecciones\')">← Volver</button>' +
      '</div></div>' +
      '<textarea class="editor-textarea" id="lessonEditor">' + escapeHtml(html) + '</textarea>' +
      '<div class="editor-preview" id="editorPreview" style="display:none"></div>' +
      '<p id="editorMsg" class="editor-msg"></p>' +
      '</div>'
  }).catch(function(err) {
    content.innerHTML = '<p style="text-align:center;color:#ef4444;padding:30px">Error al cargar la lección: ' + err.message + '</p>'
  })
}

function adminSaveLesson(modId, lesId) {
  var content = document.getElementById('lessonEditor')
  if (!content) return
  var html = content.value
  var key = 'm' + modId + '-l' + lesId
  setEditedLesson(key, html)
  document.getElementById('editorMsg').textContent = '✅ Lección guardada en almacenamiento local'
  document.getElementById('editorMsg').style.color = '#22c55e'
}

function adminPreviewLesson(modId, lesId) {
  var content = document.getElementById('lessonEditor')
  if (!content) return
  var preview = document.getElementById('editorPreview')
  if (!preview) return
  var html = content.value
  var parser = new DOMParser()
  var doc = parser.parseFromString(html, 'text/html')
  var article = doc.querySelector('.lesson-content')
  preview.innerHTML = article ? article.innerHTML : html
  preview.style.display = 'block'
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;')
}

function renderAdminCalificaciones(content) {
  const records = getGradeRecords()
  let html = '<h2 class="section-title">Calificaciones de estudiantes</h2>'

  if (records.length === 0) {
    html += '<p style="text-align:center;color:#94a3b8;padding:30px">No hay calificaciones registradas aún.</p>'
  } else {
    html += '<div class="admin-table-wrap"><table class="admin-table">'
    html += '<thead><tr><th>Módulo</th><th>Lección</th><th>Calificación</th><th>Fecha</th><th>Estado</th></tr></thead><tbody>'
    const sorted = records.slice().sort(function(a,b) { return b.date.localeCompare(a.date) })
    sorted.forEach(function(r) {
      const badgeClass = r.status === 'Aprobado' ? 'badge-aprobado' : 'badge-reprobado'
      html += '<tr><td>Módulo ' + r.module + '</td><td>' + r.lesson + '</td><td><strong>' + r.grade + '%</strong></td><td>' + r.date + '</td><td><span class="badge ' + badgeClass + '">' + r.status + '</span></td></tr>'
    })
    html += '</tbody></table></div>'
  }

  content.innerHTML = html
}

function renderAdminConfig(content) {
  const config = JSON.parse(localStorage.getItem('cursoAdminConfig') || '{"courseName":"CleverLabs Academy","logo":"","primaryColor":"#2563eb","secondaryColor":"#0ea5e9"}')

  let html = '<h2 class="section-title">Configuración del curso</h2>'
  html += '<div class="config-box" style="max-width:500px;margin:0 auto">'

  html += '<div class="admin-config-group">'
  html += '<label>Nombre del curso</label>'
  html += '<input type="text" id="adminCourseName" value="' + config.courseName + '">'
  html += '</div>'

  html += '<div class="admin-config-group">'
  html += '<label>URL del Logo</label>'
  html += '<input type="text" id="adminLogo" value="' + config.logo + '" placeholder="URL del logo (opcional)">'
  html += '</div>'

  html += '<div class="admin-config-group">'
  html += '<label>Color principal</label>'
  html += '<input type="color" id="adminPrimaryColor" value="' + config.primaryColor + '">'
  html += '</div>'

  html += '<div class="admin-config-group">'
  html += '<label>Color secundario</label>'
  html += '<input type="color" id="adminSecondaryColor" value="' + config.secondaryColor + '">'
  html += '</div>'

  html += '<button class="boton" onclick="guardarAdminConfig()" style="width:100%">Guardar configuración</button>'
  html += '<p id="adminConfigMsg" class="config-msg"></p>'
  html += '</div>'

  content.innerHTML = html
}

function guardarAdminConfig() {
  const config = {
    courseName: document.getElementById('adminCourseName').value.trim() || 'CleverLabs Academy',
    logo: document.getElementById('adminLogo').value.trim(),
    primaryColor: document.getElementById('adminPrimaryColor').value,
    secondaryColor: document.getElementById('adminSecondaryColor').value
  }
  localStorage.setItem('cursoAdminConfig', JSON.stringify(config))
  document.getElementById('adminConfigMsg').textContent = '✅ Configuración guardada'
}

function cerrarSesionAdmin() {
  localStorage.removeItem('cursoUser')
}

// ============================================================
// MÓDULOS CRUD — data layer
// ============================================================

var CRUD_KEY = 'cursoModulosData'

var MOD_DESC = {
  1:"Aprende a diferenciar la programación tradicional del desarrollo asistido por IA, tu rol como arquitecto-supervisor, y las reglas mínimas para un uso responsable.",
  2:"Transforma ideas vagas en requerimientos precisos: preguntas de descubrimiento, criterios de aceptación, casos borde y ejercicios prácticos.",
  3:"Domina la creación de contexto y el encadenamiento de prompts para obtener respuestas más precisas de la IA.",
  4:"Implementa soluciones paso a paso con IA: desde pedir código hasta revisarlo, corregirlo y decidir si aceptarlo.",
  5:"Aprende a validar, probar y documentar el código generado por IA para garantizar calidad y mantenibilidad.",
  6:"Aplica todo lo aprendido en un proyecto final integrador que abarca desde la idea hasta la documentación completa."
}

function detectTipo(titulo) {
  if (/\(ejercicio\)/i.test(titulo)) return 'ejercicio'
  if (/\(quiz\)/i.test(titulo) || /quiz/i.test(titulo)) return 'quiz'
  return 'normal'
}

function cargarModulos() {
  var raw = localStorage.getItem(CRUD_KEY)
  if (!raw) return initModulosData()
  try { return JSON.parse(raw) }
  catch { return initModulosData() }
}

function guardarModulos(data) {
  localStorage.setItem(CRUD_KEY, JSON.stringify(data))
}

function initModulosData() {
  var data = MODULES.map(function(m) {
    return {
      id: m.id,
      titulo: m.title,
      descripcion: MOD_DESC[m.id] || '',
      lecciones: m.lessons.map(function(l, i) {
        return {
          id: l.id,
          titulo: l.title,
          archivo: l.file + '.html',
          descripcion: '',
          tipo: detectTipo(l.title),
          orden: i + 1
        }
      })
    }
  })
  guardarModulos(data)
  return data
}

function nextLeccionId(lecciones) {
  var max = 0
  lecciones.forEach(function(l) { if (l.id > max) max = l.id })
  return max + 1
}

function updateModulo(modId, cambios) {
  var data = cargarModulos()
  var mod = data.find(function(m) { return m.id === modId })
  if (!mod) return
  Object.keys(cambios).forEach(function(k) { mod[k] = cambios[k] })
  guardarModulos(data)
}

function addLeccion(modId, leccion) {
  var data = cargarModulos()
  var mod = data.find(function(m) { return m.id === modId })
  if (!mod) return null
  leccion.id = nextLeccionId(mod.lecciones)
  leccion.orden = mod.lecciones.length + 1
  mod.lecciones.push(leccion)
  guardarModulos(data)
  return leccion
}

function editLeccion(modId, lecId, cambios) {
  var data = cargarModulos()
  var mod = data.find(function(m) { return m.id === modId })
  if (!mod) return
  var lec = mod.lecciones.find(function(l) { return l.id === lecId })
  if (!lec) return
  Object.keys(cambios).forEach(function(k) { lec[k] = cambios[k] })
  guardarModulos(data)
}

function removeLeccion(modId, lecId) {
  var data = cargarModulos()
  var mod = data.find(function(m) { return m.id === modId })
  if (!mod) return
  mod.lecciones = mod.lecciones.filter(function(l) { return l.id !== lecId })
  mod.lecciones.forEach(function(l, i) { l.orden = i + 1 })
  guardarModulos(data)
}

function moveLeccion(modId, lecId, dir) {
  var data = cargarModulos()
  var mod = data.find(function(m) { return m.id === modId })
  if (!mod) return
  var idx = mod.lecciones.findIndex(function(l) { return l.id === lecId })
  if (idx === -1) return
  var newIdx = idx + dir
  if (newIdx < 0 || newIdx >= mod.lecciones.length) return
  var tmp = mod.lecciones[idx]
  mod.lecciones[idx] = mod.lecciones[newIdx]
  mod.lecciones[newIdx] = tmp
  mod.lecciones.forEach(function(l, i) { l.orden = i + 1 })
  guardarModulos(data)
}

// ============================================================
// MODAL SYSTEM
// ============================================================

function abrirModal(title, bodyHtml) {
  var overlay = document.getElementById('modalOverlay')
  if (!overlay) {
    overlay = document.createElement('div')
    overlay.id = 'modalOverlay'
    overlay.className = 'modal-overlay'
    overlay.style.display = 'none'
    overlay.onclick = function(e) { if (e.target === overlay) cerrarModal() }
    overlay.innerHTML = '<div class="modal"><div class="modal-header"><h3 id="modalTitle"></h3><button id="modalCloseBtn" class="modal-close">&times;</button></div><div class="modal-body" id="modalBody"></div></div>'
    document.body.appendChild(overlay)
    document.getElementById('modalCloseBtn').addEventListener('click', cerrarModal)
  }
  document.getElementById('modalTitle').textContent = title
  document.getElementById('modalBody').innerHTML = bodyHtml
  overlay.style.display = 'flex'
}

function cerrarModal() {
  var overlay = document.getElementById('modalOverlay')
  if (overlay) overlay.style.display = 'none'
}

function cerrarModalOutside(e) {
  if (e.target === document.getElementById('modalOverlay')) cerrarModal()
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') cerrarModal()
})

// ============================================================
// RENDER MÓDULOS VIEW
// ============================================================

function renderAdminModulos(container) {
  var data = cargarModulos()
  var content = container || document.getElementById('adminContent')
  var html = '<h2 class="section-title">Módulos</h2>'
  data.forEach(function(mod) {
    html += '<div class="admin-modulo-card">'
    html += '<div class="admin-modulo-header">'
    html += '<div style="flex:1;min-width:0">'
    html += '<h3>Módulo ' + mod.id + ': ' + escHtml(mod.titulo) + '</h3>'
    html += '<p class="admin-modulo-desc">' + escHtml(mod.descripcion || 'Sin descripción') + '</p>'
    html += '</div>'
    html += '<div class="admin-modulo-actions">'
    html += '<button class="btn-small btn-edit" onclick="modalEditTitulo(' + mod.id + ')">Editar título</button>'
    html += '<button class="btn-small btn-edit" onclick="modalEditDesc(' + mod.id + ')">Editar descripción</button>'
    html += '<button class="btn-small btn-view" onclick="modalAddLeccion(' + mod.id + ')">+ Agregar lección</button>'
    html += '</div></div>'
    html += '<div style="margin-top:14px">'
    mod.lecciones.forEach(function(lec) {
      var tipoClass = 'lec-type-' + lec.tipo
      var tipoLabel = lec.tipo.charAt(0).toUpperCase() + lec.tipo.slice(1)
      html += '<div class="admin-leccion-item">'
      html += '<div class="admin-leccion-info">'
      html += '<span class="order-badge">' + lec.orden + '</span>'
      html += '<span class="lec-title">' + escHtml(lec.titulo) + '</span>'
      html += '<span class="lec-type-badge ' + tipoClass + '">' + tipoLabel + '</span>'
      html += '</div>'
      html += '<div class="admin-leccion-actions">'
      html += '<button class="btn-lec" onclick="moveLeccionUp(' + mod.id + ',' + lec.id + ')" title="Subir">↑</button>'
      html += '<button class="btn-lec" onclick="moveLeccionDown(' + mod.id + ',' + lec.id + ')" title="Bajar">↓</button>'
      html += '<button class="btn-lec btn-lec-edit" onclick="modalEditLeccion(' + mod.id + ',' + lec.id + ')">Editar</button>'
      html += '<button class="btn-lec btn-lec-del" onclick="modalRemoveLeccion(' + mod.id + ',' + lec.id + ')">Eliminar</button>'
      html += '</div></div>'
    })
    html += '</div></div>'
  })
  content.innerHTML = html
}

function escHtml(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')
}

// ============================================================
// MODAL: EDIT TITLE
// ============================================================

function modalEditTitulo(modId) {
  var data = cargarModulos()
  var mod = data.find(function(m) { return m.id === modId })
  if (!mod) return
  var html =
    '<label for="modalEditTituloInput">Título del módulo</label>' +
    '<input type="text" id="modalEditTituloInput" value="' + escHtml(mod.titulo) + '">' +
    '<div class="modal-actions">' +
    '<button class="btn-small" style="background:#e2e8f0;color:#333" onclick="cerrarModal()">Cancelar</button>' +
    '<button class="btn-small btn-edit" onclick="saveTitulo(' + modId + ')">Guardar</button>' +
    '</div>'
  abrirModal('Editar título — Módulo ' + modId, html)
  setTimeout(function() {
    var inp = document.getElementById('modalEditTituloInput')
    if (inp) inp.focus()
  }, 50)
}

function saveTitulo(modId) {
  var val = document.getElementById('modalEditTituloInput').value.trim()
  if (!val) { alert('El título no puede estar vacío'); return }
  updateModulo(modId, { titulo: val })
  cerrarModal()
  renderAdminModulos()
}

// ============================================================
// MODAL: EDIT DESCRIPTION
// ============================================================

function modalEditDesc(modId) {
  var data = cargarModulos()
  var mod = data.find(function(m) { return m.id === modId })
  if (!mod) return
  var html =
    '<label for="modalEditDescInput">Descripción del módulo</label>' +
    '<textarea id="modalEditDescInput" rows="4">' + escHtml(mod.descripcion) + '</textarea>' +
    '<div class="modal-actions">' +
    '<button class="btn-small" style="background:#e2e8f0;color:#333" onclick="cerrarModal()">Cancelar</button>' +
    '<button class="btn-small btn-edit" onclick="saveDesc(' + modId + ')">Guardar</button>' +
    '</div>'
  abrirModal('Editar descripción — Módulo ' + modId, html)
}

function saveDesc(modId) {
  var val = document.getElementById('modalEditDescInput').value.trim()
  updateModulo(modId, { descripcion: val })
  cerrarModal()
  renderAdminModulos()
}

// ============================================================
// MODAL: ADD LESSON
// ============================================================

function modalAddLeccion(modId) {
  var html =
    '<label for="modalLecTitulo">Título</label>' +
    '<input type="text" id="modalLecTitulo">' +
    '<label for="modalLecArchivo">Archivo HTML</label>' +
    '<input type="text" id="modalLecArchivo" placeholder="ej: m1-leccion6">' +
    '<label for="modalLecDesc">Descripción corta</label>' +
    '<textarea id="modalLecDesc" rows="2"></textarea>' +
    '<label for="modalLecTipo">Tipo</label>' +
    '<select id="modalLecTipo">' +
    '<option value="normal">Normal</option>' +
    '<option value="ejercicio">Ejercicio</option>' +
    '<option value="quiz">Quiz</option>' +
    '</select>' +
    '<div class="modal-actions">' +
    '<button class="btn-small" style="background:#e2e8f0;color:#333" onclick="cerrarModal()">Cancelar</button>' +
    '<button class="btn-small btn-view" onclick="saveNewLeccion(' + modId + ')">Guardar</button>' +
    '</div>'
  abrirModal('Agregar lección — Módulo ' + modId, html)
  setTimeout(function() {
    var inp = document.getElementById('modalLecTitulo')
    if (inp) inp.focus()
  }, 50)
}

function saveNewLeccion(modId) {
  var titulo = document.getElementById('modalLecTitulo').value.trim()
  var archivo = document.getElementById('modalLecArchivo').value.trim()
  var desc = document.getElementById('modalLecDesc').value.trim()
  var tipo = document.getElementById('modalLecTipo').value
  if (!titulo) { alert('El título es obligatorio'); return }
  if (!archivo) { alert('El nombre del archivo es obligatorio'); return }
  var data = cargarModulos()
  var mod = data.find(function(m) { return m.id === modId })
  if (mod && mod.lecciones.some(function(l) { return l.titulo.toLowerCase() === titulo.toLowerCase() })) {
    alert('Ya existe una lección con ese título'); return
  }
  addLeccion(modId, { titulo: titulo, archivo: archivo + '.html', descripcion: desc, tipo: tipo })
  cerrarModal()
  renderAdminModulos()
}

// ============================================================
// MODAL: EDIT LESSON
// ============================================================

function modalEditLeccion(modId, lecId) {
  var data = cargarModulos()
  var mod = data.find(function(m) { return m.id === modId })
  if (!mod) return
  var lec = mod.lecciones.find(function(l) { return l.id === lecId })
  if (!lec) return
  var html =
    '<label for="modalEditLecTitulo">Título</label>' +
    '<input type="text" id="modalEditLecTitulo" value="' + escHtml(lec.titulo) + '">' +
    '<label for="modalEditLecArchivo">Archivo HTML</label>' +
    '<input type="text" id="modalEditLecArchivo" value="' + escHtml((lec.archivo || '').replace('.html','')) + '">' +
    '<label for="modalEditLecDesc">Descripción</label>' +
    '<textarea id="modalEditLecDesc" rows="2">' + escHtml(lec.descripcion || '') + '</textarea>' +
    '<label for="modalEditLecTipo">Tipo</label>' +
    '<select id="modalEditLecTipo">' +
    '<option value="normal"' + (lec.tipo === 'normal' ? ' selected' : '') + '>Normal</option>' +
    '<option value="ejercicio"' + (lec.tipo === 'ejercicio' ? ' selected' : '') + '>Ejercicio</option>' +
    '<option value="quiz"' + (lec.tipo === 'quiz' ? ' selected' : '') + '>Quiz</option>' +
    '</select>' +
    '<div class="modal-actions">' +
    '<button class="btn-lec btn-lec-show" onclick="showLessonContent(' + modId + ',' + lecId + ')">Mostrar lección</button>' +
    '<button class="btn-small" style="background:#e2e8f0;color:#333" onclick="cerrarModal()">Cancelar</button>' +
    '<button class="btn-small btn-edit" onclick="saveEditLeccion(' + modId + ',' + lecId + ')">Guardar</button>' +
    '</div>' +
    '<div id="lecEditorContainer" style="margin-top:12px"></div>'
  abrirModal('Editar lección — Módulo ' + modId, html)
}

function saveEditLeccion(modId, lecId) {
  var titulo = document.getElementById('modalEditLecTitulo').value.trim()
  var archivo = document.getElementById('modalEditLecArchivo').value.trim()
  var desc = document.getElementById('modalEditLecDesc').value.trim()
  var tipo = document.getElementById('modalEditLecTipo').value
  if (!titulo) { alert('El título es obligatorio'); return }
  editLeccion(modId, lecId, { titulo: titulo, archivo: archivo + '.html', descripcion: desc, tipo: tipo })
  cerrarModal()
  renderAdminModulos()
}

// ============================================================
// SHOW LESSON — load HTML, edit content, preview
// ============================================================

function showLessonContent(modId, lecId) {
  var data = cargarModulos()
  var mod = data.find(function(m) { return m.id === modId })
  if (!mod) return
  var lec = mod.lecciones.find(function(l) { return l.id === lecId })
  if (!lec) return
  var container = document.getElementById('lecEditorContainer')
  if (!container) return
  container.innerHTML = '<div class="loading" style="padding:20px">Cargando lección...</div>'

  var key = 'm' + modId + '-l' + lecId
  var edited = getEditedLesson(key)

  var loadPromise = edited ? Promise.resolve(edited) : fetch('lecciones/' + lec.archivo).then(function(r) {
    if (!r.ok) throw new Error('No se pudo cargar el archivo: ' + lec.archivo)
    return r.text()
  })

  loadPromise.then(function(html) {
    container.innerHTML =
      '<label>Contenido HTML de la lección</label>' +
      '<textarea class="editor-large" id="lecHtmlEditor">' + escHtml(html) + '</textarea>' +
      '<div class="modal-actions" style="margin-top:8px">' +
      '<button class="btn-lec btn-lec-show" onclick="previewEditedLesson()">Vista previa</button>' +
      '<button class="btn-small btn-edit" onclick="saveEditedLesson(' + modId + ',' + lecId + ')">Guardar cambios</button>' +
      '</div>' +
      '<div class="preview-area" id="previewArea"></div>'
  }).catch(function(err) {
    container.innerHTML = '<p style="color:#ef4444;padding:12px">Error: ' + err.message + '</p>'
  })
}

function previewEditedLesson() {
  var ta = document.getElementById('lecHtmlEditor')
  if (!ta) return
  var preview = document.getElementById('previewArea')
  if (!preview) return
  var html = ta.value
  var parser = new DOMParser()
  var doc = parser.parseFromString(html, 'text/html')
  var article = doc.querySelector('.lesson-content')
  preview.innerHTML = article ? article.innerHTML : html
  preview.style.display = 'block'
}

function saveEditedLesson(modId, lecId) {
  var ta = document.getElementById('lecHtmlEditor')
  if (!ta) return
  var key = 'm' + modId + '-l' + lecId
  setEditedLesson(key, ta.value)
  alert('Contenido de la lección guardado')
}

// ============================================================
// MODAL: DELETE LESSON
// ============================================================

function modalRemoveLeccion(modId, lecId) {
  var html =
    '<p style="margin-bottom:16px;color:#475569">¿Está seguro de eliminar esta lección?</p>' +
    '<div class="modal-actions">' +
    '<button class="btn-small" style="background:#e2e8f0;color:#333" onclick="cerrarModal()">Cancelar</button>' +
    '<button class="btn-small btn-delete" onclick="confirmRemoveLeccion(' + modId + ',' + lecId + ')">Eliminar</button>' +
    '</div>'
  abrirModal('Eliminar lección', html)
}

function confirmRemoveLeccion(modId, lecId) {
  removeLeccion(modId, lecId)
  cerrarModal()
  renderAdminModulos()
}

// ============================================================
// REORDER
// ============================================================

function moveLeccionUp(modId, lecId) {
  moveLeccion(modId, lecId, -1)
  renderAdminModulos()
}

function moveLeccionDown(modId, lecId) {
  moveLeccion(modId, lecId, 1)
  renderAdminModulos()
}

function initConfig() {
  const user = getUser()
  if (!user) { window.location.href = 'login.html'; return }
  document.getElementById('configName').value = user.name
  document.getElementById('configEmail').value = user.email
  if (user.photo) document.getElementById('configPic').src = user.photo
  document.getElementById('configPhotoInput').addEventListener('change', function(e) {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = function(ev) { document.getElementById('configPic').src = ev.target.result }
    reader.readAsDataURL(file)
  })
  document.getElementById('configForm').addEventListener('submit', function(e) {
    e.preventDefault()
    const name = document.getElementById('configName').value.trim()
    const email = document.getElementById('configEmail').value.trim()
    const pass = document.getElementById('configPassword').value
    const photo = document.getElementById('configPic').src
    if (!name || !email) { document.getElementById('configMsg').textContent = '❌ Nombre y correo obligatorios'; return }
    const users = JSON.parse(localStorage.getItem('cursoUsers') || '[]')
    const idx = users.findIndex(function(u) { return u.email === user.email })
    if (idx !== -1) {
      users[idx].name = name
      if (pass) users[idx].password = pass
      users[idx].photo = (photo && photo.indexOf('default-avatar') === -1) ? photo : ''
      localStorage.setItem('cursoUsers', JSON.stringify(users))
    }
    user.name = name
    user.photo = (photo && photo.indexOf('default-avatar') === -1) ? photo : ''
    saveUser(user)
    document.getElementById('configMsg').textContent = '✅ Cambios guardados'
  })
}

// ============================================================
// PROMPT BLOCKS — reusable component
// ============================================================

function initPromptBlocks() {
  document.querySelectorAll('.prompt-block').forEach(function(block) {
    if (block.dataset.promptReady) return
    block.dataset.promptReady = '1'

    var pre = block.querySelector('pre')
    var code = block.querySelector('code')
    if (!pre && !code) return

    var content = document.createElement('div')
    content.className = 'prompt-content'
    if (pre) {
      content.appendChild(pre.cloneNode(true))
      pre.replaceWith(content)
    } else if (code) {
      content.appendChild(code.cloneNode(true))
      code.replaceWith(content)
    }

    // measure full content height vs constrained visible height
    // temporarily apply collapsed constraint to get the visible threshold
    block.classList.add('collapsed')
    var visibleH = content.clientHeight
    block.classList.remove('collapsed')
    var isLong = content.scrollHeight > visibleH

    if (isLong) {
      block.classList.add('has-expand-btn')

      var fade = document.createElement('div')
      fade.className = 'prompt-fade'
      block.appendChild(fade)

      var expandBtn = document.createElement('button')
      expandBtn.className = 'prompt-expand-btn'
      expandBtn.textContent = '\u25bc Ver completo'
      block.appendChild(expandBtn)

      block.classList.add('collapsed')

      expandBtn.addEventListener('click', function() {
        var isCollapsed = block.classList.toggle('collapsed')
        expandBtn.textContent = isCollapsed ? '\u25bc Ver completo' : '\u25b2 Ocultar'
      })
    }

    var copyBtn = document.createElement('button')
    copyBtn.className = 'prompt-copy-btn'
    copyBtn.setAttribute('aria-label', 'Copiar prompt')
    copyBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>'
    block.appendChild(copyBtn)

    var tooltip = document.createElement('span')
    tooltip.className = 'prompt-copy-tooltip'
    tooltip.textContent = 'Copiar prompt'
    block.appendChild(tooltip)

    copyBtn.addEventListener('click', function() {
      var codeEl = content.querySelector('code')
      var text = codeEl ? codeEl.textContent : content.textContent
      navigator.clipboard.writeText(text).then(function() {
        copyBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>'
        tooltip.textContent = '\u00a1Prompt copiado!'
        tooltip.classList.add('show')
        setTimeout(function() {
          copyBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>'
          tooltip.textContent = 'Copiar prompt'
          tooltip.classList.remove('show')
        }, 2000)
      }).catch(function() {
        tooltip.textContent = 'Error al copiar'
        tooltip.classList.add('show')
        setTimeout(function() { tooltip.classList.remove('show') }, 1500)
      })
    })
  })
}


