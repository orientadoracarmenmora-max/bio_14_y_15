"use strict";

const modulos = [...externos,...lecciones];
const banco = [...preguntas,...preguntasExternos];
const $ = id => document.getElementById(id);
const key = "tema15-estudio-v1";
const defaults = {done:[],answers:{}, sorted:false, size:"100", contrast:false, rate:"1", voice:""};
let saved = {};
try { saved = JSON.parse(localStorage.getItem(key)) || {}; } catch { /* Local storage can be unavailable. */ }
const state = {...defaults,...saved};
let persistent = true;
function save() {
  try { localStorage.setItem(key, JSON.stringify(state)); }
  catch { persistent = false; }
}

const screen = $("screen");
const synth = window.speechSynthesis;
let utterance;
let speechRun = 0;
function stopSpeech() {
  speechRun++;
  synth?.cancel();
  utterance = null;
  $("speech-status").textContent = "";
}
function fillVoices() {
  const voices = synth?.getVoices() || [];
  $("voice").replaceChildren(new Option("Español automático",""), ...voices
    .filter(voice => voice.lang.toLowerCase().startsWith("es"))
    .map(voice => new Option(voice.name + " · " + voice.lang, voice.voiceURI)));
  $("voice").value = state.voice;
  if ($("voice").selectedIndex < 0) $("voice").selectedIndex = 0;
}
function speak(area = screen) {
  if (!synth) { $("speech-status").textContent = "Lectura en voz alta no disponible en este navegador."; return; }
  stopSpeech();
  const currentRun = speechRun;
  const voice = synth.getVoices().find(item => item.voiceURI === state.voice)
    || synth.getVoices().find(item => item.lang.toLowerCase() === "es-es")
    || synth.getVoices().find(item => item.lang.toLowerCase().startsWith("es"));
  const lines = area.querySelectorAll("h1,h2,h3,p,figcaption,legend,.choice,li,.feedback");
  const chunks = Array.from(lines)
    .filter(node => node.innerText.trim() && !node.closest("[hidden]") && (!node.closest("details") || node.closest("details").open) && !node.querySelector("p,li"))
    .map(node => (node.querySelector(".sort-row span")?.innerText || node.innerText).trim());
  let index = 0;
  function next() {
    if (currentRun !== speechRun) return;
    if (index === chunks.length) { $("speech-status").textContent = "Lectura terminada."; return; }
    utterance = new SpeechSynthesisUtterance(chunks[index++]);
    utterance.lang = voice?.lang || "es-ES";
    if (voice) utterance.voice = voice;
    utterance.rate = Number(state.rate);
    utterance.onend = next;
    utterance.onerror = () => {
      if (currentRun === speechRun) $("speech-status").textContent = "No se pudo reproducir. Prueba otra voz del dispositivo.";
    };
    synth.speak(utterance);
  }
  $("speech-status").textContent = "Leyendo…";
  next();
}

function settings() {
  document.documentElement.style.fontSize = state.size + "%";
  document.documentElement.classList.toggle("contrast",state.contrast);
  $("size").value = state.size;
  $("contrast").checked = state.contrast;
  $("rate").value = state.rate;
}
for (const id of ["size","contrast","voice","rate"]) {
  $(id).addEventListener("change", event => {
    state[id] = id === "contrast" ? event.target.checked : event.target.value;
    save();
    settings();
  });
}
settings();
fillVoices();
synth?.addEventListener("voiceschanged",fillVoices);
$("speak").onclick = () => speak();
$("stop").onclick = stopSpeech;
$("print").onclick = () => window.print();
document.querySelector(".skip").addEventListener("click", event => {
  event.preventDefault();
  $("contenido").focus();
});

const button = (href,label,primary=false) => `<a class="button ${primary ? "primary" : ""}" href="#${href}">${label}</a>`;
const speaker = (label,attributes="") => `<button type="button" class="speaker" aria-label="${label}" title="${label}" ${attributes}><span aria-hidden="true">🔊</span></button>`;
const explanation = content => content.split(/(?<=[.!?])\s+(?=(?:<strong>)?[A-ZÁÉÍÓÚÜÑ¿¡])/u)
  .map(sentence => `<p>${sentence}</p>`).join("");
const flow = items => `<ol class="diagram">${items.map(item => `<li>${item}</li>`).join("")}</ol>`;
const visual = {
  magma: `<figure><div class="volcano" aria-hidden="true"><span class="cone"></span><span class="vent"></span><span class="chamber"></span></div>
  <figcaption><strong>Corte de un volcán.</strong> El cono rodea el cráter en la parte superior. Debajo, la chimenea conecta la abertura con la cámara magmática.</figcaption></figure>`,
  meta: `<figure><div class="rock-samples" aria-hidden="true"><span class="foliation"></span><span class="mosaic"></span></div>
  <figcaption><strong>Dos estructuras.</strong> Izquierda, disposición en láminas o bandas (foliación). Derecha, mosaico de granos sin orientación preferente (granoblástica).</figcaption></figure>`,
  ciclo: `<ul class="cycle-paths"><li><strong>Cualquier roca expuesta</strong> → meteorización y erosión → sedimentos.</li><li><strong>Roca en el interior</strong> → metamorfismo → roca metamórfica.</li><li><strong>Roca que se funde</strong> → magma → cristalización → roca ígnea.</li></ul>`
};
const examExternal = `<div class="grid"><section class="card"><h2>Qué entra · Tema 14</h2><ul>
<li>Meteorización y mecanismos mecánicos, químicos y biológicos. Define cada mecanismo y reconócelo a partir de un caso.</li>
<li>Formación del suelo, horizontes O, A, B y C, textura, porosidad, permeabilidad y fertilidad. Compara caliche con suelo rocoso.</li>
<li>Erosión, detrito, sedimentación, modos de transporte, madurez textural y diferencia entre depósito gravitacional y acreción cinética.</li>
<li>Clasificación y reconocimiento de rocas sedimentarias. Repaso breve de cuarzo, minerales de arcilla, yeso, halita y calcita.</li></ul></section>
<section class="card"><h2>Qué se excluye</h2><p>Punto 6, dedicado a los agentes y sus modelados. Sí se estudia cómo se transportan y depositan las partículas en el punto 3.</p><p class="muted">La transcripción menciona la p. 265 para meteorización. En el PDF entregado el apartado está en las pp. 268–269.</p></section></div>`;
const exam = `<p class="muted">Indicaciones de examen para el tema 15.</p>
<div class="notice"><h2>Prioridad del examen</h2><p>Practica la serie regional de la arcilla al granito de anatexia. El audio la señala como pregunta segura. Aprende a ordenar las etapas y explica por qué al final aparece una roca ígnea.</p></div>
<div class="grid"><section class="card"><h2>Qué entra</h2><ul>
<li>Los tres procesos internos y el bloque diagrama de la p. 288. Magmatismo, magma, plutón, dique, partes del volcán, erupción, productos y factores de la actividad volcánica.</li>
<li>Rocas ígneas, enfriamiento, diferencia entre textura y estructura, clasificación y reconocimiento. Prioriza fanerítica, microcristalina, vítrea, porfídica y vacuolar.</li>
<li>Metamorfismo, factores, cambios, tipos, serie regional y reconocimiento de rocas. Foliación, estructura granoblástica, corneana y milonita.</li>
<li>Definición de silicato, olivino y granates, ciclo de las rocas, esfuerzos, pliegues y fallas.</li></ul></section>
<section class="card"><h2>Qué se excluye</h2><p>Tipos hawaiana, estromboliana y peleana, y el recuadro azul completo de la p. 291. Diabasa, microscopio petrográfico, estructura de los silicatos y actividad sísmica. Entre los emplazamientos intrusivos, céntrate en plutón y dique.</p></section></div>
<section class="block"><h2>Material de referencia</h2><p>Tema 15 del libro, pp. 287–307. Los apartados indican las páginas de estudio. La guía contrasta el audio recuperado del tema 15 con el PDF. La prioridad exacta de «criptocristalina» se oye de forma ambigua; puedes consultar su definición en el apartado y en la p. 292.</p></section>`;

