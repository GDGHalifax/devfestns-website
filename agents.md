# Agent Rules

This file contains rules and guidelines for AI agents working in this repository.

## General Guidelines
- **Granular Commits:** Commit and push changes frequently.
- **Focus:** Never combine unrelated files or changes in one commit. Keep commits focused, granular, and descriptive.
- **Testing:** Always run tests if they exist before committing changes. Ensure no regressions are introduced. Maintain 100% test coverage for all code.
- **Dependencies:** Do not introduce new dependencies unless explicitly asked by the user or absolutely necessary. 

## Communication
- **Clarity:** Keep your responses concise, direct, and actionable.
- **Proactive Problem Solving:** If you notice an issue outside of the immediate request (like a security flaw or an obvious bug), inform the user.
- **Verification:** When you end a turn after modifying code, provide a brief summary of the changes made.

## Code Quality & Architecture
- **Consistency:** Follow existing code style, architecture, and naming conventions in the project.
- **Documentation:** Maintain documentation integrity. Preserve all existing comments and docstrings. Add docstrings to new public functions or classes.
- **Readability:** Prioritize simple, readable code over clever or overly complex solutions. 
- **Refactoring:** Do not perform large-scale refactoring unless explicitly requested by the user.

## Security & Best Practices
- **No Secrets:** Never hardcode API keys, passwords, or any sensitive tokens. Always use environment variables.
- **Best Practices:** Use modern web development best practices for security and performance.
