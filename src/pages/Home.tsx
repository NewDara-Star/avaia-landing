import { motion } from 'framer-motion'
import { Brain, GitBranch, Zap, Shield, RefreshCw, Heart, Github, Terminal, ChevronRight, Monitor, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Header } from '@/components/Header'
import { ProductDemo } from '@/components/ProductDemo'
import { Button } from '@/components/ui/button'

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: [0.0, 0.0, 0.2, 1] as const }
    })
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
}

const principles = [
    {
        icon: Brain,
        title: "Invisible Spaced Repetition",
        desc: "FSRS-5 algorithm ensures you never forget. Reviews feel like natural check-ins, not flashcard drills.",
        research: "Bjork (1994) Desirable Difficulties"
    },
    {
        icon: Zap,
        title: "Productive Failure",
        desc: "Struggle with sandbox exercises before instruction. The confusion creates slots for knowledge to stick.",
        research: "Kapur (2008) Productive Failure"
    },
    {
        icon: Shield,
        title: "Anti-Sycophancy",
        desc: "No 'Great question!' or premature solutions. Real teaching means letting you work through problems.",
        research: "Chi (1989) Active Learning"
    },
    {
        icon: RefreshCw,
        title: "Stubborn Bug Detection",
        desc: "High confidence + wrong answer? That gets special treatment. Stubborn misconceptions need targeted remediation.",
        research: "Hypercorrection Effect"
    },
    {
        icon: Heart,
        title: "Emotional Intelligence",
        desc: "Timing patterns reveal frustration and disengagement. The system adapts before you give up.",
        research: "Affective Computing"
    },
    {
        icon: GitBranch,
        title: "Project-First Learning",
        desc: "Build 7 real projects. Concepts are discovered just-in-time, not crammed ahead of time.",
        research: "Situated Cognition (Lave)"
    }
]

const stats = [
    { value: "47", label: "MCP Tools" },
    { value: "35", label: "Concepts" },
    { value: "6", label: "Sandbox Exercises" },
    { value: "33", label: "Misconceptions Tracked" }
]