const bookImages = {
  meteorizacion: [["14-mecanica","Ejemplos de meteorización mecánica","Cuatro mecanismos ilustrados con fotografías de rocas y paisajes.","268"],["14-raices","Raíces y meteorización","Raíces de árbol que ocupan y ensanchan grietas de una roca.","269"]],
  suelo: [["14-horizontes","Perfil real de un suelo","Corte vertical con vegetación y capas de diferente color sobre la roca.","270"],["14-suelos","Compara perfiles de suelo","Cuatro perfiles del libro, entre ellos el caliche y el suelo rocoso.","271"]],
  sedimentos: [["14-transporte","Cómo viajan las partículas","Esquema del libro con suspensión, flotación, disolución, reptación, saltación y rodadura.","272"],["14-depositos","Dos formas de depósito","Cantos en un cauce y barras arenosas vistas desde arriba.","273"]],
  sedimentarias: [["14-sedimentarias","Reconoce las rocas detríticas","Conglomerado, arenisca y ejemplos de partículas finas en la clasificación del libro.","274"]],
  magma: [["15-tectonica","Procesos internos y placas","Bloque diagrama de subducción, fallas transformantes y ascenso de plumas térmicas.","288"],["15-intrusiones","Plutones y diques en el subsuelo","Corte donde una masa abovedada y láminas de magma se emplazan entre rocas.","289"],["15-volcan","Corte de un volcán","Cono, conducto, cámara y colada. Contrasta esta vista con las partes descritas.","290"]],
  igneas: [["15-enfriamiento","Dónde se forman las rocas ígneas","Corte del volcán que muestra emplazamientos superficiales y profundos.","292"],["15-igneas","Muestras de rocas ígneas","Fotografías de pumita, andesita, obsidiana, basalto, granito, diorita, sienita y gabro.","293"]],
  meta: [["15-aureola","Aureola alrededor de una intrusión","Corte donde el plutón calienta la roca encajante y la transforma a su alrededor.","297"],["15-foliacion","Minerales orientados y foliación","Esquema de la orientación de los minerales planos bajo presión.","298"],["15-metamorficas","Muestras de rocas metamórficas","Fotografías de rocas foliadas y de rocas con estructura granoblástica.","299"]],
  ciclo: [["15-ciclo","Ciclo de las rocas en el libro","Diagrama de los caminos entre magma, rocas y sedimentos.","301"]],
  esfuerzos: [["15-pliegues","Elementos del pliegue","Corte con capas plegadas, núcleo, charnela, flancos y plano axial.","302"],["15-fallas","Elementos y tipos de falla","Bloques de roca desplazados a lo largo de un plano de fractura.","303"]]
};
const studyQuestions = {
  meteorizacion: [
    ["¿Qué es la meteorización? Explica en qué se diferencia de la erosión.","La meteorización fragmenta una roca o altera sus minerales en el lugar donde está. La erosión retira y moviliza materiales, que pueden proceder de la meteorización."],
    ["¿En qué consiste la termoclastia y por qué es mecánica?","Las diferencias de temperatura producen dilataciones y contracciones desiguales. Los esfuerzos pueden fracturar la roca sin cambiar su composición química."],
    ["Algunos feldespatos se transforman en minerales de arcilla. ¿Qué mecanismo explica el cambio? ¿Y si una raíz ensancha una grieta?","La hidrólisis altera químicamente algunos feldespatos. La raíz actúa como cuña, un mecanismo físico de meteorización biológica."]
  ],
  suelo: [
    ["Explica cómo influyen el clima, el tiempo, la pendiente y los seres vivos en la formación de un suelo.","El clima influye en la alteración y la actividad biológica. Con tiempo pueden desarrollarse horizontes. Una pendiente fuerte facilita la pérdida de detritos. Los organismos mezclan el suelo y aportan materia orgánica."],
    ["En un perfil, ¿cómo distingues los horizontes O, A, B y C?","O es el mantillo superficial. En A predomina el lavado. B recibe materiales procedentes de capas superiores. C contiene material de partida alterado y fragmentos de roca madre."],
    ["¿Puede un suelo tener muchos poros y dejar pasar el agua lentamente? Distingue también textura y fertilidad.","Sí, si los poros son pequeños o están mal conectados. La porosidad mide el volumen ocupado por huecos y la permeabilidad la facilidad con que circula el agua. La textura describe las proporciones de arena, limo y arcilla. La fertilidad depende también de los nutrientes, el humus, el agua y la aireación."],
    ["Distingue un caliche y un suelo rocoso a partir de dos perfiles.","En el caliche puede verse una costra de cal vinculada al ascenso de agua y la evaporación en clima árido. El suelo rocoso es delgado y poco desarrollado, sobre roca madre poco alterada."]
  ],
  sedimentos: [
    ["Distingue detrito, erosión y sedimentación usando el ejemplo de una ladera tras la lluvia.","Los fragmentos acumulados en la ladera forman el detrito. Hay erosión si el agua los arranca o los recoge y moviliza. Cuando disminuye la capacidad de transporte y los deposita, hay sedimentación."],
    ["Una partícula avanza dando saltos y otra viaja dentro del agua sin tocar el fondo. ¿Cómo se transporta cada una?","La primera se mueve por saltación. La segunda se transporta en suspensión. La pista es el contacto repetido con el fondo en el primer caso."],
    ["Compara la madurez textural de dos muestras y justifica qué rasgos has observado.","En condiciones comparables, una muestra de clastos pequeños y redondeados muestra mayor madurez textural que una de clastos gruesos y angulosos. Tamaño y redondez se observan en las partículas."],
    ["Distingue depósito gravitacional y acreción cinética.","En el depósito gravitacional el fluido pierde energía y las partículas se depositan. En la acreción cinética las partículas en movimiento se acumulan al encontrar un obstáculo."]
  ],
  sedimentarias: [
    ["¿Cómo se transforma un sedimento en una roca sedimentaria?","La diagénesis incluye la compactación por enterramiento y la cementación, en la que precipitan minerales entre los clastos y los unen."],
    ["Tienes tres muestras: cantos redondeados de 8 mm, granos de arena de 0,5 mm y una mezcla fina de carbonato y arcilla. Identifícalas y justifica la clasificación.","La primera es una pudinga, conglomerado con clastos redondeados mayores de 2 mm. La segunda es arenisca por su tamaño de grano. La tercera es marga, una roca mixta."],
    ["Relaciona cuarzo, minerales de arcilla, yeso, halita y calcita con una característica o un ejemplo.","Cuarzo: resistente y habitual en areniscas. Minerales de arcilla: pueden proceder de la alteración de feldespatos. Yeso y halita: se asocian a evaporitas. Calcita: carbonato de calcio habitual en las calizas."]
  ],
  magma: [
    ["Distingue magmatismo, metamorfismo y esfuerzos tectónicos. Identifica un ejemplo de cada uno en el bloque diagrama de la p. 288.","El magmatismo implica fusión y formación de magma. El metamorfismo cambia la roca en estado sólido. Los esfuerzos pueden plegarla o fracturarla. En el diagrama, la subducción facilita la fusión, la compresión en el prisma favorece el metamorfismo y en la falla transformante hay cizalla."],
    ["¿Cómo reconocerías un plutón y un dique en un corte?","El plutón es una masa intrusiva; el dique es tabular y corta las estructuras de la roca encajante."],
    ["En un dibujo de un volcán, localiza la cámara, la chimenea, el cráter y el cono. ¿En qué se diferencia una caldera de un cráter?","La cámara contiene magma en profundidad; la chimenea es el conducto; el cráter, la abertura; el cono, el relieve acumulado. Una caldera es una depresión mucho más amplia que puede originarse por hundimiento."],
    ["Explica qué sucede con los gases al ascender el magma. ¿Qué productos puede emitir una erupción?","Al bajar la presión, los gases disueltos forman burbujas y se expanden. La erupción puede emitir gases, lava y piroclastos."],
    ["¿Qué factores influyen en la actividad volcánica y cómo afectan la sílice y la temperatura a la viscosidad?","Influyen la composición, la temperatura, los gases y el lugar de la erupción. Más sílice suele aumentar la viscosidad. Una temperatura más alta suele favorecer la fluidez."]
  ],
  igneas: [
    ["Relaciona rocas plutónicas, volcánicas y filonianas con el lugar de consolidación y sus texturas habituales.","Las plutónicas se consolidan lentamente en profundidad y suelen tener cristales visibles. Las volcánicas se enfrían con rapidez cerca de la superficie y pueden tener grano fino o vidrio. Las filonianas se emplazan en fracturas u otras discontinuidades a menor profundidad."],
    ["Una roca tiene cristales grandes dispersos en una matriz de grano fino. Otra conserva huecos de burbujas. Describe sus texturas.","La primera es porfídica. La segunda presenta textura o estructura vacuolar. El tamaño de los cristales y los huecos son pistas distintas."],
    ["Distingue granito, obsidiana y pumita a partir de características visibles.","El granito tiene un mosaico de cristales visibles. La obsidiana es un vidrio volcánico compacto con fractura curva. La pumita tiene numerosas vacuolas y es ligera."]
  ],
  meta: [
    ["Define metamorfismo. Nombra los factores y explica un cambio que pueda producir cada uno.","Es la transformación de una roca en estado sólido. La presión litostática puede reducir la porosidad, los esfuerzos dirigidos pueden orientar minerales, la temperatura favorece la recristalización y los fluidos facilitan reacciones."],
    ["Ordena la serie regional desde la arcilla. Explica cómo evoluciona al aumentar la presión y la temperatura y cuándo comienza la fusión.","Arcilla → pizarra → filita → esquisto → gneis → granito de anatexia. Hasta el gneis, la transformación metamórfica ocurre en estado sólido y aumenta el grado. Si se alcanza la fusión parcial, el fundido puede cristalizar como granito."],
    ["Compara foliación y estructura granoblástica. Da un ejemplo de roca para cada una.","La foliación es una estructura planar, visible por ejemplo en el esquisto. La estructura granoblástica es un mosaico de granos sin orientación preferente, como en la cuarcita."],
    ["Una muestra está junto a una intrusión y otra procede de una zona de falla con deformación intensa. ¿Qué tipos de metamorfismo y qué rocas son compatibles?","La corneana es característica del metamorfismo de contacto junto a una intrusión. Una milonita se asocia a la deformación intensa en una zona de falla. El metamorfismo regional afecta zonas extensas."]
  ],
  ciclo: [
    ["¿Qué caracteriza a los silicatos? Pon el ejemplo ígneo y el metamórfico destacados en clase.","El silicio y el oxígeno son componentes fundamentales. El olivino aparece en rocas magmáticas. Los granates pueden aparecer en rocas metamórficas."],
    ["En el ciclo de las rocas, explica cómo se pasa de sedimento a roca sedimentaria, de roca sólida a metamórfica y de magma a roca ígnea.","El sedimento se convierte en roca sedimentaria por diagénesis. Una roca sólida puede transformarse por metamorfismo. El magma forma roca ígnea al enfriarse y solidificarse."],
    ["Construye un recorrido del ciclo que incluya granito, sedimentos, arenisca y cuarcita.","El granito expuesto se meteoriza y los materiales se movilizan, se transportan y se depositan. La diagénesis puede formar arenisca. Si es rica en cuarzo, el metamorfismo puede transformarla en cuarcita."]
  ],
  esfuerzos: [
    ["¿Qué distingue un pliegue de una falla y de una diaclasa en un corte?","En el pliegue se curvan las capas. En la falla hay rotura con desplazamiento relativo. En la diaclasa hay una fractura sin desplazamiento apreciable de los bloques."],
    ["Señala en un dibujo la charnela, los flancos, el núcleo y el plano axial.","La charnela es la zona de mayor curvatura. Los flancos están a ambos lados. El núcleo es la zona más interna. El plano axial pasa por las charnelas de las capas plegadas."],
    ["Identifica el plano de falla, los labios y el salto. Relaciona tres tipos de falla con el esfuerzo que predomina.","El plano de falla es la superficie de rotura, los labios son los bloques y el salto expresa su desplazamiento relativo. La falla directa se asocia a distensión; la inversa, a compresión; y la de desgarre, a cizalla."]
  ]
};

