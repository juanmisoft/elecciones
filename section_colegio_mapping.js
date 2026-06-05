// Mapeo unificado de Secciones Censales a Colegios Electorales e Imágenes en Rivas Vaciamadrid
const CENSUS_2023 = {
  "001": 1983, "002": 979, "003": 894, "004": 1536, "005": 1197,
  "006": 1527, "007": 1202, "008": 915, "009": 1321, "010": 980,
  "011": 794, "012": 1131, "013": 1403, "014": 1403, "015": 1367,
  "016": 1715, "017": 1930, "018": 756, "019": 1079, "020": 1193,
  "021": 2007, "022": 1137, "023": 1542, "024": 1276, "025": 1420,
  "026": 1123, "027": 733, "028": 691, "029": 1376, "030": 1768,
  "031": 1047, "032": 1597, "033": 1715, "034": 1429, "035": 1351,
  "036": 2318, "037": 1304, "038": 1090, "039": 2188, "040": 880,
  "041": 1477, "042": 1011, "043": 1063, "044": 1165, "045": 1063,
  "046": 1376, "047": 1398, "048": 900, "049": 1071, "050": 702,
  "051": 1615, "052": 1165, "053": 966, "054": 1083, "055": 1370
};

const CENSUS_2019_NOV = {
  "001": 1693, "002": 1014, "003": 921, "004": 1513, "005": 1228,
  "006": 1587, "007": 1262, "008": 915, "009": 1334, "010": 987,
  "011": 822, "012": 1219, "013": 1441, "014": 1377, "015": 1362,
  "016": 1418, "017": 1829, "018": 786, "019": 1029, "020": 1140,
  "021": 1785, "022": 1028, "023": 1987, "024": 1256, "025": 1298,
  "026": 1175, "027": 772, "028": 721, "029": 2115, "030": 1630,
  "031": 976, "032": 1548, "033": 1668, "034": 1892, "035": 1751,
  "036": 1852, "037": 1228, "038": 2179, "039": 1817, "040": 2066,
  "041": 1204, "042": 1021, "043": 1026, "044": 1090, "045": 2216
};

const CENSUS_2019_ABR = {
  "001": 1650, "002": 1015, "003": 920, "004": 1511, "005": 1239,
  "006": 1599, "007": 1277, "008": 914, "009": 1321, "010": 988,
  "011": 830, "012": 1231, "013": 1439, "014": 1384, "015": 1371,
  "016": 1399, "017": 1810, "018": 782, "019": 1036, "020": 1119,
  "021": 1769, "022": 1021, "023": 1962, "024": 1241, "025": 1278,
  "026": 1200, "027": 773, "028": 725, "029": 2050, "030": 1610,
  "031": 972, "032": 1521, "033": 1671, "034": 1786, "035": 1571,
  "036": 1820, "037": 1220, "038": 2165, "039": 1706, "040": 1896,
  "041": 1175, "042": 1036, "043": 1016, "044": 1094, "045": 1990
};

const CENSUS_2019_MUNI = {
  "001": 1667, "002": 1019, "003": 944, "004": 1544, "005": 1243,
  "006": 1611, "007": 1292, "008": 922, "009": 1344, "010": 999,
  "011": 857, "012": 1239, "013": 1439, "014": 1392, "015": 1392,
  "016": 1405, "017": 1830, "018": 782, "019": 1057, "020": 1156,
  "021": 1793, "022": 1048, "023": 1993, "024": 1247, "025": 1294,
  "026": 1225, "027": 802, "028": 731, "029": 2099, "030": 1637,
  "031": 979, "032": 1546, "033": 1675, "034": 1822, "035": 1634,
  "036": 1843, "037": 1241, "038": 2166, "039": 1756, "040": 1975,
  "041": 1199, "042": 1037, "043": 1017, "044": 1104, "045": 2035
};

const CENSUS_2015_MUNI = {
  "001": 1486, "002": 1073, "003": 1009, "004": 1541, "005": 1229,
  "006": 1675, "007": 1319, "008": 1991, "009": 1240, "010": 1045,
  "011": 886, "012": 1302, "013": 1370, "014": 1331, "015": 1295,
  "016": 1346, "017": 1719, "018": 796, "019": 1987, "020": 1073,
  "021": 1696, "022": 2106, "023": 1828, "024": 1210, "025": 1237,
  "026": 1265, "027": 815, "028": 769, "029": 1509, "030": 1398,
  "031": 976, "032": 1477, "033": 1510, "034": 1481, "035": 1395,
  "036": 1419, "037": 2359, "038": 1798, "039": 1238, "040": 1210,
  "041": 1111
};

