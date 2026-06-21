const PARTS = [
  {
    id: "frontal",
    label: "Frontal Lobe",
    color: "#38e8d3",
    group: "Cerebral cortex",
    icon: "FR",
    summary: "Executive control, voluntary movement, speech production, inhibition, and personality.",
    quick: "Helps you choose, plan, stop impulses, move the body, and turn intent into behavior.",
    studentCue: "If the question says planning, judgment, inhibition, personality, or motor strip, start here.",
    clinical: "Damage can change impulse control, mood, social judgment, motor strength, or expressive language.",
    connections: ["Basal ganglia loops", "Motor cortex", "Broca network", "Limbic system"],
    tags: ["planning", "motor", "personality", "speech"],
    deep: {
      anatomy: "The frontal lobe sits anterior to the central sulcus. Its prefrontal cortex supports goals and judgment, while the precentral gyrus contains primary motor cortex.",
      physiology: "Frontal networks maintain working memory, choose actions, inhibit competing responses, and coordinate movement through corticospinal and basal ganglia circuits.",
      psychology: "For psychology students, the frontal lobe is a bridge between cognition and behavior: attention, reward, inhibition, and social decision-making all meet here.",
      medical: "Dominant inferior frontal injury can produce Broca aphasia. Motor cortex lesions cause contralateral weakness. Orbitofrontal injury may produce disinhibition.",
      pathway: ["Goal", "Prefrontal selection", "Motor planning", "Action or inhibition"]
    }
  },
  {
    id: "parietal",
    label: "Parietal Lobe",
    color: "#f0c86a",
    group: "Cerebral cortex",
    icon: "PA",
    summary: "Touch, body map, spatial attention, sensory integration, and calculation.",
    quick: "Builds a live map of the body and nearby space.",
    studentCue: "Think somatosensory cortex, neglect, right-left orientation, and spatial awareness.",
    clinical: "Lesions can cause sensory loss, neglect, apraxia, or difficulty with calculation and body orientation.",
    connections: ["Somatosensory cortex", "Visual association cortex", "Premotor cortex", "Thalamus"],
    tags: ["touch", "space", "attention", "body map"],
    deep: {
      anatomy: "The parietal lobe lies behind the central sulcus. The postcentral gyrus is the primary somatosensory cortex, arranged as a sensory homunculus.",
      physiology: "It combines tactile, proprioceptive, vestibular, and visual signals so the brain can locate the body and guide movement.",
      psychology: "Spatial attention and body ownership depend heavily on parietal networks, especially when sensory inputs must be merged into one coherent scene.",
      medical: "Right inferior parietal injury can cause hemispatial neglect. Dominant parietal injury may contribute to Gerstmann-like findings.",
      pathway: ["Touch receptor", "Thalamus", "Postcentral gyrus", "Body-space map"]
    }
  },
  {
    id: "temporal",
    label: "Temporal Lobe",
    color: "#f062b4",
    group: "Cerebral cortex",
    icon: "TE",
    summary: "Hearing, language comprehension, object recognition, emotion, and memory entry.",
    quick: "Turns sound into meaning and helps memories become usable stories.",
    studentCue: "Auditory cortex, Wernicke area, recognition, seizures with auras, and memory links.",
    clinical: "Temporal dysfunction may affect comprehension, recognition, emotional salience, or seizure symptoms.",
    connections: ["Auditory cortex", "Hippocampus", "Amygdala", "Wernicke network"],
    tags: ["hearing", "language", "memory", "recognition"],
    deep: {
      anatomy: "The temporal lobe lies below the lateral fissure. Superior temporal regions process sound, while medial temporal structures are essential for declarative memory.",
      physiology: "Temporal networks classify sounds, match objects with meaning, and coordinate with hippocampal circuits during memory formation.",
      psychology: "This lobe matters for perception, language comprehension, emotional tone, autobiographical memory, and familiarity.",
      medical: "Dominant posterior temporal injury can impair comprehension. Medial temporal epilepsy may produce deja vu, fear, smells, or rising epigastric sensations.",
      pathway: ["Sound or object", "Temporal cortex", "Meaning match", "Memory link"]
    }
  },
  {
    id: "occipital",
    label: "Occipital Lobe",
    color: "#9f8cff",
    group: "Cerebral cortex",
    icon: "OC",
    summary: "Vision, edge detection, motion, color, and early visual interpretation.",
    quick: "Receives visual signals and starts extracting shapes, contrast, color, and motion.",
    studentCue: "Visual field defects, primary visual cortex, dorsal stream, and ventral stream.",
    clinical: "Injury can cause contralateral visual field loss, cortical blindness, or visual agnosia when association areas are involved.",
    connections: ["Optic radiations", "Thalamic LGN", "Parietal dorsal stream", "Temporal ventral stream"],
    tags: ["vision", "color", "motion", "fields"],
    deep: {
      anatomy: "The occipital lobe is the posterior pole of the cerebral cortex. Primary visual cortex sits along the calcarine sulcus.",
      physiology: "Retinal signals relay through the lateral geniculate nucleus, then reach visual cortex where basic visual features are organized retinotopically.",
      psychology: "Visual perception is not a camera feed. The occipital lobe extracts features that later networks turn into location, identity, and meaning.",
      medical: "Optic radiation or visual cortex lesions produce predictable visual field deficits. Bilateral injury can cause cortical blindness.",
      pathway: ["Retina", "LGN", "V1", "Visual association cortex"]
    }
  },
  {
    id: "cerebellum",
    label: "Cerebellum",
    color: "#75e06f",
    group: "Motor coordination",
    icon: "CB",
    summary: "Coordination, timing, balance, motor learning, and prediction.",
    quick: "Compares intended movement with actual movement and tunes the difference.",
    studentCue: "Ataxia, intention tremor, dysmetria, nystagmus, posture, and motor learning.",
    clinical: "Damage can cause unsteady gait, poor coordination, slurred speech, and inaccurate reaching.",
    connections: ["Vestibular nuclei", "Motor cortex", "Pons", "Spinal cord"],
    tags: ["coordination", "balance", "timing", "learning"],
    deep: {
      anatomy: "The cerebellum sits posterior to the brainstem. It has hemispheres for limb coordination and midline vermis regions for posture and gait.",
      physiology: "It receives sensory feedback and motor plans, then refines movement timing through cerebellar nuclei and thalamocortical pathways.",
      psychology: "Beyond movement, cerebellar timing and prediction are increasingly relevant to attention, language rhythm, and cognitive sequencing.",
      medical: "Cerebellar lesions produce ipsilateral coordination deficits, dysmetria, dysdiadochokinesia, intention tremor, and ataxic gait.",
      pathway: ["Motor plan", "Cerebellar comparison", "Error correction", "Smoother movement"]
    }
  },
  {
    id: "brainstem",
    label: "Brainstem",
    color: "#ff885a",
    group: "Survival systems",
    icon: "BS",
    summary: "Breathing, arousal, autonomic control, cranial nerves, and signal relay.",
    quick: "Keeps the body alive while routing traffic between brain, spinal cord, and face.",
    studentCue: "Cranial nerves, coma, respiratory drive, reticular activating system, and long tracts.",
    clinical: "Small lesions can be high impact because motor, sensory, autonomic, and cranial nerve pathways are tightly packed.",
    connections: ["Spinal cord", "Cerebellum", "Thalamus", "Cranial nerves"],
    tags: ["breathing", "arousal", "cranial nerves", "relay"],
    deep: {
      anatomy: "The brainstem includes midbrain, pons, and medulla. It connects the cerebrum, cerebellum, and spinal cord.",
      physiology: "It houses respiratory and cardiovascular centers, ascending arousal systems, cranial nerve nuclei, and major motor and sensory tracts.",
      psychology: "Arousal, sleep-wake tone, orienting responses, and basic survival states are grounded in brainstem systems.",
      medical: "Brainstem syndromes often combine ipsilateral cranial nerve signs with contralateral body findings due to tract crossing.",
      pathway: ["Body signal", "Brainstem relay", "Thalamus or cerebellum", "Cortex response"]
    }
  },
  {
    id: "limbic",
    label: "Limbic System",
    color: "#ff5470",
    group: "Emotion + motivation",
    icon: "LI",
    summary: "Emotion, salience, reward, threat detection, and memory coloring.",
    quick: "Adds emotional value to experience and helps the brain decide what matters.",
    studentCue: "Amygdala, fear, reward, motivation, emotional memory, and autonomic response.",
    clinical: "Dysregulation can contribute to anxiety, trauma responses, addiction circuits, or mood symptoms.",
    connections: ["Amygdala", "Hippocampus", "Hypothalamus", "Prefrontal cortex"],
    tags: ["emotion", "reward", "fear", "motivation"],
    deep: {
      anatomy: "The limbic system is a network rather than one single organ. Key nodes include amygdala, hippocampus, cingulate cortex, hypothalamus, and related pathways.",
      physiology: "It tags stimuli as important, couples emotion to autonomic responses, and helps memory encode with motivational and affective context.",
      psychology: "This is core territory for affect, attachment, fear conditioning, reward learning, and stress responses.",
      medical: "Limbic circuitry is relevant to temporal lobe seizures, anxiety disorders, addiction, mood regulation, and memory-emotion interactions.",
      pathway: ["Stimulus", "Amygdala/salience", "Hypothalamus + cortex", "Body and behavior"]
    }
  },
  {
    id: "hippocampus",
    label: "Hippocampus",
    color: "#5ee1ff",
    group: "Memory system",
    icon: "HP",
    summary: "Declarative memory, context, spatial navigation, and memory consolidation.",
    quick: "Helps turn experiences into retrievable memories and maps context.",
    studentCue: "Anterograde amnesia, spatial maps, medial temporal lobe, and consolidation.",
    clinical: "Bilateral injury can severely impair formation of new declarative memories.",
    connections: ["Entorhinal cortex", "Fornix", "Temporal lobe", "Prefrontal cortex"],
    tags: ["memory", "navigation", "context", "learning"],
    deep: {
      anatomy: "The hippocampus sits in the medial temporal lobe. It connects with entorhinal cortex and limbic pathways including the fornix.",
      physiology: "It binds elements of experience into episodes, supports spatial/context maps, and helps consolidate memories into broader cortical networks.",
      psychology: "The hippocampus explains why memory is contextual: place, order, emotion, and meaning become linked into an episode.",
      medical: "Hippocampal sclerosis is associated with temporal lobe epilepsy. Bilateral medial temporal damage causes profound anterograde amnesia.",
      pathway: ["Experience", "Entorhinal input", "Hippocampal binding", "Cortical consolidation"]
    }
  },
  {
    id: "thalamus",
    label: "Thalamus",
    color: "#c7ff5a",
    group: "Relay + attention",
    icon: "TH",
    summary: "Sensory relay, alertness, attention gating, and cortical coordination.",
    quick: "Filters and routes information before much of it reaches cortex.",
    studentCue: "Relay nuclei, pain, sensation, arousal, attention, and consciousness.",
    clinical: "Thalamic lesions may cause sensory syndromes, altered arousal, pain, or attention problems.",
    connections: ["Cortex", "Basal ganglia", "Brainstem", "Sensory pathways"],
    tags: ["relay", "attention", "sensation", "arousal"],
    deep: {
      anatomy: "The thalamus is a paired deep gray matter structure flanking the third ventricle. Different nuclei connect with different cortical territories.",
      physiology: "It gates sensory, motor, and cognitive information and helps synchronize cortical networks for attention and awareness.",
      psychology: "The thalamus is useful for understanding selective attention: not every signal gets the same priority on the way to conscious processing.",
      medical: "Thalamic stroke can produce sensory loss, central pain, visual field deficits, or disturbances in consciousness depending on nuclei involved.",
      pathway: ["Incoming signal", "Thalamic nucleus", "Cortical target", "Attention-weighted perception"]
    }
  },
  {
    id: "corpus-callosum",
    label: "Corpus Callosum",
    color: "#eef7f8",
    group: "Interhemispheric bridge",
    icon: "CC",
    summary: "Communication bridge between left and right cerebral hemispheres.",
    quick: "Lets the hemispheres share sensory, motor, and cognitive information.",
    studentCue: "Split-brain studies, interhemispheric transfer, and coordination between hemispheres.",
    clinical: "Disconnection can produce unusual split-brain findings or impaired transfer of information across hemispheres.",
    connections: ["Left cortex", "Right cortex", "Association fibers", "Motor networks"],
    tags: ["bridge", "hemispheres", "transfer", "split brain"],
    deep: {
      anatomy: "The corpus callosum is the largest commissural fiber bundle. It arches above the ventricles and links homologous cortical regions.",
      physiology: "It transfers information between hemispheres so perception, language, attention, and movement can be integrated.",
      psychology: "Classic split-brain findings show how specialized hemispheric processing can become visible when this bridge is disrupted.",
      medical: "Callosal lesions or surgical section can impair cross-hemisphere naming, tactile transfer, and coordinated bilateral tasks.",
      pathway: ["Left cortex", "Callosal fibers", "Right cortex", "Integrated response"]
    }
  }
];

const PART_MAP = new Map(PARTS.map((part) => [part.id, part]));
const initialLang = new URLSearchParams(window.location.search).get("lang");

const state = {
  route: "atlas",
  selectedPartId: "frontal",
  viewMode: "full",
  lang: ["en", "ka"].includes(initialLang) ? initialLang : localStorage.getItem("brainAtlasLang") || "en",
  threeReady: false,
  calloutVisible: false,
  calloutAnchor: null,
  diving: false,
  infoExpanded: false,
  neuronFocus: null
};

const els = {
  atlasScreen: document.querySelector("#atlasScreen"),
  articleScreen: document.querySelector("#articleScreen"),
  infoDock: document.querySelector("#infoDock"),
  brandTitle: document.querySelector("#brandTitle"),
  brandSubtitle: document.querySelector("#brandSubtitle"),
  selectedLabel: document.querySelector("#selectedLabel"),
  pageTitle: document.querySelector("#pageTitle"),
  eyebrow: document.querySelector("#eyebrow"),
  topbarActions: document.querySelector(".topbar-actions"),
  viewButtons: Array.from(document.querySelectorAll("[data-view]")),
  langButtons: Array.from(document.querySelectorAll("[data-lang]")),
  navLinks: Array.from(document.querySelectorAll(".nav-link")),
  stagePanel: document.querySelector(".stage-panel"),
  canvas: document.querySelector("#brainCanvas"),
  brainRender: document.querySelector("#brainRender"),
  brainHotspots: document.querySelector("#brainHotspots"),
  labelLayer: document.querySelector("#labelLayer"),
  brainCallout: document.querySelector("#brainCallout"),
  modelStatus: document.querySelector("#modelStatus"),
  legendTitle: document.querySelector("#legendTitle"),
  legendAccent: document.querySelector("#legendAccent"),
  diveBtn: document.querySelector("#diveBtn"),
  neuronCaption: document.querySelector("#neuronCaption"),
  nodeTip: document.querySelector("#nodeTip"),
  reviewBadge: document.querySelector("#reviewBadge")
};

// Per-route headings were removed from the top bar; keep no-op targets so routing stays simple.
["eyebrow", "pageTitle"].forEach((key) => {
  if (!els[key]) els[key] = { set textContent(_v) {}, get textContent() { return ""; } };
});

let THREE;
let OrbitControls;
let renderer;
let scene;
let camera;
let controls;
let brainGroup;
let raycaster;
let pointer;
let resizeObserver;
let sagittalPlane;
let animationFrameId = 0;
const clickableMeshes = [];
const visualEntries = [];
const regionNodes = [];
const neuronNodes = [];
const timeMaterials = [];
const annotationVector = { target: null };
let starField;
let brainPivot;
let neuronGroup;
let neuronPulseMat;
let neuronPulse;
let neuronVesicles;
const clock = { start: (typeof performance !== "undefined" ? performance.now() : Date.now()) };
const pointerParallax = { x: 0, y: 0, tx: 0, ty: 0 };
const cameraRig = { baseZ: 4.15, targetZ: 4.15, baseDefault: 4.15, diveZ: 1.55 };
const diveState = { t: 0, target: 0 };
let tmpVec;
let nodeCenter;
let nodeDir;
let nodeView;
const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia
  ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
  : false;

const PART_ICONS = {
  frontal: "mdi:gesture-tap",
  parietal: "mdi:radar",
  temporal: "mdi:ear-hearing",
  occipital: "mdi:eye",
  cerebellum: "mdi:run",
  brainstem: "mdi:pulse",
  limbic: "mdi:heart-pulse",
  hippocampus: "mdi:archive",
  thalamus: "mdi:router-network",
  "corpus-callosum": "mdi:link",
  prefrontal: "mdi:target",
  "motor-cortex": "mdi:hand-back-right",
  "somatosensory-cortex": "mdi:human-handsup",
  broca: "mdi:microphone",
  wernicke: "mdi:chat-processing",
  amygdala: "mdi:shield-alert",
  "basal-ganglia": "mdi:repeat",
  hypothalamus: "mdi:thermometer",
  insula: "mdi:weather-windy",
  "cingulate-cortex": "mdi:road-variant",
  "visual-cortex": "mdi:image-filter-center-focus",
  "auditory-cortex": "mdi:volume-high",
  "angular-gyrus": "mdi:math-integral",
  "fusiform-gyrus": "mdi:face-recognition",
  "nucleus-accumbens": "mdi:trophy",
  "substantia-nigra": "mdi:circle-slice-8",
  pons: "mdi:bridge",
  medulla: "mdi:arrow-down-bold-hexagon-outline",
  "cerebellar-vermis": "mdi:balance-scale",
  pineal: "mdi:moon-waning-crescent"
};

const BRAIN_HOTSPOTS = [
  { id: "prefrontal", x: 27, y: 41 },
  { id: "frontal", x: 35, y: 34 },
  { id: "motor-cortex", x: 47, y: 28 },
  { id: "somatosensory-cortex", x: 53, y: 29 },
  { id: "parietal", x: 61, y: 31 },
  { id: "occipital", x: 75, y: 41 },
  { id: "visual-cortex", x: 78, y: 47 },
  { id: "temporal", x: 50, y: 57 },
  { id: "auditory-cortex", x: 47, y: 61 },
  { id: "wernicke", x: 58, y: 55 },
  { id: "broca", x: 37, y: 53 },
  { id: "insula", x: 43, y: 49 },
  { id: "amygdala", x: 47, y: 66 },
  { id: "hippocampus", x: 55, y: 64 },
  { id: "thalamus", x: 55, y: 47 },
  { id: "hypothalamus", x: 53, y: 58 },
  { id: "basal-ganglia", x: 49, y: 48 },
  { id: "corpus-callosum", x: 51, y: 39 },
  { id: "angular-gyrus", x: 64, y: 50 },
  { id: "fusiform-gyrus", x: 61, y: 62 },
  { id: "cingulate-cortex", x: 49, y: 37 },
  { id: "cerebellum", x: 69, y: 72 },
  { id: "cerebellar-vermis", x: 63, y: 74 },
  { id: "pons", x: 58, y: 76 },
  { id: "medulla", x: 57, y: 84 },
  { id: "brainstem", x: 58, y: 81 },
  { id: "pineal", x: 60, y: 51 }
];

const FACT_ICONS = {
  job: "mdi:lightning-bolt-circle",
  signal: "mdi:clipboard-check",
  clinical: "mdi:stethoscope",
  connections: "mdi:share-variant",
  fact: "mdi:star-four-points",
  anatomy: "mdi:map-marker"
};

