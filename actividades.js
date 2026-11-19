"use strict";

const respuestas = [
 [14,"sedimentos","Una arena de playa y un sedimento glaciar","Una arena está formada por granos pequeños y redondeados. Un depósito glaciar presenta fragmentos de tamaños distintos con bordes angulosos. Compara su madurez textural y explica por qué importa el agente que los transportó.","La arena presenta mayor madurez textural por sus clastos pequeños y redondeados. El agua y el oleaje pueden hacer que los granos choquen y se desgasten. Un glaciar puede transportar juntos fragmentos grandes y pequeños sin redondearlos de la misma manera.","Compara tamaño y forma y justifica qué aporta conocer el agente. Actividad inspirada en el repaso de la p. 283."],
 [14,"meteorizacion","Un muro de arenisca pierde granos","Una arenisca contiene granos de cuarzo unidos por cemento calcáreo. La lluvia con CO₂ va disolviendo parte del cemento. ¿Qué alteración ocurre primero? ¿Por qué acaban desprendiéndose los granos?","El agua con CO₂ favorece la disolución del carbonato del cemento mediante carbonatación. Cuando el cemento pierde continuidad, deja de unir parte de los clastos y estos se desprenden.","Distingue la reacción química en el cemento del desprendimiento posterior de granos. Actividad inspirada en la p. 285."],
 [15,"meta","¿Ha cambiado la textura o la estructura?","En una muestra metamorfizada los cristales de feldespato se han agrandado. En otra, las micas aparecen claramente orientadas en planos. ¿Qué cambio describe cada caso?","El crecimiento de cristales es un cambio de textura y puede deberse a blastesis. La orientación planar de los minerales es un cambio de estructura; en este caso es foliación.","Distingue crecimiento de tamaño y orientación preferente. Actividad inspirada en el repaso de la p. 305."],
 [15,"esfuerzos","Identifica un pliegue y una falla","En un corte ves capas plegadas que han quedado desplazadas a ambos lados de una fractura recta. Identifica las dos estructuras y justifica qué rasgo visible te permite distinguirlas.","Las capas curvadas forman un pliegue. La fractura que corta y desplaza las capas es una falla.","Indica la curvatura del pliegue y el desplazamiento a ambos lados de la falla. Actividad inspirada en la p. 307."],

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
 [15,"esfuerzos","Distingue un pliegue y una falla","En A las capas se curvan. En B, una capa queda desplazada a distinta altura a ambos lados de una fractura. Identifica ambas estructuras y explica la pista.","A es un pliegue porque las capas se curvan. B es una falla porque la capa está rota y desplazada.","Usa la curvatura para reconocer el pliegue y el desplazamiento para reconocer la falla."],
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
   ["¿Qué explica que las capas aparezcan curvadas?","El plegamiento","La curvatura de las capas es la pista del pliegue."],
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
 {id:"fallas", tema:15, titulo:"Identifica los elementos de una falla", descripcion:"Relaciona cada descripción con un elemento.", opciones:["Labios","Plano de falla","Salto"],
  partes:[
   ["La superficie por la que han resbalado los bloques.","Plano de falla","El plano de falla es la superficie de rotura y desplazamiento."],
   ["Los dos bloques separados por la rotura.","Labios","Los labios son los bloques situados a ambos lados del plano de falla."],
   ["El desplazamiento relativo de los bloques.","Salto","Puedes reconocer el salto comparando la posición de una misma capa a ambos lados."]
  ]}
];

const ejemplosGuiados = {
 meteorizacion:["Una roca se agrieta tras perder la presión de los materiales que tenía encima.","Es descompresión. La pista es la pérdida de presión: al expandirse, la roca se agrieta."],
 suelo:["Un dibujo señala la capa superficial de hojas y restos orgánicos.","Es el horizonte O, o mantillo. La pista es que está en la superficie y contiene restos orgánicos."],
 sedimentos:["Una partícula avanza pegada al fondo y gira con la corriente.","Es rodadura. La partícula gira sin separarse del fondo."],
 sedimentarias:["Una roca detrítica contiene clastos unidos de 6 mm con bordes angulosos.","Es un conglomerado tipo brecha. El tamaño supera los 2 mm y los clastos son angulosos."],
 magma:["Un fragmento sólido expulsado por un volcán mide 12 mm.","Es lapilli: es un piroclasto de entre 2 y 64 mm."],
 igneas:["Una roca ligera presenta muchos huecos que dejó el gas.","Tiene textura vacuolar. La pumita es un ejemplo del libro."],
 meta:["Una arenisca rica en cuarzo se transforma en estado sólido por metamorfismo.","Puede originar cuarcita. La pista es que la roca de partida es una arenisca rica en cuarzo."],
 ciclo:["Una roca expuesta se fragmenta y sus granos son retirados por una corriente.","La fragmentación es meteorización. La retirada de los granos por la corriente es erosión."],
 esfuerzos:["En un corte, las capas se curvan y siguen siendo continuas.","Es un pliegue. La pista es la curvatura de las capas."],
};

