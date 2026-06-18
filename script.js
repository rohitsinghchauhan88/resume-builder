/* ============================================
   RESUME BUILDER — style.css
   Theme: Ink & Cream / Midnight Slate
   ============================================ */

/* ---- Tokens ---- */
:root {
  --bg:          #F7F5F0;
  --surface:     #FFFFFF;
  --surface-2:   #F0EDE6;
  --border:      #E4E0D8;
  --text:        #1A1612;
  --text-muted:  #6B6560;
  --text-faint:  #A09890;
  --accent:      #1F3A5F;        /* deep navy */
  --accent-warm: #C4642A;        /* terracotta */
  --accent-glow: rgba(31,58,95,0.12);
  --hero-bg:     #1F3A5F;
  --hero-text:   #FFFFFF;
  --hero-dot:    #F4A742;
  --success:     #2D7A47;
  --error:       #B94040;
  --shadow-sm:   0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md:   0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04);
  --shadow-lg:   0 16px 40px rgba(0,0,0,0.12);
  --radius:      12px;
  --radius-sm:   7px;
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body:    'Inter', system-ui, sans-serif;
  --font-mono:    'JetBrains Mono', monospace;
  --transition:   0.2s ease;
}

[data-theme="dark"] {
  --bg:          #0F1117;
  --surface:     #181C24;
  --surface-2:   #1E2330;
  --border:      #2A2F3D;
  --text:        #E8E4DC;
  --text-muted:  #8A8F9D;
  --text-faint:  #505670;
  --accent:      #5B8FCC;
  --accent-warm: #E07A45;
  --accent-glow: rgba(91,143,204,0.15);
  --hero-bg:     #5B8FCC;
  --hero-text:   #0F1117;
  --hero-dot:    #F4A742;
  --shadow-sm:   0 1px 3px rgba(0,0,0,0.3);
  --shadow-md:   0 4px 12px rgba(0,0,0,0.4);
  --shadow-lg:   0 16px 40px rgba(0,0,0,0.5);
}

/* ---- Reset ---- */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { font-size: 15px; scroll-behavior: smooth; }
body {
  font-family: var(--font-body);
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  transition: background var(--transition), color var(--transition);
  overflow-x: hidden;
}

/* ---- Topbar ---- */
.topbar {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 58px;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
  animation: slideDown 0.4s ease;
}
@keyframes slideDown {
  from { transform: translateY(-100%); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}
.topbar-left { display: flex; align-items: center; gap: 10px; }
.logo-mark {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--hero-text);
  background: var(--accent);
  padding: 4px 8px;
  border-radius: 5px;
  letter-spacing: 0.05em;
}
.logo-text {
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: -0.01em;
  color: var(--text);
}
.topbar-right { display: flex; align-items: center; gap: 10px; }

.btn-hero {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 16px;
  background: var(--hero-bg);
  color: var(--hero-text);
  border: none;
  border-radius: 20px;
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 0.02em;
  transition: transform var(--transition), box-shadow var(--transition), opacity var(--transition);
  white-space: nowrap;
}
.btn-hero:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 14px rgba(31,58,95,0.3);
  opacity: 0.9;
}
.hero-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--hero-dot);
  animation: pulse 2s infinite;
  flex-shrink: 0;
}
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50%       { transform: scale(1.35); opacity: 0.7; }
}

.theme-toggle {
  width: 36px; height: 36px;
  border: 1px solid var(--border);
  background: var(--surface-2);
  border-radius: 50%;
  cursor: pointer;
  font-size: 1rem;
  display: grid; place-items: center;
  transition: background var(--transition), transform var(--transition);
}
.theme-toggle:hover { background: var(--border); transform: rotate(20deg); }

/* ---- Workspace ---- */
.workspace {
  display: grid;
  grid-template-columns: 420px 1fr;
  min-height: calc(100vh - 58px);
}

/* ---- Form Panel ---- */
.form-panel {
  background: var(--surface);
  border-right: 1px solid var(--border);
  overflow-y: auto;
  padding: 24px 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: calc(100vh - 58px);
  scrollbar-width: thin;
  scrollbar-color: var(--border) transparent;
}
.form-panel::-webkit-scrollbar { width: 4px; }
.form-panel::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }

.panel-header { margin-bottom: 4px; }
.panel-header h2 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.02em;
}
.panel-header p { color: var(--text-muted); font-size: 0.82rem; margin-top: 4px; }

/* ---- Cards ---- */
.card {
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: fadeUp 0.4s ease both;
  transition: box-shadow var(--transition), border-color var(--transition);
}
.card:hover { box-shadow: var(--shadow-md); border-color: var(--accent-glow); }
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
.card-label {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  border-bottom: 1px solid var(--border);
  padding-bottom: 8px;
}

