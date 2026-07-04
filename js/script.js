// ponytail: single-file panel logic, no framework
const MODULES = [
  { id:1, title:"Cambio de paradigma y uso responsable de IA", file:"modulo1",
    lessons:[
      { id:1, title:"Programación tradicional vs desarrollo con IA", file:"m1-leccion1" },
      { id:2, title:"El ingeniero como arquitecto-supervisor", file:"m1-leccion2" },
      { id:3, title:"Qué puede y qué no puede delegarse a la IA", file:"m1-leccion3" },
      { id:4, title:"Reglas mínimas de uso responsable", file:"m1-leccion4" },
      { id:5, title:"Escenarios de decisión (Quiz)", file:"m1-leccion5" },
    ]},
  { id:2, title:"De la idea al requerimiento", file:"modulo2",
    lessons:[
      { id:1, title:"El problema de pedir código con ideas vagas", file:"m2-leccion1" },
      { id:2, title:"Preguntas de descubrimiento", file:"m2-leccion2" },
      { id:3, title:"Requerimientos funcionales", file:"m2-leccion3" },
      { id:4, title:"Criterios de aceptación", file:"m2-leccion4" },
      { id:5, title:"Casos borde", file:"m2-leccion5" },
      { id:6, title:"Convertir una idea en requerimiento (Ejercicio)", file:"m2-leccion6" },
      { id:7, title:"Detectar requerimientos incompletos (Quiz)", file:"m2-leccion7" },
    ]},
  { id:3, title:"Contexto y Prompts Encadenados", file:"modulo3",
    lessons:[
      { id:1, title:"Prompt vs Contexto", file:"m3-leccion1" },
      { id:2, title:"Qué información necesita la IA", file:"m3-leccion2" },
      { id:3, title:"Qué información sobra o confunde", file:"m3-leccion3" },
      { id:4, title:"Plantilla de contexto", file:"m3-leccion4" },
      { id:5, title:"Encadenación de prompts", file:"m3-leccion5" },
      { id:6, title:"Crear una cadena de prompts (Ejercicio)", file:"m3-leccion6" },
      { id:7, title:"Evaluar si un prompt es claro (Quiz)", file:"m3-leccion7" },
    ]},
  { id:4, title:"Desarrollo asistido por IA", file:"modulo4",
    lessons:[
      { id:1, title:"Qué es el desarrollo asistido por IA", file:"m4-leccion1" },
      { id:2, title:"Qué no debe hacerse: pedir 'todo el sistema'", file:"m4-leccion2" },
      { id:3, title:"Implementar por pasos pequeños", file:"m4-leccion3" },
      { id:4, title:"Cómo pedir correcciones a la IA", file:"m4-leccion4" },
      { id:5, title:"Cómo revisar una respuesta de código", file:"m4-leccion5" },
      { id:6, title:"Corregir una mala salida de IA (Ejercicio)", file:"m4-leccion6" },
      { id:7, title:"Decidir si aceptar o rechazar código (Quiz)", file:"m4-leccion7" },
    ]},
  { id:5, title:"Validación, pruebas y documentación", file:"modulo5",
    lessons:[
      { id:1, title:"Por qué no se debe confiar ciegamente en la IA", file:"m5-leccion1" },
      { id:2, title:"Pruebas mínimas necesarias", file:"m5-leccion2" },
      { id:3, title:"Casos borde y errores esperados", file:"m5-leccion3" },
      { id:4, title:"Revisión de código generado", file:"m5-leccion4" },
      { id:5, title:"Documentar prompts y decisiones", file:"m5-leccion5" },
      { id:6, title:"Auditar una solución generada por IA (Ejercicio)", file:"m5-leccion6" },
      { id:7, title:"Quiz de validación", file:"m5-leccion7" },
    ]},
  { id:6, title:"Proyecto Final Integrador", file:"modulo6",
    lessons:[
      { id:1, title:"Recibir una idea inicial", file:"m6-leccion1" },
      { id:2, title:"Convertir la idea en un requerimiento", file:"m6-leccion2" },
      { id:3, title:"Crear el contexto para la IA", file:"m6-leccion3" },
      { id:4, title:"Crear una cadena de prompts", file:"m6-leccion4" },
      { id:5, title:"Generar una solución asistida por IA", file:"m6-leccion5" },
      { id:6, title:"Validar la solución", file:"m6-leccion6" },
      { id:7, title:"Documentar el proceso completo", file:"m6-leccion7" },
      { id:8, title:"Autoevaluación final (Quiz / Checklist)", file:"m6-leccion8" },
    ]},
];

const TOOLS = [
  { name:"ChatGPT", desc:"Asistente conversacional de OpenAI. Ideal para generar código, explicar conceptos y depurar.", url:"https://chat.openai.com" },
  { name:"GitHub Copilot", desc:"Autocompletado de código con IA integrado en VS Code, JetBrains y más.", url:"https://github.com/features/copilot" },
  { name:"Claude", desc:"Asistente de IA de Anthropic con fuerte capacidad de análisis y generación de código.", url:"https://claude.ai" },
  { name:"Gemini", desc:"Asistente multimodal de Google para investigación técnica y generación de código.", url:"https://gemini.google.com" },
  { name:"Cursor", desc:"Editor de código con IA integrada diseñado para desarrollo asistido.", url:"https://cursor.sh" },
  { name:"Perplexity", desc:"Buscador con IA para investigación técnica y resolución de dudas de programación.", url:"https://perplexity.ai" },
];

const TOTAL_LESSONS = MODULES.reduce((s,m) => s + m.lessons.length, 0);

function getUser() {
  try { return JSON.parse(localStorage.getItem('cursoUser')) || null }
  catch { return null }
}

function saveUser(u) {
  localStorage.setItem('cursoUser', JSON.stringify(u))
}

function getCompleted() {
  try { return JSON.parse(localStorage.getItem('cursoCompleted')) || [] }
  catch { return [] }
}

function saveCompleted(arr) {
  localStorage.setItem('cursoCompleted', JSON.stringify(arr))
}

function getGrades() {
  try { return JSON.parse(localStorage.getItem('cursoGrades')) || {} }
  catch { return {} }
}

function saveGrades(g) {
  localStorage.setItem('cursoGrades', JSON.stringify(g))
}

document.addEventListener('DOMContentLoaded', function() {
  initPrefs()
  initPromptBlocks()
  if (document.getElementById('panelContent')) {
    initPanel()
  }
  if (document.getElementById('configForm')) {
    initConfig()
  }
  if (document.getElementById('registroForm')) {
    document.getElementById('registroForm').addEventListener('submit', handleRegistro)
  }
  if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', handleLogin)
  }
})

function handleRegistro(e) {
  e.preventDefault()
  const name = document.getElementById('regName').value.trim()
  const email = document.getElementById('regEmail').value.trim()
  const pass = document.getElementById('regPassword').value
  if (!name || !email || !pass) { alert('Completa todos los campos'); return }
  const users = JSON.parse(localStorage.getItem('cursoUsers') || '[]')
  if (users.find(u => u.email === email)) { alert('Este correo ya está registrado'); return }
  const user = { name, email, password: pass, photo: '' }
  users.push(user)
  localStorage.setItem('cursoUsers', JSON.stringify(users))
  const session = { name, email, photo: '' }
  saveUser(session)
  window.location.href = 'panel.html'
}

function handleLogin(e) {
  e.preventDefault()
  const email = document.getElementById('loginEmail').value.trim()
  const pass = document.getElementById('loginPassword').value
  const users = JSON.parse(localStorage.getItem('cursoUsers') || '[]')
  const found = users.find(u => u.email === email && u.password === pass)
  if (!found) { alert('Correo o contraseña incorrectos'); return }
  const session = { name: found.name, email: found.email, photo: found.photo || '' }
  saveUser(session)
  window.location.href = 'panel.html'
}

function handleSuperAdminLogin(e) {
  e.preventDefault()
  const email = document.getElementById('superadminEmail').value.trim()
  const pass = document.getElementById('superadminPassword').value
  if (email === 'superadmin@cleverlabs.com' && pass === 'SuperAdmin123') {
    const session = { name: 'Super Administrador', email: email, photo: '', isAdmin: true, isSuperAdmin: true }
    saveUser(session)
    window.location.href = 'superadmin.html'
  } else {
    alert('Credenciales incorrectas')
  }
}

function initPanel() {
  const user = getUser()
  if (!user) { window.location.href = 'login.html'; return }

  renderPerfilEnPanel(user)
  updateProgress()
  renderInitialView()

  document.getElementById('sidebarToggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('collapsed')
  })

  document.querySelectorAll('.sidebar-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      renderView(this.dataset.section)
    })
  })

  document.getElementById('profileTrigger').addEventListener('click', function(e) {
    e.stopPropagation()
    document.getElementById('profileDropdown').classList.toggle('show')
  })

  document.addEventListener('click', function() {
    document.getElementById('profileDropdown').classList.remove('show')
  })

  document.getElementById('photoInput').addEventListener('change', function(e) {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = function(ev) {
      const dataUrl = ev.target.result
      document.getElementById('dropdownPic').src = dataUrl
      document.getElementById('profilePic').src = dataUrl
      const user = getUser()
      if (user) { user.photo = dataUrl; saveUser(user) }
    }
    reader.readAsDataURL(file)
  })
}

