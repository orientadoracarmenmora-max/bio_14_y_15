"use strict";

const serie = ["Arcilla","Pizarra","Filita","Esquisto","Gneis","Granito de anatexia"];
const lecciones = [
{
 id:"magma", titulo:"Magmatismo y volcanes", paginas:"288–291",
 idea:"El <strong>magmatismo</strong> comienza cuando se funde parte de una roca. El <strong>magma</strong> resultante puede solidificarse en el interior o alcanzar la superficie y producir una erupción.",
 bloques:[
 ["Tres procesos internos","El <strong>magmatismo</strong> implica <strong>fusión</strong> y <strong>formación de magma</strong>. El <strong>metamorfismo</strong> transforma rocas en <strong>estado sólido</strong>. Los <strong>esfuerzos tectónicos</strong> deforman o fracturan rocas. En el bloque diagrama del libro, fíjate en estas tres relaciones. <strong>Subducción</strong> → <strong>magmatismo</strong>. <strong>Compresión</strong> de los sedimentos → <strong>metamorfismo</strong>. <strong>Falla transformante</strong> → <strong>cizalla</strong>."],
 ["De la roca al magma","El <strong>magma</strong> se forma al fundirse parte de una roca. Puede contener una fracción líquida, gases disueltos y sólidos, como cristales o fragmentos."],
 ["Plutón y dique","Un <strong>plutón</strong> es una masa de roca magmática que se forma en profundidad. Un <strong>dique</strong> tiene forma de lámina y corta las estructuras de la roca que lo rodea. En el corte, el <strong>plutón</strong> es la masa que señala la flecha de la izquierda. El <strong>dique</strong> es la lámina gris inclinada que atraviesa las capas."],
 ["Partes del volcán","La <strong>cámara magmática</strong> almacena magma. La <strong>chimenea</strong> es el conducto y el <strong>cráter</strong> la abertura de salida. El <strong>cono</strong> se forma por acumulación de materiales. La <strong>colada de lava</strong> es la lava que se extiende sobre la superficie. Una <strong>caldera</strong> es una depresión amplia que puede formarse por hundimiento."],
 ["Por qué se produce la erupción","Al ascender el magma baja la <strong>presión</strong>. Parte de los gases disueltos forma burbujas que se expanden. Esa expansión puede contribuir a la salida del magma."],
 ["Productos volcánicos","La erupción puede emitir <strong>gases</strong>, <strong>lava</strong> y <strong>piroclastos</strong>. La lava es el magma que sale a la superficie. Los piroclastos se clasifican por tamaño: <strong>ceniza</strong>, menos de 2 mm; <strong>lapilli</strong>, de 2 a 64 mm; <strong>bombas</strong>, más de 64 mm."],
 ["Factores de actividad","Influyen la <strong>composición</strong>, la <strong>temperatura</strong>, los <strong>gases disueltos</strong> y el <strong>lugar</strong> de la erupción. Más sílice suele hacer el magma más viscoso. A mayor temperatura, suele fluir mejor. Los gases que quedan atrapados pueden favorecer una erupción explosiva."]
 ],
 esquema:["Fusión","Magma","Cámara magmática","Chimenea","Cráter","Productos"],
 ejemplo:"Una lámina de roca ígnea atraviesa varios estratos. La pista es que los corta: se trata de un <strong>dique</strong>."
},
{
 id:"igneas", titulo:"Rocas ígneas", paginas:"292–293",
 idea:"Relaciona el lugar de enfriamiento con el tamaño de los cristales y combina <strong>textura</strong> y composición para reconocer una roca.",
 bloques:[
 ["Dónde se forman","Las rocas <strong>plutónicas</strong> solidifican lentamente en profundidad y suelen tener cristales visibles. Las <strong>volcánicas</strong> se forman a partir de materiales emitidos en una erupción. Las <strong>filonianas</strong> se forman a menor profundidad, por ejemplo en grietas."],
 ["Textura y estructura","La <strong>textura</strong> describe el tamaño y la forma de los granos. El libro usa también <strong>estructura</strong> al considerar huecos, porosidad u orientación de los minerales."],
 ["Grado de cristalización","En la textura <strong>fanerítica</strong>, los cristales se distinguen claramente, como en el granito. En la <strong>microcristalina</strong>, son pequeños pero apreciables a simple vista, como en la aplita. En la <strong>vítrea</strong>, no hay cristales, como en la obsidiana. La tabla del libro también recoge la <strong>criptocristalina</strong>, con cristales diminutos visibles al microscopio."],
 ["Tamaño y disposición","La textura <strong>porfídica</strong> tiene cristales grandes en una matriz de grano muy fino o vítrea. La <strong>vacuolar</strong> conserva huecos de las burbujas de gas."],
 ["Volcánicas que debes reconocer","La <strong>pumita</strong> es ligera y tiene muchos huecos. La <strong>obsidiana</strong> tiene aspecto de vidrio y fractura curva. El <strong>basalto</strong> es oscuro y denso. La <strong>andesita</strong> suele ser gris o violácea."],
 ["Plutónicas y filonianas","El <strong>granito</strong> tiene cuarzo, feldespatos y micas visibles. La <strong>diorita</strong> es oscura con motas blancas. La <strong>sienita</strong> suele ser rosada o anaranjada. El <strong>gabro</strong> es oscuro y tiene cristales visibles. La <strong>pegmatita</strong> destaca por sus cristales muy grandes."]
 ],
 esquema:["Enfriamiento lento","Más tiempo para crecer","Cristales habitualmente mayores"],
 ejemplo:"Dos muestras son negras. Una tiene brillo de vidrio y rotura curva: <strong>obsidiana</strong>. La otra es densa y oscura y puede presentar vacuolas: <strong>basalto</strong>. El color solo es una pista."
},
{
 id:"meta", titulo:"Metamorfismo", paginas:"296–299",
 idea:"Una roca preexistente cambia sus minerales, <strong>textura</strong> o <strong>estructura</strong> bajo nuevas condiciones, <strong>en estado sólido</strong>.",
 bloques:[
 ["Cuatro factores","El <strong>metamorfismo</strong> transforma una roca en estado sólido. La <strong>presión litostática</strong> se debe al peso de los materiales superiores. Los <strong>esfuerzos dirigidos</strong> pueden orientar minerales. La <strong>temperatura</strong> y el <strong>agua</strong> favorecen reacciones."],
 ["Cambios que puedes observar","Pueden cambiar el <strong>color</strong>, la <strong>densidad</strong> y la <strong>tenacidad</strong> (resistencia a romperse). La <strong>textura</strong> cambia si crecen los cristales. El libro llama <strong>blastesis</strong> a ese crecimiento. La <strong>estructura</strong> cambia si, por ejemplo, los minerales se orientan."],
 ["Tipos de metamorfismo","El metamorfismo <strong>dinámico</strong> se asocia a la deformación en fallas. El <strong>de contacto</strong> se debe al calor de una intrusión. El <strong>regional</strong> afecta áreas extensas y se relaciona con la presión y la temperatura."],
 ["Serie regional de referencia","<strong>Arcilla → pizarra → filita → esquisto → gneis → granito de anatexia</strong>. Hasta el gneis aumenta el grado de metamorfismo en estado sólido. Si se alcanza la <strong>fusión parcial</strong>, el fundido puede cristalizar como granito. Por eso el granito de anatexia es una roca ígnea."],
 ["Foliación y estructura granoblástica","En la <strong>foliación</strong>, los minerales se disponen en planos o bandas. Se aprecia en rocas como la pizarra y el esquisto. En la estructura <strong>granoblástica</strong>, los granos forman un mosaico sin orientación preferente, como en la cuarcita y el mármol."],
 ["Reconocimiento de rocas","La <strong>cuarcita</strong> procede de areniscas ricas en cuarzo. El <strong>mármol</strong> procede de la caliza. La <strong>corneana</strong> se asocia al metamorfismo de contacto y la <strong>milonita</strong>, a la deformación intensa en fallas."]
 ],
 esquema:serie,
 ejemplo:"Si se observa una franja de roca transformada alrededor de un <strong>plutón</strong>, la pista decisiva es su cercanía al foco de calor: <strong>metamorfismo</strong> de contacto."
},
{
 id:"ciclo", titulo:"Silicatos y ciclo", paginas:"300–301",
 idea:"Los <strong>silicatos</strong> dominan en las rocas ígneas y metamórficas. El ciclo explica cómo una roca puede transformarse siguiendo distintos caminos.",
 bloques:[
 ["Qué es un silicato","Los <strong>silicatos</strong> son minerales con silicio y oxígeno como componentes fundamentales."],
 ["Olivino y granates","El <strong>olivino</strong> es un ejemplo de silicato de rocas magmáticas. Los <strong>granates</strong> pueden encontrarse en rocas metamórficas."],
 ["Del sedimento a la roca","Las rocas expuestas pueden originar <strong>sedimentos</strong> mediante meteorización, erosión, transporte y depósito. La <strong>diagénesis</strong> transforma esos sedimentos en rocas sedimentarias."],
 ["Dos caminos al interior","En estado sólido, una roca puede cambiar por <strong>metamorfismo</strong>. Si se funde, se forma <strong>magma</strong>. Cuando el magma se enfría y solidifica, forma una <strong>roca ígnea</strong>."]
 ],
 esquema:["Roca expuesta","Sedimentos","Diagénesis","Roca sedimentaria"],
 ejemplo:"<strong>Granito</strong> → sedimentos mediante <strong>meteorización</strong> y <strong>erosión</strong> → <strong>arenisca</strong> mediante <strong>diagénesis</strong> → <strong>cuarcita</strong> mediante <strong>metamorfismo</strong>."
},
{
 id:"esfuerzos", titulo:"Esfuerzos, pliegues y fallas", paginas:"302–303",
 idea:"Para reconocer una <strong>estructura</strong> observa si la roca se ha curvado, se ha fracturado sin desplazamiento o se ha fracturado con desplazamiento.",
 bloques:[
 ["Tres esfuerzos","La <strong>compresión</strong> aproxima los materiales. La <strong>distensión</strong> los separa. La <strong>cizalla</strong> hace que partes vecinas se desplacen en sentidos opuestos."],
 ["Deformación dúctil y frágil","En un <strong>pliegue</strong>, las capas se curvan sin romperse. En una <strong>diaclasa</strong>, hay fractura sin desplazamiento apreciable. En una <strong>falla</strong>, hay fractura y desplazamiento relativo."],
 ["Cómo leer un pliegue","La <strong>charnela</strong> es la zona de mayor curvatura. Los <strong>flancos</strong> quedan a sus lados. El <strong>plano axial</strong> pasa por las charnelas. En el <strong>anticlinal</strong>, los estratos más antiguos están en el núcleo. En el <strong>sinclinal</strong>, están los más modernos. El <strong>buzamiento</strong> es la inclinación de la capa respecto a la horizontal."],
 ["Formas y fallas","El <strong>plano de falla</strong> es la superficie de rotura. Los <strong>labios</strong> son los bloques y el <strong>salto</strong> indica el desplazamiento. La falla <strong>directa</strong> se asocia a distensión, la <strong>inversa</strong> a compresión y la <strong>de desgarre</strong> a cizalla."]
 ],
 esquema:["Compresión · pliegue o falla inversa","Distensión · falla directa","Cizalla · falla de desgarre"],
 ejemplo:"Dos capas desplazadas lateralmente a lo largo de una fractura indican una <strong>falla de desgarre</strong>. La pista es el sentido del movimiento."
}
];

