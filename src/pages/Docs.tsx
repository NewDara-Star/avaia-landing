import { motion } from 'framer-motion'
import { Terminal, Settings, Zap, CheckCircle, ChevronRight, Copy, Github, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'

function CodeBlock({ code, title }: { code: string; title?: string }) {
    const [copied, setCopied] = useState(false)

    const copy = () => {
        navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="glass-card rounded-xl overflow-hidden">
            {title && (
                <div className="px-4 py-2 border-b border-border text-xs mono text-muted-foreground">
                    {title}
                </div>
            )}
            <div className="relative p-4">
                <button
                    onClick={copy}
                    className="absolute top-4 right-4 p-2 hover:bg-secondary rounded transition"
                >
                    {copied ? (
                        <CheckCircle size={16} className="text-green-500" />
                    ) : (
                        <Copy size={16} className="text-muted-foreground" />
                    )}
                </button>
                <pre className="mono text-sm overflow-x-auto">
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    )
}

const steps = [
    {
        number: 1,
        title: "Install Avaia globally",
        description: "Install the CLI tool from npm",
        code: "npm install -g @newdara/avaia"
    },
    {
        number: 2,
        title: "Initialize Avaia",
        description: "Creates ~/.avaia directory with system prompt",
        code: "avaia init"
    },
    {
        number: 3,
        title: "Seed the curriculum",
        description: "Loads 35 concepts, 33 misconceptions, 6 sandboxes",
        code: "avaia seed"
    },
    {
        number: 4,
        title: "Configure Claude Code MCP",
        description: "Add Avaia as an MCP server to Claude Code",
        code: null,
        config: true
    },
    {
        number: 5,
        title: "Start learning!",
        description: "Launch a session from your project directory",
        code: "avaia"
    }
]

const mcpConfig = `{
  "mcpServers": {
    "avaia": {
      "command": "node",
      "args": [
        "/path/to/global/node_modules/@newdara/avaia/dist/server/index.js"
      ]
    }
  }
}`

const tools = [
    { category: "Session (13)", tools: ["get_current_time", "infer_emotional_state", "log_message_timing", "log_session", "get_exit_ticket", "should_prompt_questions", "log_learner_question", "log_emotional_checkin", "get_intervention", "end_session", "get_session_summary", "get_question_patterns", "start_session"] },
    { category: "Project (8)", tools: ["get_project_state", "advance_milestone", "get_next_step", "create_learner", "get_learner_profile", "complete_onboarding", "start_project"] },
    { category: "Content (8)", tools: ["introduce_concept", "get_hint", "log_help_request", "get_prerequisites", "get_weak_prerequisites", "get_visualization", "log_confidence", "get_known_terms"] },
    { category: "SRS (3)", tools: ["get_due_reviews", "log_review", "get_refactoring_challenge"] },
    { category: "Verification (10)", tools: ["get_diagnostic_question", "verify_concept", "get_contrasting_case", "get_discrimination_question", "flag_stubborn_bug", "log_diagnostic_result", "log_exit_ticket_result", "get_remediation", "get_stubborn_bugs"] },
    { category: "Sandbox (5)", tools: ["trigger_sandbox", "evaluate_sandbox_attempt", "log_sandbox_reflection", "log_sandbox_attempt", "get_sandbox_summary"] }
]

export default function Docs() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-16 px-6 border-b border-border/50">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold mb-4"
                    >
                        <span className="gradient-text">Documentation</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        Get started with Avaia in 5 minutes.
                    </motion.p>
                </div>
            </section>

            {/* Quick Start */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <Terminal className="text-primary" size={24} />
                        <h2 className="text-3xl font-bold">Quick Start</h2>
                    </motion.div>

                    <div className="space-y-6">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="flex gap-4 items-start mb-3">
                                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                                        {step.number}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold">{step.title}</h3>
                                        <p className="text-sm text-muted-foreground">{step.description}</p>
                                    </div>
                                </div>

                                {step.code && (
                                    <div className="ml-12">
                                        <CodeBlock code={step.code} />
                                    </div>
                                )}

                                {step.config && (
                                    <div className="ml-12">
                                        <p className="text-sm text-muted-foreground mb-3">
                                            Add to <code className="mono text-primary">~/.claude/settings.json</code> or your Claude Code MCP config:
                                        </p>
                                        <CodeBlock code={mcpConfig} title="~/.claude/settings.json" />
                                        <p className="text-xs text-muted-foreground mt-3">
                                            To find the path, run: <code className="mono">npm root -g</code>
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Requirements */}
            <section className="py-16 px-6 bg-card/30">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <Settings className="text-primary" size={24} />
                        <h2 className="text-3xl font-bold">Requirements</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-6 rounded-xl"
                        >
                            <h3 className="font-semibold mb-4">System</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={14} className="text-green-500" />
                                    Node.js 20+
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={14} className="text-green-500" />
                                    Claude Code (for MCP integration)
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={14} className="text-green-500" />
                                    ~50MB disk space
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="glass-card p-6 rounded-xl"
                        >
                            <h3 className="font-semibold mb-4">Data Storage</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2">
                                    <code className="mono text-primary">~/.avaia/</code>
                                    Data directory
                                </li>
                                <li className="flex items-center gap-2">
                                    <code className="mono text-primary">~/.avaia/avaia.db</code>
                                    SQLite database
                                </li>
                                <li className="flex items-center gap-2">
                                    <code className="mono text-primary">~/.avaia/system-prompt.md</code>
                                    Persona config
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* MCP Tools */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <Zap className="text-primary" size={24} />
                        <h2 className="text-3xl font-bold">47 MCP Tools</h2>
                    </motion.div>

                    <p className="text-muted-foreground mb-8">
                        Avaia exposes 47 tools that give Claude pedagogical superpowers. Here's a sample by category:
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                        {tools.map((category, i) => (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="glass-card p-4 rounded-xl"
                            >
                                <h3 className="mono text-primary text-sm mb-3">{category.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.tools.map(tool => (
                                        <span key={tool} className="mono text-xs px-2 py-1 bg-secondary rounded">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-8 text-center"
                    >
                        <a
                            href="https://github.com/NewDara-Star/avaia/tree/main/src/server/tools"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary hover:underline"
                        >
                            View all tools on GitHub <ExternalLink size={14} />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* CLI Commands */}
            <section className="py-16 px-6 bg-card/30">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <Terminal className="text-primary" size={24} />
                        <h2 className="text-3xl font-bold">CLI Commands</h2>
                    </motion.div>

                    <div className="space-y-4">
                        {[
                            { cmd: "avaia init", desc: "Initialize ~/.avaia directory with system prompt" },
                            { cmd: "avaia seed", desc: "Seed database with curriculum (concepts, sandboxes, misconceptions)" },
                            { cmd: "avaia help", desc: "Show available commands" },
                            { cmd: "avaia", desc: "Start a learning session (wraps Claude Code)" }
                        ].map((item, i) => (
                            <motion.div
                                key={item.cmd}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-4 p-4 glass-card rounded-xl"
                            >
                                <code className="mono text-primary font-semibold">{item.cmd}</code>
                                <ChevronRight size={16} className="text-muted-foreground" />
                                <span className="text-muted-foreground">{item.desc}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Questions?</h2>
                <p className="text-muted-foreground mb-8">
                    Open an issue on GitHub or dive into the source code.
                </p>
                <a
                    href="https://github.com/NewDara-Star/avaia"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button size="lg" className="gap-2 glow-sm">
                        <Github size={20} />
                        View on GitHub
                    </Button>
                </a>
            </section>

            <Footer />
        </div>
    )
}
