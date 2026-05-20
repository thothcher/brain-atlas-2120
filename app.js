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

const state = {
  route: "atlas",
  selectedPartId: "frontal",
  viewMode: "full",
  threeReady: false,
  calloutVisible: false,
  calloutAnchor: null
};

const els = {
  partsList: document.querySelector("#partsList"),
  partCount: document.querySelector("#partCount"),
  partSearch: document.querySelector("#partSearch"),
  atlasScreen: document.querySelector("#atlasScreen"),
  articleScreen: document.querySelector("#articleScreen"),
  infoDock: document.querySelector("#infoDock"),
  pageTitle: document.querySelector("#pageTitle"),
  eyebrow: document.querySelector("#eyebrow"),
  topbarActions: document.querySelector(".topbar-actions"),
  viewButtons: Array.from(document.querySelectorAll("[data-view]")),
  navLinks: Array.from(document.querySelectorAll(".nav-link")),
  stagePanel: document.querySelector(".stage-panel"),
  canvas: document.querySelector("#brainCanvas"),
  brainRender: document.querySelector("#brainRender"),
  brainHotspots: document.querySelector("#brainHotspots"),
  labelLayer: document.querySelector("#labelLayer"),
  brainCallout: document.querySelector("#brainCallout"),
  modelStatus: document.querySelector("#modelStatus"),
  legendTitle: document.querySelector("#legendTitle"),
  legendAccent: document.querySelector("#legendAccent")
};

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
const annotationVector = { target: null };

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

function renderPartsList() {
  const query = els.partSearch.value.trim().toLowerCase();
  const filtered = PARTS.filter((part) => {
    const haystack = [
      part.label,
      part.group,
      part.summary,
      part.quick,
      part.tags.join(" "),
      part.connections.join(" ")
    ].join(" ").toLowerCase();
    return !query || haystack.includes(query);
  });

  els.partCount.textContent = String(filtered.length);
  els.partsList.innerHTML = filtered.length
    ? filtered.map((part) => `
        <button class="part-button ${part.id === state.selectedPartId ? "is-active" : ""}" type="button" data-part="${part.id}" style="${partStyle(part)}">
          <span class="part-swatch" aria-hidden="true">${iconMarkup(partIcon(part), "part-icon")}</span>
          <span>
            <strong>${escapeHtml(part.label)}</strong>
            <span>${escapeHtml(part.group)} · ${escapeHtml(part.quick)}</span>
          </span>
        </button>
      `).join("")
    : `<div class="empty-state">No structure matches that search.</div>`;
}