const SECTION_COLEGIO_MAPPING = {
  "001": "C.E.I.P. LAS CIGUEÑAS",
  "002": "C.E.I.P. LA ESCUELA",
  "003": "C.E.I.P. EL OLIVAR",
  "004": "I.E.S. LAS LAGUNAS",
  "005": "C.E.I.P. VICTORIA KENT",
  "006": "C.E.I.P. JARAMA",
  "007": "C.E.I.P. EL OLIVAR",
  "008": "C.E.I.P. LOS ALMENDROS",
  "009": "I.E.S. LAS LAGUNAS",
  "010": "C.E.I.P. LA ESCUELA",
  "011": "I.E.S. LAS LAGUNAS",
  "012": "C.E.I.P. VICTORIA KENT",
  "013": "C.E.I.P. RAFAEL ALBERTI",
  "014": "C.E.I.P. LOS ALMENDROS",
  "015": "I.E.S. LAS LAGUNAS",
  "016": "C.E.I.P. LAS CIGUEÑAS",
  "017": "C.E.I.P. JOSE SARAMAGO",
  "018": "C.E.I.P. JARAMA",
  "019": "C.E.I.P. JOSE SARAMAGO",
  "020": "C.E.I.P. DULCE CHACON",
  "021": "C.E.I.P. RAFAEL ALBERTI",
  "022": "C.E.I.P. JOSE HIERRO",
  "023": "C.E.I.P. HANS CHRISTIAN ANDERSEN",
  "024": "C.E.I.P. LAS CIGUEÑAS",
  "025": "C.E.I.P. DULCE CHACON",
  "026": "C.E.I.P. EL OLIVAR",
  "027": "C.E.I.P. EL OLIVAR",
  "028": "C.E.I.P. VICTORIA KENT",
  "029": "C.E.I.P. JOSE HIERRO",
  "030": "C.E.I.P. JOSE ITURZAETA",
  "031": "C.E.I.P. LAS CIGUEÑAS",
  "032": "C.E.I.P. JOSE SARAMAGO",
  "033": "C.E.I.P. HANS CHRISTIAN ANDERSEN",
  "034": "C.E.I.P. JOSE ITURZAETA",
  "035": "C.E.I.P. HANS CHRISTIAN ANDERSEN",
  "036": "C.E.I.P. JOSE ITURZAETA",
  "037": "C.E.I.P.S.O LA LUNA",
  "038": "CIUDAD EDUCATIVA MUNICIPAL HIPATIA",
  "039": "C.E.I.P. DULCE CHACON",
  "040": "CIUDAD EDUCATIVA MUNICIPAL HIPATIA",
  "041": "C.E.I.P. DULCE CHACON",
  "042": "C.E.I.P. LOS ALMENDROS",
  "043": "C.E.I.P. JOSE SARAMAGO",
  "044": "C.E.I.P. JOSE HIERRO",
  "045": "C.E.I.P.S.O LA LUNA",
  "046": "C.E.I.P. JOSE HIERRO",
  "047": "C.E.I.P. HANS CHRISTIAN ANDERSEN",
  "048": "CIUDAD EDUCATIVA MUNICIPAL HIPATIA",
  "049": "CIUDAD EDUCATIVA MUNICIPAL HIPATIA",
  "050": "CIUDAD EDUCATIVA MUNICIPAL HIPATIA",
  "051": "CIUDAD EDUCATIVA MUNICIPAL HIPATIA",
  "052": "C.E.I.P.S.O LA LUNA",
  "053": "C.E.I.P.S.O LA LUNA",
  "054": "C.E.I.P. JOSE ITURZAETA",
  "055": "C.E.I.P. HANS CHRISTIAN ANDERSEN"
};

