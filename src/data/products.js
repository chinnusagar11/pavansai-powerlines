/**
 * Products Database for Pavan Sai Power Lines (PSPL)
 * 
 * Organized by the 7 primary business categories supplied by PSPL in Secunderabad, Telangana.
 * This structure makes it effortless to add, update, or remove products without a backend.
 */

export const PRODUCTS = [
  // -------------------------------------------------------------
  // 1. HT/LT OVERHEAD LINE MATERIALS
  // -------------------------------------------------------------
  {
    id: "ht-pin-insulators",
    name: "HT Pin Insulators (11kV & 33kV)",
    category: "HT/LT Overhead Line Materials",
    categoryId: "overhead-lines",
    shortDescription: "High-grade glazed porcelain and polymer pin insulators engineered for 11kV and 33kV distribution networks.",
    fullDescription: "Pavan Sai Power Lines supplies premium porcelain and composite silicone polymer pin insulators with galvanized steel pins. Designed to withstand severe environmental stress, high mechanical cantilever loads, and electrical surges on overhead transmission and distribution lines.",
    image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=800&q=80",
    features: [
      "Manufactured with high creepage distance suitable for polluted environments",
      "Supplied complete with hot-dip galvanized mild steel pins and nuts",
      "High mechanical cantilever strength conforming to IS / IEC standards",
      "Non-porous glaze finish resisting atmospheric dust and salt deposit"
    ],
    specifications: {
      "Voltage Class": "11 kV / 33 kV",
      "Material Options": "Glazed Electrical Porcelain / Silicone Polymer",
      "Pin Diameter": "20 mm / 24 mm Standard Shank",
      "Cantilever Strength": "5 kN / 10 kN",
      "Standard Compliance": "IS 1445 / IS 731 / IEC 60383",
      "Creepage Distance": "320 mm (11kV) / 900 mm (33kV)"
    },
    applications: [
      "11kV and 33kV rural and urban distribution lines",
      "Substation feeder busbar supports",
      "Overhead distribution feeder networks"
    ]
  },
  {
    id: "disc-insulators-strain-suspension",
    name: "HT Disc Insulators (70kN / 120kN)",
    category: "HT/LT Overhead Line Materials",
    categoryId: "overhead-lines",
    shortDescription: "Ball & Socket and Tongue & Clevis disc insulators for high tension tension and suspension strings.",
    fullDescription: "Supplied in standard 70kN, 90kN, and 120kN electro-mechanical failing loads for high tension overhead lines. Available in Ball & Socket (B&S) and Tongue & Clevis (T&C) configurations to form reliable suspension and tension strings for 11kV, 33kV, and higher voltage corridors.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
    features: [
      "High dielectric puncture strength in oil and air",
      "Heavy-duty galvanized malleable iron cap and forged steel pin",
      "Corrosion-resistant zinc sleeve protection available",
      "Suitable for double tension and suspension insulator strings"
    ],
    specifications: {
      "Failing Load": "70 kN / 90 kN / 120 kN",
      "Coupling Type": "Ball & Socket / Tongue & Clevis (IS 2486)",
      "Standard Disc Diameter": "255 mm / 280 mm",
      "Spacing": "145 mm / 146 mm",
      "Standard Compliance": "IS 731 / IS 3188 / IEC 60305"
    },
    applications: [
      "Tension points and dead-end terminal poles",
      "Overhead river and railway line crossings",
      "Transmission line suspension strings"
    ]
  },
  {
    id: "pg-clamps-hardware",
    name: "Parallel Groove (PG) Clamps & Line Hardware",
    category: "HT/LT Overhead Line Materials",
    categoryId: "overhead-lines",
    shortDescription: "High-conductivity extruded aluminium and bimetallic PG clamps for secure conductor tapping and jointing.",
    fullDescription: "High mechanical integrity PG clamps fabricated from corrosion-resistant aluminium alloy with high-tensile hot-dip galvanized bolts and spring washers. Ensures constant contact pressure and minimal joint resistance across ACSR and AAAC conductor joints without strand deformation.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
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
    id: "stay-sets-stay-wire",
    name: "Complete Stay Sets & Stay Wire",
    category: "HT/LT Overhead Line Materials",
    categoryId: "overhead-lines",
    shortDescription: "Complete stay assemblies with heavy anchor bow, stay rod, cast iron base plate, and high tensile stay wire.",
    fullDescription: "Robust stay set assemblies for guy-wire anchoring of overhead HT/LT distribution poles. Each set includes a hot-dip galvanized stay rod, stay bow with ratchet nut, heavy anchor plate, thimbles, and high-tensile stranded galvanized steel stay wire.",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80",
    features: [
      "Heavy uniform hot-dip galvanizing exceeding IS 2633 standards",
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
    id: "gi-cross-arms-top-brackets",
    name: "GI V-Cross Arms & Top Brackets",
    category: "HT/LT Overhead Line Materials",
    categoryId: "overhead-lines",
    shortDescription: "Heavy channel and angle iron hot-dip galvanized cross arms fabricated for 11kV/33kV pole line structures.",
    fullDescription: "Fabricated from prime structural steel channels and angles conforming to IS 2062, hot-dip galvanized to protect against rust and oxidation. Pre-punched for accurate fitting of pin insulators, disc tension hardware, and line earthing terminals.",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80",
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

  // -------------------------------------------------------------
  // 2. TRANSFORMER SPARES
  // -------------------------------------------------------------
  {
    id: "transformer-bushings-ht-lt",
    name: "HT & LT Transformer Bushings",
    category: "Transformer Spares",
    categoryId: "transformer-spares",
    shortDescription: "High-voltage and low-voltage porcelain bushings with brass and copper conductor rod assemblies.",
    fullDescription: "Pavan Sai Power Lines supplies a full line of HT and LT transformer porcelain bushings conforming to DIN and IS specifications. Complete with tin-plated electrolytic copper or brass stem rods, sealing rubber gaskets, washers, and terminal connector palms for distribution and power transformers.",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
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
    name: "11kV Air Break (AB) Switch (200A / 400A)",
    category: "AB Switches",
    categoryId: "ab-switches",
    shortDescription: "Triple Pole outdoor gang-operated Air Break disconnector switch for 11kV line sectionalizing.",
    fullDescription: "Heavy-duty 11kV 3-pole gang-operated outdoor Air Break switch mounted on hot-dip galvanized channel base. Features electrolytic copper contacts with hard silver plating, phosphor bronze backup springs, and smooth rotating operating mechanism for safe overhead line isolation.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
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
      "Standard Compliance": "IS 9921 / IEC 62271-102"
    },
    applications: [
      "11kV overhead distribution line sectionalizing and branch disconnection",
      "Distribution transformer substation incoming line isolation",
      "Feeder bypass and maintenance isolation"
    ]
  },
  {
    id: "ab-switches-33kv-630a",
    name: "33kV Gang-Operated AB Switch (630A / 800A)",
    category: "AB Switches",
    categoryId: "ab-switches",
    shortDescription: "Heavy transmission grade 33kV outdoor disconnector isolator with robust gang-operating linkage.",
    fullDescription: "Engineered for 33kV sub-transmission networks and 33/11kV substations. Designed with reinforced structural galvanized channel base, dual/triple post insulator stacks, self-aligning high-pressure finger contacts, and heavy downpipe operating mechanism with padlock arrangement.",
    image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=800&q=80",
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
    name: "AB Switch Spare Contacts & Operating Handles",
    category: "AB Switches",
    categoryId: "ab-switches",
    shortDescription: "Genuine replacement male/female copper contacts, arcing horns, and operating handles for AB switches.",
    fullDescription: "Pavan Sai Power Lines maintains comprehensive stock of replacement parts for field maintenance of 11kV and 33kV air break switches. Includes silver-plated moving blades, fixed jaw contacts, tension springs, flexible copper braids, and heavy padlockable operating handles.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    features: [
      "High grade electrolytic copper with uniform silver plating for low contact resistance",
      "Phosphor bronze / stainless steel pressure springs",
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
    name: "ACSR Conductors (Weasel, Rabbit, Dog, Panther)",
    category: "AAAC & ACSR Conductors",
    categoryId: "conductors",
    shortDescription: "Aluminium Conductor Steel Reinforced for long-span high tensile power transmission and distribution.",
    fullDescription: "Pavan Sai Power Lines supplies full drums of high-conductivity ACSR conductors. Constructed with concentric strands of high-purity EC grade aluminium wrapped around a central core of galvanized high-tensile steel wire. Combines superior electrical conductivity with optimal mechanical tensile strength for overhead spans.",
    image: "https://images.unsplash.com/photo-1509390144018-eeaf65052242?auto=format&fit=crop&w=800&q=80",
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
    shortDescription: "High-strength Al-Mg-Si alloy conductors providing superior corrosion resistance and reduced power loss.",
    fullDescription: "Constructed entirely from heat-treated Aluminium-Magnesium-Silicon (Almelec) alloy strands. AAAC conductors offer identical electrical resistance to equivalent ACSR sizes while eliminating the galvanic corrosion inherent in steel cores, resulting in superior performance in coastal, industrial, and humid terrains.",
    image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=800&q=80",
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

  // -------------------------------------------------------------
  // 5. EARTHING MATERIALS
  // -------------------------------------------------------------
  {
    id: "copper-bonded-chemical-earth-electrodes",
    name: "Copper Bonded Chemical Earth Electrodes",
    category: "Earthing Materials",
    categoryId: "earthing",
    shortDescription: "Molecularly bonded copper steel grounding electrodes with eco-friendly chemical compound.",
    fullDescription: "Engineered grounding electrodes manufactured by molecularly bonding 99.9% pure electrolytic copper over high-tensile carbon steel cores (minimum 254 microns / 10 mil copper thickness). Delivers superior fault dissipation and exceptional underground service life without flaking or corrosion.",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80",
    features: [
      "Molecular copper bonding exceeds UL 467 & IEEE 80 standards",
      "High tensile steel core allows deep pneumatic driving into hard soil",
      "Maintains low soil resistance when installed with earth enhancement compound",
      "Corrosion-resistant service life of 25+ years in aggressive soils"
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
    id: "gi-earthing-pipes-plates-flats",
    name: "GI Earthing Pipes, Plates & Earth Flats",
    category: "Earthing Materials",
    categoryId: "earthing",
    shortDescription: "Hot-dip galvanized perforated earthing pipes, heavy GI plates, and structural earth flats.",
    fullDescription: "Pavan Sai Power Lines supplies certified GI earthing equipment for utility and substation ground rings. Includes Class-B perforated earthing pipes with welded terminal flanges, heavy gauge cast iron / mild steel earth plates, and continuous hot-dip galvanized earth flats in various cross sections.",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    features: [
      "Perforated GI pipes ensure moisture absorption and backfill contact",
      "Heavy zinc coating of 80+ microns resists underground electrolytic decay",
      "Supplied with galvanized clamping hardware, funnel, and wire mesh",
      "Custom flat bar shearing and hole punching available for direct installation"
    ],
    specifications: {
      "GI Pipe Specs": "40 mm / 50 mm / 80 mm NB Class-B Pipes (3 Meter)",
      "GI Plate Sizes": "600 x 600 x 6 mm / 300 x 300 x 6 mm",
      "GI Flat Dimensions": "25x3 mm, 25x6 mm, 50x6 mm, 75x8 mm, 75x10 mm",
      "Galvanizing": "Hot-Dip Galvanized as per IS 4759 / IS 2629"
    },
    applications: [
      "HT/LT distribution pole body earthing and neutral grounding",
      "Substation perimeter grounding mat conductors",
      "Industrial manufacturing plant perimeter earth loops"
    ]
  },
  {
    id: "earth-enhancement-compound-pit-covers",
    name: "Earth Enhancement Compound & FRP Pit Covers",
    category: "Earthing Materials",
    categoryId: "earthing",
    shortDescription: "Low-resistivity carbon-based ground enhancing material and heavy-duty FRP earth pit inspection chambers.",
    fullDescription: "Specially formulated moisture-retaining conductive compound that dramatically lowers soil resistivity around earth electrodes. Paired with high-strength FRP / concrete earth pit inspection chambers with locking covers for straightforward maintenance testing.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
    features: [
      "Does not wash away, dissolve, or decompose over time",
      "Maintains constant ground resistance despite dry or seasonal climatic shifts",
      "Non-corrosive formulation neutral to copper and steel electrode metals",
      "FRP inspection chambers rated for heavy vehicular and pedestrian wheel loads"
    ],
    specifications: {
      "Compound Packaging": "25 kg moisture-proof HDPE bags",
      "Resistivity": "Less than 0.12 ohm-meter when cured",
      "Pit Chamber Material": "Heavy Duty FRP (Fiberglass Reinforced Polymer)",
      "Load Rating": "Class A / Class B / Heavy Duty 5-Ton Test"
    },
    applications: [
      "Rocky, sandy, or high soil resistivity installations",
      "Substation test pits and earth resistance measurement points",
      "Commercial solar farms and windmill power facilities"
    ]
  },

  // -------------------------------------------------------------
  // 6. INDUSTRIAL ELECTRICALS
  // -------------------------------------------------------------
  {
    id: "industrial-distribution-boxes-feeder-pillars",
    name: "LT Distribution Boxes & Feeder Pillars",
    category: "Industrial Electricals",
    categoryId: "industrial-electricals",
    shortDescription: "Weatherproof CRCA / FRP outdoor LT distribution boxes and multi-circuit feeder pillars.",
    fullDescription: "Outdoor floor-mounted and pole-mounted LT distribution boxes engineered for industrial plants and DISCOM distribution networks. Fabricated from sheet steel or FRP with electrostatic powder coating, IP55 weatherproof sealing, electrolytic copper/aluminium busbars, and internal cable spreaders.",
    image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=800&q=80",
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
    name: "Industrial Cable Glands, Lugs & Terminals",
    category: "Industrial Electricals",
    categoryId: "industrial-electricals",
    shortDescription: "Heavy-duty brass double compression cable glands, bimetallic crimping lugs, and copper terminals.",
    fullDescription: "Comprehensive industrial termination hardware for XLPE armoured and unarmoured power cables. Features nickel-plated brass double compression cable glands with flameproof weatherproof seals and heavy-duty electrolytic copper and bimetallic crimping lugs for secure cable terminations.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
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
    name: "HRC Fuse Links, Bases & Disconnectors",
    category: "Industrial Electricals",
    categoryId: "industrial-electricals",
    shortDescription: "High Rupturing Capacity (HRC) DIN & BS fuse links and heavy-duty ceramic fuse bases.",
    fullDescription: "Industrial-grade HRC fuse links engineered to provide fast-acting short-circuit and overload protection for low voltage systems. Tested for breaking capacities up to 80kA and 120kA at 415V/500V AC.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=800&q=80",
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
    id: "substation-gantry-structures-aims",
    name: "Substation Gantry Structures & AIMS Assemblies",
    category: "AIMS & GI Towers",
    categoryId: "towers",
    shortDescription: "Air Insulated Modular Structures (AIMS), busbar gantries, and equipment support structures.",
    fullDescription: "Complete modular structural assemblies for 33kV, 132kV, and 220kV outdoor switchyards. Includes galvanized gantry column towers, cross beams, line drop supports, transformer take-off towers, and equipment support stands for CT/PTs, lightning arresters, and circuit breakers.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
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
  },
  {
    id: "tower-foundation-stubs-structural-fasteners",
    name: "GI Tower Foundation Stubs & Fasteners",
    category: "AIMS & GI Towers",
    categoryId: "towers",
    shortDescription: "Foundation stub angles, cleat plates, step bolts, and hot-dip galvanized structural tower fasteners.",
    fullDescription: "Essential structural accessories for lattice tower erection and foundation casting. Supplies heavy stub angle sections with factory-welded cleat plates for concrete encasement, along with hot-dip galvanized step bolts with locknuts for safe lineman climbing access.",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80",
    features: [
      "Accurately angled stubs to match tower leg inclinations exactly",
      "Heavy duty step bolts with non-slip heads for lineman safety",
      "Hot-dip galvanized fasteners tested for minimum proof load and tensile strength",
      "Includes anti-theft security nuts and stainless steel anti-bird spikes"
    ],
    specifications: {
      "Stub Steel Grade": "IS 2062 Grade E250 / E350",
      "Bolt Sizes": "M16, M20, M24 in Lengths from 35 mm to 120 mm",
      "Step Bolts": "M16 x 175 mm Galvanized with Hex Nuts (IS 10238)",
      "Hardware Coating": "Hot Dip Galvanized to IS 1367 (Part XIII)"
    },
    applications: [
      "Transmission tower concrete foundation anchoring",
      "Tower maintenance access climbing paths",
      "Tower leg anti-theft retrofitting"
    ]
  }
];

// Helper functions for easy filtering and searching
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
