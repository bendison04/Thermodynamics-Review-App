// Quiz engine for MCEN 3012 Thermodynamics study tool.

let questions = [];
let currentIndex = 0;
let score = 0;
let answered = 0;
let activeFilter = 'all';
let selectedIdx = null;

// Per-topic tracking: { correct, total }
const topicStats = {};

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function letter(i) {
  return String.fromCharCode(97 + i);
}

function applyFilter() {
  if (activeFilter === 'all') {
    questions = shuffle(QUESTIONS);
  } else {
    questions = shuffle(QUESTIONS.filter(q => q.topic === activeFilter));
  }
  currentIndex = 0;
  score = 0;
  answered = 0;
  selectedIdx = null;
  Object.keys(topicStats).forEach(k => delete topicStats[k]);
  render();
}

function updateStats() {
  document.getElementById('total-num').textContent = questions.length;
  document.getElementById('current-num').textContent = Math.min(currentIndex + 1, questions.length);
  document.getElementById('score-display').textContent = score;
  const accuracy = answered > 0 ? Math.round((score / answered) * 100) + '%' : '—';
  document.getElementById('accuracy-display').textContent = accuracy;
  const progress = questions.length > 0 ? (answered / questions.length) * 100 : 0;
  document.getElementById('progress-fill').style.width = progress + '%';
}

function buildTopicBreakdown() {
  const rows = Object.entries(topicStats)
    .sort((a, b) => b[1].total - a[1].total)
    .map(([topic, s]) => {
      const pct = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0;
      const label = TOPIC_LABELS[topic] || topic;
      return `<div class="topic-row">
        <span class="topic-name">${label}</span>
        <span class="topic-score">${s.correct}/${s.total}</span>
        <span class="topic-pct">${pct}%</span>
      </div>`;
    }).join('');
  return rows ? `<div class="topic-breakdown"><h3>By Topic</h3>${rows}</div>` : '';
}

function render() {
  const area = document.getElementById('quiz-area');
  updateStats();

  if (questions.length === 0) {
    area.innerHTML = `
      <div class="complete-screen">
        <h2>No questions match</h2>
        <p class="message">Try a different topic filter.</p>
      </div>`;
    return;
  }

  if (currentIndex >= questions.length) {
    const pct = Math.round((score / questions.length) * 100);
    let message = '';
    if (pct === 100)      message = 'A flawless run. Now do it again with a different filter.';
    else if (pct >= 85)   message = 'Solid mastery. Review the explanations on any you missed.';
    else if (pct >= 70)   message = 'Decent. Walk through the misses and try again.';
    else if (pct >= 50)   message = 'There is work to do. Read each explanation carefully.';
    else                   message = 'Time to revisit the notes. Run it again after some review.';

    area.innerHTML = `
      <div class="complete-screen">
        <h2>Complete</h2>
        <div class="score-display">${score}<span class="total">/${questions.length}</span></div>
        <p class="message">${message}</p>
        ${buildTopicBreakdown()}
        <button class="btn btn-primary" onclick="applyFilter()">Try again</button>
      </div>`;
    return;
  }

  const q = questions[currentIndex];
  const diagramHtml = q.diagram
    ? `<div class="diagram-container">${DIAGRAMS[q.diagram] || ''}</div>`
    : '';

  area.innerHTML = `
    <div class="question-card">
      <div class="question-meta">
        <span class="question-num">Question ${currentIndex + 1}</span>
        <span class="topic-tag">${q.source}</span>
      </div>
      <p class="question-text">${q.question}</p>
      ${diagramHtml}
      <div class="options" id="options"></div>
      <div class="feedback" id="feedback"></div>
      <div class="controls">
        <button class="btn" id="skip-btn" onclick="skipQuestion()">Skip</button>
        <button class="btn btn-primary" id="next-btn" onclick="submitAnswer()" disabled>Submit</button>
      </div>
    </div>
    <div class="kbd-hint">
      <span class="kbd">1</span>–<span class="kbd">${q.options.length}</span> select &nbsp;·&nbsp;
      <span class="kbd">Enter</span> submit / next &nbsp;·&nbsp;
      <span class="kbd">→</span> skip
    </div>`;

  const opts = document.getElementById('options');
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.innerHTML = `<span class="option-letter">${letter(i)}.</span><span>${opt}</span>`;
    btn.onclick = () => selectOption(i);
    btn.dataset.idx = i;
    opts.appendChild(btn);
  });
}

function selectOption(i) {
  if (document.getElementById('feedback').classList.contains('visible')) return;
  selectedIdx = i;
  document.querySelectorAll('.option').forEach((el, idx) => {
    el.classList.toggle('selected', idx === i);
  });
  const nextBtn = document.getElementById('next-btn');
  nextBtn.textContent = 'Submit';
  nextBtn.disabled = false;
  nextBtn.onclick = submitAnswer;
}

function submitAnswer() {
  if (selectedIdx === null) return;
  const fb = document.getElementById('feedback');
  if (fb.classList.contains('visible')) {
    nextQuestion();
    return;
  }

  const q = questions[currentIndex];
  const isCorrect = selectedIdx === q.correct;
  answered++;
  if (isCorrect) score++;

  // Track per-topic stats
  if (!topicStats[q.topic]) topicStats[q.topic] = { correct: 0, total: 0 };
  topicStats[q.topic].total++;
  if (isCorrect) topicStats[q.topic].correct++;

  document.querySelectorAll('.option').forEach((el, idx) => {
    el.disabled = true;
    el.classList.remove('selected');
    if (idx === q.correct) el.classList.add('correct');
    else if (idx === selectedIdx) el.classList.add('wrong');
  });

  fb.className = `feedback visible ${isCorrect ? 'correct' : 'wrong'}`;
  fb.innerHTML = `
    <div class="feedback-header">${isCorrect ? '✓ Correct' : '✗ Not quite'}</div>
    <div>${isCorrect ? '' : `The correct answer is <strong>${letter(q.correct)}</strong>. `}${q.explanation}</div>
  `;

  updateStats();

  const nextBtn = document.getElementById('next-btn');
  nextBtn.textContent = currentIndex + 1 >= questions.length ? 'Finish' : 'Next →';
  nextBtn.disabled = false;
  nextBtn.onclick = nextQuestion;
  document.getElementById('skip-btn').style.display = 'none';
}

function nextQuestion() {
  selectedIdx = null;
  currentIndex++;
  render();
}

function skipQuestion() {
  selectedIdx = null;
  currentIndex++;
  render();
}

// Keyboard navigation
document.addEventListener('keydown', e => {
  const q = questions[currentIndex];
  if (!q) return;

  // Number keys 1–9 select an option
  const num = parseInt(e.key, 10);
  if (num >= 1 && num <= q.options.length) {
    const fb = document.getElementById('feedback');
    if (!fb || fb.classList.contains('visible')) return;
    selectOption(num - 1);
    return;
  }

  if (e.key === 'Enter') {
    const fb = document.getElementById('feedback');
    if (fb && fb.classList.contains('visible')) {
      nextQuestion();
    } else if (selectedIdx !== null) {
      submitAnswer();
    }
    return;
  }

  if (e.key === 'ArrowRight') {
    const fb = document.getElementById('feedback');
    if (fb && !fb.classList.contains('visible')) {
      skipQuestion();
    }
  }
});

// Filter buttons
document.querySelectorAll('.filter-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    activeFilter = chip.dataset.filter;
    applyFilter();
  });
});

// Init
applyFilter();