function renderPerfilEnPanel(user) {
  const src = user.photo || 'img/default-avatar.svg'
  document.getElementById('profilePic').src = src
  document.getElementById('dropdownPic').src = src
  document.getElementById('dropdownName').value = user.name
  document.getElementById('dropdownEmail').textContent = user.email
}

function guardarPerfil() {
  const user = getUser()
  if (!user) return
  user.name = document.getElementById('dropdownName').value.trim() || user.name
  user.photo = document.getElementById('dropdownPic').src
  saveUser(user)
  renderPerfilEnPanel(user)
  document.getElementById('profileDropdown').classList.remove('show')
  alert('Perfil actualizado')
}

function cerrarSesion() {
  localStorage.removeItem('cursoUser')
}

function renderInitialView() {
  const content = document.getElementById('panelContent')
  const completed = getCompleted()
  if (completed.length > 0) {
    const lastKey = completed[completed.length - 1]
    const m = lastKey.match(/m(\d+)-l(\d+)/)
    if (m) {
      const mod = MODULES.find(function(x) { return x.id === parseInt(m[1]) })
      const les = mod && mod.lessons.find(function(x) { return x.id === parseInt(m[2]) })
      if (mod && les) {
        content.innerHTML = '<div class="progress-banner"><p><strong>Continuar desde:</strong> Módulo ' + mod.id + ', Lección ' + les.id + ' — ' + les.title + '</p><button class="boton" onclick="loadLesson(' + mod.id + ',' + les.id + ')">Continuar</button></div>'
        return
      }
    }
  }
  content.innerHTML = '<div class="progress-banner watermark"><p>Sin progreso</p></div>'
}

function renderView(section) {
  const content = document.getElementById('panelContent')
  if (section === 'modulos') {
    content.innerHTML = '<h2 class="section-title">Módulos del Curso</h2><div class="modulos-grid" id="modulosGrid"></div>'
    const grid = document.getElementById('modulosGrid')
    MODULES.forEach(function(m) {
      const card = document.createElement('div')
      card.className = 'modulo-card'
      card.style.cursor = 'pointer'
      card.innerHTML = '<h3>Módulo ' + m.id + '</h3><p>' + m.title + '</p><span class="boton" style="margin-top:0">Ver módulo</span>'
      card.addEventListener('click', function() { renderModuleLessons(m.id) })
      grid.appendChild(card)
    })
  } else if (section === 'herramientas') {
    content.innerHTML = '<h2 class="section-title">Herramientas</h2><div class="tools-grid" id="toolsGrid"></div>'
    const grid = document.getElementById('toolsGrid')
    TOOLS.forEach(function(t) {
      const card = document.createElement('div')
      card.className = 'tool-card'
      card.innerHTML = '<h3>' + t.name + '</h3><p>' + t.desc + '</p><a href="' + t.url + '" target="_blank" class="boton" style="margin-top:10px">Visitar</a>'
      grid.appendChild(card)
    })
  } else if (section === 'calificaciones') {
    renderCalificaciones()
  }
}

function renderModuleLessons(modId) {
  const mod = MODULES.find(function(m) { return m.id === modId })
  if (!mod) return
  const content = document.getElementById('panelContent')
  const completed = getCompleted()
  const records = getGradeRecords()
  let html = '<h2 class="section-title">Módulo ' + mod.id + ': ' + mod.title + '</h2>'
  html += '<ul class="lesson-list">'

  // Find the first incomplete lesson index to mark subsequent as locked
  let firstIncompleteIdx = -1
  for (var i = 0; i < mod.lessons.length; i++) {
    const key = 'm' + mod.id + '-l' + mod.lessons[i].id
    if (completed.indexOf(key) === -1) { firstIncompleteIdx = i; break }
  }

  mod.lessons.forEach(function(les, idx) {
    const key = 'm' + mod.id + '-l' + les.id
    const done = completed.indexOf(key) !== -1
    // Unlocked if: already completed, first incomplete, or previous lesson is completed
    const unlocked = done || idx === firstIncompleteIdx || (firstIncompleteIdx !== -1 && idx < firstIncompleteIdx)
    const record = records.find(function(r) { return r.lessonKey === key })
    const gradeStr = record ? ' (' + record.grade + '%)' : ''
    html += '<li>'
    html += '<a href="#" data-module="' + mod.id + '" data-lesson="' + les.id + '" style="' + (unlocked ? '' : 'opacity:0.6') + '">'
    html += '<span class="lesson-item">'
    if (done) {
      html += '<span class="check-icon">✓</span>'
    } else if (!unlocked) {
      html += '<span class="lock-icon">🔒</span>'
    }
    html += '<span class="lesson-title">' + les.title + gradeStr + '</span>'
    html += '</span>'
    html += '</a></li>'
  })
  html += '</ul>'
  html += '<button class="boton" onclick="renderView(\'modulos\')" style="margin-top:20px">← Volver a módulos</button>'
  content.innerHTML = html
  content.querySelectorAll('.lesson-list a').forEach(function(a) {
    a.addEventListener('click', function(e) {
      e.preventDefault()
      loadLesson(parseInt(this.dataset.module), parseInt(this.dataset.lesson))
    })
  })
}

// --- Almacenamiento de lecciones editadas ---
function getEditedLessons() {
  try { return JSON.parse(localStorage.getItem('cursoEditedLessons')) || {} }
  catch { return {} }
}
function saveEditedLessons(obj) {
  localStorage.setItem('cursoEditedLessons', JSON.stringify(obj))
}
function getEditedLesson(key) {
  return getEditedLessons()[key] || null
}
function setEditedLesson(key, html) {
  var all = getEditedLessons()
  all[key] = html
  saveEditedLessons(all)
}

async function loadLesson(modId, lesId) {
  const mod = MODULES.find(function(m) { return m.id === modId })
  if (!mod) return
  const les = mod.lessons.find(function(l) { return l.id === lesId })
  if (!les) return
  const content = document.getElementById('panelContent')
  content.innerHTML = '<div class="loading">Cargando lección...</div>'
  try {
    var html
    var key = 'm' + modId + '-l' + lesId
    var edited = getEditedLesson(key)
    if (edited) {
      html = edited
    } else {
      var res = await fetch('lecciones/' + les.file + '.html')
      html = await res.text()
    }
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')
    const article = doc.querySelector('.lesson-content')
    if (!article) { content.innerHTML = '<p>Error al cargar la lección</p>'; return }
    content.innerHTML = ''
    const wrapper = document.createElement('div')
    wrapper.className = 'lesson-view'
    wrapper.innerHTML = article.innerHTML
    content.appendChild(wrapper)

    initPromptBlocks()

    // If it's a quiz lesson, init interactive quiz
    const subtitleEl = wrapper.querySelector('.subtitle')
    if (subtitleEl && /quiz/i.test(subtitleEl.textContent)) {
      initQuiz(wrapper, modId, lesId)
    }

    // Completion button
    renderCompleteButton(wrapper, modId, lesId)

    // Evidence section (skip for quiz lessons)
    if (!subtitleEl || !/quiz/i.test(subtitleEl.textContent)) {
      if (modId === 3) {
        initPromptEvidenceSection(wrapper, key)
      } else {
        initEvidenceSection(wrapper, key)
      }
    }

    const nav = document.createElement('div')
    nav.className = 'lesson-nav'
    const idx = mod.lessons.indexOf(les)
    if (idx > 0) {
      const prev = mod.lessons[idx - 1]
      nav.innerHTML += '<button class="prev" onclick="loadLesson(' + modId + ',' + prev.id + ')">← ' + prev.title + '</button>'
    }
    if (idx < mod.lessons.length - 1) {
      const next = mod.lessons[idx + 1]
      nav.innerHTML += '<button class="next" onclick="loadLesson(' + modId + ',' + next.id + ')">' + next.title + ' →</button>'
    }
    nav.innerHTML += '<button class="back" onclick="renderModuleLessons(' + modId + ')">Volver al módulo</button>'
    content.appendChild(nav)
    window.scrollTo(0, 0)
  } catch(e) {
    content.innerHTML = '<p>Error al cargar la lección: ' + e.message + '</p>'
  }
}

function marcarCompletada(modId, lesId) {
  const completed = getCompleted()
  const key = 'm' + modId + '-l' + lesId
  if (completed.indexOf(key) === -1) {
    completed.push(key)
    saveCompleted(completed)
    updateProgress()
  }
}

function updateProgress() {
  const completed = getCompleted()
  const pct = Math.round((completed.length / TOTAL_LESSONS) * 100)
  const fill = document.getElementById('progressFill')
  const label = document.getElementById('progressPercent')
  if (fill) fill.style.width = pct + '%'
  if (label) label.textContent = pct + '% (' + completed.length + '/' + TOTAL_LESSONS + ')'
}

