import fs from 'fs';
import path from 'path';

const outDir = 'd:/CDU/projects/Powerlines/public/images/products';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function svgWrapper(title, category, specTag, drawingSvg) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f0f7ff"/>
    </linearGradient>
    <linearGradient id="blueAccent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1d4ed8"/>
      <stop offset="100%" stop-color="#0ea5e9"/>
    </linearGradient>
    <linearGradient id="porcelainBrown" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#4a2511"/>
      <stop offset="35%" stop-color="#7c3f1d"/>
      <stop offset="70%" stop-color="#9a5327"/>
      <stop offset="100%" stop-color="#4a2511"/>
    </linearGradient>
    <linearGradient id="steelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#94a3b8"/>
      <stop offset="50%" stop-color="#cbd5e1"/>
      <stop offset="100%" stop-color="#64748b"/>
    </linearGradient>
    <linearGradient id="copperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#b45309"/>
      <stop offset="40%" stop-color="#f59e0b"/>
      <stop offset="75%" stop-color="#d97706"/>
      <stop offset="100%" stop-color="#92400e"/>
    </linearGradient>
    <linearGradient id="aluGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#cbd5e1"/>
      <stop offset="40%" stop-color="#f1f5f9"/>
      <stop offset="80%" stop-color="#e2e8f0"/>
      <stop offset="100%" stop-color="#94a3b8"/>
    </linearGradient>
    <linearGradient id="brassGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ca8a04"/>
      <stop offset="50%" stop-color="#fde047"/>
      <stop offset="100%" stop-color="#a16207"/>
    </linearGradient>
    <pattern id="gridPattern" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" stroke-width="0.8"/>
    </pattern>
    <filter id="cardShadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#0f172a" flood-opacity="0.08"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="600" height="400" fill="url(#bgGrad)"/>
  <rect width="600" height="400" fill="url(#gridPattern)" opacity="0.6"/>

  <!-- Blueprint Header Strip -->
  <rect x="0" y="0" width="600" height="42" fill="#ffffff" opacity="0.95"/>
  <line x1="0" y1="42" x2="600" y2="42" stroke="#e2e8f0" stroke-width="1.5"/>
  
  <!-- PSPL Logo & Category Header -->
  <rect x="24" y="11" width="20" height="20" rx="4" fill="#2563eb"/>
  <path d="M 34 14 L 29 22 L 33 22 L 31 28 L 39 19 L 34 19 Z" fill="#ffffff"/>
  <text x="52" y="25" font-family="Inter, sans-serif" font-size="11" font-weight="800" fill="#0f172a" letter-spacing="0.5">PAVAN SAI POWER LINES</text>
  <text x="200" y="25" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#64748b">• ${category.toUpperCase()}</text>

  <!-- Spec Tag Pill -->
  <rect x="440" y="10" width="136" height="22" rx="11" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
  <circle cx="452" cy="21" r="3.5" fill="#2563eb"/>
  <text x="462" y="25" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#1e40af">${specTag}</text>

  <!-- Central Technical Drawing Area -->
  <g transform="translate(0, 20)">
    ${drawingSvg}
  </g>

  <!-- Bottom Title Card Strip -->
  <rect x="24" y="342" width="552" height="44" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1" filter="url(#cardShadow)"/>
  <rect x="24" y="342" width="4" height="44" rx="2" fill="#2563eb"/>
  <text x="40" y="363" font-family="Poppins, Inter, sans-serif" font-size="13" font-weight="700" fill="#0f172a">${title}</text>
  <text x="40" y="377" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#64748b">Verified Utility Specification • Secunderabad, Telangana Supply</text>
  <rect x="490" y="352" width="74" height="24" rx="6" fill="#2563eb"/>
  <text x="527" y="368" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">PSPL CERT</text>
</svg>`;
}

const svgs = {};

// 1. Disc Insulator
svgs['disc-insulator.svg'] = svgWrapper(
  'HT Disc Insulator (70kN / 120kN)',
  'HT/LT Overhead Line Materials',
  'IS 731 / IEC 60305',
  `<!-- Upper Hardware Cap -->
  <path d="M 270 70 L 330 70 L 325 110 L 275 110 Z" fill="url(#steelGrad)" stroke="#475569" stroke-width="2"/>
  <circle cx="300" cy="55" r="14" fill="url(#steelGrad)" stroke="#475569" stroke-width="2"/>
  <circle cx="300" cy="55" r="6" fill="#f8fafc"/>
  
  <!-- Main Porcelain Disc Bell -->
  <ellipse cx="300" cy="150" rx="140" ry="32" fill="url(#porcelainBrown)" stroke="#381c0c" stroke-width="2.5"/>
  <ellipse cx="300" cy="144" rx="130" ry="24" fill="#a45a2a" opacity="0.6"/>
  <!-- Corrugated Under-ribs -->
  <path d="M 200 162 Q 300 180 400 162" fill="none" stroke="#2c1508" stroke-width="3"/>
  <path d="M 230 172 Q 300 190 370 172" fill="none" stroke="#2c1508" stroke-width="2.5"/>

  <!-- Cement Joint & Pin -->
  <rect x="282" y="175" width="36" height="25" rx="3" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
  <!-- Ball Pin Shank -->
  <path d="M 292 200 L 292 250 L 285 255 L 285 275 L 315 275 L 315 255 L 308 250 L 308 200 Z" fill="url(#steelGrad)" stroke="#334155" stroke-width="2"/>
  <circle cx="300" cy="285" r="12" fill="url(#steelGrad)" stroke="#334155" stroke-width="2"/>
  <!-- Split Pin Clip -->
  <path d="M 275 100 L 325 100" stroke="#f59e0b" stroke-width="3" stroke-linecap="round"/>
  
  <!-- Technical Annotations -->
  <text x="70" y="140" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1e40af">Glazed Porcelain Disc</text>
  <line x1="160" y1="140" x2="220" y2="148" stroke="#2563eb" stroke-dasharray="3,3"/>
  <text x="70" y="240" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1e40af">Forged Steel Pin (70kN)</text>
  <line x1="175" y1="240" x2="285" y2="245" stroke="#2563eb" stroke-dasharray="3,3"/>
  <text x="440" y="90" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1e40af">Galvanized Cap</text>
  <line x1="435" y1="90" x2="330" y2="85" stroke="#2563eb" stroke-dasharray="3,3"/>`
);

// 2. PG Clamp
svgs['pg-clamp.svg'] = svgWrapper(
  'Parallel Groove (PG) Clamp Hardware',
  'HT/LT Overhead Line Materials',
  'IS 5561 COMPLIANT',
  `<!-- Upper Clamp Body -->
  <path d="M 170 120 C 200 95, 400 95, 430 120 L 415 160 C 370 145, 230 145, 185 160 Z" fill="url(#aluGrad)" stroke="#64748b" stroke-width="2"/>
  <!-- Conductor Grooves Upper -->
  <path d="M 215 150 A 18 18 0 0 0 251 150" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>
  <path d="M 349 150 A 18 18 0 0 0 385 150" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>
  
  <!-- Conductors inside -->
  <circle cx="233" cy="165" r="16" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
  <circle cx="233" cy="165" r="7" fill="#64748b"/>
  <circle cx="367" cy="165" r="16" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
  <circle cx="367" cy="165" r="7" fill="#64748b"/>

  <!-- Lower Clamp Body -->
  <path d="M 185 170 C 230 185, 370 185, 415 170 L 430 210 C 400 235, 200 235, 170 210 Z" fill="url(#aluGrad)" stroke="#64748b" stroke-width="2"/>
  
  <!-- Dual Galvanized Bolts -->
  <rect x="290" y="70" width="20" height="20" rx="3" fill="url(#steelGrad)" stroke="#334155" stroke-width="2"/>
  <rect x="295" y="90" width="10" height="155" fill="url(#steelGrad)" stroke="#334155" stroke-width="1.5"/>
  <rect x="286" y="245" width="28" height="18" rx="3" fill="url(#steelGrad)" stroke="#334155" stroke-width="2"/>
  <ellipse cx="300" cy="245" rx="16" ry="4" fill="#cbd5e1" stroke="#475569"/>

  <text x="60" y="165" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1e40af">Conductor Groove 1</text>
  <line x1="160" y1="165" x2="215" y2="165" stroke="#2563eb" stroke-dasharray="3,3"/>
  <text x="440" y="165" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1e40af">High Tensile Bolt</text>
  <line x1="435" y1="165" x2="310" y2="165" stroke="#2563eb" stroke-dasharray="3,3"/>`
);

// 3. Stay Set & Stay Wire
svgs['stay-set.svg'] = svgWrapper(
  'Complete Stay Sets & Galvanized Stay Wire',
  'HT/LT Overhead Line Materials',
  'IS 2141 / IS 2633',
  `<!-- Stay Wire Coil -->
  <circle cx="170" cy="180" r="65" fill="none" stroke="#94a3b8" stroke-width="14"/>
  <circle cx="170" cy="180" r="55" fill="none" stroke="#cbd5e1" stroke-width="4"/>
  <circle cx="170" cy="180" r="75" fill="none" stroke="#64748b" stroke-width="3"/>
  <text x="170" y="185" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">7/8 & 7/10 SWG</text>

  <!-- Stay Bow (Turnbuckle Assembly) -->
  <path d="M 330 60 C 370 60, 370 120, 350 140 L 350 180" fill="none" stroke="url(#steelGrad)" stroke-width="12" stroke-linecap="round"/>
  <circle cx="350" cy="65" r="8" fill="#475569"/>
  <!-- Ratchet Nut & Washer -->
  <rect x="338" y="180" width="24" height="22" rx="3" fill="#cbd5e1" stroke="#334155" stroke-width="2"/>
  <line x1="334" y1="202" x2="366" y2="202" stroke="#475569" stroke-width="4"/>

  <!-- Stay Rod (Heavy Threaded Rod) -->
  <rect x="345" y="202" width="10" height="90" fill="url(#steelGrad)" stroke="#334155" stroke-width="1.5"/>

  <!-- Anchor Plate (Cast Iron / MS Plate) -->
  <polygon points="300,290 400,290 380,315 280,315" fill="url(#steelGrad)" stroke="#334155" stroke-width="2"/>
  <circle cx="350" cy="302" r="6" fill="#334155"/>

  <text x="400" y="100" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1e40af">Galvanized Stay Bow</text>
  <line x1="395" y1="100" x2="365" y2="105" stroke="#2563eb" stroke-dasharray="3,3"/>
  <text x="420" y="305" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1e40af">Anchor Plate (200x200mm)</text>
  <line x1="415" y1="305" x2="385" y2="305" stroke="#2563eb" stroke-dasharray="3,3"/>`
);

// 4. GI V-Cross Arm
svgs['cross-arm.svg'] = svgWrapper(
  'GI V-Cross Arms & Pole Top Brackets',
  'HT/LT Overhead Line Materials',
  'IS 2062 / HDG 610g/m²',
  `<!-- V-Cross Arm Geometry -->
  <path d="M 120 110 L 300 240 L 480 110 L 480 135 L 300 265 L 120 135 Z" fill="url(#steelGrad)" stroke="#334155" stroke-width="2.5"/>
  
  <!-- Pre-drilled Holes for Pin Insulators -->
  <circle cx="140" cy="122" r="7" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
  <circle cx="300" cy="252" r="7" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
  <circle cx="460" cy="122" r="7" fill="#f8fafc" stroke="#334155" stroke-width="2"/>

  <!-- Center Pole Clamp Channel -->
  <rect x="270" y="235" width="60" height="45" rx="3" fill="#cbd5e1" stroke="#334155" stroke-width="2"/>
  <!-- Clamping Bolts -->
  <circle cx="285" cy="257" r="4" fill="#334155"/>
  <circle cx="315" cy="257" r="4" fill="#334155"/>

  <!-- Back Support Flat Braces -->
  <line x1="180" y1="150" x2="300" y2="150" stroke="#64748b" stroke-width="6"/>
  <line x1="300" y1="150" x2="420" y2="150" stroke="#64748b" stroke-width="6"/>
  <circle cx="180" cy="150" r="5" fill="#f8fafc" stroke="#334155" stroke-width="1.5"/>
  <circle cx="420" cy="150" r="5" fill="#f8fafc" stroke="#334155" stroke-width="1.5"/>

  <text x="70" y="85" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1e40af">Pin Insulator Mounting</text>
  <line x1="140" y1="90" x2="140" y2="115" stroke="#2563eb" stroke-dasharray="3,3"/>
  <text x="360" y="275" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1e40af">Pole Clamp Channel (100x50mm)</text>
  <line x1="355" y1="275" x2="330" y2="260" stroke="#2563eb" stroke-dasharray="3,3"/>`
);

// 5. Transformer Bushings
svgs['transformer-bushings.svg'] = svgWrapper(
  'HT & LT Transformer Porcelain Bushings',
  'Transformer Spares',
  'IS 3347 / DIN 42531',
  `<!-- HT Bushing (Left) -->
  <rect x="200" y="60" width="12" height="40" fill="url(#brassGrad)" stroke="#854d0e" stroke-width="1.5"/>
  <polygon points="195,100 217,100 213,115 199,115" fill="url(#brassGrad)"/>
  
  <!-- HT Porcelain Sheds Stack -->
  <path d="M 180 120 C 180 115, 232 115, 232 120 L 226 140 C 240 145, 172 145, 186 140 Z" fill="url(#porcelainBrown)" stroke="#2c1508" stroke-width="1.5"/>
  <path d="M 175 145 C 175 140, 237 140, 237 145 L 230 170 C 248 175, 164 175, 182 170 Z" fill="url(#porcelainBrown)" stroke="#2c1508" stroke-width="1.5"/>
  <path d="M 170 175 C 170 170, 242 170, 242 175 L 234 205 C 255 210, 157 210, 178 205 Z" fill="url(#porcelainBrown)" stroke="#2c1508" stroke-width="1.5"/>
  <path d="M 165 210 C 165 205, 247 205, 247 210 L 238 245 C 262 250, 150 250, 174 245 Z" fill="url(#porcelainBrown)" stroke="#2c1508" stroke-width="1.5"/>
  <!-- HT Mounting Flange & Sealing Gasket -->
  <rect x="180" y="250" width="52" height="15" fill="#334155" stroke="#0f172a" stroke-width="1.5"/>
  <rect x="175" y="265" width="62" height="6" fill="#1e293b"/>
  <rect x="200" y="271" width="12" height="45" fill="url(#copperGrad)" stroke="#78350f" stroke-width="1.5"/>

  <!-- LT Bushing (Right) -->
  <rect x="360" y="110" width="20" height="30" fill="url(#brassGrad)" stroke="#854d0e" stroke-width="1.5"/>
  <!-- LT Porcelain Body -->
  <path d="M 340 140 C 340 135, 400 135, 400 140 L 395 180 C 410 185, 330 185, 345 180 Z" fill="#f8fafc" stroke="#64748b" stroke-width="2"/>
  <path d="M 335 185 C 335 180, 405 180, 405 185 L 400 230 C 420 235, 320 235, 340 230 Z" fill="#f8fafc" stroke="#64748b" stroke-width="2"/>
  <!-- LT Heavy Copper Terminal Palm -->
  <rect x="345" y="235" width="50" height="25" fill="#334155" stroke="#0f172a"/>
  <rect x="364" y="260" width="12" height="55" fill="url(#copperGrad)" stroke="#78350f" stroke-width="1.5"/>

  <text x="60" y="90" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1e40af">11kV / 33kV HT Bushing</text>
  <line x1="160" y1="90" x2="195" y2="90" stroke="#2563eb" stroke-dasharray="3,3"/>
  <text x="440" y="130" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1e40af">LT Heavy Terminal Palm</text>
  <line x1="435" y1="130" x2="380" y2="130" stroke="#2563eb" stroke-dasharray="3,3"/>`
);

// 6. Silica Gel Breather
svgs['silica-breather.svg'] = svgWrapper(
  'Transformer Silica Gel Breathers (0.5kg - 5kg)',
  'Transformer Spares',
  'IS 3401 DESICCANT',
  `<!-- Top Cast Aluminium Header & Flange -->
  <rect x="250" y="60" width="100" height="15" rx="3" fill="url(#aluGrad)" stroke="#475569" stroke-width="2"/>
  <path d="M 270 75 L 330 75 L 335 100 L 265 100 Z" fill="url(#aluGrad)" stroke="#475569" stroke-width="2"/>
  <circle cx="270" cy="67" r="4" fill="#334155"/>
  <circle cx="330" cy="67" r="4" fill="#334155"/>

  <!-- Clear Borosilicate Cylinder Body -->
  <rect x="240" y="100" width="120" height="150" rx="4" fill="#e0f2fe" opacity="0.8" stroke="#0284c7" stroke-width="2"/>

  <!-- Indicating Blue Silica Gel Beads -->
  <g fill="#0284c7">
    <circle cx="260" cy="120" r="5"/><circle cx="275" cy="122" r="5"/><circle cx="290" cy="118" r="5"/><circle cx="310" cy="123" r="5"/><circle cx="328" cy="120" r="5"/>
    <circle cx="255" cy="140" r="5"/><circle cx="270" cy="138" r="5"/><circle cx="288" cy="142" r="5"/><circle cx="305" cy="137" r="5"/><circle cx="325" cy="141" r="5"/><circle cx="342" cy="139" r="5"/>
    <circle cx="262" cy="160" r="5"/><circle cx="280" cy="158" r="5"/><circle cx="300" cy="162" r="5"/><circle cx="318" cy="159" r="5"/><circle cx="335" cy="161" r="5"/>
    <circle cx="255" cy="180" r="5"/><circle cx="272" cy="182" r="5"/><circle cx="292" cy="178" r="5"/><circle cx="310" cy="181" r="5"/><circle cx="328" cy="179" r="5"/><circle cx="342" cy="182" r="5"/>
    <circle cx="265" cy="200" r="5"/><circle cx="285" cy="198" r="5"/><circle cx="305" cy="202" r="5"/><circle cx="325" cy="199" r="5"/>
    <circle cx="258" cy="220" r="5"/><circle cx="275" cy="222" r="5"/><circle cx="295" cy="218" r="5"/><circle cx="315" cy="221" r="5"/><circle cx="338" cy="220" r="5"/>
    <circle cx="268" cy="238" r="5"/><circle cx="288" cy="236" r="5"/><circle cx="308" cy="240" r="5"/><circle cx="328" cy="237" r="5"/>
  </g>

  <!-- Bottom Oil Bath Trap -->
  <path d="M 255 250 L 345 250 L 340 280 C 340 295, 260 295, 260 280 Z" fill="url(#aluGrad)" stroke="#475569" stroke-width="2"/>
  <ellipse cx="300" cy="275" rx="25" ry="8" fill="#ca8a04" opacity="0.6"/>

  <text x="60" y="150" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1e40af">Self-Indicating Silica Gel</text>
  <line x1="180" y1="150" x2="240" y2="150" stroke="#2563eb" stroke-dasharray="3,3"/>
  <text x="400" y="275" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1e40af">Oil Bath Dust Trap</text>
  <line x1="395" y1="275" x2="345" y2="275" stroke="#2563eb" stroke-dasharray="3,3"/>`
);

// 7. Transformer Gaskets & MOG
svgs['transformer-gaskets.svg'] = svgWrapper(
  'Nitrile Cork Gaskets & Oil Level Indicators (MOG)',
  'Transformer Spares',
  'IS 4253 TYPE RC70C',
  `<!-- Cork Gasket Sheet Pattern -->
  <rect x="120" y="80" width="180" height="220" rx="6" fill="#d97706" stroke="#92400e" stroke-width="2" opacity="0.85"/>
  <!-- Circular Bushing Cutout in Gasket -->
  <circle cx="210" cy="150" r="40" fill="#f8fafc" stroke="#92400e" stroke-width="2"/>
  <circle cx="210" cy="150" r="22" fill="#d97706" stroke="#92400e" stroke-width="2"/>
  <!-- Bolt Holes around ring -->
  <circle cx="210" cy="120" r="4" fill="#f8fafc" stroke="#92400e"/>
  <circle cx="210" cy="180" r="4" fill="#f8fafc" stroke="#92400e"/>
  <circle cx="180" cy="150" r="4" fill="#f8fafc" stroke="#92400e"/>
  <circle cx="240" cy="150" r="4" fill="#f8fafc" stroke="#92400e"/>
  <text x="210" y="240" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#78350f" text-anchor="middle">RC70-C Cork Sheet</text>

  <!-- Magnetic Oil Level Gauge (MOG) -->
  <circle cx="430" cy="170" r="65" fill="#f8fafc" stroke="#334155" stroke-width="3"/>
  <circle cx="430" cy="170" r="55" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
  <!-- Dial Markings -->
  <path d="M 395 190 A 45 45 0 0 1 465 190" fill="none" stroke="#64748b" stroke-width="4"/>
  <text x="390" y="195" font-family="Inter, sans-serif" font-size="9" font-weight="800" fill="#dc2626">EMPTY</text>
  <text x="430" y="130" font-family="Inter, sans-serif" font-size="9" font-weight="800" fill="#16a34a" text-anchor="middle">NORMAL (30°C)</text>
  <text x="460" y="195" font-family="Inter, sans-serif" font-size="9" font-weight="800" fill="#0284c7">FULL</text>
  <!-- Needle Indicator -->
  <line x1="430" y1="170" x2="435" y2="135" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
  <circle cx="430" cy="170" r="6" fill="#334155"/>
  <text x="430" y="260" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">Magnetic Oil Gauge (MOG)</text>`
);