export default function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            {/* Hero */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24 pb-12">
                {/* Ambient Background */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="ambient-orb ambient-orb-primary w-[600px] h-[600px] top-[-20%] right-[-10%]" />
                    <div className="ambient-orb ambient-orb-secondary w-[400px] h-[400px] bottom-[10%] left-[-5%]" />
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="text-center mb-16"
                    >
                        <motion.div
                            variants={fadeIn}
                            custom={0}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span>Open Source • MCP Server for Claude</span>
                        </motion.div>

                        <motion.h1
                            variants={fadeIn}
                            custom={1}
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                        >
                            The AI that teaches
                            <br />
                            <span className="gradient-text">programming properly</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeIn}
                            custom={2}
                            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
                        >
                            No hand-holding. No shortcuts. Just lasting knowledge through
                            spaced repetition, productive failure, and real projects.
                        </motion.p>

                        <motion.div
                            variants={fadeIn}
                            custom={3}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            <a
                                href="https://github.com/NewDara-Star/avaia"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button size="lg" className="gap-2 glow-sm">
                                    <Github className="w-5 h-5" />
                                    View on GitHub
                                </Button>
                            </a>
                            <Link to="/science">
                                <Button variant="outline" size="lg" className="gap-2">
                                    Learn the Philosophy
                                    <ChevronRight className="w-4 h-4" />
                                </Button>
                            </Link>
                        </motion.div>

                        <motion.div
                            variants={fadeIn}
                            custom={4}
                            className="mt-10"
                        >
                            <div className="inline-flex items-center gap-3 glass-card px-6 py-4 rounded-xl">
                                <code className="font-mono text-sm text-muted-foreground">
                                    <span className="text-primary">$</span> npm install -g @newdara/avaia
                                </code>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Product Demo */}
                    <ProductDemo />
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center pt-2">
                        <div className="w-1.5 h-3 bg-primary rounded-full" />
                    </div>
                </motion.div>
            </section>

            {/* Stats bar */}
            <section className="border-y border-border/50 py-16 bg-card/30">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8"
                    >
                        {stats.map((stat) => (
                            <motion.div
                                key={stat.label}
                                variants={fadeIn}
                                className="text-center"
                            >
                                <div className="text-4xl lg:text-5xl font-bold text-primary font-mono mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-muted-foreground text-sm">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Philosophy */}
            <section id="philosophy" className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                            Built on <span className="gradient-text">Science</span>, Not Vibes
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Every feature is grounded in decades of cognitive science research.
                            This isn't another chatbot — it's a pedagogically-informed learning system.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {principles.map((p, i) => (
                            <motion.div
                                key={p.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group glass-card p-6 rounded-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <p.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
                                <p className="font-mono text-xs text-primary/70">{p.research}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <Link to="/science">
                            <Button variant="ghost" className="gap-2 text-primary">
                                Deep dive into the research
                                <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 px-6 bg-card/30">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                            How It <span className="gradient-text">Actually Works</span>
                        </h2>
                    </motion.div>

                    <div className="space-y-8">
                        {[
                            {
                                step: "01",
                                title: "You build real projects",
                                desc: "Memory Game → Task Tracker → Weather Dashboard → API Server → Real-time Chat → Capstone"
                            },
                            {
                                step: "02",
                                title: "Concepts emerge just-in-time",
                                desc: "Need event delegation? It's taught when your project needs it. Context makes it stick."
                            },
                            {
                                step: "03",
                                title: "Productive failure before instruction",
                                desc: "Sandbox exercises let you struggle first. The confusion creates mental slots for the solution."
                            },
                            {
                                step: "04",
                                title: "Verification, not self-assessment",
                                desc: "Code prediction questions reveal what you actually know. No more 'I think I got it.'"
                            },
                            {
                                step: "05",
                                title: "Invisible spaced repetition",
                                desc: "Reviews are woven into sessions naturally. FSRS-5 schedules them optimally."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex gap-6 items-start"
                            >
                                <div className="font-mono text-4xl font-bold text-primary/30 w-16 flex-shrink-0">
                                    {item.step}
                                </div>
                                <div className="glass-card p-5 rounded-xl flex-1">
                                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <Link to="/curriculum">
                            <Button variant="ghost" className="gap-2 text-primary">
                                View the full curriculum
                                <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Native GUI */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                            Native <span className="gradient-text">macOS App</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            A beautiful ChatGPT-like interface for your tutoring sessions
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 rounded-2xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center">
                                <Monitor className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Avaia.app</h3>
                                <p className="text-sm text-muted-foreground">Native experience</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-semibold mb-3 text-primary">Features</h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span><strong className="text-foreground">Chat interface</strong> — Like ChatGPT, but for learning</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span><strong className="text-foreground">Suggestion cards</strong> — Quick actions to start learning</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span><strong className="text-foreground">Markdown rendering</strong> — Code blocks with syntax highlighting</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span><strong className="text-foreground">Real-time streaming</strong> — See responses as they come</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-3 text-primary">Quick Start</h4>
                                <div className="glass-card p-4 rounded-lg font-mono text-sm space-y-1">
                                    <p><span className="text-primary">$</span> <span className="text-muted-foreground">cd gui</span></p>
                                    <p><span className="text-primary">$</span> <span className="text-muted-foreground">./run.sh</span></p>
                                    <p className="pt-2 text-xs text-muted-foreground/70">Opens at http://127.0.0.1:5050</p>
                                    <p className="pt-2 text-xs text-muted-foreground/70 italic">Or build the native app:</p>
                                    <p><span className="text-primary">$</span> <span className="text-muted-foreground">./build.sh</span></p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Technical */}
            <section className="py-24 px-6 bg-card/30">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                            Under the <span className="gradient-text">Hood</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            An MCP server that gives Claude pedagogical superpowers
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 rounded-2xl"
                    >
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-mono text-primary mb-4 flex items-center gap-2">
                                    <Terminal className="w-5 h-5" />
                                    Architecture
                                </h3>
                                <ul className="space-y-3 text-sm text-muted-foreground">
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        <span><strong className="text-foreground">MCP Server</strong> — 47 pedagogical tools</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        <span><strong className="text-foreground">SQLite</strong> — Local learner state at ~/.avaia</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        <span><strong className="text-foreground">FSRS-5</strong> — State-of-the-art spaced repetition</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        <span><strong className="text-foreground">TypeScript</strong> — Strict types, Zod validation</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-mono text-primary mb-4 flex items-center gap-2">
                                    <Brain className="w-5 h-5" />
                                    Data Tracked
                                </h3>
                                <ul className="space-y-3 text-sm text-muted-foreground">
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        <span><strong className="text-foreground font-mono">stability</strong> — Days until 90% forgotten</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        <span><strong className="text-foreground font-mono">difficulty</strong> — Personalized per concept</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        <span><strong className="text-foreground font-mono">independence_score</strong> — Hint level to give</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        <span><strong className="text-foreground font-mono">stubborn_bugs</strong> — High-confidence errors</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-8"
                    >
                        <Link to="/docs">
                            <Button variant="ghost" className="gap-2 text-primary">
                                Read the documentation
                                <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

                <div className="max-w-2xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Ready to Learn JavaScript <em className="not-italic gradient-text">Properly</em>?
                        </h2>
                        <p className="text-muted-foreground mb-8">
                            Open source. Free forever. Because education shouldn't be paywalled.
                        </p>

                        <div className="glass-card p-8 rounded-2xl text-left mb-8">
                            <code className="font-mono text-sm block space-y-2">
                                <div className="text-muted-foreground"># Install globally</div>
                                <div><span className="text-primary">$</span> npm install -g @newdara/avaia</div>
                                <div className="pt-3 text-muted-foreground"># Initialize and seed curriculum</div>
                                <div><span className="text-primary">$</span> avaia init</div>
                                <div><span className="text-primary">$</span> avaia seed</div>
                                <div className="pt-3 text-muted-foreground"># Configure Claude Code MCP, then start</div>
                                <div><span className="text-primary">$</span> avaia</div>
                            </code>
                        </div>

                        <a
                            href="https://github.com/NewDara-Star/avaia"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button size="lg" className="gap-2 glow">
                                <Github className="w-5 h-5" />
                                Get Started on GitHub
                            </Button>
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-border/50 py-8 px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-muted-foreground text-sm">
                        Built by{' '}
                        <a href="https://github.com/NewDara-Star" className="text-primary hover:underline">
                            @NewDara-Star
                        </a>
                        {' '}• MIT License • 2026
                    </p>
                    <nav className="flex gap-6 text-sm text-muted-foreground">
                        <Link to="/curriculum" className="hover:text-foreground transition-colors">Curriculum</Link>
                        <Link to="/science" className="hover:text-foreground transition-colors">Science</Link>
                        <Link to="/docs" className="hover:text-foreground transition-colors">Docs</Link>
                        <a href="https://github.com/NewDara-Star/avaia" className="hover:text-foreground transition-colors">GitHub</a>
                    </nav>
                </div>
            </footer>
        </div>
    )
}
