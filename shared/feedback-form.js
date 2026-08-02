(function () {
  "use strict";

  // Self-contained: unlike shared/form.js, this isn't tied to a per-database
  // db.config.js, since a "report an issue with the site" form applies to
  // the whole directory rather than one database's entries.

  const ISSUE_LABEL = "site-feedback";

  let captchaAnswer = null;

  function initCaptcha() {
    const questionEl = document.getElementById("captcha-question");
    const answerEl = document.getElementById("captcha_answer");
    const hintEl = document.getElementById("captcha-hint");
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    const isAddition = Math.random() < 0.5;
    if (isAddition) {
      captchaAnswer = a + b;
      questionEl.textContent = `${a} + ${b}`;
    } else {
      const hi = Math.max(a, b);
      const lo = Math.min(a, b);
      captchaAnswer = hi - lo;
      questionEl.textContent = `${hi} − ${lo}`;
    }
    answerEl.value = "";
    hintEl.textContent = "";
  }

  function captchaPasses() {
    const answerEl = document.getElementById("captcha_answer");
    const hintEl = document.getElementById("captcha-hint");
    const ok = Number(answerEl.value.trim()) === captchaAnswer;
    if (!ok) {
      initCaptcha();
      hintEl.textContent = "That's not quite right — try the new question below.";
      answerEl.focus();
    }
    return ok;
  }

  function buildIssueBody(data) {
    return [
      `**Issue type:** ${data.issue_type}`,
      `**Page / database:** ${data.page || "—"}`,
      "",
      `**Description:**`,
      data.description,
      "",
      `---`,
      `Submitted by: ${data.name || "—"}`,
      `Contact (RSA-OAEP encrypted, decrypt with decrypt_submission.js): ${data.email_encrypted || "—"}`,
    ].join("\n");
  }

  function openIssue(data, note) {
    const { githubOwner, githubRepo } = window.SITE_CONFIG;
    const issueUrl =
      `https://github.com/${githubOwner}/${githubRepo}/issues/new` +
      `?title=${encodeURIComponent(`Site feedback: ${data.summary}`)}` +
      `&labels=${encodeURIComponent(ISSUE_LABEL)}` +
      `&body=${encodeURIComponent(buildIssueBody(data))}`;

    const win = window.open(issueUrl, "_blank", "noopener,noreferrer");
    if (win) {
      note.textContent = "Opened a GitHub Issue in a new tab — submit it there to complete your report.";
    } else {
      note.innerHTML =
        'Your browser blocked the popup. <a href="' +
        issueUrl +
        '" target="_blank" rel="noopener noreferrer">Click here to open the GitHub Issue</a>.';
    }
  }

  function collectFormData() {
    return {
      issue_type: document.getElementById("issue_type").value,
      page: document.getElementById("page").value.trim(),
      summary: document.getElementById("summary").value.trim(),
      description: document.getElementById("description").value.trim(),
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
    };
  }

  async function encryptEmail(data) {
    if (data.email) {
      data.email_encrypted = await window.SUBMISSION_ENCRYPTION.encryptText(data.email);
    }
    delete data.email;
    return data;
  }

  function init() {
    const form = document.getElementById("feedback-form");
    const note = document.getElementById("form-note");
    initCaptcha();
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!captchaPasses()) return;
      const data = await encryptEmail(collectFormData());
      openIssue(data, note);
    });
  }

  init();
})();