function renderCalificaciones() {
  const records = getGradeRecords()
  const completed = getCompleted()
  const content = document.getElementById('panelContent')

  // Stats
  const totalLessons = TOTAL_LESSONS
  const completedCount = completed.length
  const approvedCount = records.filter(function(r) { return r.status === 'Aprobado' }).length
  const avg = records.length > 0 ? Math.round(records.reduce(function(s,r) { return s + r.grade }, 0) / records.length) : 0

  let html = '<h2 class="section-title">Calificaciones</h2>'

  // Summary cards
  html += '<div class="grades-summary">'
  html += '<div class="summary-card"><h4>Promedio general</h4><div class="summary-value">' + avg + '%</div></div>'
  html += '<div class="summary-card"><h4>Lecciones completadas</h4><div class="summary-value">' + completedCount + '/' + totalLessons + '</div></div>'
  html += '<div class="summary-card"><h4>Cuestionarios aprobados</h4><div class="summary-value">' + approvedCount + '</div></div>'
  html += '</div>'

  // Full grades table
  if (records.length === 0) {
    html += '<p style="text-align:center;color:#94a3b8;padding:30px">Aún no hay calificaciones registradas. Completa lecciones y quizzes para ver tus resultados aquí.</p>'
  } else {
    html += '<div class="grade-module"><table class="grade-table">'
    html += '<thead><tr><th>Módulo</th><th>Lección</th><th>Calificación</th><th>Fecha</th><th>Estado</th></tr></thead><tbody>'
    // Sort by date desc
    const sorted = records.slice().sort(function(a,b) { return b.date.localeCompare(a.date) })
    sorted.forEach(function(r) {
      const badgeClass = r.status === 'Aprobado' ? 'badge-aprobado' : 'badge-reprobado'
      html += '<tr><td>Módulo ' + r.module + '</td><td>' + r.lesson + '</td><td><strong>' + r.grade + '%</strong></td><td>' + r.date + '</td><td><span class="badge ' + badgeClass + '">' + r.status + '</span></td></tr>'
    })
    html += '</tbody></table></div>'
  }

  // Legacy: show module grade tables too
  html += '<h3 style="margin-top:30px;color:#0f172a;font-size:1.1rem">Detalle por módulo</h3>'
  MODULES.forEach(function(mod) {
    html += '<div class="grade-module"><h3>Módulo ' + mod.id + ': ' + mod.title + '</h3><table class="grade-table"><thead><tr><th>Lección</th><th>Calificación</th><th>Estado</th></tr></thead><tbody>'
    mod.lessons.forEach(function(les) {
      const key = 'm' + mod.id + '-l' + les.id
      const record = records.find(function(r) { return r.lessonKey === key })
      const gradeVal = record ? record.grade : '—'
      const statusVal = record ? '<span class="badge ' + (record.status === 'Aprobado' ? 'badge-aprobado' : 'badge-reprobado') + '">' + record.status + '</span>' : '<span style="color:#94a3b8">Pendiente</span>'
      html += '<tr><td>' + les.title + '</td><td><strong>' + gradeVal + (typeof gradeVal === 'number' ? '%' : '') + '</strong></td><td>' + statusVal + '</td></tr>'
    })
    html += '</tbody></table></div>'
  })

  content.innerHTML = html
}

// ============================================================
// PREFERENCES (dark mode, font size, animations)
// ============================================================

const PREFS_KEY = 'cursoPrefs'

function getPrefs() {
  try { return JSON.parse(localStorage.getItem(PREFS_KEY)) || defaultPrefs() }
  catch { return defaultPrefs() }
}

function defaultPrefs() {
  return { darkMode: false, fontSize: 'medium', animations: true }
}

function savePrefs(p) {
  localStorage.setItem(PREFS_KEY, JSON.stringify(p))
}

function applyPrefs(p) {
  const body = document.body
  // Light/dark mode
  body.classList.remove('dark-mode', 'light-mode')
  body.classList.add(p.darkMode ? 'dark-mode' : 'light-mode')
  // Font size
  body.classList.remove('font-small', 'font-medium', 'font-large')
  if (p.fontSize === 'small') body.classList.add('font-small')
  else if (p.fontSize === 'large') body.classList.add('font-large')
  // Animations
  body.classList.toggle('no-animations', !p.animations)
}

function initPrefs() {
  // Apply saved prefs on page load
  const p = getPrefs()
  applyPrefs(p)

  // Bind UI controls if on config page
  const darkToggle = document.getElementById('prefDarkMode')
  const fontSizeBtns = document.querySelectorAll('.font-btn')
  const animToggle = document.getElementById('prefAnimations')
  if (!darkToggle) return

  // Set initial state
  darkToggle.checked = p.darkMode
  animToggle.checked = p.animations
  fontSizeBtns.forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.size === p.fontSize)
  })

  // Dark mode toggle
  darkToggle.addEventListener('change', function() {
    const prefs = getPrefs()
    prefs.darkMode = this.checked
    savePrefs(prefs)
    applyPrefs(prefs)
    updatePreview()
  })

  // Font size buttons
  fontSizeBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      fontSizeBtns.forEach(function(b) { b.classList.remove('active') })
      this.classList.add('active')
      const prefs = getPrefs()
      prefs.fontSize = this.dataset.size
      savePrefs(prefs)
      applyPrefs(prefs)
      updatePreview()
    })
  })

  // Animations toggle
  animToggle.addEventListener('change', function() {
    const prefs = getPrefs()
    prefs.animations = this.checked
    savePrefs(prefs)
    applyPrefs(prefs)
    updatePreview()
  })
}

// Update the preview box in config page
function updatePreview() {
  const preview = document.querySelector('.preview-box .preview-card')
  if (!preview) return
  const p = getPrefs()
  preview.style.background = p.darkMode ? '#0f172a' : '#fff'
  preview.style.color = p.darkMode ? '#e2e8f0' : '#333'
  const title = preview.querySelector('h4')
  if (title) title.style.color = p.darkMode ? '#60a5fa' : '#2563eb'
}

// ============================================================
// GRADES (new structure for quiz grades)
// ============================================================

const GRADE_KEY = 'cursoGradeRecords'

function getGradeRecords() {
  try { return JSON.parse(localStorage.getItem(GRADE_KEY)) || [] }
  catch { return [] }
}

function saveGradeRecords(arr) {
  localStorage.setItem(GRADE_KEY, JSON.stringify(arr))
}

function getTodayStr() {
  const d = new Date()
  return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0')
}

function isQuizLesson(lessonTitle) {
  return /quiz/i.test(lessonTitle)
}

// ============================================================
// QUIZ — interactive quiz builder
// ============================================================