/* ---- Photo Upload ---- */
.photo-upload-area {
  width: 96px; height: 96px;
  border-radius: 50%;
  border: 2px dashed var(--border);
  cursor: pointer;
  display: grid; place-items: center;
  overflow: hidden;
  position: relative;
  margin: 0 auto 4px;
  transition: border-color var(--transition), background var(--transition);
  background: var(--surface);
}
.photo-upload-area:hover { border-color: var(--accent); background: var(--accent-glow); }
.photo-placeholder { display: flex; flex-direction: column; align-items: center; gap: 4px; }
.photo-icon { font-size: 1.6rem; }
.photo-placeholder span { font-size: 0.65rem; color: var(--text-muted); font-weight: 500; }
.photo-preview { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }
.hidden { display: none !important; }

/* ---- Fields ---- */
.field-group { display: flex; flex-direction: column; gap: 5px; flex: 1; }
.field-row { display: flex; gap: 10px; }
label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-muted);
  letter-spacing: 0.02em;
}
label small { font-weight: 400; color: var(--text-faint); }
.required { color: var(--accent-warm); }

input[type="text"],
input[type="email"],
input[type="tel"],
textarea {
  width: 100%;
  padding: 8px 11px;
  background: var(--surface);
  border: 1.5px solid var(--border);
  border-radius: var(--radius-sm);
  color: var(--text);
  font-family: var(--font-body);
  font-size: 0.85rem;
  outline: none;
  transition: border-color var(--transition), box-shadow var(--transition);
  resize: vertical;
}
input:focus, textarea:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-glow);
}
input.error { border-color: var(--error); }
.field-error {
  font-size: 0.7rem;
  color: var(--error);
  min-height: 14px;
  display: block;
}

/* ---- Entry items in card ---- */
.entry-item {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 10px 12px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  animation: fadeUp 0.25s ease;
}
.entry-item-text strong { font-size: 0.85rem; display: block; color: var(--text); }
.entry-item-text span { font-size: 0.75rem; color: var(--text-muted); }
.entry-item-actions { display: flex; gap: 4px; flex-shrink: 0; }
.icon-btn {
  width: 26px; height: 26px;
  border: 1px solid var(--border);
  background: var(--surface-2);
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.75rem;
  display: grid; place-items: center;
  transition: background var(--transition);
}
.icon-btn:hover { background: var(--border); }
.icon-btn.delete:hover { background: #FEE; border-color: #E88; color: #B00; }

.add-btn {
  background: none;
  border: 1.5px dashed var(--border);
  border-radius: var(--radius-sm);
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 600;
  padding: 8px;
  cursor: pointer;
  width: 100%;
  transition: background var(--transition), border-color var(--transition);
  font-family: var(--font-body);
}
.add-btn:hover { background: var(--accent-glow); border-color: var(--accent); }

/* ---- Action Buttons ---- */
.form-actions { display: flex; gap: 10px; flex-wrap: wrap; }
.btn-primary, .btn-secondary {
  display: flex; align-items: center; gap: 7px;
  padding: 11px 20px;
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: transform var(--transition), box-shadow var(--transition), opacity var(--transition);
}
.btn-primary {
  background: var(--accent);
  color: #fff;
  flex: 1;
}
.btn-primary:hover { transform: translateY(-1px); box-shadow: 0 4px 14px rgba(31,58,95,0.3); }
.btn-primary:active { transform: translateY(0); }
.btn-secondary {
  background: var(--surface-2);
  color: var(--text-muted);
  border: 1px solid var(--border);
}
.btn-secondary:hover { background: var(--border); }

/* ---- Preview Panel ---- */
.preview-panel {
  background: var(--bg);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: calc(100vh - 58px);
}
.preview-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  border-bottom: 1px solid var(--border);
  background: var(--surface);
  position: sticky; top: 0; z-index: 10;
}
.preview-label { font-weight: 700; font-size: 0.8rem; color: var(--text); text-transform: uppercase; letter-spacing: 0.08em; }
.preview-hint { font-size: 0.75rem; color: var(--text-faint); }
.preview-wrapper {
  padding: 28px;
  display: flex;
  justify-content: center;
}

/* ---- Resume Sheet (A4-ish) ---- */
.resume-sheet {
  background: #FFFFFF;
  color: #1A1612;
  width: 100%;
  max-width: 760px;
  min-height: 1000px;
  border-radius: 4px;
  box-shadow: var(--shadow-lg);
  padding: 48px 52px 56px;
  font-family: 'Inter', sans-serif;
  font-size: 0.82rem;
  line-height: 1.6;
  transition: box-shadow var(--transition);
  animation: fadeIn 0.5s ease;
}
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.98); }
  to   { opacity: 1; transform: scale(1); }
}

