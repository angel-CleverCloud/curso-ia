
// Prompt Manager - Sistema de guardado de prompts con localStorage

class PromptManager {
  constructor(lessonId) {
    this.lessonId = lessonId;
    this.storageKey = `prompt_${lessonId}`;
  }

  // Guardar prompt en localStorage
  savePrompt(promptText, lastQuery) {
    if (!promptText.trim() || !lastQuery.trim()) {
      return {
        success: false,
        message: 'Ambos campos son requeridos'
      };
    }

    const data = {
      prompt: promptText,
      lastQuery: lastQuery,
      timestamp: new Date().toISOString(),
      lessonId: this.lessonId
    };

    try {
      localStorage.setItem(this.storageKey, JSON.stringify(data));
      return {
        success: true,
        message: '✅ Evidencia guardada correctamente',
        data: data
      };
    } catch (error) {
      return {
        success: false,
        message: 'Error al guardar la evidencia: ' + error.message
      };
    }
  }

  // Recuperar prompt guardado
  getPrompt() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error al recuperar prompt:', error);
      return null;
    }
  }

  // Eliminar prompt guardado
  deletePrompt() {
    try {
      localStorage.removeItem(this.storageKey);
      return true;
    } catch (error) {
      console.error('Error al eliminar prompt:', error);
      return false;
    }
  }

  // Actualizar prompt existente
  updatePrompt(promptText, lastQuery) {
    return this.savePrompt(promptText, lastQuery);
  }
}

// Funciones auxiliares para integración con HTML

function actualizarContadorPrompt(lessonId) {
  const textarea = document.getElementById(`prompt-input-${lessonId}`);
  const counter = document.getElementById(`prompt-counter-${lessonId}`);
  if (textarea && counter) {
    counter.textContent = textarea.value.length;
  }
}

function guardarPromptEvidencia(lessonId) {
  const promptInput = document.getElementById(`prompt-input-${lessonId}`);
  const queryInput = document.getElementById(`prompt-query-${lessonId}`);
  const msgElement = document.getElementById(`prompt-msg-${lessonId}`);
  const submitBtn = document.querySelector(`[onclick*="guardarPromptEvidencia('${lessonId}')"]`);

  if (!promptInput || !queryInput) {
    console.error('No se encontraron los campos de entrada');
    return;
  }

  const manager = new PromptManager(lessonId);
  const result = manager.savePrompt(promptInput.value, queryInput.value);

  if (msgElement) {
    msgElement.className = `prompt-msg ${result.success ? 'success' : 'error'}`;
    msgElement.textContent = result.message;
    msgElement.style.display = 'block';
  }

  if (result.success) {
    mostrarPromptGuardado(lessonId);
    marcarActividadCompleta(lessonId);
  }
}

function mostrarPromptGuardado(lessonId) {
  const manager = new PromptManager(lessonId);
  const data = manager.getPrompt();

  if (!data) return;

  const savedDiv = document.getElementById(`prompt-submitted-${lessonId}`);
  if (savedDiv) {
    document.getElementById(`saved-prompt-${lessonId}`).textContent = data.prompt;
    document.getElementById(`saved-query-${lessonId}`).textContent = data.lastQuery;
    const savedAt = new Date(data.timestamp).toLocaleString('es-ES');
    document.getElementById(`saved-at-${lessonId}`).textContent = `Guardado el ${savedAt}`;
    
    // Mostrar sección guardada y ocultar formulario
    document.getElementById(`prompt-form-${lessonId}`).style.display = 'none';
    savedDiv.style.display = 'block';
  }
}

function editarPrompt(lessonId) {
  const manager = new PromptManager(lessonId);
  const data = manager.getPrompt();

  if (!data) return;

  const promptInput = document.getElementById(`prompt-input-${lessonId}`);
  const queryInput = document.getElementById(`prompt-query-${lessonId}`);

  if (promptInput && queryInput) {
    promptInput.value = data.prompt;
    queryInput.value = data.lastQuery;
    actualizarContadorPrompt(lessonId);
  }

  // Mostrar formulario y ocultar sección guardada
  document.getElementById(`prompt-form-${lessonId}`).style.display = 'block';
  document.getElementById(`prompt-submitted-${lessonId}`).style.display = 'none';
}

function eliminarPrompt(lessonId) {
  if (confirm('¿Deseas eliminar el prompt guardado? Esta acción no se puede deshacer.')) {
    const manager = new PromptManager(lessonId);
    if (manager.deletePrompt()) {
      document.getElementById(`prompt-form-${lessonId}`).style.display = 'block';
      document.getElementById(`prompt-submitted-${lessonId}`).style.display = 'none';
      const promptInput = document.getElementById(`prompt-input-${lessonId}`);
      const queryInput = document.getElementById(`prompt-query-${lessonId}`);
      if (promptInput) promptInput.value = '';
      if (queryInput) queryInput.value = '';
      actualizarContadorPrompt(lessonId);
      alert('Prompt eliminado correctamente');
    }
  }
}

function marcarActividadCompleta(lessonId) {
  // Esta función se coordina con el sistema de progreso existente
  const progressKey = `lesson_${lessonId}_completed`;
  try {
    localStorage.setItem(progressKey, JSON.stringify({
      completed: true,
      timestamp: new Date().toISOString()
    }));
  } catch (error) {
    console.warn('No se pudo marcar como completada:', error);
  }
}

// Inicializar interfaz cuando la lección se cargue
function inicializarPromptManager(lessonId) {
  const manager = new PromptManager(lessonId);
  const data = manager.getPrompt();

  if (data) {
    mostrarPromptGuardado(lessonId);
  } else {
    const formDiv = document.getElementById(`prompt-form-${lessonId}`);
    const submittedDiv = document.getElementById(`prompt-submitted-${lessonId}`);
    if (formDiv) formDiv.style.display = 'block';
    if (submittedDiv) submittedDiv.style.display = 'none';
  }
}

// Función llamada desde script.js para inicializar la sección de prompts
function initPromptEvidenceSection(container, lessonKey) {
  // Extract the lesson ID from the key (e.g., 'm3-l1' -> 'm3-l1')
  const promptFormId = `prompt-form-${lessonKey}`;
  const promptForm = container.querySelector(`#${promptFormId}`);
  
  if (!promptForm) {
    // Si no hay formulario de prompts, es posible que sea otra lección
    return;
  }

  // Inicializar el PromptManager para esta lección
  inicializarPromptManager(lessonKey);
}