function initQuiz(container, modId, lesId) {
  // Find questions: h2 with "Pregunta" or similar numbering
  const questions = container.querySelectorAll('h2')
  if (questions.length === 0) return null

  const quizWrap = document.createElement('div')
  quizWrap.className = 'quiz-wrap'

  const quizData = [] // { questionText, options: [{letter,text}], answer }
  let validQuiz = false

  questions.forEach(function(q) {
    const qText = q.textContent.trim()
    // Check if this looks like a question (contains "Pregunta" or "Checklist" etc)
    if (!/pregunta|checklist|autoevaluación/i.test(qText)) return

    // Next sibling until next h2 or conlusion/conclusion
    let el = q.nextElementSibling
    let questionP = null
    const options = []
    let answerFound = null
    let explanation = ''

    while (el && el.tagName !== 'H2') {
      if (el.tagName === 'P' && !el.querySelector('strong')) {
        questionP = el.textContent.trim()
      }
      if (el.tagName === 'UL' || el.tagName === 'OL') {
        const items = el.querySelectorAll('li')
        items.forEach(function(li) {
          const txt = li.textContent.trim()
          if (/^[a-z][\)\.]/.test(txt)) {
            options.push({ letter: txt[0], text: txt.substring(2).trim() })
          }
        })
      }
      if (el.tagName === 'P' && el.querySelector('strong')) {
        const strong = el.querySelector('strong')
        const strongText = strong.textContent.trim()
        if (/respuesta/i.test(strongText)) {
          const match = strongText.match(/[:\s]+([a-dA-D])/i) || strongText.match(/\b([a-dA-D])\b/)
          if (match) answerFound = match[1].toLowerCase()
        } else if (/explicación/i.test(strongText)) {
          explanation = el.textContent.replace(/^Explicación:\s*/i, '').trim()
        }
      }
      el = el.nextElementSibling
    }

    if (options.length > 0) {
      quizData.push({ questionText: questionP || qText, options: options, answer: answerFound, explanation: explanation })
      validQuiz = true
    }
  })

  if (!validQuiz) return null

  // Build interactive quiz
  let html = '<h3 style="text-align:center;margin-bottom:15px;color:#2563eb">📝 Quiz interactivo</h3>'
  quizData.forEach(function(q, idx) {
    html += '<div class="quiz-question">'
    html += '<p><strong>Pregunta ' + (idx+1) + ':</strong> ' + q.questionText + '</p>'
    q.options.forEach(function(opt) {
      html += '<div class="quiz-option" data-q="' + idx + '" data-letter="' + opt.letter + '">'
      html += '<input type="radio" name="quiz-q' + idx + '" id="quiz-q' + idx + '-' + opt.letter + '" value="' + opt.letter + '">'
      html += '<label for="quiz-q' + idx + '-' + opt.letter + '">' + opt.letter + ') ' + opt.text + '</label>'
      html += '</div>'
    })
    html += '<div class="quiz-explanation" id="quiz-explanation-' + idx + '" style="display:none;"></div>'
    html += '</div>'
  })
  html += '<button class="btn-quiz-submit" id="btnQuizSubmit">Enviar respuestas</button>'
  html += '<button class="btn-quiz-retry" id="btnQuizRetry" style="display:none;">Volver a intentar</button>'
  html += '<div id="quizResult" class="quiz-result" style="display:none"></div>'

  // Hide original questions
  questions.forEach(function(q) {
    if (/pregunta/i.test(q.textContent)) {
      q.style.display = 'none'
      let s = q.nextElementSibling
      while (s && s.tagName !== 'H2') {
        const next = s.nextElementSibling
        s.style.display = 'none'
        s = next
      }
    }
  })

  quizWrap.innerHTML = html
  container.appendChild(quizWrap)

  // Submit handler
  document.getElementById('btnQuizSubmit').addEventListener('click', function() {
    let correct = 0
    const total = quizData.length
    let allAnswered = true

    // Clear previous results
    document.querySelectorAll('.quiz-option').forEach(function(opt) {
      opt.classList.remove('correct', 'wrong', 'disabled')
    })
    document.querySelectorAll('.quiz-explanation').forEach(function(d) { d.style.display = 'none' })

    // Check all answered
    quizData.forEach(function(q, idx) {
      const selected = document.querySelector('input[name="quiz-q' + idx + '"]:checked')
      if (!selected) allAnswered = false
    })

    if (!allAnswered) {
      const resultDiv = document.getElementById('quizResult')
      resultDiv.style.display = 'block'
      resultDiv.textContent = '⚠️ Debes responder todas las preguntas antes de verificar.'
      resultDiv.className = 'quiz-result reprobado'
      return
    }

    quizData.forEach(function(q, idx) {
      const selected = document.querySelector('input[name="quiz-q' + idx + '"]:checked')
      if (selected) {
        const letter = selected.value
        const optDiv = selected.closest('.quiz-option')
        if (letter === q.answer) {
          correct++
          optDiv.classList.add('correct')
        } else {
          optDiv.classList.add('wrong')
          document.querySelectorAll('.quiz-option[data-q="' + idx + '"]').forEach(function(o) {
            if (o.dataset.letter === q.answer) o.classList.add('correct')
          })
        }
      } else {
        document.querySelectorAll('.quiz-option[data-q="' + idx + '"]').forEach(function(o) {
          if (o.dataset.letter === q.answer) o.classList.add('correct')
        })
      }
      // Show explanation
      const explDiv = document.getElementById('quiz-explanation-' + idx)
      if (explDiv && q.explanation) {
        explDiv.style.display = 'block'
        explDiv.innerHTML = '<strong>Explicación:</strong> ' + q.explanation
      }
    })

    document.querySelectorAll('.quiz-option').forEach(function(o) { o.classList.add('disabled') })
    document.querySelectorAll('.quiz-option input').forEach(function(i) { i.disabled = true })
    this.disabled = true

    const pct = Math.round((correct / total) * 100)
    const passed = pct >= 80
    const resultDiv = document.getElementById('quizResult')
    resultDiv.style.display = 'block'

    let msg = 'Calificación: ' + pct + '% (' + correct + '/' + total + ')'
    if (passed) {
      msg += ' — ✅ Aprobado'
    } else {
      msg += ' — ❌ Reprobado. Puedes volver a intentarlo.'
    }
    resultDiv.textContent = msg
    resultDiv.className = 'quiz-result ' + (passed ? 'aprobado' : 'reprobado')

    document.getElementById('btnQuizRetry').style.display = passed ? 'none' : 'inline-block'

    // Save grade record
    const mod = MODULES.find(function(m) { return m.id === modId })
    const les = mod && mod.lessons.find(function(l) { return l.id === lesId })
    if (mod && les) {
      const records = getGradeRecords()
      const existing = records.findIndex(function(r) { return r.lessonKey === 'm' + modId + '-l' + lesId })
      const record = {
        lessonKey: 'm' + modId + '-l' + lesId,
        module: modId,
        moduleTitle: mod.title,
        lesson: les.title,
        grade: pct,
        date: getTodayStr(),
        status: passed ? 'Aprobado' : 'Reprobado'
      }
      if (existing !== -1) {
        records[existing] = record
      } else {
        records.push(record)
      }
      saveGradeRecords(records)
    }

    if (passed) {
      marcarCompletada(modId, lesId)
      renderCompleteButton(document.querySelector('.lesson-view'), modId, lesId)
    }
  })

  // Retry handler
  document.getElementById('btnQuizRetry').addEventListener('click', function() {
    quizData.forEach(function(q, idx) {
      const inputs = document.querySelectorAll('input[name="quiz-q' + idx + '"]')
      inputs.forEach(function(i) { i.checked = false; i.disabled = false })
      document.querySelectorAll('.quiz-option[data-q="' + idx + '"]').forEach(function(o) {
        o.classList.remove('correct', 'wrong', 'disabled')
      })
      const explDiv = document.getElementById('quiz-explanation-' + idx)
      if (explDiv) explDiv.style.display = 'none'
    })
    document.getElementById('btnQuizSubmit').disabled = false
    document.getElementById('btnQuizRetry').style.display = 'none'
    document.getElementById('quizResult').style.display = 'none'
  })

  return quizWrap
}

// ============================================================
// LESSON COMPLETION BUTTON
// ============================================================

function renderCompleteButton(container, modId, lesId) {
  const wrap = document.createElement('div')
  wrap.className = 'complete-lesson-wrap'

  const btn = document.createElement('button')
  btn.className = 'btn-complete'

  const completed = getCompleted()
  const key = 'm' + modId + '-l' + lesId
  const isCompleted = completed.indexOf(key) !== -1

  if (isCompleted) {
    btn.disabled = true
    btn.innerHTML = '✓ Lección completada'
    btn.style.background = '#22c55e'
  } else {
    btn.innerHTML = '✓ Marcar lección como completada'
    btn.addEventListener('click', function() {
      marcarCompletada(modId, lesId)

      // Also save a grade record for non-quiz lessons (auto-100% for completion)
      const mod = MODULES.find(function(m) { return m.id === modId })
      const les = mod && mod.lessons.find(function(l) { return l.id === lesId })
      if (mod && les && !isQuizLesson(les.title)) {
        const records = getGradeRecords()
        const existing = records.findIndex(function(r) { return r.lessonKey === key })
        if (existing === -1) {
          records.push({
            lessonKey: key,
            module: modId,
            moduleTitle: mod.title,
            lesson: les.title,
            grade: 100,
            date: getTodayStr(),
            status: 'Aprobado'
          })
          saveGradeRecords(records)
        }
      }

      btn.disabled = true
      btn.innerHTML = '✓ Lección completada'
      updateProgress()
      // Refresh module list icon when user navigates back
    })
  }

  wrap.appendChild(btn)
  container.appendChild(wrap)
}

// ============================================================
// EVIDENCE SECTION
// ============================================================

function initEvidenceSection(container, lessonKey) {
  const form = container.querySelector('#evidenceForm-' + lessonKey)
  if (!form) return
  const saved = localStorage.getItem('evidencia_' + lessonKey)
  if (saved) {
    try {
      const data = JSON.parse(saved)
      form.style.display = 'none'
      var fnEl = container.querySelector('#fileName-' + lessonKey)
      var rfEl = container.querySelector('#savedReflection-' + lessonKey)
      var subEl = container.querySelector('#evidenceSubmitted-' + lessonKey)
      if (fnEl) fnEl.textContent = data.fileName
      if (rfEl) rfEl.textContent = data.reflection
      if (subEl) subEl.style.display = 'block'
    } catch(e) {}
  }
}

function enviarEvidencia(lessonKey) {
  var fileInput = document.getElementById('fileInput-' + lessonKey)
  var reflection = document.getElementById('reflection-' + lessonKey)
  var msg = document.getElementById('msg-' + lessonKey)

  if (!fileInput || !reflection || !msg) return

  if (!fileInput.files || !fileInput.files[0]) {
    msg.innerHTML = '⚠️ Por favor, selecciona un archivo para subir.'
    msg.style.color = '#ef4444'
    return
  }
  if (!reflection.value.trim()) {
    msg.innerHTML = '⚠️ Por favor, escribe una reflexión sobre lo que aprendiste.'
    msg.style.color = '#ef4444'
    return
  }

  var evidence = {
    fileName: fileInput.files[0].name,
    reflection: reflection.value.trim(),
    timestamp: new Date().toISOString()
  }

  localStorage.setItem('evidencia_' + lessonKey, JSON.stringify(evidence))

  document.getElementById('evidenceForm-' + lessonKey).style.display = 'none'
  document.getElementById('fileName-' + lessonKey).textContent = evidence.fileName
  document.getElementById('savedReflection-' + lessonKey).textContent = evidence.reflection
  document.getElementById('evidenceSubmitted-' + lessonKey).style.display = 'block'
  msg.innerHTML = ''
}