// 8. Explosion Vent & PRV
svgs['explosion-vent.svg'] = svgWrapper(
  'Explosion Vents & Pressure Relief Valves (PRV)',
  'Transformer Spares',
  'IS 3639 COMPLIANT',
  `<!-- Curved Explosion Vent Pipe (Gooseneck) -->
  <path d="M 240 280 L 240 130 C 240 80, 360 80, 360 130 L 360 170" fill="none" stroke="url(#steelGrad)" stroke-width="32" stroke-linecap="round"/>
  <path d="M 240 280 L 240 130 C 240 80, 360 80, 360 130 L 360 170" fill="none" stroke="#f1f5f9" stroke-width="14" stroke-linecap="round"/>

  <!-- Mounting Flange Base -->
  <rect x="210" y="275" width="60" height="15" rx="3" fill="#334155" stroke="#0f172a" stroke-width="2"/>
  <circle cx="225" cy="282" r="3.5" fill="#cbd5e1"/>
  <circle cx="255" cy="282" r="3.5" fill="#cbd5e1"/>

  <!-- Rupture Diaphragm Head (Bottom Outlet) -->
  <rect x="335" y="170" width="50" height="16" rx="3" fill="#334155" stroke="#0f172a" stroke-width="2"/>
  <!-- Calibrated Diaphragm Plate -->
  <ellipse cx="360" cy="186" rx="20" ry="5" fill="#f59e0b" stroke="#b45309" stroke-width="2"/>
  <circle cx="360" cy="186" r="3" fill="#dc2626"/>

  <text x="80" y="140" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1e40af">HDG Steel Pipe (4-inch)</text>
  <line x1="180" y1="140" x2="225" y2="140" stroke="#2563eb" stroke-dasharray="3,3"/>
  <text x="410" y="185" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1e40af">Calibrated Diaphragm</text>
  <line x1="405" y1="185" x2="385" y2="185" stroke="#2563eb" stroke-dasharray="3,3"/>`
);

