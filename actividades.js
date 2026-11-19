"use strict";

const respuestas = [
 [14,"sedimentos","Una arena de playa y un sedimento glaciar","Una arena está formada por granos pequeños y redondeados. Un depósito glaciar presenta fragmentos de tamaños distintos con bordes angulosos. Compara su madurez textural y explica por qué importa el agente que los transportó.","La arena presenta mayor madurez textural por sus clastos pequeños y redondeados. El agua y el oleaje pueden hacer que los granos choquen y se desgasten. Un glaciar puede transportar juntos fragmentos grandes y pequeños sin redondearlos de la misma manera.","Compara tamaño y forma y justifica qué aporta conocer el agente. Actividad inspirada en el repaso de la p. 283."],
 [14,"meteorizacion","Un muro de arenisca pierde granos","Una arenisca contiene granos de cuarzo unidos por cemento calcáreo. La lluvia con CO₂ va disolviendo parte del cemento. ¿Qué alteración ocurre primero? ¿Por qué acaban desprendiéndose los granos?","El agua con CO₂ favorece la disolución del carbonato del cemento mediante carbonatación. Cuando el cemento pierde continuidad, deja de unir parte de los clastos y estos se desprenden.","Distingue la reacción química en el cemento del desprendimiento posterior de granos. Actividad inspirada en la p. 285."],
 [15,"meta","¿Ha cambiado la textura o la estructura?","En una muestra metamorfizada los cristales de feldespato se han agrandado. En otra, las micas aparecen claramente orientadas en planos. ¿Qué cambio describe cada caso?","El crecimiento de cristales es un cambio de textura y puede deberse a blastesis. La orientación planar de los minerales es un cambio de estructura; en este caso es foliación.","Distingue crecimiento de tamaño y orientación preferente. Actividad inspirada en el repaso de la p. 305."],
 [15,"esfuerzos","Lee el orden de una deformación","En un corte ves capas plegadas que han quedado desplazadas a ambos lados de una fractura recta. Identifica las dos estructuras y razona qué ocurrió antes.","Primero se plegaron las capas. Después se produjo la falla que corta el pliegue y desplaza las capas a ambos lados. El corte de una estructura por otra permite establecer su orden relativo.","Identifica pliegue y falla y usa la relación de corte para justificar el orden. Actividad inspirada en la p. 307."],

 [14,"meteorizacion","Distingue tres mecanismos","Una roca se rompe al congelarse el agua de sus grietas. Otra se desgasta por la arena que arrastra el viento. En una tercera el feldespato se transforma en minerales de arcilla. Nombra el mecanismo de cada caso y justifícalo.","Gelifracción, porque el hielo aumenta de volumen y actúa como cuña. Abrasión, por el roce de los clastos arrastrados. Hidrólisis, porque los iones del agua alteran el feldespato y pueden formarse minerales de arcilla.","Nombra cada mecanismo, clasifica los dos primeros como mecánicos y el último como químico, y explica la pista."],
 [14,"suelo","Compara caliche y litosuelo","Un perfil tiene una costra de cal en una región seca. Otro apenas tiene suelo por encima de la roca madre. Identifica los dos suelos y explica cómo los distingues.","El primero es caliche: el ascenso capilar y la evaporación favorecen la acumulación de cal o sales. El segundo es un litosuelo o suelo rocoso: es poco evolucionado, de poco espesor y con horizontes poco diferenciados.","Relaciona aridez y evaporación con el caliche, y poco espesor y falta de horizontes diferenciados con el litosuelo."],
 [14,"suelo","Explica la fertilidad","Un suelo arcilloso húmedo tiene muchos huecos diminutos y el agua circula despacio. Explica si puede tener mucha porosidad y poca permeabilidad. Añade dos factores que influyan en la fertilidad.","Puede tener porosidad alta si los huecos ocupan mucho volumen, pero permeabilidad baja si el agua circula mal entre poros pequeños. El humus y la disponibilidad de nutrientes favorecen la fertilidad; también cuentan la aireación y la humedad.","Define ambas propiedades y añade dos factores de fertilidad con sentido."],
 [14,"sedimentos","Distingue erosión, detrito y sedimentación","Una ladera libera fragmentos de roca. La lluvia arrastra parte del material hasta un río. Más abajo, la corriente pierde energía. Explica qué es el detrito, cuándo hay erosión y cómo se produce el depósito.","El material suelto producido por meteorización es el detrito. Hay erosión cuando se retira y moviliza el material. Al disminuir la energía de la corriente los clastos pueden caer al fondo: sedimentación por depósito gravitacional.","Distingue el material de los procesos y explica qué permite el depósito."],
 [14,"sedimentarias","Identifica dos rocas sedimentarias","Una roca tiene cantos redondeados de 7 mm. Otra tiene granos cementados de cuarzo de 0,5 mm. Clasifica cada una y explica la pista del tamaño.","La primera es una pudinga, conglomerado de clastos redondeados mayores de 2 mm. La segunda es una arenisca: los clastos de 0,5 mm entran en el intervalo de tamaño de arena.","Incluye los dos nombres y justifica cada tamaño. En la primera cuenta también la redondez."],
 [15,"magma","Explica una erupción","Explica en tres o cuatro frases qué ocurre con la presión y los gases cuando asciende el magma. Nombra un producto gaseoso, uno líquido y uno sólido.","Al ascender disminuye la presión. Parte del gas disuelto forma burbujas y se expande. Esto puede favorecer la apertura de fracturas y la salida del magma. Ejemplos: vapor de agua, lava y lapilli.","Conecta el descenso de presión con la formación y expansión de burbujas. Distingue gas, lava y fragmento sólido."],
 [15,"igneas","Identifica y compara dos rocas","Una muestra presenta un mosaico visible de cuarzo, feldespatos y micas. Otra es negra, compacta, sin cristales visibles y rompe en superficies curvas. Identifica ambas y relaciona su textura con el enfriamiento.","La primera es granito de textura fanerítica, típico de enfriamiento lento en profundidad. La segunda es obsidiana: la fractura curva y el aspecto vítreo indican un vidrio volcánico de enfriamiento muy rápido.","Da el nombre de cada roca, una pista de textura y la relación con el tiempo disponible para cristalizar."],
 [15,"meta","Describe la serie regional","Escribe el orden completo desde la arcilla y explica qué cambia al alcanzar la anatexia. Usa al menos una pista para reconocer una roca de la serie.","Arcilla → pizarra → filita → esquisto → gneis → granito de anatexia. Con mayor grado, pueden aparecer micas visibles en el esquisto y bandas claras y oscuras en el gneis. La anatexia es fusión parcial y el granito es ígneo porque cristaliza del fundido.","Comprueba las seis posiciones, el aumento de grado y la distinción entre el tramo sólido y la cristalización final."],
 [15,"meta","Compara corneana y milonita","Una roca se encuentra en una aureola junto a una intrusión. Otra se ha deformado intensamente en una gran falla. Propón la roca y el tipo de metamorfismo de cada caso.","En la aureola, la corneana es característica del metamorfismo térmico o de contacto. En la falla, la milonita se asocia al metamorfismo dinámico por deformación intensa.","Nombra ambas rocas y enlaza cada una con el factor y el lugar indicados."],
 [15,"ciclo","Reconstruye un camino del ciclo","Imagina que el cuarzo de un granito se incorpora primero a una arenisca y acaba en una cuarcita. Explica qué procesos conectan las tres rocas.","La meteorización y la erosión liberan y movilizan partículas; estas se transportan y depositan. La diagénesis transforma el sedimento en arenisca. El metamorfismo recristaliza la arenisca rica en cuarzo y origina cuarcita.","Incluye producción y depósito de sedimentos, diagénesis y metamorfismo en estado sólido."],
 [15,"esfuerzos","Distingue pliegue, diaclasa y falla","En A las capas se curvan. En B hay una fractura con los estratos alineados. En C la misma capa queda a distinta altura a ambos lados de una fractura. Identifica las tres estructuras y explica la pista.","A: pliegue, deformación dúctil de las capas. B: diaclasa, fractura sin desplazamiento apreciable. C: falla, fractura con desplazamiento relativo.","Usa en cada caso una pista observable: curvatura, rotura y presencia o ausencia de desplazamiento."],
 [15,"esfuerzos","Explica los elementos de pliegue y falla","Define charnela, flancos y plano axial. Después define plano de falla, labios y salto.","La charnela es la zona de mayor curvatura y los flancos quedan a ambos lados. El plano axial conecta las charnelas de las capas. El plano de falla es la superficie de rotura, los labios son los bloques y el salto expresa su desplazamiento relativo.","Incluye los seis elementos y usa desplazamiento solo al hablar de la falla."]
];