function actualizarContador(lessonKey) {
  var textarea = document.getElementById('reflection-' + lessonKey)
  var counter = document.getElementById('counter-' + lessonKey)
  if (textarea && counter) {
    counter.textContent = textarea.value.length
  }
}

// ============================================================
// ADMIN PANEL
// ============================================================

function initAdminPanel() {
  const user = getUser()
  if (!user || !user.isAdmin) { window.location.href = 'login.html'; return }

  // Set role badge and profile info
  var roleBadge = document.getElementById('adminRoleBadge')
  if (roleBadge) {
    roleBadge.textContent = user.isSuperAdmin ? 'SUPER ADMIN' : 'ADMIN'
    roleBadge.style.background = user.isSuperAdmin ? '#dc2626' : '#f59e0b'
  }
  var nameEl = document.getElementById('dropdownAdminName')
  if (nameEl) nameEl.textContent = user.name
  var emailEl = document.getElementById('dropdownAdminEmail')
  if (emailEl) emailEl.textContent = user.email

  // Register last login
  let logins = JSON.parse(localStorage.getItem('cursoLogins') || '[]')
  logins.unshift({ email: user.email, date: getTodayStr(), time: new Date().toLocaleTimeString() })
  if (logins.length > 50) logins = logins.slice(0, 50)
  localStorage.setItem('cursoLogins', JSON.stringify(logins))

  // Sidebar toggle
  document.getElementById('sidebarToggle')?.addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('collapsed')
  })

  // Profile dropdown
  document.getElementById('profileTrigger')?.addEventListener('click', function(e) {
    e.stopPropagation()
    document.getElementById('profileDropdown').classList.toggle('show')
  })
  document.addEventListener('click', function() {
    document.getElementById('profileDropdown')?.classList.remove('show')
  })

  // Sidebar buttons
  document.querySelectorAll('.sidebar-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      renderAdminSection(this.dataset.section)
    })
  })

  // Default view
  renderAdminSection('dashboard')
}

function renderAdminSection(section) {
  const content = document.getElementById('adminContent')
  if (!content) return

  switch(section) {
    case 'dashboard': renderAdminDashboard(content); break
    case 'usuarios': renderAdminUsers(content); break
    case 'modulos': renderAdminModulos(content); break
    case 'lecciones': renderAdminLecciones(content); break
    case 'calificaciones': renderAdminCalificaciones(content); break
    case 'config': renderAdminConfig(content); break
    default: renderAdminDashboard(content)
  }
}

function renderAdminDashboard(content) {
  const users = JSON.parse(localStorage.getItem('cursoUsers') || '[]')
  const completed = getCompleted()
  const records = getGradeRecords()
  const logins = JSON.parse(localStorage.getItem('cursoLogins') || '[]')

  // Stats
  const totalUsers = users.length
  const completedCount = completed.length
  const avg = records.length > 0 ? Math.round(records.reduce(function(s,r) { return s + r.grade }, 0) / records.length) : 0

  // Most advanced module
  const modCounts = {}
  completed.forEach(function(key) {
    const m = key.match(/m(\d+)/)
    if (m) modCounts[m[1]] = (modCounts[m[1]] || 0) + 1
  })
  let topMod = 'Ninguno'
  let topCount = 0
  Object.keys(modCounts).forEach(function(k) {
    if (modCounts[k] > topCount) { topCount = modCounts[k]; topMod = 'Módulo ' + k }
  })

  let html = '<h2 class="section-title">Dashboard</h2>'
  html += '<div class="admin-stats-grid">'
  html += '<div class="admin-stat"><h4>Usuarios registrados</h4><div class="stat-value">' + totalUsers + '</div></div>'
  html += '<div class="admin-stat"><h4>Lecciones completadas</h4><div class="stat-value">' + completedCount + '/' + TOTAL_LESSONS + '</div></div>'
  html += '<div class="admin-stat"><h4>Promedio general</h4><div class="stat-value">' + avg + '%</div></div>'
  html += '<div class="admin-stat"><h4>Módulo más avanzado</h4><div class="stat-value">' + topMod + '</div></div>'
  html += '</div>'

  // Last logins
  html += '<div class="admin-section"><h3>Últimos ingresos</h3>'
  if (logins.length === 0) {
    html += '<p style="color:#94a3b8">Sin registros</p>'
  } else {
    logins.slice(0, 10).forEach(function(log) {
      html += '<div class="login-item">' + log.email + ' — ' + log.date + ' ' + log.time + '</div>'
    })
  }
  html += '</div>'

  content.innerHTML = html
}

function renderAdminUsers(content) {
  const users = JSON.parse(localStorage.getItem('cursoUsers') || '[]')
  const completed = getCompleted()

  let html = '<h2 class="section-title">Usuarios</h2>'
  html += '<div class="admin-table-wrap"><table class="admin-table">'
  html += '<thead><tr><th>Nombre</th><th>Correo</th><th>Progreso</th><th>Estado</th><th>Acciones</th></tr></thead><tbody>'

  if (users.length === 0) {
    html += '<tr><td colspan="5" style="text-align:center;color:#94a3b8;padding:20px">No hay usuarios registrados</td></tr>'
  } else {
    users.forEach(function(u, idx) {
      const userCompleted = completed.length // simplistic: total system progress
      const pct = Math.round((userCompleted / TOTAL_LESSONS) * 100)
      html += '<tr>'
      html += '<td><strong>' + u.name + '</strong></td>'
      html += '<td>' + u.email + '</td>'
      html += '<td>' + userCompleted + '/' + TOTAL_LESSONS + ' (' + pct + '%)</td>'
      html += '<td><span class="badge badge-aprobado">Activo</span></td>'
      html += '<td><button class="btn-small btn-edit" onclick="alert(\'Editar usuario: ' + u.name + '\')">Editar</button> '
      html += '<button class="btn-small btn-delete" onclick="eliminarUsuario(' + idx + ')">Eliminar</button> '
      html += '<button class="btn-small btn-view" onclick="alert(\'Progreso de ' + u.name + ': ' + userCompleted + ' lecciones\')">Ver progreso</button></td>'
      html += '</tr>'
    })
  }
  html += '</tbody></table></div>'
  content.innerHTML = html
}

function eliminarUsuario(idx) {
  if (!confirm('¿Eliminar este usuario?')) return
  const users = JSON.parse(localStorage.getItem('cursoUsers') || '[]')
  users.splice(idx, 1)
  localStorage.setItem('cursoUsers', JSON.stringify(users))
  renderAdminSection('usuarios')
}

function renderAdminLecciones(content) {
  let html = '<h2 class="section-title">Lecciones</h2>'
  html += '<div class="admin-table-wrap"><table class="admin-table">'
  html += '<thead><tr><th>Módulo</th><th>Lección</th><th>Orden</th><th>Estado</th><th>Acciones</th></tr></thead><tbody>'

  MODULES.forEach(function(mod) {
    mod.lessons.forEach(function(les, idx) {
      const key = 'm' + mod.id + '-l' + les.id
      const hidden = JSON.parse(localStorage.getItem('cursoHiddenLessons') || '[]')
      const isHidden = hidden.indexOf(key) !== -1
      html += '<tr>'
      html += '<td>Módulo ' + mod.id + '</td>'
      html += '<td>' + les.title + '</td>'
      html += '<td>' + (idx + 1) + '</td>'
      html += '<td>' + (isHidden ? '<span class="badge badge-reprobado">Oculta</span>' : '<span class="badge badge-aprobado">Visible</span>') + '</td>'
      html += '<td>'
      html += '<button class="btn-small btn-edit" onclick="adminEditLesson(' + mod.id + ',' + les.id + ')">Editar</button> '
      html += '<button class="btn-small btn-view" onclick="alert(\'Cambiar orden (simulado)\')">Orden</button> '
      if (isHidden) {
        html += '<button class="btn-small badge-aprobado" onclick="mostrarLeccion(\'' + key + '\')">Mostrar</button>'
      } else {
        html += '<button class="btn-small badge-reprobado" onclick="ocultarLeccion(\'' + key + '\')">Ocultar</button>'
      }
      html += '</td>'
      html += '</tr>'
    })
  })

  html += '</tbody></table></div>'
  content.innerHTML = html
}

function ocultarLeccion(key) {
  let hidden = JSON.parse(localStorage.getItem('cursoHiddenLessons') || '[]')
  if (hidden.indexOf(key) === -1) hidden.push(key)
  localStorage.setItem('cursoHiddenLessons', JSON.stringify(hidden))
  renderAdminSection('lecciones')
}

function mostrarLeccion(key) {
  let hidden = JSON.parse(localStorage.getItem('cursoHiddenLessons') || '[]')
  hidden = hidden.filter(function(h) { return h !== key })
  localStorage.setItem('cursoHiddenLessons', JSON.stringify(hidden))
  renderAdminSection('lecciones')
}