// 9. 33kV Gang Operated Switch
svgs['ab-switch-33kv.svg'] = svgWrapper(
  '33kV Gang-Operated Air Break Switch (630A)',
  'AB Switches',
  'IS 9921 / 25kA 3-SEC',
  `<!-- Heavy Steel Base Channel -->
  <rect x="100" y="250" width="400" height="24" rx="3" fill="url(#steelGrad)" stroke="#334155" stroke-width="2"/>
  
  <!-- 3 Heavy Porcelain Post Insulator Stacks -->
  <!-- Post 1 -->
  <rect x="150" y="140" width="30" height="110" rx="4" fill="url(#porcelainBrown)" stroke="#2c1508" stroke-width="2"/>
  <line x1="145" y1="165" x2="185" y2="165" stroke="#2c1508" stroke-width="4"/>
  <line x1="145" y1="195" x2="185" y2="195" stroke="#2c1508" stroke-width="4"/>
  <line x1="145" y1="225" x2="185" y2="225" stroke="#2c1508" stroke-width="4"/>
  
  <!-- Post 2 (Center Rotating) -->
  <rect x="285" y="140" width="30" height="110" rx="4" fill="url(#porcelainBrown)" stroke="#2c1508" stroke-width="2"/>
  <line x1="280" y1="165" x2="320" y2="165" stroke="#2c1508" stroke-width="4"/>
  <line x1="280" y1="195" x2="320" y2="195" stroke="#2c1508" stroke-width="4"/>
  <line x1="280" y1="225" x2="320" y2="225" stroke="#2c1508" stroke-width="4"/>

  <!-- Post 3 -->
  <rect x="420" y="140" width="30" height="110" rx="4" fill="url(#porcelainBrown)" stroke="#2c1508" stroke-width="2"/>
  <line x1="415" y1="165" x2="455" y2="165" stroke="#2c1508" stroke-width="4"/>
  <line x1="415" y1="195" x2="455" y2="195" stroke="#2c1508" stroke-width="4"/>
  <line x1="415" y1="225" x2="455" y2="225" stroke="#2c1508" stroke-width="4"/>

  <!-- Copper Switch Blade & Arcing Horns -->
  <rect x="160" y="125" width="280" height="14" rx="2" fill="url(#copperGrad)" stroke="#78350f" stroke-width="1.5"/>
  <!-- Arcing Horns -->
  <path d="M 165 125 C 165 80, 200 65, 230 65" fill="none" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
  <path d="M 300 125 C 300 80, 260 65, 240 65" fill="none" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>

  <!-- Gang Operating Linkage Bar -->
  <line x1="140" y1="285" x2="460" y2="285" stroke="#334155" stroke-width="6"/>
  <circle cx="300" cy="285" r="8" fill="#f59e0b" stroke="#334155" stroke-width="2"/>

  <text x="235" y="55" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#d97706" text-anchor="middle">Arcing Horns</text>
  <text x="300" y="315" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">Synchronized Gang Operating Mechanism</text>`
);

