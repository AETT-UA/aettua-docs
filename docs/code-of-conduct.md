# Code of Conduct

## Introduction

This document outlines the Code of Conduct for AETTUA's IT Team. It aims to establish a set of principles and practices to ensure a productive, respectful, and collaborative environment. Adherence to these guidelines is expected from all team members.

## Table of Contents

- [Introduction](#introduction)
- [Version Control](#version-control)
  - [Branching Strategy](#branching-strategy)
  - [Naming Conventions](#naming-conventions)
  - [Commit Messages](#commit-messages)
- [Code Review](#code-review)
  - [Review Process](#review-process)
  - [Acceptance Criteria](#acceptance-criteria)
- [Testing](#testing)
  - [Unit Tests](#unit-tests)
  - [Integration Tests](#integration-tests)
- [Documentation](#documentation)
- [Communication](#communication)
- [Conflict Resolution](#conflict-resolution)
- [Enforcement](#enforcement)
- [Amendments](#amendments)

## Version Control

### Branching Strategy

- **Main Branch:** The `main` branch is the source of truth. All production-ready code resides here.
- **Development Branch:** The `dev` branch is where all development merges before being promoted to `main`.
- **Feature Branches:** All new features should be developed in separate branches, branching off from `dev`.
- **Hotfix Branches:** Urgent fixes that need to be applied to the production codebase are made in `hotfix` branches, which are merged directly into `main` and then back-merged into `dev`.

### Naming Conventions

- **Branch Names:** Use a descriptive name for branches, prefixed with the type (e.g., `feature/user-login`, `hotfix/login-bug`).
- **Commit Messages:** Use imperative mood, and describe what the commit does (e.g., "Add user authentication system").

### Commit Messages

- Clearly describe the changes made in the commit.
- Include the ticket or issue number if applicable.
- Keep messages concise and relevant.

## Code Review

### Review Process

- Assign at least one reviewer for each merge request.
- Reviewers should provide constructive feedback and approve changes only when they meet the project standards and requirements.

### Acceptance Criteria

- Code meets the project's coding standards and guidelines.
- Documentation is updated to reflect changes.
- Changes are tested (when applicable) and do not introduce new bugs.

## Testing

### Unit Tests

- Write unit tests for all new code and update existing tests as necessary.
- Aim for a high code coverage percentage to ensure reliability.

### Integration Tests

- Ensure new features work as expected with the existing system.
- Conduct end-to-end tests for critical workflows.

## Documentation

- Document all features, functions, and algorithms.
- Use clear, concise language and include examples where possible.

## Communication

- Maintain regular communication with team members, especially when working remotely.
- Use the designated channels for project discussions, updates, and questions.

## Conflict Resolution

- Address conflicts directly with the involved parties.
- Escalate unresolved issues to the team lead or project manager.

## Enforcement

Violations of the Code of Conduct may result in warnings, removal from the project, or further disciplinary actions as deemed appropriate by the leadership team.

## Amendments

This Code of Conduct is a living document and may be updated as the project evolves. All team members will be notified of any changes.
