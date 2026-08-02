---
title: "OWASP Top 10 for LLM Applications (2026)"
source: "OWASP GenAI Security Project"
date: 2026-08-02
tags: [owasp, llm, security, top10]
---

# OWASP Top 10 for LLM Applications (2026)

| ID | Name | One-Line Description |
|----|------|------------------------|
| LLM01:26 | Prompt Injection | Input from users, retrieved content, tool output, or memory alters the model's behavior because it cannot distinguish instructions from data. |
| LLM02:26 | Sensitive Information Disclosure | An LLM-integrated system exposes confidential, regulated, or proprietary data through outputs, logs, traces, or observable inference behavior. |
| LLM03:26 | Excessive Agency | Excessive functionality, permissions, or autonomy granted to an LLM agent lets manipulated or hallucinated output cause damaging real-world actions. |
| LLM04:26 | Supply Chain | Third-party models, datasets, adapters, and conversion pipelines are tampered with, poisoned, or replaced, compromising downstream application integrity. |
| LLM05:26 | Data and Model Poisoning | Training, fine-tuning, embedding, or memory data is manipulated to embed backdoors, bias, or exploitable weaknesses into the model's learned behavior. |
| LLM06:26 | Unbounded Consumption | Uncontrolled or adversarially optimized inference requests let attackers disrupt availability, inflate costs, or steal model IP via cloning. |
| LLM07:26 | Misinformation | The model produces incorrect, unsupported, or misleading output that appears credible enough to drive a harmful human or automated decision. |
| LLM08:26 | Hidden Context Exposure | Non-user-facing system instructions or operational context are extracted, inferred, or reconstructed, revealing secrets, logic, or trust boundaries. |
| LLM09:26 | Vector and Embedding Weaknesses | Attacks exploit embedding-space geometry and similarity search itself — poisoning, inversion, jamming, or cross-tenant leakage — independent of prompt injection. |
| LLM10:26 | Improper Output Handling | Model output is passed to downstream systems without sufficient validation or sanitization, enabling XSS, SSRF, SQL injection, or remote code execution. |