const identificaciones = [
 {id:"perfil-foto", tema:14, titulo:"Horizontes en una foto real", descripcion:"Mira la fotografía y elige el horizonte que señala cada número.", imagen:["14-podsol","Perfil real con dos marcadores: el 1 señala una franja clara y grisácea; el 2 señala una franja situada debajo, de color ocre.","271"],
  marcas:[["1","56%","33%"],["2","58%","64%"]],
  opciones:["Horizonte O","Horizonte A","Horizonte B","Horizonte C"],
  partes:[
   ["Número 1","Horizonte A","En este podsol, la franja clara corresponde a la zona de lavado. La infiltración ha retirado parte de sus materiales."],
   ["Número 2","Horizonte B","La franja ocre situada debajo corresponde al horizonte de acumulación. La identificación se apoya en su posición respecto a la franja lavada y en el perfil que describe el libro."]
  ], final:"El libro identifica este suelo como podsol. La foto se usa para distinguir A y B. Para nombrar O o C harían falta capas que aquí se vieran con suficiente claridad."},

 {id:"fotos-libro", tema:14, titulo:"Lee dos fotografías de las actividades finales", descripcion:"Compara las imágenes A y B ampliadas. Fíjate primero en el tamaño de las partículas y en su aspecto.", imagen:["14-ejercicio-muestras","Dos fotografías del libro. A muestra un sedimento fino claro. B muestra fragmentos visibles de conchas.","283"], opciones:["Muestra A","Muestra B"],
  partes:[
   ["¿En qué muestra son más pequeños los granos visibles?","Muestra A","A muestra arena fina; B muestra fragmentos claramente distinguibles."],
   ["¿Dónde se aprecian fragmentos más gruesos de conchas?","Muestra B","Los fragmentos de conchas ofrecen una pista sobre la composición y el origen del aporte."]
  ]},
 {id:"cauce-libro", tema:14, titulo:"Lee la fotografía de un cauce", descripcion:"Observa la foto de la p. 285 y busca qué materiales ha dejado el río.", imagen:["14-ejercicio-cauce","Cauce con numerosos bloques y cantos visibles entre el agua y las orillas.","285"], opciones:["Bloques y cantos","Solo partículas disueltas"],
  partes:[
   ["¿Qué materiales se distinguen a simple vista en el cauce?","Bloques y cantos","Se distinguen numerosos clastos gruesos. Lo disuelto no aparece como fragmentos visibles."]
  ]},
 {id:"corte-libro", tema:15, titulo:"Lee un corte geológico de las actividades finales", descripcion:"Localiza las capas curvadas. Después busca si una línea las corta y altera su continuidad.", imagen:["15-ejercicio-corte","Capas coloreadas plegadas y cortadas por una fractura inclinada.","307"], opciones:["El plegamiento","La fractura que corta las capas"],
  partes:[
   ["¿Qué ocurrió primero?","El plegamiento","Las capas ya estaban plegadas cuando la fractura las cortó."],
   ["¿Qué elemento corta y desplaza las capas?","La fractura que corta las capas","La discontinuidad atraviesa las capas en vez de seguir su curvatura."]
  ]},

 {id:"perfil", tema:14, titulo:"Pon nombre a los horizontes del suelo", descripcion:"Identifica las cuatro capas del perfil de arriba abajo.", opciones:["Horizonte A","Horizonte B","Horizonte C","Horizonte O"],
  partes:[
   ["Capa 1 · mantillo oscuro con restos orgánicos","Horizonte O","El mantillo superficial contiene restos orgánicos y humus."],
   ["Capa 2 · zona desde la que el agua arrastra materiales","Horizonte A","El horizonte A es la zona de lavado."],
   ["Capa 3 · zona que recibe los materiales arrastrados","Horizonte B","En B se acumulan materiales procedentes del lavado de A."],
   ["Capa 4 · fragmentos de roca madre alterada","Horizonte C","El horizonte C conserva fragmentos de la roca madre."]
  ]},
 {id:"perfil-llanura", tema:14, titulo:"Perfil 2 · Suelo desarrollado en una llanura", descripcion:"En este dibujo las letras son marcas, no los nombres de los horizontes. Busca la capa correspondiente a cada proceso.", opciones:["Horizonte A","Horizonte B","Horizonte C","Horizonte O"],
  capas:[["X","Delgada cubierta de hojas y restos orgánicos"],["V","Franja pálida con raíces desde la que el agua ha retirado parte de los materiales"],["Z","Franja parda con acumulaciones aportadas por el agua"],["W","Zona inferior con bloques alterados"]],
  partes:[
   ["Z · capa con acumulaciones procedentes de arriba","Horizonte B","En B se acumulan materiales procedentes del lavado de A."],
   ["W · zona inferior con bloques alterados","Horizonte C","C conserva fragmentos de la roca de partida."],
   ["X · cubierta de hojas y restos orgánicos","Horizonte O","El mantillo se encuentra en la superficie."],
   ["V · franja lavada con raíces","Horizonte A","La infiltración arrastra materiales desde A."]
  ]},
 {id:"perfil-rocoso", tema:14, titulo:"Perfil 3 · ¿Caliche o suelo rocoso?", descripcion:"Compara dos cortes esquemáticos. Busca la costra y el espesor antes de decidir.", opciones:["Caliche","Litosuelo o suelo rocoso"],
  perfiles:[
    {nombre:"Perfil A",capas:[["Superficie","Vegetación escasa y suelo muy seco"],["Capa clara","Costra de cal y sales acumuladas"],["Base","Material con fragmentos dispersos"]]},
    {nombre:"Perfil B",capas:[["Superficie","Capa de suelo muy delgada"],["Base","Roca madre casi sin alterar"]]}
  ],
  partes:[
   ["Perfil A · costra clara y clima árido","Caliche","La evaporación y el ascenso capilar favorecen que queden sales o cal en el perfil."],
   ["Perfil B · poco espesor y roca madre casi intacta","Litosuelo o suelo rocoso","Un litosuelo es poco evolucionado y sus horizontes están poco diferenciados."]
  ]},
 {id:"volcan", tema:15, titulo:"Identifica las partes del volcán", descripcion:"Relaciona cada pista del corte con su estructura.", opciones:["Cámara magmática","Cono","Cráter","Chimenea","Caldera"],
  partes:[
   ["A · abertura en la parte alta","Cráter","Por la abertura salen los productos volcánicos."],
   ["B · conducto vertical","Chimenea","La chimenea hace de conducto entre el interior y la superficie."],
   ["C · acumulación de magma bajo la superficie","Cámara magmática","La cámara es el depósito subterráneo de magma."],
   ["D · relieve hecho de materiales acumulados","Cono","El cono se construye por la acumulación de productos."],
   ["E · depresión amplia por hundimiento del techo de la cámara","Caldera","El hundimiento puede originar una caldera."]
  ]},
 {id:"clastos", tema:14, titulo:"Compara la madurez de dos muestras", descripcion:"Observa el tamaño y la forma de los clastos. Supón que proceden de materiales similares.", opciones:["Muestra A","Muestra B"],
  partes:[
   ["¿Cuál presenta mayor madurez textural?","Muestra A","Los clastos son más pequeños y redondeados en la muestra A."],
   ["¿Cuál presenta clastos más grandes y angulosos?","Muestra B","Los clastos de la muestra B conservan aristas marcadas y son mayores."]
  ]},
 {id:"fallas", tema:15, titulo:"Relaciona cada esfuerzo con una falla", descripcion:"Usa la dirección del movimiento de los bloques.", opciones:["Falla de desgarre","Falla inversa","Falla directa"],
  partes:[
   ["Distensión · baja el bloque situado sobre el plano inclinado","Falla directa","En la falla directa el bloque superior desciende y el terreno se alarga."],
   ["Compresión · sube el bloque situado sobre el plano inclinado","Falla inversa","La falla inversa acorta el terreno al elevarse el bloque superior."],
   ["Cizalla · los bloques se desplazan lateralmente","Falla de desgarre","En el desgarre predomina el movimiento lateral."]
  ]}
];
