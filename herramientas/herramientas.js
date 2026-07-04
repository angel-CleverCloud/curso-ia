// ponytail: standalone herramientas data + render, no framework
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

// ============================================================
// RENDER
// ============================================================

function renderHerramientas(container) {
  const CATEGORIES = [
    { key:'ia-agents', icon:'🤖', label:'Agentes de IA' },
    { key:'cli-agents', icon:'💻', label:'Agentes para CLI' },
    { key:'concepts', icon:'🧠', label:'Conceptos y Arquitecturas' },
  ]

  const CLI_INTRO = '<div class="herramientas-intro"><strong>¿Qué es un agente CLI?</strong> Un agente CLI (Command Line Interface) es una herramienta de IA que opera directamente desde la terminal. A diferencia de las interfaces gráficas, los agentes CLI permiten automatizar tareas, integrarse en pipelines y trabajar en entornos headless como servidores o contenedores. <strong>Ventajas:</strong> mayor control, automatizable, menor consumo de recursos, ideal para CI/CD. <strong>Flujo típico:</strong> instalación → configuración → prompt → revisión → iteración.</div>'

  let html = '<h2 class="section-title">🔧 Herramientas</h2>'

  html += '<div class="herramientas-controls">'
  html += '<input type="text" id="herramientasSearch" class="herramientas-search" placeholder="Buscar herramientas y conceptos..." oninput="filterHerramientas()">'
  html += '<div class="herramientas-filters" id="herramientasFilters">'
  html += '<button class="filter-btn active" data-filter="all" onclick="setFilter(\'all\')">Todas</button>'
  html += '<button class="filter-btn" data-filter="ia-agents" onclick="setFilter(\'ia-agents\')">🤖 Agentes IA</button>'
  html += '<button class="filter-btn" data-filter="cli-agents" onclick="setFilter(\'cli-agents\')">💻 CLI</button>'
  html += '<button class="filter-btn" data-filter="concepts" onclick="setFilter(\'concepts\')">🧠 Conceptos</button>'
  html += '<span class="filter-sep"></span>'
  html += '<button class="filter-btn" data-filter="open-source" onclick="setFilter(\'open-source\')">Open Source</button>'
  html += '<button class="filter-btn" data-filter="gratuito" onclick="setFilter(\'gratuito\')">Gratuito</button>'
  html += '<button class="filter-btn" data-filter="pago" onclick="setFilter(\'pago\')">De pago</button>'
  html += '<span class="filter-sep"></span>'
  html += '<button class="filter-btn" data-filter="windows" onclick="setFilter(\'windows\')">Windows</button>'
  html += '<button class="filter-btn" data-filter="linux" onclick="setFilter(\'linux\')">Linux</button>'
  html += '<button class="filter-btn" data-filter="macos" onclick="setFilter(\'macos\')">macOS</button>'
  html += '<button class="filter-btn" data-filter="web" onclick="setFilter(\'web\')">Web</button>'
  html += '</div></div>'

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

// ============================================================
// DETAIL MODAL
// ============================================================

// ponytail: minimal code formatter for detail text
function formatDetailText(text) {
  text = text.replace(/```(\w*)\n?([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
  return text.replace(/\n/g, '<br>')
}

function showToolDetail(id) {
  const t = TOOLS.find(function(x) { return x.id === id })
  if (!t) return

  let body = '<div class="tool-detail">'

  body += '<div class="detail-header">'
  if (t.url) body += '<a href="' + t.url + '" target="_blank" class="boton" style="margin-top:0">Visitar sitio oficial →</a>'
  body += '</div>'

  body += '<p class="detail-desc">' + t.description + '</p>'

  body += '<div class="detail-meta">'
  if (t.nivel) body += '<span><strong>Nivel:</strong> ' + t.nivel + '</span>'
  if (t.sistemas && t.sistemas !== '—') body += '<span><strong>Sistemas:</strong> ' + t.sistemas + '</span>'
  if (t.licencia && t.licencia !== '—') body += '<span><strong>Licencia:</strong> ' + t.licencia + '</span>'
  body += '</div>'

  t.details.forEach(function(d) {
    body += '<div class="detail-section">'
    body += '<h4>' + d.label + '</h4>'
    body += '<div class="detail-text">' + formatDetailText(d.text) + '</div>'
    body += '</div>'
  })

  body += '</div>'
  abrirModal(t.name, body)
}

// ============================================================
// FILTER + SEARCH
// ============================================================

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

      const matchSearch = !q || name.indexOf(q) !== -1 || desc.indexOf(q) !== -1
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

// ============================================================
// MODAL SYSTEM (standalone)
// ============================================================

function abrirModal(title, bodyHtml) {
  var overlay = document.getElementById('modalOverlay')
  if (!overlay) {
    overlay = document.createElement('div')
    overlay.id = 'modalOverlay'
    overlay.className = 'modal-overlay'
    overlay.onclick = function(e) { if (e.target === overlay) cerrarModal() }
    overlay.innerHTML = '<div class="modal"><div class="modal-header"><h3 id="modalTitle"></h3><button id="modalCloseBtn" class="modal-close">&times;</button></div><div class="modal-body" id="modalBody"></div></div>'
    document.body.appendChild(overlay)
    document.getElementById('modalCloseBtn').addEventListener('click', cerrarModal)
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') cerrarModal() })
  }
  document.getElementById('modalTitle').textContent = title
  document.getElementById('modalBody').innerHTML = bodyHtml
  overlay.style.display = 'flex'
}

function cerrarModal() {
  var overlay = document.getElementById('modalOverlay')
  if (overlay) overlay.style.display = 'none'
}

// ============================================================
// BOOT
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
  var container = document.getElementById('herramientasApp')
  if (container) renderHerramientas(container)
})
