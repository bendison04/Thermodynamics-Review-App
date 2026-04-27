// Inline SVG diagrams for question illustrations.
// Each key is referenced by question objects via the `diagram` field.
const DIAGRAMS = {

  pistonBrickRemoved: `
    <svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hatch1" patternUnits="userSpaceOnUse" width="5" height="5" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="5" stroke="#1a1a2e" stroke-width="0.8" opacity="0.6"/>
        </pattern>
        <pattern id="wave1" patternUnits="userSpaceOnUse" width="20" height="7">
          <path d="M0,3.5 Q5,0 10,3.5 T20,3.5" fill="none" stroke="#2a5a8a" stroke-width="0.8"/>
        </pattern>
        <marker id="arr1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M2 1L8 5L2 9" fill="none" stroke="#1a1a2e" stroke-width="1.5" stroke-linecap="round"/>
        </marker>
      </defs>
      <path d="M 110 40 L 110 200 L 200 200 L 200 40" class="vessel-stroke"/>
      <rect x="110" y="130" width="90" height="70" fill="url(#wave1)"/>
      <rect x="110" y="120" width="90" height="10" fill="url(#hatch1)" stroke="#1a1a2e" stroke-width="0.5"/>
      <rect x="135" y="100" width="40" height="20" fill="url(#hatch1)" stroke="#1a1a2e" stroke-width="0.5"/>
      <text x="155" y="225" text-anchor="middle" font-style="italic" font-size="16">I</text>
      <line x1="230" y1="120" x2="280" y2="120" stroke="#1a1a2e" stroke-width="1.5" marker-end="url(#arr1)"/>
      <path d="M 310 40 L 310 200 L 400 200 L 400 40" class="vessel-stroke"/>
      <rect x="310" y="60" width="90" height="140" fill="url(#wave1)"/>
      <rect x="310" y="50" width="90" height="10" fill="url(#hatch1)" stroke="#1a1a2e" stroke-width="0.5"/>
      <text x="355" y="225" text-anchor="middle" font-style="italic" font-size="16">II</text>
    </svg>`,

  twoDevicesHeat: `
    <svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hatch2" patternUnits="userSpaceOnUse" width="5" height="5" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="5" stroke="#1a1a2e" stroke-width="0.8" opacity="0.6"/>
        </pattern>
        <pattern id="wave2" patternUnits="userSpaceOnUse" width="20" height="7">
          <path d="M0,3.5 Q5,0 10,3.5 T20,3.5" fill="none" stroke="#2a5a8a" stroke-width="0.8"/>
        </pattern>
      </defs>
      <path d="M 110 40 L 110 200 L 200 200 L 200 40" class="vessel-stroke"/>
      <rect x="110" y="120" width="90" height="80" fill="url(#wave2)"/>
      <rect x="110" y="110" width="90" height="10" fill="url(#hatch2)" stroke="#1a1a2e" stroke-width="0.5"/>
      <text x="155" y="225" text-anchor="middle" font-style="italic" font-size="16">I</text>
      <path d="M 310 40 L 310 200 L 400 200 L 400 40" class="vessel-stroke"/>
      <rect x="310" y="120" width="90" height="80" fill="url(#wave2)"/>
      <rect x="310" y="110" width="90" height="10" fill="url(#hatch2)" stroke="#1a1a2e" stroke-width="0.5"/>
      <rect x="335" y="90" width="40" height="20" fill="url(#hatch2)" stroke="#1a1a2e" stroke-width="0.5"/>
      <text x="355" y="225" text-anchor="middle" font-style="italic" font-size="16">II</text>
    </svg>`,

  airVacuum: `
    <svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hatch3" patternUnits="userSpaceOnUse" width="5" height="5" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="5" stroke="#1a1a2e" stroke-width="0.8" opacity="0.6"/>
        </pattern>
      </defs>
      <rect x="80" y="50" width="340" height="8" fill="url(#hatch3)"/>
      <rect x="80" y="120" width="340" height="8" fill="url(#hatch3)"/>
      <rect x="72" y="50" width="8" height="78" fill="url(#hatch3)"/>
      <rect x="420" y="50" width="8" height="78" fill="url(#hatch3)"/>
      <rect x="80" y="58" width="340" height="62" fill="none" stroke="#1a1a2e" stroke-width="1.5"/>
      <line x1="307" y1="58" x2="307" y2="120" stroke="#1a1a2e" stroke-width="1.5"/>
      <text x="193" y="95" text-anchor="middle" font-size="15">air</text>
      <text x="363" y="95" text-anchor="middle" font-size="15">vacuum</text>
      <text x="193" y="40" text-anchor="middle" font-size="13" font-style="italic">2L</text>
      <text x="363" y="40" text-anchor="middle" font-size="13" font-style="italic">L</text>
    </svg>`,

  twoVessels: `
    <svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hatchVessel" patternUnits="userSpaceOnUse" width="5" height="5" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="5" stroke="#1a1a2e" stroke-width="0.8" opacity="0.6"/>
        </pattern>
      </defs>
      <!-- Vessel I (mostly liquid, x=0.01) -->
      <rect x="60" y="40" width="110" height="110" fill="none" stroke="#1a1a2e" stroke-width="2"/>
      <rect x="60" y="95" width="110" height="55" fill="rgba(100,150,200,0.3)" stroke="none"/>
      <text x="115" y="95" text-anchor="middle" font-size="13" font-weight="bold">liquid</text>
      <text x="115" y="145" text-anchor="middle" font-size="11">x = 0.01</text>
      <rect x="60" y="40" width="110" height="10" fill="url(#hatchVessel)" stroke="#1a1a2e" stroke-width="0.5"/>
      <!-- Connection line to Vessel II -->
      <line x1="170" y1="95" x2="220" y2="95" stroke="#1a1a2e" stroke-width="2"/>
      <!-- Valve symbol (X inside box) -->
      <rect x="215" y="85" width="30" height="20" fill="none" stroke="#1a1a2e" stroke-width="1.5"/>
      <path d="M 220 85 L 245 105 M 220 105 L 245 85" stroke="#1a1a2e" stroke-width="1.5"/>
      <line x1="220" y1="95" x2="215" y2="95" stroke="#1a1a2e" stroke-width="2"/>
      <line x1="245" y1="95" x2="280" y2="95" stroke="#1a1a2e" stroke-width="2"/>
      <!-- Vessel II (mostly vapor, x=0.99) -->
      <rect x="330" y="40" width="110" height="110" fill="none" stroke="#1a1a2e" stroke-width="2"/>
      <rect x="330" y="40" width="110" height="65" fill="rgba(200,100,100,0.2)" stroke="none"/>
      <text x="385" y="60" text-anchor="middle" font-size="13" font-weight="bold">vapor</text>
      <text x="385" y="145" text-anchor="middle" font-size="11">x = 0.99</text>
      <rect x="330" y="95" width="110" height="10" fill="url(#hatchVessel)" stroke="#1a1a2e" stroke-width="0.5"/>
      <!-- Temperature and pressure info -->
      <text x="250" y="170" text-anchor="middle" font-size="12" font-style="italic">225°C both vessels</text>
    </svg>`,

  twoAdiabaticDevices: `
    <svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hatch4" patternUnits="userSpaceOnUse" width="5" height="5" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="5" stroke="#1a1a2e" stroke-width="0.8" opacity="0.6"/>
        </pattern>
        <pattern id="wave4" patternUnits="userSpaceOnUse" width="20" height="7">
          <path d="M0,3.5 Q5,0 10,3.5 T20,3.5" fill="none" stroke="#2a5a8a" stroke-width="0.8"/>
        </pattern>
      </defs>
      <rect x="58" y="40" width="6" height="160" fill="url(#hatch4)"/>
      <path d="M 70 40 L 70 200 L 160 200 L 160 40" class="vessel-stroke"/>
      <rect x="70" y="130" width="90" height="70" fill="url(#wave4)"/>
      <rect x="70" y="120" width="90" height="10" fill="url(#hatch4)" stroke="#1a1a2e" stroke-width="0.5"/>
      <rect x="95" y="100" width="40" height="20" fill="url(#hatch4)" stroke="#1a1a2e" stroke-width="0.5"/>
      <text x="115" y="225" text-anchor="middle" font-style="italic" font-size="14">Device I</text>
      <text x="115" y="20" text-anchor="middle" font-size="11">brick removed</text>
      <rect x="358" y="40" width="6" height="160" fill="url(#hatch4)"/>
      <path d="M 370 40 L 370 200 L 460 200 L 460 40" class="vessel-stroke"/>
      <rect x="370" y="130" width="90" height="70" fill="url(#wave4)"/>
      <rect x="370" y="120" width="90" height="10" fill="url(#hatch4)" stroke="#1a1a2e" stroke-width="0.5"/>
      <rect x="395" y="100" width="40" height="20" fill="url(#hatch4)" stroke="#1a1a2e" stroke-width="0.5"/>
      <!-- Heated symbol moved below piston -->
      <path d="M 405 135 Q 415 125 425 135 Q 415 145 405 135 Z" fill="none" stroke="#8b2635" stroke-width="1.2"/>
      <text x="415" y="225" text-anchor="middle" font-style="italic" font-size="14">Device II</text>
      <text x="415" y="20" text-anchor="middle" font-size="11">heated</text>
    </svg>`,

  pistonSandGrain: `
    <svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hatch5" patternUnits="userSpaceOnUse" width="5" height="5" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="5" stroke="#1a1a2e" stroke-width="0.8" opacity="0.6"/>
        </pattern>
        <pattern id="wave5" patternUnits="userSpaceOnUse" width="20" height="7">
          <path d="M0,3.5 Q5,0 10,3.5 T20,3.5" fill="none" stroke="#2a5a8a" stroke-width="0.8"/>
        </pattern>
        <marker id="arr5" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M2 1L8 5L2 9" fill="none" stroke="#1a1a2e" stroke-width="1.5" stroke-linecap="round"/>
        </marker>
      </defs>
      <text x="250" y="40" text-anchor="middle" font-size="13">grain falls →</text>
      <line x1="250" y1="50" x2="250" y2="80" stroke="#1a1a2e" stroke-width="1.5" marker-end="url(#arr5)"/>
      <path d="M 180 100 L 180 240 L 320 240 L 320 100" class="vessel-stroke"/>
      <rect x="180" y="130" width="140" height="110" fill="url(#wave5)"/>
      <rect x="180" y="120" width="140" height="10" fill="url(#hatch5)" stroke="#1a1a2e" stroke-width="0.5"/>
      <!-- Sand pile (triangular/pyramidical shape) -->
      <polygon points="250,85 220,125 280,125" fill="#d4b59a" stroke="#8b6f47" stroke-width="1"/>
      <!-- Sand grains scattered around pile -->
      <circle cx="235" cy="115" r="3" fill="#d4b59a" stroke="#8b6f47" stroke-width="0.5"/>
      <circle cx="265" cy="118" r="3" fill="#d4b59a" stroke="#8b6f47" stroke-width="0.5"/>
      <circle cx="245" cy="130" r="2.5" fill="#d4b59a" stroke="#8b6f47" stroke-width="0.5"/>
      <!-- Added sand info -->
      <text x="380" y="120" font-size="11" font-style="italic">sand</text>
      <text x="380" y="135" font-size="11" font-style="italic">added</text>
    </svg>`,

  airExpand: `
    <svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr6" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M2 1L8 5L2 9" fill="none" stroke="#1a1a2e" stroke-width="1.5" stroke-linecap="round"/>
        </marker>
      </defs>
      <rect x="80" y="70" width="60" height="80" fill="none" stroke="#1a1a2e" stroke-width="1.5"/>
      <text x="110" y="115" text-anchor="middle" font-size="13">air</text>
      <text x="110" y="170" text-anchor="middle" font-size="11" font-style="italic">P₁ = 300 kPa</text>
      <text x="110" y="60" text-anchor="middle" font-size="11" font-style="italic">V₁</text>
      <line x1="160" y1="110" x2="220" y2="110" stroke="#1a1a2e" stroke-width="1.5" marker-end="url(#arr6)"/>
      <text x="190" y="100" text-anchor="middle" font-size="11">expands</text>
      <rect x="240" y="40" width="180" height="140" fill="none" stroke="#1a1a2e" stroke-width="1.5"/>
      <text x="330" y="115" text-anchor="middle" font-size="13">air</text>
      <text x="330" y="200" text-anchor="middle" font-size="11" font-style="italic">P₂ = 100 kPa</text>
      <text x="330" y="30" text-anchor="middle" font-size="11" font-style="italic">V₂ = 3 V₁</text>
    </svg>`,

  satVaporBrick: `
    <svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hatch7" patternUnits="userSpaceOnUse" width="5" height="5" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="5" stroke="#1a1a2e" stroke-width="0.8" opacity="0.6"/>
        </pattern>
        <marker id="arr7" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M2 1L8 5L2 9" fill="none" stroke="#1a1a2e" stroke-width="1.5" stroke-linecap="round"/>
        </marker>
      </defs>
      <rect x="100" y="40" width="40" height="20" fill="url(#hatch7)" stroke="#1a1a2e" stroke-width="0.5"/>
      <text x="120" y="35" text-anchor="middle" font-size="11">small brick</text>
      <line x1="120" y1="65" x2="200" y2="100" stroke="#1a1a2e" stroke-width="1" marker-end="url(#arr7)"/>
      <path d="M 200 80 L 200 220 L 340 220 L 340 80" class="vessel-stroke"/>
      <rect x="200" y="120" width="140" height="100" fill="rgba(200,200,220,0.2)"/>
      <text x="270" y="170" text-anchor="middle" font-size="13" font-style="italic">saturated vapor</text>
      <text x="270" y="190" text-anchor="middle" font-size="13" font-style="italic">x = 1</text>
      <rect x="200" y="110" width="140" height="10" fill="url(#hatch7)" stroke="#1a1a2e" stroke-width="0.5"/>
      <rect x="240" y="90" width="60" height="20" fill="url(#hatch7)" stroke="#1a1a2e" stroke-width="0.5"/>
    </svg>`,

  pumpDiameter: `
    <svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr8" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M2 1L8 5L2 9" fill="none" stroke="#1a1a2e" stroke-width="1.5" stroke-linecap="round"/>
        </marker>
      </defs>
      <line x1="40" y1="105" x2="40" y2="125" stroke="#1a1a2e" stroke-width="1.5"/>
      <line x1="40" y1="105" x2="160" y2="105" stroke="#1a1a2e" stroke-width="1.5"/>
      <line x1="40" y1="125" x2="160" y2="125" stroke="#1a1a2e" stroke-width="1.5"/>
      <text x="100" y="95" text-anchor="middle" font-size="11" font-style="italic">D₁ (inlet)</text>
      <line x1="20" y1="115" x2="40" y2="115" stroke="#1a1a2e" stroke-width="1.5" marker-end="url(#arr8)"/>
      <circle cx="200" cy="115" r="40" fill="none" stroke="#1a1a2e" stroke-width="1.5"/>
      <polygon points="200,75 240,140 160,140" fill="none" stroke="#1a1a2e" stroke-width="1.5"/>
      <text x="200" y="120" text-anchor="middle" font-size="12">pump</text>
      <line x1="240" y1="105" x2="380" y2="105" stroke="#1a1a2e" stroke-width="1.5"/>
      <line x1="240" y1="125" x2="380" y2="125" stroke="#1a1a2e" stroke-width="1.5"/>
      <text x="310" y="95" text-anchor="middle" font-size="11" font-style="italic">D₂ = D₁/2</text>
      <line x1="380" y1="115" x2="420" y2="115" stroke="#1a1a2e" stroke-width="1.5" marker-end="url(#arr8)"/>
      <text x="400" y="170" text-anchor="middle" font-size="11">free jet</text>
    </svg>`,

  twoTurbines: `
    <svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr9" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M2 1L8 5L2 9" fill="none" stroke="#1a1a2e" stroke-width="1.5" stroke-linecap="round"/>
        </marker>
      </defs>
      <text x="60" y="35" font-size="11" font-style="italic">T_warm</text>
      <text x="60" y="50" font-size="11" font-style="italic">P_high</text>
      <line x1="80" y1="55" x2="80" y2="80" stroke="#1a1a2e" stroke-width="1.5" marker-end="url(#arr9)"/>
      <polygon points="50,80 110,80 130,140 30,140" fill="none" stroke="#1a1a2e" stroke-width="1.5"/>
      <text x="80" y="115" text-anchor="middle" font-size="11">η_T = 70%</text>
      <line x1="130" y1="110" x2="170" y2="110" stroke="#1a1a2e" stroke-width="1.5" marker-end="url(#arr9)"/>
      <text x="150" y="100" text-anchor="middle" font-size="11">W_out</text>
      <text x="60" y="170" font-size="11" font-style="italic">T_cool</text>
      <text x="60" y="185" font-size="11" font-style="italic">P_low</text>
      <line x1="80" y1="140" x2="80" y2="160" stroke="#1a1a2e" stroke-width="1.5" marker-end="url(#arr9)"/>
      <text x="290" y="35" font-size="11" font-style="italic">T_warm</text>
      <text x="290" y="50" font-size="11" font-style="italic">P_high</text>
      <line x1="310" y1="55" x2="310" y2="80" stroke="#1a1a2e" stroke-width="1.5" marker-end="url(#arr9)"/>
      <polygon points="280,80 340,80 360,140 260,140" fill="none" stroke="#1a1a2e" stroke-width="1.5"/>
      <text x="310" y="115" text-anchor="middle" font-size="11">η_T = 90%</text>
      <line x1="360" y1="110" x2="400" y2="110" stroke="#1a1a2e" stroke-width="1.5" marker-end="url(#arr9)"/>
      <text x="380" y="100" text-anchor="middle" font-size="11">W_out</text>
      <text x="290" y="170" font-size="11" font-style="italic">T_cool</text>
      <text x="290" y="185" font-size="11" font-style="italic">P_low</text>
      <line x1="310" y1="140" x2="310" y2="160" stroke="#1a1a2e" stroke-width="1.5" marker-end="url(#arr9)"/>
      <text x="200" y="210" text-anchor="middle" font-size="11" font-style="italic">same W_out, same inlet/outlet T and P</text>
    </svg>`,

  twoSandDevices: `
    <svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hatch10" patternUnits="userSpaceOnUse" width="5" height="5" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="5" stroke="#1a1a2e" stroke-width="0.8" opacity="0.6"/>
        </pattern>
      </defs>
      <path d="M 100 60 L 100 200 L 180 200 L 180 60" class="vessel-stroke"/>
      <rect x="100" y="160" width="80" height="40" fill="rgba(200,200,220,0.3)"/>
      <text x="140" y="185" text-anchor="middle" font-size="11">1 L gas</text>
      <rect x="100" y="120" width="80" height="40" fill="url(#hatch10)" opacity="0.4"/>
      <text x="140" y="145" text-anchor="middle" font-size="10">2 kg sand</text>
      <rect x="100" y="110" width="80" height="10" fill="url(#hatch10)" stroke="#1a1a2e" stroke-width="0.5"/>
      <text x="140" y="225" text-anchor="middle" font-style="italic" font-size="14">Device I</text>
      <path d="M 300 60 L 300 200 L 400 200 L 400 60" class="vessel-stroke"/>
      <rect x="300" y="120" width="100" height="80" fill="rgba(200,200,220,0.3)"/>
      <text x="350" y="165" text-anchor="middle" font-size="11">2 L gas</text>
      <rect x="300" y="80" width="100" height="40" fill="url(#hatch10)" opacity="0.4"/>
      <text x="350" y="105" text-anchor="middle" font-size="10">2 kg sand</text>
      <rect x="300" y="70" width="100" height="10" fill="url(#hatch10)" stroke="#1a1a2e" stroke-width="0.5"/>
      <text x="350" y="225" text-anchor="middle" font-style="italic" font-size="14">Device II</text>
    </svg>`,

  topBrickRemoved: `
    <svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hatch11" patternUnits="userSpaceOnUse" width="5" height="5" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="5" stroke="#1a1a2e" stroke-width="0.8" opacity="0.6"/>
        </pattern>
        <marker id="arr11" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M2 1L8 5L2 9" fill="none" stroke="#1a1a2e" stroke-width="1.5" stroke-linecap="round"/>
        </marker>
      </defs>
      <rect x="290" y="20" width="50" height="22" fill="url(#hatch11)" stroke="#1a1a2e" stroke-width="0.5"/>
      <line x1="370" y1="30" x2="400" y2="30" stroke="#1a1a2e" stroke-width="1.5" marker-end="url(#arr11)"/>
      <text x="395" y="20" font-size="11">removed</text>
      <path d="M 200 60 L 200 200 L 320 200 L 320 60" class="vessel-stroke"/>
      <rect x="200" y="100" width="120" height="100" fill="rgba(200,200,220,0.3)"/>
      <text x="260" y="155" text-anchor="middle" font-size="13">ideal gas</text>
      <text x="260" y="175" text-anchor="middle" font-size="11" font-style="italic">isothermal</text>
      <rect x="200" y="90" width="120" height="10" fill="url(#hatch11)" stroke="#1a1a2e" stroke-width="0.5"/>
      <rect x="225" y="68" width="35" height="22" fill="url(#hatch11)" stroke="#1a1a2e" stroke-width="0.5"/>
    </svg>`,

  liquidVsGas: `
    <svg viewBox="0 0 550 260" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr12" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M2 1L8 5L2 9" fill="none" stroke="#1a1a2e" stroke-width="1.5" stroke-linecap="round"/>
        </marker>
      </defs>
      <!-- Axes -->
      <line x1="70" y1="180" x2="240" y2="180" stroke="#1a1a2e" stroke-width="2" marker-end="url(#arr12)"/>
      <line x1="70" y1="180" x2="70" y2="30" stroke="#1a1a2e" stroke-width="2" marker-end="url(#arr12)"/>
      <text x="155" y="210" text-anchor="middle" font-size="14" font-style="italic" font-weight="bold">v̂</text>
      <text x="35" y="105" text-anchor="middle" font-size="14" font-style="italic" font-weight="bold">P</text>
      <!-- Liquid line (vertical) -->
      <line x1="80" y1="40" x2="80" y2="175" stroke="#2a5a8a" stroke-width="2.5"/>
      <!-- Saturation curve (gas line) -->
      <path d="M 80 175 Q 110 140 150 100 T 200 50" fill="none" stroke="#8b2635" stroke-width="2.5"/>
      <!-- Two-phase region (shaded) -->
      <path d="M 80 175 Q 110 140 150 100 T 200 50 L 200 175 Z" fill="rgba(150,100,100,0.15)" stroke="none"/>
      <!-- Pressure lines -->
      <line x1="80" y1="175" x2="180" y2="175" stroke="#1a1a2e" stroke-width="0.8" stroke-dasharray="4,2"/>
      <text x="185" y="185" font-size="11" font-style="italic">P = 10 kPa</text>
      <line x1="80" y1="40" x2="180" y2="40" stroke="#1a1a2e" stroke-width="0.8" stroke-dasharray="4,2"/>
      <text x="185" y="45" font-size="11" font-style="italic">P = 1000 kPa</text>
      <!-- Region labels -->
      <text x="90" y="110" font-size="11" font-weight="bold" fill="#2a5a8a">liquid</text>
      <text x="160" y="80" font-size="11" font-weight="bold" fill="#8b2635">gas</text>
      <!-- Legend box -->
      <rect x="270" y="30" width="250" height="140" fill="none" stroke="#1a1a2e" stroke-width="1.5" rx="4"/>
      <text x="280" y="48" font-size="12" font-weight="bold">P-V Diagram Legend</text>
      <!-- Legend items -->
      <line x1="280" y1="62" x2="310" y2="62" stroke="#2a5a8a" stroke-width="2.5"/>
      <text x="320" y="67" font-size="11">Liquid region (nearly incompressible)</text>
      <path d="M 280 85 Q 295 80 310 85" fill="none" stroke="#8b2635" stroke-width="2.5"/>
      <text x="320" y="90" font-size="11">Gas region (saturation curve)</text>
      <polygon points="280,105 310,105 310,120 280,120" fill="rgba(150,100,100,0.15)" stroke="#1a1a2e" stroke-width="1"/>
      <text x="320" y="115" font-size="11">Two-phase region (liquid + vapor)</text>
      <!-- Process description -->
      <text x="280" y="145" font-size="11" font-weight="bold">Process: Compressed adiabatically</text>
      <!-- Right side description -->
      <text x="280" y="200" text-anchor="start" font-size="12" font-style="italic">compressed</text>
      <text x="280" y="218" text-anchor="start" font-size="12" font-style="italic">adiabatically</text>
      <text x="280" y="240" text-anchor="start" font-size="11">10 kPa → 1000 kPa</text>
    </svg>`,

  isobaricHeat: `
    <svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hatch13" patternUnits="userSpaceOnUse" width="5" height="5" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="5" stroke="#1a1a2e" stroke-width="0.8" opacity="0.6"/>
        </pattern>
        <pattern id="wave13" patternUnits="userSpaceOnUse" width="20" height="7">
          <path d="M0,3.5 Q5,0 10,3.5 T20,3.5" fill="none" stroke="#2a5a8a" stroke-width="0.8"/>
        </pattern>
        <marker id="arr13" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M2 1L8 5L2 9" fill="none" stroke="#8b2635" stroke-width="1.5" stroke-linecap="round"/>
        </marker>
      </defs>
      <path d="M 180 40 L 180 200 L 320 200 L 320 40" class="vessel-stroke"/>
      <rect x="180" y="140" width="140" height="60" fill="url(#wave13)"/>
      <text x="250" y="195" text-anchor="middle" font-size="11" font-style="italic">x = 0.25</text>
      <rect x="180" y="130" width="140" height="10" fill="url(#hatch13)" stroke="#1a1a2e" stroke-width="0.5"/>
      <line x1="80" y1="170" x2="170" y2="170" stroke="#8b2635" stroke-width="2" marker-end="url(#arr13)"/>
      <text x="125" y="160" text-anchor="middle" font-size="13" fill="#8b2635" font-style="italic">Q in</text>
      <text x="250" y="35" text-anchor="middle" font-size="12">isobaric (constant P)</text>
    </svg>`,

  refrigCycle: `
    <svg viewBox="0 0 550 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrR" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M2 1L8 5L2 9" fill="none" stroke="#1a1a2e" stroke-width="1.5" stroke-linecap="round"/>
        </marker>
      </defs>
      <!-- Condenser (top) -->
      <rect x="180" y="20" width="140" height="50" fill="none" stroke="#1a1a2e" stroke-width="2"/>
      <text x="250" y="50" text-anchor="middle" font-size="13" font-weight="bold">condenser</text>
      <text x="180" y="12" font-size="10" font-style="italic">2 (sup. vap)</text>
      <text x="320" y="12" font-size="10" font-style="italic">3 (sat. liq)</text>
      <!-- Heat out from condenser -->
      <line x1="250" y1="10" x2="250" y2="0" stroke="#8b2635" stroke-width="2" marker-end="url(#arrR)"/>
      <text x="270" y="10" font-size="11" font-weight="bold" fill="#8b2635">Q_H out</text>
      <!-- Line from condenser to valve -->
      <line x1="320" y1="45" x2="380" y2="45" stroke="#1a1a2e" stroke-width="1.5" marker-end="url(#arrR)"/>
      <!-- Valve (two triangles sideways - throttle valve) -->
      <polygon points="380,35 400,45 380,55" fill="#1a1a2e"/>
      <polygon points="400,35 420,45 400,55" fill="#1a1a2e"/>
      <text x="400" y="75" text-anchor="middle" font-size="10" font-style="italic">valve</text>
      <!-- Line from valve to evaporator -->
      <line x1="420" y1="45" x2="460" y2="45" stroke="#1a1a2e" stroke-width="1.5" marker-end="url(#arrR)"/>
      <!-- Evaporator (bottom right) -->
      <rect x="380" y="180" width="140" height="50" fill="none" stroke="#1a1a2e" stroke-width="2"/>
      <text x="450" y="210" text-anchor="middle" font-size="13" font-weight="bold">evaporator</text>
      <text x="460" y="235" font-size="10" font-style="italic">4 (two-phase)</text>
      <!-- Heat in to evaporator -->
      <line x1="450" y1="240" x2="450" y2="250" stroke="#2a5a8a" stroke-width="2" marker-end="url(#arrR)"/>
      <text x="470" y="245" font-size="11" font-weight="bold" fill="#2a5a8a">Q_L in</text>
      <!-- Line from evaporator to compressor -->
      <line x1="450" y1="180" x2="450" y2="130" stroke="#1a1a2e" stroke-width="1.5" marker-end="url(#arrR)"/>
      <text x="420" y="155" font-size="10" font-style="italic">1 (sat. vap)</text>
      <!-- Compressor (bottom left) -->
      <circle cx="250" cy="210" r="30" fill="none" stroke="#1a1a2e" stroke-width="2"/>
      <text x="250" y="215" text-anchor="middle" font-size="13" font-weight="bold">compressor</text>
      <!-- Work in to compressor -->
      <line x1="220" y1="210" x2="180" y2="210" stroke="#1a1a2e" stroke-width="2" marker-end="url(#arrR)"/>
      <text x="170" y="200" font-size="11" font-weight="bold">W_in</text>
      <!-- Line from compressor to condenser -->
      <line x1="250" y1="180" x2="250" y2="70" stroke="#1a1a2e" stroke-width="1.5" marker-end="url(#arrR)"/>
    </svg>`,

  nozzleDiffuser: `
    <svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrN" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M2 1L8 5L2 9" fill="none" stroke="#1a1a2e" stroke-width="1.5" stroke-linecap="round"/>
        </marker>
      </defs>
      <text x="100" y="25" text-anchor="middle" font-size="12" font-style="italic">nozzle</text>
      <polygon points="40,50 130,80 130,100 40,130" fill="none" stroke="#1a1a2e" stroke-width="1.5"/>
      <line x1="20" y1="90" x2="40" y2="90" stroke="#1a1a2e" stroke-width="1.5" marker-end="url(#arrN)"/>
      <line x1="130" y1="90" x2="170" y2="90" stroke="#1a1a2e" stroke-width="1.5" marker-end="url(#arrN)"/>
      <text x="20" y="155" font-size="10" font-style="italic">slow, high h</text>
      <text x="135" y="155" font-size="10" font-style="italic">fast, low h</text>
      <text x="370" y="25" text-anchor="middle" font-size="12" font-style="italic">diffuser</text>
      <polygon points="310,80 400,50 400,130 310,100" fill="none" stroke="#1a1a2e" stroke-width="1.5"/>
      <line x1="290" y1="90" x2="310" y2="90" stroke="#1a1a2e" stroke-width="1.5" marker-end="url(#arrN)"/>
      <line x1="400" y1="90" x2="440" y2="90" stroke="#1a1a2e" stroke-width="1.5" marker-end="url(#arrN)"/>
      <text x="280" y="155" font-size="10" font-style="italic">fast, low h</text>
      <text x="395" y="155" font-size="10" font-style="italic">slow, high h</text>
    </svg>`,

};