// 10. Horn Gap Fuse Units
svgs['horn-gap-fuse.svg'] = svgWrapper(
  'Horn Gap (HG) Fuse Sets (11kV & 33kV)',
  'AB Switches',
  'IS 9921 CHANNEL BASE',
  `<!-- Channel Base -->
  <rect x="150" y="270" width="300" height="20" rx="3" fill="url(#steelGrad)" stroke="#334155" stroke-width="2"/>
  
  <!-- Dual Post Insulators -->
  <rect x="180" y="150" width="32" height="120" rx="4" fill="url(#porcelainBrown)" stroke="#2c1508" stroke-width="2"/>
  <line x1="175" y1="180" x2="215" y2="180" stroke="#2c1508" stroke-width="4"/>
  <line x1="175" y1="215" x2="215" y2="215" stroke="#2c1508" stroke-width="4"/>

  <rect x="388" y="150" width="32" height="120" rx="4" fill="url(#porcelainBrown)" stroke="#2c1508" stroke-width="2"/>
  <line x1="383" y1="180" x2="423" y2="180" stroke="#2c1508" stroke-width="4"/>
  <line x1="383" y1="215" x2="423" y2="215" stroke="#2c1508" stroke-width="4"/>

  <!-- Diverging Copper Horns -->
  <path d="M 196 150 C 196 110, 240 70, 270 55" fill="none" stroke="url(#copperGrad)" stroke-width="6" stroke-linecap="round"/>
  <path d="M 404 150 C 404 110, 360 70, 330 55" fill="none" stroke="url(#copperGrad)" stroke-width="6" stroke-linecap="round"/>

  <!-- Fuse Wire Connection -->
  <line x1="196" y1="145" x2="404" y2="145" stroke="#94a3b8" stroke-width="2.5" stroke-dasharray="4,2"/>
  
  <text x="300" y="45" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#d97706" text-anchor="middle">Divergent Spark Horns</text>
  <text x="300" y="135" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">Tinned Fuse Wire Element</text>`
);

