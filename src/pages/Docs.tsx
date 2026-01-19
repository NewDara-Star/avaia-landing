import { motion } from 'framer-motion'
import { Terminal, Settings, Zap, CheckCircle, Copy, ExternalLink, Download } from 'lucide-react'
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
        title: "Download Avaia",
        description: "Get the native desktop app for macOS",
        code: "# Download from GitHub releases\n# Or build from source:\ngit clone https://github.com/NewDara-Star/avaia\ncd avaia/gui\npip install -r requirements.txt\npython server_webview.py"
    },
    {
        number: 2,
        title: "Get your API Key",
        description: "Create an Anthropic API key from the console",
        code: "# Visit console.anthropic.com/settings/keys\n# Create a new API key (starts with sk-ant-)"
    },
    {
        number: 3,
        title: "Enter API Key",
        description: "The setup wizard will ask for your API key on first launch",
        code: "# Your key is stored securely at ~/.avaia/api_key"
    },
    {
        number: 4,
        title: "Start learning!",
        description: "Chat with Avaia to begin your programming journey",
        code: "# Just say \"hi\" and tell Avaia what you want to learn"
    }
]

const tracks = [
    { name: "JavaScript Web Development", projects: "8 projects", focus: "DOM, events, async, full-stack" },
    { name: "Python Data Science", projects: "8 projects", focus: "pandas, numpy, visualization" },
    { name: "C Systems Programming", projects: "12 projects", focus: "Memory, pointers, systems" },
    { name: "Software Engineering Fundamentals", projects: "12 projects", focus: "Design patterns, architecture, distributed systems" },
    { name: "Data Structures & Algorithms", projects: "10 projects", focus: "Core CS fundamentals" },
    { name: "CS Theory", projects: "8 projects", focus: "Complexity, automata, proofs" },
    { name: "ML Engineering", projects: "10 projects", focus: "PyTorch, training, deployment" },
    { name: "Avaia Core", projects: "6 projects", focus: "The default beginner track" }
]

const tools = [
    { category: "Session (14)", tools: ["start_session", "end_session", "get_current_time", "infer_emotional_state", "log_message_timing", "log_session", "get_exit_ticket", "should_prompt_questions", "log_learner_question", "log_emotional_checkin", "get_intervention", "get_session_summary", "get_question_patterns"] },
    { category: "Project (9)", tools: ["get_project_state", "advance_milestone", "get_next_step", "create_learner", "get_learner_profile", "complete_onboarding", "start_project", "update_learning_preferences", "get_known_terms"] },
    { category: "Content (8)", tools: ["introduce_concept", "get_hint", "log_help_request", "get_prerequisites", "get_weak_prerequisites", "get_visualization", "log_confidence", "get_known_terms"] },
    { category: "SRS (3)", tools: ["get_due_reviews", "log_review", "get_refactoring_challenge"] },
    { category: "Verification (9)", tools: ["get_diagnostic_question", "verify_concept", "get_contrasting_case", "get_discrimination_question", "flag_stubborn_bug", "log_diagnostic_result", "log_exit_ticket_result", "get_remediation", "get_stubborn_bugs"] },
    { category: "Sandbox (5)", tools: ["trigger_sandbox", "evaluate_sandbox_attempt", "log_sandbox_reflection", "log_sandbox_attempt", "get_sandbox_summary"] },
    { category: "Track (7)", tools: ["get_learning_tracks", "get_track_details", "select_track", "get_track_progress", "start_project", "get_available_tracks", "get_recommended_track"] }
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
                        Get started with Avaia in 2 minutes.
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
                        <Download className="text-primary" size={24} />
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
                                    Python 3.8+
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={14} className="text-green-500" />
                                    Anthropic API key
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
                                    <code className="mono text-primary">~/.avaia/api_key</code>
                                    API key storage
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Learning Tracks */}
            <section className="py-16 px-6 bg-card/30">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <Zap className="text-primary" size={24} />
                        <h2 className="text-3xl font-bold">8 Learning Tracks</h2>
                    </motion.div>

                    <p className="text-muted-foreground mb-8">
                        Avaia includes 8 pre-seeded learning tracks covering JavaScript, Python, C, systems programming, and computer science theory.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                        {tracks.map((track, i) => (
                            <motion.div
                                key={track.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="glass-card p-4 rounded-xl"
                            >
                                <h3 className="font-semibold mb-2">{track.name}</h3>
                                <p className="text-sm text-muted-foreground mb-2">{track.projects}</p>
                                <p className="text-xs text-muted-foreground">{track.focus}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Learning Tools */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <Zap className="text-primary" size={24} />
                        <h2 className="text-3xl font-bold">49 Learning Tools</h2>
                    </motion.div>

                    <p className="text-muted-foreground mb-8">
                        Avaia uses 49 specialized tools to provide pedagogically-informed teaching. All tools are built-in and work directly with the Anthropic API.
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
                            href="https://github.com/NewDara-Star/avaia/blob/main/gui/avaia_tools.py"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary hover:underline"
                        >
                            View all tools on GitHub <ExternalLink size={14} />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Architecture */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <Terminal className="text-primary" size={24} />
                        <h2 className="text-3xl font-bold">Architecture</h2>
                    </motion.div>

                    <p className="text-muted-foreground mb-6">
                        Avaia uses a direct Anthropic API architecture for maximum speed and simplicity:
                    </p>

                    <div className="glass-card p-6 rounded-xl">
                        <pre className="mono text-xs overflow-x-auto text-muted-foreground">
{`┌─────────────────────────────────────────────────────┐
│                  Avaia Desktop App                  │
├─────────────────────────────────────────────────────┤
│  PyWebView (Native WebKit)                          │
│  ├── Flask Server (backend)                         │
│  │   ├── Socket.IO (real-time chat)                 │
│  │   ├── REST API (dashboard, reviews)              │
│  │   └── SQLite (learner data, curriculum)          │
│  └── avaia_tools.py (49 learning tools)             │
├─────────────────────────────────────────────────────┤
│  Anthropic API (Claude Haiku/Sonnet/Opus)           │
│  ├── Direct API calls (no CLI overhead)             │
│  ├── Tool calling (function execution)              │
│  └── Streaming responses                            │
└─────────────────────────────────────────────────────┘`}
                        </pre>
                    </div>

                    <div className="mt-6 space-y-4">
                        <div className="glass-card p-4 rounded-xl">
                            <h4 className="font-semibold mb-2">⚡ Fast Response Times</h4>
                            <p className="text-sm text-muted-foreground">
                                Direct API calls achieve ~1 second response times with Haiku, compared to multi-second overhead with CLI subprocesses.
                            </p>
                        </div>
                        <div className="glass-card p-4 rounded-xl">
                            <h4 className="font-semibold mb-2">🔧 Built-in Tools</h4>
                            <p className="text-sm text-muted-foreground">
                                All 49 tools are implemented in Python with direct database access. No external dependencies or MCP server needed.
                            </p>
                        </div>
                        <div className="glass-card p-4 rounded-xl">
                            <h4 className="font-semibold mb-2">🎛️ Model Switching</h4>
                            <p className="text-sm text-muted-foreground">
                                Easily switch between Haiku (fast), Sonnet (balanced), and Opus (powerful) models based on your needs.
                            </p>
                        </div>
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
                        <ExternalLink size={20} />
                        View on GitHub
                    </Button>
                </a>
            </section>

            <Footer />
        </div>
    )
}
