// Six launch areas. No area × treatment matrix (see README "Scale guard").
// Route notes deliberately avoid journey times and specific bus numbers/stops — TODO(client): verify and
// add real routes Jodi's clients use before adding more detail.

export const areas = [
  {
    slug: "bridgeton",
    name: "Bridgeton",
    postcodes: ["G40"],
    isHome: true,
    h1: "Massage Therapy in Bridgeton, Glasgow",
    metaTitle: "Massage Therapy Bridgeton, Glasgow | The Reset Room",
    metaDescription:
      "Massage and holistic therapy in Bridgeton, G40 — a private treatment room in Park Lane House on Broad Street, Glasgow East End. Book your treatment online.",
    blurb:
      "The Reset Room is in Bridgeton itself, inside Park Lane House on Broad Street — so if you live or work in G40, your treatment is right on your doorstep.",
    body: [
      "Bridgeton sits on the edge of Glasgow Green, a short distance east of the city centre. It's one of the East End's oldest neighbourhoods and one that has changed a lot in recent years, with new homes, studios and small businesses moving into its older buildings. The Reset Room is one of them: a single, private treatment room run by Jodi, with no reception desk, no waiting area full of strangers and no rush between clients.",
      "Because the room is here in G40, Bridgeton clients often fit a treatment around the day — before work, on a lunch break or on the way home. The building is a professional office block rather than a spa, which many people find makes it feel calm and discreet from the moment they walk in.",
    ],
    arriving: {
      heading: "Finding the *room*",
      body: [
        "The Reset Room is in Park Lane House, 47 Broad Street, Bridgeton, G40 2QW. Free parking is available nearby, and the area has good transport links into the city centre and across the East End.",
        "Your booking confirmation includes everything you need to know for your visit. If you have any trouble finding the room on the day, call or message and Jodi will help.",
      ],
      // TODO(client): Facebook post mentions third floor + lift, side entrance after 5.30pm weekdays and Sundays,
      // step-free access via side door, parking across from the building. Add once confirmed.
    },
    faqs: [
      {
        q: "Where exactly is The Reset Room in Bridgeton?",
        a: "Inside Park Lane House at 47 Broad Street, Glasgow G40 2QW. Use the Get directions link on this page to open the exact location in Google Maps.",
      },
      {
        q: "Is there parking near the treatment room?",
        a: "Yes — free parking is available nearby. If you're unsure where to go on the day, just get in touch.",
      },
      {
        q: "Can I book a treatment on my lunch break?",
        a: "Appointments are by booking only, with flexible availability through the week. Check live times online to find a slot that fits around your day.",
      },
    ],
    nearby: ["dennistoun", "glasgow-city-centre", "parkhead"],
  },
  {
    slug: "dennistoun",
    name: "Dennistoun",
    postcodes: ["G31"],
    h1: "Massage Therapy near Dennistoun, Glasgow",
    metaTitle: "Massage Therapy near Dennistoun, Glasgow | Reset Room",
    metaDescription:
      "Looking for massage near Dennistoun? The Reset Room is a private treatment room in neighbouring Bridgeton, Glasgow East End. See times and book online.",
    blurb:
      "Dennistoun's tenement streets and Duke Street cafés sit just north of Bridgeton, making The Reset Room one of the closest private treatment rooms for G31.",
    body: [
      "Dennistoun has become one of the East End's most sought-after neighbourhoods, with Duke Street's independent shops and cafés and Alexandra Park close by. Long hours at a laptop, a busy week and not much time to stop are exactly the kind of things a treatment room is for.",
      "The Reset Room isn't in Dennistoun itself; it's a short trip south in neighbouring Bridgeton. That means you get a quiet, private room away from the high street, without a long journey across the city. If your neck and shoulders take the strain of a desk, deep tissue or Indian head massage are good places to start, while Swedish massage and reflexology suit anyone who just needs to switch off.",
    ],
    arriving: {
      heading: "Getting here from *Dennistoun*",
      body: [
        "Bridgeton lies directly south of Dennistoun, so the room is a straightforward trip whether you drive, cycle or use public transport. Free parking is available near Park Lane House on Broad Street.",
        "Use the Get directions link below to plan a route from your door — your booking confirmation also includes details for your visit.",
      ],
    },
    faqs: [
      {
        q: "Is The Reset Room in Dennistoun?",
        a: "No — it's in neighbouring Bridgeton (G40), just south of Dennistoun, so it's a short trip for a private, unhurried treatment.",
      },
      {
        q: "Which treatment is best if I work from home in Dennistoun?",
        a: "If your neck and shoulders take the strain, Indian head massage or deep tissue massage are good starting points. If you mainly want to switch off, try Swedish massage. You can always adapt on the day.",
      },
    ],
    nearby: ["bridgeton", "parkhead", "glasgow-city-centre"],
  },
  {
    slug: "glasgow-city-centre",
    name: "Glasgow City Centre & Merchant City",
    shortName: "City Centre",
    postcodes: ["G1"],
    h1: "Massage Therapy near Glasgow City Centre & Merchant City",
    metaTitle: "Massage near Glasgow City Centre | The Reset Room",
    metaDescription:
      "Massage near Glasgow city centre and Merchant City, in a calm private room in Bridgeton — away from busy city-centre spas. See availability and book online.",
    blurb:
      "Just east of Glasgow Cross and the Merchant City, Bridgeton gives city-centre workers and residents a quieter alternative to busy high-street spas.",
    body: [
      "Glasgow city centre has no shortage of salons and hotel spas, but they're rarely quiet. Treatment rooms can feel rushed, receptions busy, and the walk back out onto Argyle Street or the Trongate undoes the calm quickly. The Reset Room offers something different: one therapist, one private room and time to settle before and after your treatment.",
      "It's based a short way east of the Merchant City in Bridgeton, on the far side of Glasgow Green. That makes it easy to reach if you live in a city-centre flat or work in an office nearby, while feeling a world away from the noise. An evening treatment can be a good way to leave the working day behind, and deep tissue massage is designed for the kind of tension that builds up over long days at a desk.",
    ],
    arriving: {
      heading: "Getting here from the *city centre*",
      body: [
        "Bridgeton is east of the Merchant City, beyond Glasgow Green, and has good transport links into town. If you're driving, free parking is available near Park Lane House — often easier than parking in the centre.",
        "Use Get directions below to open the room's exact location in Google Maps and plan your route.",
      ],
    },
    faqs: [
      {
        q: "Do you offer massage near Glasgow city centre?",
        a: "Yes — The Reset Room is in Bridgeton, in Glasgow's East End, within easy reach of the city centre and Merchant City, and much quieter than a busy city-centre spa.",
      },
      {
        q: "Can I book an appointment after work?",
        a: "Appointments are by booking only, with flexible availability through the week. Live times are shown when you book online.",
      },
    ],
    nearby: ["bridgeton", "dennistoun", "glasgow-southside"],
  },
  {
    slug: "parkhead",
    name: "Parkhead",
    postcodes: ["G31"],
    h1: "Massage Therapy near Parkhead, Glasgow",
    metaTitle: "Massage Therapy near Parkhead, Glasgow | Reset Room",
    metaDescription:
      "Massage and holistic therapy near Parkhead in a private Bridgeton treatment room, just along the road in Glasgow's East End. See times and book online.",
    blurb:
      "Parkhead and Bridgeton are East End neighbours, so The Reset Room is a short hop west for anyone around Parkhead Cross.",
    body: [
      "Parkhead is best known for Parkhead Cross and the stadium, but for the people who live there it's simply home — busy, well connected and not over-supplied with calm places to take time out. The Reset Room gives Parkhead clients a private, local option without heading into the city centre.",
      "The room is a short way west in Bridgeton. Whether you want a firm deep tissue massage after physical work or training, pregnancy massage close to home, or a quiet reflexology or Reiki session when life feels like a lot, the options are the same as anywhere in the city — just closer. Every treatment starts with a short conversation, so you don't need to know exactly what you want before you book.",
    ],
    arriving: {
      heading: "Getting here from *Parkhead*",
      body: [
        "Bridgeton lies west of Parkhead in the East End, so the room is a short trip by car, bike or public transport. Free parking is available near Park Lane House on Broad Street.",
        "Tap Get directions below to plan a route from Parkhead in Google Maps.",
      ],
    },
    faqs: [
      {
        q: "How far is The Reset Room from Parkhead?",
        a: "It's in neighbouring Bridgeton, a short trip west within the East End. Use the Get directions link to see the route from your address.",
      },
      {
        q: "I do physical work — which massage should I book?",
        a: "Deep tissue massage is the usual choice for stubborn muscular tension, while hot stone massage suits people who want warmth rather than firm pressure. Jodi will adapt either on the day.",
      },
    ],
    nearby: ["bridgeton", "dennistoun", "rutherglen"],
  },
  {
    slug: "rutherglen",
    name: "Rutherglen",
    postcodes: ["G73"],
    h1: "Massage Therapy near Rutherglen",
    metaTitle: "Massage Therapy near Rutherglen | The Reset Room",
    metaDescription:
      "Massage near Rutherglen in a calm private treatment room just across the Clyde in Bridgeton, Glasgow East End. Tailored treatments — book online today.",
    blurb:
      "Just across the River Clyde from Glasgow's East End, Rutherglen is one of the closest towns to The Reset Room's Bridgeton treatment room.",
    body: [
      "Rutherglen has its own Main Street and a strong sense of being a town in its own right, but it sits right on Glasgow's doorstep, just south of the Clyde from Bridgeton and Dalmarnock. For G73 clients, that means a private treatment room is close by without heading into the city centre or out to a hotel spa.",
      "What you'll find is an unhurried, personal treatment in a quiet room with one therapist. Swedish and hot stone massage are good choices if you want to properly unwind, lymphatic drainage suits anyone who feels puffy or heavy, and pregnancy and postnatal massage are adapted carefully to every stage.",
    ],
    arriving: {
      heading: "Getting here from *Rutherglen*",
      body: [
        "Bridgeton is north of Rutherglen across the River Clyde. Free parking is available near Park Lane House on Broad Street, and there are good transport links across the East End.",
        "Use Get directions below to plan the best route from your address.",
      ],
    },
    faqs: [
      {
        q: "Is The Reset Room close to Rutherglen?",
        a: "Yes — it's in Bridgeton, just north of Rutherglen across the Clyde. Use Get directions to see your route.",
      },
      {
        q: "Do you offer pregnancy massage for Rutherglen clients?",
        a: "Yes. Pregnancy and postnatal massage are available at the Bridgeton room, adapted to your stage and always comfortable. Check with your GP or midwife if you have any concerns.",
      },
    ],
    nearby: ["bridgeton", "parkhead", "glasgow-southside"],
  },
  {
    slug: "glasgow-southside",
    name: "Glasgow Southside",
    shortName: "Southside",
    postcodes: ["G41", "G42"],
    h1: "Massage Therapy near Glasgow Southside",
    metaTitle: "Massage near Glasgow Southside | The Reset Room",
    metaDescription:
      "Massage and holistic therapy for Glasgow Southside clients, in a private treatment room across the river in Bridgeton, East End. See times and book online.",
    blurb:
      "From Shawlands and Strathbungo to Govanhill and Queen's Park, the Southside is just across the river from a quieter, more personal treatment room in Bridgeton.",
    body: [
      "The Southside is full of busy, sociable neighbourhoods — Shawlands, Strathbungo, Govanhill, Battlefield and the streets around Queen's Park. What it can be short of is somewhere genuinely quiet to take an hour for yourself. The Reset Room, just across the Clyde in Bridgeton, is a private alternative for G41 and G42 clients who want an unhurried, personal treatment.",
      "Reflexology, Reiki and Swedish massage are good choices when you need to switch off, and deep tissue massage suits tension that has been building for weeks. Sound baths at the room are another way to slow down — new dates are shared on Instagram and Facebook.",
    ],
    arriving: {
      heading: "Getting here from the *Southside*",
      body: [
        "Bridgeton is north-east of the Southside, on the other side of the River Clyde. Free parking is available near Park Lane House on Broad Street.",
        "Tap Get directions below to plan your route in Google Maps.",
      ],
    },
    faqs: [
      {
        q: "Is it worth travelling from the Southside?",
        a: "Bridgeton is just across the river, and every appointment is a private, one-to-one treatment that isn't rushed. Use Get directions to see your route.",
      },
      {
        q: "Do you have sound baths as well as massage?",
        a: "Yes. Group sound baths are held at the Bridgeton room on dates shared on Instagram and Facebook, and singing bowls can also be added to a one-to-one Reiki session.",
      },
    ],
    nearby: ["glasgow-city-centre", "rutherglen", "bridgeton"],
  },
];

export const bodyOnlyAreas = ["West End", "Calton", "Shettleston", "Glasgow Green"];
export const getArea = (slug) => areas.find((a) => a.slug === slug);
