# USABILIDAD WEB

- Dont't make me thing (Steve Krug)

Una propiedad que refleja el fácil funcionamiento de un sistema de información.

## Principios básicos

- Evitar la navegación lineal, es decir, tenemos que poder navegar siempre con cualquier sitio de la web.
- El usuario debe saber en todo momento donde está.
- Se tiene que facilitar la búsqueda de contenido.
- Lo más importante está arriba a la izquierda y lo menos importante abajo a la derecha.
- Anteponer el ancho por delante de la profunidad: first width, then depth.
- Solo un H1 por página. Los demás por orden, después de un h1 va un h2.

## Navegación: capacidad de moverse dentro de una web

- Estructurales: webs del mismo sitio.
- Asociativas: contenidps dentro de la misma página.
- Embebidos: enlaces de webs externas.

Estructurales y asociativos --> sobreescriben la URL
Embebidos -> abren pestaña nueva

Diseño enlaces:
    - Textuales: resaltamos el color del texto normal
    - No textual: remarcamos que el elemento es un enlace(gráfico, foto, video, etc)

Menú: máximo 2 subniveles

## Páginas

- Dar más importancia al contenido que a la estética.
- Scroll:
    - Páginas cprtas (sin scroll o poco): página principal, páginas de navegación o acceso inmediato.
    - Páginas largas: facilite la lecutra ininterrumpida (impresión).
    - Evitar siempre el scroll horizontal!!!
- Página principal:
    - Función: indicar al usuario donde está y la función de la web.
    - Información a mostrar: logo, nombre del sitio, introducción, enlaces a las páginas principales (menú), condiciones acceso (cookies), búsqueda.

## Texto

- Minimizar la extensión del texto: eliminar introducciones innecesarias, no incuir información superflua.
- Emplear tablas y enumeraciones para organizar la información.
- No emplear vocabulario informal (ej: "mola").
- Emplear colores de alto contraste con el fondo.
- Texto estático (sin movimiento ni parpaedo).
- Extensión: 60 caracteres por línea.
- Tamaño: 
    - xx-small: 9px
    - x-small:  10-11px
    - small:    13px
    - medium:   16px
    - large:    18px
    - x-large:  24px
    - xx-large: 32px
- Interlineado: 15-20% del tamaño de la fuente.
- No emplear textos en mayúsculas.
- Texto justificado (alineado a la izquierda).


## Contenido

- Reducir el tiempo de carga (1-3s aceptable, más de 10s nunca).
- Evitar el uso de sonidos y locuciones innecesarias.
- Dar siempre el estado actual en procesos largos (pago, cuestionario...)
- Veracidad de los datos.
- Locale: fechas, días de la semana, unidades de medida, etc en formato local (idiomas, sistema métrico, etc).
    Formato fecha:
        - aa/mm/dd (usuario NO!)
        - dd/mm/aa (usuario SI!)

## Formularios

- No dejar enviar información con formularios erroneos.
- Si hay un error, remarcar exactamente el campo que tiene el error.
- Autorellenado de datos siempre que sea posible.

## Mensajes de error

- Los mensjaes de error tienen que ayudar al usuario a detectar y resolver el problema.
- Los mensajes de error deben ser: especificos, constructivos y en positivo.

Ej:
    *El campo "nombre" debe ser rellenado* --> correcto
    *No deje el campo "nombre" vacío* --> incorrecto (está en negativo)
    *Corrija los errores* --> incorrecto (no especifica el error)
    *No tiene sentido que el campo nombre esté vacío* --> incorrecto (no es constructivo)

## Pie de página

- Información legal
- Información de contacto
- Mapa del sitio

## En contexto de gestión...

- Poder hacer CRUD (Create, Read, Update, Delete) de los datos.
- Listado donde cada elemento se pueda actualizar y eliminar. Arriba botón de añadir.

## Regla Nº1 de Steve Krug -> No me hagas pensar
## Regla Nº2 de Steve Krug -> ¿Cómo podría saber si funciona?

## Medidas objetivas para medir la usabilidad

- Mapa de calor (heat map): donde se hace click en la web.
    - Mapas de calor sobre nuestra web miden la interactividad de un usuario.
    - Arriba a la izquierda es más importante que abajo a la derech
    - Fotos con personas tienen más audiencia
    - Imagenes son mas importantes que el texto
    - F-shapped pattern: leemos la web en forma de F
    - Los resumenes funcionan mejor que los articulos enteros
    - Banner blindness: los banners del sidebar quedan invisibilizados por el usuario.


- Ley de los 3 clicks: si el usuario no encuentra lo que busca en 3 clicks, se va (incrementa el bounce rate).
- % bounce (rebotes): usuarios que entran y salen de la web sin hacer nada (google analytics).
- % links rotos (debe haber 0).
- Disponibilidad de la web > 99%
- Tiempo de permanencia en la página > 30s (Analytics). 
- Número de errores de front end (aproxima a 0 mejor).

## Optimizacion

Mejroar la experiencia de usuario. Normalmente será a costa de algo.
Disminuir la calidad (fotos), cantidad de archivos (concatenando archivos) o la omisión
(borrado parcial de archivos).

- FCP First Contentful Paint: Mide el tiempo desde que el usuario entra hasta que se renderiza el primer contenido. < 1.8s
- LCP Largest Contentful Paint: Mide el tiempo desde que el usuario entra hasta que se renderiza el contenido más grande. < 2.5s
- TBT Total Blocking Time: Mide el tiempo que el usuario está bloqueado por el renderizado. < 300ms