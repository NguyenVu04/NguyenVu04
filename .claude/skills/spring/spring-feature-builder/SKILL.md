---
name: spring-feature-builder
description: Plan and implement a new feature following strict layered architecture (controller -> domain -> core), including DTOs, services, and tests.
tools: codebase, search, grep
---

## Goal

Given a feature description, produce:

1. Implementation plan
2. File structure
3. Code (controller, service, impl, DTOs)
4. Tests
5. Edge case handling

Everything must compile logically and follow existing patterns.

---

## Architecture Rules

STRICT:

- Controller:
  - only handles request/response
  - no business logic
- Domain:
  - service interface defines contract
  - impl contains logic
- Core:
  - reusable only
  - no feature-specific logic

---

## Step 1: Analyze Feature

Extract:
- Inputs
- Outputs
- Business rules
- Edge cases
- Failure scenarios

Reject vague specs. Ask for clarification if needed.

---

## Step 2: Design

### Define:

- DTOs (request/response)
- Service interface
- Implementation class
- Required entities or reuse existing

---

## Step 3: File Placement

Follow:

- controller/<feature>
- domain/<feature>/service
- domain/<feature>/impl
- domain/<feature>/datatype (if needed)

---

## Step 4: Implementation Rules

### Controller
- Validate input
- Call service
- Map response
- Handle errors properly

### Service Interface
- Minimal methods
- Clear naming

### Implementation
- Pure business logic
- No HTTP/gRPC awareness
- Use core utilities only

---

## Step 5: Error Handling

- Use consistent exception strategy
- No raw exceptions leaking

---

## Step 6: Testing Strategy

Must include:

### Unit Tests
- Service logic
- Edge cases
- Failure paths

### Optional Integration Tests
- Controller level

---

## Output Format

### 1. Feature Breakdown
- Requirements
- Constraints

### 2. Design
- DTOs
- Interfaces

### 3. File Structure

### 4. Code
Provide complete code:
- Controller
- Service
- Impl
- DTOs

### 5. Tests
- Unit tests with coverage focus

---

## Quality Constraints

- No duplication
- No layer violations
- No overengineering
- Must be consistent with existing codebase

---

## Failure Conditions

If:
- feature contradicts architecture
- missing requirements

→ STOP and ask for clarification