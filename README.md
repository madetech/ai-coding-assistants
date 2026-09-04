# ai-coding-assistants
The purpose of this repository is to give guidance on the use of AI for helping technology teams.

This guidance is focused on how best to use these tools. It doesn't explicitly cover whether we "should" use AI at Made Tech or not.

Most of this guidance assumes a little background knowledge. If it's a brand new topic for you, have a look at [our guide to getting started](guidance/getting-started.md).

### Guidance by topic
- [How should I use it? What are some typical workflows?](guidance/workflows.md)
- [Which tools should I use?](guidance/tooling.md)
- [How do I write high-quality code?](guidance/quality.md)
- [How do I manage security and risk?](guidance/security.md)
- [How do I write a good system prompt?](guidance/prompts.md)
- [How do I work in the open with AI?](guidance/attribution.md)

## Glossary
### Artificial Intelligence
Famously ill-defined. Things that were described as AI in the past are now just "automation" or "how the world works".

One useful definition:
> Intelligence is the computational aspect of a goal-seeking system.

### LLM (large language models)
Roughly, a specialisation of _machine learning_ that focuses on processing and generating natural language.

### Human-in-the-loop
The human element in an AI workflow. Different [workflows](#workflows) are built around different levels of involvement.

This term implies the human is _within_ the building loop, giving more regular feedback than only prompting or reviewing the output at the end.

### Agents/agentic
A tool that acts more broadly as a goal-achiever than a simple question-and-response chatbot. Often only distinguished by complexity of task, or the tools' access to other tools/APIs.

### Context / context window
The information that an LLM currently has the quickest access to. This can include your system prompt, your last prompt, previous prompts, and previous answers.

If you model an AI as a 'mind', this is its 'working memory'.

### Model context protocol ("MCP") and Skills
AI-specific patterns for wrapping tool use (eg a CLI or a web API) in an abstracted component.

The field is developing rapidly, with a possible shift away from MCP due to heavy token use.

## Contributing to this repo

Contributions are welcome, just open a pull request (or just commit to `main` if sensible).