const INTERESTING_FACTS = {
  frontal: "The prefrontal cortex keeps developing into early adulthood, which helps explain age-related changes in inhibition and long-range planning.",
  parietal: "Parietal cortex can make one side of space feel absent after injury, even when the eyes still work.",
  temporal: "The temporal lobe links sound, meaning, and memory, which is why a song can pull up vivid autobiographical detail.",
  occipital: "Primary visual cortex preserves a map of visual space, so small lesions can create precise field defects.",
  cerebellum: "The cerebellum contains more neurons than the rest of the brain combined, mostly tiny granule cells.",
  brainstem: "A tiny brainstem lesion can affect arousal, breathing, cranial nerves, and long tracts at the same time.",
  limbic: "Emotional memory is not stored in one place; salience, context, body state, and narrative are distributed across networks.",
  hippocampus: "Place cells in the hippocampus fire for specific locations, acting like a neural map of context.",
  thalamus: "The thalamus is not a passive relay; it actively gates attention and helps cortex synchronize.",
  "corpus-callosum": "Classic split-brain experiments showed that each hemisphere can process information partly independently.",
  prefrontal: "Prefrontal control is metabolically expensive, which is one reason fatigue can worsen impulsive choices.",
  "motor-cortex": "Motor cortex is arranged roughly as a body map, but real movement uses distributed population codes.",
  "somatosensory-cortex": "Sensitive body regions such as lips and fingers occupy disproportionately large cortical territory.",
  broca: "Broca's area contributes to speech production, but modern language models include broader frontal-temporal networks.",
  wernicke: "Wernicke-region damage can preserve fluent speech rhythm while damaging meaning.",
  amygdala: "The amygdala is about relevance, not only fear; it helps prioritize emotionally important stimuli.",
  "basal-ganglia": "Basal ganglia loops help select actions by tuning go and no-go pathways.",
  hypothalamus: "The hypothalamus links brain state to endocrine and autonomic responses through the pituitary and brainstem."
  ,
  insula: "The insula is deeply folded under the lateral sulcus and helps translate body state into feeling.",
  "cingulate-cortex": "The cingulate cortex helps monitor conflict, pain, effort, and emotional action.",
  "visual-cortex": "V1 is organized retinotopically, so neighboring visual space maps to neighboring cortex.",
  "auditory-cortex": "Auditory cortex is tonotopic: nearby neurons prefer nearby sound frequencies.",
  "angular-gyrus": "The angular gyrus helps combine language, number, attention, and semantic context.",
  "fusiform-gyrus": "The fusiform face area responds strongly to faces and expert visual categories.",
  "nucleus-accumbens": "This ventral striatal region is a major reward and motivation hub.",
  "substantia-nigra": "Dopamine neurons here are central to movement vigor and reward prediction.",
  pons: "The pons bridges cortex, cerebellum, and brainstem systems while supporting sleep and cranial nerve functions.",
  medulla: "The medulla contains vital autonomic centers for breathing, heart rate, and reflexes.",
  "cerebellar-vermis": "The vermis is especially important for posture, gait, and midline coordination.",
  pineal: "The pineal gland calcifies in most adults, so its bright spot on a CT scan is a common midline landmark and not pathological by itself."
};

const EXTRA_PARTS = [
  {
    id: "prefrontal",
    label: "Prefrontal Cortex",
    color: "#4df0d5",
    group: "Executive cortex",
    icon: "PF",
    summary: "Goal setting, working memory, inhibition, planning, and social judgment.",
    quick: "Keeps goals online and chooses behavior before action happens.",
    studentCue: "Working memory, inhibition, delayed reward, planning, decision-making.",
    clinical: "Dysfunction can affect judgment, attention, motivation, impulse control, and social behavior.",
    connections: ["Basal ganglia loops", "Limbic system", "Thalamus", "Motor planning"],
    tags: ["executive", "planning", "inhibition", "judgment"],
    deep: {
      anatomy: "Prefrontal cortex occupies the anterior frontal lobe and includes dorsolateral, ventromedial, and orbitofrontal regions.",
      physiology: "It sustains task goals, evaluates reward and risk, suppresses competing responses, and coordinates with basal ganglia loops.",
      psychology: "This is a core substrate for executive function, self-regulation, delay of gratification, and context-sensitive social behavior.",
      medical: "Prefrontal lesions can produce apathy, disinhibition, poor planning, perseveration, or impaired emotional decision-making.",
      pathway: ["Goal cue", "Prefrontal maintenance", "Action selection", "Behavior control"]
    }
  },
  {
    id: "motor-cortex",
    label: "Primary Motor Cortex",
    color: "#28d7ff",
    group: "Motor cortex",
    icon: "M1",
    summary: "Direct voluntary movement commands, especially fine contralateral control.",
    quick: "Turns movement plans into descending motor output.",
    studentCue: "Precentral gyrus, corticospinal tract, contralateral weakness.",
    clinical: "Lesions cause upper motor neuron weakness, often most visible in hand and face control.",
    connections: ["Premotor cortex", "Spinal cord", "Basal ganglia loops", "Cerebellum"],
    tags: ["movement", "precentral", "corticospinal", "strength"],
    deep: {
      anatomy: "Primary motor cortex lies in the precentral gyrus, anterior to the central sulcus.",
      physiology: "Motor populations encode direction, force, and muscle synergies that descend through corticospinal pathways.",
      psychology: "Movement is not a simple button press; motor cortex participates in intention, prediction, and feedback-tuned control.",
      medical: "A focal cortical lesion produces contralateral weakness with upper motor neuron signs below the lesion level.",
      pathway: ["Motor plan", "M1 population code", "Corticospinal tract", "Muscle activation"]
    }
  },
  {
    id: "somatosensory-cortex",
    label: "Somatosensory Cortex",
    color: "#ffd166",
    group: "Sensory cortex",
    icon: "S1",
    summary: "Touch, pressure, pain localization, vibration, and proprioceptive body mapping.",
    quick: "Builds the cortical body map for touch and position.",
    studentCue: "Postcentral gyrus, sensory homunculus, contralateral sensory loss.",
    clinical: "Damage can impair localization, discrimination, proprioception, and cortical sensory tasks.",
    connections: ["Thalamus", "Parietal association cortex", "Motor cortex", "Spinal sensory tracts"],
    tags: ["touch", "postcentral", "body map", "proprioception"],
    deep: {
      anatomy: "Primary somatosensory cortex lies in the postcentral gyrus and is organized somatotopically.",
      physiology: "It receives thalamic sensory input and separates location, intensity, modality, and body-part representation.",
      psychology: "Body ownership and embodied attention begin with reliable sensory maps that can be updated by context.",
      medical: "Lesions can produce cortical sensory deficits such as astereognosis or impaired two-point discrimination.",
      pathway: ["Peripheral receptor", "Thalamus", "S1 body map", "Perception of touch"]
    }
  },
  {
    id: "broca",
    label: "Broca's Area",
    color: "#00e0a4",
    group: "Language network",
    icon: "BR",
    summary: "Speech production, articulation planning, syntax, and expressive language.",
    quick: "Helps convert language intent into organized speech output.",
    studentCue: "Nonfluent aphasia, dominant inferior frontal gyrus.",
    clinical: "Injury can cause effortful speech with relatively better comprehension.",
    connections: ["Motor cortex", "Temporal language cortex", "Arcuate fasciculus", "Prefrontal cortex"],
    tags: ["speech", "language", "nonfluent", "dominant"],
    deep: {
      anatomy: "Broca's area is classically localized to the dominant inferior frontal gyrus.",
      physiology: "It coordinates speech planning, grammatical sequencing, and motor-language output with wider language networks.",
      psychology: "Expressive language depends on selection, sequencing, working memory, and motor planning, not speech muscles alone.",
      medical: "Broca aphasia is typically nonfluent, effortful, and agrammatic with preserved awareness of errors.",
      pathway: ["Concept", "Language formulation", "Broca planning", "Speech motor output"]
    }
  },
  {
    id: "wernicke",
    label: "Wernicke's Area",
    color: "#ff66c4",
    group: "Language network",
    icon: "WE",
    summary: "Language comprehension, semantic mapping, and fluent meaningful speech.",
    quick: "Maps heard or read language into meaning.",
    studentCue: "Fluent aphasia, impaired comprehension, posterior superior temporal cortex.",
    clinical: "Injury can produce fluent but nonsensical speech and poor comprehension.",
    connections: ["Auditory cortex", "Broca's area", "Angular gyrus", "Temporal association cortex"],
    tags: ["comprehension", "fluent", "semantics", "dominant"],
    deep: {
      anatomy: "Wernicke's area is classically in dominant posterior superior temporal cortex with nearby temporoparietal language regions.",
      physiology: "It maps sounds and words onto semantic representations and feeds language meaning into broader networks.",
      psychology: "Comprehension requires sound analysis, prediction, context, and memory, so language is distributed rather than isolated.",
      medical: "Wernicke aphasia often has fluent speech, poor comprehension, impaired repetition, and reduced awareness of errors.",
      pathway: ["Speech sound", "Auditory cortex", "Wernicke mapping", "Meaning"]
    }
  },
  {
    id: "amygdala",
    label: "Amygdala",
    color: "#ff4f79",
    group: "Limbic nuclei",
    icon: "AM",
    summary: "Threat learning, emotional salience, autonomic arousal, and relevance tagging.",
    quick: "Flags emotionally important stimuli and prepares body response.",
    studentCue: "Fear conditioning, salience, threat, autonomic response.",
    clinical: "Dysregulation is relevant to anxiety, trauma responses, and emotional learning.",
    connections: ["Hippocampus", "Hypothalamus", "Prefrontal cortex", "Temporal cortex"],
    tags: ["salience", "fear", "arousal", "emotion"],
    deep: {
      anatomy: "The amygdala is a medial temporal lobe nuclear complex near the anterior hippocampus.",
      physiology: "It links sensory cues to emotional significance and sends outputs to hypothalamic, brainstem, and cortical systems.",
      psychology: "The amygdala supports relevance detection, threat learning, emotional memory, and attention capture.",
      medical: "Hyperreactivity can appear in anxiety and trauma-related states; lesions can blunt fear recognition and conditioning.",
      pathway: ["Cue", "Amygdala salience", "Hypothalamus/brainstem", "Body response"]
    }
  },
  {
    id: "basal-ganglia",
    label: "Basal Ganglia",
    color: "#b6ff4d",
    group: "Action selection",
    icon: "BG",
    summary: "Action selection, habit, reward learning, movement scaling, and procedural learning.",
    quick: "Selects useful actions and suppresses competing ones.",
    studentCue: "Parkinsonism, chorea, habits, direct and indirect pathways.",
    clinical: "Dysfunction can produce bradykinesia, rigidity, tremor, chorea, compulsive habits, or reward-learning changes.",
    connections: ["Motor cortex", "Prefrontal cortex", "Thalamus", "Dopamine systems"],
    tags: ["habits", "dopamine", "selection", "movement"],
    deep: {
      anatomy: "Basal ganglia include striatum, globus pallidus, subthalamic nucleus, substantia nigra, and related loops.",
      physiology: "Direct and indirect pathways bias action selection, while dopamine tunes reward prediction and vigor.",
      psychology: "Habits, reinforcement learning, and automatic action routines depend heavily on cortico-basal ganglia loops.",
      medical: "Parkinson disease, Huntington disease, dystonia, tics, and addiction all involve basal ganglia circuitry.",
      pathway: ["Cortical intent", "Striatal gating", "Thalamic return", "Selected action"]
    }
  },
  {
    id: "hypothalamus",
    label: "Hypothalamus",
    color: "#ffb703",
    group: "Homeostasis",
    icon: "HY",
    summary: "Temperature, hunger, thirst, circadian rhythms, endocrine control, and autonomic state.",
    quick: "Keeps the body regulated and links brain to hormones.",
    studentCue: "Homeostasis, pituitary, autonomic output, hunger, temperature, sleep.",
    clinical: "Disorders can affect appetite, endocrine function, temperature regulation, sleep, or autonomic stability.",
    connections: ["Pituitary", "Brainstem", "Limbic system", "Autonomic nervous system"],
    tags: ["homeostasis", "hormones", "autonomic", "sleep"],
    deep: {
      anatomy: "The hypothalamus sits below the thalamus and forms the floor of the third ventricle.",
      physiology: "It integrates internal state and controls pituitary hormones, autonomic output, temperature, hunger, thirst, and circadian timing.",
      psychology: "Motivated behavior is bodily: hunger, stress, sleep, sex, and arousal all depend on hypothalamic regulation.",
      medical: "Hypothalamic-pituitary disruption can cause endocrine syndromes, appetite changes, thermoregulation issues, and sleep disturbance.",
      pathway: ["Body state", "Hypothalamic integration", "Pituitary/autonomic output", "Homeostatic response"]
    }
  },
  {
    id: "pineal",
    label: "Pineal Gland",
    color: "#d8c3a1",
    group: "Endocrine + sleep",
    icon: "PI",
    summary: "Small midline endocrine gland that secretes melatonin and helps set circadian rhythm.",
    quick: "Translates light and darkness into the body's day-night signal.",
    studentCue: "Melatonin, circadian rhythm, midline epithalamus, CT calcification.",
    clinical: "Pineal region tumors can compress the tectum and cause Parinaud syndrome with upgaze paresis and pupil findings.",
    connections: ["Hypothalamus (SCN)", "Sympathetic chain", "Habenula", "Thalamus"],
    tags: ["melatonin", "circadian", "sleep", "endocrine"],
    deep: {
      anatomy: "The pineal gland is a small midline structure of the epithalamus, sitting posterior to the thalamus and above the superior colliculi, behind the third ventricle.",
      physiology: "It receives indirect signals about ambient light from the suprachiasmatic nucleus and secretes melatonin at night, helping entrain sleep-wake timing.",
      psychology: "For psychology students, the pineal is the simplest example of how environmental light shapes mood, alertness, sleep onset, and seasonal patterns.",
      medical: "Pineal calcification is a common normal radiologic finding and a useful midline landmark; pineal region masses can present with Parinaud syndrome or obstructive hydrocephalus.",
      pathway: ["Light/dark cue", "SCN signal", "Pineal melatonin release", "Sleep-wake timing"]
    }
  }
];

function makeHotspotPart(id, label, color, group, summary, quick, studentCue, clinical, connections, tags, pathway) {
  return {
    id,
    label,
    color,
    group,
    icon: label.slice(0, 2).toUpperCase(),
    summary,
    quick,
    studentCue,
    clinical,
    connections,
    tags,
    deep: {
      anatomy: `${label} is a more specific teaching point inside the larger brain map; use its location with nearby structures to remember it.`,
      physiology: summary,
      psychology: quick,
      medical: clinical,
      pathway
    }
  };
}

const HOTSPOT_PARTS = [
  makeHotspotPart("insula", "Insula", "#2ec4b6", "Interoception", "Integrates body state, taste, pain, emotion, and self-awareness.", "Turns internal body signals into conscious feeling.", "Interoception, disgust, pain, taste, craving.", "Insular dysfunction can alter awareness of body state, pain, emotion, or craving.", ["Limbic system", "Somatosensory cortex", "Prefrontal cortex"], ["interoception", "pain", "taste", "emotion"], ["Body signal", "Insular integration", "Feeling state"]),
  makeHotspotPart("cingulate-cortex", "Cingulate Cortex", "#ff7aa2", "Medial cortex", "Monitors conflict, pain, effort, attention, and emotionally guided action.", "Helps decide what deserves effort and attention.", "Conflict monitoring, pain affect, motivation, error detection.", "Lesions can affect motivation, attention, emotional regulation, and pain experience.", ["Prefrontal cortex", "Limbic system", "Motor cortex"], ["effort", "attention", "pain", "emotion"], ["Conflict", "Cingulate monitoring", "Action adjustment"]),
  makeHotspotPart("visual-cortex", "Primary Visual Cortex", "#a78bfa", "Visual cortex", "Receives retinal maps through the thalamus and extracts early visual features.", "Builds the first cortical map of visual space.", "V1, calcarine sulcus, retinotopy, visual field loss.", "Damage causes predictable contralateral visual field deficits.", ["LGN", "Occipital lobe", "Visual association cortex"], ["V1", "vision", "retinotopy"], ["Retina", "LGN", "V1", "Feature map"]),
  makeHotspotPart("auditory-cortex", "Auditory Cortex", "#ff70a6", "Auditory cortex", "Processes sound frequency, timing, speech sounds, and auditory scene structure.", "Turns vibration patterns into organized sound.", "Superior temporal gyrus, tonotopy, hearing and language links.", "Cortical injury can impair sound recognition and auditory language processing.", ["Temporal lobe", "Thalamic MGN", "Wernicke's area"], ["hearing", "tonotopy", "speech"], ["Sound wave", "Auditory relay", "Auditory cortex", "Sound meaning"]),
  makeHotspotPart("angular-gyrus", "Angular Gyrus", "#ffd166", "Association cortex", "Combines language, number, reading, spatial attention, and semantic context.", "Blends symbols, meaning, and spatial concepts.", "Gerstmann signs, reading, writing, calculation, semantic integration.", "Dominant lesions can affect calculation, writing, finger recognition, and left-right orientation.", ["Parietal lobe", "Temporal lobe", "Language network"], ["reading", "math", "semantics"], ["Symbol", "Angular integration", "Meaning/action"]),
  makeHotspotPart("fusiform-gyrus", "Fusiform Gyrus", "#ff9f1c", "Ventral visual stream", "Supports high-level visual recognition, especially faces and expert categories.", "Helps recognize faces and meaningful visual patterns.", "Face recognition, ventral stream, prosopagnosia.", "Right fusiform damage can contribute to prosopagnosia.", ["Occipital lobe", "Temporal lobe", "Limbic system"], ["faces", "recognition", "ventral"], ["Visual input", "Ventral stream", "Fusiform recognition"]),
  makeHotspotPart("nucleus-accumbens", "Nucleus Accumbens", "#caff70", "Reward circuit", "Links dopamine, motivation, reinforcement learning, and reward-guided behavior.", "Marks rewards and motivates repeated action.", "Reward, addiction, motivation, ventral striatum.", "Circuit changes are relevant to addiction, depression, apathy, and reinforcement learning.", ["Basal ganglia", "Prefrontal cortex", "Dopamine systems"], ["reward", "motivation", "dopamine"], ["Cue", "Dopamine signal", "Accumbens valuation", "Approach behavior"]),
  makeHotspotPart("substantia-nigra", "Substantia Nigra", "#8ecae6", "Midbrain dopamine", "Provides dopamine for movement vigor, habit learning, and reward prediction.", "Supplies dopamine that helps movement start and scale.", "Parkinson disease, dopamine, midbrain, bradykinesia.", "Degeneration is central to Parkinsonian motor symptoms.", ["Basal ganglia", "Motor cortex", "Brainstem"], ["dopamine", "movement", "Parkinson"], ["Midbrain dopamine", "Striatum", "Action scaling"]),
  makeHotspotPart("pons", "Pons", "#fb8500", "Brainstem", "Relays cortical signals to cerebellum and supports sleep, breathing, and cranial nerve functions.", "A bridge for cortex, cerebellum, face, and arousal.", "Brainstem bridge, cranial nerves, sleep, respiration.", "Pontine lesions can affect eye movement, face function, arousal, and long tracts.", ["Cerebellum", "Brainstem", "Cranial nerves"], ["relay", "sleep", "cranial nerves"], ["Cortex", "Pons", "Cerebellum", "Coordinated response"]),
  makeHotspotPart("medulla", "Medulla", "#ff6b35", "Brainstem", "Controls vital autonomic reflexes including breathing rhythm, heart rate, swallowing, and vomiting.", "Keeps vital reflexes running.", "Respiration, cardiovascular control, swallowing, pyramidal decussation.", "Medullary injury can threaten breathing, circulation, swallowing, and motor pathways.", ["Spinal cord", "Brainstem", "Autonomic system"], ["breathing", "heart rate", "reflexes"], ["Body state", "Medullary centers", "Autonomic output"]),
  makeHotspotPart("cerebellar-vermis", "Cerebellar Vermis", "#7bd88f", "Cerebellar midline", "Coordinates posture, trunk control, gait stability, and eye/head balance.", "Stabilizes the body midline during movement.", "Gait ataxia, truncal instability, posture.", "Vermis lesions classically produce gait and truncal ataxia.", ["Cerebellum", "Vestibular nuclei", "Spinal cord"], ["gait", "posture", "balance"], ["Posture plan", "Vermis correction", "Stable gait"])
];

