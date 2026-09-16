// One object per treatment. Source copy: the live WordPress pages (see docs/legacy/), tightened and
// rewritten where needed for UK CAP Code health-claim rules. Headings use *word* to mark the one
// clay-italic accent word (rendered by components/Heading.jsx, stripped from metadata).
//
// duration / priceFrom are null until Jodi confirms — the UI shows "See prices and times online" instead.

const steps = (consult, treatment, after) => [
  { step: 1, title: "A short consultation", desc: consult },
  { step: 2, title: "Your treatment, adapted as you go", desc: treatment },
  { step: 3, title: "Time to settle afterwards", desc: after },
];

const PAIN_CAVEAT =
  "Massage doesn't treat underlying medical conditions. If you have persistent, severe or unexplained pain, please get it checked by your GP or a healthcare professional first.";

export const services = [
  // ---------------------------------------------------------------- 1. Deep tissue
  {
    slug: "deep-tissue-massage",
    name: "Deep Tissue Massage",
    keyword: "deep tissue massage",
    oldUrl: "/deep-tissue-massage-glasgow/",
    h1: "Deep Tissue Massage in Glasgow",
    eyebrow: "Targeted massage in Glasgow's East End",
    metaTitle: "Deep Tissue Massage Glasgow | The Reset Room Glasgow",
    metaDescription:
      "Deep tissue massage in Glasgow's East End for stubborn back, neck and shoulder tension. Focused pressure, always led by you. Book online today.",
    shortDesc: "Focused, tailored pressure for stubborn tension and back, neck and shoulder tightness.",
    intro: [
      "If your body feels tight, sore or restricted, deep tissue massage works slowly into the areas that need the most attention — without treating massage like a test of endurance.",
      "Whether it's an aching lower back, shoulders that live up by your ears after a week at a desk, or general muscle fatigue from training, every session in the Bridgeton treatment room is shaped around how your body feels on the day.",
    ],
    image: "deep-tissue-massage-treatment-glasgow.jpg",
    suitsYouIf: [
      "Desk work or training leaves you stiff",
      "Back, neck or shoulder tension keeps returning",
      "You feel tight or restricted when you move",
      "You prefer firmer, focused pressure",
    ],
    helpsWith: {
      heading: "What deep tissue massage may *help* with",
      intro:
        "Deep tissue massage is often chosen by people living with ongoing muscular tension, discomfort or restricted movement, such as:",
      items: [
        "Lower back stiffness and muscular aches",
        "Neck and shoulder tension",
        "Tight hips and glutes that can add to sciatic discomfort",
        "Postural tension from desk-based work",
        "General aches and physical fatigue after training",
      ],
      outro:
        "Many clients book after trying to ignore that tightness for weeks or months. Over time the body adapts to tension, and slow, targeted work can help it let go.",
    },
    sections: [
      {
        heading: "What is deep tissue *massage*?",
        body: [
          "Deep tissue massage works into the deeper layers of muscle and connective tissue, helping to ease tension that has built up over time.",
          "Compared with a lighter relaxation massage, it uses slower, more targeted pressure and spends longer on the areas holding the most tightness. The aim isn't simply more pressure — it's the right pressure. Techniques are adapted to how your body responds, so the treatment stays effective and comfortable.",
        ],
        link: { href: "/treatments/swedish-massage", label: "Prefer something lighter? See Swedish massage" },
      },
      {
        heading: "A *personal* approach",
        body: [
          "No two people carry tension in the same way. Some hold it in their shoulders, others in the lower back or hips, often without realising how much it's affecting them day to day.",
          "That's why every deep tissue massage begins with a conversation about where you feel discomfort, what makes it worse and how much pressure feels right. The session can focus on one problem area or combine targeted work with enough flowing massage to help you relax. Throughout, you're encouraged to speak up — effective treatment comes from working with your body, not forcing through pain.",
        ],
      },
    ],
    whatToExpect: {
      intro: "If you're new to deep tissue massage, here's how a session usually goes.",
      during: [
        "Pressure is adjusted to your comfort — tell Jodi any time it's too much or too little",
        "Focus areas are worked slowly and carefully",
        "Techniques change as your muscles respond",
      ],
      after: [
        "You may feel looser and move more freely",
        "Areas that held tension for a long time can feel mildly tender",
        "Water, gentle movement and a quieter evening help your body settle",
      ],
      note: "Any mild soreness is normal when muscles have been tight for a while, and usually settles within a day or two.",
    },
    benefits: [
      { title: "Eases stubborn tension", desc: "Slow, focused work on the areas that feel tightest." },
      { title: "Supports recovery", desc: "A popular choice alongside training or physical work." },
      { title: "Movement can feel easier", desc: "Many clients notice they feel less restricted afterwards." },
      { title: "Calm as well as focused", desc: "Firm doesn't mean rushed — there's still space to unwind." },
    ],
    process: steps(
      "Jodi asks where you feel tight, what makes it worse and how firm you like the pressure.",
      "Pressure and focus areas change as your muscles respond. You can ask for lighter or firmer at any point.",
      "Take a few minutes before heading back out. Drink some water and keep moving gently through the day."
    ),
    comparison: {
      heading: "Deep tissue or Swedish?",
      points: [
        { label: "Deep tissue massage", text: "Slower, firmer and targeted at specific areas of tension." },
        { label: "Swedish massage", text: "Lighter, flowing strokes across the whole body, focused on relaxation." },
      ],
      text: "If you're unsure, book the one that sounds closest — the pressure can be adapted either way on the day.",
    },
    rightForYou: {
      intro: "Deep tissue massage may be right for you if you:",
      items: [
        "Sit for long periods or work at a desk",
        "Notice recurring back, neck or shoulder tightness",
        "Feel stiff or restricted when you move",
        "Want a focused treatment rather than a general relax",
      ],
    },
    caveat: PAIN_CAVEAT,
    duration: null, // TODO(client)
    priceFrom: null, // TODO(client)
    faqs: [
      {
        q: "Does deep tissue massage hurt?",
        a: "It can feel more intense than a relaxation massage, particularly in areas of built-up tension, but it should never feel overwhelming. Pressure is always adjusted to your comfort. The aim isn't to push through pain, but to work in a way that lets your muscles release gradually. Some spots may feel more sensitive if they've been tight for a long time — just say so at any point and the pressure will change.",
      },
      {
        q: "Is deep tissue massage good for back pain?",
        a: "It's commonly chosen by people with lower back stiffness or ongoing muscular tension. Working into the deeper layers of muscle may ease the tightness that contributes to discomfort and make everyday movement feel easier. Massage doesn't treat underlying medical conditions, so if your back pain is persistent, severe or unexplained, please see your GP or a healthcare professional.",
      },
      {
        q: "Can deep tissue massage help sciatica?",
        a: "It may ease tension in the muscles around the lower back, hips and glutes. When those areas are tight they can add to discomfort, and helping them relax can make things feel more manageable. Massage doesn't address the root cause of sciatica, so it's best seen as supportive alongside advice from your GP or physiotherapist.",
      },
      {
        q: "How often should I get a deep tissue massage?",
        a: "It depends on how your body feels and what you're hoping for. People managing tension that keeps building up often book more regularly; others book occasionally for maintenance. A good guide is how quickly the tightness returns — frequency can be adjusted around how you respond.",
      },
      {
        q: "What should I do after a deep tissue massage?",
        a: "Drink some water, keep moving gently rather than sitting still for hours, and give yourself time to rest if you need it. Any tenderness usually settles within a day or two.",
      },
    ],
    relatedServices: ["swedish-massage", "hot-stone-massage", "indian-head-massage"],
  },

  // ---------------------------------------------------------------- 2. Swedish
  {
    slug: "swedish-massage",
    name: "Swedish Massage",
    keyword: "swedish massage",
    oldUrl: "/swedish-massage-glasgow/",
    h1: "Swedish Massage in Glasgow",
    eyebrow: "Full-body relaxation in Glasgow's East End",
    metaTitle: "Swedish Massage Glasgow | The Reset Room Glasgow",
    metaDescription:
      "Swedish massage in Glasgow: a calming, flowing full-body treatment to ease general tension and help you properly switch off. Book your session online.",
    shortDesc: "A calming, flowing full-body massage to ease tension and help you properly switch off.",
    intro: [
      "If you're feeling tense, run down or in need of proper time to switch off, Swedish massage is a calming full-body treatment designed to help you relax and feel more comfortable in your body.",
      "It's the classic massage most people picture: long, flowing strokes, light to moderate pressure and an unhurried rhythm — adapted on the day to how you feel.",
    ],
    image: "massage-treatment-room-glasgow-east-end.jpeg",
    suitsYouIf: [
      "You feel constantly \u201con\u201d and can't switch off",
      "You carry general tension rather than one sore spot",
      "It's your first massage, or you prefer lighter pressure",
      "You feel tired and run down",
    ],
    helpsWith: {
      heading: "What Swedish massage may *help* with",
      intro: "Swedish massage is a good fit when you're looking for relaxation more than targeted work — for example:",
      items: [
        "General, whole-body tension",
        "Stress and the feeling of being constantly \u201con\u201d",
        "Finding it hard to switch off",
        "Feeling tired and run down",
        "Wanting a gentle first massage",
      ],
      outro: "It isn't about fixing one specific issue. It's about giving your whole body and mind a chance to slow down together.",
    },
    sections: [
      {
        heading: "What is Swedish *massage*?",
        body: [
          "Swedish massage is one of the most widely practised massage styles, focused on relaxation and gentle release of tension. It combines long, flowing strokes, light to moderate pressure and rhythmic, calming movements.",
          "Unlike deeper, more targeted treatments, it works across the whole body, helping you feel calmer, looser and more at ease. It's one of the most popular choices for massage in Glasgow when the goal is simply to relax.",
        ],
        link: { href: "/treatments/deep-tissue-massage", label: "Need firmer, targeted work? See deep tissue massage" },
      },
      {
        heading: "A gentle approach that still feels *effective*",
        body: [
          "There's a common idea that massage has to be firm or intense to do anything. Sometimes the body doesn't need intense pressure — it simply needs space to relax.",
          "Many clients arrive mentally busy, physically tense or worn down by everyday life. Working with the body in a fluid, connected way lets tension ease naturally rather than being forced, which makes Swedish massage a particularly good option if you're sensitive to pressure.",
        ],
      },
      {
        heading: "Swedish massage as part of your *routine*",
        body: [
          "Some people book Swedish massage as a one-off treat after a busy spell. Many others make it a regular part of looking after themselves.",
          "Taking time out to relax isn't always easy, but booking it in makes it happen. Regular sessions can help you stay on top of general tension and give you a dependable hour where nothing is being asked of you.",
        ],
      },
    ],
    whatToExpect: {
      intro: "Your session starts with a short conversation about how you're feeling and what you'd like from the treatment.",
      during: [
        "Pressure is adjusted to suit you",
        "The massage flows across the whole body",
        "You stay covered with towels, with only the area being worked on uncovered",
      ],
      after: ["Relaxed and unhurried", "Physically lighter and less tense", "Calmer in your head"],
      note: "For many people that settled feeling lasts well beyond the session.",
    },
    benefits: [
      { title: "Deeply relaxing", desc: "A slow, rhythmic treatment designed to help you unwind." },
      { title: "Eases general tension", desc: "Loosens up the whole body without intense pressure." },
      { title: "Beginner-friendly", desc: "The most common starting point if you're new to massage." },
      { title: "Time that's just yours", desc: "An hour to step away from screens, lists and noise." },
    ],
    process: steps(
      "A quick chat about how you're feeling, any areas to avoid and how firm you'd like it.",
      "Long, flowing strokes across the whole body, with pressure adjusted as you settle.",
      "No need to jump straight up. Take your time, have some water and ease back into your day."
    ),
    comparison: {
      heading: "Swedish vs deep tissue — what's the difference?",
      points: [
        { label: "Swedish massage", text: "Relaxation, flow and a lighter touch across the whole body." },
        { label: "Deep tissue massage", text: "Works more specifically on deeper muscle tension in targeted areas." },
      ],
      text: "If you're not sure which is right, Swedish massage is often a good place to start — especially when your main goal is to relax.",
    },
    rightForYou: {
      intro: "Swedish massage is particularly well suited to you if you:",
      items: [
        "Are new to massage",
        "Prefer lighter or moderate pressure",
        "Feel generally tense or stressed",
        "Want a full-body, relaxing experience",
        "Are looking to switch off mentally",
      ],
    },
    caveat: null,
    duration: null, // TODO(client)
    priceFrom: null, // TODO(client)
    faqs: [
      {
        q: "What is a Swedish massage?",
        a: "A relaxing full-body massage using long, flowing strokes and gentle to moderate pressure. It works across the whole body rather than focusing on one area, which makes it a good choice if you feel generally tense or in need of a reset.",
      },
      {
        q: "Is Swedish massage good for beginners?",
        a: "Yes — it's the treatment most often recommended for a first massage. The pressure is lighter and the techniques are smooth, so it's a comfortable introduction that never feels overwhelming, and everything can be adapted to your comfort level.",
      },
      {
        q: "What is the difference between Swedish and deep tissue massage?",
        a: "Pressure and focus. Swedish massage uses lighter, continuous strokes across the whole body for relaxation. Deep tissue massage works more slowly into deeper muscle layers to target specific areas of tightness. If your goal is to switch off, Swedish is usually the better choice; if tension is persistent and localised, deep tissue may suit you better.",
      },
      {
        q: "How often should I get a Swedish massage?",
        a: "If you're using it to keep on top of stress and tension, every few weeks works well for many people. Booking occasionally, whenever you feel you need a reset, is just as valid. You can adjust based on how you feel after each session.",
      },
      {
        q: "Will Swedish massage help with stress?",
        a: "It's one of the most popular treatments for people who want to unwind. The combination of flowing techniques, gentle pressure and a quiet room helps your body relax, and many clients say they feel calmer and less tense afterwards. It isn't a replacement for other support if stress is affecting your health.",
      },
      {
        q: "Where can I book Swedish massage in Glasgow?",
        a: "At The Reset Room Glasgow, a private treatment room in Bridgeton in the East End, a short trip from the city centre. You can see live availability and book online.",
      },
    ],
    relatedServices: ["deep-tissue-massage", "hot-stone-massage", "reflexology"],
  },

  // ---------------------------------------------------------------- 3. Pregnancy
  {
    slug: "pregnancy-massage",
    name: "Pregnancy Massage",
    keyword: "pregnancy massage",
    oldUrl: "/pregnancy-massage-glasgow/",
    h1: "Pregnancy Massage in Glasgow",
    eyebrow: "Pregnancy and postnatal massage",
    metaTitle: "Pregnancy Massage Glasgow | The Reset Room Glasgow",
    metaDescription:
      "Gentle pregnancy and postnatal massage in Glasgow, carefully adapted to each stage with side-lying support. By a trained, insured therapist. Book online.",
    shortDesc: "Safe, gentle, carefully adapted massage through pregnancy and postnatal recovery.",
    intro: [
      "Pregnancy massage offers a calm, supportive way to ease tension and discomfort and give yourself time to properly rest while your body changes.",
      "Whether it's an aching lower back, heavy legs or simply the physical demands of pregnancy, every treatment is adapted to your stage and how you're feeling on the day.",
    ],
    reassurance:
      "If you have any specific medical concerns, or you're unsure whether massage is right for you, please check with your GP or midwife before booking.",
    image: "therapy-room-consultation-area-glasgow.jpeg",
    suitsYouIf: [
      "Your lower back or pelvis feels achy",
      "Your legs, feet or hands feel heavy or puffy",
      "You're tired and finding it hard to rest",
      "You've recently had your baby and need time to recover",
    ],
    helpsWith: {
      heading: "How pregnancy massage can *support* you",
      intro:
        "As your body changes it's common to notice discomfort building. Pregnancy massage is often chosen to help with:",
      items: [
        "Lower back and pelvic discomfort",
        "Neck and shoulder tension",
        "A heavy or puffy feeling in the legs, feet and hands",
        "Tiredness and general aches",
        "Finding time to properly rest",
      ],
      outro:
        "For many mums-to-be it isn't only about physical comfort — it's about having space to pause, breathe and feel looked after.",
    },
    sections: [
      {
        heading: "What is pregnancy *massage*?",
        body: [
          "Pregnancy massage — also called antenatal or maternity massage — is massage specifically adapted to support your body during pregnancy.",
          "Positioning, pressure and techniques are all adjusted depending on how far along you are. Gentle techniques are used to ease tension and help you feel more comfortable, with you and your baby kept comfortable throughout.",
        ],
      },
      {
        heading: "Is pregnancy massage *safe*?",
        body: [
          "When it's carried out by a trained therapist who knows how to adapt it, pregnancy massage is a gentle and supportive treatment. At The Reset Room your comfort is the priority from start to finish.",
        ],
        list: [
          "Treatments are adapted for each stage of pregnancy",
          "You're usually side-lying, supported by cushions, so there's no pressure on your bump or back",
          "Pressure stays gentle and is always adjusted to suit you",
          "Carried out by a trained and insured therapist",
        ],
        after:
          "If you have ongoing pain, a medical condition or any doubt about whether treatment is appropriate, speak to your GP, midwife or healthcare provider before booking.",
      },
      {
        heading: "A calm, personal *approach*",
        body: [
          "Every pregnancy is different, and so is every treatment. Some clients arrive physically uncomfortable; others simply need time to switch off and rest.",
          "Nothing is rushed, and nothing is done without checking you're comfortable. You can change position whenever you need to. This is time set aside for you — something that can be hard to find during pregnancy.",
        ],
      },
      {
        heading: "Postnatal and postpartum *massage*",
        body: [
          "Massage can also support your body after you've given birth. Postnatal massage is often booked to ease tension from feeding positions, carrying your baby and general tiredness — and to give you an hour of real rest during a demanding time.",
          "There's no fixed timeline for when to start. It's about when you feel ready, and if you're unsure, Jodi can talk it through with you first.",
        ],
      },
      {
        heading: "Other treatments during *pregnancy*",
        body: [
          "Some clients also choose reflexology or lymphatic drainage massage during pregnancy, depending on what feels right. These can be discussed alongside pregnancy massage so your care stays joined up.",
        ],
        links: [
          { href: "/treatments/reflexology", label: "Reflexology" },
          { href: "/treatments/lymphatic-drainage-massage", label: "Lymphatic drainage massage" },
        ],
      },
    ],
    whatToExpect: {
      intro:
        "Your appointment starts with a short consultation about how you're feeling, how far along you are and anything you'd like to focus on.",
      during: [
        "You'll be supported with cushions, usually lying on your side",
        "Pressure stays gentle and appropriate for your stage",
        "Focus areas are adjusted to where you feel it most",
      ],
      after: ["More relaxed and at ease", "Less physical tension", "Glad of the time to rest"],
      note: "Take your time getting up — there's no rush to leave the table.",
    },
    benefits: [
      { title: "Adapted to your stage", desc: "Positioning and pressure change as your pregnancy progresses." },
      { title: "Comfortable support", desc: "Side-lying with cushions, never pressure on your bump." },
      { title: "Eases everyday aches", desc: "Many clients find back and shoulder tension feels lighter." },
      { title: "Real rest", desc: "An hour where the only thing to do is lie still." },
    ],
    process: steps(
      "Jodi checks your stage of pregnancy, how you're feeling and anything your GP or midwife has mentioned.",
      "Gentle, supported massage with cushions. Move or change position whenever you need to.",
      "Get up slowly, have some water and take the calm feeling home with you."
    ),
    comparison: null,
    rightForYou: {
      intro: "Pregnancy massage may suit you if you:",
      items: [
        "Feel uncomfortable, tired or heavy as your body changes",
        "Want gentle, carefully adapted massage",
        "Are recovering after birth and need time for yourself",
        "Find it hard to set aside time to rest",
      ],
    },
    caveat: PAIN_CAVEAT,
    duration: null, // TODO(client)
    priceFrom: null, // TODO(client)
    faqs: [
      {
        q: "When can you start pregnancy massage?",
        a: "It's often recommended after the first trimester, but that isn't a strict rule for everyone. Some people wait until later on; others feel comfortable booking earlier depending on their circumstances. What matters most is that the treatment is adapted and that you feel confident. If you're unsure, check with your GP or midwife, or get in touch before booking.",
      },
      {
        q: "Is pregnancy massage safe?",
        a: "When carried out by a trained therapist who adapts techniques, positioning and pressure to each stage, pregnancy massage is considered a safe and supportive treatment. Your comfort is prioritised throughout and any concerns can be talked through before your appointment. If you have a medical condition or complications, please check with your GP or midwife first.",
      },
      {
        q: "Can pregnancy massage help back pain?",
        a: "It's commonly chosen for lower back discomfort. As your body changes, the lower back, hips and surrounding muscles can become tight, and gentle massage may ease that tension so movement feels more comfortable. It doesn't treat underlying conditions, so persistent or severe pain should always be checked by your midwife or GP.",
      },
      {
        q: "What position will I be in during the massage?",
        a: "Usually on your side, with supportive cushions keeping you comfortable. This lets you relax without pressure on your back or bump. If you need to move or change position at any point, that's always fine.",
      },
      {
        q: "Can I have a massage after giving birth?",
        a: "Yes — postnatal (postpartum) massage is a gentle way to support your body as it recovers. Many people choose it for tension from feeding positions and carrying their baby, or simply for rest. There's no fixed timeline; it depends on when you feel ready. If you've had a caesarean or complications, check with your GP or midwife first.",
      },
      {
        q: "How often should you have a pregnancy massage?",
        a: "Some people book occasionally when discomfort builds; others prefer regular sessions throughout pregnancy. It can always be adjusted to how your body responds.",
      },
    ],
    relatedServices: ["reflexology", "lymphatic-drainage-massage", "swedish-massage"],
  },

  // ---------------------------------------------------------------- 4. Lymphatic
  {
    slug: "lymphatic-drainage-massage",
    name: "Lymphatic Drainage Massage",
    keyword: "lymphatic drainage massage",
    oldUrl: "/lymphatic-drainage-massage-glasgow/",
    h1: "Lymphatic Drainage Massage in Glasgow",
    eyebrow: "Gentle, rhythmic massage",
    metaTitle: "Lymphatic Drainage Massage Glasgow | Reset Room",
    metaDescription:
      "Gentle lymphatic drainage massage in Glasgow to support natural lymph flow and help you feel lighter when puffy or heavy. Book your treatment online.",
    shortDesc: "A gentle, rhythmic treatment to support natural lymph flow and help you feel lighter.",
    intro: [
      "Lymphatic drainage massage is a gentle, specialised treatment designed to support your body's natural lymph flow — popular with clients who feel puffy, heavy or sluggish and want to feel lighter again.",
      "There's no deep pressure involved. Slow, light, rhythmic movements do the work, which is why so many people find it one of the most relaxing treatments they've had.",
    ],
    image: "lymphatic-drainage-massage-glasgow.jpg",
    suitsYouIf: [
      "Your legs, ankles or face feel puffy",
      "You feel heavy, tight or sluggish",
      "You'd rather avoid deep pressure",
      "You want something calm and restorative",
    ],
    helpsWith: {
      heading: "When people choose lymphatic *drainage*",
      intro: "This treatment is often booked by people who notice:",
      items: [
        "Puffiness in the legs, ankles or face",
        "A heavy or tight feeling in the body",
        "The sense of holding on to water",
        "Heaviness after exercise",
        "Feeling generally sluggish",
      ],
      outro:
        "By encouraging the natural movement of lymph fluid, the treatment is designed to leave you feeling lighter and more comfortable.",
    },
    sections: [
      {
        heading: "What is lymphatic drainage *massage*?",
        body: [
          "Lymphatic drainage massage — sometimes called manual lymphatic drainage — is a light, rhythmic technique that encourages the movement of lymph fluid around the body.",
          "The lymphatic system plays a part in the body's fluid balance. When things feel sluggish, fluid can seem to build up and leave you feeling puffy or heavy. This treatment works with the body's own rhythm, using very gentle strokes to support natural lymph flow.",
        ],
      },
      {
        heading: "Gentle by *design*",
        body: [
          "Lymphatic drainage isn't a deep or forceful treatment — and that's intentional. Many people expect massage to be firm to be worthwhile, but this works differently: light, controlled movements that encourage flow without strain.",
          "For some clients it feels unlike any massage they've had before — slower and quieter, giving the body time to respond. It's particularly suited to anyone who feels sensitive, fatigued or simply in need of a more nurturing approach.",
        ],
        link: { href: "/treatments/deep-tissue-massage", label: "Looking for firmer work? See deep tissue massage" },
      },
      {
        heading: "A treatment that's calming, *too*",
        body: [
          "Although it's often chosen for physical reasons, many clients notice how relaxing lymphatic drainage feels. The slow, repetitive rhythm makes it easy to switch off, and some people make it a regular way to reset.",
        ],
      },
    ],
    whatToExpect: {
      intro: "Your session starts with a short consultation about how you're feeling and what you'd like from the treatment.",
      during: ["Movements are slow, light and rhythmic", "Pressure stays gentle throughout", "Everything is adapted to your comfort"],
      after: ["A feeling of lightness", "Less of that puffy, heavy sensation", "Calm and relaxed"],
      note: "Because the treatment works with your body rather than forcing change, many people notice the difference gradually over a day or two.",
    },
    benefits: [
      { title: "Feel lighter", desc: "Designed to ease that heavy, puffy feeling." },
      { title: "Supports natural lymph flow", desc: "Light, rhythmic strokes that work with the body." },
      { title: "Very gentle", desc: "One of the lightest-touch treatments available." },
      { title: "Deeply calming", desc: "A slow pace that makes switching off easy." },
    ],
    process: steps(
      "Jodi asks where you feel puffy or heavy and checks for anything that means the treatment should be adapted.",
      "Light, slow, rhythmic strokes. The pressure never needs to be firm to do its job.",
      "Drink some water, keep moving gently and give your body a day or two to respond."
    ),
    comparison: null,
    rightForYou: {
      intro: "Lymphatic drainage massage may be a good fit if you:",
      items: [
        "Feel puffy, heavy or sluggish",
        "Find deeper pressure uncomfortable",
        "Want a gentle treatment that still feels purposeful",
        "Are looking for something restorative",
      ],
    },
    caveat:
      "Lymphatic drainage massage is a wellbeing treatment, not a medical one. If you have sudden, painful or unexplained swelling — or a diagnosed condition such as lymphoedema, a heart or kidney condition, or a history of blood clots — please speak to your GP before booking.",
    duration: null, // TODO(client)
    priceFrom: null, // TODO(client)
    faqs: [
      {
        q: "What does lymphatic drainage massage do?",
        a: "It uses gentle, rhythmic techniques to support the natural movement of lymph fluid around the body. When things feel sluggish you may notice puffiness or heaviness, and the treatment is designed to encourage natural lymph flow. Many clients describe feeling lighter and more comfortable afterwards.",
      },
      {
        q: "Is lymphatic drainage massage painful?",
        a: "No — it's one of the gentlest massages there is. It uses very light, controlled movements rather than deep pressure and should feel calming throughout. Many people are surprised by how subtle it feels.",
      },
      {
        q: "How often should I have lymphatic drainage massage?",
        a: "If you're regularly feeling puffy or heavy, more frequent sessions may help you feel the benefit more consistently. For general wellbeing, many people book occasionally when they feel sluggish. You can adjust frequency based on how you feel after each session.",
      },
      {
        q: "Does lymphatic drainage massage help with water retention?",
        a: "It may help with that puffy, heavy feeling by encouraging the natural movement of lymph fluid, particularly in areas like the legs and ankles. It works with your body rather than forcing change, so results tend to feel gradual. Sudden or painful swelling should always be checked by your GP.",
      },
      {
        q: "What should I do after a lymphatic drainage massage?",
        a: "Drink some water, keep moving gently and rest if you need to. You may notice changes over the following day or two, such as feeling lighter or more comfortable.",
      },
    ],
    relatedServices: ["pregnancy-massage", "deep-tissue-massage", "reflexology"],
  },

  // ---------------------------------------------------------------- 5. Hot stone
  {
    slug: "hot-stone-massage",
    name: "Hot Stone Massage",
    keyword: "hot stone massage",
    oldUrl: "/hot-stone-massage-glasgow/",
    h1: "Hot Stone Massage in Glasgow",
    eyebrow: "Warmth and flowing massage",
    metaTitle: "Hot Stone Massage Glasgow | The Reset Room Glasgow",
    metaDescription:
      "Hot stone massage in Glasgow's East End: warm stones and flowing massage for deep relaxation without intense pressure. See availability and book online.",
    shortDesc: "Warm stones and flowing massage for deep relaxation without intense pressure.",
    intro: [
      "Hot stone massage combines gentle, flowing massage with the soothing warmth of smooth heated stones, helping your body settle into relaxation more quickly.",
      "The warmth helps muscles soften, so the treatment feels effective without needing deep pressure. It's a lovely choice if you feel physically tight, mentally drained or simply in need of time to properly switch off.",
    ],
    image: "massage-treatment-room-glasgow.jpg", // no real hot stone photo — TODO(client): photo of the stones
    suitsYouIf: [
      "You love warmth more than firm pressure",
      "You find it hard to fully switch off",
      "You carry stress as tension in your body",
      "You want a slower, more immersive treatment",
    ],
    helpsWith: {
      heading: "What hot stone massage may *help* with",
      intro: "Hot stone massage can be a good choice if you:",
      items: [
        "Feel physically tense or tight",
        "Carry stress in your shoulders and back",
        "Struggle to relax or switch off",
        "Notice general aches or stiffness",
        "Want a deeper sense of relaxation",
      ],
      outro: "It's also popular with people who find deeper pressure uncomfortable but still want a treatment that feels substantial.",
    },
    sections: [
      {
        heading: "What is hot stone *massage*?",
        body: [
          "Smooth, heated stones are placed on key areas of the body and also used as part of the massage itself.",
          "The warmth helps muscles soften more quickly, so the treatment can ease tension without relying on firm pressure. The result feels both physically calming and mentally settling.",
        ],
      },
      {
        heading: "Why heat makes a *difference*",
        body: [
          "Warmth naturally encourages muscles to relax. That can make the treatment feel more comfortable, help tension ease and let your body settle faster.",
          "For many clients this makes hot stone massage feel more relaxing than standard massage — not because it's stronger, but because the body is more receptive.",
        ],
      },
      {
        heading: "A slower, more *immersive* experience",
        body: [
          "Hot stone massage has a different pace. The combination of warmth and movement feels slower and quieter from the very start. Many clients settle in quickly, drift more easily and leave calmer than they expected.",
          "It's less about working on tension and more about allowing the whole body to soften.",
        ],
        link: { href: "/treatments/swedish-massage", label: "Compare with Swedish massage" },
      },
    ],
    whatToExpect: {
      intro:
        "Your session starts with a short consultation about how you're feeling, with the warmth of the stones introduced gradually.",
      during: [
        "Heated stones are placed on key areas of the body",
        "Stones are also used as part of the massage",
        "Pressure stays comfortable and tailored to you",
      ],
      after: ["Deeply relaxed", "Physically lighter", "Calmer in your head"],
      note: "Stone temperature is checked throughout — tell Jodi straight away if anything feels too warm.",
    },
    benefits: [
      { title: "Relaxation that builds", desc: "Warmth and slow strokes help you settle quickly." },
      { title: "Eases muscle tension", desc: "Heat helps muscles soften so they're easier to work." },
      { title: "No intense pressure needed", desc: "Effective without firm, deep work." },
      { title: "Comforting and restorative", desc: "A cosy treatment, especially on a cold Glasgow day." },
    ],
    process: steps(
      "Jodi checks how you're feeling and whether there's anything that means heat isn't suitable for you today.",
      "Warm stones are introduced gradually alongside flowing massage. Temperature is checked throughout.",
      "Stay put for a moment and let the warmth fade gently before heading back out."
    ),
    comparison: {
      heading: "Hot stone or Swedish?",
      points: [
        { label: "Hot stone massage", text: "Adds warmth to help you relax more quickly — slow and immersive." },
        { label: "Swedish massage", text: "Flowing techniques without heat, for general relaxation." },
      ],
      text: "Neither is better — they're different experiences. If you're unsure, your treatment can be guided by how you're feeling.",
    },
    rightForYou: {
      intro: "Hot stone massage is particularly suited to people who:",
      items: [
        "Prefer warmth over deep pressure",
        "Find it difficult to fully switch off",
        "Want a slower, more immersive experience",
        "Need time to properly unwind",
      ],
    },
    // TODO(client): which contraindications does Jodi want listed (pregnancy, circulation, skin conditions, diabetes etc.)?
    caveat:
      "Heat isn't suitable for everyone. Jodi will check your health during the consultation, and if hot stones aren't right for you on the day, the massage can be adapted.",
    duration: null, // TODO(client)
    priceFrom: null, // TODO(client)
    faqs: [
      {
        q: "What is a hot stone massage?",
        a: "A treatment that uses smooth, heated stones placed on the body and incorporated into the massage. The warmth helps muscles soften, creating a deeply calming experience where tension can ease without strong pressure.",
      },
      {
        q: "Is hot stone massage better than Swedish massage?",
        a: "Neither is better — they're different. Hot stone massage uses warmth to help you relax more quickly and feels slow and immersive. Swedish massage uses flowing techniques without heat and is often chosen for general relaxation. If you're unsure, your treatment can be guided by how you're feeling.",
      },
      {
        q: "Does hot stone massage help with tension?",
        a: "Many clients find it does. The warmth helps muscles soften, which can make built-up tension in the back, shoulders and neck easier to release — especially if deeper pressure feels too intense.",
      },
      {
        q: "Is hot stone massage safe?",
        a: "When carried out properly it's a controlled treatment. Stone temperature is carefully managed so they feel warm and comfortable, never too hot, and you're encouraged to give feedback at any point. Heat isn't suitable for everyone, so your health is checked in the consultation first.",
      },
      {
        q: "What should I wear to a hot stone massage?",
        a: "Whatever you feel comfortable in. You'll be covered with towels throughout, with only the area being worked on uncovered. If it's your first massage, everything is explained before you start.",
      },
    ],
    relatedServices: ["swedish-massage", "deep-tissue-massage", "reiki"],
  },

  // ---------------------------------------------------------------- 6. Reflexology
  {
    slug: "reflexology",
    name: "Reflexology",
    keyword: "reflexology",
    oldUrl: "/reflexology-glasgow/",
    h1: "Reflexology in Glasgow",
    eyebrow: "A calm, foot-based therapy",
    metaTitle: "Reflexology Glasgow | The Reset Room Glasgow",
    metaDescription:
      "Reflexology in Glasgow's East End: a gentle, foot-based therapy many clients find deeply calming when life feels busy. See availability and book online.",
    shortDesc: "A gentle, foot-based therapy many clients find deeply calming.",
    intro: [
      "Reflexology is a gentle, foot-based holistic therapy that many clients find deeply relaxing — a quiet hour when life feels busy and your mind won't settle.",
      "There's nothing to manage and no aches to focus on. You simply get comfortable while gentle pressure is applied to points on your feet.",
    ],
    image: "massage-room-glasgow-east-end.jpg",
    suitsYouIf: [
      "You feel stressed or mentally busy",
      "You'd like a lighter-touch treatment",
      "You'd rather keep your clothes on",
      "You want time to properly switch off",
    ],
    helpsWith: {
      heading: "Why people choose *reflexology*",
      intro:
        "Many clients book reflexology not because something is wrong, but because something feels off. It's often chosen when you're dealing with:",
      items: [
        "Stress and tension that sits in the body",
        "Difficulty switching off",
        "Feeling restless or unsettled",
        "General tiredness and feeling run down",
        "A need for calm and a clearer head",
      ],
      outro: "For some people it becomes a regular way to take time out from the pace of everyday life.",
    },
    sections: [
      {
        heading: "What is *reflexology*?",
        body: [
          "Reflexology is a holistic therapy based on the idea that points on the feet relate to different areas of the body. Gentle pressure is applied to these points with the aim of encouraging relaxation and a sense of overall wellbeing.",
          "Unlike massage, reflexology focuses entirely on the feet. Even so, many people say the relaxation is felt through the whole body and lasts well beyond the session.",
        ],
      },
      {
        heading: "A different kind of *relaxation* treatment",
        body: [
          "Reflexology feels different from most treatments. There's no need to think about pressure or specific aches — the experience is quieter, slower and more inward.",
          "Many clients describe it as one of the few times they properly relax without distraction. It isn't about fixing one issue; it's about creating space for you to reset.",
        ],
      },
      {
        heading: "Reflexology during *pregnancy*",
        body: [
          "Some clients choose reflexology as a gentle way to relax and take time out during pregnancy. Treatments are adapted for comfort, and if you're pregnant this will be discussed beforehand to make sure it's appropriate for you.",
        ],
        link: { href: "/treatments/pregnancy-massage", label: "See pregnancy massage" },
      },
    ],
    whatToExpect: {
      intro: "Your session starts with a short consultation about how you're feeling and what you'd like from the treatment.",
      during: [
        "You'll be comfortably positioned, fully clothed except for your feet",
        "Gentle pressure is applied to specific areas of the feet",
        "The pace stays slow and steady",
      ],
      after: ["Calm, with a quieter mind", "Physically more relaxed", "Ready for a restful evening"],
      note: "Many clients drift into a deeply relaxed state during the session. You're welcome to ask questions at any point.",
    },
    benefits: [
      { title: "Deeply calming", desc: "Slow, repetitive pressure that many find easy to sink into." },
      { title: "Light touch", desc: "Comfortable and non-invasive, with no oil on your back or shoulders." },
      { title: "Stay clothed", desc: "Only your feet are uncovered." },
      { title: "A pause from busy", desc: "Space to step out of that constantly busy headspace." },
    ],
    process: steps(
      "A quick chat about how you're feeling, your general health and whether you're pregnant.",
      "Slow, gentle pressure on points across both feet, adapted if any area feels sensitive.",
      "Take a moment before you stand up. Have some water and keep the evening quiet if you can."
    ),
    comparison: {
      heading: "Reflexology vs massage",
      points: [
        { label: "Massage", text: "Works on muscles using pressure and movement across the body." },
        { label: "Reflexology", text: "Uses gentle pressure on points on the feet, with a lighter, quieter feel." },
      ],
      text: "Both support relaxation in different ways, and many clients choose each at different times depending on how they feel.",
    },
    rightForYou: {
      intro: "Reflexology is particularly suited to people who:",
      items: [
        "Feel stressed or overwhelmed",
        "Want a non-invasive, relaxing treatment",
        "Prefer a lighter touch",
        "Are looking for time to fully switch off",
      ],
    },
    caveat:
      "Reflexology is a complementary therapy that supports relaxation. It isn't a substitute for medical diagnosis or treatment, so please keep seeing your GP about any health concerns.",
    duration: null, // TODO(client)
    priceFrom: null, // TODO(client)
    faqs: [
      {
        q: "What does reflexology do?",
        a: "Reflexology involves applying gentle pressure to points on the feet, based on the idea that they relate to different areas of the body. The aim is not to treat individual conditions, but to encourage relaxation and a general sense of wellbeing. For most clients, the main benefit is how deeply relaxing it feels.",
      },
      {
        q: "Is reflexology painful?",
        a: "No — it should feel gentle and comfortable throughout. Some areas of the feet can feel a little more sensitive, but pressure is always adapted so you can relax.",
      },
      {
        q: "Can reflexology help with stress and anxiety?",
        a: "Many people choose reflexology as a way to unwind when they're feeling stressed. The slow, repetitive rhythm makes it easier to switch off. It isn't a replacement for other support, so if anxiety is affecting your day-to-day life please speak to your GP as well.",
      },
      {
        q: "How often should I have reflexology?",
        a: "Some people have regular sessions as part of their routine; others book when they feel overwhelmed or in need of a reset. A good guide is how you feel afterwards and how long that sense of calm lasts.",
      },
      {
        q: "Is reflexology the same as a foot massage?",
        a: "No. Although both involve the feet, reflexology is more structured, working through specific points rather than general massage strokes. Many clients find it feels more focused and calming than a foot massage.",
      },
    ],
    relatedServices: ["reiki", "pregnancy-massage", "sound-baths"],
  },

  // ---------------------------------------------------------------- 7. Indian head
  {
    slug: "indian-head-massage",
    name: "Indian Head Massage",
    keyword: "indian head massage",
    oldUrl: "/indian-head-massage-glasgow/",
    h1: "Indian Head Massage in Glasgow",
    eyebrow: "Scalp, neck and shoulders",
    metaTitle: "Indian Head Massage Glasgow | The Reset Room",
    metaDescription:
      "Indian head massage in Glasgow: focused work on the scalp, neck and shoulders to release upper-body tension and quieten a busy mind. Book online today.",
    shortDesc: "Focused work on the scalp, neck and shoulders to release upper-body tension.",
    intro: [
      "Indian head massage is a focused treatment for the head, neck and shoulders — the places stress tends to settle without you noticing.",
      "Whether your neck is stiff from screens, your shoulders are tight or your head just feels too full, it's a gentle but effective way to let both body and mind unwind.",
    ],
    image: "private-massage-room-glasgow.jpeg",
    suitsYouIf: [
      "Tension sits in your neck and shoulders",
      "You spend long hours at a desk or on screens",
      "Your head feels busy or full",
      "You want a shorter, focused treatment",
    ],
    helpsWith: {
      heading: "What Indian head massage may *help* with",
      intro: "Indian head massage can be a good choice if you notice:",
      items: [
        "Head pressure linked to neck and shoulder tightness",
        "Neck and shoulder tension",
        "Mental tiredness",
        "Tightness from desk work or screen use",
        "Difficulty switching off",
      ],
      outro: "Because the treatment concentrates on these key areas, many clients notice a difference after a single session.",
    },
    sections: [
      {
        heading: "What is Indian head *massage*?",
        body: [
          "Indian head massage is a traditional treatment that focuses on the upper body — the scalp, neck, shoulders and upper back — using gentle pressure, rhythmic movements and targeted techniques.",
          "Unlike a full-body massage it's more concentrated and direct, which makes it ideal when your tension lives in your upper body.",
        ],
      },
      {
        heading: "A treatment that clears your *head*",
        body: [
          "While the work is physical, many clients notice the effect mentally too. Focused touch and rhythmic movement can quieten racing thoughts, and for some people it feels like a chance to pause, breathe and feel clearer again.",
        ],
      },
      {
        heading: "A flexible, *accessible* option",
        body: [
          "Indian head massage is often chosen because it's simple and focused. It suits people who want a shorter treatment, prefer targeted relief to a full-body massage, or simply want an easy way to release upper-body tension.",
        ],
      },
    ],
    whatToExpect: {
      intro: "Your session starts with a short consultation about how you're feeling and where you tend to hold tension.",
      during: [
        "Focus is on the scalp, neck and shoulders",
        "Pressure is adjusted to your comfort",
        "Oil is optional — let Jodi know your preference",
      ],
      after: ["Lighter in the head and shoulders", "More relaxed", "Clearer-headed"],
      note: "Some clients notice relief straight away; for others the benefits build over time.",
    },
    benefits: [
      { title: "Releases upper-body tension", desc: "Focused work on the neck, shoulders and scalp." },
      { title: "Quietens a busy mind", desc: "Rhythmic movements many find easy to switch off to." },
      { title: "Shorter and focused", desc: "Relief without committing to a full-body treatment." },
      { title: "Oil is your choice", desc: "Skip it if you have plans afterwards." },
    ],
    process: steps(
      "Jodi asks where you hold tension and whether you'd like oil on your scalp.",
      "Rhythmic, targeted work through the shoulders, neck and scalp, adjusted to your comfort.",
      "Take a moment to come round, have some water and roll your shoulders on the way out."
    ),
    comparison: {
      heading: "Indian head massage vs full-body massage",
      points: [
        { label: "Indian head massage", text: "Focuses on the scalp, neck and shoulders, where stress commonly builds." },
        { label: "Full-body massage", text: "Works across the whole body, addressing tension more broadly." },
      ],
      text: "Choose Indian head massage when tension is concentrated in your upper body or you want something shorter. Swedish massage may suit you better for whole-body relaxation.",
      link: { href: "/treatments/swedish-massage", label: "See Swedish massage" },
    },
    rightForYou: {
      intro: "Indian head massage is particularly suited to people who:",
      items: [
        "Want a shorter, focused treatment",
        "Prefer targeted relief over full-body massage",
        "Spend long periods at a desk or on screens",
        "Want a simple way to release tension",
      ],
    },
    caveat:
      "Indian head massage doesn't treat headaches or migraines. If you have frequent, severe or unexplained headaches, please see your GP or optician first.",
    duration: null, // TODO(client)
    priceFrom: null, // TODO(client)
    faqs: [
      {
        q: "What is Indian head massage?",
        a: "A focused treatment for the scalp, neck, shoulders and upper back — areas where many people hold stress without realising. Gentle pressure, rhythmic movements and targeted techniques help release tightness in the upper body and encourage a calmer state of mind.",
      },
      {
        q: "Can Indian head massage help headaches?",
        a: "It may ease tension-type headaches linked to tightness in the neck, shoulders and scalp, by helping those muscles relax. It isn't a solution for every headache or for migraine. If you get recurring or severe headaches, please speak to your GP.",
      },
      {
        q: "Do you need oil for Indian head massage?",
        a: "Not always. Oil can be used on the scalp, but if you'd rather avoid it — because of your hair, plans afterwards or personal preference — just mention it before your session and the treatment will be adapted.",
      },
      {
        q: "How long does an Indian head massage last?",
        a: "It's usually shorter than a full-body massage, which is part of why it's so accessible. Current appointment lengths are shown when you book online.",
      },
      {
        q: "Is Indian head massage relaxing?",
        a: "Yes — it's both relaxing and targeted. Many people choose it not only for tight shoulders but because they want help getting out of that constantly busy headspace.",
      },
    ],
    relatedServices: ["deep-tissue-massage", "reiki", "swedish-massage"],
  },

  // ---------------------------------------------------------------- 8. Reiki
  {
    slug: "reiki",
    name: "Reiki",
    keyword: "reiki",
    oldUrl: "/reiki-glasgow/",
    h1: "Reiki in Glasgow",
    eyebrow: "Stillness and light touch",
    metaTitle: "Reiki Glasgow | The Reset Room Glasgow",
    metaDescription:
      "Reiki in Glasgow's East End: a still, light-touch treatment for when your mind won't switch off. Optional singing bowls in a private 1:1 session. Book online.",
    shortDesc: "A still, light-touch treatment for when your mind won't switch off.",
    intro: [
      "Reiki is a gentle, calming treatment that gives you an hour of complete stillness. Using light touch, or hands held just above the body, it creates space to rest without pressure or massage.",
      "It's often chosen when you're feeling overwhelmed, mentally busy or simply in need of time to switch off, in a private room in Glasgow's East End.",
    ],
    image: "therapy-room-glasgow-east-end.jpg",
    suitsYouIf: [
      "Your mind keeps racing, even when you rest",
      "You'd like a no-pressure or very light-touch treatment",
      "You feel mentally drained rather than physically sore",
      "You're open to a different kind of relaxation",
    ],
    helpsWith: {
      heading: "When people choose *Reiki*",
      intro: "Clients often book Reiki when they:",
      items: [
        "Feel stressed or overwhelmed",
        "Struggle to switch off",
        "Feel mentally or emotionally drained",
        "Want a non-touch or very light-touch treatment",
        "Are looking for a calm, restorative hour",
      ],
      outro: "It isn't about targeting one issue. It's about creating a space where body and mind can settle.",
    },
    sections: [
      {
        heading: "What is *Reiki*?",
        body: [
          "Reiki is a gentle, non-invasive practice that originated in Japan. During a session you lie fully clothed and comfortable while hands are placed lightly on, or held just above, different areas of the body.",
          "There's no pressure and no muscle work. For many people it's less about understanding how it works and more about how it feels: still, quiet and unhurried.",
        ],
      },
      {
        heading: "A treatment that lets you *switch* off",
        body: [
          "It's not always easy to stop. Even when you rest, the mind can keep going — thinking, planning, holding on.",
          "Reiki offers a different kind of pause. Because there's nothing to do and nothing to respond to, the body often begins to relax on its own. Some clients drift into a deeply relaxed state; others simply feel calmer and more settled.",
        ],
      },
      {
        heading: "Subtle, but *noticeable*",
        body: [
          "Reiki is often described as subtle. Rather than working physically through the muscles, it offers a quieter kind of rest, and many clients notice a sense of calm during the session and a clearer head afterwards.",
          "Others simply feel \u201cdifferent\u201d in a way that's hard to put into words — lighter, quieter or more settled. Every experience is individual, and there's no expectation of what you should feel.",
        ],
      },
      {
        heading: "Reiki and sound: a combined *approach*",
        body: [
          "Some clients choose to add gentle sound to their Reiki session, such as singing bowls. It can make the experience feel more immersive while staying calm and one-to-one — ideal if you enjoy sound baths but prefer a private setting.",
        ],
        link: { href: "/sound-baths", label: "See sound baths" },
      },
    ],
    whatToExpect: {
      intro: "Your session starts with a short consultation about how you're feeling and what you'd like from the treatment.",
      during: [
        "You lie comfortably, fully clothed, in a quiet room",
        "Hands are placed lightly on or just above the body",
        "The pace stays slow and steady",
      ],
      after: ["Deeply relaxed", "Quieter in your head", "Lighter and more settled"],
      note: "Every experience is individual and there's no expectation of what you should feel.",
    },
    benefits: [
      { title: "Complete stillness", desc: "Nothing to do and nothing asked of you." },
      { title: "Light or no touch", desc: "No massage, no pressure, fully clothed." },
      { title: "Quiet for a busy mind", desc: "Many clients say it's the calmest hour of their week." },
      { title: "Sound if you'd like", desc: "Singing bowls can be added to a 1:1 session." },
    ],
    process: steps(
      "Jodi asks how you're feeling, whether you'd prefer light touch or none, and whether you'd like sound added.",
      "You rest, fully clothed, while hands are placed lightly on or just above the body.",
      "Come round slowly. There's no rush to get up or to talk."
    ),
    comparison: {
      heading: "Reiki vs massage",
      points: [
        { label: "Massage", text: "Works physically through muscles using pressure and movement." },
        { label: "Reiki", text: "Very light or no touch, with no muscle work — still and quiet." },
      ],
      text: "Some clients use both at different times depending on whether they feel physically tense or mentally overloaded.",
    },
    rightForYou: {
      intro: "Reiki is particularly suited to people who:",
      items: [
        "Prefer a non-invasive approach",
        "Feel overwhelmed or mentally busy",
        "Want time to fully switch off",
        "Are open to a different type of relaxation",
      ],
    },
    caveat:
      "Reiki is a complementary practice for relaxation. It isn't a substitute for medical or psychological care, so please keep in touch with your GP about any health concerns.",
    duration: null, // TODO(client)
    priceFrom: null, // TODO(client)
    faqs: [
      {
        q: "What is Reiki?",
        a: "A gentle, relaxation-focused practice. You lie fully clothed while hands are placed lightly on or just above the body, with no pressure or massage involved. It's often chosen as a calm, non-invasive alternative to massage.",
      },
      {
        q: "Do you need to believe in Reiki for it to work?",
        a: "No belief or prior understanding is needed. At its simplest, Reiki gives you a calm, uninterrupted space to rest, and many people who aren't sure about it still say they felt more settled afterwards. It's best approached as a relaxing experience.",
      },
      {
        q: "Is Reiki the same as massage?",
        a: "No. Massage works physically through the muscles with pressure and movement. Reiki is much lighter, with little or no physical contact. People often choose Reiki when they feel mentally overwhelmed rather than physically tense, or when they'd like a still, quiet experience.",
      },
      {
        q: "What does Reiki feel like?",
        a: "Most people describe it as deeply calming, though it varies. Many notice a quieter mind during the session and feel lighter or more settled afterwards. There's no right or wrong way to experience it.",
      },
      {
        q: "Can Reiki help with stress and anxiety?",
        a: "Many people use Reiki as a way to unwind when they feel stressed. It offers a space where nothing is required of you, which can make switching off easier. It isn't a replacement for other support, so if anxiety is affecting your life please speak to your GP as well.",
      },
    ],
    relatedServices: ["sound-baths", "reflexology", "indian-head-massage"],
  },

  // ---------------------------------------------------------------- 9. Sound bath (own page type at /sound-baths)
  {
    slug: "sound-baths",
    href: "/sound-baths",
    name: "Sound Bath",
    navName: "Sound Baths",
    keyword: "sound bath",
    oldUrl: "/sound-bath-glasgow/",
    h1: "Sound Baths in Glasgow",
    eyebrow: "Group sessions in the East End",
    metaTitle: "Sound Baths Glasgow | The Reset Room Glasgow",
    metaDescription:
      "Sound baths in Glasgow: lie back and let singing bowls, gongs and chimes help you slow down. No experience needed. See upcoming dates and get in touch.",
    shortDesc: "Lie back, get comfortable and let singing bowls, gongs and chimes help you slow down.",
    image: "sound-bath-room-glasgow.jpeg",
    faqs: [
      {
        q: "What is a sound bath?",
        a: "A guided relaxation session where singing bowls, gongs and chimes are played slowly in layers while you lie down and listen. There's nothing you need to do or follow — you simply get comfortable and let the sound fill the room.",
      },
      {
        q: "Do you need experience for a sound bath?",
        a: "No. There's no technique, breathing pattern or prior experience needed, and you can't get it wrong. That makes it a very accessible option if you're new to relaxation practices or find meditation difficult.",
      },
      {
        q: "Is a sound bath the same as meditation?",
        a: "They're similar, but different. Meditation usually asks you to focus your attention, which can be hard when your mind is busy. In a sound bath the sound gives your mind something gentle to rest on, so many people find it easier to relax without trying.",
      },
      {
        q: "Can sound baths help with stress?",
        a: "Many people come to sound baths as a way to slow down and take a break from constant stimulation. It isn't a replacement for other support, but it can be a helpful way to create space to rest.",
      },
      {
        q: "Where do sound baths take place in Glasgow?",
        a: "Sessions are held at The Reset Room in Bridgeton, in Glasgow's East End, and are scheduled at different times depending on room availability. New dates are shared on Instagram and Facebook as well as on this page.",
      },
    ],
    relatedServices: ["reiki", "reflexology", "swedish-massage"],
  },
];

export const treatmentPages = services.filter((s) => s.slug !== "sound-baths");
export const getService = (slug) => services.find((s) => s.slug === slug);
export const serviceHref = (s) => s.href || `/treatments/${s.slug}`;