const figurePlacement = {
  meteorizacion:[1,3], suelo:[1,4], sedimentos:[2,4], sedimentarias:[1],
  magma:[0,2,3], igneas:[0,4], meta:[2,4,5], ciclo:[3], esfuerzos:[2,3]
};

const questionPlacement = {
  meteorizacion:[0,1,2], suelo:[0,1,2,4], sedimentos:[0,2,3,4],
  sedimentarias:[0,1,4], magma:[0,2,3,4,6], igneas:[0,3,4],
  meta:[0,3,4,5], ciclo:[1,2,3], esfuerzos:[1,2,3]
};
const extraQuestions = {
  magma: {
    1:["¿Qué componentes puede contener el magma?","Una fracción líquida, gases disueltos y una fracción sólida de cristales o fragmentos de roca."],
    5:["Distingue gases, lava y piroclastos. Clasifica ceniza, lapilli y bombas por tamaño.","Los gases son productos volátiles. La lava es magma emitido al exterior. Los piroclastos son fragmentos sólidos: ceniza menor de 2 mm, lapilli de 2 a 64 mm y bombas mayores de 64 mm."]
  },
  igneas: {
    1:["¿Qué diferencia hay entre textura y estructura en una roca magmática?","La textura describe, entre otros rasgos, el tamaño y la forma de los granos minerales. El libro usa también el término estructura al considerar cavidades, porosidad u orientación de los minerales."],
    2:["Distingue las texturas fanerítica, microcristalina y vítrea. Da un ejemplo de cada una.","Fanerítica: cristales claramente visibles, como en el granito. Microcristalina: cristales muy pequeños pero apreciables a simple vista, como en la aplita. Vítrea: masa sin cristales, como la obsidiana."]
  },
  meta: {
    1:["¿Qué cambios puede experimentar una roca durante el metamorfismo?","Pueden variar el color, la densidad y la tenacidad. También pueden cambiar la textura, por ejemplo si crecen los cristales, y la estructura, por ejemplo al desarrollarse foliación."],
    2:["Distingue metamorfismo dinámico, de contacto y regional.","El dinámico se asocia a la deformación en fallas. El de contacto se debe al calor de una intrusión sobre la roca encajante. El regional afecta áreas extensas y se asocia a condiciones de presión y temperatura propias de zonas orogénicas."]
  },
  ciclo: {
    0:["¿Qué elementos son fundamentales en los silicatos?","El silicio y el oxígeno."]
  }
};