PARTS.push(...EXTRA_PARTS, ...HOTSPOT_PARTS);
[...EXTRA_PARTS, ...HOTSPOT_PARTS].forEach((part) => PART_MAP.set(part.id, part));

const UI_TEXT = {
  en: {
    brandTitle: "Brain Atlas",
    brandSubtitle: "psychology + medicine",
    navAtlas: "Atlas",
    navNeurons: "Neurons",
    navStudy: "Study Board",
    findStructure: "Find a structure",
    searchPlaceholder: "frontal, memory, vision",
    structures: "Structures",
    selected: "Selected",
    full: "Full",
    half: "Half",
    inside: "Inside",
    split: "Split",
    fullTitle: "Show the full brain",
    halfTitle: "Open a sagittal half view",
    insideTitle: "Fade cortex and reveal internal parts",
    splitTitle: "Separate the major structures",
    atlasEyebrow: "Interactive neuroanatomy",
    atlasTitle: "3D Brain Structure Atlas",
    neuronsEyebrow: "Cellular foundation",
    neuronsTitle: "Neurons And Signaling",
    studyEyebrow: "Teaching mode",
    studyTitle: "Student Study Board",
    deepDive: "Deep Dive",
    noMatch: "No structure matches that search.",
    openFullPage: "Open full page",
    neuronBasics: "Neuron basics",
    mainJob: "Main job",
    studentSignal: "Student signal",
    clinicalHook: "Clinical hook",
    connectsWith: "Connects with",
    closeNote: "Close structure note",
    fullStatus: "Full cortical model",
    halfStatus: "Sagittal half view",
    insideStatus: "Internal systems emphasized",
    splitStatus: "Separated structure view",
    readyStatus: "3D model ready",
    loadingStatus: "Loading neural display",
    unavailableStatus: "3D engine unavailable",
    bestAnchor: "Best anchor",
    system: "System",
    examLens: "Exam lens",
    dive: "Dive",
    surface: "Surface",
    neuronDiveTitle: "Inside the neuron",
    neuronDiveLead: "Signals arrive at dendrites, sum in the soma, and fire down the axon as a moving action potential that releases transmitter at the synapse.",
    doubleClickHint: "Double-click to expand",
    addReview: "Add to review",
    inReview: "In review",
    reviewKicker: "Spaced review",
    reviewHeading: "Review what you are about to forget",
    reviewLead: "Active recall plus spacing beats rereading. Mark regions from the atlas, then return when they come due to retrieve them from memory.",
    dueNow: "Due now",
    inQueue: "In queue",
    method: "Method",
    spacedRepetition: "Spaced repetition",
    reviewEmpty: "Your review queue is empty. Open a region in the atlas and tap Add to review.",
    reviewCaughtUp: "All caught up. Nothing is due right now.",
    recallPrompt: "Recall this region",
    recallHint: "Picture its job, location, and what fails when it is damaged, then reveal.",
    remembered: "Remembered",
    forgot: "Forgot",
    reveal: "Reveal",
    reviewQueue: "Review queue",
    backAtlas: "Back to 3D atlas",
    studyBoard: "Study board",
    signalPath: "Signal Path",
    input: "Input",
    output: "Output",
    processing: "Processing",
    anatomy: "Anatomy",
    physiology: "Physiology",
    psychologyLens: "Psychology Lens",
    clinicalPattern: "Clinical Pattern",
    connections: "Connections",
    relatedStructures: "Related Structures",
    relatedFallback: "Use the atlas to compare nearby systems.",
    neuronKicker: "Neuron basics",
    neuronHeading: "The unit that makes networks possible",
    neuronLead: "Neurons receive signals, integrate them, fire action potentials, and communicate across synapses. The brain is not only its parts; it is also the timing and chemistry between cells.",
    decisionPoint: "Decision point",
    dendrites: "Dendrites",
    soma: "Soma",
    axonHillock: "Axon hillock",
    axon: "Axon",
    synapse: "Synapse",
    neuronPart: "Neuron part",
    neuronTapHint: "Tap a dot to see what each part does.",
    dendritesDesc: "Branching antennae that receive signals from other neurons and carry them inward toward the soma.",
    somaDesc: "The cell body. It sums all incoming excitatory and inhibitory signals and keeps the neuron alive.",
    axonHillockDesc: "The decision point. If the summed signal crosses threshold here, an action potential fires.",
    axonDesc: "The cable that carries the action potential away from the soma; myelin segments speed conduction.",
    synapseDesc: "The axon terminal releases neurotransmitters across the gap to influence the next cell.",
    howSignalMoves: "How a signal moves",
    signalMoveItems: [
      "Dendrites collect excitatory and inhibitory inputs.",
      "The soma integrates those inputs over space and time.",
      "If threshold is reached, an action potential travels down the axon.",
      "Synapses release neurotransmitters that affect the next cell."
    ],
    neurotransmitters: "Neurotransmitters",
    neurotransmittersBody: "Glutamate is the major excitatory transmitter. GABA is the major inhibitory transmitter. Dopamine, serotonin, acetylcholine, norepinephrine, and many peptides tune mood, attention, reward, sleep, and movement.",
    gliaMatter: "Glia matter",
    gliaBody: "Astrocytes support metabolism and synapses. Oligodendrocytes make CNS myelin. Microglia survey immune threats. Ependymal cells line ventricles and help with CSF flow.",
    forPsychology: "For psychology",
    psychologyBody: "Behavior changes when synaptic weights change. Learning, reinforcement, fear conditioning, habit, attention, and mood all depend on circuit-level plasticity.",
    forMedicine: "For medicine",
    medicineBody: "Many disorders are easier to reason through when you separate lesion localization, neurotransmitter effects, conduction speed, inflammation, and network compensation.",
    bestNextStep: "Best next step",
    bestNextBody: "Use the atlas to connect cells to systems: hippocampal neurons bind memory, cerebellar circuits tune error, and frontal loops select behavior.",
    openAtlas: "Open atlas",
    studyMode: "Study mode",
    studyHeading: "Use structure, function, lesion, and pathway together",
    studyLead: "Students remember neuroanatomy better when every structure has a role, a clinical pattern, and a pathway. This board keeps those four pieces visible.",
    returnModel: "Return to 3D model",
    reviewNeurons: "Review neurons",
    miniMethod: "Mini Method",
    locate: "Locate",
    locateHint: "Where is the structure?",
    assign: "Assign",
    assignHint: "What does it help compute?",
    predict: "Predict",
    predictHint: "What happens if it fails?",
    connect: "Connect",
    connectHint: "Which pathway explains it?",
    clinicalPrompts: "Clinical prompts",
    psychologyPrompts: "Psychology prompts",
    fastCompare: "Fast compare",
    structure: "Structure",
    coreFunction: "Core function",
    failurePattern: "Failure pattern",
    clinicalPromptItems: [
      "Personality change plus poor inhibition: compare frontal lobe and limbic circuits.",
      "New memory formation is impaired: inspect hippocampus and medial temporal lobe.",
      "Unsteady gait and intention tremor: inspect cerebellum.",
      "Contralateral visual field loss: inspect occipital cortex and optic radiations."
    ],
    psychologyPromptItems: [
      "Fear conditioning: limbic system, amygdala, hippocampus, and prefrontal regulation.",
      "Working memory: prefrontal cortex with parietal attention networks.",
      "Language comprehension: temporal lobe networks.",
      "Embodied attention: parietal body-space maps."
    ]
  },
  ka: {
    brandTitle: "ტვინის ატლასი",
    brandSubtitle: "ფსიქოლოგია + მედიცინა",
    navAtlas: "ატლასი",
    navNeurons: "ნეირონები",
    navStudy: "სასწავლო დაფა",
    findStructure: "სტრუქტურის ძებნა",
    searchPlaceholder: "შუბლის წილი, მეხსიერება, მხედველობა",
    structures: "სტრუქტურები",
    selected: "არჩეულია",
    full: "სრული",
    half: "ნახევარი",
    inside: "შიგნით",
    split: "გაყოფა",
    fullTitle: "სრული ტვინის ჩვენება",
    halfTitle: "საგიტალური ნახევარი ხედი",
    insideTitle: "ქერქის გამჭვირვალობა და შიდა ნაწილები",
    splitTitle: "ძირითადი სტრუქტურების დაშორება",
    atlasEyebrow: "ინტერაქტიული ნეიროანატომია",
    atlasTitle: "ტვინის 3D სტრუქტურის ატლასი",
    neuronsEyebrow: "უჯრედული საფუძველი",
    neuronsTitle: "ნეირონები და სიგნალები",
    studyEyebrow: "სასწავლო რეჟიმი",
    studyTitle: "სტუდენტის სასწავლო დაფა",
    deepDive: "ღრმა განხილვა",
    noMatch: "ამ ძებნას სტრუქტურა არ ემთხვევა.",
    openFullPage: "სრული გვერდი",
    neuronBasics: "ნეირონების საფუძვლები",
    mainJob: "მთავარი როლი",
    studentSignal: "სტუდენტის მინიშნება",
    clinicalHook: "კლინიკური კავშირი",
    connectsWith: "კავშირები",
    closeNote: "შენიშვნის დახურვა",
    fullStatus: "სრული ქერქული მოდელი",
    halfStatus: "საგიტალური ნახევარი ხედი",
    insideStatus: "გამოკვეთილია შიდა სისტემები",
    splitStatus: "სტრუქტურები დაშორებულია",
    readyStatus: "3D მოდელი მზადაა",
    loadingStatus: "ნეიროეკრანი იტვირთება",
    unavailableStatus: "3D ძრავა მიუწვდომელია",
    bestAnchor: "საუკეთესო საყრდენი",
    system: "სისტემა",
    examLens: "საგამოცდო ფოკუსი",
    dive: "ჩაყვინთვა",
    surface: "ამოსვლა",
    neuronDiveTitle: "ნეირონის შიგნით",
    neuronDiveLead: "სიგნალები დენდრიტებზე მოდის, სომაში ჯამდება და აქსონზე მოქმედების პოტენციალად მიდის, რომელიც სინაფსში ნეიროტრანსმიტერს გამოყოფს.",
    doubleClickHint: "ორმაგი დაწკაპუნება გასაშლელად",
    addReview: "გასამეორებლად დამატება",
    inReview: "გასამეორებელია",
    reviewKicker: "დაშორებული გამეორება",
    reviewHeading: "გაიმეორე ის, რასაც ივიწყებ",
    reviewLead: "აქტიური გახსენება და დროში დაშორება სჯობს ხელახლა კითხვას. მონიშნე სტრუქტურები ატლასიდან და დაბრუნდი, როცა ვადა მოვა.",
    dueNow: "ახლა ვადაა",
    inQueue: "რიგში",
    method: "მეთოდი",
    spacedRepetition: "დაშორებული გამეორება",
    reviewEmpty: "გასამეორებელი რიგი ცარიელია. გახსენი სტრუქტურა ატლასში და დააჭირე „გასამეორებლად დამატება“.",
    reviewCaughtUp: "ყველაფერი მზადაა. ახლა ვადა არაფერს აქვს.",
    recallPrompt: "გაიხსენე ეს სტრუქტურა",
    recallHint: "წარმოიდგინე მისი როლი, მდებარეობა და რა ფუჭდება დაზიანებისას, შემდეგ გახსენი.",
    remembered: "გავიხსენე",
    forgot: "დამავიწყდა",
    reveal: "გახსნა",
    reviewQueue: "გასამეორებელი რიგი",
    backAtlas: "3D ატლასზე დაბრუნება",
    studyBoard: "სასწავლო დაფა",
    signalPath: "სიგნალის გზა",
    input: "შესავალი",
    output: "გამოსავალი",
    processing: "დამუშავება",
    anatomy: "ანატომია",
    physiology: "ფიზიოლოგია",
    psychologyLens: "ფსიქოლოგიური ხედვა",
    clinicalPattern: "კლინიკური სურათი",
    connections: "კავშირები",
    relatedStructures: "დაკავშირებული სტრუქტურები",
    relatedFallback: "გამოიყენე ატლასი ახლო სისტემების შესადარებლად.",
    neuronKicker: "ნეირონის საფუძვლები",
    neuronHeading: "ერთეული, რომელიც ქსელებს შესაძლებელს ხდის",
    neuronLead: "ნეირონები იღებენ სიგნალებს, აერთიანებენ მათ, წარმოქმნიან მოქმედების პოტენციალებს და სინაფსებით უკავშირდებიან ერთმანეთს. ტვინი მხოლოდ ნაწილები არ არის; ის ასევე დროისა და ქიმიის ქსელია.",
    decisionPoint: "გადაწყვეტის წერტილი",
    dendrites: "დენდრიტები",
    soma: "სომა",
    axonHillock: "აქსონის ბორცვი",
    axon: "აქსონი",
    synapse: "სინაფსი",
    neuronPart: "ნეირონის ნაწილი",
    neuronTapHint: "დააჭირე წერტილს, რომ ნახო თითოეული ნაწილი რას აკეთებს.",
    dendritesDesc: "განშტოებული ანტენები, რომლებიც სხვა ნეირონებისგან იღებენ სიგნალებს და სომისკენ ატარებენ.",
    somaDesc: "უჯრედის სხეული. აჯამებს ყველა შემავალ აღმგზნებ და დამთრგუნველ სიგნალს და ნეირონს აცოცხლებს.",
    axonHillockDesc: "გადაწყვეტის წერტილი. თუ ჯამური სიგნალი აქ ზღურბლს გადააჭარბებს, ისვრება მოქმედების პოტენციალი.",
    axonDesc: "კაბელი, რომელიც მოქმედების პოტენციალს სომიდან გაჰყავს; მიელინის სეგმენტები აჩქარებენ გატარებას.",
    synapseDesc: "აქსონის ბოლო გამოყოფს ნეიროტრანსმიტერებს ნაპრალში, რომ შემდეგ უჯრედზე იმოქმედოს.",
    howSignalMoves: "როგორ მოძრაობს სიგნალი",
    signalMoveItems: [
      "დენდრიტები აგროვებენ აღმგზნებ და შემაკავებელ სიგნალებს.",
      "სომა ამ სიგნალებს სივრცესა და დროში აერთიანებს.",
      "თუ ზღვარი მიღწეულია, მოქმედების პოტენციალი აქსონზე ვრცელდება.",
      "სინაფსები გამოყოფენ ნეიროტრანსმიტერებს, რომლებიც შემდეგ უჯრედზე მოქმედებს."
    ],
    neurotransmitters: "ნეიროტრანსმიტერები",
    neurotransmittersBody: "გლუტამატი მთავარი აღმგზნები გადამცემია, GABA კი მთავარი შემაკავებელი. დოფამინი, სეროტონინი, აცეტილქოლინი, ნორეპინეფრინი და პეპტიდები არეგულირებენ განწყობას, ყურადღებას, ჯილდოს, ძილს და მოძრაობას.",
    gliaMatter: "გლია მნიშვნელოვანია",
    gliaBody: "ასტროციტები მხარს უჭერენ მეტაბოლიზმსა და სინაფსებს. ოლიგოდენდროციტები ქმნიან CNS მიელინს. მიკროგლია აკვირდება იმუნურ საფრთხეებს. ეპენდიმური უჯრედები პარკუჭებს ფარავს და CSF-ის დინებას ეხმარება.",
    forPsychology: "ფსიქოლოგიისთვის",
    psychologyBody: "ქცევა იცვლება, როცა სინაფსური წონები იცვლება. სწავლა, განმტკიცება, შიშის განპირობება, ჩვევა, ყურადღება და განწყობა ქსელურ პლასტიკურობაზეა დამოკიდებული.",
    forMedicine: "მედიცინისთვის",
    medicineBody: "ბევრი დარღვევა უფრო გასაგებია, როცა ცალკე ვხედავთ დაზიანების ლოკალიზაციას, გადამცემებს, გამტარობის სიჩქარეს, ანთებას და ქსელურ კომპენსაციას.",
    bestNextStep: "შემდეგი ნაბიჯი",
    bestNextBody: "ატლასით დააკავშირე უჯრედები სისტემებთან: ჰიპოკამპის ნეირონები მეხსიერებას აბამენ, ნათხემი შეცდომას ასწორებს, შუბლის წრეები კი ქცევას ირჩევს.",
    openAtlas: "ატლასის გახსნა",
    studyMode: "სასწავლო რეჟიმი",
    studyHeading: "სტრუქტურა, ფუნქცია, დაზიანება და გზა ერთად გამოიყენე",
    studyLead: "სტუდენტები ნეიროანატომიას უკეთ იმახსოვრებენ, როცა თითოეულ სტრუქტურას როლი, კლინიკური ნიმუში და გზა აქვს. ეს დაფა ოთხივე ნაწილს თვალწინ ტოვებს.",
    returnModel: "3D მოდელზე დაბრუნება",
    reviewNeurons: "ნეირონების გადახედვა",
    miniMethod: "მინი მეთოდი",
    locate: "იპოვე",
    locateHint: "სად მდებარეობს სტრუქტურა?",
    assign: "მიანიჭე",
    assignHint: "რას გამოთვლის ან ეხმარება?",
    predict: "ივარაუდე",
    predictHint: "რა მოხდება დაზიანებისას?",
    connect: "დააკავშირე",
    connectHint: "რომელი გზა ხსნის ამას?",
    clinicalPrompts: "კლინიკური მინიშნებები",
    psychologyPrompts: "ფსიქოლოგიური მინიშნებები",
    fastCompare: "სწრაფი შედარება",
    structure: "სტრუქტურა",
    coreFunction: "ძირითადი ფუნქცია",
    failurePattern: "დაზიანების ნიმუში",
    clinicalPromptItems: [
      "პიროვნების ცვლილება და სუსტი შეკავება: შეადარე შუბლის წილი და ლიმბური წრეები.",
      "ახალი მეხსიერების ფორმირება დარღვეულია: შეამოწმე ჰიპოკამპი და მედიალური საფეთქლის წილი.",
      "არამყარი სიარული და განზრახვითი ტრემორი: შეამოწმე ნათხემი.",
      "კონტრალატერალური მხედველობის ველის დაკარგვა: შეამოწმე კეფის ქერქი და მხედველობის რადიაციები."
    ],
    psychologyPromptItems: [
      "შიშის განპირობება: ლიმბური სისტემა, ამიგდალა, ჰიპოკამპი და პრეფრონტალური რეგულაცია.",
      "სამუშაო მეხსიერება: პრეფრონტალური ქერქი და თხემის ყურადღების ქსელები.",
      "ენის გაგება: საფეთქლის წილის ქსელები.",
      "სხეულზე დაფუძნებული ყურადღება: თხემის სხეული-სივრცის რუკები."
    ]
  }
};

