--------------------------------------------

EXPANDIR / CONTRAER

La funcionalidad de expandir y contraer deberá aplicarse automáticamente únicamente cuando el contenido del prompt exceda el tamaño visible del contenedor.

No utilizar un número fijo de líneas para decidir cuándo mostrar el botón "Ver completo".

La detección deberá realizarse automáticamente comparando la altura total del contenido (scrollHeight) con la altura visible del contenedor (clientHeight).

Si scrollHeight es igual a clientHeight:

- Mostrar el prompt completo.
- No mostrar el botón "Ver completo".
- No mostrar el degradado.
- No aplicar ninguna lógica de expandir o contraer.

Si scrollHeight es mayor que clientHeight:

- Mostrar el prompt en estado colapsado.
- Ocultar completamente el contenido que exceda el tamaño visible del contenedor.
- Mostrar un degradado al final indicando que existe más contenido.
- Mostrar el botón:

▼ Ver completo

Al presionarlo:

- Expandir suavemente el bloque.
- Mostrar todo el contenido del prompt.
- Cambiar automáticamente el botón por:

▲ Ocultar

Al presionarlo nuevamente:

- Contraer el bloque.
- Volver al estado inicial.

--------------------------------------------

DEGRADADO

El degradado deberá adaptarse automáticamente al tamaño del contenedor visible.

El degradado deberá colocarse siempre por encima del contenido oculto para impedir que el texto pueda verse parcialmente.

El contenido oculto deberá permanecer completamente invisible hasta que el usuario presione "Ver completo".

No deberá visualizarse parcialmente debajo del degradado en ninguna resolución de pantalla.

El efecto de degradado deberá desaparecer automáticamente cuando el bloque se encuentre expandido y volver a mostrarse únicamente cuando el bloque vuelva al estado colapsado.

--------------------------------------------

COMPATIBILIDAD

La lógica deberá funcionar correctamente independientemente:

- Del tamaño del prompt.
- Del ancho de la pantalla.
- Del tamaño de la fuente.
- Del dispositivo utilizado.
- Del nivel de zoom del navegador.

Cada bloque de prompt deberá funcionar de forma completamente independiente sin afectar a los demás.

--------------------------------------------