function studyPrompts(id,index) {
  const entries = studyQuestions[id]
    .map((question,i)=>({question,block:questionPlacement[id][i]}))
    .filter(entry=>entry.block===index).map(entry=>entry.question);
  const extra = extraQuestions[id]?.[index];
  if (extra) entries.push(extra);
  if (!entries.length) return "";
  const confirmed = id==="meta" && index===3;
  return `<div class="study-prompts inline-prompts"><h3>${confirmed?"Pregunta confirmada por Belén":entries.length===1?"Posible pregunta de examen":"Posibles preguntas de examen"}</h3>
  ${entries.map(([question,answer])=>`<div class="exam-question"><p><strong>${question}</strong></p><details><summary aria-label="Ver respuesta modelo: ${question}">Ver respuesta modelo</summary><p>${answer}</p></details></div>`).join("")}
  ${id==="suelo" && index===1?button("retos","Practicar con perfiles y fotografías"):""}
  ${confirmed?button("serie","Practicar el orden de la serie"):""}
  </div>`;
}
function figures(lesson,index) {
  const related = bookImages[lesson.id].filter((_,i)=>figurePlacement[lesson.id][i]===index);
  if (!related.length) return "";
  return `<div class="book-figures">${related.map(([file,title,alt,page])=>`<figure class="book-figure"><a href="./${file}.webp" aria-label="Ampliar en otra pestaña: ${title}" target="_blank" rel="noopener">
    <img src="./${file}.webp" alt="${alt}" loading="lazy"></a><figcaption><strong>${title}.</strong> Libro, p. ${page}.</figcaption></figure>`).join("")}</div>`;
}

function lessonBody(lesson,readButtons=false) {
  const isComparison = lesson.id === "esfuerzos";
  const diagram = isComparison
    ? `<ul>${lesson.esquema.map(item => `<li>${item}</li>`).join("")}</ul>`
    : flow(lesson.esquema);
  const listen = title => readButtons ? speaker("Escuchar: "+title,"data-read") : "";
  return `<p class="muted">Libro · pp. ${lesson.paginas}</p>
  ${readButtons?'<p class="study-note">Los rótulos de posible pregunta indican contenidos para practicar. La serie regional se marca como confirmada porque Belén lo dijo expresamente.</p>':""}
  <section class="notice"><div class="block-head"><h2>Idea principal</h2>${listen("Idea principal")}</div><div class="explanation">${explanation(lesson.idea)}</div></section>
  ${lesson.bloques.map(([title,body],index) => `<section class="block"><div class="block-head"><h2>${title}</h2>${listen(title)}</div><div class="explanation">${explanation(body)}</div>${readButtons ? figures(lesson,index)+studyPrompts(lesson.id,index) : ""}</section>`).join("")}
  <section class="block"><h2>${isComparison ? "Relaciones clave" : "Esquema de repaso"}</h2>${diagram}${visual[lesson.id] || ""}</section>
  <section class="block"><div class="block-head"><h2>Ejemplo razonado</h2>${listen("Ejemplo razonado")}</div><div class="explanation">${explanation(lesson.ejemplo)}</div></section>
  `;
}
function printTopic(title,guide,modules) {
  const ids = modules.map(lesson=>lesson.id);
  const questions = banco.filter(question=>ids.includes(question[0]));
  return `<section class="print-theme"><h2>${title}</h2>${guide}
  ${modules.map(lesson=>`<section><h2>${lesson.titulo}</h2>${lessonBody(lesson)}</section>`).join("")}
  <h2>Práctica de reconocimiento</h2><ol>${questions.map(([,prompt,,options])=>`<li>${prompt}<ul>${options.map(option=>`<li>${option}</li>`).join("")}</ul></li>`).join("")}</ol>
  <h2>Soluciones razonadas</h2><ol>${questions.map(([, ,correct,options,reasons])=>`<li><strong>${options[correct]}.</strong> ${reasons[correct]}</li>`).join("")}</ol></section>`;
}
$("printout").innerHTML = `<h1>Procesos geológicos</h1><p>1.º de Bachillerato · Temas 14 y 15</p>
${printTopic("Tema 14 · Procesos geológicos externos",examExternal,externos)}
${printTopic("Tema 15 · Procesos geológicos internos",exam,lecciones)}
<h2>Ordena la serie regional</h2><p>Numera del 1 al 6: esquisto, arcilla, gneis, filita, granito de anatexia y pizarra. Explica en qué momento empieza la fusión.</p>
<h3>Solución</h3><p>${serie.join(" → ")}. Al alcanzarse la anatexia comienza la fusión parcial.</p>
${identificaciones.map(item=>`<section class="block"><h3>Tema ${item.tema} · ${item.titulo}</h3><p>${item.descripcion}</p>
<p><strong>Opciones:</strong> ${item.opciones.join(", ")}.</p><ol>${item.partes.map(([label])=>`<li>${label}.</li>`).join("")}</ol></section>`).join("")}
<h2>Soluciones de identificación</h2>${identificaciones.map(item=>`<section class="block"><h3>${item.titulo}</h3><ol>${item.partes.map(([,correct,why])=>`<li><strong>${correct}.</strong> ${why}</li>`).join("")}</ol></section>`).join("")}
<h2>Actividades con respuesta escrita</h2>${respuestas.map(([theme,,title,prompt])=>`<section class="block"><h3>Tema ${theme} · ${title}</h3><p>${prompt}</p><div class="writing-lines"></div></section>`).join("")}
<h2>Soluciones de la práctica escrita</h2>${respuestas.map(([, ,title,,answer])=>`<section class="block"><h3>${title}</h3><p>${answer}</p></section>`).join("")}`;
screen.addEventListener("click",event => {
  const trigger = event.target.closest("button[data-read]");
  if (trigger) speak(trigger.closest("section"));
});