const KA_PARTS = {
  frontal: {
    label: "შუბლის წილი",
    group: "დიდი ტვინის ქერქი",
    summary: "აღმასრულებელი კონტროლი, ნებაყოფლობითი მოძრაობა, მეტყველება, შეკავება და პიროვნება.",
    quick: "გეხმარება არჩევაში, დაგეგმვაში, იმპულსის შეჩერებაში, მოძრაობასა და განზრახვის ქცევად ქცევაში.",
    studentCue: "დაგეგმვა, განსჯა, შეკავება, პიროვნება ან მოტორული ზოლი თუ ჩანს, აქ დაიწყე.",
    clinical: "დაზიანებამ შეიძლება შეცვალოს იმპულსის კონტროლი, განწყობა, სოციალური განსჯა, ძალა ან ექსპრესიული მეტყველება.",
    tags: ["დაგეგმვა", "მოტორი", "პიროვნება", "მეტყველება"]
  },
  parietal: {
    label: "თხემის წილი",
    group: "დიდი ტვინის ქერქი",
    summary: "შეხება, სხეულის რუკა, სივრცითი ყურადღება, სენსორული ინტეგრაცია და ანგარიში.",
    quick: "ქმნის სხეულისა და ახლო სივრცის ცოცხალ რუკას.",
    studentCue: "იფიქრე სომატოსენსორულ ქერქზე, neglect-ზე, მარჯვენა-მარცხენა ორიენტაციაზე და სივრცეზე.",
    clinical: "დაზიანება იწვევს სენსორულ დაკარგვას, neglect-ს, აპრაქსიას ან სხეულის ორიენტაციის სირთულეს.",
    tags: ["შეხება", "სივრცე", "ყურადღება", "სხეულის რუკა"]
  },
  temporal: {
    label: "საფეთქლის წილი",
    group: "დიდი ტვინის ქერქი",
    summary: "სმენა, ენის გაგება, ობიექტის ამოცნობა, ემოცია და მეხსიერებაში შესვლა.",
    quick: "ხმას მნიშვნელობად აქცევს და მეხსიერებას გამოსაყენებელ ისტორიად აყალიბებს.",
    studentCue: "აუდიტორული ქერქი, ვერნიკეს არე, ამოცნობა, აურიანი შეტევები და მეხსიერება.",
    clinical: "დარღვევამ შეიძლება დააზიანოს გაგება, ამოცნობა, ემოციური მნიშვნელობა ან შეტევის სიმპტომები.",
    tags: ["სმენა", "ენა", "მეხსიერება", "ამოცნობა"]
  },
  occipital: {
    label: "კეფის წილი",
    group: "დიდი ტვინის ქერქი",
    summary: "მხედველობა, კიდეების ამოცნობა, მოძრაობა, ფერი და ადრეული ვიზუალური ინტერპრეტაცია.",
    quick: "იღებს ვიზუალურ სიგნალებს და იწყებს ფორმის, კონტრასტის, ფერისა და მოძრაობის ამოღებას.",
    studentCue: "მხედველობის ველის დეფექტები, პირველადი ვიზუალური ქერქი, დორსალური და ვენტრალური ნაკადები.",
    clinical: "დაზიანება იწვევს კონტრალატერალურ ველის დაკარგვას, ქერქულ სიბრმავეს ან ვიზუალურ აგნოზიას.",
    tags: ["მხედველობა", "ფერი", "მოძრაობა", "ველი"]
  },
  cerebellum: {
    label: "ნათხემი",
    group: "მოტორული კოორდინაცია",
    summary: "კოორდინაცია, დროის განსაზღვრა, ბალანსი, მოტორული სწავლა და პროგნოზი.",
    quick: "ადარებს დაგეგმილ მოძრაობას რეალურ მოძრაობასთან და შეცდომას ასწორებს.",
    studentCue: "ატაქსია, განზრახვითი ტრემორი, დისმეტრია, ნისტაგმი, პოზა და მოტორული სწავლა.",
    clinical: "დაზიანება იწვევს არამყარ სიარულს, ცუდ კოორდინაციას, სკანდირებულ მეტყველებას და არაზუსტ მიწვდომას.",
    tags: ["კოორდინაცია", "ბალანსი", "დრო", "სწავლა"]
  },
  brainstem: {
    label: "ტვინის ღერო",
    group: "გადარჩენის სისტემები",
    summary: "სუნთქვა, სიფხიზლე, ავტონომური კონტროლი, კრანიალური ნერვები და სიგნალის რელე.",
    quick: "ინარჩუნებს სიცოცხლის ძირითად ფუნქციებს და ატარებს სიგნალებს ტვინს, ზურგის ტვინსა და სახეს შორის.",
    studentCue: "კრანიალური ნერვები, კომა, სუნთქვის დრაივი, რეტიკულური აქტივაცია და გრძელი გზები.",
    clinical: "პატარა დაზიანებაც მაღალი რისკია, რადგან გზები აქ ძალიან მჭიდროდ არის შეკრული.",
    tags: ["სუნთქვა", "სიფხიზლე", "კრანიალური ნერვები", "რელე"]
  },
  limbic: {
    label: "ლიმბური სისტემა",
    group: "ემოცია + მოტივაცია",
    summary: "ემოცია, მნიშვნელობა, ჯილდო, საფრთხის ამოცნობა და მეხსიერების ემოციური შეფერვა.",
    quick: "გამოცდილებას ემოციურ ღირებულებას აძლევს და წყვეტს, რა არის მნიშვნელოვანი.",
    studentCue: "ამიგდალა, შიში, ჯილდო, მოტივაცია, ემოციური მეხსიერება და ავტონომური პასუხი.",
    clinical: "დიზრეგულაცია კავშირშია შფოთვასთან, ტრავმასთან, დამოკიდებულებასთან და განწყობასთან.",
    tags: ["ემოცია", "ჯილდო", "შიში", "მოტივაცია"]
  },
  hippocampus: {
    label: "ჰიპოკამპი",
    group: "მეხსიერების სისტემა",
    summary: "დეკლარაციული მეხსიერება, კონტექსტი, სივრცითი ნავიგაცია და კონსოლიდაცია.",
    quick: "გამოცდილებას აღდგენად მეხსიერებად აქცევს და კონტექსტს რუკავს.",
    studentCue: "ანტეროგრადული ამნეზია, სივრცითი რუკები, მედიალური საფეთქლის წილი და კონსოლიდაცია.",
    clinical: "ორმხრივმა დაზიანებამ ახალი დეკლარაციული მეხსიერების ფორმირება ძლიერ დააზიანოს.",
    tags: ["მეხსიერება", "ნავიგაცია", "კონტექსტი", "სწავლა"]
  },
  thalamus: {
    label: "თალამუსი",
    group: "რელე + ყურადღება",
    summary: "სენსორული რელე, სიფხიზლე, ყურადღების ფილტრაცია და ქერქული კოორდინაცია.",
    quick: "ფილტრავს და ანაწილებს ინფორმაციას, სანამ ის ქერქამდე მივა.",
    studentCue: "რელე ბირთვები, ტკივილი, შეგრძნება, სიფხიზლე, ყურადღება და ცნობიერება.",
    clinical: "დაზიანებამ შეიძლება გამოიწვიოს სენსორული სინდრომები, ტკივილი, სიფხიზლის ან ყურადღების პრობლემები.",
    tags: ["რელე", "ყურადღება", "შეგრძნება", "სიფხიზლე"]
  },
  "corpus-callosum": {
    label: "კორპუს კალოზუმი",
    group: "ჰემისფეროთაშორისი ხიდი",
    summary: "მარცხენა და მარჯვენა ჰემისფეროებს შორის კომუნიკაციის ხიდი.",
    quick: "ჰემისფეროებს სენსორული, მოტორული და კოგნიტიური ინფორმაციის გაზიარებაში ეხმარება.",
    studentCue: "split-brain კვლევები, ჰემისფეროთაშორისი გადაცემა და კოორდინაცია.",
    clinical: "გათიშვამ შეიძლება გამოიწვიოს split-brain ნიშნები ან ინფორმაციის გადაცემის დარღვევა.",
    tags: ["ხიდი", "ჰემისფეროები", "გადაცემა", "split brain"]
  },
  prefrontal: { label: "პრეფრონტალური ქერქი", group: "აღმასრულებელი ქერქი", summary: "მიზნები, სამუშაო მეხსიერება, შეკავება, დაგეგმვა და სოციალური განსჯა.", quick: "მიზნებს აქტიურად ინახავს და ქცევას მოქმედებამდე არჩევს.", studentCue: "სამუშაო მეხსიერება, შეკავება, დაგვიანებული ჯილდო, დაგეგმვა.", clinical: "დარღვევამ შეიძლება შეცვალოს განსჯა, ყურადღება, მოტივაცია და იმპულსის კონტროლი.", tags: ["აღმასრულებელი", "დაგეგმვა", "შეკავება"] },
  "motor-cortex": { label: "პირველადი მოტორული ქერქი", group: "მოტორული ქერქი", summary: "ნებაყოფლობითი მოძრაობის ბრძანებები, განსაკუთრებით კონტრალატერალური კონტროლი.", quick: "მოძრაობის გეგმას დაღმავალ მოტორულ გამოსვლად აქცევს.", studentCue: "პრეცენტრალური ხვეული, კორტიკოსპინალური გზა, კონტრალატერალური სისუსტე.", clinical: "დაზიანება იწვევს ზედა მოტორული ნეირონის სისუსტეს.", tags: ["მოძრაობა", "ძალა", "კორტიკოსპინალური"] },
  "somatosensory-cortex": { label: "სომატოსენსორული ქერქი", group: "სენსორული ქერქი", summary: "შეხების, წნევის, ტკივილისა და სხეულის პოზიციის ქერქული რუკა.", quick: "სხეულის შეგრძნებებს ორგანიზებულ რუკად აქცევს.", studentCue: "პოსტცენტრალური ხვეული, ჰომუნკულუსი, კონტრალატერალური შეგრძნება.", clinical: "დაზიანება იწვევს შეგრძნების დაკარგვას ან ლოკალიზაციის სირთულეს.", tags: ["შეხება", "ტკივილი", "სხეული"] },
  broca: { label: "ბროკას არე", group: "ენის წარმოება", summary: "მეტყველების დაგეგმვა და ექსპრესიული ენის წარმოება.", quick: "აზრს სალაპარაკო მოტორულ გეგმად აწყობს.", studentCue: "არაფლუენტური აფაზია, დაზიანებული გამეორება, შენარჩუნებული გაგება.", clinical: "დაზიანება იწვევს ბროკას აფაზიას.", tags: ["მეტყველება", "ენა", "აფაზია"] },
  wernicke: { label: "ვერნიკეს არე", group: "ენის გაგება", summary: "სიტყვის მნიშვნელობის და სალაპარაკო ენის გაგების ქსელი.", quick: "ხმოვან ენას მნიშვნელობას ანიჭებს.", studentCue: "ფლუენტური აფაზია, ცუდი გაგება, უაზრო სიტყვები.", clinical: "დაზიანება იწვევს ვერნიკეს აფაზიას.", tags: ["გაგება", "ენა", "მნიშვნელობა"] },
  amygdala: { label: "ამიგდალა", group: "საფრთხე + ემოცია", summary: "ემოციური მნიშვნელობა, საფრთხე, შიში და მეხსიერების ემოციური ტონი.", quick: "წყვეტს, რამდენად ემოციურად მნიშვნელოვანი ან საფრთხის შემცველია სტიმული.", studentCue: "შიში, ემოციური მეხსიერება, საფრთხე, ავტონომური რეაქცია.", clinical: "დარღვევები კავშირშია შფოთვასთან, ტრავმასთან და ემოციურ რეგულაციასთან.", tags: ["შიში", "საფრთხე", "ემოცია"] },
  "basal-ganglia": { label: "ბაზალური განგლიები", group: "მოქმედების არჩევა", summary: "ჩვევები, მოქმედების არჩევა, მოძრაობის დაწყება და ჯილდოზე სწავლა.", quick: "ეხმარება ტვინს აირჩიოს რომელი მოქმედება დაიწყოს ან შეაჩეროს.", studentCue: "პარკინსონი, ჰანტინგტონი, go/no-go გზები, ჩვევები.", clinical: "დაზიანება ცვლის მოძრაობის სისწრაფეს, ჩვევებს და მოტივაციას.", tags: ["ჩვევა", "მოძრაობა", "დოფამინი"] },
  hypothalamus: { label: "ჰიპოთალამუსი", group: "ჰომეოსტაზი", summary: "ტემპერატურა, შიმშილი, წყურვილი, ჰორმონები, ავტონომური კონტროლი და ძილი.", quick: "სხეულის საჭიროებებს ჰორმონულ და ავტონომურ პასუხად აქცევს.", studentCue: "ჰიპოფიზი, შიმშილი, წყურვილი, ტემპერატურა, ცირკადული რიტმი.", clinical: "დაზიანება არღვევს ენდოკრინულ ფუნქციას, ძილს, მადას ან ტემპერატურას.", tags: ["ჰორმონები", "ძილი", "შიმშილი"] },
  pineal: { label: "ფიჭვისებრი ჯირკვალი", group: "ენდოკრინული + ძილი", summary: "მცირე შუახაზის ჯირკვალი, რომელიც მელატონინს გამოყოფს და ცირკადულ რიტმს ეხმარება.", quick: "სინათლესა და სიბნელეს სხეულის დღე-ღამის სიგნალად თარგმნის.", studentCue: "მელატონინი, ცირკადული რიტმი, ეპითალამუსი, კალციფიკაცია.", clinical: "სიმსივნემ შეიძლება გამოიწვიოს პაროინოს სინდრომი.", tags: ["მელატონინი", "ცირკადული", "ძილი"] },
  insula: { label: "ინსულა", group: "ინტეროცეფცია", summary: "აერთიანებს სხეულის მდგომარეობას, გემოს, ტკივილს, ემოციას და თვითგრძნობას.", quick: "შიდა სხეულის სიგნალებს ცნობიერ გრძნობად აქცევს.", studentCue: "ინტეროცეფცია, ზიზღი, ტკივილი, გემო, craving.", clinical: "დარღვევამ შეიძლება შეცვალოს სხეულის, ტკივილის, ემოციის ან craving-ის აღქმა.", tags: ["ინტეროცეფცია", "ტკივილი", "გემო"] },
  "cingulate-cortex": { label: "ცინგულარული ქერქი", group: "მედიალური ქერქი", summary: "აკონტროლებს კონფლიქტს, ტკივილს, ძალისხმევას, ყურადღებას და ემოციურ მოქმედებას.", quick: "წყვეტს, რას სჭირდება ძალისხმევა და ყურადღება.", studentCue: "კონფლიქტი, ტკივილის აფექტი, მოტივაცია, შეცდომის აღმოჩენა.", clinical: "დაზიანება ცვლის მოტივაციას, ყურადღებას და ემოციურ რეგულაციას.", tags: ["ძალისხმევა", "ყურადღება", "ტკივილი"] },
  "visual-cortex": { label: "პირველადი ვიზუალური ქერქი", group: "ვიზუალური ქერქი", summary: "იღებს რუკირებულ სიგნალებს თალამუსიდან და ამოიღებს ადრეულ ვიზუალურ ნიშნებს.", quick: "ქმნის ვიზუალური სივრცის პირველ ქერქულ რუკას.", studentCue: "V1, კალკარინის ღარი, რეტინოტოპია, ველის დაკარგვა.", clinical: "დაზიანება იწვევს პროგნოზირებად კონტრალატერალურ დეფექტებს.", tags: ["V1", "მხედველობა", "რეტინოტოპია"] },
  "auditory-cortex": { label: "აუდიტორული ქერქი", group: "სმენის ქერქი", summary: "ამუშავებს ხმის სიხშირეს, დროს, მეტყველების ხმებს და სმენით სცენას.", quick: "ვიბრაციის ნიმუშებს ორგანიზებულ ხმად აქცევს.", studentCue: "ზედა საფეთქლის ხვეული, ტონოტოპია, სმენა და ენა.", clinical: "დაზიანება არღვევს ხმის ამოცნობას და სმენით ენას.", tags: ["სმენა", "ტონოტოპია", "მეტყველება"] },
  "angular-gyrus": { label: "კუთხის ხვეული", group: "ასოციაციური ქერქი", summary: "აერთიანებს ენას, რიცხვს, კითხვას, სივრცით ყურადღებას და სემანტიკას.", quick: "სიმბოლოებს, მნიშვნელობას და სივრცით იდეებს აერთიანებს.", studentCue: "გერსტმანის ნიშნები, კითხვა, წერა, ანგარიში.", clinical: "დომინანტური დაზიანება არღვევს ანგარიშს, წერას და მარჯვენა-მარცხენა ორიენტაციას.", tags: ["კითხვა", "მათემატიკა", "სემანტიკა"] },
  "fusiform-gyrus": { label: "ფუზიფორმული ხვეული", group: "ვენტრალური ვიზუალური ნაკადი", summary: "მაღალი დონის ვიზუალური ამოცნობა, განსაკუთრებით სახეები და გამოცდილ კატეგორიები.", quick: "სახეების და მნიშვნელოვანი ვიზუალური ნიმუშების ამოცნობას ეხმარება.", studentCue: "სახის ამოცნობა, ვენტრალური ნაკადი, პროზოპაგნოზია.", clinical: "მარჯვენა ფუზიფორმის დაზიანება პროზოპაგნოზიასთანაა დაკავშირებული.", tags: ["სახეები", "ამოცნობა", "ვენტრალური"] },
  "nucleus-accumbens": { label: "ბირთვი აკუმბენსი", group: "ჯილდოს წრე", summary: "აკავშირებს დოფამინს, მოტივაციას, განმტკიცებით სწავლას და ჯილდოზე ქცევას.", quick: "ნიშნავს ჯილდოს და მოქმედების გამეორებას ამოტივირებს.", studentCue: "ჯილდო, დამოკიდებულება, მოტივაცია, ვენტრალური სტრიატუმი.", clinical: "წრეების ცვლილება მნიშვნელოვანია დამოკიდებულებაში, დეპრესიასა და აპათიაში.", tags: ["ჯილდო", "მოტივაცია", "დოფამინი"] },
  "substantia-nigra": { label: "შავი ნივთიერება", group: "შუატვინის დოფამინი", summary: "აწვდის დოფამინს მოძრაობის ძალისთვის, ჩვევებისა და ჯილდოს პროგნოზისთვის.", quick: "დოფამინით მოძრაობის დაწყებას და მასშტაბირებას ეხმარება.", studentCue: "პარკინსონი, დოფამინი, შუატვინი, ბრადიკინეზია.", clinical: "დეგენერაცია პარკინსონის მოტორული ნიშნების ცენტრია.", tags: ["დოფამინი", "მოძრაობა", "პარკინსონი"] },
  pons: { label: "ხიდი", group: "ტვინის ღერო", summary: "ქერქის სიგნალებს ნათხემს გადასცემს და ეხმარება ძილს, სუნთქვასა და კრანიალურ ნერვებს.", quick: "ხიდია ქერქს, ნათხემს, სახესა და სიფხიზლეს შორის.", studentCue: "ტვინის ღეროს ხიდი, კრანიალური ნერვები, ძილი, სუნთქვა.", clinical: "დაზიანება ცვლის თვალის მოძრაობას, სახის ფუნქციას, სიფხიზლეს და გრძელ გზებს.", tags: ["რელე", "ძილი", "კრანიალური ნერვები"] },
  medulla: { label: "მოგრძო ტვინი", group: "ტვინის ღერო", summary: "მართავს სუნთქვას, გულისცემას, ყლაპვას და ღებინების რეფლექსებს.", quick: "სასიცოცხლო რეფლექსებს მუდმივად ამუშავებს.", studentCue: "სუნთქვა, გულ-სისხლძარღვთა კონტროლი, ყლაპვა, პირამიდული გადაკვეთა.", clinical: "დაზიანება საფრთხეს უქმნის სუნთქვას, ცირკულაციას და ყლაპვას.", tags: ["სუნთქვა", "გულისცემა", "რეფლექსები"] },
  "cerebellar-vermis": { label: "ნათხემის ჭია", group: "ნათხემის შუახაზი", summary: "აკოორდინირებს პოზას, ტანს, სიარულის სტაბილობას და თვალ-თავის ბალანსს.", quick: "მოძრაობისას სხეულის შუახაზს ასტაბილურებს.", studentCue: "სიარულის ატაქსია, ტანის არასტაბილურობა, პოზა.", clinical: "დაზიანება კლასიკურად იწვევს სიარულის და ტანის ატაქსიას.", tags: ["სიარული", "პოზა", "ბალანსი"] }
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function partStyle(part) {
  return `--part-color: ${part.color}`;
}

function iconMarkup(icon, className = "ui-icon") {
  return `<iconify-icon class="${className}" icon="${icon}" aria-hidden="true"></iconify-icon>`;
}

function partIcon(part) {
  return PART_ICONS[part.id] || "mdi:atom";
}

function interestingFact(part) {
  return INTERESTING_FACTS[part.id] || "Its role is easiest to remember by pairing location, pathway, function, and lesion pattern.";
}

function tr(key) {
  return UI_TEXT[state.lang]?.[key] ?? UI_TEXT.en[key] ?? key;
}

let EN_TO_KA_TERM = null;
function buildTermDict() {
  EN_TO_KA_TERM = {};
  Object.keys(KA_PARTS).forEach((id) => {
    const en = PART_MAP.get(id);
    if (en && KA_PARTS[id].label) EN_TO_KA_TERM[en.label.toLowerCase().trim()] = KA_PARTS[id].label;
  });
  // Common connection/pathway terms that are not standalone atlas parts.
  Object.assign(EN_TO_KA_TERM, {
    "dopamine systems": "დოფამინური სისტემები",
    "cranial nerves": "კრანიალური ნერვები",
    "spinal cord": "ზურგის ტვინი",
    "autonomic system": "ავტონომიური სისტემა",
    "vestibular nuclei": "ვესტიბულური ბირთვები",
    "language network": "ენის ქსელი",
    "motor cortex": "მოტორული ქერქი",
    "somatosensory cortex": "სომატოსენსორული ქერქი",
    "visual association cortex": "ვიზუალური ასოციაციური ქერქი"
  });
}

function translateTerm(text) {
  if (state.lang !== "ka") return text;
  if (!EN_TO_KA_TERM) buildTermDict();
  return EN_TO_KA_TERM[String(text).toLowerCase().trim()] || text;
}

function currentPart(part) {
  if (state.lang !== "ka") return part;
  const translated = KA_PARTS[part.id];
  if (!translated) return part;
  // KA_PARTS only carries the summary-level fields, so rebuild the full
  // deep-dive content (shown on the expanded article page) in Georgian
  // rather than letting it fall back to English.
  const deep = {
    anatomy: (translated.deep && translated.deep.anatomy)
      || `${translated.label} — დაიმახსოვრე მისი მდებარეობა ახლომდებარე სტრუქტურებთან ერთად.`,
    physiology: (translated.deep && translated.deep.physiology) || translated.summary || part.deep.physiology,
    psychology: (translated.deep && translated.deep.psychology) || translated.quick || part.deep.psychology,
    medical: (translated.deep && translated.deep.medical) || translated.clinical || part.deep.medical,
    pathway: (translated.deep && translated.deep.pathway)
      || (part.deep.pathway || []).map(translateTerm)
  };
  return {
    ...part,
    ...translated,
    connections: translated.connections || (part.connections || []).map(translateTerm),
    tags: translated.tags || part.tags,
    deep
  };
}

function currentInterestingFact(part) {
  if (state.lang === "ka") {
    return "დასამახსოვრებლად დააკავშირე მდებარეობა, გზა, ფუნქცია და დაზიანების ნიმუში.";
  }
  return interestingFact(part);
}

function renderStaticText() {
  document.documentElement.lang = state.lang === "ka" ? "ka" : "en";
  els.brandTitle.textContent = tr("brandTitle");
  els.brandSubtitle.textContent = tr("brandSubtitle");
  els.navLinks.forEach((link) => {
    const labels = {
      atlas: tr("navAtlas"),
      neurons: tr("navNeurons"),
      study: tr("navStudy")
    };
    link.querySelector("span").textContent = labels[link.dataset.route] || link.dataset.route;
  });
  if (els.selectedLabel) els.selectedLabel.textContent = tr("selected");
  els.langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === state.lang);
  });

  const viewCopy = {
    full: ["full", "fullTitle"],
    half: ["half", "halfTitle"],
    inside: ["inside", "insideTitle"],
    split: ["split", "splitTitle"]
  };
  els.viewButtons.forEach((button) => {
    const [labelKey, titleKey] = viewCopy[button.dataset.view];
    button.textContent = tr(labelKey);
    button.title = tr(titleKey);
  });
}