// --- Editor de contenido de lecciones (superadmin) ---
function adminEditLesson(modId, lesId) {
  var mod = MODULES.find(function(m) { return m.id === modId })
  if (!mod) return
  var les = mod.lessons.find(function(l) { return l.id === lesId })
  if (!les) return
  var content = document.getElementById('adminContent')
  var key = 'm' + modId + '-l' + lesId

  content.innerHTML = '<div class="loading">Cargando editor...</div>'

  // Load current content (edited version or original)
  var edited = getEditedLesson(key)
  var loadPromise = edited ? Promise.resolve(edited) : fetch('lecciones/' + les.file + '.html').then(function(r) { return r.text() })

  loadPromise.then(function(html) {
    content.innerHTML =
      '<div class="editor-wrap">' +
      '<div class="editor-header">' +
      '<h3>Editando: Módulo ' + modId + ' — ' + les.title + '</h3>' +
      '<div class="editor-actions">' +
      '<button class="btn-small btn-view" onclick="adminSaveLesson(' + modId + ',' + lesId + ')">💾 Guardar</button> ' +
      '<button class="btn-small btn-delete" onclick="adminPreviewLesson(' + modId + ',' + lesId + ')">👁 Vista previa</button> ' +
      '<button class="btn-small" style="background:#e2e8f0;color:#333" onclick="renderAdminSection(\'lecciones\')">← Volver</button>' +
      '</div></div>' +
      '<textarea class="editor-textarea" id="lessonEditor">' + escapeHtml(html) + '</textarea>' +
      '<div class="editor-preview" id="editorPreview" style="display:none"></div>' +
      '<p id="editorMsg" class="editor-msg"></p>' +
      '</div>'
  }).catch(function(err) {
    content.innerHTML = '<p style="text-align:center;color:#ef4444;padding:30px">Error al cargar la lección: ' + err.message + '</p>'
  })
}

function adminSaveLesson(modId, lesId) {
  var content = document.getElementById('lessonEditor')
  if (!content) return
  var html = content.value
  var key = 'm' + modId + '-l' + lesId
  setEditedLesson(key, html)
  document.getElementById('editorMsg').textContent = '✅ Lección guardada en almacenamiento local'
  document.getElementById('editorMsg').style.color = '#22c55e'
}

function adminPreviewLesson(modId, lesId) {
  var content = document.getElementById('lessonEditor')
  if (!content) return
  var preview = document.getElementById('editorPreview')
  if (!preview) return
  var html = content.value
  var parser = new DOMParser()
  var doc = parser.parseFromString(html, 'text/html')
  var article = doc.querySelector('.lesson-content')
  preview.innerHTML = article ? article.innerHTML : html
  preview.style.display = 'block'
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;')
}

function renderAdminCalificaciones(content) {
  const records = getGradeRecords()
  let html = '<h2 class="section-title">Calificaciones de estudiantes</h2>'

  if (records.length === 0) {
    html += '<p style="text-align:center;color:#94a3b8;padding:30px">No hay calificaciones registradas aún.</p>'
  } else {
    html += '<div class="admin-table-wrap"><table class="admin-table">'
    html += '<thead><tr><th>Módulo</th><th>Lección</th><th>Calificación</th><th>Fecha</th><th>Estado</th></tr></thead><tbody>'
    const sorted = records.slice().sort(function(a,b) { return b.date.localeCompare(a.date) })
    sorted.forEach(function(r) {
      const badgeClass = r.status === 'Aprobado' ? 'badge-aprobado' : 'badge-reprobado'
      html += '<tr><td>Módulo ' + r.module + '</td><td>' + r.lesson + '</td><td><strong>' + r.grade + '%</strong></td><td>' + r.date + '</td><td><span class="badge ' + badgeClass + '">' + r.status + '</span></td></tr>'
    })
    html += '</tbody></table></div>'
  }

  content.innerHTML = html
}

function renderAdminConfig(content) {
  const config = JSON.parse(localStorage.getItem('cursoAdminConfig') || '{"courseName":"CleverLabs Academy","logo":"","primaryColor":"#2563eb","secondaryColor":"#0ea5e9"}')

  let html = '<h2 class="section-title">Configuración del curso</h2>'
  html += '<div class="config-box" style="max-width:500px;margin:0 auto">'

  html += '<div class="admin-config-group">'
  html += '<label>Nombre del curso</label>'
  html += '<input type="text" id="adminCourseName" value="' + config.courseName + '">'
  html += '</div>'

  html += '<div class="admin-config-group">'
  html += '<label>URL del Logo</label>'
  html += '<input type="text" id="adminLogo" value="' + config.logo + '" placeholder="URL del logo (opcional)">'
  html += '</div>'

  html += '<div class="admin-config-group">'
  html += '<label>Color principal</label>'
  html += '<input type="color" id="adminPrimaryColor" value="' + config.primaryColor + '">'
  html += '</div>'

  html += '<div class="admin-config-group">'
  html += '<label>Color secundario</label>'
  html += '<input type="color" id="adminSecondaryColor" value="' + config.secondaryColor + '">'
  html += '</div>'

  html += '<button class="boton" onclick="guardarAdminConfig()" style="width:100%">Guardar configuración</button>'
  html += '<p id="adminConfigMsg" class="config-msg"></p>'
  html += '</div>'

  content.innerHTML = html
}

function guardarAdminConfig() {
  const config = {
    courseName: document.getElementById('adminCourseName').value.trim() || 'CleverLabs Academy',
    logo: document.getElementById('adminLogo').value.trim(),
    primaryColor: document.getElementById('adminPrimaryColor').value,
    secondaryColor: document.getElementById('adminSecondaryColor').value
  }
  localStorage.setItem('cursoAdminConfig', JSON.stringify(config))
  document.getElementById('adminConfigMsg').textContent = '✅ Configuración guardada'
}

function cerrarSesionAdmin() {
  localStorage.removeItem('cursoUser')
}

// ============================================================
// MÓDULOS CRUD — data layer
// ============================================================

var CRUD_KEY = 'cursoModulosData'

var MOD_DESC = {
  1:"Aprende a diferenciar la programación tradicional del desarrollo asistido por IA, tu rol como arquitecto-supervisor, y las reglas mínimas para un uso responsable.",
  2:"Transforma ideas vagas en requerimientos precisos: preguntas de descubrimiento, criterios de aceptación, casos borde y ejercicios prácticos.",
  3:"Domina la creación de contexto y el encadenamiento de prompts para obtener respuestas más precisas de la IA.",
  4:"Implementa soluciones paso a paso con IA: desde pedir código hasta revisarlo, corregirlo y decidir si aceptarlo.",
  5:"Aprende a validar, probar y documentar el código generado por IA para garantizar calidad y mantenibilidad.",
  6:"Aplica todo lo aprendido en un proyecto final integrador que abarca desde la idea hasta la documentación completa."
}

function detectTipo(titulo) {
  if (/\(ejercicio\)/i.test(titulo)) return 'ejercicio'
  if (/\(quiz\)/i.test(titulo) || /quiz/i.test(titulo)) return 'quiz'
  return 'normal'
}

function cargarModulos() {
  var raw = localStorage.getItem(CRUD_KEY)
  if (!raw) return initModulosData()
  try { return JSON.parse(raw) }
  catch { return initModulosData() }
}

function guardarModulos(data) {
  localStorage.setItem(CRUD_KEY, JSON.stringify(data))
}

function initModulosData() {
  var data = MODULES.map(function(m) {
    return {
      id: m.id,
      titulo: m.title,
      descripcion: MOD_DESC[m.id] || '',
      lecciones: m.lessons.map(function(l, i) {
        return {
          id: l.id,
          titulo: l.title,
          archivo: l.file + '.html',
          descripcion: '',
          tipo: detectTipo(l.title),
          orden: i + 1
        }
      })
    }
  })
  guardarModulos(data)
  return data
}

function nextLeccionId(lecciones) {
  var max = 0
  lecciones.forEach(function(l) { if (l.id > max) max = l.id })
  return max + 1
}

function updateModulo(modId, cambios) {
  var data = cargarModulos()
  var mod = data.find(function(m) { return m.id === modId })
  if (!mod) return
  Object.keys(cambios).forEach(function(k) { mod[k] = cambios[k] })
  guardarModulos(data)
}

function addLeccion(modId, leccion) {
  var data = cargarModulos()
  var mod = data.find(function(m) { return m.id === modId })
  if (!mod) return null
  leccion.id = nextLeccionId(mod.lecciones)
  leccion.orden = mod.lecciones.length + 1
  mod.lecciones.push(leccion)
  guardarModulos(data)
  return leccion
}

function editLeccion(modId, lecId, cambios) {
  var data = cargarModulos()
  var mod = data.find(function(m) { return m.id === modId })
  if (!mod) return
  var lec = mod.lecciones.find(function(l) { return l.id === lecId })
  if (!lec) return
  Object.keys(cambios).forEach(function(k) { lec[k] = cambios[k] })
  guardarModulos(data)
}

function removeLeccion(modId, lecId) {
  var data = cargarModulos()
  var mod = data.find(function(m) { return m.id === modId })
  if (!mod) return
  mod.lecciones = mod.lecciones.filter(function(l) { return l.id !== lecId })
  mod.lecciones.forEach(function(l, i) { l.orden = i + 1 })
  guardarModulos(data)
}

