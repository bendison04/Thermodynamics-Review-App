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
    <svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg">
      <rect x="80" y="60" width="120" height="80" fill="none" stroke="#1a1a2e" stroke-width="1.5"/>
      <rect x="300" y="60" width="120" height="80" fill="none" stroke="#1a1a2e" stroke-width="1.5"/>
      <line x1="200" y1="80" x2="240" y2="80" stroke="#1a1a2e" stroke-width="1.5"/>
      <line x1="260" y1="80" x2="300" y2="80" stroke="#1a1a2e" stroke-width="1.5"/>
      <line x1="200" y1="120" x2="240" y2="120" stroke="#1a1a2e" stroke-width="1.5"/>
      <line x1="260" y1="120" x2="300" y2="120" stroke="#1a1a2e" stroke-width="1.5"/>
      <path d="M 240 70 L 260 90 M 240 90 L 260 70" stroke="#1a1a2e" stroke-width="1.5" fill="none"/>
      <rect x="240" y="68" width="20" height="24" fill="none" stroke="#1a1a2e" stroke-width="1.5"/>
      <text x="140" y="105" text-anchor="middle" font-style="italic" font-size="14">x = 0.01</text>
      <text x="360" y="105" text-anchor="middle" font-style="italic" font-size="14">x = 0.99</text>
      <text x="250" y="160" text-anchor="middle" font-size="12" font-style="italic">225°C both vessels</text>
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
      <path d="M 405 175 Q 415 165 425 175 Q 415 185 405 175 Z" fill="none" stroke="#8b2635" stroke-width="1.2"/>
      <text x="415" y="225" text-anchor="middle" font-style="italic" font-size="14">Device II</text>
      <text x="415" y="20" text-anchor="middle" font-size="11">heated</text>
    </svg>`,

  pistonSandGrain: `
    <svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg">
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
      <path d="M 180 100 L 180 220 L 320 220 L 320 100" class="vessel-stroke"/>
      <rect x="180" y="130" width="140" height="90" fill="url(#wave5)"/>
      <rect x="180" y="120" width="140" height="10" fill="url(#hatch5)" stroke="#1a1a2e" stroke-width="0.5"/>
      <ellipse cx="220" cy="115" rx="20" ry="6" fill="#d4b59a" stroke="#8b6f47" stroke-width="0.5"/>
      <ellipse cx="240" cy="110" rx="22" ry="7" fill="#d4b59a" stroke="#8b6f47" stroke-width="0.5"/>
      <ellipse cx="270" cy="113" rx="25" ry="6" fill="#d4b59a" stroke="#8b6f47" stroke-width="0.5"/>
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
    <svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr12" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M2 1L8 5L2 9" fill="none" stroke="#1a1a2e" stroke-width="1.5" stroke-linecap="round"/>
        </marker>
      </defs>
      <line x1="60" y1="160" x2="220" y2="160" stroke="#1a1a2e" stroke-width="1.5" marker-end="url(#arr12)"/>
      <line x1="60" y1="160" x2="60" y2="40" stroke="#1a1a2e" stroke-width="1.5" marker-end="url(#arr12)"/>
      <text x="140" y="180" text-anchor="middle" font-size="13" font-style="italic">v̂</text>
      <text x="40" y="100" text-anchor="middle" font-size="13" font-style="italic">P</text>
      <path d="M 80 50 Q 100 80 130 100 T 180 130" fill="none" stroke="#8b2635" stroke-width="1.5"/>
      <text x="170" y="80" font-size="11" fill="#8b2635">gas</text>
      <line x1="80" y1="55" x2="85" y2="155" stroke="#2a5a8a" stroke-width="1.5"/>
      <text x="50" y="50" font-size="11" fill="#2a5a8a">liquid</text>
      <line x1="80" y1="155" x2="200" y2="155" stroke="#1a1a2e" stroke-width="0.5" stroke-dasharray="3,2"/>
      <text x="245" y="158" font-size="10" font-style="italic">10 kPa</text>
      <line x1="80" y1="50" x2="200" y2="50" stroke="#1a1a2e" stroke-width="0.5" stroke-dasharray="3,2"/>
      <text x="245" y="53" font-size="10" font-style="italic">1000 kPa</text>
      <text x="350" y="100" text-anchor="middle" font-size="13" font-style="italic">compressed</text>
      <text x="350" y="118" text-anchor="middle" font-size="13" font-style="italic">adiabatically</text>
      <text x="350" y="140" text-anchor="middle" font-size="11">10 → 1000 kPa</text>
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
    <svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrR" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M2 1L8 5L2 9" fill="none" stroke="#1a1a2e" stroke-width="1.5" stroke-linecap="round"/>
        </marker>
      </defs>
      <rect x="170" y="30" width="160" height="40" fill="none" stroke="#1a1a2e" stroke-width="1.5"/>
      <text x="250" y="55" text-anchor="middle" font-size="13" font-style="italic">condenser</text>
      <line x1="250" y1="20" x2="250" y2="30" stroke="#8b2635" stroke-width="1.5" marker-end="url(#arrR)"/>
      <text x="270" y="22" font-size="10" fill="#8b2635">Q_H out</text>
      <rect x="170" y="190" width="160" height="40" fill="none" stroke="#1a1a2e" stroke-width="1.5"/>
      <text x="250" y="215" text-anchor="middle" font-size="13" font-style="italic">evaporator</text>
      <line x1="250" y1="240" x2="250" y2="250" stroke="#2a5a8a" stroke-width="1.5"/>
      <line x1="250" y1="250" x2="250" y2="240" stroke="#2a5a8a" stroke-width="1.5" marker-end="url(#arrR)"/>
      <text x="270" y="252" font-size="10" fill="#2a5a8a">Q_L in</text>
      <circle cx="380" cy="130" r="22" fill="none" stroke="#1a1a2e" stroke-width="1.5"/>
      <text x="380" y="134" text-anchor="middle" font-size="11">comp</text>
      <line x1="380" y1="190" x2="380" y2="152" stroke="#1a1a2e" stroke-width="1.5" marker-end="url(#arrR)"/>
      <line x1="380" y1="108" x2="380" y2="70" stroke="#1a1a2e" stroke-width="1.5" marker-end="url(#arrR)"/>
      <line x1="410" y1="130" x2="445" y2="130" stroke="#1a1a2e" stroke-width="1.5" marker-end="url(#arrR)"/>
      <text x="430" y="120" font-size="10" font-style="italic">W_in</text>
      <polygon points="120,125 140,135 120,135" fill="#1a1a2e"/>
      <line x1="120" y1="70" x2="120" y2="125" stroke="#1a1a2e" stroke-width="1.5"/>
      <line x1="120" y1="135" x2="120" y2="190" stroke="#1a1a2e" stroke-width="1.5" marker-end="url(#arrR)"/>
      <text x="80" y="135" text-anchor="middle" font-size="11" font-style="italic">valve</text>
      <text x="170" y="22" font-size="10" font-style="italic">2 (sup. vap)</text>
      <text x="170" y="85" font-size="10" font-style="italic">3 (sat. liq)</text>
      <text x="170" y="190" font-size="10" font-style="italic">4 (two-phase)</text>
      <text x="170" y="245" font-size="10" font-style="italic">1 (sat. vap)</text>
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