function renderBrainHotspots() {
  if (!els.brainHotspots) return;
  els.brainHotspots.innerHTML = BRAIN_HOTSPOTS
    .map(({ id, x, y }) => {
      const part = PART_MAP.get(id);
      if (!part) return "";
      const display = currentPart(part);
      return `
        <button class="brain-hotspot ${part.id === state.selectedPartId ? "is-active" : ""}" type="button" data-part="${part.id}" aria-label="${escapeHtml(display.label)}" style="--x:${x}%; --y:${y}%; --hotspot-color:${part.color}">
          <span class="sr-only">${escapeHtml(display.label)}</span>
        </button>
      `;
    })
    .join("");
}

function updateHotspotState() {
  if (!els.brainHotspots) return;
  els.brainHotspots.querySelectorAll(".brain-hotspot").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.part === state.selectedPartId);
  });
}

function setSelectedPart(partId, options = {}) {
  const part = PART_MAP.get(partId) || PARTS[0];
  state.selectedPartId = part.id;
  state.calloutVisible = Boolean(options.showCallout);
  state.calloutAnchor = options.anchor || null;
  renderInfoDock(part);
  updateLegend(part);
  updateMeshTargets();
  if (!state.calloutVisible) {
    hideCallout();
  } else {
    window.requestAnimationFrame(positionAnnotation);
  }

  if (options.focusAtlas && state.route !== "atlas") {
    window.location.hash = "atlas";
  }
}

function hideCallout() {
  state.calloutVisible = false;
  state.calloutAnchor = null;
  els.brainCallout.classList.remove("is-visible");
  els.labelLayer.classList.remove("is-visible");
  updateHotspotState();
}

function updateLegend(part) {
  els.legendTitle.textContent = currentPart(part).label;
  els.legendAccent.style.background = part.color;
  els.legendAccent.style.boxShadow = `0 0 18px ${part.color}`;
}