/* ---- Resume Header ---- */
.resume-header {
  border-bottom: 3px solid #1F3A5F;
  padding-bottom: 20px;
  margin-bottom: 22px;
}
.resume-identity { display: flex; align-items: center; gap: 20px; }
.resume-photo {
  width: 80px; height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #1F3A5F;
  flex-shrink: 0;
}
.resume-name-block { flex: 1; }
.resume-name-block h1 {
  font-family: 'Playfair Display', serif;
  font-size: 2.1rem;
  font-weight: 700;
  color: #1F3A5F;
  line-height: 1.15;
  letter-spacing: -0.02em;
}
.resume-contact-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 14px;
  margin-top: 8px;
  font-size: 0.77rem;
  color: #5A5550;
}
.resume-contact-row span::before { content: ''; }
.resume-contact-row span + span::before {
  content: '·';
  margin-right: 14px;
  color: #C4642A;
}

/* ---- Resume Sections ---- */
.resume-section {
  margin-bottom: 18px;
  animation: fadeUp 0.3s ease;
}
.resume-section-title {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #C4642A;
  border-bottom: 1px solid #E4E0D8;
  padding-bottom: 5px;
  margin-bottom: 10px;
}
.resume-objective { color: #3A3530; font-size: 0.82rem; line-height: 1.65; }

/* Skills */
.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.skill-tag {
  background: #EEF2F8;
  color: #1F3A5F;
  border: 1px solid #C8D5E8;
  border-radius: 4px;
  padding: 3px 9px;
  font-size: 0.72rem;
  font-weight: 500;
  white-space: nowrap;
}

/* Entries (Education/Experience/Projects/Certs) */
.resume-entry { margin-bottom: 12px; }
.resume-entry:last-child { margin-bottom: 0; }
.entry-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
}
.entry-main-title {
  font-weight: 700;
  font-size: 0.84rem;
  color: #1A1612;
}
.entry-sub {
  font-size: 0.77rem;
  color: #5A5550;
  font-style: italic;
}
.entry-date {
  font-size: 0.72rem;
  color: #8A8580;
  white-space: nowrap;
  font-family: 'JetBrains Mono', monospace;
}
.entry-desc {
  margin-top: 4px;
  color: #3A3530;
  font-size: 0.79rem;
  line-height: 1.6;
}
.entry-link {
  font-size: 0.72rem;
  color: #1F3A5F;
  margin-top: 2px;
}

/* Languages */
.lang-list { display: flex; flex-wrap: wrap; gap: 6px; }
.lang-tag {
  background: #FDF6EF;
  color: #8A4520;
  border: 1px solid #EDD5BE;
  border-radius: 4px;
  padding: 3px 9px;
  font-size: 0.72rem;
  font-weight: 500;
}

/* ---- Modal ---- */
.modal-overlay {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.45);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: grid;
  place-items: center;
  padding: 20px;
  animation: fadeIn 0.2s ease;
}
.modal-overlay.hidden { display: none; }
.modal {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  width: 100%;
  max-width: 520px;
  box-shadow: var(--shadow-lg);
  animation: fadeUp 0.25s ease;
}
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px;
  border-bottom: 1px solid var(--border);
}
.modal-header h3 {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text);
}
.modal-close {
  width: 28px; height: 28px;
  border: none; background: none;
  font-size: 1rem;
  cursor: pointer;
  color: var(--text-muted);
  border-radius: 5px;
  display: grid; place-items: center;
  transition: background var(--transition);
}
.modal-close:hover { background: var(--surface-2); color: var(--text); }
.modal-body { padding: 20px; display: flex; flex-direction: column; gap: 12px; }
.modal-footer {
  display: flex;
  gap: 10px;
  padding: 16px 20px;
  border-top: 1px solid var(--border);
}

/* ---- Toast ---- */
.toast {
  position: fixed;
  bottom: 24px; right: 24px;
  background: var(--accent);
  color: #fff;
  padding: 10px 20px;
  border-radius: var(--radius-sm);
  font-size: 0.82rem;
  font-weight: 600;
  box-shadow: var(--shadow-md);
  z-index: 2000;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.25s, transform 0.25s;
  pointer-events: none;
}
.toast.show { opacity: 1; transform: translateY(0); }

/* ---- Mobile ---- */
@media (max-width: 900px) {
  .workspace {
    grid-template-columns: 1fr;
  }
  .form-panel {
    max-height: none;
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
  .preview-panel { max-height: none; }
  .preview-wrapper { padding: 16px; }
  .resume-sheet { padding: 30px 24px 36px; }
  .resume-name-block h1 { font-size: 1.6rem; }
  .btn-hero { font-size: 0.72rem; padding: 6px 12px; }
  .logo-text { display: none; }
}
@media (max-width: 540px) {
  .topbar { padding: 0 14px; }
  .topbar-right { gap: 7px; }
  .field-row { flex-direction: column; }
  .resume-contact-row span + span::before { display: none; }
  .resume-contact-row { flex-direction: column; gap: 3px; }
}