function moveLeccion(modId, lecId, dir) {
  var data = cargarModulos()
  var mod = data.find(function(m) { return m.id === modId })
  if (!mod) return
  var idx = mod.lecciones.findIndex(function(l) { return l.id === lecId })
  if (idx === -1) return
  var newIdx = idx + dir
  if (newIdx < 0 || newIdx >= mod.lecciones.length) return
  var tmp = mod.lecciones[idx]
  mod.lecciones[idx] = mod.lecciones[newIdx]
  mod.lecciones[newIdx] = tmp
  mod.lecciones.forEach(function(l, i) { l.orden = i + 1 })
  guardarModulos(data)
}

// ============================================================
// MODAL SYSTEM
// ============================================================

function abrirModal(title, bodyHtml) {
  document.getElementById('modalTitle').textContent = title
  document.getElementById('modalBody').innerHTML = bodyHtml
  document.getElementById('modalOverlay').style.display = 'flex'
}

function cerrarModal() {
  document.getElementById('modalOverlay').style.display = 'none'
}

function cerrarModalOutside(e) {
  if (e.target === document.getElementById('modalOverlay')) cerrarModal()
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') cerrarModal()
})

// Close modal on X click
document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('modalCloseBtn')
  if (btn) btn.addEventListener('click', cerrarModal)
})

// ============================================================
// RENDER MÓDULOS VIEW
// ============================================================

function renderAdminModulos(container) {
  var data = cargarModulos()
  var content = container || document.getElementById('adminContent')
  var html = '<h2 class="section-title">Módulos</h2>'
  data.forEach(function(mod) {
    html += '<div class="admin-modulo-card">'
    html += '<div class="admin-modulo-header">'
    html += '<div style="flex:1;min-width:0">'
    html += '<h3>Módulo ' + mod.id + ': ' + escHtml(mod.titulo) + '</h3>'
    html += '<p class="admin-modulo-desc">' + escHtml(mod.descripcion || 'Sin descripción') + '</p>'
    html += '</div>'
    html += '<div class="admin-modulo-actions">'
    html += '<button class="btn-small btn-edit" onclick="modalEditTitulo(' + mod.id + ')">Editar título</button>'
    html += '<button class="btn-small btn-edit" onclick="modalEditDesc(' + mod.id + ')">Editar descripción</button>'
    html += '<button class="btn-small btn-view" onclick="modalAddLeccion(' + mod.id + ')">+ Agregar lección</button>'
    html += '</div></div>'
    html += '<div style="margin-top:14px">'
    mod.lecciones.forEach(function(lec) {
      var tipoClass = 'lec-type-' + lec.tipo
      var tipoLabel = lec.tipo.charAt(0).toUpperCase() + lec.tipo.slice(1)
      html += '<div class="admin-leccion-item">'
      html += '<div class="admin-leccion-info">'
      html += '<span class="order-badge">' + lec.orden + '</span>'
      html += '<span class="lec-title">' + escHtml(lec.titulo) + '</span>'
      html += '<span class="lec-type-badge ' + tipoClass + '">' + tipoLabel + '</span>'
      html += '</div>'
      html += '<div class="admin-leccion-actions">'
      html += '<button class="btn-lec" onclick="moveLeccionUp(' + mod.id + ',' + lec.id + ')" title="Subir">↑</button>'
      html += '<button class="btn-lec" onclick="moveLeccionDown(' + mod.id + ',' + lec.id + ')" title="Bajar">↓</button>'
      html += '<button class="btn-lec btn-lec-edit" onclick="modalEditLeccion(' + mod.id + ',' + lec.id + ')">Editar</button>'
      html += '<button class="btn-lec btn-lec-del" onclick="modalRemoveLeccion(' + mod.id + ',' + lec.id + ')">Eliminar</button>'
      html += '</div></div>'
    })
    html += '</div></div>'
  })
  content.innerHTML = html
}

function escHtml(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')
}

// ============================================================
// MODAL: EDIT TITLE
// ============================================================

function modalEditTitulo(modId) {
  var data = cargarModulos()
  var mod = data.find(function(m) { return m.id === modId })
  if (!mod) return
  var html =
    '<label for="modalEditTituloInput">Título del módulo</label>' +
    '<input type="text" id="modalEditTituloInput" value="' + escHtml(mod.titulo) + '">' +
    '<div class="modal-actions">' +
    '<button class="btn-small" style="background:#e2e8f0;color:#333" onclick="cerrarModal()">Cancelar</button>' +
    '<button class="btn-small btn-edit" onclick="saveTitulo(' + modId + ')">Guardar</button>' +
    '</div>'
  abrirModal('Editar título — Módulo ' + modId, html)
  setTimeout(function() {
    var inp = document.getElementById('modalEditTituloInput')
    if (inp) inp.focus()
  }, 50)
}

function saveTitulo(modId) {
  var val = document.getElementById('modalEditTituloInput').value.trim()
  if (!val) { alert('El título no puede estar vacío'); return }
  updateModulo(modId, { titulo: val })
  cerrarModal()
  renderAdminModulos()
}

// ============================================================
// MODAL: EDIT DESCRIPTION
// ============================================================

function modalEditDesc(modId) {
  var data = cargarModulos()
  var mod = data.find(function(m) { return m.id === modId })
  if (!mod) return
  var html =
    '<label for="modalEditDescInput">Descripción del módulo</label>' +
    '<textarea id="modalEditDescInput" rows="4">' + escHtml(mod.descripcion) + '</textarea>' +
    '<div class="modal-actions">' +
    '<button class="btn-small" style="background:#e2e8f0;color:#333" onclick="cerrarModal()">Cancelar</button>' +
    '<button class="btn-small btn-edit" onclick="saveDesc(' + modId + ')">Guardar</button>' +
    '</div>'
  abrirModal('Editar descripción — Módulo ' + modId, html)
}

function saveDesc(modId) {
  var val = document.getElementById('modalEditDescInput').value.trim()
  updateModulo(modId, { descripcion: val })
  cerrarModal()
  renderAdminModulos()
}

// ============================================================
// MODAL: ADD LESSON
// ============================================================

function modalAddLeccion(modId) {
  var html =
    '<label for="modalLecTitulo">Título</label>' +
    '<input type="text" id="modalLecTitulo">' +
    '<label for="modalLecArchivo">Archivo HTML</label>' +
    '<input type="text" id="modalLecArchivo" placeholder="ej: m1-leccion6">' +
    '<label for="modalLecDesc">Descripción corta</label>' +
    '<textarea id="modalLecDesc" rows="2"></textarea>' +
    '<label for="modalLecTipo">Tipo</label>' +
    '<select id="modalLecTipo">' +
    '<option value="normal">Normal</option>' +
    '<option value="ejercicio">Ejercicio</option>' +
    '<option value="quiz">Quiz</option>' +
    '</select>' +
    '<div class="modal-actions">' +
    '<button class="btn-small" style="background:#e2e8f0;color:#333" onclick="cerrarModal()">Cancelar</button>' +
    '<button class="btn-small btn-view" onclick="saveNewLeccion(' + modId + ')">Guardar</button>' +
    '</div>'
  abrirModal('Agregar lección — Módulo ' + modId, html)
  setTimeout(function() {
    var inp = document.getElementById('modalLecTitulo')
    if (inp) inp.focus()
  }, 50)
}

function saveNewLeccion(modId) {
  var titulo = document.getElementById('modalLecTitulo').value.trim()
  var archivo = document.getElementById('modalLecArchivo').value.trim()
  var desc = document.getElementById('modalLecDesc').value.trim()
  var tipo = document.getElementById('modalLecTipo').value
  if (!titulo) { alert('El título es obligatorio'); return }
  if (!archivo) { alert('El nombre del archivo es obligatorio'); return }
  var data = cargarModulos()
  var mod = data.find(function(m) { return m.id === modId })
  if (mod && mod.lecciones.some(function(l) { return l.titulo.toLowerCase() === titulo.toLowerCase() })) {
    alert('Ya existe una lección con ese título'); return
  }
  addLeccion(modId, { titulo: titulo, archivo: archivo + '.html', descripcion: desc, tipo: tipo })
  cerrarModal()
  renderAdminModulos()
}

// ============================================================
// MODAL: EDIT LESSON
// ============================================================

