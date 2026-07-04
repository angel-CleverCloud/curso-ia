# Regla: Bloques de Prompts

Esta regla se aplicará únicamente a las lecciones que contengan ejemplos de prompts.

Si la lección no incluye prompts, omitir completamente esta regla.

--------------------------------------------

OBJETIVO

Mejorar la visualización y la experiencia de uso de todos los ejemplos de prompts presentes en las lecciones, manteniendo el diseño general de CleverLabs Academy.

No modificar el contenido educativo del prompt.

--------------------------------------------

BLOQUES DE PROMPTS

Todos los ejemplos de prompts deberán mostrarse dentro de un componente reutilizable llamado "Bloque de Prompt".

Cada bloque deberá:

- Mantener el mismo estilo visual de CleverLabs Academy.
- Tener un fondo ligeramente diferente para destacarlo del contenido.
- Contar con bordes redondeados.
- Tener un borde sutil.
- Mantener un espaciado uniforme.
- Ser completamente responsive.
- Ajustar automáticamente el contenido al ancho disponible.
- No permitir que el texto sobresalga del contenedor.
- Conservar los saltos de línea e indentación originales.
- Mostrar correctamente el contenido incluso cuando el prompt sea muy extenso.

--------------------------------------------

ESTADO INICIAL

La funcionalidad de minimizar deberá aplicarse únicamente a los prompts cuyo contenido supere las 3 líneas visibles.

Si el prompt tiene 3 líneas o menos:

- Mostrar el contenido completo.
- No agregar ninguna funcionalidad de expandir o contraer.
- No mostrar degradado.
- No mostrar el botón "Ver completo".

Si el prompt supera las 3 líneas visibles:

- Mostrar únicamente las primeras 3 líneas.
- Mostrar un degradado indicando que existe más contenido.
- Mostrar el botón:

▼ Ver completo

--------------------------------------------

EXPANDIR / CONTRAER

Al presionar "Ver completo":

- Expandir suavemente el bloque.
- Mostrar el contenido completo del prompt.
- Cambiar automáticamente el botón por:

▲ Ocultar

Al presionar nuevamente:

- Contraer el bloque.
- Volver a mostrar únicamente las primeras 3 líneas.

Cada bloque deberá funcionar de manera independiente.

La detección deberá realizarse automáticamente utilizando la altura real del contenido renderizado, no por cantidad de caracteres.

--------------------------------------------

BOTÓN COPIAR

Cada bloque deberá incluir un botón de copiar ubicado en la esquina superior derecha.

No utilizar un botón con texto.

Utilizar únicamente un icono minimalista de copiar (dos hojas superpuestas), similar al utilizado por GitHub, OpenAI, Anthropic, Vercel o Visual Studio Code.

El botón deberá mantener el mismo estilo visual de CleverLabs Academy.

--------------------------------------------

FUNCIONAMIENTO DEL BOTÓN COPIAR

Al hacer clic:

- Copiar automáticamente todo el contenido del prompt utilizando la Clipboard API.
- Copiar únicamente el texto del prompt.

Después de copiar correctamente:

- Cambiar temporalmente el icono por un icono de verificación (✔).
- Mostrar un tooltip:

"¡Prompt copiado!"

Después de aproximadamente 2 segundos:

- Restaurar automáticamente el icono de copiar.
- Restaurar el tooltip:

"Copiar prompt"

Cada botón deberá funcionar de forma independiente.

--------------------------------------------

ANIMACIONES

Las transiciones entre expandir y contraer deberán ser suaves.

Evitar cambios bruscos de tamaño.

--------------------------------------------

IMPLEMENTACIÓN

Utilizar únicamente:

- HTML
- CSS
- JavaScript puro

No utilizar librerías externas.

Crear un único componente reutilizable.

Todos los ejemplos de prompts existentes y futuros deberán utilizar automáticamente este componente.

No modificar el contenido educativo de las lecciones.

El resultado final deberá ofrecer una experiencia similar a la utilizada por GitHub, OpenAI, Anthropic, Vercel o Stripe para mostrar bloques de código o prompts.