// Cada opción incluye la explicación que se muestra al elegirla.
const preguntas = [
 ["magma","Una lámina ígnea atraviesa los estratos. ¿Qué estructura es?",1,["Plutón","Dique","Colada de lava"],["El plutón es una masa generalmente ovoide o abovedada.","El dique ocupa una fractura y corta las estructuras previas.","La colada es lava extendida por la superficie."]],
 ["magma","¿Por dónde circula el magma entre la cámara y la abertura?",2,["Colada","Cráter","Chimenea"],["La colada se extiende sobre la superficie.","El cráter es la abertura de salida.","La chimenea es el conducto que comunica el interior con la superficie."]],
 ["magma","Un piroclasto mide 15 mm. ¿Cómo se clasifica?",0,["Lapilli","Ceniza","Bomba"],["El lapilli mide entre 2 y 64 mm.","La ceniza mide menos de 2 mm.","En la tabla de tamaños las bombas superan los 64 mm."]],
 ["magma","Si aumenta el contenido en sílice, en condiciones comparables, ¿qué cabe esperar?",1,["Menor viscosidad","Mayor viscosidad","Que no cambie la viscosidad"],["Un magma más rico en sílice tiende a fluir con más dificultad.","La mayor proporción de sílice suele incrementar la resistencia a fluir.","La composición sí afecta a la viscosidad."]],
 ["magma","¿Por qué aparecen burbujas cuando asciende el magma?",2,["Aumenta la presión","Se forman cristales de inmediato","Disminuye la presión"],["Al ascender disminuye la presión y se facilita la salida de gases disueltos.","Las burbujas contienen gas. La cristalización es un proceso distinto.","Con menos presión parte de los gases deja de estar disuelta y se expande."]],
 ["igneas","Muestra negra, brillante, sin cristales y con fractura curva.",0,["Obsidiana","Gabro","Pumita"],["La fractura concoidea y el aspecto de vidrio compacto identifican la obsidiana.","El gabro es plutónico y presenta cristales.","La pumita se reconoce por su aspecto espumoso y sus numerosos huecos."]],
 ["igneas","¿Qué textura describirías si ves cristales grandes en una matriz muy fina?",2,["Vítrea","Vacuolar","Porfídica"],["Una roca enteramente vítrea carece de cristales; el ejemplo sí presenta cristales grandes.","En la textura vacuolar el rasgo clave serían las cavidades de gas.","La combinación de cristales grandes y matriz fina caracteriza la textura porfídica."]],
 ["igneas","Mosaico de cristales visibles de cuarzo, feldespato y mica.",1,["Andesita","Granito","Basalto"],["La andesita es volcánica y puede presentar una matriz fina.","La composición y los cristales visibles apuntan a granito plutónico.","El basalto es una roca volcánica oscura, normalmente de grano fino."]],
 ["igneas","Cristales muy grandes de feldespato y mica, en un filón.",0,["Pegmatita","Sienita","Cuarcita"],["El emplazamiento filoniano y los cristales grandes encajan con la pegmatita.","La sienita de la tabla es plutónica y rica en ortosa, pero la pista del filón favorece pegmatita.","La cuarcita se forma por metamorfismo de rocas ricas en cuarzo."]],
 ["igneas","¿Qué pista distingue la textura vacuolar?",1,["Bandas alternas de minerales","Huecos de antiguas burbujas","Superficie compacta con fractura curva"],["Las bandas son una pista típica del gneis.","Los huecos conservan el molde de burbujas de gas.","La fractura curva y el aspecto compacto son pistas de la obsidiana."]],
 ["meta","La roca encajante se transforma en una aureola junto a una intrusión.",2,["Dinámico","Regional","De contacto"],["El dinámico se concentra en zonas de falla.","El regional actúa en áreas extensas, por ejemplo durante la formación de montañas.","La intrusión aporta calor a la roca inmediata y genera una aureola de contacto."]],
 ["meta","¿Qué proceso explica la aparición de cristales nuevos o de mayor tamaño durante el metamorfismo?",0,["Blastesis","Diagénesis","Anatexia"],["Blastesis es el crecimiento de cristales en el metamorfismo.","La diagénesis transforma sedimentos en rocas sedimentarias.","La anatexia implica fusión parcial."]],
 ["meta","Roca con bandas mineralógicas claras y oscuras.",1,["Pizarra","Gneis","Mármol"],["La pizarra se separa típicamente en láminas finas, sin el bandeado grueso descrito.","El bandeado mineralógico es característico del gneis.","El mármol suele presentar un mosaico de granos de calcita."]],
 ["meta","¿Por qué el granito de anatexia se clasifica como ígneo?",2,["Tiene foliación","Procede de compactar arcilla","Cristaliza a partir de un fundido"],["La foliación es una estructura metamórfica que no explica el origen del granito.","La compactación conserva el material en estado sólido.","La fusión parcial da un fundido que, al cristalizar, origina una roca ígnea."]],
 ["meta","En una zona de falla hay roca intensamente deformada y de grano reducido.",0,["Milonita","Corneana","Pumita"],["La deformación concentrada en la zona de falla es la pista de la milonita.","La corneana se asocia al calentamiento por contacto.","La pumita es volcánica y sus huecos proceden de burbujas."]],
 ["meta","Una caliza se transforma en un mosaico de granos de calcita.",1,["Cuarcita","Mármol","Esquisto"],["La cuarcita suele proceder de arenisca rica en cuarzo.","La recristalización de calcita en una caliza produce mármol.","El esquisto suele mostrar foliación marcada por minerales como las micas."]],
 ["ciclo","¿Qué mineral de hierro y magnesio es característico de la peridotita?",0,["Olivino","Ortosa","Moscovita"],["El olivino de hierro y magnesio es común en las peridotitas del manto.","La ortosa es feldespato potásico.","La moscovita es mica blanca y se exfolia en láminas."]],
 ["ciclo","¿Qué transformación convierte sedimentos en roca sedimentaria?",2,["Magmatismo","Metamorfismo","Diagénesis"],["El magmatismo genera fundidos.","El metamorfismo transforma rocas preexistentes en estado sólido.","La diagénesis incluye procesos como la compactación y la cementación."]],
 ["ciclo","Un cristal se identifica como granate. ¿Qué descripción encaja?",1,["Es un feldespato potásico","Pertenece a un grupo de silicatos de composición variable","Es siempre olivino recristalizado"],["El feldespato potásico del tema es la ortosa.","Los granates son un grupo con composición variable y pueden aparecer durante el metamorfismo.","El nombre granate designa un grupo mineral propio y no determina un precursor único."]],
 ["esfuerzos","Hay una fractura, y la misma capa queda desplazada a ambos lados.",0,["Falla","Diaclasa","Charnela"],["Una fractura con desplazamiento es una falla.","En una diaclasa no hay desplazamiento apreciable.","La charnela es la parte de máxima curvatura de un pliegue."]],
 ["esfuerzos","La corteza se acorta por compresión y los bloques se desplazan sobre una fractura inclinada. ¿Qué tipo explica el caso?",1,["Directa","Inversa","De desgarre"],["La falla directa se asocia a extensión.","La falla inversa se asocia al acortamiento por compresión.","El desgarre se caracteriza por el desplazamiento fundamentalmente lateral."]],
 ["esfuerzos","¿Qué indica, en una serie plegada simple, que los estratos más antiguos están en el núcleo?",2,["Sinclinal","Falla normal","Anticlinal"],["En el sinclinal los materiales centrales son más modernos.","Una falla normal se reconoce por la fractura y el desplazamiento en extensión.","La edad de los estratos en el núcleo permite identificar el anticlinal."]],
 ["magma","En el bloque de la p. 288, ¿qué favorece el magmatismo en la subducción?",1,["La cizalla en una falla transformante","El agua que aporta la placa que subduce","La compactación de sedimentos en superficie"],["La cizalla corresponde a la sección de esfuerzos tectónicos del diagrama.","El aporte de agua facilita la fusión de materiales en la zona de subducción.","La compactación por sí sola no explica el magmatismo que muestra el esquema."]],
 ["igneas","¿Qué rasgo de una roca describe principalmente su textura?",0,["Tamaño y forma de sus granos","Profundidad a la que se encontró","Número de capas que corta"],["El tamaño y la forma de los cristales describen la textura en la p. 292.","La profundidad de un hallazgo actual no describe sus granos.","Las capas que atraviesa una intrusión ayudan a identificar su emplazamiento."]],
 ["meta","¿Qué roca asocias al calentamiento alrededor de un plutón?",1,["Milonita","Corneana","Pizarra"],["La milonita se asocia a deformación intensa en una falla.","La corneana es típica del metamorfismo de contacto.","La pizarra se usa en el capítulo como ejemplo de metamorfismo regional de bajo grado."]],
 ["meta","Hay un mosaico de cristales sin orientación preferente. ¿Qué estructura encaja?",2,["Foliación","Porfídica","Granoblástica"],["La foliación implica una disposición planar.","Porfídica describe cristales grandes en una matriz fina.","La estructura granoblástica se parece a un mosaico, como el de la cuarcita."]],
 ["esfuerzos","¿Cómo se llama la zona de mayor curvatura de un pliegue?",1,["Flanco","Charnela","Salto"],["Los flancos quedan a ambos lados de la zona más curvada.","La charnela es la zona de máxima curvatura del pliegue.","El salto mide el desplazamiento de los bloques de una falla."]],
 ["esfuerzos","¿Qué se mide al determinar el salto de una falla?",2,["El ángulo del plano de falla","La presión ejercida","El desplazamiento relativo de los bloques"],["El ángulo del plano respecto a la horizontal corresponde al buzamiento.","La presión no es una medida del salto.","El salto expresa el desplazamiento de los bloques a través de la falla."]],
 ["esfuerzos","¿Qué relación explica una falla directa?",0,["Distensión y alargamiento","Compresión y acortamiento","Cizalla y movimiento lateral"],["La distensión estira el terreno y favorece el movimiento de falla directa.","La compresión favorece fallas inversas o pliegues según el comportamiento de la roca.","La cizalla con desplazamiento lateral caracteriza las fallas de desgarre."]]
];