const COLEGIO_DETAILS = {
  "C.E.I.P. LAS CIGUEÑAS": {
    image: "Iconos/las-ciguenas.png",
    webUrl: "https://sede-electronica.rivasciudad.es/wp-content/uploads/sites/6/2018/06/CEIP-Las-Cigue%C3%B1as.jpg",
    address: "Calle de las Cigüeñas, 2, 28522 Rivas-Vaciamadrid"
  },
  "CEIP Las Cigüeñas": {
    image: "Iconos/las-ciguenas.png",
    webUrl: "https://sede-electronica.rivasciudad.es/wp-content/uploads/sites/6/2018/06/CEIP-Las-Cigue%C3%B1as.jpg",
    address: "Calle de las Cigüeñas, 2, 28522 Rivas-Vaciamadrid"
  },
  "CEIP LAS CIGUEÑAS": {
    image: "Iconos/las-ciguenas.png",
    webUrl: "https://sede-electronica.rivasciudad.es/wp-content/uploads/sites/6/2018/06/CEIP-Las-Cigue%C3%B1as.jpg",
    address: "Calle de las Cigüeñas, 2, 28522 Rivas-Vaciamadrid"
  },
  "C.E.I.P. LA ESCUELA": {
    image: "Iconos/la-escuela.png",
    webUrl: "https://sede-electronica.rivasciudad.es/wp-content/uploads/sites/6/2018/06/CEIP-La-Escuela.jpg",
    address: "Calle de Covibar, 2, 28523 Rivas-Vaciamadrid"
  },
  "C.E.I.P. EL OLIVAR": {
    image: "Iconos/el-olivar.png",
    webUrl: "https://sede-electronica.rivasciudad.es/wp-content/uploads/sites/6/2018/06/CEIP-El-Olivar.jpg",
    address: "Paseo de las Provincias, 6, 28522 Rivas-Vaciamadrid"
  },
  "I.E.S. LAS LAGUNAS": {
    image: "Iconos/LAS_LAGUNAS.png",
    webUrl: "https://sede-electronica.rivasciudad.es/wp-content/uploads/sites/6/2018/06/IES-LAS-LAGUNAS.jpg",
    address: "Avenida de Marie Curie, 19, 28523 Rivas-Vaciamadrid"
  },
  "I.E.S. LAS LAGUNAS ": {
    image: "Iconos/LAS_LAGUNAS.png",
    webUrl: "https://sede-electronica.rivasciudad.es/wp-content/uploads/sites/6/2018/06/IES-LAS-LAGUNAS.jpg",
    address: "Avenida de Marie Curie, 19, 28523 Rivas-Vaciamadrid"
  },
  "C.E.I.P. VICTORIA KENT": {
    image: "Iconos/victroria-kent.png",
    webUrl: "https://sede-electronica.rivasciudad.es/wp-content/uploads/sites/6/2018/06/CEIP-Victoria-Kent.jpg",
    address: "Calle del Torno, 2, 28522 Rivas-Vaciamadrid"
  },
  "C.E.I.P. JARAMA": {
    image: "Iconos/ceip_jarama.png",
    webUrl: "https://sede-electronica.rivasciudad.es/wp-content/uploads/sites/6/2018/06/CEIP-Jarama.jpg",
    address: "Avenida de Covibar, 1, 28523 Rivas-Vaciamadrid"
  },
  "C.E.I.P. LOS ALMENDROS": {
    image: "Iconos/los-almendros.png",
    webUrl: "https://www.rivasciudad.es/wp-content/uploads/2019/04/Colegio-Publico-Los-Almendros.jpg",
    address: "Calle de los Almendros, 198, 28522 Rivas-Vaciamadrid"
  },
  "C.E.I.P. RAFAEL ALBERTI": {
    image: "Iconos/rafael-alberti.png",
    webUrl: "https://sede-electronica.rivasciudad.es/wp-content/uploads/sites/6/2018/06/CEIP-Rafael-Alberti.jpg",
    address: "Paseo de las Provincias, 1, 28522 Rivas-Vaciamadrid"
  },
  "C.E.I.P. JOSE SARAMAGO": {
    image: "Iconos/jose-saramago.png",
    webUrl: "https://sede-electronica.rivasciudad.es/wp-content/uploads/sites/6/2018/06/CEIP-Jose-Saramago.jpg",
    address: "Calle de José Saramago, 2, 28523 Rivas-Vaciamadrid"
  },
  "C.E.I.P. DULCE CHACON": {
    image: "Iconos/dulce-chacon.png",
    webUrl: "https://www.rivasciudad.es/wp-content/uploads/2019/04/Fachada-del-colegio-Dulce-Chacon.jpg",
    address: "Calle de la Flor de la Canela, 1, 28523 Rivas-Vaciamadrid"
  },
  "C.E.I.P. JOSE HIERRO": {
    image: "Iconos/JoseHierro.jpg",
    webUrl: "https://sede-electronica.rivasciudad.es/wp-content/uploads/sites/6/2018/06/CEIP-Jos%C3%A9-Hierro.jpg",
    address: "Avenida de José Hierro, 86, 28522 Rivas-Vaciamadrid"
  },
  "C.E.I.P. HANS CHRISTIAN ANDERSEN": {
    image: "Iconos/hans-christian-andersen.png",
    webUrl: "https://www.rivasciudad.es/wp-content/uploads/2019/04/Colegio-Publico-Hans-Christian-Andersen.jpg",
    address: "Calle de Fernando Trueba, 8, 28521 Rivas-Vaciamadrid"
  },
  "C.E.I.P. JOSE ITURZAETA": {
    image: "Iconos/jose-iturzaeta.png",
    webUrl: "https://sede-electronica.rivasciudad.es/wp-content/uploads/sites/6/2018/06/CEIP-Jos%C3%A9-Iturzaeta.jpg",
    address: "Avenida de Pilar Miró, 4, 28521 Rivas-Vaciamadrid"
  },
  "C.E.I.P.S.O LA LUNA": {
    image: "Iconos/ceipso-la-luna.jpg",
    webUrl: "https://sede-electronica.rivasciudad.es/wp-content/uploads/sites/6/2018/08/ceipso-la-luna.jpg",
    address: "Avenida de la Tierra, 1, 28521 Rivas-Vaciamadrid"
  },
  "CIUDAD EDUCATIVA MUNICIPAL HIPATIA": {
    image: "Iconos/planeta-rivashipatia_JML934.jpg",
    webUrl: "https://www.rivasciudad.es/wp-content/uploads/2019/04/Ciudad-Educativa-Hipatia.jpg",
    address: "Avenida de Ocho de Marzo, 1, 28521 Rivas-Vaciamadrid"
  }
};