function renderFactCard({ title, icon, body, detail, list }) {
  const preview = body || (list ? list.slice(0, 2).join(" / ") : "");
  return `
    <details class="fact-card expandable">
      <summary>
        ${iconMarkup(icon, "card-icon")}
        <span class="summary-copy">
          <strong>${escapeHtml(title)}</strong>
          ${preview ? `<small>${escapeHtml(preview)}</small>` : ""}
        </span>
      </summary>
      ${body ? `<p>${escapeHtml(body)}</p>` : ""}
      ${list ? `<ul>${list.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : ""}
      ${detail ? `<div class="expanded-note">${escapeHtml(detail)}</div>` : ""}
    </details>
  `;
}

function updateAnnotationContent(part) {
  if (!els.brainCallout) return;
  const display = currentPart(part);
  els.brainCallout.style.setProperty("--part-color", part.color);
  els.brainCallout.innerHTML = `
    <div class="callout-head">
      ${iconMarkup(partIcon(part), "callout-icon")}
      <div>
        <small>${escapeHtml(display.group)}</small>
        <strong>${escapeHtml(display.label)}</strong>
      </div>
    </div>
    <p>${escapeHtml(display.quick)}</p>
    <button class="callout-close" type="button" aria-label="${escapeHtml(tr("closeNote"))}">x</button>
  `;
}

function positionAnnotation() {
  if (!els.labelLayer || els.atlasScreen.hidden) return;
  if (!state.calloutVisible) {
    hideCallout();
    return;
  }

  const stage = els.canvas.parentElement;
  const rect = stage.getBoundingClientRect();
  let anchorX = state.calloutAnchor?.x;
  let anchorY = state.calloutAnchor?.y;

  if (anchorX == null || anchorY == null) {
    if (!THREE || !camera) return;
    const selectedEntry = visualEntries.find((entry) => entry.partId === state.selectedPartId);
    if (!selectedEntry) {
      hideCallout();
      return;
    }
    const worldPosition = annotationVector.target || new THREE.Vector3();
    annotationVector.target = worldPosition;
    selectedEntry.mesh.getWorldPosition(worldPosition);
    worldPosition.project(camera);
    anchorX = (worldPosition.x * 0.5 + 0.5) * rect.width;
    anchorY = (-worldPosition.y * 0.5 + 0.5) * rect.height;
  }

  const calloutWidth = Math.min(220, Math.max(178, rect.width * 0.18));
  const calloutX = anchorX < rect.width * 0.55
    ? Math.min(rect.width - calloutWidth - 18, anchorX + 70)
    : Math.max(18, anchorX - calloutWidth - 70);
  const calloutY = Math.max(70, Math.min(rect.height - 112, anchorY - 44));
  els.brainCallout.style.width = `${calloutWidth}px`;
  els.brainCallout.style.transform = `translate(${calloutX}px, ${calloutY}px) scale(1)`;
  els.brainCallout.classList.add("is-visible");
}

// --- Spaced-repetition review queue (localStorage, Leitner-style) ---
const REVIEW_KEY = "brainAtlasReview";
const REVIEW_INTERVALS = [1, 3, 7, 16, 35]; // days per box
const reviewSession = { id: null, revealed: false };

function loadReview() {
  try {
    return JSON.parse(localStorage.getItem(REVIEW_KEY)) || {};
  } catch (error) {
    return {};
  }
}

function saveReview() {
  try {
    localStorage.setItem(REVIEW_KEY, JSON.stringify(reviewData));
  } catch (error) {
    /* storage unavailable — keep in memory only */
  }
}

let reviewData = loadReview();

function isQueued(partId) {
  return Boolean(reviewData[partId]);
}

function toggleReview(partId) {
  if (reviewData[partId]) {
    delete reviewData[partId];
  } else {
    reviewData[partId] = { box: 0, due: Date.now() };
  }
  saveReview();
  updateReviewBadge();
}

function reviewDueList() {
  const now = Date.now();
  return Object.keys(reviewData)
    .filter((id) => PART_MAP.has(id) && reviewData[id].due <= now)
    .sort((a, b) => reviewData[a].due - reviewData[b].due);
}

function reviewGrade(partId, remembered) {
  const item = reviewData[partId];
  if (!item) return;
  item.box = remembered ? Math.min(REVIEW_INTERVALS.length - 1, item.box + 1) : 0;
  item.due = Date.now() + REVIEW_INTERVALS[item.box] * 86400000;
  saveReview();
  updateReviewBadge();
}

function updateReviewBadge() {
  if (!els.reviewBadge) return;
  const due = reviewDueList().length;
  els.reviewBadge.textContent = String(due);
  els.reviewBadge.hidden = due === 0;
}

function renderInfoDock(part) {
  const display = currentPart(part);
  els.infoDock.style.setProperty("--part-color", part.color);
  const queued = isQueued(part.id);
  const pathway = display.deep.pathway || [];
  els.infoDock.innerHTML = `
    <article class="region-card ${state.infoExpanded ? "is-expanded" : ""}" data-part="${part.id}" aria-expanded="${state.infoExpanded}" title="${escapeHtml(tr("doubleClickHint"))}">
      <div class="region-card__head">
        <span class="region-card__dot" aria-hidden="true"></span>
        <div class="region-card__titles">
          <small>${escapeHtml(display.group)}</small>
          <strong>${escapeHtml(display.label)}</strong>
        </div>
        <span class="region-card__hint">${escapeHtml(tr("doubleClickHint"))} ${iconMarkup("mdi:chevron-down")}</span>
      </div>
      <p class="region-card__short">${escapeHtml(display.quick)}</p>
      <div class="region-card__actions">
        <button type="button" class="region-chip ${queued ? "is-queued" : ""}" data-action="review">
          ${iconMarkup(queued ? "mdi:check-bold" : "mdi:cards-outline")}
          <span>${escapeHtml(queued ? tr("inReview") : tr("addReview"))}</span>
        </button>
        <a class="region-chip" href="#part/${part.id}">${iconMarkup("mdi:book-open-page-variant")} <span>${escapeHtml(tr("openFullPage"))}</span></a>
      </div>
      <div class="region-card__long">
        <div class="region-card__long-inner">
          <div class="region-long-grid">
            <div class="region-long-block"><h4>${iconMarkup("mdi:map-marker")} ${escapeHtml(tr("anatomy"))}</h4><p>${escapeHtml(display.deep.anatomy)}</p></div>
            <div class="region-long-block"><h4>${iconMarkup("mdi:flash")} ${escapeHtml(tr("physiology"))}</h4><p>${escapeHtml(display.deep.physiology)}</p></div>
            <div class="region-long-block"><h4>${iconMarkup("mdi:brain")} ${escapeHtml(tr("psychologyLens"))}</h4><p>${escapeHtml(display.deep.psychology)}</p></div>
            <div class="region-long-block"><h4>${iconMarkup("mdi:stethoscope")} ${escapeHtml(tr("clinicalPattern"))}</h4><p>${escapeHtml(display.deep.medical)}</p></div>
            ${pathway.length ? `<div class="region-pathway">${pathway.map((step, i) => `<span>${i > 0 ? "&rarr;&nbsp;" : ""}<b>${escapeHtml(step)}</b></span>`).join("")}</div>` : ""}
          </div>
        </div>
      </div>
    </article>
  `;
  updateAnnotationContent(part);
}

function renderRoute() {
  const route = window.location.hash.replace(/^#\/?/, "") || "atlas";
  state.route = route;
  updateNavigation(route);

  // The neuron dive lives inside the atlas canvas, so it keeps the atlas screen.
  if (route !== "neurons") endDive();

  if (route === "atlas") {
    els.atlasScreen.hidden = false;
    els.articleScreen.hidden = true;
    els.topbarActions.hidden = false;
    els.eyebrow.textContent = tr("atlasEyebrow");
    els.pageTitle.textContent = tr("atlasTitle");
    resizeRenderer();
    applyAos();
    return;
  }

  if (route === "neurons" && state.threeReady) {
    els.atlasScreen.hidden = false;
    els.articleScreen.hidden = true;
    els.topbarActions.hidden = false;
    els.eyebrow.textContent = tr("neuronsEyebrow");
    els.pageTitle.textContent = tr("neuronsTitle");
    renderNeuronCaption();
    startDive();
    resizeRenderer();
    return;
  }

  els.atlasScreen.hidden = true;
  els.articleScreen.hidden = false;
  els.topbarActions.hidden = true;
  els.articleScreen.scrollTop = 0;
  hideCallout();

  if (route === "neurons") {
    els.eyebrow.textContent = tr("neuronsEyebrow");
    els.pageTitle.textContent = tr("neuronsTitle");
    renderNeuronsPage();
    applyAos(els.articleScreen);
    return;
  }

  if (route === "study") {
    els.eyebrow.textContent = tr("studyEyebrow");
    els.pageTitle.textContent = tr("studyTitle");
    renderStudyPage();
    applyAos(els.articleScreen);
    return;
  }

  if (route.startsWith("part/")) {
    const partId = route.split("/")[1];
    const part = PART_MAP.get(partId);
    if (part) {
      setSelectedPart(part.id);
      const display = currentPart(part);
      els.eyebrow.textContent = display.group;
      els.pageTitle.textContent = `${display.label} ${tr("deepDive")}`;
      renderPartArticle(part);
      applyAos(els.articleScreen);
      return;
    }
  }

  window.location.hash = "atlas";
}

function updateNavigation(route) {
  els.navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.route === route || (route.startsWith("part/") && link.dataset.route === "atlas"));
  });
}

let aosObserver;

function applyAos(root = document) {
  const items = Array.from(root.querySelectorAll(".article-panel, .note-block, .study-panel, .fact-card, .metric, .path-step, .info-main, .info-grid"));
  items.forEach((item, index) => {
    if (!item.dataset.aos) {
      item.dataset.aos = index % 2 ? "fade-up" : "fade-in";
    }
    item.style.setProperty("--aos-delay", `${Math.min(index * 35, 280)}ms`);
  });

  if (!aosObserver) {
    aosObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("aos-in");
          aosObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });
  }

  root.querySelectorAll("[data-aos]").forEach((item) => {
    item.classList.remove("aos-in");
    aosObserver.observe(item);
  });
}

function renderPartArticle(part) {
  const display = currentPart(part);
  const related = PARTS
    .filter((candidate) => candidate.id !== part.id)
    .filter((candidate) => candidate.connections.some((connection) => part.connections.includes(connection)) || candidate.group === part.group)
    .slice(0, 3);

  els.articleScreen.innerHTML = `
    <div class="article-layout" style="${partStyle(part)}">
      <section class="article-hero">
        <article class="article-panel">
          <p class="article-kicker">${escapeHtml(display.group)}</p>
          <h2>${escapeHtml(display.label)}</h2>
          <p class="lede">${escapeHtml(display.summary)}</p>
          <div class="tag-row">
            ${display.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
          </div>
          <div class="metric-strip">
            <div class="metric">
              <small>${escapeHtml(tr("bestAnchor"))}</small>
              <strong>${escapeHtml(display.tags[0])}</strong>
            </div>
            <div class="metric">
              <small>${escapeHtml(tr("system"))}</small>
              <strong>${escapeHtml(display.group)}</strong>
            </div>
            <div class="metric">
              <small>${escapeHtml(tr("examLens"))}</small>
              <strong>${escapeHtml(display.studentCue.split(",")[0])}</strong>
            </div>
          </div>
          <div class="dock-actions">
            <a class="primary-link" href="#atlas">${escapeHtml(tr("backAtlas"))}</a>
            <a class="ghost-link" href="#study">${escapeHtml(tr("studyBoard"))}</a>
          </div>
        </article>

        <aside class="article-panel">
          <h2>${escapeHtml(tr("signalPath"))}</h2>
          <div class="pathway-map">
            ${display.deep.pathway.map((step, index) => `
              <div class="path-step">
                <span>${index + 1}</span>
                <div>
                  <strong>${escapeHtml(step)}</strong>
                  <small>${index === 0 ? tr("input") : index === display.deep.pathway.length - 1 ? tr("output") : tr("processing")}</small>
                </div>
              </div>
            `).join("")}
          </div>
        </aside>
      </section>

      <section class="article-grid">
        <article class="note-block">
          <h3>${escapeHtml(tr("anatomy"))}</h3>
          <p>${escapeHtml(display.deep.anatomy)}</p>
        </article>
        <article class="note-block">
          <h3>${escapeHtml(tr("physiology"))}</h3>
          <p>${escapeHtml(display.deep.physiology)}</p>
        </article>
        <article class="note-block">
          <h3>${escapeHtml(tr("psychologyLens"))}</h3>
          <p>${escapeHtml(display.deep.psychology)}</p>
        </article>
      </section>

      <section class="article-grid">
        <article class="note-block">
          <h3>${escapeHtml(tr("clinicalPattern"))}</h3>
          <p>${escapeHtml(display.deep.medical)}</p>
        </article>
        <article class="note-block">
          <h3>${escapeHtml(tr("connections"))}</h3>
          <ul>
            ${display.connections.map((connection) => `<li>${escapeHtml(connection)}</li>`).join("")}
          </ul>
        </article>
        <article class="note-block">
          <h3>${escapeHtml(tr("relatedStructures"))}</h3>
          <ul>
            ${related.map((item) => `<li><a href="#part/${item.id}">${escapeHtml(currentPart(item).label)}</a></li>`).join("") || `<li>${escapeHtml(tr("relatedFallback"))}</li>`}
          </ul>
        </article>
      </section>
    </div>
  `;
}

function renderNeuronsPage() {
  els.articleScreen.innerHTML = `
    <div class="article-layout">
      <section class="article-hero">
        <article class="article-panel">
          <p class="article-kicker">${iconMarkup("mdi:dna", "article-kicker-icon")} ${escapeHtml(tr("neuronKicker"))}</p>
          <h2>${escapeHtml(tr("neuronHeading"))}</h2>
          <p class="lede">${escapeHtml(tr("neuronLead"))}</p>
          <div class="metric-strip">
            <div class="metric">
              <small>${escapeHtml(tr("input"))}</small>
              <strong>${escapeHtml(tr("dendrites"))}</strong>
            </div>
            <div class="metric">
              <small>${escapeHtml(tr("decisionPoint"))}</small>
              <strong>${escapeHtml(tr("axonHillock"))}</strong>
            </div>
            <div class="metric">
              <small>${escapeHtml(tr("output"))}</small>
              <strong>${escapeHtml(tr("synapse"))}</strong>
            </div>
          </div>
        </article>
        <figure class="neuron-figure" data-aos="fade-left" aria-label="Realistic neuron render">
          <img src="./assets/neuron-render.png" alt="Realistic 3D neuron with dendrites, soma, axon, myelin segments, and synaptic terminals">
          <figcaption>
            <span>${escapeHtml(tr("dendrites"))}</span>
            <span>${escapeHtml(tr("soma"))}</span>
            <span>${escapeHtml(tr("axon"))}</span>
            <span>${escapeHtml(tr("synapse"))}</span>
          </figcaption>
        </figure>
      </section>

      <section class="article-grid">
        <article class="note-block">
          <h3>${iconMarkup("mdi:lightning-bolt-circle", "card-icon")} ${escapeHtml(tr("howSignalMoves"))}</h3>
          <ul>
            ${tr("signalMoveItems").map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </article>
        <article class="note-block">
          <h3>${iconMarkup("mdi:test-tube", "card-icon")} ${escapeHtml(tr("neurotransmitters"))}</h3>
          <p>${escapeHtml(tr("neurotransmittersBody"))}</p>
        </article>
        <article class="note-block">
          <h3>${iconMarkup("mdi:shield-check", "card-icon")} ${escapeHtml(tr("gliaMatter"))}</h3>
          <p>${escapeHtml(tr("gliaBody"))}</p>
        </article>
      </section>

      <section class="article-grid">
        <article class="note-block">
          <h3>${iconMarkup("mdi:account-group", "card-icon")} ${escapeHtml(tr("forPsychology"))}</h3>
          <p>${escapeHtml(tr("psychologyBody"))}</p>
        </article>
        <article class="note-block">
          <h3>${iconMarkup("mdi:stethoscope", "card-icon")} ${escapeHtml(tr("forMedicine"))}</h3>
          <p>${escapeHtml(tr("medicineBody"))}</p>
        </article>
        <article class="note-block">
          <h3>${iconMarkup("mdi:map-marker", "card-icon")} ${escapeHtml(tr("bestNextStep"))}</h3>
          <p>${escapeHtml(tr("bestNextBody"))}</p>
          <div class="dock-actions">
            <a class="primary-link" href="#atlas">${escapeHtml(tr("openAtlas"))}</a>
          </div>
        </article>
      </section>
    </div>
  `;
}

function renderStudyPage() {
  const dueIds = reviewDueList();
  const queuedIds = Object.keys(reviewData).filter((id) => PART_MAP.has(id));
  els.articleScreen.innerHTML = `
    <div class="article-layout">
      <section class="article-hero">
        <article class="article-panel">
          <p class="article-kicker">${iconMarkup("mdi:cards-outline", "article-kicker-icon")} ${escapeHtml(tr("reviewKicker"))}</p>
          <h2>${escapeHtml(tr("reviewHeading"))}</h2>
          <p class="lede">${escapeHtml(tr("reviewLead"))}</p>
          <div class="metric-strip">
            <div class="metric"><small>${escapeHtml(tr("dueNow"))}</small><strong>${dueIds.length}</strong></div>
            <div class="metric"><small>${escapeHtml(tr("inQueue"))}</small><strong>${queuedIds.length}</strong></div>
            <div class="metric"><small>${escapeHtml(tr("method"))}</small><strong>${escapeHtml(tr("spacedRepetition"))}</strong></div>
          </div>
        </article>
        <article class="article-panel" id="reviewPanel">
          ${renderReviewCard(dueIds)}
        </article>
      </section>

      ${queuedIds.length ? renderQueueList(queuedIds) : ""}
    </div>
  `;
}

function renderReviewCard(dueIds) {
  if (!dueIds.length) {
    const queued = Object.keys(reviewData).filter((id) => PART_MAP.has(id)).length;
    const message = queued ? tr("reviewCaughtUp") : tr("reviewEmpty");
    return `
      <p class="article-kicker">${iconMarkup("mdi:check-decagram", "article-kicker-icon")} ${escapeHtml(tr("recallPrompt"))}</p>
      <div class="empty-state">${escapeHtml(message)} <a href="#atlas">${escapeHtml(tr("openAtlas"))}</a></div>
    `;
  }
  const id = dueIds[0];
  if (reviewSession.id !== id) {
    reviewSession.id = id;
    reviewSession.revealed = false;
  }
  const display = currentPart(PART_MAP.get(id));
  if (reviewSession.revealed) {
    return `
      <p class="article-kicker">${escapeHtml(display.group)}</p>
      <h2>${escapeHtml(display.label)}</h2>
      <p class="lede">${escapeHtml(display.quick)}</p>
      <p>${escapeHtml(display.clinical)}</p>
      <div class="dock-actions">
        <button class="primary-link" type="button" data-review="good">${iconMarkup("mdi:check", "action-icon")} ${escapeHtml(tr("remembered"))}</button>
        <button class="ghost-link" type="button" data-review="again">${iconMarkup("mdi:refresh", "action-icon")} ${escapeHtml(tr("forgot"))}</button>
      </div>
    `;
  }
  return `
    <p class="article-kicker">${escapeHtml(tr("recallPrompt"))}</p>
    <h2>${escapeHtml(display.label)}</h2>
    <p>${escapeHtml(tr("recallHint"))}</p>
    <div class="dock-actions">
      <button class="primary-link" type="button" data-review="reveal">${iconMarkup("mdi:eye", "action-icon")} ${escapeHtml(tr("reveal"))}</button>
      <a class="ghost-link" href="#part/${id}">${escapeHtml(tr("openFullPage"))}</a>
    </div>
  `;
}

function renderQueueList(ids) {
  return `
    <section class="study-panel">
      <h3>${iconMarkup("mdi:format-list-checks", "card-icon")} ${escapeHtml(tr("reviewQueue"))}</h3>
      <ul>
        ${ids.map((id) => {
          const display = currentPart(PART_MAP.get(id));
          const due = reviewData[id].due;
          const label = due <= Date.now() ? tr("dueNow") : new Date(due).toLocaleDateString();
          return `<li><a href="#part/${id}">${escapeHtml(display.label)}</a> &middot; <span class="queue-due">${escapeHtml(label)}</span></li>`;
        }).join("")}
      </ul>
    </section>
  `;
}

document.querySelector(".page-nav").addEventListener("click", (event) => {
  const link = event.target.closest("[data-route]");
  if (!link) return;
  window.requestAnimationFrame(renderRoute);
});

els.brainHotspots.addEventListener("click", (event) => {
  const button = event.target.closest("[data-part]");
  if (!button) return;
  const stageRect = els.canvas.parentElement.getBoundingClientRect();
  const buttonRect = button.getBoundingClientRect();
  setSelectedPart(button.dataset.part, {
    showCallout: true,
    anchor: {
      x: buttonRect.left - stageRect.left + buttonRect.width / 2,
      y: buttonRect.top - stageRect.top + buttonRect.height / 2
    }
  });
});

els.brainCallout.addEventListener("click", (event) => {
  if (event.target.closest(".callout-close")) {
    hideCallout();
  }
});

// Bottom region card: double-click toggles short <-> long; chip adds to review.
els.infoDock.addEventListener("dblclick", (event) => {
  const card = event.target.closest(".region-card");
  if (!card || event.target.closest("a") || event.target.closest(".region-chip")) return;
  state.infoExpanded = !state.infoExpanded;
  card.classList.toggle("is-expanded", state.infoExpanded);
  card.setAttribute("aria-expanded", String(state.infoExpanded));
});

els.infoDock.addEventListener("click", (event) => {
  const reviewBtn = event.target.closest('[data-action="review"]');
  if (!reviewBtn) return;
  event.preventDefault();
  toggleReview(state.selectedPartId);
  renderInfoDock(PART_MAP.get(state.selectedPartId));
});

// Study review controls
els.articleScreen.addEventListener("click", (event) => {
  const btn = event.target.closest("[data-review]");
  if (!btn) return;
  const action = btn.dataset.review;
  if (action === "reveal") {
    reviewSession.revealed = true;
  } else {
    reviewGrade(reviewSession.id, action === "good");
    reviewSession.id = null;
    reviewSession.revealed = false;
  }
  renderStudyPage();
  applyAos(els.articleScreen);
});

document.addEventListener("pointerdown", (event) => {
  if (!state.calloutVisible) return;
  if (event.target.closest(".brain-callout") || event.target.closest(".brain-hotspot")) return;
  hideCallout();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    hideCallout();
  }
});

els.viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (state.diving) window.location.hash = "atlas";
    state.viewMode = button.dataset.view;
    els.viewButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    updateMeshTargets();
    updateModelStatus();
  });
});

if (els.diveBtn) {
  els.diveBtn.addEventListener("click", () => {
    window.location.hash = state.diving ? "atlas" : "neurons";
  });
}

els.langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.lang = button.dataset.lang;
    localStorage.setItem("brainAtlasLang", state.lang);
    renderStaticText();
    renderInfoDock(PART_MAP.get(state.selectedPartId));
    updateLegend(PART_MAP.get(state.selectedPartId));
    updateModelStatus();
    updateReviewBadge();
    if (state.diving) renderNeuronCaption();
    renderRoute();
  });
});

window.addEventListener("hashchange", renderRoute);

renderStaticText();
renderInfoDock(PART_MAP.get(state.selectedPartId));
updateLegend(PART_MAP.get(state.selectedPartId));
updateModelStatus();
updateReviewBadge();
renderRoute();

async function initThree() {
  try {
    const [threeModule, controlsModule] = await Promise.all([
      import("three"),
      import("three/addons/controls/OrbitControls.js")
    ]);
    THREE = threeModule;
    OrbitControls = controlsModule.OrbitControls;
    setupScene();
    state.threeReady = true;
    updateModelStatus();
    if (els.diveBtn) els.diveBtn.hidden = false;
    // Re-run routing now that 3D is ready (e.g. a #neurons deep-link can dive).
    renderRoute();
  } catch (error) {
    console.error(error);
    state.threeReady = false;
    els.modelStatus.textContent = tr("unavailableStatus");
    if (els.diveBtn) els.diveBtn.hidden = true;
    drawFallbackBrain();
  }
}

function setupScene() {
  const stage = els.canvas.parentElement;
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x05070b, 0.015);
  tmpVec = new THREE.Vector3();
  nodeCenter = new THREE.Vector3();
  nodeDir = new THREE.Vector3();
  nodeView = new THREE.Vector3();

  camera = new THREE.PerspectiveCamera(46, 1, 0.05, 60);
  camera.position.set(0, 0.16, cameraRig.baseZ);

  renderer = new THREE.WebGLRenderer({
    canvas: els.canvas,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance"
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.localClippingEnabled = true;

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.07;
  controls.autoRotate = !prefersReducedMotion;
  controls.autoRotateSpeed = 0.16;
  controls.enablePan = false;
  controls.minDistance = 1.2;
  controls.maxDistance = 12;
  controls.target.set(0, 0.12, 0);
  controls.update();

  raycaster = new THREE.Raycaster();
  pointer = new THREE.Vector2();
  sagittalPlane = new THREE.Plane(new THREE.Vector3(-1, 0, 0), 0.06);

  brainPivot = new THREE.Group();
  scene.add(brainPivot);

  addStarfield();
  createBrainModel();
  createNeuronModel();
  updateMeshTargets();

  els.canvas.addEventListener("click", onCanvasClick);
  els.canvas.addEventListener("pointermove", onCanvasPointerMove);
  els.canvas.addEventListener("pointerleave", () => {
    els.canvas.style.cursor = "default";
    pointerParallax.tx = 0;
    pointerParallax.ty = 0;
    hideNodeTip();
  });

  resizeObserver = new ResizeObserver(resizeRenderer);
  resizeObserver.observe(stage);
  resizeRenderer();
  animateScene();
}

function addStarfield() {
  const count = 520;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    const r = 6 + Math.random() * 16;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.cos(phi) * 0.6;
    positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const material = new THREE.PointsMaterial({
    color: 0x9fb4c9,
    size: 0.03,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.5,
    depthWrite: false
  });
  starField = new THREE.Points(geometry, material);
  scene.add(starField);
}

function createBrainModel() {
  brainGroup = new THREE.Group();
  brainGroup.rotation.set(-0.08, -0.34, 0.02);
  brainPivot.add(brainGroup);
  createCortexShell();

  const cortical = [
    { partId: "frontal", x: 0.44, y: 0.54, z: 0.72, scale: [0.64, 0.54, 0.78], seed: 1 },
    { partId: "parietal", x: 0.42, y: 0.9, z: -0.1, scale: [0.68, 0.56, 0.7], seed: 2 },
    { partId: "temporal", x: 0.76, y: 0.06, z: 0.06, scale: [0.5, 0.38, 0.72], seed: 3 },
    { partId: "occipital", x: 0.38, y: 0.54, z: -0.82, scale: [0.58, 0.5, 0.56], seed: 4 },
    { partId: "cerebellum", x: 0.34, y: -0.52, z: -0.92, scale: [0.44, 0.3, 0.42], seed: 5 }
  ];

  cortical.forEach((layout) => {
    createOrganicPart({
      ...layout,
      side: "left",
      x: -layout.x,
      rotation: [0.04, -0.18, 0.04],
      cortical: true
    });
    createOrganicPart({
      ...layout,
      side: "right",
      rotation: [0.04, 0.18, -0.04],
      cortical: true
    });
  });

  createCapsulePart("brainstem", [0, -0.92, -0.18], [0.34, 0.92, 0.34], [0.14, 0, 0]);
  createOrganicPart({
    partId: "thalamus",
    side: "internal",
    x: 0,
    y: 0.15,
    z: -0.05,
    scale: [0.38, 0.3, 0.34],
    rotation: [0.1, 0.3, 0],
    seed: 12,
    cortical: false,
    opacity: 0.82
  });
  createTubePart("corpus-callosum", [
    [-0.66, 0.42, -0.08],
    [-0.28, 0.58, 0.12],
    [0.28, 0.58, 0.12],
    [0.66, 0.42, -0.08]
  ], 0.055, "internal", 0.9);
  createTubePart("hippocampus", [
    [-0.54, -0.06, 0.28],
    [-0.66, -0.16, 0.0],
    [-0.56, -0.22, -0.34],
    [-0.34, -0.12, -0.5]
  ], 0.05, "left", 0.9);
  createTubePart("hippocampus", [
    [0.54, -0.06, 0.28],
    [0.66, -0.16, 0.0],
    [0.56, -0.22, -0.34],
    [0.34, -0.12, -0.5]
  ], 0.05, "right", 0.9);
  createLimbicRing();
  createMarkerPart("prefrontal", [-0.36, 0.57, 1.16], [0.28, 0.22, 0.18], "left", 0.92);
  createMarkerPart("prefrontal", [0.36, 0.57, 1.16], [0.28, 0.22, 0.18], "right", 0.92);
  createStripPart("motor-cortex", [[-0.82, 0.83, 0.42], [-0.4, 0.95, 0.26], [0, 0.98, 0.08], [0.4, 0.95, 0.26], [0.82, 0.83, 0.42]], 0.035, "midline", 0.95);
  createStripPart("somatosensory-cortex", [[-0.9, 0.88, -0.02], [-0.42, 1.02, -0.12], [0, 1.05, -0.2], [0.42, 1.02, -0.12], [0.9, 0.88, -0.02]], 0.035, "midline", 0.95);
  createMarkerPart("broca", [-0.58, 0.34, 0.95], [0.16, 0.12, 0.13], "left", 0.96);
  createMarkerPart("wernicke", [-0.66, 0.02, 0.16], [0.17, 0.12, 0.14], "left", 0.96);
  createMarkerPart("amygdala", [-0.42, -0.16, 0.42], [0.14, 0.11, 0.13], "left", 0.98);
  createMarkerPart("amygdala", [0.42, -0.16, 0.42], [0.14, 0.11, 0.13], "right", 0.98);
  createMarkerPart("basal-ganglia", [-0.34, 0.08, 0.08], [0.22, 0.18, 0.18], "left", 0.94);
  createMarkerPart("basal-ganglia", [0.34, 0.08, 0.08], [0.22, 0.18, 0.18], "right", 0.94);
  createMarkerPart("hypothalamus", [0, -0.18, 0.08], [0.15, 0.11, 0.13], "internal", 0.98);
  createMarkerPart("insula", [-0.78, 0.16, 0.42], [0.14, 0.1, 0.12], "left", 0.96);
  createMarkerPart("insula", [0.78, 0.16, 0.42], [0.14, 0.1, 0.12], "right", 0.96);
  createStripPart("cingulate-cortex", [[-0.42, 0.52, -0.05], [-0.16, 0.66, 0.04], [0.16, 0.66, 0.04], [0.42, 0.52, -0.05]], 0.03, "internal", 0.95);
  createMarkerPart("visual-cortex", [0, 0.56, -1.28], [0.22, 0.15, 0.11], "midline", 0.96);
  createMarkerPart("auditory-cortex", [-0.82, 0.04, 0.32], [0.16, 0.1, 0.12], "left", 0.96);
  createMarkerPart("auditory-cortex", [0.82, 0.04, 0.32], [0.16, 0.1, 0.12], "right", 0.96);
  createMarkerPart("angular-gyrus", [-0.72, 0.48, -0.38], [0.14, 0.12, 0.12], "left", 0.96);
  createMarkerPart("angular-gyrus", [0.72, 0.48, -0.38], [0.14, 0.12, 0.12], "right", 0.96);
  createMarkerPart("fusiform-gyrus", [-0.42, -0.12, -0.42], [0.17, 0.08, 0.16], "left", 0.96);
  createMarkerPart("fusiform-gyrus", [0.42, -0.12, -0.42], [0.17, 0.08, 0.16], "right", 0.96);
  createMarkerPart("nucleus-accumbens", [-0.22, -0.08, 0.28], [0.12, 0.09, 0.11], "left", 0.98);
  createMarkerPart("nucleus-accumbens", [0.22, -0.08, 0.28], [0.12, 0.09, 0.11], "right", 0.98);
  createMarkerPart("substantia-nigra", [0, -0.48, -0.08], [0.13, 0.08, 0.12], "internal", 0.98);
  createMarkerPart("pons", [0, -0.78, -0.12], [0.22, 0.14, 0.16], "internal", 0.98);
  createMarkerPart("medulla", [0, -1.12, -0.08], [0.16, 0.2, 0.14], "internal", 0.98);
  createMarkerPart("cerebellar-vermis", [0, -0.46, -1.12], [0.13, 0.2, 0.12], "internal", 0.98);
  createMarkerPart("pineal", [0, 0.14, -0.42], [0.07, 0.07, 0.07], "internal", 0.98);

  createRegionNodes();
}

// --- 3D region nodes (the "dots" that ride along with the brain) ---
const NODE_VERT = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const NODE_FRAG = `
  uniform vec3 uColor;
  uniform float uActive;
  uniform float uWorld;
  uniform float uFront;
  varying vec2 vUv;
  void main() {
    vec2 p = vUv - 0.5;
    float d = length(p) * 2.0;
    if (d > 1.0) discard;
    float core = smoothstep(0.42, 0.0, d);
    float ring = smoothstep(0.86, 0.62, d) * (1.0 - smoothstep(0.62, 0.4, d));
    float a = (core * (0.5 + 0.5 * uActive) + ring * (0.6 + 0.4 * uActive)) * uWorld * uFront;
    vec3 col = mix(uColor, vec3(1.0), 0.3 * uActive);
    gl_FragColor = vec4(col, clamp(a, 0.0, 1.0));
  }
`;

// Every teaching structure gets a dot, so the brain itself is the navigator.
const NODE_PARTS = [
  "frontal", "prefrontal", "parietal", "temporal", "occipital", "cerebellum",
  "brainstem", "pons", "medulla", "thalamus", "hypothalamus", "hippocampus",
  "amygdala", "limbic", "basal-ganglia", "insula", "cingulate-cortex",
  "broca", "wernicke", "motor-cortex", "somatosensory-cortex",
  "visual-cortex", "auditory-cortex", "corpus-callosum"
];

function makeNodeMaterial(colorHex) {
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: lightTint(colorHex, 0.42) },
      uActive: { value: 0 },
      uWorld: { value: 1 },
      uFront: { value: 1 },
      uTime: { value: 0 }
    },
    vertexShader: NODE_VERT,
    fragmentShader: NODE_FRAG,
    transparent: true,
    depthWrite: false,
    depthTest: false
  });
  material.userData.world = "brain";
  timeMaterials.push(material);
  return material;
}

function createRegionNodes() {
  const geometry = new THREE.PlaneGeometry(1, 1);
  NODE_PARTS.forEach((partId) => {
    const part = PART_MAP.get(partId);
    if (!part) return;
    const source = visualEntries.find((e) => e.partId === partId && e.side === "right")
      || visualEntries.find((e) => e.partId === partId);
    if (!source) return;
    const material = makeNodeMaterial(part.color);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.renderOrder = 12;
    mesh.userData.partId = partId;
    mesh.userData.node = true;
    scene.add(mesh);
    clickableMeshes.push(mesh);
    regionNodes.push({
      mesh,
      material,
      partId,
      source: source.mesh,
      front: 1,
      phase: Math.random() * Math.PI * 2,
      targetActive: 0
    });
  });
}

// --- Neuron dive scene ---
function neuronHolo(colorHex, opacity, rim) {
  const m = makeHoloMaterial(colorHex, { opacity, rimPower: rim, tint: 0.45 });
  m.userData.world = "neuron";
  m.uniforms.uWorld.value = 0;
  return m;
}

function neuronGlow(colorHex) {
  const m = makeGlowMaterial(colorHex);
  m.userData.world = "neuron";
  m.uniforms.uWorld.value = 0;
  m.uniforms.uActive.value = 1;
  return m;
}

function createNeuronModel() {
  const accent = 0x9fb4c9;
  neuronGroup = new THREE.Group();
  neuronGroup.visible = false;
  // Centered on the orbit target so the whole cell (dendrites -> axon
  // terminal) stays in frame instead of running off the left/right edges.
  neuronGroup.position.set(-0.36, 0.08, 0);
  neuronGroup.scale.setScalar(0.62);
  scene.add(neuronGroup);

  const soma = new THREE.Mesh(createOrganicGeometry(7), neuronHolo(accent, 0.5, 2.0));
  soma.scale.set(0.5, 0.46, 0.5);
  neuronGroup.add(soma);

  const dendriteDirs = [
    [-0.5, 0.55, 0.2], [-0.62, -0.12, -0.3], [-0.4, -0.5, 0.32],
    [-0.2, 0.72, -0.2], [-0.72, 0.2, 0.12], [-0.55, -0.35, -0.15]
  ];
  dendriteDirs.forEach((d) => {
    const start = new THREE.Vector3(-0.28, 0, 0);
    const dir = new THREE.Vector3(d[0], d[1], d[2]).normalize();
    const mid = start.clone().addScaledVector(dir, 0.45);
    const end = start.clone().addScaledVector(dir, 0.95 + Math.random() * 0.3);
    const branch = end.clone().add(new THREE.Vector3(
      (Math.random() - 0.5) * 0.5,
      (Math.random() - 0.5) * 0.5,
      (Math.random() - 0.5) * 0.5
    ));
    const curve = new THREE.CatmullRomCurve3([start, mid, end, branch]);
    const geo = new THREE.TubeGeometry(curve, 36, 0.02, 8, false);
    neuronGroup.add(new THREE.Mesh(geo, neuronHolo(accent, 0.55, 2.4)));
  });

  const axonCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.2, 0, 0),
    new THREE.Vector3(0.95, 0.06, 0.05),
    new THREE.Vector3(1.7, -0.05, -0.04),
    new THREE.Vector3(2.5, 0.04, 0.02)
  ]);
  neuronGroup.add(new THREE.Mesh(new THREE.TubeGeometry(axonCurve, 120, 0.03, 10, false), neuronHolo(accent, 0.5, 2.2)));

  for (let i = 0; i < 7; i += 1) {
    const tt = 0.16 + i * 0.1;
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.062, 0.02, 8, 20), neuronHolo(accent, 0.6, 2.0));
    ring.position.copy(axonCurve.getPoint(tt));
    ring.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), axonCurve.getTangent(tt));
    neuronGroup.add(ring);
  }

  const terminal = new THREE.Mesh(createOrganicGeometry(11), neuronHolo(accent, 0.55, 2.2));
  terminal.position.copy(axonCurve.getPoint(1));
  terminal.scale.setScalar(0.18);
  neuronGroup.add(terminal);

  const vCount = 70;
  const vp = new Float32Array(vCount * 3);
  const tp = axonCurve.getPoint(1);
  for (let i = 0; i < vCount; i += 1) {
    vp[i * 3] = tp.x + 0.08 + Math.random() * 0.45;
    vp[i * 3 + 1] = tp.y + (Math.random() - 0.5) * 0.45;
    vp[i * 3 + 2] = tp.z + (Math.random() - 0.5) * 0.45;
  }
  const vGeo = new THREE.BufferGeometry();
  vGeo.setAttribute("position", new THREE.BufferAttribute(vp, 3));
  neuronVesicles = new THREE.PointsMaterial({
    color: lightTint(accent, 0.55),
    size: 0.045,
    transparent: true,
    opacity: 0,
    depthWrite: false
  });
  neuronGroup.add(new THREE.Points(vGeo, neuronVesicles));

  neuronPulseMat = neuronGlow(accent);
  const pulse = new THREE.Mesh(new THREE.SphereGeometry(0.07, 16, 16), neuronPulseMat);
  neuronGroup.add(pulse);
  neuronPulse = { mesh: pulse, curve: axonCurve };

  createNeuronNodes(axonCurve);
}

// Teaching dots for the neuron parts (dendrites, soma, axon hillock, axon,
// synapse). Each rides along with the neuron and explains what it does.
const NEURON_NODE_DEFS = [
  { key: "dendrites", color: 0x8ecae6, pos: [-0.55, 0.52, 0.16] },
  { key: "soma", color: 0xffd166, pos: [-0.2, -0.02, 0] },
  { key: "axonHillock", color: 0xff9f6b, pos: [0.24, 0, 0] },
  { key: "axon", color: 0x9b8cff, pos: [1.25, -0.02, 0] },
  { key: "synapse", color: 0xff70a6, posFromAxonEnd: true }
];

function createNeuronNodes(axonCurve) {
  const geometry = new THREE.PlaneGeometry(1, 1);
  NEURON_NODE_DEFS.forEach((def) => {
    const material = makeNodeMaterial(def.color);
    material.userData.world = "neuron";
    material.uniforms.uWorld.value = 0;
    const mesh = new THREE.Mesh(geometry, material);
    mesh.renderOrder = 14;
    mesh.userData.neuronKey = def.key;
    mesh.visible = false;
    scene.add(mesh);
    const localPos = def.posFromAxonEnd ? axonCurve.getPoint(1) : new THREE.Vector3(...def.pos);
    neuronNodes.push({ mesh, material, key: def.key, localPos, phase: Math.random() * Math.PI * 2 });
  });
}

function updateNeuronNodes(t) {
  if (!neuronNodes.length || !camera || !neuronGroup) return;
  const dist = camera.position.distanceTo(controls.target);
  const pixelScale = dist * 0.02;
  neuronNodes.forEach((node) => {
    node.mesh.visible = neuronGroup.visible;
    node.mesh.position.copy(neuronGroup.localToWorld(node.localPos.clone()));
    const active = node.key === state.neuronFocus ? 1 : 0;
    const u = node.material.uniforms;
    u.uActive.value += (active - u.uActive.value) * 0.12;
    const pulse = 1 + Math.sin(t * 2.2 + node.phase) * 0.08 + active * 0.5;
    const s = pixelScale * pulse;
    node.mesh.scale.set(s, s, s);
    node.mesh.quaternion.copy(camera.quaternion);
  });
}

function updateNeuron(t) {
  if (!neuronPulse) return;
  const u = (t * 0.32) % 1;
  neuronPulse.mesh.position.copy(neuronPulse.curve.getPoint(u));
  neuronPulse.mesh.scale.setScalar(0.5 + Math.sin(u * Math.PI) * 0.9);
  if (neuronVesicles) neuronVesicles.opacity = 0.6 * diveState.t;
}

function startDive() {
  if (state.diving) return;
  state.diving = true;
  diveState.target = 1;
  hideCallout();
  if (controls) {
    controls.autoRotate = false;
    controls.minDistance = 0.6;
  }
  cameraRig.targetZ = cameraRig.baseZ;
  updateDiveUI();
}

function endDive() {
  if (!state.diving) return;
  state.diving = false;
  state.neuronFocus = null;
  diveState.target = 0;
  if (controls) {
    controls.autoRotate = !prefersReducedMotion;
    controls.minDistance = 1.2;
  }
  updateDiveUI();
}

function updateDiveUI() {
  if (els.stagePanel) els.stagePanel.dataset.mode = state.diving ? "dive" : "brain";
  if (els.diveBtn) {
    els.diveBtn.innerHTML = state.diving
      ? `${iconMarkup("mdi:arrow-up-bold-box-outline")} <span>${escapeHtml(tr("surface"))}</span>`
      : `${iconMarkup("mdi:diving-scuba")} <span>${escapeHtml(tr("dive"))}</span>`;
    els.diveBtn.setAttribute("aria-pressed", String(state.diving));
  }
  if (els.neuronCaption) els.neuronCaption.classList.toggle("is-visible", state.diving);
  if (els.topbarActions) els.topbarActions.style.visibility = state.diving ? "hidden" : "visible";
  if (els.infoDock) els.infoDock.style.display = state.diving ? "none" : "";
}

function renderNeuronCaption() {
  if (!els.neuronCaption) return;
  if (state.neuronFocus) {
    els.neuronCaption.innerHTML = `
      <small>${escapeHtml(tr("neuronPart"))}</small>
      <strong>${escapeHtml(tr(state.neuronFocus))}</strong>
      <p>${escapeHtml(tr(`${state.neuronFocus}Desc`))}</p>
    `;
    return;
  }
  els.neuronCaption.innerHTML = `
    <small>${escapeHtml(tr("neuronsEyebrow"))}</small>
    <strong>${escapeHtml(tr("neuronDiveTitle"))}</strong>
    <p>${escapeHtml(tr("neuronTapHint"))}</p>
  `;
}

const NEURON_NODE_COLOR = {
  dendrites: "#8ecae6", soma: "#ffd166", axonHillock: "#ff9f6b",
  axon: "#9b8cff", synapse: "#ff70a6"
};

function setNeuronFocus(key) {
  state.neuronFocus = key;
  renderNeuronCaption();
}

function pickNeuronNode(event) {
  if (!raycaster || !camera) return null;
  const rect = els.canvas.getBoundingClientRect();
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  const meshes = neuronNodes.filter((n) => n.mesh.visible).map((n) => n.mesh);
  const hit = raycaster.intersectObjects(meshes, false)[0];
  return hit ? hit.object : null;
}

function showNeuronTip(key, x, y) {
  if (!els.nodeTip) return;
  els.nodeTip.textContent = tr(key);
  els.nodeTip.style.setProperty("--part-color", NEURON_NODE_COLOR[key] || "#9fb4c9");
  els.nodeTip.style.left = `${x}px`;
  els.nodeTip.style.top = `${y}px`;
  els.nodeTip.classList.add("is-visible");
}

function createOrganicPart(layout) {
  const part = PART_MAP.get(layout.partId);
  const geometry = createOrganicGeometry(layout.seed);
  const material = createPartMaterial(part, layout.opacity ?? 0.64);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = part.label;
  mesh.position.set(layout.x, layout.y, layout.z);
  mesh.rotation.set(...layout.rotation);
  mesh.scale.set(...layout.scale);
  mesh.userData.partId = part.id;
  mesh.userData.clickable = true;

  const glow = new THREE.Mesh(geometry.clone(), makeGlowMaterial(part.color));
  glow.scale.setScalar(1.13);
  glow.userData.partId = part.id;
  mesh.add(glow);

  brainGroup.add(mesh);
  clickableMeshes.push(mesh);
  registerVisualEntry(mesh, material, part.id, layout.side, layout.cortical, layout.opacity ?? 0.64, [glow.material]);
}

function createCortexShell() {
  const geometry = createRealisticCortexGeometry(34);
  // Smoked-glass holographic cortex: cool blue-grey, faint fresnel rim
  const material = makeHoloMaterial(0x9fb4c9, { opacity: 0.42, rimPower: 1.7, tint: 0.22 });

  const cerebrum = new THREE.Mesh(geometry, material);
  cerebrum.name = "Cerebrum";
  cerebrum.position.set(0, 0.42, 0.0);
  cerebrum.scale.set(1.18, 1.04, 1.5);
  brainGroup.add(cerebrum);

  const entry = registerVisualEntry(cerebrum, material, "__cortex__", "shell", true, 0.34);
  entry.shell = true;
}

function createCortexTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  const base = ctx.createRadialGradient(256, 256, 40, 256, 256, 360);
  base.addColorStop(0, "#e8b9a8");
  base.addColorStop(0.55, "#d29c8c");
  base.addColorStop(1, "#a87567");
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, 512, 512);

  for (let i = 0; i < 32; i += 1) {
    ctx.beginPath();
    const cx = Math.random() * 512;
    const cy = Math.random() * 512;
    const length = 80 + Math.random() * 220;
    const drift = (Math.random() - 0.5) * 0.6;
    for (let step = 0; step < 24; step += 1) {
      const t = step / 23;
      const x = cx + Math.cos(drift) * (t - 0.5) * length;
      const y = cy + Math.sin(drift) * (t - 0.5) * length + Math.sin(step * 0.7 + i) * 6;
      if (step === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "rgba(118, 70, 60, 0.18)";
    ctx.lineWidth = 2 + Math.random() * 2.4;
    ctx.stroke();
  }

  for (let i = 0; i < 1400; i += 1) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    const shade = 60 + Math.random() * 80;
    const alpha = 0.04 + Math.random() * 0.06;
    ctx.fillStyle = `rgba(${shade + 90}, ${shade + 40}, ${shade + 30}, ${alpha})`;
    ctx.fillRect(x, y, 1.2, 1.2);
  }

  for (let i = 0; i < 600; i += 1) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    const alpha = Math.random() * 0.05;
    ctx.fillStyle = `rgba(255, 220, 205, ${alpha})`;
    ctx.fillRect(x, y, 1, 1);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1.6, 1.2);
  return texture;
}

function createRealisticCortexGeometry(seed) {
  const geometry = new THREE.SphereGeometry(1, 128, 80);
  const position = geometry.attributes.position;
  const vertex = new THREE.Vector3();

  for (let i = 0; i < position.count; i += 1) {
    vertex.fromBufferAttribute(position, i);

    const frontalBulge = vertex.z > 0.2 ? 1 + (vertex.z - 0.2) * 0.22 : 1;
    const occipitalTaper = vertex.z < -0.4 ? 1 + (vertex.z + 0.4) * 0.18 : 1;
    const temporalDrop = vertex.y < -0.05 && vertex.z > -0.45 && vertex.z < 0.55
      ? 1 + (vertex.y + 0.05) * 0.18
      : 1;
    const inferiorFlatten = vertex.y < -0.45 ? 1 + (vertex.y + 0.45) * 0.6 : 1;
    const lateralWiden = 1 + Math.abs(vertex.x) * 0.05;

    const longFissure = Math.exp(-Math.abs(vertex.x) * 9) *
      (vertex.y > -0.1 ? -0.11 : 0);
    const lateralSulcus = Math.exp(-Math.abs(vertex.y + 0.02) * 11) *
      Math.exp(-Math.abs(vertex.z - 0.18) * 2.2) *
      Math.min(1, Math.abs(vertex.x) * 4.0) * -0.085;
    const centralSulcus = Math.exp(-Math.abs(vertex.z + 0.05) * 28) *
      Math.exp(-Math.abs(vertex.y - 0.35) * 4) * -0.025;

    const sulcusA = Math.sin(vertex.x * 13.7 + vertex.y * 9.3 + seed) * 0.022;
    const sulcusB = Math.cos(vertex.z * 17.1 - vertex.y * 11.7 + seed * 1.3) * 0.018;
    const sulcusC = Math.sin((vertex.x + vertex.z) * 19.3 + vertex.y * 7.1 - seed) * 0.014;
    const sulcusD = Math.cos(vertex.x * 23.1 + vertex.z * 21.9 + seed * 0.7) * 0.011;

    const r = 1 + sulcusA + sulcusB + sulcusC + sulcusD + longFissure + lateralSulcus + centralSulcus;

    position.setXYZ(
      i,
      vertex.x * r * lateralWiden,
      vertex.y * r * temporalDrop * inferiorFlatten,
      vertex.z * r * frontalBulge * occipitalTaper
    );
  }

  position.needsUpdate = true;
  geometry.computeVertexNormals();
  return geometry;
}

function createMarkerPart(partId, position, scale, side, opacity) {
  const part = PART_MAP.get(partId);
  const geometry = createOrganicGeometry(40 + partId.length);
  const material = createPartMaterial(part, opacity);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = part.label;
  mesh.position.set(...position);
  mesh.scale.set(...scale);
  mesh.userData.partId = part.id;
  mesh.userData.clickable = true;

  const halo = new THREE.Mesh(geometry.clone(), makeGlowMaterial(part.color));
  halo.scale.setScalar(1.2);
  mesh.add(halo);

  brainGroup.add(mesh);
  clickableMeshes.push(mesh);
  registerVisualEntry(mesh, material, part.id, side, false, opacity, [halo.material]);
}

function createStripPart(partId, pointList, radius, side, opacity) {
  const part = PART_MAP.get(partId);
  const curve = new THREE.CatmullRomCurve3(pointList.map((point) => new THREE.Vector3(...point)));
  const geometry = new THREE.TubeGeometry(curve, 96, radius, 16, false);
  const material = createPartMaterial(part, opacity);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = part.label;
  mesh.userData.partId = part.id;
  mesh.userData.clickable = true;

  brainGroup.add(mesh);
  clickableMeshes.push(mesh);
  registerVisualEntry(mesh, material, part.id, side, true, opacity);
}

function createOrganicGeometry(seed) {
  const geometry = new THREE.SphereGeometry(1, 44, 28);
  const position = geometry.attributes.position;
  const vertex = new THREE.Vector3();

  for (let i = 0; i < position.count; i += 1) {
    vertex.fromBufferAttribute(position, i);
    const waveA = Math.sin(vertex.x * 9.5 + seed * 0.7);
    const waveB = Math.cos(vertex.y * 11.0 - seed * 0.4);
    const waveC = Math.sin((vertex.z + vertex.x) * 7.0 + seed);
    const fold = Math.sin(vertex.x * 18 + seed) * Math.cos(vertex.y * 13 - seed);
    const posteriorFlatten = vertex.z < -0.25 ? 0.92 : 1;
    const ventralTaper = vertex.y < -0.35 ? 0.9 + vertex.y * 0.05 : 1;
    const ripple = 1 + waveA * 0.045 + waveB * 0.034 + waveC * 0.028 + fold * 0.018;
    position.setXYZ(
      i,
      vertex.x * ripple * (1 + vertex.z * 0.035),
      vertex.y * ripple * ventralTaper,
      vertex.z * ripple * posteriorFlatten
    );
  }

  position.needsUpdate = true;
  geometry.computeVertexNormals();
  return geometry;
}

function createCapsulePart(partId, position, scale, rotation) {
  const part = PART_MAP.get(partId);
  const geometry = new THREE.CapsuleGeometry(0.36, 1.04, 12, 28);
  const material = createPartMaterial(part, 0.82);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = part.label;
  mesh.position.set(...position);
  mesh.rotation.set(...rotation);
  mesh.scale.set(...scale);
  mesh.userData.partId = part.id;
  mesh.userData.clickable = true;

  brainGroup.add(mesh);
  clickableMeshes.push(mesh);
  registerVisualEntry(mesh, material, part.id, "internal", false, 0.82);
}

function createTubePart(partId, pointList, radius, side, opacity) {
  const part = PART_MAP.get(partId);
  const curve = new THREE.CatmullRomCurve3(pointList.map((point) => new THREE.Vector3(...point)));
  const geometry = new THREE.TubeGeometry(curve, 72, radius, 16, false);
  const material = createPartMaterial(part, opacity);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = part.label;
  mesh.userData.partId = part.id;
  mesh.userData.clickable = true;

  brainGroup.add(mesh);
  clickableMeshes.push(mesh);
  registerVisualEntry(mesh, material, part.id, side, false, opacity);
}

function createLimbicRing() {
  const part = PART_MAP.get("limbic");
  const geometry = new THREE.TorusGeometry(0.72, 0.045, 18, 110, Math.PI * 1.65);
  const material = createPartMaterial(part, 0.88);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = part.label;
  mesh.position.set(0, 0.04, 0.0);
  mesh.rotation.set(Math.PI / 2, 0.22, -0.16);
  mesh.userData.partId = part.id;
  mesh.userData.clickable = true;

  brainGroup.add(mesh);
  clickableMeshes.push(mesh);
  registerVisualEntry(mesh, material, part.id, "internal", false, 0.88);
}

// --- Holographic shaders (core Three.js only; no postprocessing addons) ---
const HOLO_VERT = `
  #include <clipping_planes_pars_vertex>
  varying vec3 vNormalW;
  varying vec3 vViewDir;
  varying vec3 vWorldPos;
  void main() {
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vec4 mvPosition = viewMatrix * worldPos;
    vWorldPos = worldPos.xyz;
    vNormalW = normalize(mat3(modelMatrix) * normal);
    vViewDir = normalize(cameraPosition - worldPos.xyz);
    gl_Position = projectionMatrix * mvPosition;
    #include <clipping_planes_vertex>
  }
`;

const HOLO_FRAG = `
  #include <clipping_planes_pars_fragment>
  uniform vec3 uColor;
  uniform float uActive;
  uniform float uOpacity;
  uniform float uTime;
  uniform float uRimPower;
  uniform float uWorld;
  varying vec3 vNormalW;
  varying vec3 vViewDir;
  varying vec3 vWorldPos;
  void main() {
    #include <clipping_planes_fragment>
    vec3 n = normalize(vNormalW);
    vec3 v = normalize(vViewDir);
    float fres = pow(1.0 - clamp(dot(n, v), 0.0, 1.0), uRimPower);
    // Crisp contour band along each region's silhouette so parts read as
    // distinct, outlined shapes rather than blending into one glass blob.
    float edge = smoothstep(0.62, 0.97, fres);
    float scan = 1.0 - 0.05 * (0.5 + 0.5 * sin(vWorldPos.y * 38.0 - uTime * 1.4));
    float fill = 0.1 + 0.32 * uActive;
    float alpha = (fres * (0.85 + 0.35 * uActive) + edge * (0.5 + 0.35 * uActive) + fill) * uOpacity * scan * uWorld;
    vec3 col = uColor * (0.82 + 0.8 * fres + 0.45 * uActive) + edge * (0.32 + 0.4 * uActive);
    gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0));
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

const GLOW_FRAG = `
  uniform vec3 uColor;
  uniform float uActive;
  uniform float uTime;
  uniform float uOpacity;
  uniform float uRimPower;
  uniform float uWorld;
  varying vec3 vNormalW;
  varying vec3 vViewDir;
  varying vec3 vWorldPos;
  void main() {
    vec3 n = normalize(vNormalW);
    vec3 v = normalize(vViewDir);
    float fres = pow(1.0 - clamp(dot(n, v), 0.0, 1.0), 2.6);
    // Soft, breathing halo around the selected region (kept restrained).
    float pulse = 0.85 + 0.15 * sin(uTime * 2.0);
    float halo = fres + 0.06;
    float alpha = halo * uActive * 0.8 * pulse * uWorld;
    vec3 col = mix(uColor, vec3(1.0), 0.28);
    gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0));
  }
`;

function lightTint(colorHex, amount = 0.5) {
  return new THREE.Color(colorHex).lerp(new THREE.Color(0xffffff), amount);
}

function makeHoloMaterial(colorHex, { opacity = 0.5, rimPower = 2.4, active = 0, tint = 0.5, side = THREE.DoubleSide } = {}) {
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: lightTint(colorHex, tint) },
      uActive: { value: active },
      uOpacity: { value: opacity },
      uTime: { value: 0 },
      uRimPower: { value: rimPower },
      uWorld: { value: 1 }
    },
    vertexShader: HOLO_VERT,
    fragmentShader: HOLO_FRAG,
    transparent: true,
    depthWrite: false,
    clipping: true,
    side
  });
  material.userData.world = "brain";
  timeMaterials.push(material);
  return material;
}