function modalEditLeccion(modId, lecId) {
  var data = cargarModulos()
  var mod = data.find(function(m) { return m.id === modId })
  if (!mod) return
  var lec = mod.lecciones.find(function(l) { return l.id === lecId })
  if (!lec) return
  var html =
    '<label for="modalEditLecTitulo">Título</label>' +
    '<input type="text" id="modalEditLecTitulo" value="' + escHtml(lec.titulo) + '">' +
    '<label for="modalEditLecArchivo">Archivo HTML</label>' +
    '<input type="text" id="modalEditLecArchivo" value="' + escHtml((lec.archivo || '').replace('.html','')) + '">' +
    '<label for="modalEditLecDesc">Descripción</label>' +
    '<textarea id="modalEditLecDesc" rows="2">' + escHtml(lec.descripcion || '') + '</textarea>' +
    '<label for="modalEditLecTipo">Tipo</label>' +
    '<select id="modalEditLecTipo">' +
    '<option value="normal"' + (lec.tipo === 'normal' ? ' selected' : '') + '>Normal</option>' +
    '<option value="ejercicio"' + (lec.tipo === 'ejercicio' ? ' selected' : '') + '>Ejercicio</option>' +
    '<option value="quiz"' + (lec.tipo === 'quiz' ? ' selected' : '') + '>Quiz</option>' +
    '</select>' +
    '<div class="modal-actions">' +
    '<button class="btn-lec btn-lec-show" onclick="showLessonContent(' + modId + ',' + lecId + ')">Mostrar lección</button>' +
    '<button class="btn-small" style="background:#e2e8f0;color:#333" onclick="cerrarModal()">Cancelar</button>' +
    '<button class="btn-small btn-edit" onclick="saveEditLeccion(' + modId + ',' + lecId + ')">Guardar</button>' +
    '</div>' +
    '<div id="lecEditorContainer" style="margin-top:12px"></div>'
  abrirModal('Editar lección — Módulo ' + modId, html)
}

function saveEditLeccion(modId, lecId) {
  var titulo = document.getElementById('modalEditLecTitulo').value.trim()
  var archivo = document.getElementById('modalEditLecArchivo').value.trim()
  var desc = document.getElementById('modalEditLecDesc').value.trim()
  var tipo = document.getElementById('modalEditLecTipo').value
  if (!titulo) { alert('El título es obligatorio'); return }
  editLeccion(modId, lecId, { titulo: titulo, archivo: archivo + '.html', descripcion: desc, tipo: tipo })
  cerrarModal()
  renderAdminModulos()
}

// ============================================================
// SHOW LESSON — load HTML, edit content, preview
// ============================================================

function showLessonContent(modId, lecId) {
  var data = cargarModulos()
  var mod = data.find(function(m) { return m.id === modId })
  if (!mod) return
  var lec = mod.lecciones.find(function(l) { return l.id === lecId })
  if (!lec) return
  var container = document.getElementById('lecEditorContainer')
  if (!container) return
  container.innerHTML = '<div class="loading" style="padding:20px">Cargando lección...</div>'

  var key = 'm' + modId + '-l' + lecId
  var edited = getEditedLesson(key)

  var loadPromise = edited ? Promise.resolve(edited) : fetch('lecciones/' + lec.archivo).then(function(r) {
    if (!r.ok) throw new Error('No se pudo cargar el archivo: ' + lec.archivo)
    return r.text()
  })

  loadPromise.then(function(html) {
    container.innerHTML =
      '<label>Contenido HTML de la lección</label>' +
      '<textarea class="editor-large" id="lecHtmlEditor">' + escHtml(html) + '</textarea>' +
      '<div class="modal-actions" style="margin-top:8px">' +
      '<button class="btn-lec btn-lec-show" onclick="previewEditedLesson()">Vista previa</button>' +
      '<button class="btn-small btn-edit" onclick="saveEditedLesson(' + modId + ',' + lecId + ')">Guardar cambios</button>' +
      '</div>' +
      '<div class="preview-area" id="previewArea"></div>'
  }).catch(function(err) {
    container.innerHTML = '<p style="color:#ef4444;padding:12px">Error: ' + err.message + '</p>'
  })
}

function previewEditedLesson() {
  var ta = document.getElementById('lecHtmlEditor')
  if (!ta) return
  var preview = document.getElementById('previewArea')
  if (!preview) return
  var html = ta.value
  var parser = new DOMParser()
  var doc = parser.parseFromString(html, 'text/html')
  var article = doc.querySelector('.lesson-content')
  preview.innerHTML = article ? article.innerHTML : html
  preview.style.display = 'block'
}

function saveEditedLesson(modId, lecId) {
  var ta = document.getElementById('lecHtmlEditor')
  if (!ta) return
  var key = 'm' + modId + '-l' + lecId
  setEditedLesson(key, ta.value)
  alert('Contenido de la lección guardado')
}

// ============================================================
// MODAL: DELETE LESSON
// ============================================================

function modalRemoveLeccion(modId, lecId) {
  var html =
    '<p style="margin-bottom:16px;color:#475569">¿Está seguro de eliminar esta lección?</p>' +
    '<div class="modal-actions">' +
    '<button class="btn-small" style="background:#e2e8f0;color:#333" onclick="cerrarModal()">Cancelar</button>' +
    '<button class="btn-small btn-delete" onclick="confirmRemoveLeccion(' + modId + ',' + lecId + ')">Eliminar</button>' +
    '</div>'
  abrirModal('Eliminar lección', html)
}

function confirmRemoveLeccion(modId, lecId) {
  removeLeccion(modId, lecId)
  cerrarModal()
  renderAdminModulos()
}

// ============================================================
// REORDER
// ============================================================

function moveLeccionUp(modId, lecId) {
  moveLeccion(modId, lecId, -1)
  renderAdminModulos()
}

function moveLeccionDown(modId, lecId) {
  moveLeccion(modId, lecId, 1)
  renderAdminModulos()
}

function initConfig() {
  const user = getUser()
  if (!user) { window.location.href = 'login.html'; return }
  document.getElementById('configName').value = user.name
  document.getElementById('configEmail').value = user.email
  if (user.photo) document.getElementById('configPic').src = user.photo
  document.getElementById('configPhotoInput').addEventListener('change', function(e) {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = function(ev) { document.getElementById('configPic').src = ev.target.result }
    reader.readAsDataURL(file)
  })
  document.getElementById('configForm').addEventListener('submit', function(e) {
    e.preventDefault()
    const name = document.getElementById('configName').value.trim()
    const email = document.getElementById('configEmail').value.trim()
    const pass = document.getElementById('configPassword').value
    const photo = document.getElementById('configPic').src
    if (!name || !email) { document.getElementById('configMsg').textContent = '❌ Nombre y correo obligatorios'; return }
    const users = JSON.parse(localStorage.getItem('cursoUsers') || '[]')
    const idx = users.findIndex(function(u) { return u.email === user.email })
    if (idx !== -1) {
      users[idx].name = name
      if (pass) users[idx].password = pass
      users[idx].photo = (photo && photo.indexOf('default-avatar') === -1) ? photo : ''
      localStorage.setItem('cursoUsers', JSON.stringify(users))
    }
    user.name = name
    user.photo = (photo && photo.indexOf('default-avatar') === -1) ? photo : ''
    saveUser(user)
    document.getElementById('configMsg').textContent = '✅ Cambios guardados'
  })
}

// ============================================================
// PROMPT BLOCKS — reusable component
// ============================================================

function initPromptBlocks() {
  document.querySelectorAll('.prompt-block').forEach(function(block) {
    if (block.dataset.promptReady) return
    block.dataset.promptReady = '1'

    var pre = block.querySelector('pre')
    var code = block.querySelector('code')
    if (!pre && !code) return

    var content = document.createElement('div')
    content.className = 'prompt-content'
    if (pre) {
      content.appendChild(pre.cloneNode(true))
      pre.replaceWith(content)
    } else if (code) {
      content.appendChild(code.cloneNode(true))
      code.replaceWith(content)
    }

    // measure full content height vs constrained visible height
    // temporarily apply collapsed constraint to get the visible threshold
    block.classList.add('collapsed')
    var visibleH = content.clientHeight
    block.classList.remove('collapsed')
    var isLong = content.scrollHeight > visibleH

    if (isLong) {
      block.classList.add('has-expand-btn')

      var fade = document.createElement('div')
      fade.className = 'prompt-fade'
      block.appendChild(fade)

      var expandBtn = document.createElement('button')
      expandBtn.className = 'prompt-expand-btn'
      expandBtn.textContent = '\u25bc Ver completo'
      block.appendChild(expandBtn)

      block.classList.add('collapsed')

      expandBtn.addEventListener('click', function() {
        var isCollapsed = block.classList.toggle('collapsed')
        expandBtn.textContent = isCollapsed ? '\u25bc Ver completo' : '\u25b2 Ocultar'
      })
    }

    var copyBtn = document.createElement('button')
    copyBtn.className = 'prompt-copy-btn'
    copyBtn.setAttribute('aria-label', 'Copiar prompt')
    copyBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>'
    block.appendChild(copyBtn)

    var tooltip = document.createElement('span')
    tooltip.className = 'prompt-copy-tooltip'
    tooltip.textContent = 'Copiar prompt'
    block.appendChild(tooltip)

    copyBtn.addEventListener('click', function() {
      var codeEl = content.querySelector('code')
      var text = codeEl ? codeEl.textContent : content.textContent
      navigator.clipboard.writeText(text).then(function() {
        copyBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>'
        tooltip.textContent = '\u00a1Prompt copiado!'
        tooltip.classList.add('show')
        setTimeout(function() {
          copyBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>'
          tooltip.textContent = 'Copiar prompt'
          tooltip.classList.remove('show')
        }, 2000)
      }).catch(function() {
        tooltip.textContent = 'Error al copiar'
        tooltip.classList.add('show')
        setTimeout(function() { tooltip.classList.remove('show') }, 1500)
      })
    })
  })
}