const temasIdentificacion = {
 "perfil-foto":"suelo", perfil:"suelo", "perfil-llanura":"suelo", "perfil-rocoso":"suelo",
 "fotos-libro":"sedimentos", "cauce-libro":"sedimentos", clastos:"sedimentos",
 volcan:"magma", "corte-libro":"esfuerzos", fallas:"esfuerzos"
};

const consignasEscritas = [
 ["Indica qué muestra tiene más madurez textural.","Justifica tu respuesta con el tamaño y la forma de los clastos.","Explica por qué importa qué agente transportó cada muestra."],
 ["Nombra la alteración que sufre el cemento calcáreo.","Explica por qué se desprenden después los granos."],
 ["Indica si el crecimiento de los cristales cambia la textura o la estructura.","Indica si la orientación de las micas cambia la textura o la estructura."],
 ["Nombra la estructura que forman las capas curvadas.","Nombra la estructura que desplaza las capas.","Señala una pista visible que permita distinguirlas."],
 ["Nombra el mecanismo que rompe la roca cuando se congela el agua.","Nombra el mecanismo que desgasta la roca por el roce de arena.","Nombra el mecanismo que transforma el feldespato en arcilla.","Justifica uno de los tres mecanismos con la pista del enunciado."],
 ["Identifica el perfil con costra de cal.","Identifica el perfil delgado sobre roca madre.","Explica qué pista permite distinguir esos dos perfiles."],
 ["Explica si el suelo del caso puede tener mucha porosidad y poca permeabilidad.","Nombra dos factores que influyan en su fertilidad."],
 ["Indica qué material es el detrito.","Señala en qué momento ocurre la erosión.","Explica por qué se depositan los clastos más abajo."],
 ["Clasifica la roca de cantos de 7 mm.","Clasifica la roca de granos de 0,5 mm.","Justifica las dos clasificaciones usando el tamaño de los fragmentos."],
 ["Indica qué ocurre con la presión cuando asciende el magma.","Explica qué les ocurre a los gases al bajar la presión.","Da un ejemplo de producto gaseoso, uno líquido y uno sólido."],
 ["Identifica la muestra con cristales visibles de cuarzo, feldespatos y micas.","Identifica la muestra de fractura curva y aspecto de vidrio.","Relaciona una de las dos texturas con la velocidad de enfriamiento."],
 ["Escribe la serie en orden desde la arcilla.","Explica qué sucede cuando se alcanza la anatexia.","Da una pista para reconocer una de las rocas de la serie."],
 ["Identifica la roca y el tipo de metamorfismo de la aureola.","Identifica la roca y el tipo de metamorfismo de la zona de falla."],
 ["Explica cómo se obtienen sedimentos a partir del granito.","Indica qué proceso transforma esos sedimentos en arenisca.","Indica qué proceso puede transformar la arenisca en cuarcita."],
 ["Identifica la estructura A y da una pista.","Identifica la estructura B y da una pista."],
 ["Define charnela.","Define flancos.","Define plano axial.","Define plano de falla.","Define labios de falla.","Define salto de falla."]
];

