---
title: "Agentic Solutions Taxonomy"
date: 2026-03-22
owasp  genai project inititative: Solutions Landscape Inititative
author: scott clinton, initiative contributors
tags: [solutions, markdown, yaml]
draft: false
version: 1.0
---

# Agentic SDLC Coverage

## 1. Scoping/Planning

- Conducting Agentic Threat Modeling
- Support for Gen AI Security Project - Agentic Security Threat Modeling Approach
- Identify system-wide non-human Identities & Auth Protocols
- Draft policy for Agent privilege boundaries
- Draft policy Agent for tool scopes
- Draft policy for delegation logic
- Define controls for memory scoping, isolation & long-term persistance

## 2. Data Augmentation & Fine-Tuning

- Apply differential privacy or obfuscation on sensitive data injected into agent memory.
- Apply PII & Sensitive data masking injected into agent components
- Data masking on structured data.
- Detect usage of poisoned models in training pipelines
- Agent Action Audit

## 3. Development & Experimentation

- Perform SAST/DAST on agent planning code, tool wrappers, & plugin interfaces.
- Harden agent loop logic against infinite loops, unsafe function routing, & unauthorized self-modification.
- Validate connector (e.g., MCP) contracts (input/output schemas & permissions).
- Implement policy enforcement hooks in Frameworks (e.g. LangGraph, CrewAI, Others)

## 4. Test & Evaluation

- Available Agent Scanning
- Agent Penetration Testing
- Adversarial red-teaming: goal drift, prompt injection, hallucination chaining, & over-permissioned tool usage.
- Multi-agent scenario simulations for collusion, misalignment, or deception detection.
- Validate agent decisions against expected goal plans.
- Sandboxed testing of all tool calls, code execution, cloud API triggers

## 5. Release

- Generate & verify model + agent + tool SBOMs - shared responsibility
- Register all agents in an internal trust registry
- Sign model weights, plugin manifests, & memory snapshots.

## 6. Deploy

- Enforce zero-trust policies between agents, tools, & external APIs
- Rotate all shared secrets, keys, & tokens with ephemeral, scoped credentials.
- Apply & manage runtime Guardrails
- Configure Inter-agent authorization policies, capabilities, & roles

## 7. Operate

- Monitor agent memory mutation patterns for drift
- Detect task replay, infinite delegation, or hallucination loops.
- Enable human-in-the-loop (HITL) override thresholds on high-risk or ambiguous actions
- Continuously scan loaded plugins for CVEs & privilege escalation vectors.
- LLM Incident Detection & Response
- Runtime guardrails & moderation; anomalous tool use

## 8. Monitor

- Correlate telemetry from agent step tracing, tool execution, & message logs.
- Alert on anomalies; e.g., goal reversal, unexpected plan depth, adversarial-input, excessive tool usage, or rapid inter-agent chatter.
- Audit reflection accuracy by comparing stated & observed planning outcomes.
- Use immutable logs (e.g., Sigstore, Immudb) for forensic readiness.

## 9. Govern

- Enforce role- & task-based access policies across agent populations & their tool access.
- Automate agent versioning, expiration, & rotation policies.
- Align control evidence with frameworks like EU AI Act, NIST AI RMF, & ISO/IEC 42001.
- Automate goal alignment audits, including adversarial review of long-term agent memory.