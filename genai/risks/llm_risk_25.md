---
title: "OWASP Top 10 for LLM Applications (2025)"
source: "OWASP GenAI Security Project"
date: 2026-08-02
tags: [owasp, llm, security, top10]
---

# OWASP Top 10 for LLM Applications (2025)

| ID | Name | One-Line Description |
|----|------|------------------------|
| LLM01:25 | Prompt Injection | Attacker-crafted input is interpreted by the model as a new instruction rather than data, causing it to act outside its intended behavior. |
| LLM02:25 | Sensitive Information Disclosure | The model or application exposes PII, credentials, or proprietary data through its outputs or responses. |
| LLM03:25 | Supply Chain | Third-party models, datasets, packages, and plugins introduce vulnerable or maliciously tampered components into the application. |
| LLM04:25 | Data and Model Poisoning | Manipulated training, fine-tuning, or embedding data introduces backdoors, bias, or degraded model behavior. |
| LLM05:25 | Improper Output Handling | Model output is passed to downstream systems without sufficient validation, enabling injection, SSRF, or remote code execution. |
| LLM06:25 | Excessive Agency | The system grants the model too much functionality, permission, or autonomy, letting a manipulated model take harmful actions. |
| LLM07:25 | System Prompt Leakage | Confidential system prompt content is exposed to users, revealing internal logic, credentials, or filtering rules that can be exploited. |
| LLM08:25 | Vector and Embedding Weaknesses | Poisoned retrieval content, weak access controls, or manipulated embeddings degrade the security and trustworthiness of RAG pipelines. |
| LLM09:25 | Misinformation | The model generates and propagates confident but false information, including hallucinated facts and invented citations. |
| LLM10:25 | Unbounded Consumption | Uncontrolled inference requests or resource-intensive queries let attackers drive excessive cost, denial of service, or resource exhaustion. |
