# Rivas Elecciones | Cuadro de Mando Histórico

Este proyecto es un portal web interactivo (Dashboard) diseñado para la **Oficina de Información Territorial de Rivas-Vaciamadrid (OITR)**. Su objetivo es visualizar, analizar y comparar los resultados históricos de diferentes convocatorias electorales (Generales, Municipales, Autonómicas y Europeas) a nivel de sección censal y colegio electoral en el municipio de Rivas-Vaciamadrid.

La aplicación integra cartografía dinámica en tiempo real mediante el **ArcGIS Maps SDK para JavaScript** y gestiona todas las métricas, agregaciones de votos e indicadores en el lado del cliente (Front-End).

---

## 📂 Estructura de Archivos del Proyecto

El proyecto está diseñado con tecnologías web puras (HTML5, CSS3, JavaScript ES6) sin necesidad de frameworks de compilación ni dependencias pesadas. La arquitectura es la siguiente:

```text
├── index.html                   # Estructura HTML del dashboard, calculadora de pactos y modales
├── styles.css                   # Diseño visual, estilos glassmorphism, calculadora de pactos y responsividad
├── app.js                       # Lógica de la aplicación, mapas de ArcGIS y motor interactivo de pactos
├── section_colegio_mapping.js   # Configuración de elecciones, diccionarios de censo y mapeos
├── serve.ps1                    # Servidor local de desarrollo inteligente con auto-detección de puerto
└── Iconos/                      # Recursos gráficos (logos de partidos políticos y fotos de colegios)
```

---

## ⚙️ Arquitectura Técnica y Componentes

### 1. `index.html`
Define la interfaz de usuario en tres áreas principales:
* **Cabecera (Header):** Controles de selección de ámbito electoral y años. En modo comparación, se organiza de izquierda a derecha siguiendo un orden cronológico y de lectura lógico: `Ámbito ➔ Año Anterior (Comparativa) ➔ Año Posterior (Principal)`.
* **Barra Lateral (Sidebar):** Organizada en tres pestañas:
  * **Global:** Indicadores clave de censo, participación, balanza de bloques interactiva y barras de porcentaje por partido.
  * **Colegios:** Buscador y lista de los 15 centros de votación. Al hacer clic, localiza el centro en el mapa y despliega una ficha modal con su fotografía, dirección y resultados específicos.
  * **Análisis Político:** Estadísticas avanzadas como el ranking de participación, el feudo electoral de cada partido y el análisis de volatilidad geográfica (Swing) en modo comparación.
* **Visor Cartográfico:** Contenedores para el mapa único o la vista sincronizada en paralelo (Split-Map).

### 2. `styles.css`
Aplica un diseño moderno de tipo **Glassmorphism** utilizando variables CSS para la gestión de temas, colores corporativos y tipografía (fuente *Outfit* de Google Fonts). Es completamente responsivo y maneja transiciones suaves para hover y despliegues de modales. Además, incorpora la clase global `.hidden { display: none !important; }` para asegurar la correcta ocultación y despliegue de los paneles en la interfaz.

### 3. `app.js` (El motor de lógica)
Maneja toda la interacción mediante la API de ArcGIS JavaScript (`v4.29`):
* **Inicialización de Mapas (`initMaps`):** Configura los mapas base gris de Rivas utilizando servicios de mapas en teselas de Rivas (`Hosted/MAPAPROYECTO_GRIS/MapServer`). Para evitar recortes en el linde norte del término municipal y asegurar una visualización perfecta de inicio, se configuran las vistas con:
  * **Centro inicial:** `[-3.532, 40.347]` (desplazado un poco hacia el norte).
  * **Nivel de zoom:** `12.8`.
  * **Zoom continuo habilitado:** Se añade la propiedad `constraints: { snapToZoom: false }` para evitar que el visor redondee la escala a números enteros.
