# Guía del Usuario | Cuadro de Mando de Elecciones

Bienvenido a la **Guía del Usuario** del Cuadro de Mando de Elecciones de Rivas-Vaciamadrid. Este portal interactivo está diseñado para facilitar a los empleados municipales, analistas y ciudadanos la consulta, análisis y comparación de los resultados de los diferentes procesos electorales del municipio a nivel de sección censal y colegio electoral.

El portal es 100% interactivo y visual. A continuación se detallan sus componentes y cómo utilizar cada una de sus funcionalidades.

---

## 🖥️ Estructura de la Interfaz

La aplicación se divide en tres zonas principales:
1. **Barra Superior de Control:** Permite elegir los datos que quieres visualizar y activar el modo comparación.
2. **Panel Lateral de Información:** Muestra gráficos, listas de resultados, buscador de colegios e indicadores de análisis político organizados en pestañas.
3. **Visor de Mapa Principal:** Ocupa la mayor parte de la pantalla y muestra la representación geográfica de Rivas dividida por secciones electorales.

---

## 🔍 Funcionalidades Principales

### 1. Consulta de una Convocatoria Electoral (Modo Normal)
Al entrar al portal, verás por defecto la información de las elecciones **Generales de 2023**. Puedes cambiar la consulta en cualquier momento utilizando los controles de la barra superior:
* **Ámbito:** Filtra por el tipo de elección que deseas consultar:
  * *Generales* (Elecciones al Congreso de los Diputados de España)
  * *Municipales* (Elecciones al Ayuntamiento de Rivas)
  * *Asamblea de Madrid* (Elecciones Autonómicas)
  * *Europeas* (Elecciones al Parlamento Europeo)
* **Año:** Despliega los años disponibles para el ámbito seleccionado (por ejemplo, en municipales podrás seleccionar 2023, 2019, 2015 o 2011).

El mapa y el panel lateral se actualizarán automáticamente en pocos segundos para mostrar los datos de la elección elegida.

---

### 2. Panel Lateral: Pestañas de Análisis

#### Pestaña A: "Global" (Estadísticas Generales)
Muestra la agregación total de los votos a nivel de todo el municipio de Rivas-Vaciamadrid:
* **Tarjetas de Indicadores Rápidos:** Muestra el número total de votos emitidos, el **Censo Electoral** (número total de personas con derecho a voto en esa convocatoria) y el porcentaje total de **Participación** (con una barra de progreso visual). También detalla los votos nulos y en blanco con sus respectivos porcentajes.
* **Balanza de Bloques y Calculadora de Pactos (Interactivo):** Agrupa los votos de los partidos en dos grandes bloques.
  * *Configuración de Pactos:* Haz clic en el botón de ajustes (icono de controles `<i class="fa-solid fa-sliders"></i>`) en la parte superior derecha de la tarjeta para desplegar el configurador de bloques.
  * *Asignación de Partidos:* Podrás alternar cada partido de la lista entre tres estados pulsando sus respectivos botones: **`I`** (Izquierda / Bloque A - Rojo), **`N`** (Neutro / Sin sumar - Gris) y **`D`** (Derecha / Bloque B - Verde). La balanza, los porcentajes y los votos totales de la barra lateral se recalcularán y animarán en pantalla de forma instantánea según la combinación que elijas. Esto te permite modelar al instante cualquier propuesta de coalición.
* **Resultados por Partido:** Listado ordenado de mayor a menor voto de todos los partidos políticos que se presentaron. Cada partido incluye su logotipo, color identificativo, votos totales y porcentaje obtenido sobre el voto válido.

#### Pestaña B: "Colegios" (Buscador y Fichas de Centros)
Rivas-Vaciamadrid cuenta con **15 colegios electorales**. Esta pestaña te permite localizarlos y analizarlos de forma individual:
* **Buscador:** Escribe el nombre de un colegio (ej: "Saramago" o "Hipatia") para filtrar la lista al instante.
* **Lista de Colegios:** Cada colegio en la lista muestra información rápida: el partido ganador en ese centro, el número de secciones censales que acoge, el porcentaje de participación y sus votos totales.
* **Ficha del Centro (Modal):** Al hacer clic sobre cualquier colegio de la lista:
  1. El mapa hará zoom automático y centrará la vista sobre las secciones censales que pertenecen a ese colegio.
  2. Se abrirá una ventana emergente (modal) con la **fotografía del edificio**, la dirección física, un botón directo para abrir la **ruta de navegación en Google Maps**, y los datos específicos del censo, participación y resultados de partidos *únicamente en ese centro*.

