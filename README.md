# Project Management — exam preparation

Two interactive practice quizzes based on Lectures 1–3.

- `index.html`: start page linking to both quizzes.
- `lectures.html`: original 155-question lecture quiz, preserved unchanged.
- `exams.html`: 89 questions transcribed from exam example photos, plus the lecture bank as an optional set.
- `styles.css`: styles for the start page.

Questions are in English; explanations are in Russian. Answer keys are derived from the supplied lectures, not an official exam answer key. Two photo questions are excluded from automatic scoring because their source is incomplete or ambiguous. Photos and lecture PDFs are not included in this repository.

The quizzes run entirely in the browser, in sandboxed frames with a Content Security Policy. Progress is stored locally in the browser. No server or build step is needed.

## GitHub Pages

In **Settings → Pages**, select **Deploy from a branch → main → /(root)** and save.

GitHub Pages then serves `index.html`, `lectures.html`, and `exams.html`.