function makeGlowMaterial(colorHex) {
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: lightTint(colorHex, 0.38) },
      uActive: { value: 0 },
      uOpacity: { value: 1 },
      uTime: { value: 0 },
      uRimPower: { value: 3 },
      uWorld: { value: 1 }
    },
    vertexShader: HOLO_VERT,
    fragmentShader: GLOW_FRAG,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide
  });
  material.userData.world = "brain";
  timeMaterials.push(material);
  return material;
}

function createPartMaterial(part, opacity) {
  // Keep more of each region's hue (less white) so parts stay distinguishable.
  return makeHoloMaterial(part.color, { opacity: Math.min(opacity, 0.66), rimPower: 2.1, tint: 0.26 });
}

function registerVisualEntry(mesh, material, partId, side, cortical, baseOpacity, glowMaterials = []) {
  const opacity = material.uniforms?.uOpacity?.value ?? baseOpacity;
  const entry = {
    mesh,
    material,
    glowMaterials,
    partId,
    side,
    cortical,
    shell: false,
    baseOpacity: opacity,
    basePosition: mesh.position.clone(),
    baseScale: mesh.scale.clone(),
    targetPosition: mesh.position.clone(),
    targetScale: mesh.scale.clone(),
    targetOpacity: opacity,
    targetActive: 0,
    lerpK: 0.06 + Math.random() * 0.055
  };
  visualEntries.push(entry);
  return entry;
}

