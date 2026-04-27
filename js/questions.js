// Question bank for MCEN 3012 Thermodynamics study tool.
//
// Sources:
//   - Old Exam 2 (multiple-choice questions and rubric annotations)
//   - Old Final Exam (MC questions and rubric annotations)
//   - Homework 6 (rubric annotations and concept questions)
//
// "FR (rubric)" tags indicate questions derived from the typed rubric
// annotations on the free-response problems (refrigeration cycle,
// nozzle, mechanical energy equation, isentropic efficiencies).

const TOPIC_LABELS = {
  'state':     'state changes',
  'entropy':   'entropy & 2nd law',
  'ideal-gas': 'ideal gas',
  'energy':    'energy balance',
  'cycles':    'cycles & devices',
};

const QUESTIONS = [

  // ============================================================
  // ORIGINAL 21 — drawn directly from past-exam multiple choice
  // ============================================================

  {
    topic: 'state',
    source: 'Old Exam 2 · Q2',
    question: 'A piston-cylinder device moves between State I and State II by removing one brick. In both states the cylinder contains H₂O in vapor-liquid equilibrium. The pressure is halved, and the volume in State II becomes twice the volume in State I. Consequently, P_I·V_I = P_II·V_II.',
    diagram: 'pistonBrickRemoved',
    options: [
      'Heat was added to the system.',
      'Heat was removed from the system.',
      'The system remained adiabatic.',
      'The state change is impossible.',
      'The state change is possible, but more information is needed to answer.'
    ],
    correct: 4,
    explanation: 'The state change is physically possible (lower pressure, larger volume is consistent with removing a brick). For H₂O in the two-phase region, lowering pressure also lowers the saturation temperature. The energy balance Q = ΔU + W_b depends on the specific saturation values from the steam tables. Some choices give Q > 0, others give Q < 0. Without surrogate numbers from the tables, the direction of heat flow cannot be determined.'
  },
  {
    topic: 'energy',
    source: 'Old Exam 2 · Q3',
    question: 'An electric motor drives a pump to move water through a pipe. The water exits as a free jet into the atmosphere. The pump continuously uses 10 kW of electrical energy, and its efficiency does not change. What would happen to the speed of the water at the inlet to the pump if the outlet pipe diameter is halved?',
    diagram: 'pumpDiameter',
    options: [
      'It increases.',
      'It remains the same.',
      'It decreases.',
      'More information is needed to answer.'
    ],
    correct: 2,
    explanation: 'The mechanical energy equation gives η·Ẇ = ṁ[(P₂-P₁)/ρ + ½(v₂² - v₁²) + g(z₂-z₁)]. With outlet diameter halved, v₂ must increase (mass conservation: v·A = constant). Since the power input and efficiency are fixed, ½v₂² rises sharply, so ½v₁² must decrease to balance. Therefore v₁ decreases.'
  },
  {
    topic: 'state',
    source: 'Old Exam 2 · Q5',
    question: 'Two adiabatic piston-cylinder devices initially contain H₂O in vapor-liquid equilibrium with the same initial quality. Device I has one brick removed. Device II is heated by an electric coil until it reaches the same final volume as Device I. How do the final qualities of the two devices compare?',
    diagram: 'twoAdiabaticDevices',
    options: [
      'x_I > x_II',
      'x_I = x_II',
      'x_I < x_II',
      'More information is needed.',
      'It is not possible.'
    ],
    correct: 2,
    explanation: 'Device I undergoes an adiabatic expansion (brick removed), so its final state moves to lower P at higher v — it ends up cooler and at lower pressure inside the dome. Device II is heated at constant pressure, expanding to the same final volume but staying at the original (higher) pressure. At the same v but higher P (Device II), the state sits further to the right under the dome, giving x_II > x_I.'
  },
  {
    topic: 'state',
    source: 'Old Exam 2 · Q6',
    question: 'Heat is added isobarically to water with a quality of 0.25. Δu of the water is _____ c_v·ΔT.',
    diagram: 'isobaricHeat',
    options: [
      'less than',
      'equal to',
      'greater than'
    ],
    correct: 2,
    explanation: 'Inside the two-phase envelope, adding heat at constant pressure means temperature stays constant (ΔT = 0), so c_v·ΔT = 0. But Δu > 0 because internal energy increases as more liquid vaporizes. So Δu > c_v·ΔT. Even if you heat past the saturated vapor line into superheated, the relation u = u(T) only holds for ideal gases, not water near the dome, so Δu > c_v·ΔT remains true.'
  },
  {
    topic: 'state',
    source: 'Old Exam 2 · Q7',
    question: 'Two rigid vessels contain steam at 225°C. The vessels are connected by two pipes and a valve. The left vessel has x = 0.01 and the right has x = 0.99. Initially the valve is closed. Immediately after the valve is opened, the steam _____.',
    diagram: 'twoVessels',
    options: [
      'rushes into the vessel on the left',
      'rushes into the vessel on the right',
      'does not move'
    ],
    correct: 2,
    explanation: 'Both vessels contain water in vapor-liquid equilibrium at the same temperature (225°C). For a two-phase system at a given temperature, the pressure is uniquely the saturation pressure at that T. Quality only determines the proportion of liquid to vapor, not the pressure. With identical pressures on both sides, no flow occurs immediately after the valve opens.'
  },
  {
    topic: 'state',
    source: 'Old Exam 2 · Q9',
    question: 'A piston contains saturated water vapor. A pile of sand rests on top. A single grain of sand is then placed on top of the pile. The system remains isothermal. What is the final state of the water?',
    diagram: 'pistonSandGrain',
    options: [
      'The water becomes a compressed liquid.',
      'The water becomes a saturated liquid (x = 0).',
      'The water becomes a mixture of liquid and vapor in equilibrium (0 < x < 1).',
      'The water becomes a superheated vapor.'
    ],
    correct: 0,
    explanation: 'Adding any sand raises the pressure above the saturation pressure for the current temperature. To stay at the same T but higher P, the state must move into the compressed liquid region (left of the dome on a P-v diagram). Heat must be removed to keep temperature constant during this compression.'
  },
  {
    topic: 'ideal-gas',
    source: 'Old Exam 2 · Q10',
    question: 'An adiabatic box contains two halves: the left half contains air, and the right half contains a perfect vacuum. They are initially separated by a diaphragm of equal volume, which then ruptures. Find the relationship between P₂ and P₁.',
    diagram: 'airVacuum',
    options: [
      'P₂ < ½ P₁',
      'P₂ = ½ P₁',
      'P₂ > ½ P₁'
    ],
    correct: 1,
    explanation: 'The box is rigid (W = 0) and adiabatic (Q = 0), so ΔU = 0. For an ideal gas, this means ΔT = 0, so T₂ = T₁. Using the ideal gas law: P₂v₂/P₁v₁ = T₂/T₁ = 1. Volume doubles (v₂ = 2v₁), so P₂ = P₁(v₁/v₂) = ½P₁ exactly.'
  },
  {
    topic: 'entropy',
    source: 'Old Final · Q1',
    question: 'Both devices contain the same mass of liquid water and steam in vapor-liquid equilibrium. Device II has an additional brick on top (higher pressure). 10 kJ of heat is added to each.',
    diagram: 'twoDevicesHeat',
    options: [
      'The entropy remains constant in both devices.',
      'The entropy for Device I goes up more.',
      'The entropy for Device II goes up more.',
      'The entropy goes up by the same amount in both devices.'
    ],
    correct: 1,
    explanation: 'For heat addition at constant temperature, ΔS = Q/T. Device II has a higher pressure (extra brick), so a higher saturation temperature T_II > T_I. Same Q divided by larger T gives smaller ΔS. Therefore Device I (the colder one) gains more entropy from the same heat input.'
  },
  {
    topic: 'state',
    source: 'Old Final · Q2',
    question: 'An adiabatic piston-cylinder device contains saturated liquid water. Sand is on top of the piston. Half of the sand is removed one grain at a time, halving the pressure. What is the final state?',
    options: [
      'compressed liquid',
      '0 < x < 1',
      'x = 1',
      'superheated vapor'
    ],
    correct: 1,
    explanation: 'Removing sand one grain at a time is reversible. Combined with adiabatic, the process is isentropic (Δs = 0). Starting at saturated liquid and dropping pressure isentropically (vertical line down on a T-s diagram from the saturated liquid line) puts the final state inside the two-phase dome with 0 < x < 1.'
  },
  {
    topic: 'ideal-gas',
    source: 'Old Final · Q3',
    question: 'Two piston-cylinder devices contain ideal gas with 2 kg of sand resting on top. Initially Device I contains 1 L of gas, Device II contains 2 L. Sand is removed one grain at a time until 1 kg remains on each. The state change is isothermal.',
    diagram: 'twoSandDevices',
    options: [
      'Heat was not added to either device.',
      'More heat was added to Device I.',
      'More heat was added to Device II.',
      'The same amount of heat was added to both devices.'
    ],
    correct: 2,
    explanation: 'Both devices undergo the same pressure drop (sand mass halved), and the process is isothermal so ΔU = 0 for each, meaning Q = W. Boundary work W = ∫P dV. Device II has twice the gas (twice the volume at the same pressure), so it does twice as much expansion work for the same pressure ratio. More work means more heat added: Device II receives more heat.'
  },
  {
    topic: 'energy',
    source: 'Old Final · Q4',
    question: 'Some liquid water is in equilibrium with its vapor in a piston-cylinder device. 100 kJ of heat is added, boiling off a little water. The temperature does not change. Which is true?',
    options: [
      'u₂ = u₁ + Q',
      'h₂ = h₁ + Q',
      'Δh = 0 and Δu = 0',
      'Both a and b are true.'
    ],
    correct: 1,
    explanation: 'For an isobaric process (the piston floats at constant P), the first law gives Q = ΔU + P·ΔV = (U₂ - U₁) + (P₂V₂ - P₁V₁) = H₂ - H₁. Per unit mass: Q = h₂ - h₁, so h₂ = h₁ + Q. Internal energy alone does not equal h₁ + Q because boundary work was done.'
  },
  {
    topic: 'ideal-gas',
    source: 'Old Final · Q5(I)',
    question: 'A volume of ideal gas at 300 kPa is expanded in the classroom to a pressure of 100 kPa and a volume that is three times as large. The absolute temperature of the air ___.',
    diagram: 'airExpand',
    options: [
      'increases by a factor of three',
      'increases, but not by a factor of three',
      'decreases',
      'remains the same'
    ],
    correct: 3,
    explanation: 'Use ideal gas law: P₁V₁/T₁ = P₂V₂/T₂. Plugging in: (300)(1)/T₁ = (100)(3)/T₂, which gives 300/T₁ = 300/T₂, so T₂ = T₁. Temperature is unchanged.'
  },
  {
    topic: 'ideal-gas',
    source: 'Old Final · Q5(II)',
    question: 'A volume of ideal gas at 300 kPa is expanded in the classroom to a pressure of 100 kPa and a volume that is three times as large. What about the heat transfer?',
    options: [
      'Heat flowed out of the air.',
      'Heat flowed into the air.',
      'Heat transfer was zero (adiabatic).'
    ],
    correct: 1,
    explanation: 'The gas did boundary work as it expanded (W_b > 0). To keep its internal energy (and thus temperature, for an ideal gas) constant, heat must have flowed in to balance the work done. Q = ΔU + W = 0 + W > 0.'
  },
  {
    topic: 'ideal-gas',
    source: 'Old Final · Q7',
    question: 'If the pressure of an ideal gas is reduced adiabatically and isentropically, its enthalpy ___.',
    options: [
      'decreases',
      'stays the same',
      'increases'
    ],
    correct: 0,
    explanation: 'Isentropic adiabatic expansion of an ideal gas drops temperature: T₂ = T₁(P₂/P₁)^((k-1)/k), and P₂ < P₁ means T₂ < T₁. For an ideal gas, h = c_p·T, so h is a function of T only. Lower T means lower h, so enthalpy decreases.'
  },
  {
    topic: 'state',
    source: 'Old Final · Q8',
    question: 'If it is done adiabatically, it ___ possible to form some liquid by squeezing a saturated vapor.',
    options: [
      'is',
      'is not'
    ],
    correct: 1,
    explanation: 'On a T-s diagram, squeezing (compressing) saturated vapor moves the state up and to the right (entropy can only increase or stay the same for an adiabatic process). Both directions move the state away from the two-phase dome into the superheated region. Forming liquid would require moving down-left into the dome, which requires removing heat — impossible adiabatically.'
  },
  {
    topic: 'entropy',
    source: 'Old Final · Q9',
    question: 'A volume of ideal gas is increased isothermally. The entropy of the gas ___.',
    options: [
      'increases',
      'remains the same',
      'decreases'
    ],
    correct: 0,
    explanation: 'Use Δs = c_v·ln(T₂/T₁) + R·ln(v₂/v₁). Isothermal means the first term is zero. Since v₂ > v₁, ln(v₂/v₁) > 0, so Δs > 0. Entropy increases.'
  },
  {
    topic: 'ideal-gas',
    source: 'Old Final · Q10',
    question: 'The top brick is removed and the ideal gas expands isothermally. The enthalpy of the gas ___.',
    diagram: 'topBrickRemoved',
    options: [
      'goes up',
      'remains the same',
      'goes down'
    ],
    correct: 1,
    explanation: 'For an ideal gas, enthalpy is a function of temperature only: h = c_p·T. If the process is isothermal, T does not change, so h does not change.'
  },
  {
    topic: 'energy',
    source: 'Homework 6 · Q4',
    question: 'Air is contained in part of a tank (left side, volume 2L). The other part (right side, volume L) is a vacuum. The partition in the tank is removed. What happens to the enthalpy of the air?',
    diagram: 'airVacuum',
    options: [
      'h₂ = ⅓ h₁',
      'h₂ = ⅔ h₁',
      'h₂ = h₁',
      'h₂ = 2 h₁',
      'h₂ = 3 h₁'
    ],
    correct: 2,
    explanation: 'The tank is rigid (no boundary work) and adiabatic. ΔU = Q - W = 0. For an ideal gas, ΔU = m·c_v·ΔT = 0 means ΔT = 0. Since h = c_p·T for an ideal gas, h₂ = h₁.'
  },
  {
    topic: 'cycles',
    source: 'Homework 6 · Q6',
    question: 'Does it require more work to adiabatically compress a saturated liquid or an ideal gas from 10 kPa to 1000 kPa? If so, which one requires more work?',
    diagram: 'liquidVsGas',
    options: [
      'Yes, the saturated liquid.',
      'Yes, the ideal gas.',
      'No, the same amount of work is needed in both cases.'
    ],
    correct: 1,
    explanation: 'Liquid is essentially incompressible, so its volume barely changes during compression. Boundary work W = ∫P dV is tiny — almost no area under the P-v curve. The ideal gas, on the other hand, undergoes a large volume change as it compresses, so a large area sits under the P-v curve. The ideal gas requires significantly more work.'
  },
  {
    topic: 'cycles',
    source: 'Homework 6 · Q9',
    question: 'An ideal gas flows through two turbines. Both turbines generate the same amount of shaft work. They both have the same inlet temperature T_warm and exhaust temperature T_cool. P_high and P_low are also the same. However, their isentropic efficiencies are different (70% vs 90%). Is this possible?',
    diagram: 'twoTurbines',
    options: [
      'This is possible.',
      'This is impossible.'
    ],
    correct: 1,
    explanation: 'For an ideal gas turbine, actual work Ẇ_out = ṁ·c_p·(T₁ - T₂), which depends only on inlet/outlet temperatures and ṁ. Both turbines have identical inlet and outlet conditions, so they must have identical actual work. Isentropic work Ẇ_out,s = ṁ·c_p·(T₁ - T_2s), and T_2s only depends on the pressure ratio — which is also the same. So both Ẇ_out and Ẇ_out,s are identical for both turbines, which means η_T = Ẇ_out/Ẇ_out,s must also be identical. Different efficiencies is impossible.'
  },
  {
    topic: 'cycles',
    source: 'Homework 6 · Q10',
    question: 'When operated adiabatically, which device, if any, can cause the following state transition for an ideal gas: enthalpy stays constant while pressure increases?',
    options: [
      'throttling valve',
      'nozzle',
      'diffuser',
      'turbine',
      'compressor',
      'none of the above'
    ],
    correct: 5,
    explanation: 'Constant enthalpy for an ideal gas means constant temperature (h = c_p·T). For an adiabatic process with constant T but increasing P, the entropy change is Δs = c_p·ln(T₂/T₁) - R·ln(P₂/P₁) = 0 - R·ln(P₂/P₁) < 0. Entropy decreasing in an adiabatic process violates the second law — impossible for any device.'
  },

  // ============================================================
  // NEW QUESTIONS — derived from rubric annotations and concept
  // extensions of the existing material.
  // ============================================================

  {
    topic: 'cycles',
    source: 'Old Exam 2 · FR (rubric)',
    question: 'In a vapor-compression refrigeration cycle, the throttling valve is best modeled as:',
    diagram: 'refrigCycle',
    options: [
      'an isobaric process',
      'an isothermal process',
      'an isenthalpic pressure reduction',
      'an isentropic expansion with shaft work output'
    ],
    correct: 2,
    explanation: 'Across a throttling valve there is no shaft work and (to a good approximation) no heat transfer or change in kinetic/potential energy. The steady-flow energy balance reduces to h₁ = h₂ — an isenthalpic pressure drop. The valve is highly irreversible: pressure drops sharply (often into the two-phase dome) but enthalpy stays the same.'
  },
  {
    topic: 'cycles',
    source: 'Old Exam 2 · FR (rubric)',
    question: 'In a vapor-compression refrigeration cycle, the condenser is best modeled as:',
    diagram: 'refrigCycle',
    options: [
      'isobaric heat removal (Q out, P ≈ const.)',
      'isobaric heat addition',
      'isenthalpic pressure reduction',
      'isentropic compression'
    ],
    correct: 0,
    explanation: 'The condenser rejects heat at the high-pressure side of the cycle. Its pressure drop is small enough to neglect, so it is modeled as isobaric heat removal: superheated vapor enters and saturated (or slightly subcooled) liquid leaves while temperature drops as the working fluid condenses.'
  },
  {
    topic: 'cycles',
    source: 'Old Exam 2 · FR (rubric)',
    question: 'After the throttling valve in a vapor-compression refrigeration cycle, the working fluid is at about 20% quality (x ≈ 0.2). What region of the P-h diagram is this?',
    diagram: 'refrigCycle',
    options: [
      'compressed liquid (left of the dome)',
      'saturated liquid line (x = 0)',
      'inside the two-phase envelope',
      'saturated vapor line (x = 1)',
      'superheated vapor (right of the dome)'
    ],
    correct: 2,
    explanation: 'A quality between 0 and 1 means vapor-liquid equilibrium under the dome. About 20% by mass is vapor, so the state sits roughly 20% of the way across the two-phase envelope on a P-h diagram.'
  },
  {
    topic: 'cycles',
    source: 'Old Exam 2 · FR (rubric)',
    question: 'In the ideal vapor-compression refrigeration cycle, the compressor is modeled as:',
    diagram: 'refrigCycle',
    options: [
      'isobaric',
      'isentropic (adiabatic + reversible)',
      'isenthalpic',
      'isothermal'
    ],
    correct: 1,
    explanation: 'In the ideal cycle the compressor is adiabatic (Q = 0) and reversible (no entropy generation), so it is isentropic. Real compressors fall short of this ideal, which is captured by the isentropic efficiency η_C.'
  },
  {
    topic: 'cycles',
    source: 'Old Exam 2 · FR (rubric)',
    question: 'For an adiabatic nozzle with negligible potential-energy change, the steady-flow energy equation per unit mass simplifies to:',
    diagram: 'nozzleDiffuser',
    options: [
      'h₁ - h₂ = ½(v₂² - v₁²)',
      'h₁ + h₂ = 0',
      'h₁ - h₂ = w_shaft',
      'h₁ = h₂'
    ],
    correct: 0,
    explanation: 'A nozzle has no shaft work and no heat transfer. The first law for steady flow becomes h₁ + ½v₁² = h₂ + ½v₂². Rearranging: h₁ - h₂ = ½(v₂² - v₁²). The drop in enthalpy is converted into kinetic energy.'
  },
  {
    topic: 'cycles',
    source: 'Old Exam 2 · FR (rubric)',
    question: 'Across an adiabatic diffuser, neglecting potential-energy change, the enthalpy of the gas:',
    diagram: 'nozzleDiffuser',
    options: [
      'decreases',
      'remains the same',
      'increases'
    ],
    correct: 2,
    explanation: 'A diffuser slows the flow (KE drops). With no shaft work, no heat, and negligible PE change, h₁ + ½v₁² = h₂ + ½v₂². If v₂ < v₁, then h₂ > h₁ — enthalpy increases. (A diffuser is essentially a nozzle run in reverse.)'
  },
  {
    topic: 'cycles',
    source: 'Old Exam 2 · FR (rubric)',
    question: 'The isentropic efficiency of a turbine is defined as:',
    options: [
      'η_T = W_actual / W_isentropic',
      'η_T = W_isentropic / W_actual',
      'η_T = Q_in / W_actual',
      'η_T = W_actual / Q_in'
    ],
    correct: 0,
    explanation: 'For a turbine the isentropic case is the maximum possible work output. The actual turbine produces less because of irreversibilities, so η_T = W_actual / W_isentropic ≤ 1.'
  },
  {
    topic: 'cycles',
    source: 'Old Exam 2 · FR (rubric)',
    question: 'The isentropic efficiency of a compressor is defined as:',
    options: [
      'η_C = W_actual / W_isentropic',
      'η_C = W_isentropic / W_actual',
      'η_C = Q_out / W_actual',
      'η_C = W_actual / W_actual'
    ],
    correct: 1,
    explanation: 'For a compressor the isentropic case is the minimum work required. Any irreversibility makes you do more, so the actual work is larger and η_C = W_isentropic / W_actual ≤ 1. Note this is the opposite ordering from turbines — in both cases the efficiency is bounded above by 1.'
  },
  {
    topic: 'energy',
    source: 'Old Final · FR (rubric)',
    question: 'Electrical power input to a pump moving water through a pipe with friction is distributed between:',
    options: [
      'shaft work output by the pump only',
      'useful mechanical power delivered to the fluid plus power dissipated by friction',
      'kinetic energy gain only',
      'pressure rise only, since liquid is incompressible'
    ],
    correct: 1,
    explanation: 'Energy in = energy out. The electrical input drives the pump shaft; the shaft adds mechanical energy (pressure rise, kinetic energy, elevation gain) to the fluid; friction dissipates the rest as heat. The pump efficiency η is exactly the fraction that reaches the fluid as useful mechanical work.'
  },
  {
    topic: 'entropy',
    source: 'Old Final · FR (rubric)',
    question: 'Which of the following processes is forbidden by the Second Law of Thermodynamics?',
    options: [
      'Complete conversion of work into heat (e.g., friction heating)',
      'Spontaneous heat flow from a hot reservoir to a cold reservoir',
      'Complete conversion of heat from a single reservoir into work in a cycle',
      'Heat flow from a hot to a cold reservoir with some heat extracted as work'
    ],
    correct: 2,
    explanation: 'This is the Kelvin-Planck statement: no cyclic device can convert heat from a single reservoir entirely into work with no other effect. Friction freely converts work into heat (a, allowed). Heat naturally flows hot → cold (b, allowed). A heat engine converts some heat to work while rejecting the rest to a cold reservoir (d, allowed). Only complete heat → work in a cycle is forbidden.'
  },
  {
    topic: 'entropy',
    source: 'Old Final · MC notes (rubric)',
    question: 'Two streams of fluid at different temperatures mix in an insulated chamber. The total entropy of the contents:',
    options: [
      'decreases',
      'remains the same',
      'increases'
    ],
    correct: 2,
    explanation: 'Mixing of fluids at different temperatures (or compositions) is fundamentally irreversible. Even though no heat crosses the boundary, internal irreversibility generates entropy: ΔS_gen > 0. The hot stream cools, the cold stream warms, and total entropy rises.'
  },
  {
    topic: 'entropy',
    source: 'Old Final · MC notes (rubric)',
    question: 'Sand is removed one grain at a time from a piston-cylinder containing an ideal gas. The cylinder is adiabatic. The entropy of the gas:',
    options: [
      'decreases',
      'remains the same',
      'increases',
      'depends on the direction of motion'
    ],
    correct: 1,
    explanation: 'Removing one grain at a time approximates a reversible (quasi-static) process — at every instant the system is in mechanical equilibrium with the external load. Combined with the adiabatic boundary, this is an isentropic process: Δs = 0.'
  },
  {
    topic: 'state',
    source: 'Old Final · MC notes (rubric)',
    question: 'A piston-cylinder of gas slowly rises in the atmosphere as it expands, then slowly descends back to ground level. The expansion and contraction are reversible and adiabatic. At the top of its rise, the temperature of the gas compared to its initial temperature at ground level is:',
    options: [
      'higher',
      'the same',
      'lower',
      'cannot be determined'
    ],
    correct: 2,
    explanation: 'As the gas rises and the piston moves outward, the gas does boundary work on the atmosphere. With Q = 0, internal energy decreases and so does temperature. (When the cylinder returns to ground, the atmosphere does work back on the gas, returning it to the original temperature — this is a reversible cycle.)'
  },
  {
    topic: 'state',
    source: 'Homework 6 · MC notes (rubric)',
    question: 'A substance undergoes a process in which the pressure is halved, the temperature increases, AND the specific volume decreases. Which of the following must be true?',
    options: [
      'The substance is an ideal gas.',
      'The substance cannot be an ideal gas.',
      'The process is impossible.',
      'The substance must be a saturated liquid.'
    ],
    correct: 1,
    explanation: 'For an ideal gas Pv = RT, so v = RT/P. Halving P and raising T BOTH push v upward, so an ideal gas could not have v decrease here. The substance must be real (e.g., water near the dome where steam tables — not Pv = RT — govern), and the state must cross both isobars and isotherms in a way only a non-ideal substance allows.'
  },
  {
    topic: 'energy',
    source: 'Old Exam 2 · FR (rubric)',
    question: 'Water exits the pump described in Old Exam 2 · Q3 as a free jet at outlet diameter D₂ = D₁/2. By what factor does the outlet velocity exceed the inlet velocity? (Treat water as incompressible.)',
    diagram: 'pumpDiameter',
    options: [
      '2',
      '4',
      '½',
      '¼'
    ],
    correct: 1,
    explanation: 'Mass conservation for incompressible flow: A₁v₁ = A₂v₂. Halving D₂ reduces A₂ by a factor of 4 (area ∝ D²). Therefore v₂ = 4·v₁. (This is what makes the outlet kinetic-energy term dominant in the mechanical energy equation in Q2.)'
  },
  {
    topic: 'cycles',
    source: 'MCEN 3012 · concept',
    question: 'Which device intentionally raises the pressure of a flowing fluid by adding shaft work?',
    options: [
      'turbine',
      'nozzle',
      'diffuser',
      'compressor (or pump)',
      'throttling valve'
    ],
    correct: 3,
    explanation: 'A compressor (gas) or pump (liquid) consumes shaft work to raise pressure. A diffuser also raises pressure, but does so by slowing the flow with no shaft work. Turbines extract work; nozzles drop pressure to gain velocity; throttles drop pressure with no work or heat.'
  },
  {
    topic: 'state',
    source: 'MCEN 3012 · concept',
    question: 'For a compressed (subcooled) liquid where compressed-liquid tables are unavailable, the standard engineering approximation is:',
    options: [
      'treat properties (v, u, s) as those of the saturated liquid at the same temperature',
      'treat properties as those of the saturated liquid at the same pressure',
      'treat the liquid as an ideal gas',
      'use the saturated vapor values at the same temperature'
    ],
    correct: 0,
    explanation: 'Liquid properties depend weakly on pressure, so v ≈ v_f(T), u ≈ u_f(T), s ≈ s_f(T). For enthalpy a small correction h ≈ h_f(T) + v_f(T)·[P − P_sat(T)] is sometimes added, but the same-temperature saturated-liquid approximation is the workhorse.'
  },
  {
    topic: 'entropy',
    source: 'MCEN 3012 · concept',
    question: 'For an internally reversible heat addition Q to a system at constant temperature T, the entropy change of the system is:',
    options: [
      'ΔS = T·Q',
      'ΔS = Q / T',
      'ΔS = Q·ln(T)',
      'ΔS depends on the substance'
    ],
    correct: 1,
    explanation: 'For an internally reversible process, dS = δQ/T. At constant T this integrates to ΔS = Q/T. This is exactly why the Old Final · Q1 problem (10 kJ added at two different saturation temperatures) gives a larger entropy change to the cooler device.'
  },
  {
    topic: 'cycles',
    source: 'MCEN 3012 · concept',
    question: 'For an adiabatic compressor with a fixed pressure ratio, increasing the isentropic efficiency η_C from 70% to 90% will:',
    options: [
      'increase the actual work required',
      'decrease the actual work required',
      'leave the actual work unchanged',
      'increase the heat removal'
    ],
    correct: 1,
    explanation: 'η_C = W_isentropic / W_actual, so W_actual = W_isentropic / η_C. The isentropic work is fixed by inlet T and the pressure ratio. Raising η_C shrinks the denominator-correction, so W_actual drops. A more efficient compressor uses less power.'
  },
  {
    topic: 'energy',
    source: 'Old Final · FR (rubric)',
    question: 'A pump discharges water as a free jet into the atmosphere. In the mechanical-energy equation, the pressure at the outlet (the jet) is taken to be:',
    diagram: 'pumpDiameter',
    options: [
      'the pump discharge pressure (high)',
      'atmospheric pressure',
      'the saturation pressure of water',
      'zero (vacuum)'
    ],
    correct: 1,
    explanation: 'A free jet exhausts into the atmosphere, so its surface pressure equals atmospheric. The pressure at the outlet boundary in the mechanical-energy equation is therefore P_atm — usually the same datum as the inlet, which makes (P₂ - P₁)/ρ small or zero in the simplified form.'
  },

];