let ordering = [3,5,0,4,1,2];
let quiz = null;
let quizTopic = "";
function shuffled(items) {
  const result = [...items];
  for (let i=result.length-1;i>0;i--) {
    const j = Math.floor(Math.random()*(i+1));
    [result[i],result[j]] = [result[j],result[i]];
  }
  return result;
}

function sortList() {
  $("sort-list").innerHTML = ordering.map((item,index) => `<li><div class="sort-row"><span>${serie[item]}</span><span>
    <button data-from="${index}" data-step="-1" aria-label="Subir ${serie[item]}" ${index===0?"disabled":""}>Subir</button>
    <button data-from="${index}" data-step="1" aria-label="Bajar ${serie[item]}" ${index===ordering.length-1?"disabled":""}>Bajar</button>
    </span></div></li>`).join("");
}
function sortPage() {
  screen.innerHTML += `<section class="block"><h2>De menor grado a la fusión parcial</h2>
  <p>Usa Subir y Bajar para colocar los materiales. Comprueba el resultado cuando hayas ordenado los seis.</p>
  <ol id="sort-list" class="sort"></ol><p id="sort-change" role="status"></p>
  <div class="actions"><button class="primary" id="check-sort">Comprobar orden</button><button id="shuffle">Mezclar</button></div>
  <div id="sort-feedback" role="status"></div>
  <details><summary>Ver solución razonada</summary>${flow(serie)}<p>Al aumentar el grado metamórfico se pasa de pizarra a filita, esquisto y gneis. La anatexia implica fusión parcial. El granito se forma al cristalizar ese fundido.</p></details></section>`;
  sortList();
  $("sort-list").onclick = event => {
    const move = event.target.closest("button[data-from]");
    if (!move) return;
    const start = Number(move.dataset.from);
    const end = start + Number(move.dataset.step);
    [ordering[start],ordering[end]] = [ordering[end],ordering[start]];
    sortList();
    const same = $("sort-list").querySelector(`[data-from="${end}"][data-step="${move.dataset.step}"]`);
    const reverse = $("sort-list").querySelector(`[data-from="${end}"]:not([data-step="${move.dataset.step}"])`);
    (same.disabled ? reverse : same).focus();
    $("sort-feedback").textContent = "";
    $("sort-change").textContent = `${serie[ordering[end]]} está ahora en la posición ${end+1}.`;
  };
  $("check-sort").onclick = () => {
    const first = ordering.findIndex((item,index) => item !== index);
    if (first < 0) {
      state.sorted = true;
      save();
    }
    const feedback = $("sort-feedback");
    feedback.className = "feedback";
    feedback.textContent = first < 0
      ? "Serie correcta. El granito es ígneo porque cristaliza a partir del fundido de anatexia."
      : `Revisa la posición ${first+1}. ${["Empieza por el material de partida, antes del metamorfismo.","Busca la roca con planos finos que aparece al grado más bajo.","Entre pizarra y esquisto aparece una roca de brillo sedoso.","Busca la roca con foliación marcada y micas visibles.","Antes de la fusión aparece la roca de bandas claras y oscuras.","La última posición corresponde al producto que cristaliza del fundido."][first]}`;
  };
  $("shuffle").onclick = () => {
    const newOrder = shuffled(ordering);
    if (newOrder.every((item,index) => item === index) || newOrder.every((item,index) => item === ordering[index])) {
      newOrder.push(newOrder.shift());
    }
    ordering = newOrder;
    sortList();
    $("sort-feedback").textContent = "";
    $("sort-change").textContent = "Serie mezclada.";
  };
}

const reviewIds = () => banco.map((_,i)=>i).filter(i=>state.answers[i] === false);
function quizMenu() {
  screen.innerHTML += `<section class="block"><h2>Elige un recorrido</h2><p>Elige un tema o un apartado. Responde a las preguntas y comprueba al momento por qué cada respuesta es correcta o incorrecta. Puedes volver a intentar las preguntas que hayas fallado.</p>
  <label for="topic">Preguntas de</label> <select id="topic"><option value="">Los dos temas</option><option value="14">Todo el tema 14</option><option value="15">Todo el tema 15</option>${modulos.map(lesson=>`<option value="${lesson.id}">${lesson.titulo}</option>`).join("")}</select>
  <div class="actions"><button id="start" class="primary">Empezar práctica</button><button id="mistakes" ${reviewIds().length ? "" : "disabled"}>Repetir fallos (${reviewIds().length})</button></div></section><div id="question"></div>`;
  $("start").onclick = () => {
    const topic = $("topic").value;
    quizTopic = topic;
    begin(banco.map((question,index) => {
      const group = externos.some(lesson=>lesson.id===question[0]) ? "14" : "15";
      return !topic || topic===question[0] || topic===group ? index : -1;
    }).filter(index=>index>=0));
  };
  $("mistakes").onclick = () => begin(reviewIds());
  $("topic").value = quizTopic;
  if (quiz) showQuestion(false);
}
function begin(ids) {
  quiz = {ids:shuffled(ids), at:0, score:0, choice:null};
  showQuestion(true);
}
function showQuestion(focus) {
  const target = $("question");
  if (quiz.at === quiz.ids.length) {
    target.innerHTML = `<section class="block"><h2 tabindex="-1">Resultado</h2><p>${quiz.score} de ${quiz.ids.length} respuestas correctas en esta práctica.</p><p>${reviewIds().length} preguntas pendientes en el repaso de fallos.</p>${button("repaso","Ver progreso")}</section>`;
    if (focus) target.querySelector("h2").focus();
    return;
  }
  const id = quiz.ids[quiz.at];
  const [topic,prompt,correct,options,reasons] = banco[id];
  const answered = quiz.choice !== null;
  target.innerHTML = `<section class="block"><h2 tabindex="-1">Pregunta ${quiz.at+1} de ${quiz.ids.length}</h2>
  <form id="answer"><fieldset ${answered?"disabled":""}><legend>${prompt}</legend>
  ${options.map((option,i)=>`<label class="choice"><input type="radio" name="choice" value="${i}" required ${quiz.choice===i?"checked":""}> ${option}</label>`).join("")}
  </fieldset>${answered?"":'<button class="primary">Comprobar respuesta</button>'}</form>
  ${answered ? `<div class="feedback" tabindex="-1" id="answer-feedback"><h3>${quiz.choice===correct?"Correcto":"Revisa esta pista"}</h3>
  <p>${reasons[quiz.choice]}</p>${quiz.choice!==correct?`<p><strong>Respuesta correcta: ${options[correct]}.</strong> ${reasons[correct]}</p>`:""}
  <a href="#${topic}">Volver a la explicación</a></div>
  <button class="primary" id="next-question">${quiz.at+1===quiz.ids.length?"Ver resultado":"Siguiente pregunta"}</button>`:""}</section>`;
  $("answer").onsubmit = event => {
    event.preventDefault();
    if (quiz.choice !== null) return;
    const value = new FormData(event.target).get("choice");
    if (value === null) return;
    quiz.choice = Number(value);
    const right = quiz.choice === correct;
    if (right) quiz.score++;
    state.answers[id] = right;
    save();
    $("mistakes").textContent = `Repetir fallos (${reviewIds().length})`;
    $("mistakes").disabled = reviewIds().length === 0;
    showQuestion(false);
    $("answer-feedback").focus();
  };
  if (answered) $("next-question").onclick = () => {quiz.at++; quiz.choice=null; showQuestion(true);};
  if (focus) target.querySelector("h2").focus();
}
function reviewPage() {
  const correct = Object.values(state.answers).filter(Boolean).length;
  screen.innerHTML += `<section class="block"><h2>Tu progreso</h2>
  <p>${correct} de ${banco.length} preguntas acertadas en el último intento de cada una.</p>
  <progress aria-label="Preguntas acertadas" max="${banco.length}" value="${correct}"></progress>
  <p>${state.done.length} de ${respuestas.length+identificaciones.length} actividades de examen revisadas.</p>
  <p>Serie regional: ${state.sorted?"completada":"pendiente"}. ${persistent?"El progreso se guarda en este navegador si el almacenamiento está disponible.":"El progreso se conserva durante esta sesión."}</p>
  <button class="primary" id="review-session" ${reviewIds().length?"":"disabled"}>Repasar fallos (${reviewIds().length})</button></section>
  <section class="block"><h2>Repaso rápido</h2><p>Di la idea principal en voz alta y abre la tarjeta para comprobarla.</p>
  ${modulos.map(lesson=>`<details class="card"><summary>${lesson.titulo}</summary><p>${lesson.idea}</p>${button(lesson.id,"Abrir apartado")}</details>`).join("")}</section>`;
  $("review-session").onclick = () => {
    beginReview = true;
    location.hash = "practica";
  };
}

