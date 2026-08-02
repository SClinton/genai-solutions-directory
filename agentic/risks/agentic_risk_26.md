---
title: "OWASP Top 10 for Agentic Applications (2026)"
source: "OWASP GenAI Security Project — published December 9, 2025"
date: 2026-08-02
tags: [owasp, agentic, security, asi, top10]
---

# OWASP Top 10 for Agentic Applications (2026)

| ID | Name | One-Line Description |
|----|------|------------------------|
| ASI01:26 | Agent Goal Hijack | Attackers manipulate an agent's goals or decision path via direct or indirect instruction injection, redirecting it toward unintended or malicious objectives. |
| ASI02:26 | Tool Misuse & Exploitation | An agent misuses or is tricked into misusing its legitimate tools through unsafe composition, recursion, or excessive invocation, causing harmful side effects. |
| ASI03:26 | Agent Identity & Privilege Abuse | Ambiguous agent identity or delegated trust lets one agent impersonate another or inherit privileges it shouldn't have, leading to unauthorized actions. |
| ASI04:26 | Agentic Supply Chain Compromise | Externally sourced agents, tools, schemas, or prompts that an agent dynamically trusts or imports are compromised or poisoned at runtime. |
| ASI05:26 | Unexpected Code Execution | Agent-generated or agent-triggered code runs without sufficient validation or isolation, enabling unauthorized commands or injection. |
| ASI06:26 | Memory & Context Poisoning | Malicious content is injected into or leaked from an agent's persistent memory or contextual state, corrupting future reasoning and actions. |
| ASI07:26 | Insecure Inter-Agent Communication | Messages exchanged between agents, planners, and executors can be intercepted, spoofed, or manipulated due to weak authentication and integrity checks. |
| ASI08:26 | Cascading Agent Failures | A small failure in one agent or tool propagates through connected systems, amplifying into large-scale, system-wide impact. |
| ASI09:26 | Human-Agent Trust Exploitation | Agents exploit human over-reliance through misleading explanations, false authority, or overconfident framing, leading people to accept bad outcomes. |
| ASI10:26 | Rogue Agents | Agents drift beyond their intended objectives through goal drift, collusion, or emergent behavior, acting outside their designed boundaries. |
