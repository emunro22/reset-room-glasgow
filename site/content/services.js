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
    metaTitle: "Deep Tissue Massage Glasgow - The Reset Room Glasgow",
    metaDescription:
      "Deep tissue massage in Glasgow for muscle tension, pain relief and recovery. Tailored treatments in a calm, private East End setting.",
    shortDesc: "Focused, tailored pressure for stubborn tension and back, neck and shoulder tightness.",
    intro: [
      "Focused massage for tight muscles, stubborn back discomfort and neck or shoulder tension. I tailor your session to where you feel restricted and to the level of pressure your body can comfortably respond to.",
    ],
    image: "deep-tissue-massage-treatment-glasgow.jpg",
    suitsYouIf: [
      "Desk work or training leaves you stiff",
      "Back, neck or shoulder tension keeps returning",
      "You feel tight or restricted when you move",
      "You prefer firmer, focused pressure",
    ],
    helpsWith: {
      heading: "Deep tissue massage for back, neck and shoulder *tension*",
      intro:
        "Hours at a desk, repetitive work, driving, training or stress can leave muscles feeling dense, sore or difficult to move. I use slower movements and focused pressure to spend time on the areas that need attention rather than rushing across the whole body. Clients commonly book for:",
      items: [
        "Muscular lower-back tightness and stiffness",
        "Knots around the shoulders and upper back",
        "Neck tension linked with posture or screen work",
        "Tight hips and glutes",
        "General muscle fatigue after physical activity",
        "Recurring areas of restricted movement",
      ],
      outro: null,
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
        heading: "What deep tissue massage *feels* like",
        body: [
          "Deep tissue massage does not mean applying the hardest possible pressure. In more than 10 years of practice, I have found that slower, precise work is often more useful than simply pressing harder. I check how the treatment feels and adjust the pressure as your muscles respond.",
          "Some areas may feel tender while long-standing tension is being worked on, but you should still feel in control. You can ask for the pressure to change at any time.",
        ],
      },
    ],
    whatToExpect: {
      intro:
        "I begin with a short consultation about where you feel tension, how it affects you and any health information relevant to massage. I then focus on the areas that need attention and adapt the techniques throughout.",
      during: [
        "Pressure is adjusted to your comfort — tell me any time it is too much or too little",
        "Focus areas are worked slowly and carefully",
        "Techniques change as your muscles respond",
      ],
      after: [
        "You may feel looser, more relaxed or more aware of how you move",
        "Temporary tenderness can happen after focused work",
        "Normal movement and water may help you feel comfortable",
      ],
      note: "Gentle movement and rest are usually more useful than forcing a workout immediately afterwards.",
    },
    benefits: [
      { title: "Eases stubborn tension", desc: "Slow, focused work on the areas that feel tightest." },
      { title: "Supports recovery", desc: "A popular choice alongside training or physical work." },
      { title: "Movement can feel easier", desc: "Many clients notice they feel less restricted afterwards." },
      { title: "Calm as well as focused", desc: "Firm doesn't mean rushed — there's still space to unwind." },
    ],
    process: steps(
      "I ask where you feel tight, what makes it worse and how firm you like the pressure.",
      "I change the pressure and focus areas as your muscles respond. You can ask for lighter or firmer at any point.",
      "Take a few minutes before heading back out. Drink some water and keep moving gently through the day."
    ),
    comparison: {
      heading: "Deep tissue or Swedish *massage*",
      points: [
        { label: "Deep tissue massage", text: "Focused work on persistent muscular tightness." },
        { label: "Swedish massage", text: "Relaxation and a flowing full-body treatment rather than concentrated pressure." },
      ],
      text: "If you like warmth but not very firm pressure, hot stone massage may suit you better.",
      link: { href: "/treatments/hot-stone-massage", label: "Compare hot stone massage" },
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
    caveat:
      "Massage may help ease muscular tension and improve your sense of comfort, but it cannot diagnose the cause of pain. New, severe or unexplained symptoms should be assessed by an appropriate healthcare professional.",
    duration: null, // TODO(client)
    priceFrom: null, // TODO(client)
    faqs: [
      {
        q: "Does deep tissue massage hurt?",
        a: "It can feel intense when a sensitive area is being worked on, but it should never feel unbearable. Pressure is adjusted to your comfort and can be changed at any time.",
      },
      {
        q: "Is deep tissue massage good for back pain?",
        a: "It may help when discomfort is associated with muscular tightness or stiffness. Massage does not identify or treat every cause of back pain, so seek medical advice for severe, persistent, unexplained or worsening symptoms.",
      },
      {
        q: "Can deep tissue massage help sciatica?",
        a: "Massage may ease tension in muscles around the lower back, hips and glutes, which some people find helpful alongside appropriate care. It does not treat compression or irritation of the sciatic nerve itself. Seek clinical advice if you have radiating pain, numbness, weakness or changes in bladder or bowel control.",
      },
      {
        q: "How often should I book deep tissue massage?",
        a: "That depends on how quickly tension returns, your activity and your aims. Some clients begin with closer appointments and increase the gap as things settle; others book only when needed. I can discuss a sensible interval without asking you to commit to a package.",
      },
      {
        q: "What should I do after deep tissue massage?",
        a: "Normal movement, water and a quieter remainder of the day may help you feel comfortable. Do not assume that soreness means a treatment has worked. Contact me if anything feels unusual or does not settle.",
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
    metaTitle: "Swedish Massage Glasgow - The Reset Room Glasgow",
    metaDescription:
      "Swedish massage in Glasgow designed to help you relax, reduce stress and ease tension in a calm, private treatment space.",
    shortDesc: "A calming, flowing full-body massage to ease tension and help you properly switch off.",
    intro: [
      "A flowing full-body massage for everyday muscular tension, stress and proper time to switch off. I use light-to-moderate pressure and adapt it to what feels comfortable for you.",
    ],
    image: "massage-treatment-room-glasgow-east-end.jpeg",
    suitsYouIf: [
      "You feel constantly \u201con\u201d and can't switch off",
      "You carry general tension rather than one sore spot",
      "It's your first massage, or you prefer lighter pressure",
      "You feel tired and run down",
    ],
    helpsWith: {
      heading: "Swedish massage for stress and muscle *tension*",
      intro:
        "Busy weeks, desk work and poor rest can leave the whole body feeling tense without one obvious problem area. I use long strokes, kneading and smooth rhythmic movements to help muscles soften while you settle into the treatment. It is a good choice if you:",
      items: [
        "Feel generally tense or stressed",
        "Carry everyday tightness in your back, neck or shoulders",
        "Want a full-body relaxation massage",
        "Prefer lighter pressure than deep tissue massage",
        "Are new to massage",
        "Find it difficult to slow down or rest",
      ],
      outro: null,
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
      intro:
        "I start with a short consultation about pressure, focus areas and anything you would like avoided. The massage then moves smoothly across the agreed areas rather than concentrating only on one knot or muscle group.",
      during: [
        "I keep you covered with towels and uncover only the area being massaged",
        "Long, flowing strokes across the areas we agreed",
        "You can ask for a change in pressure, more warmth or less conversation at any point",
      ],
      after: [
        "Many clients feel physically looser and mentally calmer",
        "A settled, unhurried feeling rather than soreness",
        "Some people find it easier to wind down that evening",
      ],
      note: "The aim is not to leave you sore; it is to help the body settle.",
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
      heading: "Swedish or deep tissue *massage*",
      points: [
        { label: "Swedish massage", text: "Prioritises relaxation, flow and general tension." },
        { label: "Deep tissue massage", text: "Slower, more focused work for persistent muscular tightness." },
      ],
      text: "If you want a deeply warming treatment without very firm pressure, compare hot stone massage.",
      link: { href: "/treatments/hot-stone-massage", label: "Compare hot stone massage" },
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
        a: "Swedish massage is a classic style using flowing strokes, kneading and rhythmic movements. It usually uses light-to-moderate pressure and works well for full-body relaxation and everyday muscular tension.",
      },
      {
        q: "Is Swedish massage suitable for a first massage?",
        a: "Yes. I can begin gently and adjust the pressure as you settle. I will explain what to expect and check your preferences before the treatment starts.",
      },
      {
        q: "Can Swedish massage help back, neck and shoulder tension?",
        a: "It may ease general muscular tightness in these areas, especially when it is linked with everyday posture or stress. Deep tissue massage may be more suitable when you want concentrated work on a persistent area.",
      },
      {
        q: "Will Swedish massage help me sleep?",
        a: "Many clients feel relaxed after massage and find it easier to wind down, but responses vary. Massage should support rest rather than be presented as a treatment for a sleep disorder.",
      },
      {
        q: "How often should I have Swedish massage?",
        a: "Book according to your needs and budget. Some people enjoy a regular appointment every few weeks, while others book when stress or tension begins to build.",
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
    metaTitle: "Pregnancy Massage Glasgow - The Reset Room Glasgow",
    metaDescription:
      "Pregnancy massage in Glasgow designed to ease tension, reduce discomfort and help you relax in a calm, supportive setting.",
    shortDesc: "Safe, gentle, carefully adapted massage through pregnancy and postnatal recovery.",
    intro: [
      "Comfortable, carefully adapted massage for the physical demands of pregnancy. I use supportive positioning and personalised pressure to help you rest while easing muscular tension around the back, hips and shoulders.",
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
      heading: "Massage for pregnancy back, hip and shoulder *tension*",
      intro:
        "As posture and weight distribution change, familiar movements can begin to feel different. I adapt pregnancy massage around the stage you are at, how you feel on the day and the areas where you need support. Clients often book for:",
      items: [
        "Muscular lower-back discomfort",
        "Tight hips and glutes",
        "Neck and shoulder tension",
        "Tired or heavy-feeling legs",
        "General aches and fatigue",
        "Stress or difficulty switching off",
        "Time to feel comfortable and cared for",
      ],
      outro: null,
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
          "There's no fixed timeline for when to start. It's about when you feel ready, and if you're unsure, I can talk it through with you first.",
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
        "You will not be expected to lie in one position for the full session. I can help you move, add support or change position whenever needed.",
      during: [
        "Comfortable positioning with cushions and support, usually side-lying",
        "Pressure, treatment areas and temperature adjusted throughout",
        "You remain appropriately covered at all times",
      ],
      after: [
        "Muscular tension around the back, hips and shoulders may feel easier",
        "Many clients simply feel rested and looked after",
        "You can take your time before heading back out",
      ],
      note: "Your appointment begins with a consultation about your pregnancy, current symptoms and any advice from your midwife or doctor. Tell me about complications, changes in your health or anything that does not feel normal before the massage begins.",
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
    comparison: {
      heading: "Postnatal massage in *Glasgow*",
      points: [
        { label: "During pregnancy", text: "Supportive positioning and pressure adapted to your stage." },
        { label: "After birth", text: "Time to rest when feeding positions, lifting and broken sleep leave the back and shoulders tense." },
      ],
      text: "Contact me if you are unsure when to return after birth or after a Caesarean section, as timing and positioning must suit your recovery and clinical advice.",
      link: { href: "/contact", label: "Ask about postnatal timing" },
    },
    rightForYou: {
      intro: "Pregnancy massage may suit you if you:",
      items: [
        "Feel uncomfortable, tired or heavy as your body changes",
        "Want gentle, carefully adapted massage",
        "Are recovering after birth and need time for yourself",
        "Find it hard to set aside time to rest",
      ],
    },
    caveat: "Massage may help with muscular tension and relaxation, but it does not replace maternity or medical care.",
    duration: null, // TODO(client)
    priceFrom: null, // TODO(client)
    faqs: [
      {
        q: "When can I start pregnancy massage?",
        a: "Suitability depends on your health and pregnancy rather than one rule for everyone. Contact me if you are early in pregnancy or unsure, and seek advice from your midwife or doctor if you have complications or concerns.",
      },
      {
        q: "Is pregnancy massage safe?",
        a: "Pregnancy massage is adapted through positioning, pressure and treatment choice. You should disclose relevant health information and follow advice from your maternity team. Massage should stop if anything feels uncomfortable or concerning.",
      },
      {
        q: "Can pregnancy massage help back pain?",
        a: "It may ease muscular tightness around the lower back, hips and shoulders. It does not diagnose the cause of pain. Contact your maternity team about severe, new, persistent or worrying symptoms.",
      },
      {
        q: "How will I lie during the massage?",
        a: "Supportive cushions are used so you can rest in a comfortable position, commonly on your side. The position can change during the appointment whenever required.",
      },
      {
        q: "What should I tell you before booking?",
        a: "Please tell me about any complications, changes in your health or advice from your midwife or doctor. If you are unsure whether massage is suitable, contact me before choosing an appointment.",
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
    metaTitle: "Lymphatic Drainage Massage Glasgow - The Reset Room Glasgow",
    metaDescription:
      "Lymphatic drainage massage in Glasgow designed to reduce fluid retention, ease swelling and support relaxation in a calm setting.",
    shortDesc: "A gentle, rhythmic treatment to support natural lymph flow and help you feel lighter.",
    intro: [
      "A very gentle, rhythmic treatment for people who feel puffy, heavy or uncomfortable with mild fluid retention. I use light, controlled movements rather than conventional massage pressure.",
    ],
    image: "lymphatic-drainage-massage-glasgow.jpg",
    suitsYouIf: [
      "Your legs, ankles or face feel puffy",
      "You feel heavy, tight or sluggish",
      "You'd rather avoid deep pressure",
      "You want something calm and restorative",
    ],
    helpsWith: {
      heading: "Gentle support for puffiness, swelling and *heaviness*",
      intro:
        "Fluid retention can leave the body feeling tight, heavy or sluggish. Lymphatic drainage massage is often chosen for mild puffiness around the legs, ankles or face, or simply when deeper massage does not appeal. People commonly book when they notice:",
      items: [
        "Mild puffiness or water retention",
        "Heavy or tired-feeling legs",
        "A bloated or sluggish feeling",
        "Temporary puffiness after travel",
        "Sensitivity to deeper massage pressure",
        "A need for a slow, calming treatment",
      ],
      outro: null,
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
      intro:
        "I will ask what you have noticed, how long it has been present and whether you have any health conditions or recent treatment that could affect suitability. The treatment itself remains slow, light and comfortable.",
      during: [
        "Light, controlled and repetitive movements",
        "Much lighter pressure than Swedish or deep tissue massage",
        "A steady pace that many clients find calming",
      ],
      after: [
        "You may notice a sense of lightness or reduced puffiness",
        "Some people simply feel deeply relaxed",
        "Results vary from person to person",
      ],
      note: "Gentle movement and normal hydration can support general comfort; there is no need to force large amounts of water.",
    },
    benefits: [
      { title: "Feel lighter", desc: "Designed to ease that heavy, puffy feeling." },
      { title: "Supports natural lymph flow", desc: "Light, rhythmic strokes that work with the body." },
      { title: "Very gentle", desc: "One of the lightest-touch treatments available." },
      { title: "Deeply calming", desc: "A slow pace that makes switching off easy." },
    ],
    process: steps(
      "I ask where you feel puffy or heavy and check for anything that means the treatment should be adapted.",
      "Light, slow, rhythmic strokes. The pressure never needs to be firm to do its job.",
      "Drink some water, keep moving gently and give your body a day or two to respond."
    ),
    comparison: {
      heading: "Is this treatment right *for you?*",
      points: [
        { label: "Lymphatic drainage", text: "Very light, rhythmic movements for mild puffiness or heaviness." },
        { label: "Deep tissue massage", text: "Firm, focused pressure for muscular knots." },
        { label: "Swedish massage", text: "A flowing full-body treatment at light-to-moderate pressure." },
      ],
      text: "Contact me before booking if you are pregnant, receiving cancer treatment, recovering from surgery or living with a diagnosed heart, kidney, circulatory or lymphatic condition. I may ask you to obtain advice from your healthcare team before confirming that the appointment is suitable.",
      link: { href: "/contact", label: "Ask about suitability before booking" },
    },
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
      "New, painful, one-sided or unexplained swelling requires medical assessment rather than a massage appointment.",
    duration: null, // TODO(client)
    priceFrom: null, // TODO(client)
    faqs: [
      {
        q: "Is lymphatic drainage massage painful?",
        a: "No. It uses very light, rhythmic movements and should feel gentle. It is quite different from deep tissue massage.",
      },
      {
        q: "Can lymphatic drainage massage help water retention?",
        a: "Some clients notice less puffiness or heaviness after treatment, particularly with mild temporary fluid retention. Results vary, and ongoing or unexplained swelling should be discussed with a healthcare professional.",
      },
      {
        q: "Does lymphatic drainage massage cause weight loss?",
        a: "No. A temporary change in retained fluid is not body-fat loss. I offer this as a gentle treatment for comfort and relaxation, not for weight loss.",
      },
      {
        q: "Can I book after surgery?",
        a: "Contact me before booking. Post-operative massage requires appropriate training, correct timing and clearance from the relevant healthcare professional. Do not assume a general lymphatic drainage appointment is suitable for surgical aftercare.",
      },
      {
        q: "What should I do after the treatment?",
        a: "Continue normal hydration, move gently and pay attention to how you feel. Seek medical advice if swelling becomes painful, worsens or is accompanied by other concerning symptoms.",
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
    metaTitle: "Hot Stone Massage Glasgow - The Reset Room Glasgow",
    metaDescription:
      "Hot stone massage in Glasgow designed to ease tension, encourage relaxation and help you fully switch off and unwind.",
    shortDesc: "Warm stones and flowing massage for deep relaxation without intense pressure.",
    intro: [
      "Smooth heated stones and flowing massage movements create a deeply warming treatment for muscular tension, stress and relaxation. I often recommend it when you want effective massage without relying on very firm pressure.",
    ],
    image: "massage-treatment-room-glasgow.jpg", // no real hot stone photo — TODO(client): photo of the stones
    suitsYouIf: [
      "You love warmth more than firm pressure",
      "You find it hard to fully switch off",
      "You carry stress as tension in your body",
      "You want a slower, more immersive treatment",
    ],
    helpsWith: {
      heading: "Warmth for tired and tense *muscles*",
      intro:
        "Heat can make it easier for the body to settle into massage. I place warm basalt stones on selected areas and also use them in my hands, combining steady warmth with controlled massage movements. Hot stone massage may suit you if you:",
      items: [
        "Feel generally tight or physically tired",
        "Carry stress in your back or shoulders",
        "Prefer warmth to intense pressure",
        "Find it difficult to switch off",
        "Enjoy a slower, immersive treatment",
        "Want full-body relaxation",
      ],
      outro: null,
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
        "I begin with a consultation about temperature, pressure and focus areas. I introduce the stones gradually and check their temperature throughout. They should feel comfortably warm, never painfully hot.",
      during: [
        "Some stones may rest on the body while others are used to massage",
        "You remain covered with towels throughout",
        "You can ask for the heat or pressure to be adjusted at any time",
      ],
      after: [
        "Muscles often feel softer and more comfortable",
        "Many clients feel deeply relaxed and unhurried",
        "The warmth can leave you feeling settled for the rest of the day",
      ],
      note: "Tell me straight away if the heat or pressure ever feels uncomfortable.",
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
      heading: "Hot stone or Swedish *massage*",
      points: [
        { label: "Hot stone massage", text: "Adds sustained warmth and often feels more immersive." },
        { label: "Swedish massage", text: "Flowing movements without heated stones." },
      ],
      text: "For persistent, localised muscular tightness and firmer focused work, explore deep tissue massage.",
      link: { href: "/treatments/deep-tissue-massage", label: "Compare deep tissue massage" },
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
      "Heat isn't suitable for everyone. I will check your health during the consultation, and if hot stones aren't right for you on the day, the massage can be adapted.",
    duration: null, // TODO(client)
    priceFrom: null, // TODO(client)
    faqs: [
      {
        q: "What is hot stone massage?",
        a: "It combines massage with smooth heated basalt stones. The stones can be placed on the body and used as massage tools to provide warmth alongside flowing movements.",
      },
      {
        q: "Is hot stone massage painful?",
        a: "No. The stones should feel comfortably warm and the massage pressure is adapted to you. Speak up immediately if the heat or pressure feels uncomfortable.",
      },
      {
        q: "Can hot stone massage help muscle tension?",
        a: "The combination of warmth and massage may help tense muscles feel softer and more comfortable. It is a relaxation treatment and does not diagnose or cure an underlying condition.",
      },
      {
        q: "Who should avoid hot stone massage?",
        a: "Contact me before booking if you are pregnant, have reduced heat sensation, circulatory concerns, skin problems, a recent injury or another condition that may affect your response to heat. Medical advice may be required.",
      },
      {
        q: "What should I wear?",
        a: "Wear whatever is comfortable to arrive in. I will explain how to prepare in private and keep you appropriately covered with towels throughout the massage.",
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
    metaTitle: "Reflexology Glasgow - The Reset Room Glasgow",
    metaDescription:
      "Reflexology in Glasgow designed to support relaxation, calm the mind and help you feel more balanced and restored.",
    shortDesc: "A gentle, foot-based therapy many clients find deeply calming.",
    intro: [
      "A slow, structured treatment using gentle pressure on the feet. I offer reflexology when you want quiet time to rest but do not want a full-body massage.",
    ],
    image: "massage-room-glasgow-east-end.jpg",
    suitsYouIf: [
      "You feel stressed or mentally busy",
      "You'd like a lighter-touch treatment",
      "You'd rather keep your clothes on",
      "You want time to properly switch off",
    ],
    helpsWith: {
      heading: "Reflexology for stress, sleep and *relaxation*",
      intro:
        "You do not need to have a particular problem to book reflexology. Many clients choose it because the repetitive pressure and unhurried pace help them settle. Reflexology may appeal if you:",
      items: [
        "Feel stressed or mentally overloaded",
        "Struggle to make time for rest",
        "Want a gentle treatment",
        "Prefer to remain clothed",
        "Enjoy foot-based therapies",
        "Want an alternative to massage",
      ],
      outro:
        "Some clients feel deeply relaxed or sleepy during the session. Others simply appreciate an uninterrupted hour in a calm room. Experiences vary.",
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
      intro:
        "After a short consultation, I will help you settle into a supported position and work methodically across the feet. Pressure should feel comfortable, although some points may feel more sensitive than others.",
      during: [
        "You can usually remain clothed; I will explain how to prepare",
        "Controlled pressure applied in a set sequence across the feet",
        "You can talk, rest quietly or drift off",
      ],
      after: [
        "Many clients feel calm and unhurried",
        "Some feel sleepy and find it easier to wind down",
        "Others simply enjoy having had quiet time",
      ],
      note: "There is nothing you need to perform or get right.",
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
      heading: "Reflexology or *massage*",
      points: [
        { label: "Reflexology", text: "Focuses on the feet and provides a gentler, more still experience." },
        { label: "Massage", text: "Works directly with muscles through movement and pressure." },
      ],
      text: "Compare the full range if you would like to see how the options differ.",
      link: { href: "/treatments", label: "Massage and holistic treatments in Glasgow" },
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
      "I offer reflexology as a complementary treatment for relaxation. Pressure on the feet cannot diagnose illness or treat a specific organ or medical condition.",
    duration: null, // TODO(client)
    priceFrom: null, // TODO(client)
    faqs: [
      {
        q: "What does reflexology do?",
        a: "Reflexology applies pressure to points on the feet within a traditional mapped system. People commonly book it for relaxation and quiet time rather than for treatment of a diagnosed condition.",
      },
      {
        q: "Is reflexology painful?",
        a: "It should feel comfortable. Some points can feel more sensitive, but the pressure can be adjusted immediately.",
      },
      {
        q: "Can reflexology help stress or anxiety?",
        a: "The calm setting and repetitive touch may support relaxation when you feel stressed or overwhelmed. Reflexology is complementary and does not replace mental health or medical support.",
      },
      {
        q: "Can reflexology help sleep?",
        a: "Some clients feel sleepy during or after a session and find it easier to wind down. This is an individual response, not a guaranteed treatment for insomnia.",
      },
      {
        q: "Is reflexology the same as a foot massage?",
        a: "No. A foot massage generally works with the muscles and soft tissues of the feet. Reflexology follows a structured system of pressure points traditionally associated with other areas of the body.",
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
    metaTitle: "Indian Head Massage Glasgow - The Reset Room Glasgow",
    metaDescription:
      "Indian head massage in Glasgow designed to ease tension, calm the mind and help you fully relax and switch off.",
    shortDesc: "Focused work on the scalp, neck and shoulders to release upper-body tension.",
    intro: [
      "A focused treatment for tension held in the scalp, neck, shoulders and upper back. I recommend Indian head massage when your discomfort sits mainly above the shoulders or your mind feels as busy as your muscles feel tight.",
    ],
    image: "private-massage-room-glasgow.jpeg",
    suitsYouIf: [
      "Tension sits in your neck and shoulders",
      "You spend long hours at a desk or on screens",
      "Your head feels busy or full",
      "You want a shorter, focused treatment",
    ],
    helpsWith: {
      heading: "Relief for head, neck and shoulder *tension*",
      intro:
        "Desk work, driving, phone use and stress can all contribute to a heavy head, raised shoulders and a stiff neck. I concentrate on these areas using rhythmic movements, compression and focused pressure adapted to your comfort. People often choose it for:",
      items: [
        "Tight neck and shoulder muscles",
        "Upper-back tension",
        "Scalp tension or a heavy-headed feeling",
        "Desk and screen-related tightness",
        "Stress and mental fatigue",
        "A shorter, concentrated treatment",
      ],
      outro: null,
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
      intro:
        "Your treatment focuses on the upper back, shoulders, neck and scalp. I will ask where you feel the most tension and whether you want oil used on the scalp. If you would like to keep your hair dry, tell me before the appointment so I can explain the options.",
      during: [
        "Rhythmic movements, compression and focused pressure",
        "Pressure can be adjusted at any point",
        "I will explain how to prepare and keep you comfortable throughout",
      ],
      after: [
        "Many clients feel lighter around the shoulders",
        "The steady pace provides time to switch off",
        "Scalp and neck tension may feel easier",
      ],
      note: "Let me know before booking if keeping your hair oil-free matters to you.",
    },
    benefits: [
      { title: "Releases upper-body tension", desc: "Focused work on the neck, shoulders and scalp." },
      { title: "Quietens a busy mind", desc: "Rhythmic movements many find easy to switch off to." },
      { title: "Shorter and focused", desc: "Relief without committing to a full-body treatment." },
      { title: "Oil is your choice", desc: "Skip it if you have plans afterwards." },
    ],
    process: steps(
      "I ask where you hold tension and whether you'd like oil on your scalp.",
      "Rhythmic, targeted work through the shoulders, neck and scalp, adjusted to your comfort.",
      "Take a moment to come round, have some water and roll your shoulders on the way out."
    ),
    comparison: {
      heading: "Indian head or full body *massage*",
      points: [
        { label: "Indian head massage", text: "Choose it when the scalp, neck and shoulders are your priority." },
        { label: "Swedish massage", text: "Flowing full-body relaxation." },
        { label: "Deep tissue massage", text: "When muscular tension extends across the back or hips." },
      ],
      text: "If you are not sure which fits, book the closest match and tell me on the day.",
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
        q: "What areas does Indian head massage cover?",
        a: "It normally focuses on the upper back, shoulders, neck and scalp. I will confirm the areas included and adapt the treatment to your comfort.",
      },
      {
        q: "Can Indian head massage help tension headaches?",
        a: "It may help when a headache is associated with muscular tension around the scalp, neck and shoulders. It is not suitable for every type of headache. Seek medical advice for new, severe, unusual or persistent headaches or any neurological symptoms.",
      },
      {
        q: "Is oil used in Indian head massage?",
        a: "Oil may be used on the scalp. Let me know before booking if keeping your hair oil-free matters to you, so I can confirm what is possible for that session.",
      },
      {
        q: "Do I stay clothed?",
        a: "That depends on the format of the appointment and the areas being treated. I will explain how to prepare and maintain your privacy and comfort throughout.",
      },
      {
        q: "How long is Indian head massage?",
        a: "Available appointment lengths and prices are shown in the live online booking system. Choose the time that suits you and check the service description before confirming.",
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
    metaTitle: "Reiki Glasgow - The Reset Room Glasgow",
    metaDescription:
      "Reiki in Glasgow offering a calm, non-invasive treatment designed to support relaxation, balance and overall wellbeing.",
    shortDesc: "A still, light-touch treatment for when your mind won't switch off.",
    intro: [
      "A quiet complementary treatment when you want stillness without massage. I use light touch or hold my hands just above the body while you remain fully clothed and comfortable.",
    ],
    image: "therapy-room-glasgow-east-end.jpg",
    suitsYouIf: [
      "Your mind keeps racing, even when you rest",
      "You'd like a no-pressure or very light-touch treatment",
      "You feel mentally drained rather than physically sore",
      "You're open to a different kind of relaxation",
    ],
    helpsWith: {
      heading: "A gentle treatment for a busy *mind*",
      intro:
        "Reiki may suit you when you feel mentally overloaded, emotionally tired or simply in need of uninterrupted rest. There is no pressure to talk, meditate or achieve a particular state. People often choose Reiki because they:",
      items: [
        "Want time to slow down",
        "Prefer very light touch or no touch",
        "Feel stressed or emotionally drained",
        "Do not want muscular massage",
        "Enjoy complementary wellbeing practices",
        "Are curious but unsure what to expect",
      ],
      outro: null,
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
      intro:
        "After a short consultation, I will help you settle comfortably and confirm whether you prefer light touch or hands held above the body.",
      during: [
        "You remain fully clothed throughout",
        "I place my hands lightly on or just above different areas of the body",
        "You can ask for extra support or warmth at any time",
      ],
      after: [
        "Some people notice warmth, tingling or a sense of heaviness",
        "Others feel relaxed or drift towards sleep",
        "Some notice very little during the session",
      ],
      note: "There is no correct response and no need to believe anything specific before booking.",
    },
    benefits: [
      { title: "Complete stillness", desc: "Nothing to do and nothing asked of you." },
      { title: "Light or no touch", desc: "No massage, no pressure, fully clothed." },
      { title: "Quiet for a busy mind", desc: "Many clients say it's the calmest hour of their week." },
      { title: "Sound if you'd like", desc: "Singing bowls can be added to a 1:1 session." },
    ],
    process: steps(
      "I ask how you're feeling, whether you'd prefer light touch or none, and whether you'd like sound added.",
      "You rest, fully clothed, while hands are placed lightly on or just above the body.",
      "Come round slowly. There's no rush to get up or to talk."
    ),
    comparison: {
      heading: "Reiki with *sound*",
      points: [
        { label: "Reiki one to one", text: "A still, fully clothed session with light touch or no touch." },
        { label: "Reiki with sound", text: "Gentle singing bowls or other sound elements added for a more immersive session." },
        { label: "Sound bath", text: "A scheduled group session based mainly around gongs and singing bowls." },
      ],
      text: "If you prefer a group session based mainly around gongs and singing bowls, explore sound baths.",
      link: { href: "/sound-baths", label: "Explore sound baths in Glasgow" },
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
      "Reiki is not a medical treatment and should not replace diagnosis, medication, counselling or other professional healthcare.",
    duration: null, // TODO(client)
    priceFrom: null, // TODO(client)
    faqs: [
      {
        q: "Do I need to believe in Reiki?",
        a: "No. You can approach it as a quiet complementary wellbeing experience. There is no requirement to hold a particular belief or feel a particular sensation.",
      },
      {
        q: "Is Reiki the same as massage?",
        a: "No. Massage uses pressure and movement to work with muscles. Reiki involves little or no physical pressure and you remain fully clothed.",
      },
      {
        q: "What might I feel during Reiki?",
        a: "Experiences differ. You might notice warmth, tingling, sleepiness or a calmer mind, or you may simply enjoy lying quietly. None of these responses proves or disproves anything about the session.",
      },
      {
        q: "Can Reiki help with stress and anxiety?",
        a: "A quiet Reiki session may support relaxation and give you respite from a busy mind. It is not a treatment for an anxiety disorder and should complement rather than replace appropriate professional support.",
      },
      {
        q: "What should I wear for Reiki?",
        a: "Wear comfortable clothing. You remain clothed throughout the session and can ask for extra support or warmth.",
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
    metaTitle: "Sound Bath Glasgow - The Reset Room Glasgow",
    metaDescription:
      "Sound baths in Glasgow designed to help you relax, slow down mentally and experience deep rest through immersive sound.",
    shortDesc: "Lie back, get comfortable and let singing bowls, gongs and chimes help you slow down.",
    image: "sound-bath-room-glasgow.jpeg",
    faqs: [
      {
        q: "What is a sound bath?",
        a: "A sound bath is a guided relaxation session using live instruments such as gongs, singing bowls and chimes. Participants usually lie down and listen as the sound changes around them.",
      },
      {
        q: "Do I need meditation experience?",
        a: "No. Beginners are welcome and there is no technique to master. I will explain what happens before the sound begins.",
      },
      {
        q: "What should I bring?",
        a: "Comfortable clothing, water and an extra layer or blanket are often useful when lying still.",
      },
      {
        q: "Can sound baths help stress or sleep?",
        a: "Many people feel relaxed during and after a sound bath, and some find it easier to wind down. Results vary, and a sound bath is not a replacement for medical or mental health care.",
      },
      {
        q: "Where are your Glasgow sound baths held?",
        a: "I hold sound baths within my treatment room in Bridgeton, which provides a relaxing, tranquil and cosy environment for you to switch off and relax. I offer smaller sound baths with numbers of no more than 10, which helps to create an intimate experience that clients love.",
      },
    ],
    relatedServices: ["reiki", "reflexology", "swedish-massage"],
  },
];

export const treatmentPages = services.filter((s) => s.slug !== "sound-baths");
export const getService = (slug) => services.find((s) => s.slug === slug);
export const serviceHref = (s) => s.href || `/treatments/${s.slug}`;