const drafts = new Map();
function renderChallenges() {
  screen.innerHTML += `<p>Elige un tema y una actividad. Puedes entrenar con ayuda o resolver el enunciado completo.</p>
  <div class="challenge-controls">
    <label for="challenge-topic">Tema <select id="challenge-topic"><option value="14">Tema 14</option><option value="15">Tema 15</option></select></label>
    <label for="challenge-mode">Cómo practicar <select id="challenge-mode"><option value="guided">Práctica guiada</option><option value="exam">Como en el examen</option></select></label>
    <label for="challenge-choice">Actividad <select id="challenge-choice"></select></label>
  </div>
  <div id="challenges"></div>
  <div class="actions">${button("simulacro","Simulacro de los dos temas",true)} ${button("practica","Autoevaluación")} ${button("serie","Ordenar la serie regional")}</div>`;
  const choices = $("challenge-choice");
  function refresh() {
    renderChallengeList(choices.value,$("challenge-mode").value==="guided");
  }
  function selectTopic() {
    const topic = Number($("challenge-topic").value);
    const items = identificaciones.filter(item=>item.tema===topic).map(item=>new Option(item.titulo,item.id));
    const written = respuestas.flatMap(([number,,title],i)=>number===topic?[new Option(title,"written-"+i)]:[]);
    choices.replaceChildren(...items,...written);
    refresh();
  }
  $("challenge-topic").onchange = selectTopic;
  $("challenge-mode").onchange = refresh;
  choices.onchange = refresh;
  selectTopic();
}
function markChallenge(id,completed) {
  if (completed && !state.done.includes(id)) state.done.push(id);
  if (!completed) state.done = state.done.filter(item=>item!==id);
  save();
}
function renderChallengeList(id,guided) {
  const labels = element => element.partes.map(([label],i)=>`<div class="match-row"><label for="${element.id}-${i}">${element.capas || element.perfiles ? label.split(" · ")[0] : label}</label><select id="${element.id}-${i}" required>
    <option value="">Elige una opción</option>${element.opciones.map(option=>`<option>${option}</option>`).join("")}</select></div>`).join("");
  const illustration = item => {
    const id = item.id;
    if (item.imagen) {
      const [file,alt,page] = item.imagen;
      if (item.marcas) return `<figure class="book-figure photo-exercise"><div class="numbered-photo">
        <img src="./${file}.webp" alt="${alt}" loading="lazy">
        ${item.marcas.map(([n,x,y])=>`<span aria-hidden="true" style="--x:${x};--y:${y}">${n}</span>`).join("")}</div>
        <figcaption>Fotografía del libro, p. ${page}.</figcaption></figure>`;
      return `<figure class="book-figure"><a href="./${file}.webp" aria-label="Ampliar imagen del libro" target="_blank" rel="noopener"><img src="./${file}.webp" alt="${alt}" loading="lazy"></a><figcaption>Actividad final del libro, p. ${page}.</figcaption></figure>`;
    }
    const profile = (name,layers) => `<figure><ol class="soil-profile soil-variant" aria-label="${name}">${layers.map(([mark,detail])=>`<li><strong>${mark}</strong><span class="sr-only">${detail}</span></li>`).join("")}</ol><figcaption>${name}</figcaption></figure>`;
    if (item.capas) return profile("Perfil 2 · De arriba abajo",item.capas);
    if (item.perfiles) return `<div class="grid">${item.perfiles.map(view=>profile(view.nombre,view.capas)).join("")}</div>`;
    if (id==="volcan") return `<figure><div class="volcano labeled" aria-hidden="true"><span class="cone"></span><span class="vent"></span><span class="chamber"></span><b>A</b><b>B</b><b>C</b><b>D</b></div><figcaption>Corte esquemático. El caso E se describe debajo.</figcaption></figure>`;
    if (id==="clastos") return `<div class="grid sample-grid"><figure><div class="clast-box rounded" aria-hidden="true">${"<span></span>".repeat(16)}</div><figcaption>Muestra A · clastos pequeños y redondeados.</figcaption></figure><figure><div class="clast-box angular" aria-hidden="true">${"<span></span>".repeat(6)}</div><figcaption>Muestra B · clastos grandes y angulosos.</figcaption></figure></div>`;
    if (id==="perfil") return `<figure><ol class="soil-profile" aria-label="Perfil del suelo de arriba abajo"><li>Capa 1</li><li>Capa 2</li><li>Capa 3</li><li>Capa 4</li></ol><figcaption>Corte esquemático del suelo, desde la superficie hasta la roca de partida.</figcaption></figure>`;
    return "";
  };
  const selected = identificaciones.find(item=>item.id===id);
  const index = selected ? -1 : Number(id.slice("written-".length));
  if (guided) {
    renderGuidedChallenge(selected,index,illustration);
    return;
  }
  $("challenges").innerHTML = `
  ${identificaciones.filter(item=>item.id===id).map(item=>`<section class="block"><h3>${item.titulo}</h3><p>${item.descripcion}</p>${illustration(item)}<form data-match="${item.id}">${labels(item)}
  <button class="primary">Comprobar correspondencias</button></form><div id="feedback-${item.id}" aria-live="polite"></div></section>`).join("")}
  ${selected?"":'<h2 class="section-title">Escribe y justifica</h2>'}
  ${respuestas.map(([number,lesson,title,prompt,answer,check],i)=> i===index ? `<section class="block written">
  <div class="block-head"><h3>Tema ${number} · ${title}</h3>${speaker("Escuchar la actividad "+title,"data-read")}</div>
  <p id="prompt-${i}">${prompt}</p><label for="written-${i}">Tu respuesta</label>
  <textarea id="written-${i}" data-draft="${i}" aria-describedby="prompt-${i}" rows="3"></textarea>
  <button type="button" class="primary" id="exam-written-check">Ver corrección</button>
  <div id="exam-written-review" hidden><h3>Respuesta modelo y criterios</h3><p>${answer}</p><p><strong>Comprueba:</strong> ${check}</p>
  <label><input type="checkbox" data-complete="written-${i}" ${state.done.includes("written-"+i)?"checked":""}> He comparado mi respuesta</label></div>
  <p><a href="#${lesson}">Consultar la explicación</a></p></section>` : "").join("")}`;
  for (const textarea of $("challenges").querySelectorAll("[data-draft]")) {
    textarea.value = drafts.get(textarea.dataset.draft) || "";
    textarea.oninput = () => drafts.set(textarea.dataset.draft,textarea.value);
    $("exam-written-check").onclick = () => {
      if (!textarea.value.trim()) {
        textarea.setCustomValidity("Escribe tu respuesta antes de ver la corrección.");
        textarea.reportValidity();
        textarea.focus();
        textarea.setCustomValidity("");
        return;
      }
      $("exam-written-review").hidden = false;
      $("exam-written-review").setAttribute("tabindex","-1");
      $("exam-written-review").focus();
    };
  }
  for (const check of $("challenges").querySelectorAll("[data-complete]")) {
    check.onchange = () => markChallenge(check.dataset.complete,check.checked);
  }
  for (const form of $("challenges").querySelectorAll("[data-match]")) {
    form.onsubmit = event => {
      event.preventDefault();
      const item = identificaciones.find(challenge=>challenge.id===form.dataset.match);
      const rows = item.partes.map(([label,correct,why],i)=> {
        const choice = $(item.id+"-"+i).value;
        return {label,correct,why,right: choice===correct};
      });
      const feedback = $("feedback-"+item.id);
      feedback.className = "feedback";
      const score = rows.filter(row=>row.right).length;
      feedback.innerHTML = `<h3>${score} de ${rows.length} correctas</h3><ul>${rows.map(row=>`<li><strong>${row.right?"Correcto":"Revisa"} · ${row.label}.</strong> ${row.correct}. ${row.why}</li>`).join("")}</ul>`;
      if (item.final) {
        const note = document.createElement("p");
        note.textContent = item.final;
        feedback.append(note);
      }
      if (score===rows.length) markChallenge(item.id,true);
    };
  }
}

