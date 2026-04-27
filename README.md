# MCEN 3012 Thermodynamics Quiz

A self-contained study tool for MCEN 3012 Thermodynamics, built around past exam and homework questions.

## Sources

- **Old Exam 2** — multiple-choice questions + free-response rubric annotations
- **Old Final Exam** — multiple-choice questions + free-response rubric annotations
- **Homework 6** — rubric annotations and concept questions

## Features

- **41 multiple-choice questions** covering state changes, entropy & 2nd law, ideal gas, energy balance, and cycles & devices
- Topic filter to drill a specific area
- Live stats: question number, correct count, accuracy, progress bar
- Per-topic score breakdown on the results screen
- Submit → explain flow with color-coded feedback and full reasoning
- Shuffled question order on every run
- Keyboard shortcuts: `1`–`9` to select, `Enter` to submit/advance, `→` to skip
- Inline SVG diagrams for piston-cylinder, two-vessel, partition-tank, turbine, refrigeration cycle, nozzle/diffuser problems
- Pure HTML/CSS/JS — no build step, works offline

## Topics covered

| Filter | Content |
|---|---|
| state changes | piston-cylinder problems, vapor-liquid equilibrium, brick-removal, P-v-T relations for real fluids |
| entropy & 2nd law | heat addition at different T, isothermal expansion, mixing irreversibility, Kelvin-Planck |
| ideal gas | free expansion, isothermal processes, isentropic relations, enthalpy/temperature coupling |
| energy balance | first law, boundary work, isobaric heat addition, mechanical energy equation |
| cycles & devices | turbines, compressors, nozzles, diffusers, throttling valves, refrigeration cycle, isentropic efficiency |

## Usage

Open `index.html` in any modern browser — that's it.

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

## File structure

```
.
├── index.html        # markup and layout
├── styles.css        # all styling
├── js/
│   ├── diagrams.js   # inline SVG diagram strings
│   ├── questions.js  # question bank (41 questions)
│   └── app.js        # quiz engine and keyboard nav
├── Old Exam 2 Solution.pdf
├── Old Final Exam Solutions.pdf
├── Homework 6 Rubric.pdf
├── README.md
└── LICENSE
```

## Adding more questions

All questions live in the `QUESTIONS` array in `js/questions.js`. Each entry:

```js
{
  topic: 'cycles',                        // filter category key
  source: 'Old Exam 2 · Q3',             // displayed as a tag
  question: 'Question text...',
  diagram: 'pumpDiameter',               // optional — key into DIAGRAMS in js/diagrams.js
  options: ['Option a', 'Option b'],
  correct: 0,                            // 0-indexed
  explanation: 'Why this is correct...'
}
```

Valid topic keys: `state`, `entropy`, `ideal-gas`, `energy`, `cycles`

## License

MIT. See LICENSE.
