/**
 * Products Database for Pavan Sai Power Lines (PSPL)
 * 
 * Organized by the 7 primary business categories supplied by PSPL in Secunderabad, Telangana.
 * All image assets are stored locally in /images/products/ using authentic, verified
 * industrial photographs provided directly for PSPL.
 */

export const PRODUCTS = [
  // -------------------------------------------------------------
  // 1. HT/LT OVERHEAD LINE MATERIALS
  // -------------------------------------------------------------
  {
    id: "ht-pin-insulators",
    name: "HT Pin Insulators (11kV & 33kV Polymer & Porcelain)",
    category: "HT/LT Overhead Line Materials",
    categoryId: "overhead-lines",
    shortDescription: "High-grade polymer and glazed porcelain pin insulators with galvanized steel pins for 11kV and 33kV lines.",
    fullDescription: "Pavan Sai Power Lines supplies premium composite silicone polymer and glazed porcelain pin insulators complete with hot-dip galvanized mild steel pins. Designed to withstand severe electrical flashovers, high cantilever mechanical stresses, and atmospheric pollution along overhead distribution feeders.",
    image: "/images/products/pin-insulator-polymer-11kv.png",
    gallery: [
      "/images/products/pin-insulator-polymer-11kv.png",
      "/images/products/pin-insulator-polymer-33kv.png",
      "/images/products/psc-pole-installation.jpg",
      "/images/products/pin-insulator.jpg"
    ],
    features: [
      "Manufactured with high creepage distance suitable for polluted environments",
      "Supplied complete with hot-dip galvanized mild steel pins, spring washers, and nuts",
      "High mechanical cantilever strength conforming strictly to IS & REC specifications",
      "Hydrophobic silicone polymer sheds water and resists surface leakage tracking"
    ],
    specifications: {
      "Voltage Class": "11 kV / 33 kV",
      "Material Options": "Silicone Composite Polymer / Glazed Electrical Porcelain",
      "Pin Diameter": "20 mm / 24 mm Standard Shank",
      "Cantilever Strength": "5 kN / 10 kN",
      "Standard Compliance": "IS 1445 / IS 731 / IEC 60383 / REC Standards",
      "Creepage Distance": "320 mm (11kV) / 900 mm (33kV)"
    },
    applications: [
      "11kV and 33kV rural and urban distribution lines",
      "Substation feeder busbar supports and take-off structures",
      "Overhead line tangent and angle pole supports"
    ]
  },
  {
    id: "disc-insulators-strain-suspension",
    name: "HT Polymer Disc Insulator Strings (70kN / 120kN)",
    category: "HT/LT Overhead Line Materials",
    categoryId: "overhead-lines",
    shortDescription: "Composite polymer disc insulators and string assemblies for high tension strain, tension, and suspension spans.",
    fullDescription: "Supplied in standard 70kN, 90kN, and 120kN electro-mechanical failing loads for high tension overhead lines. Available in Ball & Socket (B&S) and Tongue & Clevis (T&C) configurations to form reliable suspension and tension strings for 11kV, 33kV, and higher voltage corridors.",
    image: "/images/products/polymer-disc-insulators-string.jpg",
    gallery: [
      "/images/products/polymer-disc-insulators-string.jpg",
      "/images/products/polymer-disc-tension-clamp.jpg",
      "/images/products/psc-pole-installation.jpg"
    ],
    features: [
      "High dielectric puncture strength in oil and atmospheric air",
      "Forged steel fittings with uniform hot-dip galvanizing for long lifespan",
      "Lightweight composite construction reduces line weight and transport damage",
      "Ideal for terminal dead-ends, line angles, and suspension strings"
    ],
    specifications: {
      "Failing Load": "70 kN / 90 kN / 120 kN",
      "Coupling Type": "Ball & Socket / Tongue & Clevis (IS 2486)",
      "Standard Compliance": "IS 731 / IS 3188 / IEC 60305 / REC Specifications",
      "Core Material": "High Strength Fiberglass Reinforced Epoxy Resin (FRP)",
      "Housing": "High Temperature Vulcanized (HTV) Silicone Rubber"
    },
    applications: [
      "Dead-end terminal poles and tension strain points",
      "Overhead highway, railway, and river span crossings",
      "33kV and 11kV double circuit suspension strings"
    ]
  },
  {
    id: "polymer-disc-tension-clamp",
    name: "Polymer Tension Insulators & Overhead Strain Clamps",
    category: "HT/LT Overhead Line Materials",
    categoryId: "overhead-lines",
    shortDescription: "Complete tension insulator assemblies integrated with bolted aluminium strain clamps for dead-end conductor anchoring.",
    fullDescription: "Supplied by PSPL for overhead conductor strain terminations. Consists of a silicone polymer tension insulator linked to a heavy-duty bolted strain tension clamp fabricated from high-tensile aluminium alloy and galvanized steel hardware. Provides slip-free grip on ACSR and AAAC conductors without damaging conductor strands.",
    image: "/images/products/polymer-disc-tension-clamp.jpg",
    gallery: [
      "/images/products/polymer-disc-tension-clamp.jpg",
      "/images/products/abc-hardware-tension-clamps.jpg",
      "/images/products/polymer-disc-insulators-string.jpg"
    ],
    features: [
      "High mechanical holding strength exceeding 95% of conductor rated breaking strength",
      "Corrosion-resistant aluminium alloy clamp body with contoured wire grooves",
      "Supplied with Grade 8.8 galvanized U-bolts, nuts, and flat washers",
      "Excellent electrical tracking resistance and long UV weather endurance"
    ],
    specifications: {
      "Conductor Compatibility": "Rabbit, Weasel, Dog, Panther ACSR / AAAC",
      "Holding Load": "45 kN to 90 kN",
      "Clamp Material": "High Strength Aluminium Alloy A6 / Forged Steel",
      "Standard Compliance": "IS 2486 / IS 5561 / REC Specifications"
    },
    applications: [
      "Overhead section and dead-end tension terminations",
      "Distribution substation line entry bay anchoring",
      "Steep grade and long-span line angle structures"
    ]
  },
  {
    id: "pg-clamps-hardware",
    name: "Parallel Groove (PG) Clamps & Line Hardware",
    category: "HT/LT Overhead Line Materials",
    categoryId: "overhead-lines",
    shortDescription: "High-conductivity extruded aluminium and bimetallic PG clamps for secure conductor tapping and jointing.",
    fullDescription: "High mechanical integrity PG clamps fabricated from corrosion-resistant aluminium alloy with high-tensile hot-dip galvanized bolts and spring washers. Ensures constant contact pressure and minimal joint resistance across ACSR and AAAC conductor joints without strand deformation.",
    image: "/images/products/abc-hardware-tension-clamps.jpg",
    gallery: [
      "/images/products/abc-hardware-tension-clamps.jpg",
      "/images/products/pole-hardware-fittings.jpg",
      "/images/products/vibration-damper.jpg"
    ],
    features: [
      "Supplied with friction-reduction anti-oxidant jointing compound",
      "Corrosion-resistant aluminium alloy body with high conductivity",
      "Grade 8.8 galvanized steel bolts with bell-mouthed conductor entries",
      "Available in 2-bolt, 3-bolt, and bimetallic configurations"
    ],
    specifications: {
      "Conductor Range": "Squirrel, Weasel, Rabbit, Dog, Panther, Zebra",
      "Material": "High Strength Aluminium Alloy A6 / Forged Brass / Bimetal",
      "Hardware Bolt Finish": "Hot-dip galvanized / Dacromet coated",
      "Temperature Rise": "Conforms to IS 5561 specifications"
    },
    applications: [
      "Loop connections on strain towers and section poles",
      "T-off taps from main overhead feeders",
      "Jumper connections between feeder lines"
    ]
  },
  {
    id: "stockbridge-vibration-dampers",
    name: "Stockbridge Vibration Dampers for Overhead Conductors",
    category: "HT/LT Overhead Line Materials",
    categoryId: "overhead-lines",
    shortDescription: "Precision-engineered Stockbridge 4-resonance vibration dampers with galvanized messenger cable and clamp.",
    fullDescription: "Vibration dampers designed to absorb and dissipate wind-induced aeolian vibrations and oscillations on overhead transmission and distribution conductors. Features hot-dip galvanized cast iron weights, multi-strand flexible steel messenger cable, and high-strength aluminium alloy conductor clamp.",
    image: "/images/products/vibration-damper.jpg",
    gallery: [
      "/images/products/vibration-damper.jpg",
      "/images/products/abc-hardware-tension-clamps.jpg"
    ],
    features: [
      "Prevents conductor strand fatigue failure at suspension clamps and supports",
      "Four-resonance frequency design covering wide wind velocity spectra",
      "Supplied with bell-mouthed aluminium clamp protecting conductor outer strands",
      "All steel parts hot-dip galvanized conforming to IS 2629 / IS 2633"
    ],
    specifications: {
      "Conductor Diameter Range": "10.0 mm to 35.0 mm",
      "Damper Weights": "Galvanized Cast Iron / Forged Steel",
      "Messenger Cable": "High-tensile galvanized 19-strand steel wire",
      "Standard Compliance": "IS 9782 / IEC 61897"
    },
    applications: [
      "Long-span overhead transmission lines crossing open fields, rivers, and highways",
      "High-tension 33kV, 66kV, and 132kV overhead conductor corridors",
      "Substation terminal span damping"
    ]
  },
  {
    id: "stay-sets-stay-wire",
    name: "Complete Stay Sets & Stay Wire Assemblies",
    category: "HT/LT Overhead Line Materials",
    categoryId: "overhead-lines",
    shortDescription: "Heavy-duty stay assemblies with galvanized stay rod, anchor bow, base plate, thimbles, and stay wire.",
    fullDescription: "Robust stay set assemblies for guy-wire anchoring of overhead HT/LT distribution poles. Each set includes a hot-dip galvanized stay rod, stay bow with ratchet nut, heavy anchor plate, thimbles, and high-tensile stranded galvanized steel stay wire.",
    image: "/images/products/stay-sets-hardware.jpg",
    gallery: [
      "/images/products/stay-sets-hardware.jpg",
      "/images/products/stay-wire-thimbles-grips.jpg",
      "/images/products/psc-pole-installation.jpg"
    ],
    features: [
      "Heavy uniform hot-dip galvanizing exceeding IS 2633 standards (minimum 80 microns)",
      "Deep thread engagement on stay bow for precise line tensioning",
      "Cast iron or fabricated mild steel anchor plates",
      "High tensile stranded galvanized steel stay wire (7/8 SWG, 7/10 SWG, 7/12 SWG)"
    ],
    specifications: {
      "Stay Rod Length": "1.8 Meter / 2.4 Meter (6 ft / 8 ft)",
      "Rod Diameter": "16 mm / 20 mm / 25 mm",
      "Anchor Plate Size": "200 x 200 x 6 mm / 300 x 300 x 8 mm",
      "Wire Specifications": "IS 2141 galvanized stay wire",
      "Zinc Coating": "Minimum 80 microns hot-dip galvanized"
    },
    applications: [
      "Dead-end tension anchoring of PSC and steel tubular poles",
      "Angle poles and corner pole guy line reinforcement",
      "Substation terminal support guy anchoring"
    ]
  },
  {
    id: "stay-wire-thimbles-grips",
    name: "Galvanized Stay Wire Thimbles & Guy Dead-End Grips",
    category: "HT/LT Overhead Line Materials",
    categoryId: "overhead-lines",
    shortDescription: "High-tensile hot-dip galvanized steel thimbles and guy dead-end grips for stay wire terminations.",
    fullDescription: "Supplied in large quantities for overhead line construction and pole anchoring. Heavy open-pattern and closed-pattern galvanized steel thimbles prevent stay wire crushing and kink formation at the stay bow and pole clamp connection points.",
    image: "/images/products/stay-wire-thimbles-grips.jpg",
    gallery: [
      "/images/products/stay-wire-thimbles-grips.jpg",
      "/images/products/stay-sets-hardware.jpg"
    ],
    features: [
      "Deep rope groove prevents stay wire slippage and sharp bends",
      "Smooth rounded inner edges eliminate wire abrasion",
      "Heavy zinc coating provides decades of underground and atmospheric rust protection",
      "Conforms strictly to IS 2141 and DISCOM standard utility drawings"
    ],
    specifications: {
      "Compatible Stay Wire": "7/8 SWG (4.0mm), 7/10 SWG (3.15mm), 7/12 SWG (2.5mm)",
      "Material": "Drop Forged Carbon Steel / Formed Structural Steel",
      "Finish": "Hot-dip galvanized to IS 2629",
      "Standard Compliance": "IS 2486 (Part II)"
    },
    applications: [
      "Stay set rod turnbuckle and bow connections",
      "Pole top stay clamp loop attachments",
      "Guy wire dead-end terminations"
    ]
  },
  {
    id: "gi-cross-arms-top-brackets",
    name: "GI V-Cross Arms & Top Brackets (11kV & 33kV)",
    category: "HT/LT Overhead Line Materials",
    categoryId: "overhead-lines",
    shortDescription: "Heavy channel and angle iron hot-dip galvanized V-cross arms and top brackets for PSC pole structures.",
    fullDescription: "Fabricated from prime structural steel channels and angles conforming to IS 2062, hot-dip galvanized to protect against rust and oxidation. Pre-punched for accurate fitting of pin insulators, disc tension hardware, and line earthing terminals on concrete PSC and steel poles.",
    image: "/images/products/v-cross-arms-galvanized.png",
    gallery: [
      "/images/products/v-cross-arms-galvanized.png",
      "/images/products/v-cross-arms-red-oxide.jpg",
      "/images/products/channel-cross-arms.jpg",
      "/images/products/psc-pole-installation.jpg"
    ],
    features: [
      "Hot-dip galvanized coating of minimum 610 g/m² (85+ microns)",
      "CNC punched hole spacing compatible with standard state DISCOM drawings",
      "Supplied with back clamps, bolts, and lock washers",
      "V-shape, horizontal channel, and vertical bracket configurations available"
    ],
    specifications: {
      "Steel Grade": "IS 2062 Grade E250 Mild Steel",
      "Channel Sizes": "75x40 mm, 100x50 mm, 125x65 mm",
      "Length": "1070 mm / 1500 mm / 2200 mm",
      "Galvanizing": "IS 2629 / IS 4759"
    },
    applications: [
      "11kV and 33kV intermediate distribution poles",
      "Double pole (DP) transformer mounting structures",
      "Section and terminal line pole assemblies"
    ]
  },
  {
    id: "channel-cross-arms",
    name: "MS & GI Heavy Channel Cross Arms",
    category: "HT/LT Overhead Line Materials",
    categoryId: "overhead-lines",
    shortDescription: "Precision-cut mild steel and galvanized structural channels for distribution cross-arms and pole structures.",
    fullDescription: "Supplied in red-oxide primed or hot-dip galvanized finishes. Manufactured with accurate hole patterns conforming to REC and state power utility standards for quick pole mounting of pin insulators, surge arresters, and gang switches.",
    image: "/images/products/channel-cross-arms.jpg",
    gallery: [
      "/images/products/channel-cross-arms.jpg",
      "/images/products/v-cross-arms-red-oxide.jpg",
      "/images/products/v-cross-arms-galvanized.png"
    ],
    features: [
      "Made from prime structural steel sections conforming to IS 2062",
      "Pre-drilled mounting holes for pole back clamps and insulator pins",
      "Available in customized lengths and drilling templates on request",
      "Deburred edges and high mechanical rigidity under heavy conductor spans"
    ],
    specifications: {
      "Channel Dimensions": "75 x 40 x 4.8 mm / 100 x 50 x 5.0 mm",
      "Length Options": "1.0 Meter, 1.2 Meter, 1.5 Meter, 2.2 Meter",
      "Finish": "Hot-Dip Galvanized / Red-Oxide Primer Coated",
      "Standard Compliance": "IS 2062 / REC Construction Standards"
    },
    applications: [
      "Overhead distribution line support cross arms",
      "DP structure horizontal bracing and transformer mounting beds",
      "Substation bus support gantry channels"
    ]
  },
  {
    id: "pole-hardware-fittings",
    name: "Galvanized Pole Hardware, Clamps & Shackle Fittings",
    category: "HT/LT Overhead Line Materials",
    categoryId: "overhead-lines",
    shortDescription: "Pole back clamps, shackle insulator hardware, cross-arm clamps, and galvanized line accessories.",
    fullDescription: "Complete assortment of pole line mounting hardware manufactured from high-tensile mild steel with hot-dip galvanizing. Includes PSC pole clamps, cross-arm back clamps, D-shackle straps, earth wire clamps, and mounting brackets.",
    image: "/images/products/pole-hardware-fittings.jpg",
    gallery: [
      "/images/products/pole-hardware-fittings.jpg",
      "/images/products/psc-pole-installation.jpg",
      "/images/products/stay-sets-hardware.jpg"
    ],
    features: [
      "Accurately contoured to fit standard 8.0m, 9.0m, and 9.5m concrete PSC poles",
      "Supplied complete with hot-dip galvanized Grade 5.6 hex bolts, nuts, and spring washers",
      "Heavy uniform zinc coating resisting corrosive outdoor elements",
      "High tensile load capacity preventing slippage or deformation"
    ],
    specifications: {
      "Steel Section": "50x6 mm / 65x6 mm / 75x8 mm Flat & Angle Bars",
      "Fasteners": "M16 x 200 mm / M16 x 250 mm Galvanized Bolts",
      "Galvanizing": "Minimum 80 Microns as per IS 2629 / IS 4759",
      "Standard Compliance": "IS 2486 / REC Guidelines"
    },
    applications: [
      "PSC and rail pole line hardware mounting",
      "Cross arm and top bracket pole clamping",
      "Low tension and high tension distribution line assemblies"
    ]
  },
  {
    id: "psc-pole-installation-assemblies",
    name: "PSC Pole Structure Assemblies & Line Mounting Systems",
    category: "HT/LT Overhead Line Materials",
    categoryId: "overhead-lines",
    shortDescription: "Complete integrated line hardware kits for 8m and 9m Prestressed Concrete (PSC) distribution poles.",
    fullDescription: "Pavan Sai Power Lines packages complete structural mounting hardware sets for 11kV and LT overhead lines. Includes V-cross arms, top brackets, pole clamps, pin insulators, disc tension sets, earth bonding flats, and stay set assemblies ready for immediate site erection.",
    image: "/images/products/psc-pole-installation.jpg",
    gallery: [
      "/images/products/psc-pole-installation.jpg",
      "/images/products/v-cross-arms-galvanized.png",
      "/images/products/pin-insulator-polymer-11kv.png"
    ],
    features: [
      "All-in-one packaging eliminates mismatched hardware on installation sites",
      "Verified fitment on standard 8.0 Meter (140 kg / 200 kg) and 9.0 Meter (300 kg) PSC poles",
      "Adheres strictly to Telangana and Andhra Pradesh DISCOM construction practices",
      "Supplied with certified test reports and standard factory warranties"
    ],
    specifications: {
      "Pole Class Compatibility": "8.0 Meter (140 kg / 200 kg WL) & 9.0 Meter (300 kg WL) PSC Poles",
      "Operating Voltage": "11 kV Three-Phase / 415 V LT Three-Phase 4-Wire",
      "Hardware Grade": "Hot-Dip Galvanized Structural Steel",
      "Standard Compliance": "REC Construction Standards / IS 2062"
    },
    applications: [
      "Rural electrification and agricultural feeder separation schemes",
      "Urban distribution network strengthening and line reconductoring",
      "Industrial feeder dedicated line installations"
    ]
  },

  // -------------------------------------------------------------
  // 2. TRANSFORMER SPARES
  // -------------------------------------------------------------
  {
    id: "transformer-bushings-ht-lt",
    name: "HT & LT Transformer Bushings (1kV, 11kV, 22kV, 33kV)",
    category: "Transformer Spares",
    categoryId: "transformer-spares",
    shortDescription: "High-voltage porcelain and polymer bushings with brass and electrolytic copper conductor stem rods.",
    fullDescription: "Pavan Sai Power Lines supplies a full line of HT and LT transformer porcelain and composite bushings conforming to DIN and IS specifications. Complete with tin-plated electrolytic copper or brass stem rods, sealing rubber gaskets, washers, and terminal connector palms for distribution and power transformers.",
    image: "/images/products/pin-insulator-polymer-33kv.png",
    gallery: [
      "/images/products/pin-insulator-polymer-33kv.png",
      "/images/products/transformer-bushings.svg"
    ],
    features: [
      "High dielectric porcelain insulator bodies tested for thermal shocks",
      "Available for 1kV LT, 11kV HT, 22kV HT, and 33kV HT ratings",
      "Current ratings from 250A up to 3150A for heavy LT duty",
      "Complete assembly with nitrile O-rings and brass hardware"
    ],
    specifications: {
      "Voltage Ratings": "1.1 kV (LT) / 12 kV (HT) / 24 kV / 36 kV (HT)",
      "Current Ratings": "250 A, 630 A, 1000 A, 2000 A, 3150 A",
      "Standards": "IS 3347 / DIN 42530 / DIN 42531",
      "Stem Material": "Electrolytic Grade Copper / Extruded Brass"
    },
    applications: [
      "Distribution transformer HT and LT terminal bushings",
      "Power transformer tertiary and neutral leads",
      "Transformer rewinding and repair workshops"
    ]
  },
  {
    id: "silica-gel-breathers",
    name: "Transformer Silica Gel Breathers",
    category: "Transformer Spares",
    categoryId: "transformer-spares",
    shortDescription: "Industrial crystal silica gel dehydrating breathers with oil seal cups for transformer moisture protection.",
    fullDescription: "Robust dehydrating silica gel breathers with clear UV-resistant view cylinders, aluminium casting body, and oil-bath dust trap. Effectively absorbs atmospheric moisture entering the transformer conservator tank during thermal breathing cycles, safeguarding transformer oil dielectric strength.",
    image: "/images/products/silica-breather.svg",
    gallery: [
      "/images/products/silica-breather.svg"
    ],
    features: [
      "Indicates moisture saturation through self-indicating blue-to-pink silica gel",
      "Heavy aluminum top casting with oil bath cup at bottom",
      "Threaded and flanged mounting connections for rapid replacement",
      "Protects oil insulation from degradation and moisture contamination"
    ],
    specifications: {
      "Capacities": "0.5 kg, 1.0 kg, 2.0 kg, 3.0 kg, 5.0 kg",
      "Mounting Flange": "1/2 inch, 3/4 inch, 1 inch BSP / Flanged Type",
      "Body Material": "Cast Aluminium Alloy & Shatterproof Polycarbonate / Borosilicate",
      "Desiccant Media": "Activated Indicating Silica Gel (IS 3401)"
    },
    applications: [
      "Oil-immersed distribution transformers (25 kVA - 2500 kVA)",
      "Power transformers and conservator systems",
      "Substation transformer maintenance replacements"
    ]
  },
  {
    id: "transformer-gaskets-oil-indicators",
    name: "Transformer Gaskets & Oil Level Gauges (MOG)",
    category: "Transformer Spares",
    categoryId: "transformer-spares",
    shortDescription: "High-grade nitrile rubber cork gaskets (RC70C) and magnetic/prismatic oil level indicators.",
    fullDescription: "Specialized transformer sealing solutions including oil-resistant nitrile bonded cork sheets (conforming to IS 4253 Part II Type RC70C), molded O-rings, and conservator oil level indicators. Prevents transformer oil leakage while resisting transformer mineral oil at high operating temperatures.",
    image: "/images/products/transformer-gaskets.svg",
    gallery: [
      "/images/products/transformer-gaskets.svg"
    ],
    features: [
      "Excellent resistance to transformer oil (IS 335) and elevated temperatures",
      "Low compression set ensuring leak-proof sealing over years of service",
      "Available in sheets, cut gaskets for bushing flanges, and inspection covers",
      "Accurate dial and prismatic oil level indicators for conservator tanks"
    ],
    specifications: {
      "Gasket Material": "Rubber Bonded Cork Sheet (RC 70-C / RC 80)",
      "Thickness Range": "3 mm, 5 mm, 6 mm, 8 mm, 10 mm",
      "Operating Temp": "-20°C to +120°C continuous in mineral oil",
      "Standards": "IS 4253 (Part II)"
    },
    applications: [
      "Transformer tank top cover, radiator flanges, and conservator joints",
      "HT/LT bushing flange leak sealing",
      "Inspection hole and tap switch cover seals"
    ]
  },
  {
    id: "explosion-vents-prv",
    name: "Explosion Vents & Pressure Relief Valves (PRV)",
    category: "Transformer Spares",
    categoryId: "transformer-spares",
    shortDescription: "Diaphragm explosion vent pipes and spring-loaded pressure relief devices for transformer tank safety.",
    fullDescription: "Safety relief devices designed to rapidly discharge sudden internal tank pressure build-up caused by electrical faults or internal short circuits. Protects transformer tanks from rupture and explosive oil spills.",
    image: "/images/products/explosion-vent.svg",
    gallery: [
      "/images/products/explosion-vent.svg"
    ],
    features: [
      "Precision-calibrated bakelite/aluminium diaphragm burst pressure",
      "Optional electrical limit switches for SCADA trip signaling",
      "Galvanized pipe body with double-diaphragm protection against moisture ingress",
      "Robust cast aluminum housing on spring-loaded PRV models"
    ],
    specifications: {
      "Pipe Diameter": "3 inch (80 mm) / 4 inch (100 mm) / 6 inch (150 mm)",
      "Relief Pressure": "0.35 bar to 0.70 bar (Factory calibrated)",
      "Mounting": "Standard companion flange mounting"
    },
    applications: [
      "Distribution and power transformer tank overpressure protection",
      "Substation safety compliance upgrades"
    ]
  },

  // -------------------------------------------------------------
  // 3. AB SWITCHES (AIR BREAK)
  // -------------------------------------------------------------
  {
    id: "ab-switches-11kv-400a",
    name: "11kV Air Break (AB) Switch (200A / 400A Gang-Operated)",
    category: "AB Switches",
    categoryId: "ab-switches",
    shortDescription: "Triple Pole outdoor gang-operated Air Break disconnector switch for 11kV line sectionalizing.",
    fullDescription: "Heavy-duty 11kV 3-pole gang-operated outdoor Air Break switch mounted on hot-dip galvanized channel base. Features electrolytic copper contacts with hard silver plating, phosphor bronze backup springs, and smooth rotating operating mechanism for safe overhead line isolation.",
    image: "/images/products/ab-switch-gang-operated.png",
    gallery: [
      "/images/products/ab-switch-gang-operated.png",
      "/images/products/ab-switch.jpg",
      "/images/products/ab-switch-isolator.jpg"
    ],
    features: [
      "Electrolytic copper fixed and moving jaw contacts with silver plating",
      "High mechanical endurance porcelain or polymer post insulator supports",
      "Supplied complete with operating pipe handle, padlock latch, and guide brackets",
      "Arcing horns made of high-grade copper alloy for rapid spark extinguishing"
    ],
    specifications: {
      "Rated Voltage": "11 kV (Max 12 kV)",
      "Rated Current": "200 A / 400 A / 630 A",
      "Number of Poles": "Triple Pole (3-Phase Gang Operated)",
      "Short Time Withstand Current": "16 kA for 1 sec / 3 sec",
      "Impulse Withstand Voltage": "75 kV Peak",
      "Standard Compliance": "IS 9921 / IEC 62271-102 / DISCOM Approved"
    },
    applications: [
      "11kV overhead distribution line sectionalizing and branch disconnection",
      "Distribution transformer substation incoming line isolation",
      "Feeder bypass and maintenance isolation"
    ]
  },
  {
    id: "ab-switches-33kv-630a",
    name: "33kV Gang-Operated AB Switch (630A / 800A Heavy Duty)",
    category: "AB Switches",
    categoryId: "ab-switches",
    shortDescription: "Heavy transmission grade 33kV outdoor disconnector isolator with robust gang-operating linkage.",
    fullDescription: "Engineered for 33kV sub-transmission networks and 33/11kV substations. Designed with reinforced structural galvanized channel base, dual/triple post insulator stacks, self-aligning high-pressure finger contacts, and heavy downpipe operating mechanism with padlock arrangement.",
    image: "/images/products/ab-switch-isolator.jpg",
    gallery: [
      "/images/products/ab-switch-isolator.jpg",
      "/images/products/ab-switch-gang-operated.png"
    ],
    features: [
      "Self-cleaning, high-pressure line contacts to prevent oxidation",
      "Sturdy hot-dip galvanized steel chassis resists mechanical torsion during operation",
      "Available with or without integral earthing switch (Earth blade)",
      "Heavy-duty adjustable turnbuckles and operating linkage"
    ],
    specifications: {
      "Rated Voltage": "33 kV (Max 36 kV)",
      "Rated Normal Current": "630 A / 800 A",
      "Impulse Withstand Voltage": "170 kV Peak",
      "One-Minute Power Frequency": "70 kV rms",
      "Short Circuit Rating": "25 kA for 3 seconds",
      "Insulators": "33kV Solid Core / Pin Post Insulators (IS 2544)"
    },
    applications: [
      "33/11kV primary substation line bay isolators",
      "33kV industrial captive power tapping points",
      "Rural 33kV express feeder sectionalizers"
    ]
  },
  {
    id: "horn-gap-fuse-units",
    name: "Horn Gap (HG) Fuse Sets (11kV & 33kV)",
    category: "AB Switches",
    categoryId: "ab-switches",
    shortDescription: "Outdoor channel mounted horn gap fuse units for distribution transformer short-circuit protection.",
    fullDescription: "Reliable overhead fault protection assembly designed to mount directly below or beside AB switches on two-pole or four-pole transformer structures. Consists of heavy copper horns, terminal clamps, and replaceable fuse wire channels engineered to safely interrupt short-circuit overcurrents.",
    image: "/images/products/ab-switch-horn-gap.jpg",
    gallery: [
      "/images/products/ab-switch-horn-gap.jpg",
      "/images/products/ab-switch-gang-operated.png"
    ],
    features: [
      "Robust divergence arc-horns quench the break arc quickly in atmospheric air",
      "Pre-assembled on hot-dip galvanized steel channel frames",
      "Accommodates standard tinned copper fuse wire or silver fuse elements",
      "Easy re-fusing from ground level using standard operating sticks"
    ],
    specifications: {
      "Voltage Rating": "11 kV / 33 kV",
      "Base Channel": "100x50 mm / 75x40 mm MS Channel HDG",
      "Contacts": "High Conductivity Copper with Electro-Tinned Finish",
      "Post Insulators": "Solid Core / Porcelain Post (IS 2544 / IS 5350)"
    },
    applications: [
      "Protection of 25 kVA to 500 kVA distribution transformers",
      "Branch tap overcurrent isolation",
      "Capacitor bank overhead protection"
    ]
  },
  {
    id: "ab-switch-spare-contacts-accessories",
    name: "AB Switch Spare Contacts, Arcing Horns & Operating Linkages",
    category: "AB Switches",
    categoryId: "ab-switches",
    shortDescription: "Genuine replacement male/female copper contacts, arcing horns, and operating handles for AB switches.",
    fullDescription: "Pavan Sai Power Lines maintains comprehensive stock of replacement parts for field maintenance of 11kV and 33kV air break switches. Includes silver-plated moving blades, fixed jaw contacts, tension springs, flexible copper braids, and heavy padlockable operating handles.",
    image: "/images/products/ab-switch.jpg",
    gallery: [
      "/images/products/ab-switch.jpg",
      "/images/products/switch-contacts.svg"
    ],
    features: [
      "High grade electrolytic copper with uniform silver plating for low contact resistance",
      "Phosphor bronze / stainless steel pressure springs maintain positive jaw bite",
      "Direct fit replacement for DISCOM-approved switch designs",
      "Minimizes downtime during substation maintenance shutdowns"
    ],
    specifications: {
      "Contact Material": "Electrolytic Tough Pitch (ETP) Copper",
      "Plating": "Silver Plated 15 to 25 Microns",
      "Current Compatibility": "200A, 400A, 630A, 800A Switch Assemblies"
    },
    applications: [
      "Substation annual maintenance overhauls",
      "Burned contact replacement and refurbishing",
      "Disconnector linkage refurbishment"
    ]
  },

  // -------------------------------------------------------------
  // 4. AAAC & ACSR CONDUCTORS
  // -------------------------------------------------------------
  {
    id: "acsr-conductors-distribution-transmission",
    name: "ACSR Conductors (Weasel, Rabbit, Dog, Panther, Zebra)",
    category: "AAAC & ACSR Conductors",
    categoryId: "conductors",
    shortDescription: "Aluminium Conductor Steel Reinforced supplied in wooden drums for high-tensile power transmission.",
    fullDescription: "Pavan Sai Power Lines supplies full drums of high-conductivity ACSR conductors. Constructed with concentric strands of high-purity EC grade aluminium wrapped around a central core of galvanized high-tensile steel wire. Combines superior electrical conductivity with optimal mechanical tensile strength for overhead spans.",
    image: "/images/products/acsr-conductor-drums.jpg",
    gallery: [
      "/images/products/acsr-conductor-drums.jpg",
      "/images/products/conductor-drums-storage-yard.png",
      "/images/products/aac-aaac-acsr-comparison.png"
    ],
    features: [
      "Core wire hot-dip galvanized with Class A / Heavy zinc coating",
      "EC grade aluminium wires with 61.2% IACS conductivity",
      "Supplied in non-returnable wooden or steel drums as per client length needs",
      "Conforms strictly to IS 398 (Part II) / IEC 61089 standards"
    ],
    specifications: {
      "Popular Sizes": "Squirrel (20mm²), Weasel (30mm²), Rabbit (50mm²), Dog (100mm²), Panther (200mm²), Zebra (420mm²)",
      "Standard": "IS 398 (Part 2): 1996 / IEC 61089",
      "Aluminium Purity": "99.5% Minimum (EC Grade Aluminium)",
      "Steel Core Tensile": "1300 to 1450 MPa Galvanized High Tensile Steel"
    },
    applications: [
      "HT 11kV & 33kV rural and municipal distribution networks",
      "Long river-span and highway power crossings",
      "66kV, 132kV, and 220kV transmission line towers"
    ]
  },
  {
    id: "aaac-conductors-all-aluminium-alloy",
    name: "AAAC Conductors (All Aluminium Alloy Conductors)",
    category: "AAAC & ACSR Conductors",
    categoryId: "conductors",
    shortDescription: "High-strength Al-Mg-Si alloy conductors providing superior corrosion resistance and reduced line losses.",
    fullDescription: "Constructed entirely from heat-treated Aluminium-Magnesium-Silicon (Almelec) alloy strands. AAAC conductors offer identical electrical resistance to equivalent ACSR sizes while eliminating the galvanic corrosion inherent in steel cores, resulting in superior performance in coastal, industrial, and humid terrains.",
    image: "/images/products/aaac-conductors-drum-banner.jpg",
    gallery: [
      "/images/products/aaac-conductors-drum-banner.jpg",
      "/images/products/conductor-drums-storage-yard.png",
      "/images/products/aac-aaac-acsr-comparison.png"
    ],
    features: [
      "No internal galvanic corrosion between steel and aluminium",
      "Lighter weight allowing longer spans and reduced pole/tower loading",
      "Higher surface hardness resists scuffing and abrasion during stringing",
      "Reduced electrical line losses compared to conventional conductors"
    ],
    specifications: {
      "Standard": "IS 398 (Part IV) / IEC 60104 / BS 3242",
      "Alloy Grade": "Heat-Treated Al-Mg-Si Alloy (Almelec)",
      "Popular Sizes": "34 mm², 55 mm², 100 mm², 150 mm², 232 mm²",
      "Electrical Conductivity": "52.5% to 53% IACS"
    },
    applications: [
      "Coastal and high humidity transmission lines",
      "Industrial distribution lines exposed to chemical and corrosive fumes",
      "Upgrading existing overhead lines without structural tower reinforcement"
    ]
  },
  {
    id: "aerial-bundled-cables-lt-abc",
    name: "LT Aerial Bundled Cables (ABC) & Suspension Clamps",
    category: "AAAC & ACSR Conductors",
    categoryId: "conductors",
    shortDescription: "Weatherproof XLPE insulated self-supporting LT ABC conductors with neutral messenger for safe distribution.",
    fullDescription: "Supplied for modern theft-proof urban and rural low tension power distribution. Features high-conductivity compact stranded aluminium phase conductors insulated with carbon-black crosslinked polyethylene (XLPE), twisted around an insulated or bare high-tensile aluminium alloy messenger conductor.",
    image: "/images/products/aerial-bundled-cable-abc.jpg",
    gallery: [
      "/images/products/aerial-bundled-cable-abc.jpg",
      "/images/products/abc-hardware-tension-clamps.jpg",
      "/images/products/acsr-conductor-drums.jpg"
    ],
    features: [
      "Completely prevents power theft by unauthorized direct line hooking",
      "Can be routed safely through dense tree canopies and narrow urban alleyways",
      "Eliminates short-circuits caused by falling branches or strong gale winds",
      "Supplied complete with suspension clamps, eye bolts, and piercing connectors"
    ],
    specifications: {
      "Configurations": "1-Core, 3-Phase + Neutral Messenger + Street Light Core",
      "Sizes": "3x25+16 mm², 3x35+25 mm², 3x50+35 mm², 3x70+50 mm², 3x95+70 mm²",
      "Voltage Rating": "1.1 kV Grade",
      "Standard Compliance": "IS 14255 / REC Specifications"
    },
    applications: [
      "Urban low tension distribution in congested residential corridors",
      "Forest and plantation overhead power distribution",
      "Rural electrification anti-theft line conversions"
    ]
  },
  {
    id: "conductor-drums-storage-yard",
    name: "Heavy Wooden Conductor Drums & Logistics Stock",
    category: "AAAC & ACSR Conductors",
    categoryId: "conductors",
    shortDescription: "Bulk supply of ACSR and AAAC conductors on reinforced wooden and steel drums ready for swift regional dispatch.",
    fullDescription: "Pavan Sai Power Lines maintains extensive inventory of standard distribution conductor sizes ready for rapid dispatch across Telangana and Andhra Pradesh. All drums are treated, wrapped with protective battens, and labeled with gross/tare weight and continuous conductor length.",
    image: "/images/products/conductor-drums-storage-yard.png",
    gallery: [
      "/images/products/conductor-drums-storage-yard.png",
      "/images/products/acsr-conductor-drums.jpg",
      "/images/products/aaac-conductors-drum-banner.jpg"
    ],
    features: [
      "Standard 1 km, 1.5 km, and 2 km continuous conductor drum lengths",
      "Reinforced wooden flanges with center steel bushing to facilitate easy unwinding",
      "Moisture-proof plastic underlay protects conductor inner layers from dirt and grit",
      "Direct warehouse loading with crane access for bulk trailer transport"
    ],
    specifications: {
      "Drum Construction": "Heavy Pine/Hardwood Non-Returnable Drums / Steel Drums",
      "Conductor Range": "Squirrel to Zebra (IS 398 Part 2 & Part 4)",
      "Standard Compliance": "IS 1778 (Wooden Drums for Electric Cables & Conductors)"
    },
    applications: [
      "State DISCOM rate contract project deliveries",
      "EPC contractor turnkey transmission line stringing",
      "Substation feeder tie-in projects"
    ]
  },
  {
    id: "conductor-comparison-aac-aaac-acsr",
    name: "AAC, AAAC & ACSR Conductor Cross-Section Series",
    category: "AAAC & ACSR Conductors",
    categoryId: "conductors",
    shortDescription: "Complete portfolio of overhead conductors engineered to IS 398 specifications for all voltage classes.",
    fullDescription: "Full range comparison covering All Aluminium Conductors (AAC) for short low-voltage spans, All Aluminium Alloy Conductors (AAAC) for corrosion-prone terrains, and Aluminium Conductor Steel Reinforced (ACSR) for heavy mechanical tension and river spans.",
    image: "/images/products/aac-aaac-acsr-comparison.png",
    gallery: [
      "/images/products/aac-aaac-acsr-comparison.png",
      "/images/products/acsr-conductor-drums.jpg",
      "/images/products/aaac-conductors-drum-banner.jpg"
    ],
    features: [
      "Available across all standard code names (Squirrel, Weasel, Rabbit, Dog, Wolf, Panther, Zebra)",
      "Complete electrical and mechanical test certificates provided with every dispatch",
      "Uniform concentric lay with grease options for aggressive environmental zones",
      "Consistent diameter and high elongation ductility for easy compression jointing"
    ],
    specifications: {
      "Standards": "IS 398 (Part 1, 2, 4 & 5) / IEC 61089 / BS 215",
      "Conductivity": "61% IACS (EC Grade) / 53% IACS (Alloy)",
      "Tensile Strength": "Conforms strictly to standard BIS specification tables"
    },
    applications: [
      "Distribution network overhead lines (11kV & 33kV)",
      "Substation inter-busbar overhead jumpers",
      "Extra High Voltage (EHV) transmission corridors"
    ]
  },

  // -------------------------------------------------------------
  // 5. EARTHING MATERIALS
  // -------------------------------------------------------------
  {
    id: "copper-bonded-chemical-earth-electrodes",
    name: "Copper Bonded Chemical Earth Electrodes & Rods",
    category: "Earthing Materials",
    categoryId: "earthing",
    shortDescription: "Molecularly bonded copper steel grounding electrodes with threaded couplers for deep driving.",
    fullDescription: "Engineered grounding electrodes manufactured by molecularly bonding 99.9% pure electrolytic copper over high-tensile carbon steel cores (minimum 254 microns / 10 mil copper thickness). Delivers superior fault dissipation and exceptional underground service life without flaking, peeling, or electrolytic corrosion.",
    image: "/images/products/copper-bonded-earth-rods.jpg",
    gallery: [
      "/images/products/copper-bonded-earth-rods.jpg",
      "/images/products/chemical-earth-electrodes.png",
      "/images/products/copper-earth-wire.jpg"
    ],
    features: [
      "Molecular copper bonding exceeds UL 467 & IEEE 80 standards (254 microns minimum)",
      "High tensile steel core allows deep pneumatic driving into hard, rocky terrain",
      "Maintains low soil resistance when installed with earth enhancement compound",
      "Corrosion-resistant service life of 25+ years in aggressive and acidic soils"
    ],
    specifications: {
      "Diameter Options": "14.2 mm (5/8\"), 17.2 mm (3/4\"), 25 mm, 38 mm",
      "Standard Lengths": "2.0 Meter, 3.0 Meter (10 feet)",
      "Copper Coating Thickness": "254 Microns (10 Mil) Minimum Uniform",
      "Standard Compliance": "UL 467 / IS 3043 / IEEE 80 / IEC 62561-2"
    },
    applications: [
      "Substation grounding grids and lightning protection systems",
      "Distribution transformer neutral earthing",
      "Telecom towers, industrial plants, and data centers"
    ]
  },
  {
    id: "gi-perforated-earthing-pipes-funnels",
    name: "GI Perforated Earthing Pipes with Funnels & Driving Points",
    category: "Earthing Materials",
    categoryId: "earthing",
    shortDescription: "Heavy hot-dip galvanized perforated Class-B earthing pipes fitted with wire mesh funnels and driving cones.",
    fullDescription: "Pavan Sai Power Lines supplies complete utility-grade GI pipe earthing assemblies. Features Class-B perforated steel pipes with uniform hot-dip galvanizing, conical driving points for effortless soil penetration, and cast iron / GI watering funnels with wire mesh for seasonal moisture replenishing.",
    image: "/images/products/gi-perforated-earthing-pipes.jpg",
    gallery: [
      "/images/products/gi-perforated-earthing-pipes.jpg",
      "/images/products/gi-earthing-pipe-electrodes.jpg",
      "/images/products/cast-iron-earthing-pipes.jpg"
    ],
    features: [
      "Staggered radial perforations along the pipe length ensure maximum contact with backfill slurry",
      "Heavy zinc coating of 80+ microns resists underground electrolytic decomposition",
      "Supplied with galvanized clamping hardware, funnel, and wire mesh",
      "Conforms strictly to IS 3043 code of practice for earthing"
    ],
    specifications: {
      "Pipe Diameter": "40 mm / 50 mm / 80 mm NB (Class B Heavy)",
      "Pipe Length": "2.5 Meter / 3.0 Meter",
      "Perforations": "12 mm diameter staggered holes along length",
      "Galvanizing": "Hot-Dip Galvanized to IS 4759 / IS 2629"
    },
    applications: [
      "HT/LT distribution pole body earthing and neutral grounding",
      "Substation perimeter grounding mat conductors",
      "Industrial manufacturing plant perimeter earth loops"
    ]
  },
  {
    id: "gi-earthing-pipe-electrodes",
    name: "Galvanized Earthing Pipe Electrodes with Conical Cones",
    category: "Earthing Materials",
    categoryId: "earthing",
    shortDescription: "Galvanized tubular pipe electrodes with welded conical drive points and terminal flat connections.",
    fullDescription: "Manufactured from certified steel tubes hot-dip galvanized inside and out. Fitted with sharp hardened driving cones at the base for installation in dense soil, and pre-punched top connection flats for bolting earth conductor strips.",
    image: "/images/products/gi-earthing-pipe-electrodes.jpg",
    gallery: [
      "/images/products/gi-earthing-pipe-electrodes.jpg",
      "/images/products/gi-perforated-earthing-pipes.jpg"
    ],
    features: [
      "Dual interior and exterior hot-dip galvanizing prevents internal rust",
      "Welded drive cone withstands heavy pneumatic hammering during insertion",
      "Clean flat terminal with multiple bolt holes for redundant grounding strips",
      "Adheres to Indian electricity rules and DISCOM standards"
    ],
    specifications: {
      "Pipe Size": "50 mm NB Class-B / Class-C Pipe",
      "Length": "3.0 Meter (10 ft)",
      "Zinc Coating": "Minimum 610 g/m² (85 microns)",
      "Standard Compliance": "IS 3043 / IS 1239"
    },
    applications: [
      "Distribution transformer station earth pits",
      "Overhead line terminal and section pole earthing",
      "Substation equipment grounding"
    ]
  },
  {
    id: "cast-iron-earthing-pipes",
    name: "Heavy Cast Iron Flanged Earthing Pipes",
    category: "Earthing Materials",
    categoryId: "earthing",
    shortDescription: "Corrosion-resistant cast iron earthing pipes with integral top flanges for traditional utility grounding.",
    fullDescription: "Manufactured from high-grade grey cast iron possessing high inherent corrosion resistance in highly acidic, alkaline, or coastal soils. The thick cast iron wall provides superior longevity compared to thin steel pipes in demanding soil conditions.",
    image: "/images/products/cast-iron-earthing-pipes.jpg",
    gallery: [
      "/images/products/cast-iron-earthing-pipes.jpg",
      "/images/products/gi-perforated-earthing-pipes.jpg"
    ],
    features: [
      "Thick wall construction resists underground oxidation and corrosive soil moisture",
      "Pre-cast top connection flange allows direct bolting of GI or copper earth flats",
      "Long service life exceeding 30+ years in standard utility earth pits",
      "Conforms strictly to Indian Standard IS 3043"
    ],
    specifications: {
      "Pipe Diameter": "100 mm (4 inch) / 150 mm (6 inch) Nominal Bore",
      "Pipe Length": "2.5 Meter / 3.0 Meter",
      "Material": "Grey Cast Iron Grade FG 150 / FG 200 (IS 210)",
      "Flange Connection": "Standard pre-drilled flange"
    },
    applications: [
      "Traditional utility distribution transformer earth pits",
      "Industrial chemical plant grounding networks",
      "Substation station transformer neutral grounding"
    ]
  },
  {
    id: "bare-copper-grounding-wire-coils",
    name: "Bare Electrolytic Copper Grounding Wire & Coils",
    category: "Earthing Materials",
    categoryId: "earthing",
    shortDescription: "High-purity annealed bare copper stranded and solid wire coils for substation grounding grids.",
    fullDescription: "Pavan Sai Power Lines stocks premium electrolytic tough pitch (ETP) bare copper grounding wire coils. Boasting 99.9% copper purity and 100% IACS electrical conductivity, this wire ensures rapid discharge of high lightning and short-circuit fault currents directly to earth.",
    image: "/images/products/copper-earth-wire.jpg",
    gallery: [
      "/images/products/copper-earth-wire.jpg",
      "/images/products/copper-bonded-earth-rods.jpg"
    ],
    features: [
      "99.9% electrolytic grade high conductivity copper",
      "Soft annealed for easy bending, routing, and exothermic welding",
      "High thermal capacity absorbs severe short-circuit current surges",
      "Supplied in tight continuous coils of 25 kg, 50 kg, or custom drum lengths"
    ],
    specifications: {
      "Wire Sizes": "8 SWG (4.06 mm), 6 SWG (4.88 mm), 4 SWG (5.89 mm), 25 sq.mm, 35 sq.mm, 50 sq.mm, 70 sq.mm, 95 sq.mm",
      "Conductivity": "100% IACS",
      "Purity": "99.9% ETP Copper",
      "Standard Compliance": "IS 191 / IS 1753 / BS 4109"
    },
    applications: [
      "Primary substation grounding grid meshes and perimeter rings",
      "Lightning protection down-conductors and arresters",
      "Sensitive computer and telecom equipment earth bonding"
    ]
  },
  {
    id: "chemical-earth-electrodes",
    name: "Heavy-Duty Chemical Earth Electrodes & Enhancing Compounds",
    category: "Earthing Materials",
    categoryId: "earthing",
    shortDescription: "Dual-pipe pipe-in-pipe chemical earth electrodes pre-filled with crystalline conductive minerals.",
    fullDescription: "Maintenance-free pipe-in-pipe chemical grounding electrodes. The space between the inner conductor and outer perforated pipe is filled with non-soluble crystalline conductive compound that continuously leaches moisture-retaining ions into the surrounding soil, keeping earth resistance low year-round.",
    image: "/images/products/chemical-earth-electrodes.png",
    gallery: [
      "/images/products/chemical-earth-electrodes.png",
      "/images/products/copper-bonded-earth-rods.jpg"
    ],
    features: [
      "Zero periodic watering or charcoal/salt refilling needed",
      "Delivers steady low earth resistance regardless of seasonal heat or drought",
      "Available with copper coating or heavy hot-dip galvanized steel tubes",
      "Flat terminal with multi-hole pattern for connecting multiple grounding conductors"
    ],
    specifications: {
      "Outer Diameter": "50 mm / 80 mm / 100 mm",
      "Length": "2.0 Meter / 3.0 Meter",
      "Current Carrying Capacity": "Up to 50 kA for 1 second",
      "Standard Compliance": "IEEE 80 / IS 3043 / NBC 2016"
    },
    applications: [
      "Data centers, telecom towers, and hospital electrical systems",
      "High soil resistivity rocky hills and arid landscapes",
      "Commercial solar power plants and wind turbine generators"
    ]
  },

  // -------------------------------------------------------------
  // 6. INDUSTRIAL ELECTRICALS
  // -------------------------------------------------------------
  {
    id: "ht-xlpe-armoured-power-cables",
    name: "HT XLPE Armoured Power Cables (11kV & 33kV Grade)",
    category: "Industrial Electricals",
    categoryId: "industrial-electricals",
    shortDescription: "Heavy-duty 3-Core aluminium/copper conductor HT XLPE insulated galvanized steel tape/strip armoured cables.",
    fullDescription: "Pavan Sai Power Lines supplies certified HT XLPE power cables designed for primary utility power distribution and heavy industrial feeds. Features stranded compact circular aluminium/copper conductors, extruded semiconducting screen, dry-cured XLPE insulation, copper tape metallic screen, and galvanized steel flat strip armour.",
    image: "/images/products/ht-xlpe-power-cable.png",
    gallery: [
      "/images/products/ht-xlpe-power-cable.png",
      "/images/products/aerial-bundled-cable-abc.jpg",
      "/images/products/acsr-conductor-drums.jpg"
    ],
    features: [
      "High continuous current-carrying capacity with 90°C maximum conductor operating temperature",
      "Galvanized steel strip armour protects against mechanical crush and rodent attack",
      "Low dielectric losses and high dielectric withstand strength",
      "Supplied in continuous drum lengths with BIS certification"
    ],
    specifications: {
      "Voltage Class": "6.35/11 kV (E) / 11 kV (UE) / 19/33 kV (E)",
      "Conductor Cross Section": "3-Core x 50 sq.mm up to 400 sq.mm (Aluminium / Copper)",
      "Insulation": "Crosslinked Polyethylene (XLPE) Extruded",
      "Armouring": "Galvanized Steel Strip / Wire Armoured (IS 3975)",
      "Standard Compliance": "IS 7098 (Part II) / IEC 60502-2"
    },
    applications: [
      "Underground power distribution from 33/11kV substations",
      "Industrial manufacturing plant main incoming HT power feeds",
      "Solar farm collector feeder circuits to pooling stations"
    ]
  },
  {
    id: "industrial-distribution-boxes-feeder-pillars",
    name: "LT Distribution Boxes & Feeder Pillars",
    category: "Industrial Electricals",
    categoryId: "industrial-electricals",
    shortDescription: "Weatherproof CRCA / FRP outdoor LT distribution boxes and multi-circuit feeder pillars.",
    fullDescription: "Outdoor floor-mounted and pole-mounted LT distribution boxes engineered for industrial plants and DISCOM distribution networks. Fabricated from sheet steel or FRP with electrostatic powder coating, IP55 weatherproof sealing, electrolytic copper/aluminium busbars, and internal cable spreaders.",
    image: "/images/products/feeder-pillar.svg",
    gallery: [
      "/images/products/feeder-pillar.svg"
    ],
    features: [
      "Sheet steel enclosure with 7-tank powder-coat pre-treatment",
      "Pre-fitted with high conductivity busbars and fuse bases",
      "Slanted canopy roof to shed rain and dust accumulation",
      "Internal barrier shrouds for personnel safety during operation"
    ],
    specifications: {
      "Enclosure Protection": "IP54 / IP55 Weatherproof Outdoor Rated",
      "Sheet Thickness": "2.0 mm CRCA / 3.0 mm FRP Compound",
      "Busbar Capacity": "200A, 400A, 630A, 1000A Aluminium / Copper",
      "Standard Compliance": "IS 5039 / IS 8623"
    },
    applications: [
      "Industrial estate low-voltage power distribution",
      "Distribution transformer secondary protection and metering",
      "Township and municipal infrastructure feeder switching"
    ]
  },
  {
    id: "cable-lugs-glands-accessories",
    name: "Industrial Cable Glands, Bimetallic Lugs & Terminals",
    category: "Industrial Electricals",
    categoryId: "industrial-electricals",
    shortDescription: "Heavy-duty brass double compression cable glands, bimetallic crimping lugs, and copper terminals.",
    fullDescription: "Comprehensive industrial termination hardware for XLPE armoured and unarmoured power cables. Features nickel-plated brass double compression cable glands with flameproof weatherproof seals and heavy-duty electrolytic copper and bimetallic crimping lugs for secure cable terminations.",
    image: "/images/products/cable-glands-lugs.svg",
    gallery: [
      "/images/products/cable-glands-lugs.svg",
      "/images/products/galvanized-fasteners-structural.jpg"
    ],
    features: [
      "Glands provide mechanical cable clamping and armour continuity earthing",
      "Bimetallic friction-welded lugs prevent galvanic corrosion between copper busbars and aluminium conductors",
      "Accurate barrel internal dimensions for standard hydraulic crimping dies",
      "Tin plated for high atmospheric corrosion resistance"
    ],
    specifications: {
      "Gland Types": "Double Compression Brass (Weatherproof IP66 / Flameproof)",
      "Lug Range": "1.5 sq.mm up to 1000 sq.mm (Single & Double Hole)",
      "Lug Materials": "EC Grade Copper (99.9%) / Friction-Welded Bimetallic",
      "Standards": "IS 12943 / BS 6121 / IS 8309"
    },
    applications: [
      "Motor terminal box and switchgear terminations",
      "Transformer LT cable box terminations",
      "Control panel internal wiring and power feed junctions"
    ]
  },
  {
    id: "hrc-fuse-links-bases",
    name: "HRC Fuse Links, Ceramic Bases & Disconnectors",
    category: "Industrial Electricals",
    categoryId: "industrial-electricals",
    shortDescription: "High Rupturing Capacity (HRC) DIN & BS fuse links and heavy-duty ceramic fuse bases.",
    fullDescription: "Industrial-grade HRC fuse links engineered to provide fast-acting short-circuit and overload protection for low voltage systems. Tested for breaking capacities up to 80kA and 120kA at 415V/500V AC.",
    image: "/images/products/hrc-fuse.svg",
    gallery: [
      "/images/products/hrc-fuse.svg"
    ],
    features: [
      "Silver-plated pure silver/copper fuse elements with high rupturing capacity",
      "High-grade ceramic bodies with low thermal expansion and high mechanical resistance",
      "Reliable trip indicator pin for rapid blown-fuse detection",
      "Silver-plated contact blades for minimum watt loss"
    ],
    specifications: {
      "Voltage Rating": "415 V / 500 V / 690 V AC",
      "Breaking Capacity": "80 kA / 120 kA rms",
      "Current Ratings": "6A, 16A, 32A, 63A, 100A, 160A, 250A, 400A, 630A, 800A",
      "Standards": "IS 13703 / IEC 60269"
    },
    applications: [
      "Industrial motor starter protection panels",
      "Main LT switchboards and feeder pillar outgoing circuits",
      "Capacitor bank and power factor correction panel protection"
    ]
  },

  // -------------------------------------------------------------
  // 7. AIMS & GI TOWERS
  // -------------------------------------------------------------
  {
    id: "hot-dip-galvanized-transmission-towers",
    name: "Hot-Dip Galvanized Lattice Transmission Towers",
    category: "AIMS & GI Towers",
    categoryId: "towers",
    shortDescription: "Engineered structural lattice transmission towers and gantry structures fabricated from prime steel.",
    fullDescription: "Pavan Sai Power Lines supplies high-strength hot-dip galvanized transmission tower structures fabricated from certified structural angle iron (IS 2062 Grade E250 / E350). Designed to withstand severe wind zones and high tensile conductor mechanical tensions across power grid transmission corridors.",
    image: "/images/products/transmission-tower.jpg",
    gallery: [
      "/images/products/transmission-tower.jpg",
      "/images/hero-transmission-sunset.jpg",
      "/images/products/tower-bolts-nuts-galvanized.jpg"
    ],
    features: [
      "Manufactured with CNC punching, shearing, and stamping for exact fitment",
      "Heavy uniform hot-dip galvanizing exceeding 610 g/m² (minimum 86 microns)",
      "Available for suspension, small angle, and dead-end tension configurations",
      "Supplied with galvanized Grade 5.6 and 8.8 structural bolts, nuts, and spring washers"
    ],
    specifications: {
      "Voltage Configurations": "66 kV, 132 kV, 220 kV, 400 kV Transmission Lines",
      "Tower Configurations": "Tangent (Suspension), Light Angle, Heavy Angle, Terminal Tension",
      "Material Grade": "Mild Steel IS 2062 E250 / High Tensile Steel E350",
      "Galvanizing Standard": "IS 4759 / IS 2629 / ASTM A123"
    },
    applications: [
      "State transmission utility power grid transmission corridors",
      "Solar park and wind energy substation interconnections",
      "River crossing and long valley electrical spans"
    ]
  },
  {
    id: "tower-bolts-nuts-galvanized",
    name: "Grade 5.6 & 8.8 Galvanized Structural Tower Bolts & Nuts",
    category: "AIMS & GI Towers",
    categoryId: "towers",
    shortDescription: "Precision hot-dip galvanized structural hex bolts, heavy nuts, and spring washers for tower erection.",
    fullDescription: "Heavy-duty structural fasteners engineered specifically for lattice transmission towers, substation gantries, and pole structures. Manufactured from certified alloy steel, hot-dip galvanized to withstand decades of harsh weather exposure without thread binding or zinc peeling.",
    image: "/images/products/tower-bolts-nuts-galvanized.jpg",
    gallery: [
      "/images/products/tower-bolts-nuts-galvanized.jpg",
      "/images/products/galvanized-fasteners-structural.jpg",
      "/images/products/transmission-tower.jpg"
    ],
    features: [
      "Hot-dip galvanized threads centrifugally spun to ensure free nut run-on",
      "Grade 5.6 and Grade 8.8 tensile options conforming to utility specifications",
      "Supplied with matching heavy-hex nuts and single-coil spring lock washers",
      "High shear and tensile strength preventing joint slippage under wind loads"
    ],
    specifications: {
      "Bolt Diameters": "M16, M20, M24, M30",
      "Length Range": "35 mm to 150 mm",
      "Strength Grades": "Grade 5.6 (Mild Steel) / Grade 8.8 (High Tensile)",
      "Standard Compliance": "IS 12427 / IS 1367 (Part 13) / IS 6639"
    },
    applications: [
      "Lattice transmission tower leg and diagonal member bolting",
      "Substation gantry beam and equipment stand assembly",
      "Cross arm and transformer platform structural fastening"
    ]
  },
  {
    id: "galvanized-fasteners-structural",
    name: "Galvanized Structural Tower Fasteners, Step Bolts & Washers",
    category: "AIMS & GI Towers",
    categoryId: "towers",
    shortDescription: "Tower step bolts, foundation anchor bolts, anti-theft shear nuts, and spring washers in bulk stock.",
    fullDescription: "Comprehensive inventory of specialized tower accessories. Includes lineman climbing step bolts with non-slip heads, foundation hold-down bolts, Belleville washers, and security shear nuts designed to prevent tower angle metal theft in remote corridors.",
    image: "/images/products/galvanized-fasteners-structural.jpg",
    gallery: [
      "/images/products/galvanized-fasteners-structural.jpg",
      "/images/products/tower-bolts-nuts-galvanized.jpg"
    ],
    features: [
      "Heavy uniform hot-dip galvanizing with minimum 80 microns coating",
      "Step bolts designed for 1.5 kN lineman climbing point loads",
      "Anti-theft shear nuts fracture hex portion upon torque tightening",
      "Supplied in sturdy moisture-proof bags for rough site handling"
    ],
    specifications: {
      "Step Bolt Size": "M16 x 175 mm (IS 10238) with two hex nuts",
      "Washers": "Square bevel washers & spring lock washers (IS 3063)",
      "Galvanizing": "Hot-dip galvanized as per IS 2629 / IS 1367",
      "Standard Compliance": "IS 10238 / IS 6639"
    },
    applications: [
      "Lineman climbing access on transmission tower legs",
      "Anti-theft protection for lower tower lattice panels",
      "Substation structure vibration-proof fastening"
    ]
  },
  {
    id: "substation-gantry-structures-aims",
    name: "Substation Gantry Structures & AIMS Assemblies",
    category: "AIMS & GI Towers",
    categoryId: "towers",
    shortDescription: "Air Insulated Modular Structures (AIMS), busbar gantries, and equipment support structures.",
    fullDescription: "Complete modular structural assemblies for 33kV, 132kV, and 220kV outdoor switchyards. Includes galvanized gantry column towers, cross beams, line drop supports, transformer take-off towers, and equipment support stands for CT/PTs, lightning arresters, and circuit breakers.",
    image: "/images/products/psc-pole-installation.jpg",
    gallery: [
      "/images/products/psc-pole-installation.jpg",
      "/images/products/transmission-tower.jpg",
      "/images/products/substation-gantry.svg"
    ],
    features: [
      "Modular AIMS design facilitates swift on-site bolted assembly without welding",
      "Pre-drilled mounting baseplates and equipment support cleats",
      "Complete assembly drawings and marked piece-part identification for rapid erection",
      "Galvanized tower foundation stubs and leg cleat assemblies included"
    ],
    specifications: {
      "Substation Ratings": "33 kV, 66 kV, 132 kV, 220 kV Switchyards",
      "Structure Types": "Tower Columns, Gantry Beams, CT/PT/LA Support Stands",
      "Zinc Coating": "Minimum 610 g/m² (IS 2629)",
      "Hardware Grade": "Hot-dip galvanized Grade 5.6 / 8.8 Bolts & Nuts"
    },
    applications: [
      "33/11kV and 132/33kV electric substation switchyards",
      "Industrial captive power plant step-up substations",
      "Renewable energy pooling substations"
    ]
  }
];

export function getAllProducts() {
  return PRODUCTS;
}

export function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

export function getProductsByCategory(categoryId) {
  if (!categoryId || categoryId === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.categoryId === categoryId);
}

export function searchProducts(query) {
  if (!query) return PRODUCTS;
  const q = query.toLowerCase().trim();
  return PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.shortDescription.toLowerCase().includes(q) ||
    p.fullDescription.toLowerCase().includes(q)
  );
}

export function getRelatedProducts(currentProductId, limit = 3) {
  const current = getProductById(currentProductId);
  if (!current) return [];
  return PRODUCTS
    .filter(p => p.id !== currentProductId && p.categoryId === current.categoryId)
    .slice(0, limit);
}