// 11. Switch Contacts
svgs['switch-contacts.svg'] = svgWrapper(
  'AB Switch Replacement Copper Contacts & Jaw Fingers',
  'AB Switches',
  'ETP COPPER / SILVER PLATED',
  `<!-- Fixed Jaw Contact (Female) -->
  <path d="M 160 100 L 220 100 L 230 180 C 210 200, 170 200, 150 180 Z" fill="url(#copperGrad)" stroke="#78350f" stroke-width="2"/>
  <rect x="175" y="105" width="30" height="60" rx="3" fill="#cbd5e1" stroke="#475569" stroke-width="1.5"/>
  <text x="190" y="225" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">Jaw Contact Fingers</text>

  <!-- Moving Blade Contact (Male) -->
  <rect x="360" y="90" width="35" height="150" rx="4" fill="url(#copperGrad)" stroke="#78350f" stroke-width="2"/>
  <circle cx="377" cy="115" r="7" fill="#f8fafc" stroke="#334155" stroke-width="1.5"/>
  <circle cx="377" cy="215" r="7" fill="#f8fafc" stroke="#334155" stroke-width="1.5"/>
  <!-- Silver Plated Contact Surface Tip -->
  <rect x="360" y="90" width="35" height="40" rx="3" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5"/>
  <text x="377" y="75" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">Silver Plated Tip</text>
  <text x="377" y="260" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">Moving Contact Blade</text>`
);

// 12. ACSR Conductor Drum
svgs['acsr-conductor.svg'] = svgWrapper(
  'ACSR Conductors (Weasel, Rabbit, Dog, Panther)',
  'AAAC & ACSR Conductors',
  'IS 398 PART 2 / 61.2% IACS',
  `<!-- Heavy Wooden Cable Drum Flange (Left & Right) -->
  <ellipse cx="250" cy="180" rx="100" ry="110" fill="#78350f" stroke="#451a03" stroke-width="3"/>
  <ellipse cx="250" cy="180" rx="40" ry="45" fill="#f8fafc" stroke="#451a03" stroke-width="2"/>
  <!-- Wooden Spokes -->
  <line x1="250" y1="70" x2="250" y2="290" stroke="#451a03" stroke-width="6"/>
  <line x1="150" y1="180" x2="350" y2="180" stroke="#451a03" stroke-width="6"/>

  <!-- Tightly Wound Metallic Conductor Core -->
  <rect x="250" y="90" width="160" height="180" fill="url(#aluGrad)" stroke="#64748b" stroke-width="2"/>
  <!-- Stranded Wire Grooves -->
  <line x1="250" y1="110" x2="410" y2="110" stroke="#94a3b8" stroke-width="3"/>
  <line x1="250" y1="130" x2="410" y2="130" stroke="#94a3b8" stroke-width="3"/>
  <line x1="250" y1="150" x2="410" y2="150" stroke="#94a3b8" stroke-width="3"/>
  <line x1="250" y1="170" x2="410" y2="170" stroke="#94a3b8" stroke-width="3"/>
  <line x1="250" y1="190" x2="410" y2="190" stroke="#94a3b8" stroke-width="3"/>
  <line x1="250" y1="210" x2="410" y2="210" stroke="#94a3b8" stroke-width="3"/>
  <line x1="250" y1="230" x2="410" y2="230" stroke="#94a3b8" stroke-width="3"/>
  <line x1="250" y1="250" x2="410" y2="250" stroke="#94a3b8" stroke-width="3"/>

  <!-- Outer Wooden Drum Flange (Right) -->
  <ellipse cx="410" cy="180" rx="40" ry="110" fill="#92400e" stroke="#451a03" stroke-width="3"/>

  <!-- Conductor Cross-Section Callout -->
  <circle cx="495" cy="120" r="32" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
  <!-- Central Steel Core -->
  <circle cx="495" cy="120" r="7" fill="#334155"/>
  <!-- Outer Aluminum Strands (6 Strands around 1) -->
  <circle cx="495" cy="103" r="6" fill="#cbd5e1" stroke="#334155"/>
  <circle cx="510" cy="111" r="6" fill="#cbd5e1" stroke="#334155"/>
  <circle cx="510" cy="129" r="6" fill="#cbd5e1" stroke="#334155"/>
  <circle cx="495" cy="137" r="6" fill="#cbd5e1" stroke="#334155"/>
  <circle cx="480" cy="129" r="6" fill="#cbd5e1" stroke="#334155"/>
  <circle cx="480" cy="111" r="6" fill="#cbd5e1" stroke="#334155"/>
  <text x="495" y="165" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#1e40af" text-anchor="middle">6Al + 1Steel (Dog)</text>`
);