function renderBrainHotspots() {
  if (!els.brainHotspots) return;
  els.brainHotspots.innerHTML = BRAIN_HOTSPOTS
    .map(({ id, x, y }) => {
      const part = PART_MAP.get(id);
      if (!part) return "";
      return `
        <button class="brain-hotspot ${part.id === state.selectedPartId ? "is-active" : ""}" type="button" data-part="${part.id}" aria-label="${escapeHtml(part.label)}" style="--x:${x}%; --y:${y}%; --hotspot-color:${part.color}">
          <span class="sr-only">${escapeHtml(part.label)}</span>
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
  renderPartsList();
  renderInfoDock(part);
  updateLegend(part);
  updateHotspotState();
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
  els.legendTitle.textContent = part.label;
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
  els.brainCallout.style.setProperty("--part-color", part.color);
  els.brainCallout.innerHTML = `
    <div class="callout-head">
      ${iconMarkup(partIcon(part), "callout-icon")}
      <div>
        <small>${escapeHtml(part.group)}</small>
        <strong>${escapeHtml(part.label)}</strong>
      </div>
    </div>
    <p>${escapeHtml(part.quick)}</p>
    <button class="callout-close" type="button" aria-label="Close structure note">x</button>
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

function renderInfoDock(part) {
  els.infoDock.style.setProperty("--part-color", part.color);
  els.infoDock.innerHTML = `
    <article class="info-main console-profile" style="${partStyle(part)}">
      <div class="info-heading">
        <span class="info-icon" aria-hidden="true">${iconMarkup(partIcon(part), "info-icon-glyph")}</span>
        <div>
          <p class="eyebrow">${escapeHtml(part.group)}</p>
          <h2>${escapeHtml(part.label)}</h2>
        </div>
      </div>
      <p>${escapeHtml(part.summary)}</p>
      <div class="tag-row">
        ${part.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
      </div>
      <div class="dock-actions">
        <a class="primary-link" href="#part/${part.id}">${iconMarkup("mdi:book-open-page-variant", "action-icon")} Open full page</a>
        <a class="ghost-link" href="#neurons">${iconMarkup("mdi:transit-connection-variant", "action-icon")} Neuron basics</a>
      </div>
    </article>

    <div class="info-grid console-modules" style="${partStyle(part)}">
      ${renderFactCard({
        title: "Main job",
        icon: FACT_ICONS.job,
        body: part.quick,
        detail: part.deep.physiology
      })}
      ${renderFactCard({
        title: "Student signal",
        icon: FACT_ICONS.signal,
        body: part.studentCue,
        detail: part.deep.anatomy
      })}
      ${renderFactCard({
        title: "Clinical hook",
        icon: FACT_ICONS.clinical,
        body: part.clinical,
        detail: part.deep.medical
      })}
      ${renderFactCard({
        title: "Connects with",
        icon: FACT_ICONS.connections,
        list: part.connections,
        detail: interestingFact(part)
      })}
    </div>
  `;
  updateAnnotationContent(part);
}

function renderRoute() {
  const route = window.location.hash.replace(/^#\/?/, "") || "atlas";
  state.route = route;
  updateNavigation(route);

  if (route === "atlas") {
    els.atlasScreen.hidden = false;
    els.articleScreen.hidden = true;
    els.topbarActions.hidden = false;
    els.eyebrow.textContent = "Interactive neuroanatomy";
    els.pageTitle.textContent = "3D Brain Structure Atlas";
    resizeRenderer();
    applyAos();
    return;
  }

  els.atlasScreen.hidden = true;
  els.articleScreen.hidden = false;
  els.topbarActions.hidden = true;
  els.articleScreen.scrollTop = 0;
  hideCallout();

  if (route === "neurons") {
    els.eyebrow.textContent = "Cellular foundation";
      els.pageTitle.textContent = "Neurons And Signaling";
      renderNeuronsPage();
      applyAos(els.articleScreen);
      return;
    }

  if (route === "study") {
    els.eyebrow.textContent = "Teaching mode";
    els.pageTitle.textContent = "Student Study Board";
    renderStudyPage();
    applyAos(els.articleScreen);
    return;
  }

  if (route.startsWith("part/")) {
    const partId = route.split("/")[1];
    const part = PART_MAP.get(partId);
    if (part) {
      setSelectedPart(part.id);
      els.eyebrow.textContent = part.group;
      els.pageTitle.textContent = `${part.label} Deep Dive`;
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
  const related = PARTS
    .filter((candidate) => candidate.id !== part.id)
    .filter((candidate) => candidate.connections.some((connection) => part.connections.includes(connection)) || candidate.group === part.group)
    .slice(0, 3);

  els.articleScreen.innerHTML = `
    <div class="article-layout" style="${partStyle(part)}">
      <section class="article-hero">
        <article class="article-panel">
          <p class="article-kicker">${escapeHtml(part.group)}</p>
          <h2>${escapeHtml(part.label)}</h2>
          <p class="lede">${escapeHtml(part.summary)}</p>
          <div class="tag-row">
            ${part.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
          </div>
          <div class="metric-strip">
            <div class="metric">
              <small>Best anchor</small>
              <strong>${escapeHtml(part.tags[0])}</strong>
            </div>
            <div class="metric">
              <small>System</small>
              <strong>${escapeHtml(part.group)}</strong>
            </div>
            <div class="metric">
              <small>Exam lens</small>
              <strong>${escapeHtml(part.studentCue.split(",")[0])}</strong>
            </div>
          </div>
          <div class="dock-actions">
            <a class="primary-link" href="#atlas">Back to 3D atlas</a>
            <a class="ghost-link" href="#study">Study board</a>
          </div>
        </article>

        <aside class="article-panel">
          <h2>Signal Path</h2>
          <div class="pathway-map">
            ${part.deep.pathway.map((step, index) => `
              <div class="path-step">
                <span>${index + 1}</span>
                <div>
                  <strong>${escapeHtml(step)}</strong>
                  <small>${index === 0 ? "Input" : index === part.deep.pathway.length - 1 ? "Output" : "Processing"}</small>
                </div>
              </div>
            `).join("")}
          </div>
        </aside>
      </section>

      <section class="article-grid">
        <article class="note-block">
          <h3>Anatomy</h3>
          <p>${escapeHtml(part.deep.anatomy)}</p>
        </article>
        <article class="note-block">
          <h3>Physiology</h3>
          <p>${escapeHtml(part.deep.physiology)}</p>
        </article>
        <article class="note-block">
          <h3>Psychology Lens</h3>
          <p>${escapeHtml(part.deep.psychology)}</p>
        </article>
      </section>

      <section class="article-grid">
        <article class="note-block">
          <h3>Clinical Pattern</h3>
          <p>${escapeHtml(part.deep.medical)}</p>
        </article>
        <article class="note-block">
          <h3>Connections</h3>
          <ul>
            ${part.connections.map((connection) => `<li>${escapeHtml(connection)}</li>`).join("")}
          </ul>
        </article>
        <article class="note-block">
          <h3>Related Structures</h3>
          <ul>
            ${related.map((item) => `<li><a href="#part/${item.id}">${escapeHtml(item.label)}</a></li>`).join("") || "<li>Use the atlas to compare nearby systems.</li>"}
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
          <p class="article-kicker">${iconMarkup("mdi:dna", "article-kicker-icon")} Neuron basics</p>
          <h2>The unit that makes networks possible</h2>
          <p class="lede">Neurons receive signals, integrate them, fire action potentials, and communicate across synapses. The brain is not only its parts; it is also the timing and chemistry between cells.</p>
          <div class="metric-strip">
            <div class="metric">
              <small>Input</small>
              <strong>Dendrites</strong>
            </div>
            <div class="metric">
              <small>Decision point</small>
              <strong>Axon hillock</strong>
            </div>
            <div class="metric">
              <small>Output</small>
              <strong>Synapse</strong>
            </div>
          </div>
        </article>
        <figure class="neuron-figure" data-aos="fade-left" aria-label="Realistic neuron render">
          <img src="./assets/neuron-render.png" alt="Realistic 3D neuron with dendrites, soma, axon, myelin segments, and synaptic terminals">
          <figcaption>
            <span>dendrites</span>
            <span>soma</span>
            <span>axon</span>
            <span>synapse</span>
          </figcaption>
        </figure>
      </section>

      <section class="article-grid">
        <article class="note-block">
          <h3>${iconMarkup("mdi:lightning-bolt-circle", "card-icon")} How a signal moves</h3>
          <ul>
            <li>Dendrites collect excitatory and inhibitory inputs.</li>
            <li>The soma integrates those inputs over space and time.</li>
            <li>If threshold is reached, an action potential travels down the axon.</li>
            <li>Synapses release neurotransmitters that affect the next cell.</li>
          </ul>
        </article>
        <article class="note-block">
          <h3>${iconMarkup("mdi:test-tube", "card-icon")} Neurotransmitters</h3>
          <p>Glutamate is the major excitatory transmitter. GABA is the major inhibitory transmitter. Dopamine, serotonin, acetylcholine, norepinephrine, and many peptides tune mood, attention, reward, sleep, and movement.</p>
        </article>
        <article class="note-block">
          <h3>${iconMarkup("mdi:shield-check", "card-icon")} Glia matter</h3>
          <p>Astrocytes support metabolism and synapses. Oligodendrocytes make CNS myelin. Microglia survey immune threats. Ependymal cells line ventricles and help with CSF flow.</p>
        </article>
      </section>

      <section class="article-grid">
        <article class="note-block">
          <h3>${iconMarkup("mdi:account-group", "card-icon")} For psychology</h3>
          <p>Behavior changes when synaptic weights change. Learning, reinforcement, fear conditioning, habit, attention, and mood all depend on circuit-level plasticity.</p>
        </article>
        <article class="note-block">
          <h3>${iconMarkup("mdi:stethoscope", "card-icon")} For medicine</h3>
          <p>Many disorders are easier to reason through when you separate lesion localization, neurotransmitter effects, conduction speed, inflammation, and network compensation.</p>
        </article>
        <article class="note-block">
          <h3>${iconMarkup("mdi:map-marker", "card-icon")} Best next step</h3>
          <p>Use the atlas to connect cells to systems: hippocampal neurons bind memory, cerebellar circuits tune error, and frontal loops select behavior.</p>
          <div class="dock-actions">
            <a class="primary-link" href="#atlas">Open atlas</a>
          </div>
        </article>
      </section>
    </div>
  `;
}

function renderStudyPage() {
  els.articleScreen.innerHTML = `
    <div class="article-layout">
      <section class="article-hero">
        <article class="article-panel">
          <p class="article-kicker">${iconMarkup("mdi:notebook", "article-kicker-icon")} Study mode</p>
          <h2>Use structure, function, lesion, and pathway together</h2>
          <p class="lede">Students remember neuroanatomy better when every structure has a role, a clinical pattern, and a pathway. This board keeps those four pieces visible.</p>
          <div class="dock-actions">
            <a class="primary-link" href="#atlas">Return to 3D model</a>
            <a class="ghost-link" href="#neurons">Review neurons</a>
          </div>
        </article>
        <article class="article-panel">
          <h2>${iconMarkup("mdi:checklist", "article-title-icon")} Mini Method</h2>
          <div class="pathway-map">
            <div class="path-step"><span>1</span><div><strong>Locate</strong><small>Where is the structure?</small></div></div>
            <div class="path-step"><span>2</span><div><strong>Assign</strong><small>What does it help compute?</small></div></div>
            <div class="path-step"><span>3</span><div><strong>Predict</strong><small>What happens if it fails?</small></div></div>
            <div class="path-step"><span>4</span><div><strong>Connect</strong><small>Which pathway explains it?</small></div></div>
          </div>
        </article>
      </section>

      <section class="study-grid">
        <article class="study-panel">
          <h3>${iconMarkup("mdi:briefcase-medical", "card-icon")} Clinical prompts</h3>
          <ul>
            <li>Personality change plus poor inhibition: compare frontal lobe and limbic circuits.</li>
            <li>New memory formation is impaired: inspect hippocampus and medial temporal lobe.</li>
            <li>Unsteady gait and intention tremor: inspect cerebellum.</li>
            <li>Contralateral visual field loss: inspect occipital cortex and optic radiations.</li>
          </ul>
        </article>
        <article class="study-panel">
          <h3>${iconMarkup("mdi:brain", "card-icon")} Psychology prompts</h3>
          <ul>
            <li>Fear conditioning: limbic system, amygdala, hippocampus, and prefrontal regulation.</li>
            <li>Working memory: prefrontal cortex with parietal attention networks.</li>
            <li>Language comprehension: temporal lobe networks.</li>
            <li>Embodied attention: parietal body-space maps.</li>
          </ul>
        </article>
      </section>

      <section class="study-panel">
        <h3>${iconMarkup("mdi:chart-bar", "card-icon")} Fast compare</h3>
        <table class="compare-table">
          <thead>
            <tr>
              <th>Structure</th>
              <th>Core function</th>
              <th>Failure pattern</th>
            </tr>
          </thead>
          <tbody>
            ${PARTS.map((part) => `
              <tr>
                <td><a href="#part/${part.id}">${escapeHtml(part.label)}</a></td>
                <td>${escapeHtml(part.quick)}</td>
                <td>${escapeHtml(part.clinical)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>
    </div>
  `;
}

els.partSearch.addEventListener("input", renderPartsList);
document.querySelector(".page-nav").addEventListener("click", (event) => {
  const link = event.target.closest("[data-route]");
  if (!link) return;
  window.requestAnimationFrame(renderRoute);
});

els.partsList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-part]");
  if (!button) return;
  setSelectedPart(button.dataset.part, { focusAtlas: true });
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
    state.viewMode = button.dataset.view;
    els.viewButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    updateMeshTargets();
    updateModelStatus();
  });
});

window.addEventListener("hashchange", renderRoute);

renderPartsList();
renderBrainHotspots();
renderInfoDock(PART_MAP.get(state.selectedPartId));
updateLegend(PART_MAP.get(state.selectedPartId));
updateModelStatus();
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
  } catch (error) {
    console.error(error);
    state.threeReady = false;
    els.modelStatus.textContent = "3D engine unavailable";
    drawFallbackBrain();
  }
}

function setupScene() {
  const stage = els.canvas.parentElement;
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x07090d, 0.02);

  camera = new THREE.PerspectiveCamera(48, 1, 0.1, 40);
  camera.position.set(0, 0.24, 4.6);

  renderer = new THREE.WebGLRenderer({
    canvas: els.canvas,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance"
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.08;
  renderer.localClippingEnabled = true;

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.07;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.18;
  controls.enablePan = false;
  controls.minDistance = 3.4;
  controls.maxDistance = 9.2;
  controls.target.set(0, 0.18, 0);
  controls.update();

  raycaster = new THREE.Raycaster();
  pointer = new THREE.Vector2();
  sagittalPlane = new THREE.Plane(new THREE.Vector3(-1, 0, 0), 0.06);

  addLights();
  addEnvironment();
  createBrainModel();
  updateMeshTargets();

  els.canvas.addEventListener("click", onCanvasClick);
  els.canvas.addEventListener("pointermove", onCanvasPointerMove);
  els.canvas.addEventListener("pointerleave", () => {
    els.canvas.style.cursor = "default";
  });

  resizeObserver = new ResizeObserver(resizeRenderer);
  resizeObserver.observe(stage);
  resizeRenderer();
  animateScene();
}

function addLights() {
  scene.add(new THREE.AmbientLight(0xdcd2c8, 0.55));

  const key = new THREE.DirectionalLight(0xffffff, 1.4);
  key.position.set(3.4, 5.2, 4.2);
  scene.add(key);

  const fill = new THREE.DirectionalLight(0xc7d9e6, 0.6);
  fill.position.set(-4.6, 3.2, 2.4);
  scene.add(fill);

  const rim = new THREE.DirectionalLight(0xfff0e0, 0.5);
  rim.position.set(0.4, 1.2, -4.8);
  scene.add(rim);
}

function addEnvironment() {
  const shadowGeometry = new THREE.CircleGeometry(2.2, 64);
  const shadowMaterial = new THREE.MeshBasicMaterial({
    color: 0x000000,
    transparent: true,
    opacity: 0.32,
    depthWrite: false
  });
  const shadow = new THREE.Mesh(shadowGeometry, shadowMaterial);
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = -1.45;
  scene.add(shadow);
}

function createBrainModel() {
  brainGroup = new THREE.Group();
  brainGroup.rotation.set(-0.08, -0.34, 0.02);
  scene.add(brainGroup);
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

  const wire = new THREE.Mesh(geometry.clone(), new THREE.MeshBasicMaterial({
    color: new THREE.Color(part.color),
    wireframe: false,
    transparent: true,
    opacity: 0.045,
    depthWrite: false
  }));
  wire.userData.partId = part.id;
  mesh.add(wire);

  brainGroup.add(mesh);
  clickableMeshes.push(mesh);
  registerVisualEntry(mesh, material, part.id, layout.side, layout.cortical, layout.opacity ?? 0.64, [wire.material]);
}

function createCortexShell() {
  const geometry = createRealisticCortexGeometry(34);
  const texture = createCortexTexture();
  const material = new THREE.MeshPhysicalMaterial({
    color: 0xd6a89a,
    roughness: 0.62,
    metalness: 0.0,
    clearcoat: 0.18,
    clearcoatRoughness: 0.55,
    sheen: 0.4,
    sheenColor: new THREE.Color(0xffd9cf),
    map: texture,
    transparent: true,
    opacity: 0.78,
    depthWrite: false,
    side: THREE.FrontSide,
    emissive: new THREE.Color(0x000000),
    emissiveIntensity: 0
  });

  const cerebrum = new THREE.Mesh(geometry, material);
  cerebrum.name = "Cerebrum";
  cerebrum.position.set(0, 0.42, 0.0);
  cerebrum.scale.set(1.18, 1.04, 1.5);
  brainGroup.add(cerebrum);
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

  const halo = new THREE.Mesh(geometry.clone(), new THREE.MeshBasicMaterial({
    color: new THREE.Color(part.color),
    wireframe: false,
    transparent: true,
    opacity: 0.16,
    depthWrite: false
  }));
  halo.scale.setScalar(1.16);
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

function createPartMaterial(part, opacity) {
  const baseColor = new THREE.Color(part.color).lerp(new THREE.Color(0xb8857a), 0.42);
  return new THREE.MeshPhysicalMaterial({
    color: baseColor,
    roughness: 0.55,
    metalness: 0.04,
    clearcoat: 0.18,
    clearcoatRoughness: 0.55,
    transparent: true,
    opacity: Math.min(opacity, 0.78),
    emissive: new THREE.Color(part.color),
    emissiveIntensity: 0,
    depthWrite: false
  });
}

function registerVisualEntry(mesh, material, partId, side, cortical, baseOpacity, relatedMaterials = []) {
  const opacity = Math.min(baseOpacity, material.opacity ?? baseOpacity);
  visualEntries.push({
    mesh,
    material,
    relatedMaterials,
    partId,
    side,
    cortical,
    baseOpacity: opacity,
    basePosition: mesh.position.clone(),
    baseScale: mesh.scale.clone(),
    targetPosition: mesh.position.clone(),
    targetScale: mesh.scale.clone(),
    targetOpacity: opacity
  });
}

function updateMeshTargets() {
  if (!THREE) return;

  visualEntries.forEach((entry) => {
    const selected = entry.partId === state.selectedPartId;
    const targetPosition = entry.basePosition.clone();
    const targetScale = entry.baseScale.clone();
    let targetOpacity = entry.baseOpacity;
    let clippingPlanes = [];

    if (state.viewMode === "half") {
      if (entry.cortical) {
        targetOpacity = entry.side === "right" ? 0.18 : 0.66;
        clippingPlanes = [sagittalPlane];
      } else {
        targetOpacity = 0.72;
      }
    }

    if (state.viewMode === "inside") {
      targetOpacity = entry.cortical ? 0.16 : 0.72;
    }

    if (state.viewMode === "split") {
      const direction = entry.basePosition.clone();
      if (direction.length() < 0.18) {
        direction.set(entry.side === "right" ? 1 : entry.side === "left" ? -1 : 0, 0.2, 0.1);
      }
      targetPosition.add(direction.normalize().multiplyScalar(entry.cortical ? 0.38 : 0.24));
      targetOpacity = entry.cortical ? 0.62 : 0.72;
    }

    if (selected) {
      const direction = entry.basePosition.clone();
      if (direction.length() > 0.18) {
        targetPosition.add(direction.normalize().multiplyScalar(0.12));
      }
      targetScale.multiplyScalar(1.08);
      targetOpacity = Math.min(0.88, targetOpacity + 0.22);
      if (entry.material.emissive) {
        entry.material.emissiveIntensity = 0.22;
      }
    } else {
      if (entry.material.emissive) {
        entry.material.emissiveIntensity = 0;
      }
    }

    entry.material.clippingPlanes = clippingPlanes;
    entry.material.needsUpdate = true;
    entry.relatedMaterials.forEach((material) => {
      material.clippingPlanes = clippingPlanes;
      material.needsUpdate = true;
    });
    entry.targetPosition = targetPosition;
    entry.targetScale = targetScale;
    entry.targetOpacity = targetOpacity;
  });
}

function onCanvasClick(event) {
  const hit = pickPart(event);
  if (!hit) {
    hideCallout();
    return;
  }
  setSelectedPart(hit.object.userData.partId, { showCallout: true });
}

function onCanvasPointerMove(event) {
  const hit = pickPart(event);
  els.canvas.style.cursor = hit ? "pointer" : "grab";
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
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  positionAnnotation();
}

function animateScene() {
  animationFrameId = requestAnimationFrame(animateScene);

  visualEntries.forEach((entry) => {
    entry.mesh.position.lerp(entry.targetPosition, 0.08);
    entry.mesh.scale.lerp(entry.targetScale, 0.08);
    entry.material.opacity += (entry.targetOpacity - entry.material.opacity) * 0.08;
    entry.relatedMaterials.forEach((material) => {
      const target = Math.min(0.26, entry.targetOpacity * 0.32);
      material.opacity += (target - material.opacity) * 0.08;
    });
  });

  controls.update();
  renderer.render(scene, camera);
  positionAnnotation();
}

function updateModelStatus() {
  els.stagePanel.dataset.view = state.viewMode;
  if (!state.threeReady) return;
  const labels = {
    full: "Full cortical model",
    half: "Sagittal half view",
    inside: "Internal systems emphasized",
    split: "Separated structure view"
  };
  els.modelStatus.textContent = labels[state.viewMode] || "3D model ready";
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