function updateMeshTargets() {
  if (!THREE) return;

  visualEntries.forEach((entry) => {
    const selected = !entry.shell && entry.partId === state.selectedPartId;
    const targetPosition = entry.basePosition.clone();
    const targetScale = entry.baseScale.clone();
    let targetOpacity = entry.baseOpacity;
    let clippingPlanes = [];

    if (state.viewMode === "half") {
      if (entry.cortical) {
        targetOpacity = entry.side === "right" ? entry.baseOpacity * 0.22 : entry.baseOpacity;
        clippingPlanes = [sagittalPlane];
      }
    }

    if (state.viewMode === "inside") {
      targetOpacity = entry.cortical ? entry.baseOpacity * 0.16 : Math.min(0.72, entry.baseOpacity + 0.14);
    }

    if (state.viewMode === "split") {
      if (entry.shell) {
        targetOpacity = entry.baseOpacity * 0.35;
      } else {
        const direction = entry.basePosition.clone();
        if (direction.length() < 0.18) {
          direction.set(entry.side === "right" ? 1 : entry.side === "left" ? -1 : 0, 0.22, 0.12);
        }
        targetPosition.add(direction.normalize().multiplyScalar(entry.cortical ? 0.62 : 0.42));
        targetScale.multiplyScalar(0.96);
      }
    }

    if (selected) {
      const direction = entry.basePosition.clone();
      if (direction.length() > 0.18) {
        targetPosition.add(direction.normalize().multiplyScalar(0.16));
      }
      targetScale.multiplyScalar(1.16);
      targetOpacity = Math.min(0.98, targetOpacity + 0.4);
    } else if (!entry.shell) {
      // Focus mode: keep other regions readable but clearly secondary.
      targetOpacity *= 0.42;
    } else {
      // Quiet the cortex shell a touch while a region is highlighted.
      targetOpacity *= 0.8;
    }

    // Only recompile shaders when the clipping-plane count actually changes.
    const clipLen = clippingPlanes.length;
    if (entry.clipLen !== clipLen) {
      entry.material.clippingPlanes = clippingPlanes;
      entry.material.needsUpdate = true;
      entry.clipLen = clipLen;
    } else {
      entry.material.clippingPlanes = clippingPlanes;
    }
    entry.targetPosition = targetPosition;
    entry.targetScale = targetScale;
    entry.targetOpacity = targetOpacity;
    entry.targetActive = selected ? 1 : 0;
  });

  regionNodes.forEach((node) => {
    node.targetActive = node.partId === state.selectedPartId ? 1 : 0;
  });

  cameraRig.targetZ = state.viewMode === "split" ? cameraRig.baseZ + 0.7 : cameraRig.baseZ;
}

function onCanvasClick(event) {
  if (state.diving) {
    const node = pickNeuronNode(event);
    setNeuronFocus(node ? node.userData.neuronKey : null);
    return;
  }
  const hit = pickPart(event);
  if (!hit) {
    hideCallout();
    return;
  }
  setSelectedPart(hit.object.userData.partId, { showCallout: true });
}

function onCanvasPointerMove(event) {
  const rect = els.canvas.getBoundingClientRect();
  pointerParallax.tx = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  pointerParallax.ty = ((event.clientY - rect.top) / rect.height) * 2 - 1;
  if (state.diving) {
    const node = pickNeuronNode(event);
    els.canvas.style.cursor = node ? "pointer" : "grab";
    if (node) {
      showNeuronTip(node.userData.neuronKey, event.clientX - rect.left, event.clientY - rect.top);
    } else {
      hideNodeTip();
    }
    return;
  }
  const hit = pickPart(event);
  els.canvas.style.cursor = hit ? "pointer" : "grab";
  if (hit && hit.object.userData.partId) {
    showNodeTip(hit.object.userData.partId, event.clientX - rect.left, event.clientY - rect.top);
  } else {
    hideNodeTip();
  }
}

function showNodeTip(partId, x, y) {
  if (!els.nodeTip) return;
  const part = PART_MAP.get(partId);
  if (!part) return;
  els.nodeTip.textContent = currentPart(part).label;
  els.nodeTip.style.setProperty("--part-color", part.color);
  els.nodeTip.style.left = `${x}px`;
  els.nodeTip.style.top = `${y}px`;
  els.nodeTip.classList.add("is-visible");
}

function hideNodeTip() {
  if (els.nodeTip) els.nodeTip.classList.remove("is-visible");
}

function pickPart(event) {
  if (!raycaster || !camera) return null;
  const rect = els.canvas.getBoundingClientRect();
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  return raycaster.intersectObjects(clickableMeshes, false)[0] || null;
}

function resizeRenderer() {
  if (!renderer || !camera || els.atlasScreen.hidden) return;
  const stage = els.canvas.parentElement;
  const rect = stage.getBoundingClientRect();
  const width = Math.max(320, Math.floor(rect.width));
  const height = Math.max(320, Math.floor(rect.height));
  renderer.setSize(width, height, false);
  const aspect = width / height;
  camera.aspect = aspect;
  camera.updateProjectionMatrix();

  // Keep the whole subject in frame: pull the camera back on narrow/portrait
  // stages (mobile) so the full shape is readable instead of overflowing.
  // The neuron is much wider than the brain, so it needs more distance.
  const fit = (base) => {
    let z = base;
    if (aspect < 1) z = z / Math.max(0.55, aspect);
    if (width < 700) z += 0.35;
    return z;
  };
  cameraRig.baseZ = Math.min(7, fit(cameraRig.baseDefault));
  cameraRig.diveZ = Math.min(9, fit(2.9));
  if (!state.diving) updateMeshTargets();

  positionAnnotation();
}

function animateScene() {
  animationFrameId = requestAnimationFrame(animateScene);
  const t = (nowMs() - clock.start) / 1000;

  visualEntries.forEach((entry) => {
    const k = entry.lerpK || 0.08;
    entry.mesh.position.lerp(entry.targetPosition, k);
    entry.mesh.scale.lerp(entry.targetScale, k);
    const u = entry.material.uniforms;
    if (u) {
      u.uOpacity.value += (entry.targetOpacity - u.uOpacity.value) * 0.09;
      u.uActive.value += (entry.targetActive - u.uActive.value) * 0.09;
    }
    entry.glowMaterials.forEach((m) => {
      if (m.uniforms) m.uniforms.uActive.value += (entry.targetActive - m.uniforms.uActive.value) * 0.09;
    });
  });

  // Dive crossfade (brain world <-> neuron world) and time on all holo materials
  diveState.t += (diveState.target - diveState.t) * 0.06;
  const diveT = diveState.t;
  for (let i = 0; i < timeMaterials.length; i += 1) {
    const u = timeMaterials[i].uniforms;
    if (!u) continue;
    if (u.uTime) u.uTime.value = t;
    if (u.uWorld) {
      u.uWorld.value = timeMaterials[i].userData.world === "neuron" ? diveT : (1 - diveT);
    }
  }
  if (brainPivot) brainPivot.visible = diveT < 0.992;
  if (neuronGroup) neuronGroup.visible = diveT > 0.008;

  updateRegionNodes(t);
  if (neuronGroup && neuronGroup.visible) updateNeuron(t);
  updateNeuronNodes(t);
  updateParallax();
  updateCameraRig();

  if (starField) {
    starField.rotation.y = t * 0.012;
    starField.rotation.x = Math.sin(t * 0.05) * 0.04;
  }

  controls.update();
  renderer.render(scene, camera);
  positionAnnotation();
}

function nowMs() {
  return typeof performance !== "undefined" ? performance.now() : Date.now();
}

function updateRegionNodes(t) {
  if (!regionNodes.length || !camera || !tmpVec || !brainGroup) return;
  const dist = camera.position.distanceTo(controls.target);
  const pixelScale = dist * 0.019;
  const center = brainGroup.getWorldPosition(nodeCenter);
  regionNodes.forEach((node) => {
    const u = node.material.uniforms;
    u.uActive.value += (node.targetActive - u.uActive.value) * 0.1;
    node.source.getWorldPosition(tmpVec);
    node.mesh.position.copy(tmpVec);
    // Fade dots that face away from the camera (far side of the brain).
    nodeDir.copy(tmpVec).sub(center);
    nodeView.copy(camera.position).sub(tmpVec).normalize();
    const facing = nodeDir.lengthSq() > 1e-5 ? nodeDir.normalize().dot(nodeView) : 1;
    const front = Math.max(THREE.MathUtils.smoothstep(facing, -0.35, 0.25), node.targetActive);
    node.front += (front - node.front) * 0.12;
    u.uFront.value = node.front;
    const pulse = 1 + Math.sin(t * 2.2 + node.phase) * 0.07 + node.targetActive * 0.6;
    const s = pixelScale * pulse;
    node.mesh.scale.set(s, s, s);
    node.mesh.quaternion.copy(camera.quaternion);
  });
}

function updateParallax() {
  if (!brainPivot) return;
  if (prefersReducedMotion) return;
  pointerParallax.x += (pointerParallax.tx - pointerParallax.x) * 0.06;
  pointerParallax.y += (pointerParallax.ty - pointerParallax.y) * 0.06;
  brainPivot.rotation.y = pointerParallax.x * 0.18;
  brainPivot.rotation.x = -pointerParallax.y * 0.12;
  if (els.stagePanel) {
    els.stagePanel.style.setProperty("--par-x", `${pointerParallax.x * 18}px`);
    els.stagePanel.style.setProperty("--par-y", `${pointerParallax.y * 14}px`);
  }
}

function updateCameraRig() {
  if (!tmpVec || !camera || !controls) return;
  const desired = diveState.target > 0.5 ? cameraRig.diveZ : cameraRig.targetZ;
  tmpVec.copy(camera.position).sub(controls.target);
  const curDist = tmpVec.length();
  if (curDist < 1e-4) return;
  tmpVec.normalize();
  const newDist = curDist + (desired - curDist) * 0.05;
  camera.position.copy(controls.target).addScaledVector(tmpVec, newDist);
}

function updateModelStatus() {
  els.stagePanel.dataset.view = state.viewMode;
  if (!state.threeReady) return;
  const labels = {
    full: tr("fullStatus"),
    half: tr("halfStatus"),
    inside: tr("insideStatus"),
    split: tr("splitStatus")
  };
  els.modelStatus.textContent = labels[state.viewMode] || tr("readyStatus");
}

function drawFallbackBrain() {
  const canvas = els.canvas;
  const ctx = canvas.getContext("2d");

  function draw() {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = Math.max(320, Math.floor(rect.width));
    canvas.height = Math.max(320, Math.floor(rect.height));
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#07090d";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.strokeStyle = "#38e8d3";
    ctx.lineWidth = 3;
    ctx.globalAlpha = 0.82;
    ctx.beginPath();
    ctx.ellipse(-42, -8, 138, 112, -0.1, 0, Math.PI * 2);
    ctx.ellipse(42, -8, 138, 112, 0.1, 0, Math.PI * 2);
    ctx.stroke();
    PARTS.slice(0, 6).forEach((part, index) => {
      ctx.strokeStyle = part.color;
      ctx.globalAlpha = 0.55;
      ctx.beginPath();
      ctx.ellipse(
        Math.cos(index) * 52,
        Math.sin(index * 1.6) * 42,
        58 - index * 3,
        24,
        index * 0.5,
        0,
        Math.PI * 2
      );
      ctx.stroke();
    });
    ctx.restore();
  }

  draw();
  window.addEventListener("resize", draw);
}

initThree();