// 13. AAAC Conductor
svgs['aaac-conductor.svg'] = svgWrapper(
  'AAAC Conductors (All Aluminium Alloy Conductors)',
  'AAAC & ACSR Conductors',
  'IS 398 PART 4 / ALMELEC',
  `<!-- AAAC Cable Bundle Strand Display -->
  <g transform="translate(180, 70)">
    <!-- 19-Strand Conductor Cross Section -->
    <circle cx="120" cy="110" r="85" fill="#f8fafc" stroke="#2563eb" stroke-width="2"/>
    <!-- Center strand -->
    <circle cx="120" cy="110" r="14" fill="url(#aluGrad)" stroke="#475569" stroke-width="1.5"/>
    <!-- Inner ring (6 strands) -->
    <circle cx="120" cy="82" r="14" fill="url(#aluGrad)" stroke="#475569" stroke-width="1.5"/>
    <circle cx="144" cy="96" r="14" fill="url(#aluGrad)" stroke="#475569" stroke-width="1.5"/>
    <circle cx="144" cy="124" r="14" fill="url(#aluGrad)" stroke="#475569" stroke-width="1.5"/>
    <circle cx="120" cy="138" r="14" fill="url(#aluGrad)" stroke="#475569" stroke-width="1.5"/>
    <circle cx="96" cy="124" r="14" fill="url(#aluGrad)" stroke="#475569" stroke-width="1.5"/>
    <circle cx="96" cy="96" r="14" fill="url(#aluGrad)" stroke="#475569" stroke-width="1.5"/>
  </g>

  <text x="300" y="280" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle">High Tensile Al-Mg-Si Alloy Strands</text>
  <text x="300" y="298" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#64748b" text-anchor="middle">Zero Galvanic Corrosion • Ideal for Coastal & Corrosive Terrain</text>`
);

// 14. Copper Bonded Earth Electrode
svgs['copper-earth-rod.svg'] = svgWrapper(
  'Copper Bonded Chemical Earth Electrodes (254 Micron)',
  'Earthing Materials',
  'UL 467 / IEEE 80',
  `<!-- Long Vertical Copper Clad Steel Rod -->
  <rect x="285" y="60" width="30" height="230" rx="3" fill="url(#copperGrad)" stroke="#78350f" stroke-width="2"/>
  
  <!-- Pointed Hardened Steel Driving Tip -->
  <polygon points="285,290 315,290 300,320" fill="#334155" stroke="#0f172a" stroke-width="1.5"/>

  <!-- Heavy Brass Earth Clamping Lug at Top -->
  <rect x="270" y="90" width="60" height="30" rx="4" fill="url(#brassGrad)" stroke="#854d0e" stroke-width="2"/>
  <circle cx="285" cy="105" r="5" fill="#334155"/>
  <circle cx="315" cy="105" r="5" fill="#334155"/>
  <!-- Earth Flat connected -->
  <rect x="325" y="100" width="80" height="10" fill="url(#copperGrad)" stroke="#78350f"/>

  <!-- Earth Enhancement Compound Bag -->
  <rect x="130" y="160" width="90" height="120" rx="8" fill="#1e293b" stroke="#0f172a" stroke-width="2"/>
  <rect x="140" y="175" width="70" height="30" rx="3" fill="#2563eb"/>
  <text x="175" y="195" font-family="Inter, sans-serif" font-size="10" font-weight="800" fill="#ffffff" text-anchor="middle">PSPL BFC</text>
  <text x="175" y="225" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#94a3b8" text-anchor="middle">EARTH COMPOUND</text>
  <text x="175" y="250" font-family="Inter, sans-serif" font-size="9" font-weight="600" fill="#f59e0b" text-anchor="middle">25 KG BAG</text>

  <text x="420" y="95" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1e40af">Brass Terminal Clamp</text>
  <text x="420" y="200" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1e40af">254μm Copper Molecular Bond</text>
  <line x1="415" y1="200" x2="320" y2="200" stroke="#2563eb" stroke-dasharray="3,3"/>`
);

// 15. GI Earthing Pipe & Plate
svgs['gi-earthing-pipe.svg'] = svgWrapper(
  'GI Earthing Pipes, Plates & Continuous Earth Flats',
  'Earthing Materials',
  'IS 3043 / IS 2629 HDG',
  `<!-- Perforated GI Earth Pipe (Class B) -->
  <rect x="180" y="60" width="34" height="230" fill="url(#steelGrad)" stroke="#334155" stroke-width="2"/>
  <!-- Top Funnel with Wire Mesh -->
  <polygon points="160,60 234,60 214,80 180,80" fill="url(#steelGrad)" stroke="#334155" stroke-width="1.5"/>
  <!-- Staggered Perforation Holes -->
  <circle cx="197" cy="110" r="4" fill="#1e293b"/>
  <circle cx="197" cy="140" r="4" fill="#1e293b"/>
  <circle cx="197" cy="170" r="4" fill="#1e293b"/>
  <circle cx="197" cy="200" r="4" fill="#1e293b"/>
  <circle cx="197" cy="230" r="4" fill="#1e293b"/>
  <circle cx="197" cy="260" r="4" fill="#1e293b"/>

  <!-- GI Earth Plate (600x600x6mm) -->
  <polygon points="320,120 450,90 450,230 320,260" fill="url(#steelGrad)" stroke="#334155" stroke-width="2.5"/>
  <!-- Bolt holes on plate -->
  <circle cx="385" cy="120" r="5" fill="#f8fafc" stroke="#334155" stroke-width="1.5"/>
  <circle cx="385" cy="225" r="5" fill="#f8fafc" stroke="#334155" stroke-width="1.5"/>

  <!-- Continuous GI Earth Flat Strip -->
  <rect x="250" y="160" width="180" height="14" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>

  <text x="80" y="80" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1e40af">Perforated GI Pipe</text>
  <text x="460" y="170" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1e40af">600x600 GI Plate</text>`
);