function renderGuidedChallenge(item,index,illustration) {
  const area = $("challenges");
  const written = item ? null : respuestas[index];
  const title = item?.titulo || written[2];
  const [caseText,solution] = ejemplosGuiados[item ? temasIdentificacion[item.id] : written[1]];
  const steps = item?.partes || consignasEscritas[index];
  const activityId = item?.id || "written-"+index;
  let step = 0;
  let allCorrect = true;

  function showExample(focus=false) {
    area.innerHTML = `<section class="block"><h2 tabindex="-1">${title}</h2>
    <div class="notice"><h3>Ejemplo resuelto</h3><p>${caseText}</p><p><strong>Respuesta y pista.</strong> ${solution}</p></div>
    <button class="primary" id="guided-start">Empezar actividad</button></section>`;
    $("guided-start").onclick = () => showStep();
    if (focus) area.querySelector("h2").focus();
  }

  function showStep() {
    stopSpeech();
    const current = steps[step];
    const prompt = item ? current[0] : current;
    const label = item?.capas || item?.perfiles ? "Identifica " + prompt.split(" · ")[0] + "." : prompt;
    area.innerHTML = `<section class="block">
      <div class="block-head"><h2 tabindex="-1">${title}</h2>${speaker("Escuchar el paso","data-read")}</div>
      <p><strong>Paso ${step+1} de ${steps.length}</strong></p>
      ${item ? illustration(item) : `<p>${contextosEscritos[index]}</p>`}
      ${item?.capas || item?.perfiles ? `<details><summary>Ver una pista</summary><p>${prompt.split(" · ")[1]}</p></details>` : ""}
      <form id="guided-form"><p id="guided-prompt"><strong>${label}</strong></p>
      ${item ? `<label for="guided-answer">Elige una respuesta</label>
        <select id="guided-answer" aria-describedby="guided-prompt" required><option value="">Selecciona una opción</option>${item.opciones.map(option=>`<option>${option}</option>`).join("")}</select>`
        : '<label for="guided-answer">Escribe tu respuesta</label><textarea id="guided-answer" rows="3" aria-describedby="guided-prompt" required></textarea>'}
      <div class="actions"><button class="primary">${item?"Comprobar respuesta":"Guardar y continuar"}</button></div></form>
      <div id="guided-feedback" tabindex="-1"></div>
    </section>`;
    if (!item) {
      const key = activityId+"-step-"+step;
      $("guided-answer").value = drafts.get(key) || "";
      $("guided-answer").oninput = event => drafts.set(key,event.target.value);
    }
    $("guided-form").onsubmit = event => {
      event.preventDefault();
      const field = $("guided-answer");
      if (!field.value.trim()) { field.focus(); return; }
      if (!item) { advance(); return; }
      const right = field.value === current[1];
      allCorrect &&= right;
      field.disabled = true;
      event.submitter.disabled = true;
      $("guided-feedback").className = "feedback";
      $("guided-feedback").innerHTML = `<h3>${right?"Correcto":"Revisa esta pista"}</h3><p><strong>${current[1]}.</strong> ${current[2]}</p>
        <button class="primary" id="guided-next">${step+1===steps.length?"Ver resultado":"Siguiente paso"}</button>`;
      $("guided-feedback").focus();
      $("guided-next").onclick = advance;
    };
    area.querySelector("h2").focus();
  }

  function advance() {
    if (++step < steps.length) { showStep(); return; }
    if (item && allCorrect) markChallenge(activityId,true);
    area.innerHTML = `<section class="block"><h2 tabindex="-1">Actividad completada</h2>
      ${item ? `<p>${allCorrect?"Has acertado todos los pasos.":"Puedes repetir la actividad para repasar los pasos que fallaste."}</p>${item.final?`<p>${item.final}</p>`:""}`
      : `<h3>Tus respuestas</h3><ol id="guided-replies"></ol><h3>Respuesta modelo</h3><p>${written[4]}</p><p><strong>Comprueba.</strong> ${written[5]}</p>
        <label><input type="checkbox" id="guided-reviewed" ${state.done.includes(activityId)?"checked":""}> He comparado mis respuestas</label>`}
      <div class="actions"><button id="guided-repeat">Volver al ejemplo</button><button class="primary" id="guided-choose">Elegir otra actividad</button></div></section>`;
    if (!item) {
      for (const [i,prompt] of steps.entries()) {
        const li = document.createElement("li");
        li.textContent = prompt+" "+(drafts.get(activityId+"-step-"+i) || "");
        $("guided-replies").append(li);
      }
      $("guided-reviewed").onchange = event => markChallenge(activityId,event.target.checked);
    }
    $("guided-repeat").onclick = () => { step=0; allCorrect=true; showExample(true); };
    $("guided-choose").onclick = () => $("challenge-choice").focus();
    area.querySelector("h2").focus();
  }
  showExample();
}

