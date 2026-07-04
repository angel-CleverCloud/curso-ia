Trabaja únicamente sobre las lecciones del Módulo 3.

No modifiques ningún otro módulo del proyecto.

OBJETIVO

Mejorar la visualización y la experiencia de uso de todos los ejemplos de prompts presentes en las lecciones del Módulo 3, manteniendo el diseño general de CleverLabs Academy.

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
- Conservar los saltos de línea e indentación del prompt.

Aplicar las reglas necesarias para evitar que los prompts largos se salgan del recuadro.

--------------------------------------------

ESTADO INICIAL

Todos los bloques de prompts deberán mostrarse inicialmente minimizados.

Únicamente deberá visualizarse:

- Las primeras 4 a 6 líneas del prompt.
- Un degradado en la parte inferior indicando que existe más contenido.
- El botón "Ver completo".

El resto del contenido permanecerá oculto.

--------------------------------------------

EXPANDIR / CONTRAER

Cada bloque deberá incluir un botón ubicado en la parte inferior derecha llamado:

▼ Ver completo

Al presionarlo:

- Expandir suavemente el bloque.
- Mostrar el contenido completo del prompt.
- Cambiar automáticamente el botón por:

▲ Ocultar

Al presionar nuevamente:

- Contraer el bloque.
- Volver al estado inicial minimizado.

Cada bloque deberá funcionar de forma independiente.

--------------------------------------------

BOTÓN COPIAR

Cada bloque de prompt deberá incluir un botón de copiar ubicado en la esquina superior derecha.

NO utilizar un botón grande con texto.

Utilizar únicamente un icono de copiar (dos hojas superpuestas), similar al utilizado por GitHub, OpenAI, Anthropic o Vercel.

El botón debe ser pequeño, minimalista y discreto.

--------------------------------------------

FUNCIONAMIENTO DEL BOTÓN COPIAR

Al hacer clic:

- Copiar automáticamente todo el contenido del prompt utilizando la Clipboard API.
- Copiar únicamente el contenido del prompt.

Después de copiar correctamente:

- Cambiar temporalmente el icono de copiar por un icono de verificación (✔).
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

Utilizar transiciones CSS para que la apertura y cierre del bloque se vea fluida.

Evitar cambios bruscos de tamaño.

--------------------------------------------

DISEÑO

Mantener completamente el diseño de CleverLabs Academy.

No modificar:

- Colores generales.
- Tipografías.
- Clases CSS existentes.
- Diseño del contenido educativo.

Únicamente mejorar la presentación de los bloques de prompts.

--------------------------------------------

IMPLEMENTACIÓN

Utilizar únicamente:

- HTML
- CSS
- JavaScript puro

No utilizar librerías externas.

Crear un componente reutilizable.

Todos los ejemplos de prompts existentes y futuros del Módulo 3 deberán utilizar automáticamente este componente sin necesidad de volver a implementar la lógica.

No modificar el contenido educativo de las lecciones.

El resultado final deberá ser similar al comportamiento utilizado por la documentación de GitHub, OpenAI, Vercel o Stripe, donde los bloques de código largos aparecen inicialmente minimizados, pueden expandirse cuando el usuario lo desee y cuentan con un botón para copiar el contenido.