// 16. Earth Pit & Compound
svgs['earth-pit-compound.svg'] = svgWrapper(
  'FRP Earth Pit Chambers & Conductive Compound',
  'Earthing Materials',
  'HEAVY DUTY 5-TON',
  `<!-- FRP Pit Inspection Chamber (Trapezoid / Conical) -->
  <polygon points="200,120 400,120 430,280 170,280" fill="#1e293b" stroke="#0f172a" stroke-width="3"/>
  <!-- Top Chamber Lid with Handle -->
  <ellipse cx="300" cy="120" rx="100" ry="20" fill="#334155" stroke="#0f172a" stroke-width="2"/>
  <rect x="270" y="112" width="60" height="10" rx="3" fill="#cbd5e1" stroke="#334155"/>
  <text x="300" y="165" font-family="Inter, sans-serif" font-size="12" font-weight="800" fill="#38bdf8" text-anchor="middle">EARTH PIT</text>
  <text x="300" y="185" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#94a3b8" text-anchor="middle">TEST TERMINAL CHAMBER</text>
  <text x="300" y="210" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#f59e0b" text-anchor="middle">5-TON TESTED LOAD</text>`
);

// 17. Feeder Pillar Box
svgs['feeder-pillar.svg'] = svgWrapper(
  'LT Distribution Boxes & Feeder Pillars',
  'Industrial Electricals',
  'IP55 WEATHERPROOF CRCA',
  `<!-- Main Cabinet Enclosure -->
  <rect x="200" y="65" width="200" height="225" rx="4" fill="#e2e8f0" stroke="#334155" stroke-width="3"/>
  <!-- Canopy Roof (Slanted) -->
  <polygon points="180,65 420,65 400,45 200,45" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
  
  <!-- Double Doors Divider -->
  <line x1="300" y1="65" x2="300" y2="290" stroke="#64748b" stroke-width="2"/>
  <!-- Door Handles & Padlock Latches -->
  <rect x="285" y="170" width="8" height="24" rx="2" fill="#334155"/>
  <rect x="307" y="170" width="8" height="24" rx="2" fill="#334155"/>
  
  <!-- Louvers / Ventilation Slits -->
  <line x1="225" y1="95" x2="275" y2="95" stroke="#64748b" stroke-width="2"/>
  <line x1="225" y1="105" x2="275" y2="105" stroke="#64748b" stroke-width="2"/>
  <line x1="325" y1="95" x2="375" y2="95" stroke="#64748b" stroke-width="2"/>
  <line x1="325" y1="105" x2="375" y2="105" stroke="#64748b" stroke-width="2"/>

  <!-- Plinth / Base Stand -->
  <rect x="185" y="290" width="230" height="20" fill="#334155" stroke="#0f172a" stroke-width="2"/>

  <!-- Danger Sign on Door -->
  <polygon points="250,150 240,165 260,165" fill="#facc15" stroke="#b45309"/>
  <polygon points="350,150 340,165 360,165" fill="#facc15" stroke="#b45309"/>`
);

// 18. Cable Glands & Lugs
svgs['cable-glands-lugs.svg'] = svgWrapper(
  'Brass Cable Glands & Bimetallic Crimping Lugs',
  'Industrial Electricals',
  'IS 12943 / BS 6121',
  `<!-- Brass Double Compression Cable Gland (Exploded / Assembled) -->
  <rect x="130" y="140" width="40" height="60" rx="3" fill="url(#brassGrad)" stroke="#854d0e" stroke-width="2"/>
  <rect x="170" y="145" width="20" height="50" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
  <rect x="190" y="135" width="45" height="70" rx="4" fill="url(#brassGrad)" stroke="#854d0e" stroke-width="2"/>
  <rect x="235" y="145" width="30" height="50" fill="url(#brassGrad)" stroke="#854d0e" stroke-width="2"/>
  <text x="190" y="235" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">Brass Double Compression</text>

  <!-- Bimetallic Crimping Lug (Friction Welded) -->
  <!-- Copper Palm (Right) -->
  <rect x="360" y="150" width="75" height="40" rx="6" fill="url(#copperGrad)" stroke="#78350f" stroke-width="2"/>
  <circle cx="400" cy="170" r="11" fill="#f8fafc" stroke="#78350f" stroke-width="2"/>
  <!-- Friction Weld Line -->
  <line x1="360" y1="150" x2="360" y2="190" stroke="#f59e0b" stroke-width="4"/>
  <!-- Aluminium Barrel (Left) -->
  <rect x="290" y="156" width="70" height="28" rx="3" fill="url(#aluGrad)" stroke="#64748b" stroke-width="2"/>
  <text x="365" y="235" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">Bimetallic Friction Welded Lug</text>`
);

// 19. HRC Fuses
svgs['hrc-fuse.svg'] = svgWrapper(
  'HRC Fuse Links (DIN & BS) & Ceramic Fuse Bases',
  'Industrial Electricals',
  'IS 13703 / 80kA BREAKING',
  `<!-- White Ceramic Body -->
  <rect x="220" y="110" width="160" height="120" rx="6" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
  
  <!-- Silver-Plated Knife Blade Terminals -->
  <rect x="150" y="155" width="70" height="30" rx="2" fill="url(#steelGrad)" stroke="#475569" stroke-width="2"/>
  <circle cx="175" cy="170" r="6" fill="#f8fafc" stroke="#475569"/>
  <rect x="380" y="155" width="70" height="30" rx="2" fill="url(#steelGrad)" stroke="#475569" stroke-width="2"/>
  <circle cx="425" cy="170" r="6" fill="#f8fafc" stroke="#475569"/>

  <!-- Trip Indicator Pin -->
  <rect x="280" y="98" width="40" height="12" rx="2" fill="#dc2626"/>
  <circle cx="300" cy="104" r="3" fill="#ffffff"/>

  <!-- Technical Spec Stamp on Ceramic -->
  <text x="300" y="145" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="#0f172a" text-anchor="middle">PSPL 400A</text>
  <text x="300" y="165" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">500V AC • 80kA</text>
  <text x="300" y="185" font-family="Inter, sans-serif" font-size="9" font-weight="600" fill="#64748b" text-anchor="middle">DIN 43620 SIZE 2</text>`
);