const mockDraft = new Map();
let mockSubmitted = false;
function renderMock() {
  const photo = identificaciones.find(item=>item.id==="perfil-foto");
  const numbered = `<figure class="book-figure photo-exercise"><div class="numbered-photo">
    <img src="./14-podsol.webp" alt="${photo.imagen[1]}">
    ${photo.marcas.map(([number,x,y])=>`<span aria-hidden="true" style="--x:${x};--y:${y}">${number}</span>`).join("")}</div>
    <figcaption>Perfil del suelo. Libro, p. 271.</figcaption></figure>`;
  screen.innerHTML += `<p>Ocho preguntas de los temas 14 y 15. Responde con los términos del libro. La corrección aparece al entregar.</p>
    <form id="mock-form"><ol class="mock-list">${preguntasSimulacro.map(({tema,pregunta,foto,campos},i)=>`<li class="block">
    <section><div class="block-head"><h2>Pregunta ${i+1} · Tema ${tema}</h2>${speaker("Escuchar la pregunta "+(i+1),"data-read")}</div>
    <p id="mock-prompt-${i}">${pregunta}</p>${foto ? numbered : ""}
    ${(campos||[]).map(([label,options],j)=>`<div class="match-row"><label for="mock-${i}-${j}">${label}</label><select data-mock id="mock-${i}-${j}">
    <option value="">Elige una opción</option>${options.map(option=>`<option>${option}</option>`).join("")}</select></div>`).join("")}
    <label for="mock-written-${i}">${foto?"Tu justificación":"Tu respuesta"}</label><textarea data-mock id="mock-written-${i}" aria-describedby="mock-prompt-${i}" rows="3"></textarea>
    </section></li>`).join("")}</ol><button class="primary">Entregar y ver la corrección</button></form><div id="mock-result"></div>`;
  const form = $("mock-form");
  for (const field of form.querySelectorAll("[data-mock]")) {
    field.value = mockDraft.get(field.id) || "";
    field.readOnly = mockSubmitted;
    if (field.tagName==="SELECT") field.disabled = mockSubmitted;
    field.addEventListener("input",()=>mockDraft.set(field.id,field.value));
  }
  function showResult(focus) {
    form.querySelector("button[type=submit], :scope > button").hidden = true;
    $("mock-result").innerHTML = `<section class="notice"><h2 tabindex="-1">Corrección del simulacro</h2>
    <p>Compara tus respuestas escritas con el modelo. En la imagen se comprueba también cada horizonte que elegiste.</p></section>
    <ol class="mock-list">${preguntasSimulacro.map(({modelo,campos},i)=>`<li class="block"><h3>Pregunta ${i+1}</h3>
    ${(campos||[]).map(([label,,answer],j)=>`<p><strong>${label} · ${mockDraft.get("mock-"+i+"-"+j)===answer?"Correcto":"Revisa"}.</strong> ${answer}.</p>`).join("")}
    <p><strong>Tu respuesta</strong></p><p id="mock-reply-${i}"></p><p><strong>Respuesta modelo</strong></p><p>${modelo}</p></li>`).join("")}</ol>
    <button id="mock-restart">Hacer otro intento</button>`;
    preguntasSimulacro.forEach((_,i)=>{ $("mock-reply-"+i).textContent=mockDraft.get("mock-written-"+i)?.trim() || "Sin respuesta escrita."; });
    $("mock-restart").onclick = () => { mockDraft.clear(); mockSubmitted=false; render(true); };
    if (focus) $("mock-result").querySelector("h2").focus();
  }
  form.onsubmit = event => {
    event.preventDefault();
    if (mockSubmitted) return;
    mockSubmitted = true;
    for (const field of form.querySelectorAll("[data-mock]")) {
      mockDraft.set(field.id,field.value);
      if (field.tagName==="SELECT") field.disabled = true;
      else field.readOnly = true;
    }
    showResult(true);
  };
  if (mockSubmitted) showResult(false);
}

let beginReview = false;
const titles = {inicio:"Procesos geológicos",externos:"Procesos geológicos externos",internos:"Procesos geológicos internos",retos:"Actividades de examen",simulacro:"Simulacro de examen",examen:"Qué entra en el examen",serie:"Ordena la serie regional",practica:"Autoevaluación",repaso:"Repaso y progreso"};
function render(focus) {
  stopSpeech();
  const hash = location.hash.slice(1);
  const lesson = modulos.find(item => item.id === hash);
  const page = lesson || Object.hasOwn(titles,hash) ? hash : "inicio";
  const title = lesson?.titulo || titles[page];
  for (const link of document.querySelectorAll("nav a")) {
    const group = lesson && (lesson.tema === 14 ? "externos" : "internos");
    if (link.hash === "#" + (group || page)) link.setAttribute("aria-current","page");
    else link.removeAttribute("aria-current");
  }
  document.body.classList.toggle("cover",page === "inicio");
  screen.innerHTML = page === "inicio" ? `<h1 class="sr-only" tabindex="-1">Procesos geológicos · Temas 14 y 15</h1>
  <div class="cover-choices">
  <a class="cover-link external" href="#externos">Tema 14</a>
  <a class="cover-link internal" href="#internos">Tema 15</a>
  </div>` : `<h1 tabindex="-1">${title}</h1>`;
  if (page === "examen") screen.innerHTML += `<h2>Tema 14 · Procesos externos</h2>${examExternal}<h2 class="section-title">Tema 15 · Procesos internos</h2>${exam}`;
  if (page === "externos" || page === "internos") {
    const group = page === "externos" ? externos : lecciones;
    screen.innerHTML += `<p class="kicker">Tema ${page==="externos"?14:15}</p><div class="grid">${group.map(item=>`<section class="card"><h2><a href="#${item.id}">${item.titulo}</a></h2><div class="explanation">${explanation(item.idea)}</div></section>`).join("")}</div>`;
  }
  if (page === "retos") renderChallenges();
  if (page === "simulacro") renderMock();
  if (page === "serie") sortPage();
  if (page === "practica") {
    quizMenu();
    if (beginReview && reviewIds().length) begin(reviewIds());
    beginReview = false;
  }
  if (page === "repaso") reviewPage();
  if (lesson) {
    const group = lesson.tema === 14 ? externos : lecciones;
    const next = group[group.indexOf(lesson)+1];
    screen.innerHTML += lessonBody(lesson,true) + `<div class="actions">
    <button class="primary" id="lesson-quiz">Practicar este apartado</button>${next?button(next.id,"Siguiente apartado"):""}</div>`;
    $("lesson-quiz").onclick = () => {
      quizTopic = page;
      quiz = {ids:shuffled(banco.map((q,i)=>q[0]===page?i:-1).filter(i=>i>=0)),at:0,score:0,choice:null};
      location.hash = "practica";
    };
  }
  if (focus) {
    const heading = screen.querySelector("h1");
    if (window.matchMedia("(max-width: 740px)").matches) heading.focus();
    else { window.scrollTo(0,0); heading.focus({preventScroll:true}); }
  }
}
window.addEventListener("hashchange",()=>render(true));
render(false);