#### Pestaña C: "Análisis Político" (Estadísticas Avanzadas)
Ofrece datos analíticos procesados en tiempo real:
* **Ranking de Participación:** Lista de los 5 colegios electorales de Rivas donde la participación ciudadana fue la más alta de esa elección.
* **Feudo Electoral:** Indica en qué colegio electoral obtuvo cada partido político su porcentaje de voto más alto (su "plaza fuerte" en el municipio), detallando el porcentaje y votos obtenidos.

---

### 3. Interacción con el Mapa
El visor cartográfico es interactivo y te permite explorar el voto geográficamente:
* **Encuadre Inicial:** El mapa se inicializa por defecto centrado sobre el término municipal de Rivas-Vaciamadrid con un nivel de zoom optimizado de `12.8` y el centro ligeramente desplazado al norte para que los límites municipales queden perfectamente visibles y holgados sin recortes.
* **Coloreado Temático:** Cada sección censal del mapa se colorea automáticamente con el color oficial del partido político que resultó más votado en dicha sección. Si no hay datos o hay un empate, se muestra en color gris.
* **Iconos del Ganador:** En el centro de cada sección censal verás dibujado el logotipo oficial o las siglas de la fuerza política que ganó en ella, facilitando una lectura visual rápida del mapa sin necesidad de interactuar.
* **Ficha de Sección Censal (Popup):** Si haces clic sobre cualquier sección en el mapa, aparecerá un cuadro flotante con la información de esa sección:
  * Nombre del colegio electoral donde votan esos vecinos y su dirección.
  * Botón para ir a Google Maps.
  * Censo electoral real de la sección.
  * Votos emitidos y porcentaje de participación de esa sección.
  * Desglose completo de los partidos ordenado por votos, incluyendo los votos en blanco y nulos.

*Controles del mapa:* Puedes hacer zoom usando la rueda del ratón o los botones **`+`** y **`-`** de la esquina superior izquierda. El botón de la **Casa** (Home) restablecerá la vista por defecto mostrando todo el término municipal de Rivas.

---

## 🔄 Modo Comparación (Año A vs Año B)

Esta es una de las herramientas más potentes del portal. Permite poner frente a frente dos elecciones distintas del mismo ámbito para analizar cómo se comportó el electorado a lo largo del tiempo.

### Cómo utilizarlo:
1. Haz clic en el botón **`Comparar Años`** en la esquina superior derecha de la cabecera.
2. La interfaz cambiará:
   * El mapa se dividirá en dos pantallas laterales (Split-Map).
   * El mapa de la **izquierda** mostrará la elección más antigua (Año Anterior).
   * El mapa de la **derecha** mostrará la elección más reciente (Año Posterior).
3. Los selectores de año en la cabecera se ordenan de izquierda a derecha de forma cronológica coherente: `Año Anterior (Comparativa)` ➔ `Año Posterior (Principal)`. Selecciona el año más reciente en el desplegable derecho y el año con el que quieres compararlo en el desplegable izquierdo.

### Características especiales del modo comparación:
* **Navegación Sincronizada:** Al arrastrar el mapa o hacer zoom en cualquiera de los dos lados, **el otro mapa se moverá y ampliará de manera idéntica automáticamente**. Esto te permite comparar el comportamiento visual de la misma calle o barrio exacto en dos elecciones distintas.
* **Visualización de Variaciones (Deltas):** En el panel lateral, las tarjetas globales mostrarán deltas de comparación:
   * La participación mostrará una flecha verde hacia arriba (**`+X.XX%`**) si la participación subió en el año reciente, o una flecha roja hacia abajo (**`-X.XX%`**) si bajó.
   * La tabla de resultados de partidos mostrará al lado del porcentaje obtenido el incremento o disminución respecto a la elección anterior.
* **Calculadora de Pactos Coherente:** Al configurar bloques interactivos en el menú de la balanza en modo comparación, tu asignación personalizada se proyectará sobre ambas elecciones de forma simultánea, permitiendo una comparación exacta de la fuerza de tus coaliciones entre ambas fechas históricas.
* **Fidelidad Geográfica / Volatilidad (Swing):** En la pestaña *Análisis Político*, se activará un motor que compara el ganador sección por sección. Mostrará:
   * El porcentaje total de secciones censales del municipio que **cambiaron de partido ganador** de una elección a otra.
   * Un listado interactivo detallando qué secciones cambiaron, indicando el colegio electoral al que pertenecen y qué partido le arrebató la victoria al anterior (ej: `Sección 001: PP ➔ PSOE`).