const ELECTIONS_CONFIG = [
  // GENERALES
  {
    id: "generales_2023",
    scope: "generales",
    year: "2023",
    label: "Generales 2023",
    url: "https://sit.rivasciudad.es/server/rest/services/V_ELECCIONES_GENERALES2023/FeatureServer/0",
    seccionField: "SECCION",
    electoresField: "N_ELECTORES",
    votosField: "TOTAL_VOTOS",
    blancoField: "BLANCO",
    nuloField: "NULO",
    colegioField: "COLEGIOS",
    parties: [
      { id: "PP", name: "PP", field: "PP", color: "#1E5AA8", logo: "Iconos/Logo_del_PP_(2022).svg.png" },
      { id: "PSOE", name: "PSOE", field: "PSOE", color: "#E30613", logo: "Iconos/Logotipo_del_PSOE.svg.png" },
      { id: "SUMAR", name: "SUMAR", field: "SUMAR", color: "#D1007A", logo: "Iconos/sumar-logo-png_seeklogo-487418.png" },
      { id: "VOX", name: "VOX", field: "VOX", color: "#5BC035", logo: "Iconos/VOX_logo.svg.png" },
      { id: "PACMA", name: "PACMA", field: "PACMA", color: "#00E1C1", logo: "Iconos/Logo_PACMA.png" }
    ],
    leftBlock: ["PSOE", "SUMAR", "PACMA"],
    rightBlock: ["PP", "VOX"]
  },
  {
    id: "generales_2019_nov",
    scope: "generales",
    year: "2019_nov",
    label: "Generales 2019 (Nov)",
    url: "https://sit.rivasciudad.es/server/rest/services/Elecciones_Generales_Noviembre2019/FeatureServer/0",
    seccionField: "SECCION",
    electoresField: null, // Usará proxy
    censusProxy: "CENSUS_2019_NOV",
    votosField: null, // Se calculará de la suma
    blancoField: "BLANCO",
    nuloField: "NULO",
    colegioField: null,
    parties: [
      { id: "PSOE", name: "PSOE", field: "PSOE", color: "#E30613", logo: "Iconos/Logotipo_del_PSOE.svg.png" },
      { id: "PP", name: "PP", field: "PP", color: "#1E5AA8", logo: "Iconos/Logo_del_PP_(2022).svg.png" },
      { id: "VOX", name: "VOX", field: "VOX", color: "#5BC035", logo: "Iconos/VOX_logo.svg.png" },
      { id: "UNIDAS_PODEMOS", name: "Podemos", field: "UNIDAS_PODEMOS", color: "#7B4998", logo: "Iconos/Logo_Unidas_Podemos_2019b.png" },
      { id: "MAS_PAIS", name: "Más País", field: "MAS_PAIS", color: "#0EA5E9", logo: null },
      { id: "CIUDADANOS", name: "Ciudadanos", field: "CIUDADANOS", color: "#FA541C", logo: null },
      { id: "PACMA", name: "PACMA", field: "PACMA", color: "#00E1C1", logo: "Iconos/Logo_PACMA.png" }
    ],
    leftBlock: ["PSOE", "UNIDAS_PODEMOS", "MAS_PAIS", "PACMA"],
    rightBlock: ["PP", "VOX", "CIUDADANOS"]
  },
  {
    id: "generales_2019_abr",
    scope: "generales",
    year: "2019_abr",
    label: "Generales 2019 (Abr)",
    url: "https://sit.rivasciudad.es/server/rest/services/MAPA_VOTOS_GENERALES2019/FeatureServer/0",
    seccionField: "SECCION",
    electoresField: null,
    censusProxy: "CENSUS_2019_ABR",
    votosField: null,
    blancoField: "BLANCO",
    nuloField: "NULO",
    colegioField: null,
    parties: [
      { id: "PSOE", name: "PSOE", field: "PSOE", color: "#E30613", logo: "Iconos/Logotipo_del_PSOE.svg.png" },
      { id: "UNIDAS_PODEMOS", name: "Podemos", field: "UNIDAS_PODEMOS", color: "#7B4998", logo: "Iconos/Logo_Unidas_Podemos_2019b.png" },
      { id: "CIUDADANOS", name: "Ciudadanos", field: "CIUDADANOS", color: "#FA541C", logo: null },
      { id: "VOX", name: "VOX", field: "VOX", color: "#5BC035", logo: "Iconos/VOX_logo.svg.png" },
      { id: "PP", name: "PP", field: "PP", color: "#1E5AA8", logo: "Iconos/Logo_del_PP_(2022).svg.png" },
      { id: "PACMA", name: "PACMA", field: "PACMA", color: "#00E1C1", logo: "Iconos/Logo_PACMA.png" }
    ],
    leftBlock: ["PSOE", "UNIDAS_PODEMOS", "PACMA"],
    rightBlock: ["PP", "VOX", "CIUDADANOS"]
  },

  // MUNICIPALES
  {
    id: "municipales_2023",
    scope: "municipales",
    year: "2023",
    label: "Municipales 2023",
    url: "https://sit.rivasciudad.es/server/rest/services/Elecciones_Municipales_2023/FeatureServer/1",
    seccionField: "SECCION",
    electoresField: null, // Usará censo generales 2023
    censusProxy: "CENSUS_2023",
    votosField: null,
    blancoField: "BLANCO",
    nuloField: "NULO",
    colegioField: null,
    parties: [
      { id: "IU_EQUO_MASMADRID", name: "IU-Equo-MásMad", field: "IU_EQUO_MASMADRID", color: "#00A859", logo: "Iconos/Logo_Izquierda_Unida,_versión_bocadillo.svg.png" },
      { id: "PSOE", name: "PSOE", field: "PSOE", color: "#E30613", logo: "Iconos/Logotipo_del_PSOE.svg.png" },
      { id: "PP", name: "PP", field: "PP", color: "#1E5AA8", logo: "Iconos/Logo_del_PP_(2022).svg.png" },
      { id: "PODEMOS", name: "Podemos", field: "PODEMOS", color: "#7B4998", logo: "Iconos/Logo_Unidas_Podemos_2019b.png" },
      { id: "VOX", name: "VOX", field: "VOX", color: "#5BC035", logo: "Iconos/VOX_logo.svg.png" },
      { id: "CIUDADANOS", name: "Ciudadanos", field: "CIUDADANOS", color: "#FA541C", logo: null }
    ],
    leftBlock: ["IU_EQUO_MASMADRID", "PSOE", "PODEMOS"],
    rightBlock: ["PP", "VOX", "CIUDADANOS"]
  },
  {
    id: "municipales_2019",
    scope: "municipales",
    year: "2019",
    label: "Municipales 2019",
    url: "https://sit.rivasciudad.es/server/rest/services/MAPA_VOTOSMUNI_AYTO19/FeatureServer/0",
    seccionField: "SECCION",
    electoresField: null,
    censusProxy: "CENSUS_2019_MUNI",
    votosField: null,
    blancoField: "BLANCO",
    nuloField: "NULO",
    colegioField: null,
    parties: [
      { id: "PSOE", name: "PSOE", field: "PSOE", color: "#E30613", logo: "Iconos/Logotipo_del_PSOE.svg.png" },
      { id: "IU_EQUO_MASMADRID", name: "IU-Equo-MásMad", field: "IU_EQUO_MASMADRID", color: "#00A859", logo: "Iconos/Logo_Izquierda_Unida,_versión_bocadillo.svg.png" },
      { id: "CIUDADANOS", name: "Ciudadanos", field: "CIUDADANOS", color: "#FA541C", logo: null },
      { id: "PP", name: "PP", field: "PP", color: "#1E5AA8", logo: "Iconos/Logo_del_PP_(2022).svg.png" },
      { id: "PODEMOS", name: "Podemos", field: "PODEMOS", color: "#7B4998", logo: "Iconos/Logo_Unidas_Podemos_2019b.png" },
      { id: "VOX", name: "VOX", field: "VOX", color: "#5BC035", logo: "Iconos/VOX_logo.svg.png" },
      { id: "RIVAS_PUEDE", name: "Rivas Puede", field: "RIVAS_PUEDE", color: "#51C0C0", logo: null }
    ],
    leftBlock: ["PSOE", "IU_EQUO_MASMADRID", "PODEMOS", "RIVAS_PUEDE"],
    rightBlock: ["PP", "VOX", "CIUDADANOS"]
  },
  {
    id: "municipales_2015",
    scope: "municipales",
    year: "2015",
    label: "Municipales 2015",
    url: "https://sit.rivasciudad.es/server/rest/services/Mapa_votos_Emuni2015_local/FeatureServer/0",
    seccionField: "SECCION",
    electoresField: null,
    censusProxy: "CENSUS_2015_MUNI",
    votosField: null,
    blancoField: "BLANCO",
    nuloField: "NULO",
    colegioField: null,
    parties: [
      { id: "PP", name: "PP", field: "PP", color: "#1E5AA8", logo: "Iconos/Logo_del_PP_(2022).svg.png" },
      { id: "IU_EQUO_SOMOS_RIVAS", name: "Somos Rivas", field: "IU_EQUO_SOMOS_RIVAS", color: "#00A859", logo: "Iconos/Logo_Izquierda_Unida,_versión_bocadillo.svg.png" },
      { id: "RIVAS_PUEDE", name: "Rivas Puede", field: "RIVAS_PUEDE", color: "#51C0C0", logo: null },
      { id: "PSOE", name: "PSOE", field: "PSOE", color: "#E30613", logo: "Iconos/Logotipo_del_PSOE.svg.png" },
      { id: "CIUDADANOS", name: "Ciudadanos", field: "CIUDADANOS", color: "#FA541C", logo: null },
      { id: "UPYD", name: "UPyD", field: "UPYD", color: "#D2006A", logo: null },
      { id: "AVIVA", name: "AVIVA", field: "AVIVA", color: "#9E5EC2", logo: null }
    ],
    leftBlock: ["IU_EQUO_SOMOS_RIVAS", "RIVAS_PUEDE", "PSOE"],
    rightBlock: ["PP", "CIUDADANOS", "UPYD"]
  },
  {
    id: "municipales_2011",
    scope: "municipales",
    year: "2011",
    label: "Municipales 2011",
    url: "https://services5.arcgis.com/OvtDsNt9TdkMlaCZ/arcgis/rest/services/Elecciones_Municipales_2011/FeatureServer/0",
    seccionField: null, // No tiene sección, solo Colegio
    electoresField: "ELEC_POTEN",
    votosField: "VOTOS",
    blancoField: "BLANCOS",
    nuloField: null,
    colegioField: "COLEGIO",
    parties: [
      { id: "IU", name: "IU", field: "IU", color: "#00A859", logo: "Iconos/Logo_Izquierda_Unida,_versión_bocadillo.svg.png" },
      { id: "PP", name: "PP", field: "PP", color: "#1E5AA8", logo: "Iconos/Logo_del_PP_(2022).svg.png" },
      { id: "PSOE", name: "PSOE", field: "PSOE", color: "#E30613", logo: "Iconos/Logotipo_del_PSOE.svg.png" },
      { id: "UPyD", name: "UPyD", field: "UPyD", color: "#D2006A", logo: null },
      { id: "CDR", name: "CDR", field: "CDR", color: "#9E5EC2", logo: null },
      { id: "AIRV", name: "AIRV", field: "AIRV", color: "#FA541C", logo: null }
    ],
    leftBlock: ["IU", "PSOE"],
    rightBlock: ["PP", "UPyD"]
  },

  // ASAMBLEA
  {
    id: "asamblea_2023",
    scope: "asamblea",
    year: "2023",
    label: "Asamblea 2023",
    url: "https://sit.rivasciudad.es/server/rest/services/Elecciones_Municipales_2023/FeatureServer/0",
    seccionField: "SECCION",
    electoresField: null,
    censusProxy: "CENSUS_2023",
    votosField: null,
    blancoField: "BLANCO",
    nuloField: "NULO",
    colegioField: null,
    parties: [
      { id: "MASMADRID", name: "Más Madrid", field: "MASMADRID", color: "#2EBBB2", logo: null },
      { id: "PSOE", name: "PSOE", field: "PSOE", color: "#E30613", logo: "Iconos/Logotipo_del_PSOE.svg.png" },
      { id: "PODEMOSIU", name: "Podemos-IU", field: "PODEMOSIU", color: "#7B4998", logo: "Iconos/Logo_Unidas_Podemos_2019b.png" },
      { id: "PP", name: "PP", field: "PP", color: "#1E5AA8", logo: "Iconos/Logo_del_PP_(2022).svg.png" },
      { id: "VOX", name: "VOX", field: "VOX", color: "#5BC035", logo: "Iconos/VOX_logo.svg.png" },
      { id: "CIUDADANOS", name: "Ciudadanos", field: "CIUDADANOS", color: "#FA541C", logo: null },
      { id: "PACMA", name: "PACMA", field: "PACMA", color: "#00E1C1", logo: "Iconos/Logo_PACMA.png" }
    ],
    leftBlock: ["MASMADRID", "PSOE", "PODEMOSIU", "PACMA"],
    rightBlock: ["PP", "VOX", "CIUDADANOS"]
  },
  {
    id: "asamblea_2021",
    scope: "asamblea",
    year: "2021",
    label: "Asamblea 2021",
    url: "https://services5.arcgis.com/OvtDsNt9TdkMlaCZ/arcgis/rest/services/ELECCIONES_ASAMBLEA_MADRID2021/FeatureServer/0",
    seccionField: "SECCION",
    electoresField: null,
    censusProxy: "CENSUS_2019_NOV",
    votosField: null,
    blancoField: "BLANCO",
    nuloField: "NULO",
    colegioField: "COLEGIO",
    parties: [
      { id: "MAS_MADRID", name: "Más Madrid", field: "MAS_MADRID", color: "#2EBBB2", logo: null },
      { id: "PSOE", name: "PSOE", field: "PSOE", color: "#E30613", logo: "Iconos/Logotipo_del_PSOE.svg.png" },
      { id: "UNIDAS_POD", name: "Podemos-IU", field: "UNIDAS_POD", color: "#7B4998", logo: "Iconos/Logo_Unidas_Podemos_2019b.png" },
      { id: "PP", name: "PP", field: "PP", color: "#1E5AA8", logo: "Iconos/Logo_del_PP_(2022).svg.png" },
      { id: "VOX", name: "VOX", field: "VOX", color: "#5BC035", logo: "Iconos/VOX_logo.svg.png" },
      { id: "CIUDADANOS", name: "Ciudadanos", field: "CIUDADANOS", color: "#FA541C", logo: null },
      { id: "PACMA", name: "PACMA", field: "PACMA", color: "#00E1C1", logo: "Iconos/Logo_PACMA.png" }
    ],
    leftBlock: ["MAS_MADRID", "PSOE", "UNIDAS_POD", "PACMA"],
    rightBlock: ["PP", "VOX", "CIUDADANOS"]
  },
  {
    id: "asamblea_2019",
    scope: "asamblea",
    year: "2019",
    label: "Asamblea 2019",
    url: "https://sit.rivasciudad.es/server/rest/services/MAPA_VOTOSMUNI_ASAMB19/FeatureServer/0",
    seccionField: "SECCION",
    electoresField: null,
    censusProxy: "CENSUS_2019_MUNI",
    votosField: null,
    blancoField: "BLANCO",
    nuloField: "NULO",
    colegioField: null,
    parties: [
      { id: "PSOE", name: "PSOE", field: "PSOE", color: "#E30613", logo: "Iconos/Logotipo_del_PSOE.svg.png" },
      { id: "MASMADRID", name: "Más Madrid", field: "MASMADRID", color: "#2EBBB2", logo: null },
      { id: "PODEMOSIU", name: "Podemos-IU", field: "PODEMOSIU", color: "#7B4998", logo: "Iconos/Logo_Unidas_Podemos_2019b.png" },
      { id: "PP", name: "PP", field: "PP", color: "#1E5AA8", logo: "Iconos/Logo_del_PP_(2022).svg.png" },
      { id: "CIUDADANOS", name: "Ciudadanos", field: "CIUDADANOS", color: "#FA541C", logo: null },
      { id: "VOX", name: "VOX", field: "VOX", color: "#5BC035", logo: "Iconos/VOX_logo.svg.png" },
      { id: "PACMA", name: "PACMA", field: "PACMA", color: "#00E1C1", logo: "Iconos/Logo_PACMA.png" }
    ],
    leftBlock: ["PSOE", "MASMADRID", "PODEMOSIU", "PACMA"],
    rightBlock: ["PP", "VOX", "CIUDADANOS"]
  },

  // EUROPEAS
  {
    id: "europeas_2024",
    scope: "europeas",
    year: "2024",
    label: "Europeas 2024",
    url: "https://sit.rivasciudad.es/server/rest/services/V_ELECCIONES_EUROPEAS2024/FeatureServer/0",
    seccionField: "SECCION",
    electoresField: "N_ELECTORES",
    votosField: "TOTAL_VOTOS",
    blancoField: "BLANCOS",
    nuloField: "NULOS",
    colegioField: "COLEGIO",
    parties: [
      { id: "PSOE", name: "PSOE", field: "PSOE", color: "#E30613", logo: "Iconos/Logotipo_del_PSOE.svg.png" },
      { id: "SUMAR", name: "SUMAR", field: "SUMAR", color: "#D1007A", logo: "Iconos/sumar-logo-png_seeklogo-487418.png" },
      { id: "PODEMOS", name: "Podemos", field: "PODEMOS", color: "#7B4998", logo: "Iconos/Logo_Unidas_Podemos_2019b.png" },
      { id: "PP", name: "PP", field: "PP", color: "#1E5AA8", logo: "Iconos/Logo_del_PP_(2022).svg.png" },
      { id: "VOX", name: "VOX", field: "VOX", color: "#5BC035", logo: "Iconos/VOX_logo.svg.png" },
      { id: "PACMA", name: "PACMA", field: "PACMA", color: "#00E1C1", logo: "Iconos/Logo_PACMA.png" },
      { id: "SAF", name: "SALF", field: "SAF", color: "#7F8C8D", logo: null }
    ],
    leftBlock: ["PSOE", "SUMAR", "PODEMOS", "PACMA"],
    rightBlock: ["PP", "VOX", "SAF"]
  },
  {
    id: "europeas_2019",
    scope: "europeas",
    year: "2019",
    label: "Europeas 2019",
    url: "https://sit.rivasciudad.es/server/rest/services/MAPA_VOTOSMUNI_EUROPEAS19/FeatureServer/0",
    seccionField: "SECCION",
    electoresField: null,
    censusProxy: "CENSUS_2019_MUNI",
    votosField: null,
    blancoField: "BLANCO",
    nuloField: "NULO",
    colegioField: null,
    parties: [
      { id: "PSOE", name: "PSOE", field: "PSOE", color: "#E30613", logo: "Iconos/Logotipo_del_PSOE.svg.png" },
      { id: "PODEMOS_IU", name: "Podemos-IU", field: "PODEMOS_IU", color: "#7B4998", logo: "Iconos/Logo_Unidas_Podemos_2019b.png" },
      { id: "CIUDADANOS", name: "Ciudadanos", field: "CIUDADANOS", color: "#FA541C", logo: null },
      { id: "PP", name: "PP", field: "PP", color: "#1E5AA8", logo: "Iconos/Logo_del_PP_(2022).svg.png" },
      { id: "VOX", name: "VOX", field: "VOX", color: "#5BC035", logo: "Iconos/VOX_logo.svg.png" }
    ],
    leftBlock: ["PSOE", "PODEMOS_IU"],
    rightBlock: ["PP", "VOX", "CIUDADANOS"]
  },
  {
    id: "europeas_2014",
    scope: "europeas",
    year: "2014",
    label: "Europeas 2014",
    url: "https://services5.arcgis.com/OvtDsNt9TdkMlaCZ/arcgis/rest/services/elecciones_europeas_2014/FeatureServer/0",
    seccionField: "SECCIONES",
    electoresField: "N_ELECTORES",
    votosField: "TOTAL_VOTOS",
    blancoField: null, // No reportado en muestra
    nuloField: null, // No reportado en muestra
    colegioField: "COLE",
    parties: [
      { id: "PP", name: "PP", field: "PP", color: "#1E5AA8", logo: "Iconos/Logo_del_PP_(2022).svg.png" },
      { id: "PSOE", name: "PSOE", field: "PSOE", color: "#E30613", logo: "Iconos/Logotipo_del_PSOE.svg.png" },
      { id: "IU", name: "IU", field: "IU", color: "#00A859", logo: "Iconos/Logo_Izquierda_Unida,_versión_bocadillo.svg.png" },
      { id: "PODEMOS", name: "Podemos", field: "PODEMOS", color: "#7B4998", logo: "Iconos/Logo_Unidas_Podemos_2019b.png" },
      { id: "UPYD", name: "UPyD", field: "UPYD", color: "#D2006A", logo: null },
      { id: "VOX", name: "VOX", field: "VOX", color: "#5BC035", logo: "Iconos/VOX_logo.svg.png" },
      { id: "CIUDADANOS", name: "Ciudadanos", field: "CIUDADANOS", color: "#FA541C", logo: null },
      { id: "PACMA", name: "PACMA", field: "PACMA", color: "#00E1C1", logo: "Iconos/Logo_PACMA.png" }
    ],
    leftBlock: ["PSOE", "IU", "PODEMOS", "PACMA"],
    rightBlock: ["PP", "VOX", "CIUDADANOS", "UPYD"]
  }
];