* **Carga de Capas y Renderizado (`loadLayerAndFeatures`):** Genera renderizadores dinámicos basados en expresiones **Arcade** en el cliente para colorear cada sección censal según el partido ganador en tiempo real. Añade una capa de gráficos (`labelsLayer`) para dibujar en el centroide de cada sección el logotipo o siglas del partido ganador.
* **Popups Dinámicos:** Genera ventanas emergentes construidas dinámicamente mediante funciones JavaScript para calcular la participación, censos y listados de partidos ordenados de mayor a menor voto por sección.
* **Sincronización de Vistas (`syncMapViews`):** En modo comparación, sincroniza la extensión geográfica, escala y rotación de ambos mapas mediante *watchers* bidireccionales del `viewpoint`.
* **Cálculos Electorales (`aggregateElectionData`):** Recorre todas las entidades (secciones censales) devueltas por la consulta de ArcGIS, sumando los votos de cada partido, votos en blanco, nulos y censo para construir las estadísticas municipales y agruparlas por colegios electorales.

---

## 🗳️ Resolución del Censo Electoral Histórico

Uno de los mayores retos del proyecto era calcular la participación correcta en elecciones históricas (como Municipales 2019 o Generales 2019) cuyas capas de ArcGIS carecen del campo `electores`.
La aplicación resuelve esto dinámicamente en `app.js` de la siguiente manera:

1. Se define la propiedad **`censusProxy`** en la configuración de la elección con el nombre de la constante del censo a aplicar (ej: `censusProxy: "CENSUS_2019_MUNI"`).
2. Se crea un objeto mapeador interno **`CENSUS_MAPS`** en `app.js` que enlaza las variables del ámbito léxico global.
3. Al procesar las secciones, el código comprueba si existe el campo `electoresField`. Si no está definido o es nulo, el script resuelve dinámicamente el censo para la sección censal actual consultando el diccionario proxy indicado:
   ```javascript
   const censusObj = config.censusProxy ? CENSUS_MAPS[config.censusProxy] : CENSUS_MAPS.CENSUS_2023;
   secElectoralCount = (censusObj && censusObj[seccionCode]) || 0;
   ```

---

## 🎛️ Calculadora de Pactos y Asignación de Bloques

Para evitar el sesgo político-institucional de definir de forma rígida qué partidos pertenecen a la "Izquierda" o "Derecha", el dashboard incorpora una **Calculadora de Pactos interactiva**.

### Lógica de Funcionamiento:
1. **Variables de Estado en `app.js`:** La asignación de bloques activa se gestiona en memoria mediante los arrays `currentLeftBlock` y `currentRightBlock`.
2. **Inicialización (`setupBlocksConfigurator`):** Al cargar una elección, se leen los bloques predefinidos de su configuración (`leftBlock` / `rightBlock`) como propuesta inicial y se genera la lista de partidos en la interfaz colapsable `#blocksConfigurator`.
3. **Selector Segmentado:** Cada partido en la lista cuenta con un selector de 3 estados:
   * **`I` (Izquierda):** El partido se añade a `currentLeftBlock`.
   * **`N` (Neutro):** El partido se elimina de ambos bloques.
   * **`D` (Derecha):** El partido se añade a `currentRightBlock`.
4. **Agregación en Caliente (`updateBlocksUIVisualization`):** Al hacer clic en cualquier opción, la función recalcula en vivo las sumas de votos de ambos bloques utilizando los votos agregados por partido en `partyVotes` y actualiza las barras de progreso y los textos en pantalla de manera animada.
5. **Consistencia en Modo Comparación:** Cuando el usuario altera la calculadora de pactos en modo comparación, la asignación de partidos seleccionada se proyecta también sobre la elección anterior (`Older`) eliminando de forma inteligente aquellos partidos que no apliquen, garantizando que la comparativa de deltas y votos absolutos sea 100% coherente a nivel metodológico.

---

## 🛠️ Cómo Añadir una Nueva Elección al Portal