const contextosEscritos = [
 "Una arena tiene granos pequeños y redondeados. Un depósito glaciar presenta clastos de varios tamaños con bordes angulosos.",
 "En una arenisca, un cemento calcáreo une los granos de cuarzo. La lluvia contiene dióxido de carbono.",
 "En una muestra metamorfizada crece el feldespato. En otra, las micas se orientan en planos.",
 "Un corte muestra capas curvadas y una fractura recta con las mismas capas desplazadas a ambos lados.",
 "En la primera roca se congela agua en las grietas. La segunda se desgasta por el roce de arena. En la tercera el feldespato se convierte en arcilla.",
 "Un perfil tiene costra de cal en una región seca. El otro es muy delgado y se asienta sobre roca madre poco alterada.",
 "Un suelo arcilloso tiene muchos huecos pequeños y el agua circula despacio.",
 "Una ladera libera fragmentos. La lluvia los arrastra a un río y, más abajo, la corriente pierde energía.",
 "La roca A tiene cantos redondeados de 7 mm. La roca B tiene granos cementados de cuarzo de 0,5 mm.",
 "El magma asciende hasta alcanzar la superficie.",
 "Una muestra tiene cristales visibles de cuarzo, feldespatos y micas. La otra es negra y compacta, sin cristales visibles y de fractura curva.",
 "La serie empieza en un material arcilloso y continúa a medida que aumenta el grado metamórfico.",
 "Una muestra procede de una aureola junto a una intrusión. Otra se deformó intensamente en una falla.",
 "El cuarzo de un granito acaba primero en una arenisca y luego en una cuarcita.",
 "En A se curvan las capas. En B, una capa queda desplazada a ambos lados de la fractura.",
 "Recuerda los elementos de un pliegue y de una falla del esquema del libro."
];

const preguntasSimulacro = [
 {tema:14,pregunta:"En una roca, las diferencias de temperatura producen dilataciones desiguales y acaban abriendo grietas. Nombra el mecanismo y explica por qué es meteorización mecánica.",
  modelo:"Es termoclastia. La dilatación y la contracción desiguales producen esfuerzos que fracturan la roca sin cambiar su composición."},
 {tema:14,pregunta:"Observa la fotografía del suelo. Identifica el horizonte que señala cada número y justifica una de tus elecciones.",
  foto:true, campos:[["Número 1",["Horizonte O","Horizonte A","Horizonte B","Horizonte C"],"Horizonte A"],["Número 2",["Horizonte O","Horizonte A","Horizonte B","Horizonte C"],"Horizonte B"]],
  modelo:"El 1 señala el horizonte A, la franja clara de lavado. El 2 señala el horizonte B, situado debajo, donde se acumulan parte de los materiales arrastrados."},
 {tema:14,pregunta:"La corriente de un río pierde energía y los clastos caen al fondo. ¿Qué forma de sedimentación es? Explica en qué se diferencia de la acreción cinética.",
  modelo:"Es depósito gravitacional. Los clastos caen al fondo cuando la corriente pierde energía. En la acreción cinética, los clastos en movimiento se acumulan al tropezar con un obstáculo."},
 {tema:14,pregunta:"En una roca sedimentaria ves cantos redondeados de 7 mm unidos por cemento. Identifica la roca y justifica tu respuesta con dos rasgos.",
  modelo:"Es una pudinga. Es un conglomerado porque los clastos superan los 2 mm. Los cantos redondeados permiten distinguir la pudinga de una brecha."},
 {tema:15,pregunta:"Explica qué les sucede a la presión y a los gases cuando asciende el magma. Nombra un producto líquido y uno sólido de una erupción.",
  modelo:"Al ascender el magma, disminuye la presión. Parte de los gases disueltos forma burbujas que se expanden. La lava es el producto líquido y el lapilli es un ejemplo de producto sólido."},
 {tema:15,pregunta:"Una roca tiene cristales grandes en una matriz de grano muy fino. Nombra la textura y explica qué rasgo permite reconocerla.",
  modelo:"La textura es porfídica. La pista es que destacan cristales grandes dentro de una matriz mucho más fina."},
 {tema:15,pregunta:"Escribe en orden la serie metamórfica desde la arcilla hasta el granito de anatexia. Explica qué sucede al alcanzarse la anatexia.",
  modelo:"Arcilla → pizarra → filita → esquisto → gneis → granito de anatexia. La anatexia es la fusión parcial de la roca. El fundido puede cristalizar y originar granito."},
 {tema:15,pregunta:"En un corte, una misma capa queda desplazada a ambos lados de una superficie de rotura. Identifica la estructura y distingue plano de falla, labios y salto.",
  modelo:"Es una falla. El plano de falla es la superficie de rotura. Los labios son los bloques a ambos lados. El salto indica el desplazamiento relativo."}
];
