window.DB_CONFIG = {
  dbKey: "genai",
  dbName: "GenAI Security Solutions",
  manifestPath: "data/manifest.json",
  editBase: "edit.html",
  coverageLabel: "Taxonomy Coverage",

  // Sidebar filters on index.html
  facets: [
    { key: "solution_types", label: "Solution Type", tagClass: "tag-type" },
    {
      key: "stage",
      label: "AI-SDLC Stage",
      tagClass: "tag-llmops",
      order: [
        "Scoping/Planning",
        "Data Augmentation and Fine-Tuning",
        "Development and Experimentation",
        "Test and Evaluation",
        "Release",
        "Deploy",
        "Operate",
        "Monitor",
        "Govern",
      ],
    },
    { key: "top10_2023", label: "LLM Top 10 (2023)", tagClass: "tag-risk" },
    { key: "top10_2025", label: "LLM Top 10 (2025)", tagClass: "tag-risk" },
  ],

  // Tag rows shown on each card
  cardTagRows: [
    { key: "solution_types", tagClass: "tag-type", slot: "header" },
    { key: "stage", tagClass: "tag-llmops", slot: "header-stage" },
    { key: "top10_2023", tagClass: "tag-risk" },
    { key: "top10_2025", tagClass: "tag-risk" },
  ],

  searchKeys: ["solution_types", "stage", "top10_2023", "top10_2025"],

  // Checkbox groups on add.html / edit.html. top10_2025/top10_2026 pull
  // their options from the canonical risk files (risks/llm_risk_*.md) via
  // riskFile, rather than being derived from whatever values already exist
  // in the data -- see shared/form.js's "Risk checklists" section.
  formFacets: [
    { key: "solution_types", label: "Solution Type", allowOther: true },
    { key: "stage", label: "AI-SDLC Stage(s)" },
    { key: "top10_2025", label: "LLM Top 10 (2025) Risks Addressed", riskFile: "risks/llm_risk_25.md" },
    { key: "top10_2026", label: "LLM Top 10 (2026) Risks Addressed", riskFile: "risks/llm_risk_26.md" },
  ],

  // Authoritative capability checklist (replaces the freeform coverage
  // textarea): fetched, grouped by stage, rendered as checkboxes.
  // Selections become the entry's "coverage" field.
  taxonomy: {
    path: "taxonomy/genai_taxonomy.json",
    containerId: "taxonomy-checklist",
  },

  issueLabelNew: "genai-new-submission",
  issueLabelEdit: "genai-edit-suggestion",
};
