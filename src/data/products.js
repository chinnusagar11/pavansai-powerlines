// Product catalog for Pavan Sai Power Lines organized across the 7 divisions.

export const PRODUCTS = [
  // =============================================================
  // 1. HT/LT OVERHEAD LINE MATERIALS (overhead-lines)
  // =============================================================
  {
    id: "pin-insulator-polymer-11kv",
    name: "11kV Composite Polymer Pin Insulators with Stems",
    category: "HT/LT Overhead Line Materials",
    categoryId: "overhead-lines",
    shortDescription: "3-Shed high-dielectric silicone polymer pin insulators with hot-dip galvanized mounting shank.",
    fullDescription: "Manufactured from high-grade hydrophobic composite silicone rubber over a high-tensile fiberglass reinforced plastic (FRP) rod. Features a 3-shed aerodynamic profile designed for 11kV distribution feeders, complete with a forged mild steel hot-dip galvanized mounting pin and locking nut.",
    image: "/images/products/pin-insulator-polymer-11kv.png",
    gallery: [
      "/images/products/pin-insulator-polymer-11kv.png",
      "/images/products/pin-insulator-polymer-33kv.png",
      "/images/products/psc-pole-installation.jpg"
    ],
    features: [
      "Hydrophobic silicone rubber housing naturally repels water droplets and prevents pollution flashover",
      "Supplied complete with hot-dip galvanized steel mounting pin (IS 2629 / IS 2633 compliant)",
      "High mechanical cantilever strength designed for distribution cross-arm mounting",
      "Extremely lightweight compared to traditional porcelain, eliminating transit breakage"
    ],
    specifications: {
      "Rated Voltage": "11 kV",
      "Highest System Voltage": "12 kV",
      "Cantilever Failing Load": "5 kN / 10 kN",
      "Creepage Distance": "320 mm minimum",
      "Impulse Withstand Voltage": "75 kV Peak",
      "Standard Compliance": "IS 1445 / IEC 61109 / REC Standards"
    },
    applications: [
      "11kV urban and rural overhead power distribution lines",
      "Distribution transformer substation incoming line supports",
      "Section and intermediate tangent pole line structures"
    ]
  },
  {
    id: "pin-insulator-polymer-33kv",
    name: "33kV Multi-Shed Composite Polymer Pin Insulators",
    category: "HT/LT Overhead Line Materials",
    categoryId: "overhead-lines",
    shortDescription: "8-Shed heavy-duty composite polymer pin insulators engineered for 33kV high tension networks.",
    fullDescription: "Engineered specifically for 33kV distribution and sub-transmission networks. Features an 8-shed composite silicone rubber envelope, high-voltage top groove conductor saddle collar, and heavy threaded steel mounting base. Provides superior withstand performance in high humidity, coastal, and heavily polluted industrial zones.",
    image: "/images/products/pin-insulator-polymer-33kv.png",
    gallery: [
      "/images/products/pin-insulator-polymer-33kv.png",
      "/images/products/pin-insulator-polymer-11kv.png",
      "/images/products/psc-pole-installation.jpg"
    ],
    features: [
      "Multi-shed alternating profile provides extra-long creepage distance against surface leakage",
      "Precision-machined top saddle allows secure conductor wire binding without slip",
      "Solid-core FRP rod ensures immense bending and cantilever strength",
      "Hot-dip galvanized threaded stud ensures rigid bolting to channel cross-arms"
    ],
    specifications: {
      "Rated Voltage": "33 kV",
      "Highest System Voltage": "36 kV",
      "Cantilever Failing Load": "10 kN",
      "Creepage Distance": "900 mm minimum",
      "Impulse Withstand Voltage": "170 kV Peak",
      "Standard Compliance": "IS 1445 / IEC 61109 / IS 731"
    },
    applications: [
      "33kV sub-transmission lines and 33/11kV primary substation entries",
      "Express industrial supply feeders and heavy power corridors",
      "High-pollution and chemical zone electrical lines"
    ]
  },
  {
    id: "polymer-disc-insulators-string",
    name: "HT Polymer Disc Insulator Tension Strings (70kN / 120kN)",
    category: "HT/LT Overhead Line Materials",
    categoryId: "overhead-lines",
    shortDescription: "Composite silicone polymer disc insulators for high tension overhead line tension and suspension strings.",
    fullDescription: "Manufactured for heavy mechanical loads on high-tension transmission and distribution lines. Featuring a silicone rubber housing, fiberglass core, and drop-forged hot-dip galvanized metal end fittings (Tongue & Clevis / Ball & Socket). Engineered to absorb extreme conductor tensile tension without puncture or mechanical failure.",
    image: "/images/products/polymer-disc-insulators-string.jpg",
    gallery: [
      "/images/products/polymer-disc-insulators-string.jpg",
      "/images/products/polymer-disc-tension-clamp.jpg",
      "/images/products/psc-pole-installation.jpg"
    ],
    features: [
      "High electro-mechanical failing load rating (70 kN / 90 kN / 120 kN)",
      "Zero internal puncture risk in aggressive atmospheric conditions",
      "Hot-dip galvanized malleable steel end fittings tested to IS 2486",
      "High strength-to-weight ratio simplifies line erection and reduces tower load"
    ],
    specifications: {
      "Failing Load Rating": "70 kN / 90 kN / 120 kN",
      "Coupling Configuration": "Ball & Socket / Tongue & Clevis",
      "Standard Compliance": "IS 731 / IEC 61109 / IS 3188",
      "Housing Material": "High-Temperature Vulcanized (HTV) Silicone Rubber",
      "Core Rod": "Boron-Free E-CR Fiberglass Reinforced Epoxy Rod"
    },
    applications: [
      "Tension strain points, terminal poles, and dead-end towers",
      "Overhead highway, railway, and river span crossing points",
      "33kV and 11kV suspension strings on double-circuit towers"
    ]
  },
  {
    id: "polymer-disc-tension-clamp",
    name: "Polymer Tension Insulator & Bolted Strain Clamp Assemblies",
    category: "HT/LT Overhead Line Materials",
    categoryId: "overhead-lines",
    shortDescription: "Pre-assembled polymer tension insulator linked to heavy-duty bolted aluminium alloy strain clamp.",
    fullDescription: "Supplied by Pavan Sai Power Lines for rapid overhead line conductor anchoring. Features a composite polymer strain insulator coupled directly to an aluminium alloy bolted tension strain clamp. Provides firm, non-slip mechanical grip on ACSR and AAAC conductors without deforming the outer conductor strands.",
    image: "/images/products/polymer-disc-tension-clamp.jpg",
    gallery: [
      "/images/products/polymer-disc-tension-clamp.jpg",
      "/images/products/polymer-disc-insulators-string.jpg",
      "/images/products/abc-hardware-tension-clamps.jpg"
    ],
    features: [
      "Holding strength exceeds 95% of the conductor's rated breaking strength (RBS)",
      "High-strength cast aluminium alloy body with bell-mouthed conductor grooves",
      "Hot-dip galvanized Grade 8.8 steel U-bolts, lock washers, and hex nuts",
      "Complete integrated unit eliminates assembly errors at the installation site"
    ],
    specifications: {
      "Conductor Compatibility": "Squirrel, Weasel, Rabbit, Dog, Panther (ACSR / AAAC)",
      "Holding Load": "45 kN to 90 kN",
      "Clamp Material": "Aluminium Alloy A6 / Grade 8.8 Galvanized Hardware",
      "Standard Compliance": "IS 2486 / IS 5561 / REC Specifications"
    },
    applications: [
      "Dead-end conductor terminations on PSC poles and lattice towers",
      "Substation feeder entry bays and take-off gantries",
      "Angle poles and strain towers in distribution networks"
    ]
  },
  {
    id: "aluminium-pg-clamps-connectors",
    name: "Aluminium Alloy PG Clamps & Substation Power Connectors",
    category: "HT/LT Overhead Line Materials",
    categoryId: "overhead-lines",
    shortDescription: "Heavy-duty bolted aluminium PG clamps, tee connectors, and NEMA 4-hole pad terminal connectors.",
    fullDescription: "Authentic high-grade aluminium alloy parallel groove (PG) clamps, tee connectors, and equipment terminal connectors supplied by Pavan Sai Power Lines. Manufactured per IS 5561 specifications with precision-cast grooves and hot-dip galvanized grade 8.8 clamping hardware. Engineered to provide high electrical conductivity, low contact resistance, and superior mechanical holding grip on ACSR, AAAC, and busbar conductors without conductor damage.",
    image: "/images/products/aluminium-pg-clamps-connectors.jpg",
    gallery: [
      "/images/products/aluminium-pg-clamps-connectors.jpg",
      "/images/products/abc-hardware-tension-clamps.jpg",
      "/images/products/polymer-disc-tension-clamp.jpg"
    ],
    features: [
      "Precision-cast parallel grooves provide maximum electrical contact surface and minimum contact resistance",
      "Supplied with Grade 8.8 hot-dip galvanized high-tensile steel bolts, nuts, and spring washers",
      "Spring washers maintain continuous contact pressure under cyclic thermal expansion and load variations",
      "High-purity corrosion-resistant aluminium alloy casting (LM6 / A6) designed for outdoor substation service",
      "Includes 4-hole NEMA spade terminal connectors for transformer bushing and switchgear terminations"
    ],
    specifications: {
      "Clamp Material": "High-Strength Aluminium Alloy LM6 / A6",
      "Hardware Grade": "Grade 8.8 Hot-Dip Galvanized Steel (IS 1367)",
      "Conductor Compatibility": "ACSR (Weasel to Zebra) & AAAC Conductors",
      "Rated Voltage": "11kV / 33kV / 66kV / 132kV Grid Class",
      "Standard Compliance": "IS 5561 / REC Standards",
      "Configurations": "2-Bolt, 3-Bolt, 4-Bolt PG & 4-Hole NEMA Terminal Pad"
    },
    applications: [
      "Parallel conductor splicing and jumper loop connections on overhead transmission lines",
      "Distribution transformer HT bushing connections to lightning arresters and drop-out fuses",
      "Substation busbar tap-offs, gang-operated AB switch terminals, and disconnector connections",
      "Industrial HT switchyard power connections"
    ]
  },
  {
    id: "abc-hardware-tension-clamps",
    name: "Overhead Line Hardware & Suspension Tension Clamps",
    category: "HT/LT Overhead Line Materials",
    categoryId: "overhead-lines",
    shortDescription: "Hot-dip galvanized and aluminium line hardware, suspension clamps, and line tension fittings.",
    fullDescription: "Complete line hardware fittings for overhead distribution lines. Includes heavy-duty aluminium alloy suspension clamps with neoprene liners, dead-end wedge tension clamps, pole mounting brackets, and corrosion-resistant fasteners designed for smooth conductor support and minimal vibration wear.",
    image: "/images/products/abc-hardware-tension-clamps.jpg",
    gallery: [
      "/images/products/abc-hardware-tension-clamps.jpg",
      "/images/products/pole-hardware-fittings.jpg",
      "/images/products/vibration-damper.jpg"
    ],
    features: [
      "Precision-machined aluminium body resists weathering and atmospheric corrosion",
      "High mechanical holding power with gentle contoured clamps protecting conductor insulation",
      "All steel components hot-dip galvanized to IS 2629 standards",
      "Compatible with standard DISCOM and REC pole mounting practices"
    ],
    specifications: {
      "Material": "Extruded / Cast Aluminium Alloy with Neoprene Cushions",
      "Fasteners": "Hot-dip galvanized Grade 5.6 / 8.8 Steel Bolts",
      "Messenger Range": "25 mm² to 95 mm² Insulated / Bare Messengers",
      "Standard Compliance": "IS 14255 / REC Specifications / IS 2486"
    },
    applications: [
      "Overhead line suspension and tangent support points",
      "Aerial bundled cable (ABC) straight run installations",
      "Conductor angle turns and tension dead-ends"
    ]
  },
  {
    id: "stockbridge-vibration-damper",
    name: "Stockbridge Vibration Dampers for Overhead Conductors",
    category: "HT/LT Overhead Line Materials",
    categoryId: "overhead-lines",
    shortDescription: "4-Resonance Stockbridge vibration damper with clamp, messenger cable, and resonant weights.",
    fullDescription: "Stockbridge vibration dampers engineered to dissipate wind-induced aeolian vibrations and high-frequency oscillations on overhead conductors. Features bell-mouthed aluminium conductor clamp, multi-strand flexible steel messenger cable, and calibrated galvanized weights protecting ACSR and AAAC conductors from fatigue failure.",
    image: "/images/products/vibration-damper.jpg",
    gallery: [
      "/images/products/vibration-damper.jpg",
      "/images/products/abc-hardware-tension-clamps.jpg"
    ],
    features: [
      "Absorbs high-frequency aeolian vibration energy across broad wind velocity ranges",
      "Bell-mouthed clamp design prevents stress concentration on outer conductor strands",
      "Galvanized cast iron damper weights permanently locked onto messenger cable",
      "Protects transmission and distribution lines from strand breakage at support clamps"
    ],
    specifications: {
      "Conductor Diameter Range": "10.0 mm to 35.0 mm",
      "Damper Weights": "Galvanized Cast Iron / Forged Steel",
      "Messenger Cable": "19-Strand High-Tensile Galvanized Steel Cable",
      "Standard Compliance": "IS 9782 / IEC 61897"
    },
    applications: [
      "Long-span transmission lines crossing open flat terrain, highways, and rivers",
      "High-tension 33kV, 66kV, and 132kV overhead conductor corridors",
      "Substation terminal take-off spans"
    ]
  },
  {
    id: "stay-sets-hardware",
    name: "Complete Stay Sets & Stay Wire Assemblies",
    category: "HT/LT Overhead Line Materials",
    categoryId: "overhead-lines",
    shortDescription: "Galvanized stay rod, stay bow with ratchet nut, heavy anchor plate, and stay wire fittings.",
    fullDescription: "Pavan Sai Power Lines supplies complete, certified stay set assemblies for guy-wire anchoring of overhead distribution poles. Includes a hot-dip galvanized high-tensile stay rod, stay bow with smooth ratchet nut, cast iron or fabricated steel anchor plate, thimbles, and high-tensile stranded stay wire.",
    image: "/images/products/stay-sets-hardware.jpg",
    gallery: [
      "/images/products/stay-sets-hardware.jpg",
      "/images/products/stay-wire-thimbles-grips.jpg",
      "/images/products/psc-pole-installation.jpg"
    ],
    features: [
      "Uniform hot-dip galvanizing exceeding 80 microns (IS 2633 compliant) for underground corrosion resistance",
      "Precision thread cutting on stay bow allows accurate on-site conductor tension adjustment",
      "Heavy cast iron base plate ensures firm subterranean mechanical anchoring against ground pull",
      "Compatible with 7/8 SWG, 7/10 SWG, and 7/12 SWG high-tensile galvanized stay wire"
    ],
    specifications: {
      "Stay Rod Dimensions": "1.8 Meter / 2.4 Meter Length (16 mm / 20 mm / 25 mm Dia)",
      "Anchor Plate Size": "200 x 200 x 6 mm / 300 x 300 x 8 mm",
      "Zinc Coating": "Minimum 80 Microns Hot-Dip Galvanized",
      "Standard Compliance": "IS 2141 / IS 2629 / REC Construction Standards"
    },
    applications: [
      "Dead-end tension anchoring of PSC and steel tubular poles",
      "Angle and corner distribution pole guy line reinforcement",
      "Substation terminal support guy anchoring"
    ]
  },
  {
    id: "stay-wire-thimbles-grips",
    name: "Galvanized Stay Wire Thimbles & Guy Dead-End Grips",
    category: "HT/LT Overhead Line Materials",
    categoryId: "overhead-lines",
    shortDescription: "Drop-forged hot-dip galvanized steel thimbles and guy dead-end grips for stay wire loops.",
    fullDescription: "Heavy open-pattern and closed-pattern galvanized steel thimbles and preformed dead-end grips. Engineered to protect stranded galvanized stay wire loops from sharp bends, crushing, kink formation, and abrasive wear at the stay bow and pole clamp connection points.",
    image: "/images/products/stay-wire-thimbles-grips.jpg",
    gallery: [
      "/images/products/stay-wire-thimbles-grips.jpg",
      "/images/products/stay-sets-hardware.jpg"
    ],
    features: [
      "Smooth contoured wire rope groove prevents crushing of individual stay wire strands",
      "Drop-forged carbon steel body hot-dip galvanized to IS 2629",
      "Resists decades of continuous outdoor weathering and soil moisture",
      "Manufactured strictly according to DISCOM and REC utility drawings"
    ],
    specifications: {
      "Stay Wire Compatibility": "7/8 SWG (4.0mm), 7/10 SWG (3.15mm), 7/12 SWG (2.5mm)",
      "Material": "Drop-Forged Carbon Steel",
      "Coating": "Hot-Dip Galvanized to IS 2629 (Minimum 80 Microns)",
      "Standard Compliance": "IS 2486 (Part II)"
    },
    applications: [
      "Stay rod ratchet turnbuckle loop connections",
      "Pole-top stay clamp attachment loops",
      "Guy wire tension dead-end terminations"
    ]
  },
  {
    id: "v-cross-arms-galvanized",
    name: "Hot-Dip Galvanized V-Cross Arms & Top Brackets",
    category: "HT/LT Overhead Line Materials",
    categoryId: "overhead-lines",
    shortDescription: "Heavy structural steel V-cross arms and top brackets with heavy hot-dip galvanized rust protection.",
    fullDescription: "Fabricated from prime structural mild steel channels and angle sections conforming to IS 2062. Heavy-duty hot-dip galvanizing provides complete atmospheric rust protection. Features CNC pre-punched hole patterns for direct mounting of 11kV/33kV pin insulators, disc tension hardware, and pole clamping bolts.",
    image: "/images/products/v-cross-arms-galvanized.png",
    gallery: [
      "/images/products/v-cross-arms-galvanized.png",
      "/images/products/v-cross-arms-red-oxide.jpg",
      "/images/products/channel-cross-arms.jpg",
      "/images/products/psc-pole-installation.jpg"
    ],
    features: [
      "Heavy uniform zinc coating exceeding 610 g/m² (85+ microns) resisting corrosion",
      "CNC punched hole spacing matching Telangana and AP DISCOM construction standards",
      "V-shape geometry provides optimal electrical phase clearance between conductors",
      "Supplied with galvanized pole back clamps and high-tensile mounting bolts"
    ],
    specifications: {
      "Steel Grade": "IS 2062 Grade E250 Mild Steel",
      "Channel Section": "75 x 40 x 4.8 mm / 100 x 50 x 5.0 mm",
      "Length": "1070 mm / 1500 mm / 2200 mm",
      "Galvanizing Standard": "IS 2629 / IS 4759"
    },
    applications: [
      "11kV and 33kV overhead intermediate distribution poles",
      "Double pole (DP) transformer mounting structures",
      "Tangent and angle pole line assemblies"
    ]
  },
  {
    id: "v-cross-arms-red-oxide",
    name: "MS Structural V-Cross Arms (Red Oxide Primer Finish)",
    category: "HT/LT Overhead Line Materials",
    categoryId: "overhead-lines",
    shortDescription: "High-strength mild steel V-cross arms pre-coated in anti-rust red oxide primer.",
    fullDescription: "Supplied in red-oxide protective primer finish for contractor customization or field painting. Fabricated from certified IS 2062 Grade E250 structural steel with high weld integrity, smooth deburred edges, and pre-punched holes for swift field assembly onto PSC concrete distribution poles.",
    image: "/images/products/v-cross-arms-red-oxide.jpg",
    gallery: [
      "/images/products/v-cross-arms-red-oxide.jpg",
      "/images/products/v-cross-arms-galvanized.png",
      "/images/products/channel-cross-arms.jpg"
    ],
    features: [
      "Uniform double-coat red oxide primer protects against oxidation in storage and transit",
      "Fabricated from structural channel and angle steel conforming to IS 2062",
      "Pre-drilled mounting holes for insulator pins and pole back clamps",
      "Cost-effective solution for large-scale rural electrification projects"
    ],
    specifications: {
      "Steel Section": "75 x 40 mm Channel / 50 x 50 x 6 mm Angle",
      "Coating": "Anti-Rust Synthetic Red Oxide Primer",
      "Standard Compliance": "IS 2062 / REC Construction Standards"
    },
    applications: [
      "Rural distribution feeder construction projects",
      "Agricultural power line extension schemes",
      "Temporary and contractor-customized line structures"
    ]
  },
  {
    id: "channel-cross-arms",
    name: "Heavy MS & GI Structural Channel Cross Arms",
    category: "HT/LT Overhead Line Materials",
    categoryId: "overhead-lines",
    shortDescription: "Precision-cut mild steel and galvanized structural channels for distribution cross-arms and DP structures.",
    fullDescription: "Heavy hot-rolled structural steel channels manufactured with accurate hole patterns conforming to REC and state power utility drawings. Widely used for horizontal conductor support, double-pole (DP) transformer mounting beds, and line switchgear mounting.",
    image: "/images/products/channel-cross-arms.jpg",
    gallery: [
      "/images/products/channel-cross-arms.jpg",
      "/images/products/v-cross-arms-galvanized.png",
      "/images/products/v-cross-arms-red-oxide.jpg"
    ],
    features: [
      "Heavy load-bearing capacity under high mechanical conductor spans",
      "Available in hot-dip galvanized or red oxide primer finishes",
      "Pre-drilled mounting holes for pin insulators, surge arresters, and clamps",
      "Deburred ends and clean square cuts ensure rapid on-site fitment"
    ],
    specifications: {
      "Channel Sizes": "75 x 40 x 4.8 mm / 100 x 50 x 5.0 mm / 125 x 65 x 5.3 mm",
      "Length Options": "1.0 Meter, 1.2 Meter, 1.5 Meter, 2.2 Meter",
      "Steel Grade": "IS 2062 Grade E250 Mild Steel",
      "Standard Compliance": "IS 2062 / IS 2629 / REC Standards"
    },
    applications: [
      "Overhead distribution cross arms and horizontal brackets",
      "Double pole (DP) transformer mounting beds and surge arrester channels",
      "Substation busbar support gantry channels"
    ]
  },
  {
    id: "pole-hardware-fittings",
    name: "Galvanized Pole Hardware, Clamps & Insulator Pins",
    category: "HT/LT Overhead Line Materials",
    categoryId: "overhead-lines",
    shortDescription: "Pole back clamps, shackle fittings, insulator pins, bolts, and galvanized mounting straps.",
    fullDescription: "Complete line hardware fittings manufactured from high-tensile mild steel with hot-dip galvanizing. Includes PSC pole clamps, cross-arm back clamps, D-shackle straps, earth wire clamps, forged insulator pins, and mounting bolts.",
    image: "/images/products/pole-hardware-fittings.jpg",
    gallery: [
      "/images/products/pole-hardware-fittings.jpg",
      "/images/products/psc-pole-installation.jpg",
      "/images/products/stay-sets-hardware.jpg"
    ],
    features: [
      "Accurately contoured to fit standard 8.0m, 9.0m, and 9.5m concrete PSC poles",
      "Heavy uniform zinc coating of minimum 80 microns resisting outdoor corrosion",
      "Supplied complete with hot-dip galvanized Grade 5.6 hex bolts, nuts, and spring washers",
      "High mechanical yield strength prevents slipping or deformation under line tension"
    ],
    specifications: {
      "Steel Section": "50 x 6 mm / 65 x 6 mm / 75 x 8 mm Flat & Angle Bars",
      "Bolt Sizes": "M16 x 200 mm / M16 x 250 mm Galvanized Bolts",
      "Galvanizing": "Minimum 80 Microns as per IS 2629 / IS 4759",
      "Standard Compliance": "IS 2486 / REC Guidelines"
    },
    applications: [
      "Concrete PSC and steel tubular pole hardware mounting",
      "Cross-arm and top bracket pole clamping",
      "Distribution line hardware assembly"
    ]
  },
  {
    id: "psc-pole-installation",
    name: "Prestressed Concrete (PSC) Pole Structure Assemblies",
    category: "HT/LT Overhead Line Materials",
    categoryId: "overhead-lines",
    shortDescription: "Complete structural line hardware package for 8m and 9m concrete PSC distribution poles.",
    fullDescription: "Pavan Sai Power Lines packages complete structural mounting hardware sets for 11kV and LT overhead lines. Includes V-cross arms, top brackets, pole clamps, pin insulators, disc tension sets, earth bonding flats, and stay set assemblies ready for immediate site erection.",
    image: "/images/products/psc-pole-installation.jpg",
    gallery: [
      "/images/products/psc-pole-installation.jpg",
      "/images/products/v-cross-arms-galvanized.png",
      "/images/products/pin-insulator-polymer-11kv.png"
    ],
    features: [
      "All-in-one packaging eliminates mismatched hardware on installation sites",
      "Verified fitment on standard 8.0m (140 kg / 200 kg) and 9.0m (300 kg) PSC poles",
      "Adheres strictly to Telangana and Andhra Pradesh DISCOM construction practices",
      "Supplied with certified test reports and standard factory warranties"
    ],
    specifications: {
      "Pole Class Compatibility": "8.0 Meter (140/200 kg WL) & 9.0 Meter (300 kg WL) PSC Poles",
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

  // =============================================================
  // 2. TRANSFORMER SPARES (transformer-spares)
  // =============================================================
  {
    id: "transformer-bushings-polymer-33kv",
    name: "HT & LT Transformer Bushings (11kV & 33kV)",
    category: "Transformer Spares",
    categoryId: "transformer-spares",
    shortDescription: "High-dielectric polymer and porcelain bushings with copper/brass stems for distribution transformers.",
    fullDescription: "Pavan Sai Power Lines supplies certified high-dielectric composite polymer and glazed electrical porcelain bushings for distribution and power transformers. Features high-purity electrolytic copper conductor stems, weather-shed silicone rubber profiles, and oil-resistant nitrile sealing washers conforming to IS 3347.",
    image: "/images/products/pin-insulator-polymer-33kv.png",
    gallery: [
      "/images/products/pin-insulator-polymer-33kv.png",
      "/images/products/pin-insulator-polymer-11kv.png",
      "/images/products/psc-pole-installation.jpg"
    ],
    features: [
      "Superior puncture and thermal withstand strength under continuous oil operating temperatures",
      "Supplied complete with copper stem rods, brass terminal nuts, and washers",
      "Available for 1.1kV LT, 11kV HT, 22kV HT, and 33kV HT transformer ratings",
      "Hydrophobic silicone sheds protect against moisture tracking and flashovers"
    ],
    specifications: {
      "Voltage Ratings": "1.1 kV (LT) / 11 kV (HT) / 22 kV / 33 kV (HT)",
      "Current Ratings": "250 A, 630 A, 1000 A, 2000 A",
      "Standard Compliance": "IS 3347 / DIN 42530 / DIN 42531",
      "Stem Conductor": "High-Conductivity Electrolytic Copper / Brass"
    },
    applications: [
      "Distribution transformer HT and LT terminal bushings (25 kVA - 2500 kVA)",
      "Power transformer tertiary and neutral leads",
      "Transformer rewinding and repair workshops"
    ]
  },

  // =============================================================
  // 3. AB SWITCHES (AIR BREAK) (ab-switches)
  // =============================================================
  {
    id: "ab-switch-gang-operated",
    name: "11kV Gang-Operated Air Break (AB) Switch (200A / 400A)",
    category: "AB Switches (Air Break)",
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
    id: "ab-switch-isolator",
    name: "33kV 800A Gang-Operated Air Break (AB) Switch / Isolator",
    category: "AB Switches (Air Break)",
    categoryId: "ab-switches",
    shortDescription: "Heavy transmission grade 33kV 800A outdoor triple-pole gang-operated disconnector switch with post insulators.",
    fullDescription: "Outdoor triple-pole gang-operated air break disconnect switch designed for 33kV overhead lines and substation bays. Rated for 800A continuous current carrying capacity, mounted on a rigid hot-dip galvanized base channel. Equipped with high-conductivity electrolytic copper contacts with silver plating, phosphor bronze backup springs, and robust manual gang-operating linkage with padlockable off-position.",
    image: "/images/products/ab-switch-33kv-800a.jpg",
    gallery: [
      "/images/products/ab-switch-33kv-800a.jpg",
      "/images/products/ab-switch-isolator.jpg",
      "/images/products/ab-switch-gang-operated.png"
    ],
    features: [
      "Heavy-duty 800A rated electrolytic copper jaw and blade contacts with silver plating",
      "High mechanical strength 33kV post insulators (porcelain / polymer options)",
      "Torsion-free hot-dip galvanized steel channel base resistant to heavy switching stress",
      "Adjustable copper arcing horns ensure quick quenching of breaking arcs",
      "Complete with vertical operating pipe, guide bearings, handle, and padlocking facility"
    ],
    specifications: {
      "Rated Voltage": "33 kV (Max 36 kV)",
      "Rated Normal Current": "800 Amperes (Continuous)",
      "Configuration": "Triple Pole, Gang-Operated (TPGO)",
      "Short Time Current": "25 kA for 3 Seconds",
      "Impulse Withstand Voltage": "170 kV Peak",
      "One-Minute Power Frequency": "70 kV rms",
      "Standard Compliance": "IS 9921 (Parts 1-5) / IEC 62271-102"
    },
    applications: [
      "33kV line sectionalizing and feeder bay isolation",
      "33/11kV primary distribution substation incoming/outgoing bays",
      "Industrial private high-voltage substation incoming lines",
      "Renewable energy (solar/wind) 33kV grid interconnects"
    ]
  },
  {
    id: "ab-switch-11kv-800a",
    name: "11kV 800A Heavy-Duty Gang-Operated Air Break (AB) Switch",
    category: "AB Switches (Air Break)",
    categoryId: "ab-switches",
    shortDescription: "Heavy-duty 11kV 800A outdoor triple-pole air break switch for major distribution feeders and high-load industrial connections.",
    fullDescription: "High-capacity 11kV 800 Amps outdoor triple-pole gang-operated air break switch designed for heavy current distribution feeders and industrial substations. Constructed with high-pressure silver-plated electrolytic copper contacts, reinforced galvanized channel chassis, and robust operating linkage engineered for reliable isolation under full load conditions.",
    image: "/images/products/ab-switch-11kv-800a.jpg",
    gallery: [
      "/images/products/ab-switch-11kv-800a.jpg",
      "/images/products/ab-switch-gang-operated.png",
      "/images/products/ab-switch.jpg"
    ],
    features: [
      "800A continuous current capacity with low temperature rise per IS 9921",
      "High-pressure wiping action contacts remove surface oxide film during each operation",
      "Arcing horns made of electrolytic copper wire safely break magnetizing and charging currents",
      "Heavy ISMC 100x50 mm galvanized channel base prevents pole misalignment",
      "Supplied complete with downpipe, operating handle, and padlock latch"
    ],
    specifications: {
      "Rated Voltage": "11 kV (Max 12 kV)",
      "Rated Current": "800 Amperes",
      "Rated Frequency": "50 Hz",
      "Short Time Current Rating": "25 kA for 1 sec / 3 sec",
      "Impulse Withstand Voltage": "75 kV Peak",
      "Insulation Medium": "Air Break (Atmospheric Air)",
      "Standard Compliance": "IS 9921 / IS 1818 / DISCOM Specifications"
    },
    applications: [
      "11kV high-density feeder main line sectionalizing",
      "Industrial HT consumer metering yard and incoming isolation",
      "Distribution substation 11kV busbar and breaker bypass isolation",
      "Overhead line junction and ring main tap-off points"
    ]
  },
  {
    id: "ab-switch-11kv-400a-double-break",
    name: "11kV 400A Double Break Gang-Operated Air Break (AB) Switch",
    category: "AB Switches (Air Break)",
    categoryId: "ab-switches",
    shortDescription: "11kV 400A double break center-rotating post isolator with dual air gap interruption for enhanced safety.",
    fullDescription: "Premium 11kV 400 Amps Double Break outdoor gang-operated air break switch featuring three insulator posts per phase (two fixed terminal posts and one rotating center post). The rotating center post swings the central cross-arm blade to create two simultaneous air gaps per phase, doubling the dielectric clearance, halving recovery arc stress, and ensuring maximum safety for maintenance crews.",
    image: "/images/products/ab-switch-11kv-400a-double-break.jpg",
    gallery: [
      "/images/products/ab-switch-11kv-400a-double-break.jpg",
      "/images/products/ab-switch-gang-operated.png",
      "/images/products/ab-switch.jpg"
    ],
    features: [
      "Double Break design creates two distinct series air gaps per phase for superior isolation",
      "Center-rotating post mechanism requires significantly lower operating torque",
      "Self-aligning high-pressure copper jaw contacts ensure uniform contact pressure",
      "Dual divergence arcing horns prevent contact burning and pitting",
      "Heavy hot-dip galvanized steel chassis with ball bearing / bronze bush pivot points"
    ],
    specifications: {
      "Rated Voltage": "11 kV (Max 12 kV)",
      "Rated Normal Current": "400 Amperes",
      "Operating Type": "Double Break, Horizontal Center-Rotating Post",
      "Insulators per Phase": "3 Posts (2 Fixed Outer, 1 Rotating Center)",
      "Short Time Withstand": "16 kA for 3 Seconds",
      "Impulse Withstand Voltage": "75 kV Peak (Across Gap: 85 kV)",
      "Standard Compliance": "IS 9921 / REC Specification 11/1987"
    },
    applications: [
      "11kV critical feeder sectionalizing where double isolation is mandatory",
      "Substation transformer incoming and line isolation bays",
      "Industrial infrastructure and railway traction tap-off lines",
      "Urban distribution grids requiring low-maintenance isolators"
    ]
  },
  {
    id: "ab-switch-horn-gap",
    name: "Horn Gap (HG) Fuse Units (11kV & 33kV)",
    category: "AB Switches (Air Break)",
    categoryId: "ab-switches",
    shortDescription: "Outdoor channel-mounted horn gap fuse units for distribution transformer short-circuit protection.",
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
    id: "ab-switch-disconnector-assembly",
    name: "Air Break Switch Disconnector Mechanism & Spare Parts",
    category: "AB Switches (Air Break)",
    categoryId: "ab-switches",
    shortDescription: "Genuine replacement male/female copper contacts, arcing horns, and operating handles for AB switches.",
    fullDescription: "Pavan Sai Power Lines maintains comprehensive stock of replacement parts for field maintenance of 11kV and 33kV air break switches. Includes silver-plated moving blades, fixed jaw contacts, tension springs, flexible copper braids, and heavy padlockable operating handles.",
    image: "/images/products/ab-switch.jpg",
    gallery: [
      "/images/products/ab-switch.jpg",
      "/images/products/ab-switch-gang-operated.png"
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

  // =============================================================
  // 3. AAAC & ACSR CONDUCTORS (conductors)
  // =============================================================
  {
    id: "acsr-conductor-drums",
    name: "ACSR Conductors in Wooden Drums (Squirrel to Zebra)",
    category: "AAAC & ACSR Conductors",
    categoryId: "conductors",
    shortDescription: "Aluminium Conductor Steel Reinforced supplied in heavy wooden drums for high-tensile power transmission.",
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
    id: "aaac-conductors-drum-banner",
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
    id: "aerial-bundled-cable-abc",
    name: "LT Aerial Bunched Cables (16 sqmm - 95 sqmm XLPE Insulated)",
    category: "AAAC & ACSR Conductors",
    categoryId: "conductors",
    shortDescription: "1.1kV cross-linked polyethylene (XLPE) insulated self-supporting LT Aerial Bunched Cables from 16 sqmm to 95 sqmm.",
    fullDescription: "Supplied for modern, safe, and anti-theft low tension overhead power distribution networks. Manufactured with compact circular stranded EC grade aluminium phase conductors insulated with carbon-loaded crosslinked polyethylene (XLPE), twisted around a high-tensile bare or insulated aluminium alloy messenger neutral conductor. Available in all standard sizes from 16 sqmm up to 95 sqmm.",
    image: "/images/products/lt-aerial-bunched-cable-16-95sqmm.jpg",
    gallery: [
      "/images/products/lt-aerial-bunched-cable-16-95sqmm.jpg",
      "/images/products/aerial-bundled-cable-abc.jpg",
      "/images/products/abc-hardware-tension-clamps.jpg"
    ],
    features: [
      "Available in complete size spectrum: 16 sqmm, 25 sqmm, 35 sqmm, 50 sqmm, 70 sqmm, and 95 sqmm",
      "Weather-resistant carbon-black XLPE insulation protects against intense UV radiation and atmospheric moisture",
      "Completely prevents power theft and unauthorized direct hooking on LT distribution corridors",
      "Eliminates phase-to-phase and phase-to-earth faults caused by high winds or falling tree branches",
      "Lightweight self-supporting assembly enables longer spans and reduces pole loading"
    ],
    specifications: {
      "Voltage Grade": "1.1 kV (1100 Volts) Working Voltage",
      "Size Range": "16 sqmm, 25 sqmm, 35 sqmm, 50 sqmm, 70 sqmm, 95 sqmm",
      "Core Configurations": "1-Core, 3-Phase + 1 Messenger, 3-Phase + Messenger + Street Light (16 sqmm)",
      "Conductor Material": "EC Grade H2/H4 Stranded Aluminium (IS 8130)",
      "Insulation Material": "Cross-Linked Polyethylene (XLPE) per IS 14255",
      "Messenger Conductor": "Heat-Treated Aluminium-Magnesium-Silicon Alloy (IS 398 Part 4)",
      "Standard Compliance": "IS 14255 / REC Specifications / Utility Approved"
    },
    applications: [
      "Urban low tension distribution in crowded commercial and residential streets",
      "Rural electrification anti-theft conversion projects under RDSS schemes",
      "Forest, orchard, and heavily wooded areas prone to line touching",
      "Industrial estate internal power distribution networks"
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
    id: "aac-aaac-acsr-comparison",
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

  // =============================================================
  // 4. EARTHING MATERIALS (earthing)
  // =============================================================
  {
    id: "copper-bonded-earth-rods",
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
    id: "chemical-earth-electrodes",
    name: "Heavy-Duty Chemical Pipe-in-Pipe Earth Electrodes",
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
  {
    id: "gi-perforated-earthing-pipes",
    name: "GI Perforated Earthing Pipes with Funnels & Driving Tips",
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
    id: "copper-earth-wire",
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

  // =============================================================
  // 5. INDUSTRIAL ELECTRICALS & CABLES (industrial-electricals)
  // =============================================================
  {
    id: "ht-xlpe-power-cable",
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

  // =============================================================
  // 6. AIMS & GI TOWERS (towers)
  // =============================================================
  {
    id: "transmission-tower",
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
    category: "All MS & GI Towers",
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
    id: "substation-structures-11kv-33kv",
    name: "11kV / 33kV Substation Gantry Structures & Mounting Hardware",
    category: "All MS & GI Towers",
    categoryId: "towers",
    shortDescription: "Prefabricated hot-dip galvanized steel gantry structures, busbar supports, and equipment mounting frames for 11kV & 33kV substations.",
    fullDescription: "Pavan Sai Power Lines supplies complete fabricated and hot-dip galvanized structural steel materials for 11kV and 33kV outdoor distribution substations. Sourced to REC and state DISCOM specifications, including transformer mounting beams, isolator/AB switch gantries, busbar support columns, lightning arrester stubs, and CT/PT support structures.",
    image: "/images/products/substation-structures-11kv-33kv.jpg",
    gallery: [
      "/images/products/substation-structures-11kv-33kv.jpg",
      "/images/products/transmission-tower.jpg",
      "/images/products/ab-switch-gang-operated.png"
    ],
    features: [
      "Manufactured from high-strength structural steel conforming to IS 2062 Grade E250",
      "Heavy uniform hot-dip galvanizing per IS 4759 (minimum 610 g/m²) for superior corrosion resistance",
      "Pre-punched CNC bolt holes ensuring flawless on-site fit without field drilling or welding",
      "Designed to withstand maximum short-circuit electro-dynamic forces and extreme wind loads",
      "Supplied complete with galvanized foundation bolts, step bolts, and connecting hardware"
    ],
    specifications: {
      "Voltage Rating": "11 kV & 33 kV Substation Corridors",
      "Material Grade": "Structural Steel IS 2062 Grade E250 (Fe 410W)",
      "Galvanizing Standard": "IS 2629 / IS 4759 (Min 86 Microns / 610 g/m²)",
      "Supported Equipment": "Transformers, AB Switches, Circuit Breakers, CT/PT, LAs",
      "Wind Zone Compliance": "Zone II, III & IV per IS 802 / IS 875",
      "Supply Scope": "Gantries, Columns, Beams, Equipment Supports & Hardware"
    },
    applications: [
      "11kV & 33kV rural and urban distribution substations",
      "Industrial dedicated 33kV incoming power intake switchyards",
      "Solar power plant evacuation and pooling substations",
      "Captive power plant gantry yard infrastructure"
    ]
  }
];

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}

export function getRelatedProducts(currentProductId, limit = 3) {
  const current = getProductById(currentProductId);
  if (!current) return [];
  return PRODUCTS.filter(
    (p) => p.id !== currentProductId && p.categoryId === current.categoryId
  ).slice(0, limit);
}