// 20. Transmission Tower
svgs['transmission-tower.svg'] = svgWrapper(
  'Hot-Dip Galvanized Lattice Transmission Towers',
  'AIMS & GI Towers',
  'IS 2062 / 132kV - 400kV',
  `<!-- Symmetrical Lattice Tower Geometry -->
  <g stroke="#334155" stroke-width="2.5" fill="none">
    <!-- Main 4 Legs tapering up -->
    <line x1="220" y1="310" x2="280" y2="70"/>
    <line x1="380" y1="310" x2="320" y2="70"/>
    <line x1="280" y1="70" x2="320" y2="70"/>

    <!-- Cross arms (Upper & Lower) -->
    <line x1="170" y1="120" x2="430" y2="120" stroke-width="3"/>
    <line x1="200" y1="100" x2="285" y2="100"/>
    <line x1="315" y1="100" x2="400" y2="100"/>

    <line x1="150" y1="170" x2="450" y2="170" stroke-width="3"/>

    <!-- Internal Diagonal Bracing (X-Bracing) -->
    <line x1="280" y1="70" x2="320" y2="120"/>
    <line x1="320" y1="70" x2="280" y2="120"/>

    <line x1="275" y1="120" x2="325" y2="170"/>
    <line x1="325" y1="120" x2="275" y2="170"/>

    <line x1="265" y1="170" x2="335" y2="230"/>
    <line x1="335" y1="170" x2="265" y2="230"/>

    <line x1="250" y1="230" x2="350" y2="310"/>
    <line x1="350" y1="230" x2="250" y2="310"/>

    <!-- Insulator Strings hanging from Cross Arms -->
    <line x1="170" y1="120" x2="170" y2="145" stroke="#2563eb" stroke-width="4"/>
    <line x1="430" y1="120" x2="430" y2="145" stroke="#2563eb" stroke-width="4"/>
    <line x1="150" y1="170" x2="150" y2="195" stroke="#2563eb" stroke-width="4"/>
    <line x1="450" y1="170" x2="450" y2="195" stroke="#2563eb" stroke-width="4"/>
  </g>

  <!-- Foundation Concrete Piers -->
  <rect x="205" y="310" width="30" height="15" fill="#94a3b8" stroke="#334155"/>
  <rect x="365" y="310" width="30" height="15" fill="#94a3b8" stroke="#334155"/>

  <text x="300" y="55" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">Galvanized Structural Angle (IS 2062)</text>`
);

// 21. Substation Gantry Structures
svgs['substation-gantry.svg'] = svgWrapper(
  'Substation Gantry Structures & AIMS Assemblies',
  'AIMS & GI Towers',
  '33kV / 132kV / 220kV',
  `<!-- Twin Gantry Columns & Horizontal Cross Beam -->
  <g stroke="#334155" stroke-width="2.5" fill="none">
    <!-- Left Column -->
    <line x1="170" y1="300" x2="170" y2="100"/>
    <line x1="205" y1="300" x2="205" y2="100"/>
    <line x1="170" y1="130" x2="205" y2="160"/>
    <line x1="205" y1="130" x2="170" y2="160"/>
    <line x1="170" y1="190" x2="205" y2="220"/>
    <line x1="205" y1="190" x2="170" y2="220"/>
    <line x1="170" y1="250" x2="205" y2="280"/>
    <line x1="205" y1="250" x2="170" y2="280"/>

    <!-- Right Column -->
    <line x1="395" y1="300" x2="395" y2="100"/>
    <line x1="430" y1="300" x2="430" y2="100"/>
    <line x1="395" y1="130" x2="430" y2="160"/>
    <line x1="430" y1="130" x2="395" y2="160"/>
    <line x1="395" y1="190" x2="430" y2="220"/>
    <line x1="430" y1="190" x2="395" y2="220"/>
    <line x1="395" y1="250" x2="430" y2="280"/>
    <line x1="430" y1="250" x2="395" y2="280"/>

    <!-- Horizontal Lattice Cross Beam -->
    <line x1="150" y1="100" x2="450" y2="100" stroke-width="3"/>
    <line x1="150" y1="130" x2="450" y2="130" stroke-width="3"/>
    <line x1="205" y1="100" x2="245" y2="130"/>
    <line x1="245" y1="100" x2="285" y2="130"/>
    <line x1="285" y1="100" x2="325" y2="130"/>
    <line x1="325" y1="100" x2="365" y2="130"/>
    <line x1="365" y1="100" x2="395" y2="130"/>
  </g>

  <text x="300" y="80" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">Heavy Substation Gantry Beam</text>`
);

// 22. Tower Stubs & Fasteners
svgs['tower-stubs-bolts.svg'] = svgWrapper(
  'Tower Foundation Stubs, Cleats & Step Bolts',
  'AIMS & GI Towers',
  'GRADE 5.6 & 8.8 HDG',
  `<!-- Heavy Foundation Stub Angle (Slanted) -->
  <polygon points="180,90 230,80 280,290 230,300" fill="url(#steelGrad)" stroke="#334155" stroke-width="2.5"/>
  <!-- Welded Cleat Plates on Stub -->
  <polygon points="210,180 280,165 290,210 220,225" fill="#64748b" stroke="#334155" stroke-width="2"/>
  <circle cx="250" cy="195" r="5" fill="#f8fafc" stroke="#334155"/>

  <!-- Galvanized Step Bolt (Lineman Climbing Access) -->
  <rect x="350" y="140" width="130" height="14" rx="2" fill="url(#steelGrad)" stroke="#334155" stroke-width="2"/>
  <!-- Bolt Head & Double Hex Nuts -->
  <rect x="470" y="132" width="20" height="30" rx="3" fill="url(#steelGrad)" stroke="#334155" stroke-width="2"/>
  <rect x="390" y="134" width="16" height="26" rx="2" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>
  <rect x="410" y="134" width="16" height="26" rx="2" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>

  <text x="160" y="70" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1e40af">Tower Stub Angle</text>
  <text x="415" y="115" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1e40af">M16 Galvanized Step Bolt</text>`
);

// Write all SVGs to public/images/products/
let written = 0;
for (const [filename, content] of Object.entries(svgs)) {
  const filePath = path.join(outDir, filename);
  fs.writeFileSync(filePath, content, 'utf-8');
  written++;
}
console.log('Successfully generated ' + written + ' high-precision technical equipment SVGs in ' + outDir);