Para incorporar una nueva convocatoria electoral en el portal, únicamente debes modificar el array **`ELECTIONS_CONFIG`** en `section_colegio_mapping.js` y añadir un nuevo objeto de configuración.

### Estructura de Configuración de una Elección:

```javascript
{
  id: "municipales_2027",                  // ID único de la elección
  scope: "municipales",                    // Ámbito: "generales", "municipales", "asamblea" o "europeas"
  year: "2027",                            // Año de la convocatoria (se usará en los selects)
  label: "Municipales 2027",               // Etiqueta legible en la interfaz
  url: "https://sit.rivasciudad.es/...",   // URL del FeatureServer/0 de la capa de ArcGIS
  seccionField: "SECCION",                 // Nombre del campo que contiene el número de sección censal
  electoresField: "N_ELECTORES",           // Nombre del campo del censo (si existe en la capa de ArcGIS; de lo contrario poner null)
  censusProxy: null,                       // Si electoresField es null, nombre del diccionario de censo histórico (ej: "CENSUS_2023")
  votosField: "TOTAL_VOTOS",               // Campo del total de votos (si no existe, poner null y se autocalculará sumando los partidos)
  blancoField: "BLANCO",                   // Nombre del campo de votos en blanco
  nuloField: "NULO",                       // Nombre del campo de votos nulos
  colegioField: null,                      // Campo del colegio electoral si viene en la capa (si no, se mapea por sección automáticamente)
  parties: [                               // Array de partidos políticos a mostrar en el desglose
    { 
      id: "PP", 
      name: "PP", 
      field: "VOTOS_PP",                   // Nombre exacto del campo de votos en la capa de ArcGIS
      color: "#1E5AA8",                    // Color hexadecimal para pintar la sección en el mapa y las gráficas
      logo: "Iconos/Logo_del_PP.png"       // Logotipo del partido (opcional, null si no tiene)
    },
    // ... añadir el resto de partidos
  ],
  leftBlock: ["PSOE", "SUMAR"],            // IDs de los partidos que suman en el Bloque de Izquierda por defecto
  rightBlock: ["PP", "VOX"]                // IDs de los partidos que suman en el Bloque de Derecha por defecto
}
```

---

## 🚀 Ejecución y Despliegue

### Servidor Local de Desarrollo (`serve.ps1`)
El script [serve.ps1](file:///g:/Mi%20unidad/Proyectos%20Personalizaci%C3%B3n%20ARCGIS/Elecciones%20Generales/serve.ps1) monta un servidor web HTTP Listener nativo de PowerShell robusto para eludir restricciones de seguridad **CORS** de las llamadas Ajax.
* **Auto-detección de puerto:** Si el puerto `8080` está ocupado por otra aplicación en tu equipo, el script prueba de forma consecutiva con el `8081`, `8082`, etc., hasta encontrar el primer puerto libre disponible, abriendo el navegador automáticamente en esa dirección.
* **Tolerancia a fallos:** El bucle de peticiones está securizado contra errores de sockets y tuberías rotas (cuando el navegador cancela o refresca la carga de forma repentina), garantizando que el servidor permanezca siempre en ejecución de forma estable.
* **Ejecución:**
  ```powershell
  powershell -ExecutionPolicy Bypass -File .\serve.ps1
  ```

### Despliegue en Producción (GitHub / Servidor Municipal)
El portal es 100% estático:
1. **GitHub Pages (Provisional de desarrollo):** Al realizar un push a la rama `main` en GitHub, el portal se compila automáticamente y se despliega en internet.
2. **Servidor Web Municipal (Despliegue final):** Al ser código front-end estático puro, para desplegarlo de forma definitiva en la red municipal únicamente debes copiar la carpeta raíz del proyecto (incluida la carpeta `Iconos/`) en el directorio de publicaciones de tu servidor IIS, Apache, Nginx o similar. No requiere bases de datos locales ni entornos de ejecución Node.js/Python en el servidor.
