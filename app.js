"use strict";

const modulos = [...externos,...lecciones];
const banco = [...preguntas,...preguntasExternos];
const $ = id => document.getElementById(id);
const key = "tema15-estudio-v1";
const defaults = {done:[],seen:[], answers:{}, sorted:false, size:"100", contrast:false, rate:"1", voice:""};
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
    .filter(node => node.innerText.trim() && !node.closest("[hidden]") && !node.querySelector("p,li"))
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
<section class="block"><h2>Material de referencia</h2><p>Tema 15 del libro, pp. 287–307. Las lecciones indican las páginas de estudio. La guía contrasta el audio recuperado del tema 15 con el PDF. La prioridad exacta de «criptocristalina» se oye de forma ambigua; puedes consultar su definición en la lección y en la p. 292.</p></section>`;

const bookImages = {
  meteorizacion: [["14-mecanica","Ejemplos de meteorización mecánica","Cuatro mecanismos ilustrados con fotografías de rocas y paisajes.","268"],["14-raices","Raíces y meteorización","Raíces de árbol que ocupan y ensanchan grietas de una roca.","269"]],
  suelo: [["14-horizontes","Perfil real de un suelo","Corte vertical con vegetación y capas de diferente color sobre la roca.","270"],["14-suelos","Compara perfiles de suelo","Cuatro perfiles del libro, entre ellos el caliche y el suelo rocoso.","271"]],
  sedimentos: [["14-transporte","Cómo viajan las partículas","Esquema del libro con suspensión, flotación, disolución, reptación, saltación y rodadura.","272"],["14-depositos","Dos formas de depósito","Cantos en un cauce y barras arenosas vistas desde arriba.","273"]],
  sedimentarias: [["14-sedimentarias","Reconoce las rocas detríticas","Conglomerado, arenisca y ejemplos de partículas finas en la clasificación del libro.","274"]],
  magma: [["15-tectonica","Procesos internos y placas","Bloque diagrama de subducción, fallas transformantes y ascenso de plumas térmicas.","288"],["15-intrusiones","Plutones y diques en el subsuelo","Corte donde una masa abovedada y láminas de magma se emplazan entre rocas.","289"],["15-volcan","Corte de un volcán","Cono, conducto, cámara y colada. Contrasta esta vista con las partes de la lección.","290"]],
  igneas: [["15-enfriamiento","Dónde se forman las rocas ígneas","Corte del volcán que muestra emplazamientos superficiales y profundos.","292"],["15-igneas","Muestras de rocas ígneas","Fotografías de pumita, andesita, obsidiana, basalto, granito, diorita, sienita y gabro.","293"]],
  meta: [["15-aureola","Aureola alrededor de una intrusión","Corte donde el plutón calienta la roca encajante y la transforma a su alrededor.","297"],["15-foliacion","Minerales orientados y foliación","Esquema de la orientación de los minerales planos bajo presión.","298"],["15-metamorficas","Muestras de rocas metamórficas","Fotografías de rocas foliadas y de rocas con estructura granoblástica.","299"]],
  ciclo: [["15-ciclo","Ciclo de las rocas en el libro","Diagrama de los caminos entre magma, rocas y sedimentos.","301"]],
  esfuerzos: [["15-pliegues","Elementos del pliegue","Corte con capas plegadas, núcleo, charnela, flancos y plano axial.","302"],["15-fallas","Elementos y tipos de falla","Bloques de roca desplazados a lo largo de un plano de fractura.","303"]]
};
function figures(lesson) {
  return `<div class="book-figures">${(bookImages[lesson.id] || []).map(([file,title,alt,page])=>`<figure class="book-figure"><a href="./${file}.webp" aria-label="Ampliar: ${title}" target="_blank" rel="noopener">
    <img src="./${file}.webp" alt="${alt}" loading="lazy"></a><figcaption><strong>${title}.</strong> Libro, p. ${page}.</figcaption></figure>`).join("")}</div>`;
}
function lessonBody(lesson,readButtons=false) {
  const isComparison = lesson.id === "esfuerzos";
  const diagram = isComparison
    ? `<ul>${lesson.esquema.map(item => `<li>${item}</li>`).join("")}</ul>`
    : flow(lesson.esquema);
  return `<p class="muted">Libro · pp. ${lesson.paginas}</p>
  <div class="notice"><h2>Idea principal</h2><p>${lesson.idea}</p></div>
  <section class="block"><h2>${isComparison ? "Relaciones clave" : "Esquema"}</h2>${diagram}${visual[lesson.id] || ""}</section>
  ${readButtons ? figures(lesson) : ""}
  ${lesson.bloques.map(([title,body]) => `<section class="block"><div class="block-head"><h2>${title}</h2>${readButtons?`<button data-read aria-label="Escuchar: ${title}">Escuchar</button>`:""}</div><p>${body}</p></section>`).join("")}
  <section class="block"><h2>Ejemplo razonado</h2><p>${lesson.ejemplo}</p></section>`;
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
  screen.innerHTML += `<section class="block"><h2>Elige un recorrido</h2><p>Recibirás una explicación para la opción que elijas.</p>
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
  <p>${state.seen.length} de ${modulos.length} lecciones marcadas como estudiadas. ${correct} de ${banco.length} preguntas acertadas en el último intento de cada una.</p>
  <progress aria-label="Preguntas acertadas" max="${banco.length}" value="${correct}"></progress>
  <p>${state.done.length} de ${respuestas.length+identificaciones.length} actividades de examen revisadas.</p>
  <p>Serie regional: ${state.sorted?"completada":"pendiente"}. ${persistent?"El progreso se guarda en este navegador si el almacenamiento está disponible.":"El progreso se conserva durante esta sesión."}</p>
  <button class="primary" id="review-session" ${reviewIds().length?"":"disabled"}>Repasar fallos (${reviewIds().length})</button></section>
  <section class="block"><h2>Repaso rápido</h2><p>Di la idea principal en voz alta y abre la tarjeta para comprobarla.</p>
  ${modulos.map(lesson=>`<details class="card"><summary>${lesson.titulo}</summary><p>${lesson.idea}</p>${button(lesson.id,"Abrir lección")}</details>`).join("")}</section>`;
  $("review-session").onclick = () => {
    beginReview = true;
    location.hash = "practica";
  };
}

const drafts = new Map();
function renderChallenges() {
  screen.innerHTML += `<p>Practica los formatos que describió la profesora. En una respuesta escrita, intenta justificarla antes de descubrir el modelo.</p>
  <div class="actions">${button("practica","Preguntas de opción múltiple",true)} ${button("serie","Ordenar la serie regional")}</div>
  <label for="challenge-topic">Ver actividades de</label>
  <select id="challenge-topic"><option value="">Ambos temas</option><option value="14">Tema 14</option><option value="15">Tema 15</option></select>
  <div id="challenges"></div>`;
  $("challenge-topic").onchange = () => renderChallengeList($("challenge-topic").value);
  renderChallengeList("");
}
function markChallenge(id,completed) {
  if (completed && !state.done.includes(id)) state.done.push(id);
  if (!completed) state.done = state.done.filter(item=>item!==id);
  save();
}
function renderChallengeList(theme) {
  const match = number => !theme || String(number) === theme;
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
  $("challenges").innerHTML = `<h2 class="section-title">Identifica en un esquema o a partir de pistas</h2>
  ${identificaciones.filter(item=>match(item.tema)).map(item=>`<section class="block"><h3>${item.titulo}</h3><p>${item.descripcion}</p>${illustration(item)}${item.capas || item.perfiles ? `<details><summary>Ver pistas del dibujo</summary><ul>${item.partes.map(([label])=>`<li>${label}</li>`).join("")}</ul></details>` : ""}<form data-match="${item.id}">${labels(item)}
  <button class="primary">Comprobar correspondencias</button></form><div id="feedback-${item.id}" aria-live="polite"></div></section>`).join("")}
  <h2 class="section-title">Escribe y justifica</h2>
  ${respuestas.map(([number,lesson,title,prompt,answer,check],i)=> match(number) ? `<section class="block written">
  <div class="block-head"><h3>Tema ${number} · ${title}</h3><button data-read aria-label="Escuchar la actividad ${title}">Escuchar</button></div>
  <p id="prompt-${i}">${prompt}</p><label for="written-${i}">Tu respuesta</label>
  <textarea id="written-${i}" data-draft="${i}" aria-describedby="prompt-${i}" rows="3"></textarea>
  <details><summary>Ver respuesta modelo y criterios</summary><p>${answer}</p><p><strong>Comprueba:</strong> ${check}</p>
  <label><input type="checkbox" data-complete="written-${i}" ${state.done.includes("written-"+i)?"checked":""}> He comparado mi respuesta</label></details>
  <p><a href="#${lesson}">Consultar la explicación</a></p></section>` : "").join("")}`;
  for (const textarea of $("challenges").querySelectorAll("[data-draft]")) {
    textarea.value = drafts.get(textarea.dataset.draft) || "";
    textarea.oninput = () => drafts.set(textarea.dataset.draft,textarea.value);
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

let beginReview = false;
const titles = {inicio:"Procesos geológicos",externos:"Procesos geológicos externos",internos:"Procesos geológicos internos",retos:"Actividades de examen",examen:"Qué entra en el examen",serie:"Ordena la serie regional",practica:"Autoevaluación",repaso:"Repaso y progreso"};
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
    screen.innerHTML += `<p class="kicker">Tema ${page==="externos"?14:15}</p><div class="grid">${group.map(item=>`<section class="card"><h3><a href="#${item.id}">${item.titulo}</a></h3><p>${item.idea}</p></section>`).join("")}</div>`;
  }
  if (page === "retos") renderChallenges();
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
    <button id="mark" aria-pressed="${state.seen.includes(page)}">${state.seen.includes(page)?"Lección estudiada":"Marcar como estudiada"}</button>
    <button class="primary" id="lesson-quiz">Practicar esta lección</button>${next?button(next.id,"Siguiente lección"):""}</div>`;
    $("mark").onclick = event => {
      const wasSeen = state.seen.includes(page);
      state.seen = wasSeen ? state.seen.filter(id=>id!==page) : [...state.seen,page];
      save();
      event.target.textContent = wasSeen ? "Marcar como estudiada" : "Lección estudiada";
      event.target.setAttribute("aria-pressed",String(!wasSeen));
    };
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
