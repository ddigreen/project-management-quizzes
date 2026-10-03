(() => {
  const exam = new URLSearchParams(window.location.search).get('quiz') === 'exams';
  const frame = document.getElementById('quiz-frame');
  const title = exam ? 'Экзаменационные примеры' : 'Вся база по лекциям';
  document.title = title + ' — PM Practice';
  document.getElementById('practice-title').textContent = title;
  document.getElementById('practice-eyebrow').textContent = exam ? 'ПРАКТИКА ПЕРЕД ЭКЗАМЕНОМ' : 'СИСТЕМНОЕ ПОВТОРЕНИЕ';
  document.getElementById('practice-description').textContent = exam ? 'Ситуации с фотографий экзамена, выбор A–E и разбор ответа. Выбери один набор или потренируйся на случайных вопросах.' : 'Повтори материал трёх лекций, проверь ответы и вернись к вопросам, которые вызвали затруднения.';
  document.getElementById('practice-label').textContent = exam ? '89 вопросов · 2 набора' : '155 вопросов · 3 лекции';
  document.getElementById(exam ? 'exam-link' : 'lecture-link').setAttribute('aria-current', 'page');
  frame.title = title + ' — интерактивная тренировка';
  let observer;
  function bindHeight() {
    observer?.disconnect();
    try {
      const body = frame.contentDocument?.body;
      if (!body) return;
      const resize = () => {
        const height = Math.ceil(body.getBoundingClientRect().height);
        if (height > 0) frame.style.height = Math.max(420, height) + 'px';
      };
      observer = new ResizeObserver(resize);
      observer.observe(body);
      resize();
    } catch (_) { /* Use the initial frame height if measurement is unavailable. */ }
  }
  frame.addEventListener('load', bindHeight);
  if (exam) frame.src = 'exams.html';
  else if (frame.contentDocument?.readyState === 'complete') bindHeight();
})();
