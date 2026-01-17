import { motion } from 'framer-motion'
import { Calendar, CheckCircle, Code, Zap, BookOpen, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const projects = [
    {
        number: 1,
        title: "Memory Game",
        duration: "2-3 weeks",
        description: "Card matching game in browser. Learn DOM manipulation, events, state management, and CSS animations.",
        concepts: ["DOM Manipulation", "Event Listeners", "State vs UI", "setTimeout", "localStorage"],
        milestones: ["Display Grid", "Flip Cards", "Track State", "Game Logic", "Polish & Deploy"]
    },
    {
        number: 2,
        title: "Task Tracker",
        duration: "2-3 weeks",
        description: "Todo app with CRUD operations and local persistence. Master array methods and form handling.",
        concepts: ["Array Methods", "Event Delegation", "Form Handling", "localStorage", "Template Literals"],
        milestones: ["Display & Add", "Delete & Complete", "Edit Tasks", "Persistence", "Categories & Filters"]
    },
    {
        number: 3,
        title: "Weather Dashboard",
        duration: "3-4 weeks",
        description: "Real-time weather from API. Introduction to asynchronous programming.",
        concepts: ["Promises", "async/await", "fetch API", "Error Handling", "Debouncing"],
        milestones: ["Hardcoded Data", "Fetch API", "Error Handling", "Location Search", "Polish & Deploy"],
        sandbox: {
            name: "The Blocking Loop",
            concept: "Event Loop",
            problem: "Make JavaScript wait 3 seconds before printing 'Done'."
        }
    },
    {
        number: "4a",
        title: "API Server",
        duration: "3-4 weeks",
        description: "REST API with database. Learn Node.js, Express, and SQL.",
        concepts: ["Node.js", "Express", "REST", "SQLite", "Middleware"],
        milestones: ["Server Basics", "Express API", "Database", "Third-Party Auth", "Deploy"],
        sandbox: {
            name: "JSON File Database",
            concept: "SQL",
            problem: "Store users and posts in JSON. Find all posts by Dublin users."
        }
    },
    {
        number: "4b",
        title: "Auth Deep Dive",
        duration: "2-3 weeks",
        description: "Implement authentication from scratch. Replace Firebase with your own implementation.",
        concepts: ["Password Hashing", "Sessions", "JWT", "bcrypt", "Authorization"],
        milestones: ["Password Hashing", "Session Auth", "JWT Auth", "Compare & Choose", "Protected Routes"],
        sandbox: {
            name: "localStorage Password",
            concept: "Hashing",
            problem: "Store username and password in localStorage. Open DevTools."
        }
    },
    {
        number: "4c",
        title: "Frontend Integration",
        duration: "2-3 weeks",
        description: "Connect a React frontend to your API. Complete the full-stack picture.",
        concepts: ["React Basics", "useEffect", "Auth Context", "Optimistic UI", "Deployment"],
        milestones: ["React Basics", "Fetch from API", "Auth Flow", "Optimistic UI", "Full-Stack Deploy"]
    },
    {
        number: 5,
        title: "Real-time Chat",
        duration: "3-4 weeks",
        description: "Chat app with instant message delivery using WebSockets.",
        concepts: ["WebSockets", "Socket.io", "Rooms", "Presence", "Scaling"],
        milestones: ["WebSocket Basics", "Broadcasting", "Typing & Presence", "Persistence", "Scale & Deploy"],
        sandbox: {
            name: "Polling Disaster",
            concept: "WebSockets",
            problem: "Build 'live' chat by polling every 100ms. Watch Network tab."
        }
    },
    {
        number: 6,
        title: "Capstone",
        duration: "4-6 weeks",
        description: "Design and build your own application. Demonstrate mastery by applying all concepts.",
        concepts: ["Problem Definition", "Architecture", "Tech Stack Decisions", "UX Polish", "Launch"],
        milestones: ["Ideation & Scope", "Architecture", "Core Functionality", "Feature Completion", "Launch"]
    }
]

export default function Curriculum() {
    return (
        <div className="min-h-screen bg-[var(--color-bg)]">
            {/* Header */}
            <header className="border-b border-[var(--color-border)] py-4 px-6">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold text-[var(--color-accent)]">Avaia</Link>
                    <nav className="flex gap-6 text-sm">
                        <Link to="/curriculum" className="text-[var(--color-accent)]">Curriculum</Link>
                        <Link to="/science" className="hover:text-[var(--color-accent)] transition">Science</Link>
                        <Link to="/docs" className="hover:text-[var(--color-accent)] transition">Docs</Link>
                    </nav>
                </div>
            </header>

            {/* Hero */}
            <section className="py-16 px-6 border-b border-[var(--color-border)]">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold mb-4"
                    >
                        The <span className="text-[var(--color-accent)]">Curriculum</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto"
                    >
                        7 projects. 22-32 weeks. Each project produces a deployed, portfolio-worthy application.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex justify-center gap-8 mt-8 text-sm"
                    >
                        <div className="flex items-center gap-2">
                            <Calendar className="text-[var(--color-accent)]" size={18} />
                            <span className="text-[var(--color-text-muted)]">22-32 weeks total</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Code className="text-[var(--color-accent)]" size={18} />
                            <span className="text-[var(--color-text-muted)]">35 concepts</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Zap className="text-[var(--color-accent)]" size={18} />
                            <span className="text-[var(--color-text-muted)]">6 sandbox exercises</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Projects */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto space-y-12">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.number}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                            className="gradient-border p-8"
                        >
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[var(--color-accent)] text-[var(--color-bg)] flex items-center justify-center text-2xl font-bold">
                                    {project.number}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-2">
                                        <h2 className="text-2xl font-bold">{project.title}</h2>
                                        <span className="mono text-xs px-3 py-1 bg-[var(--color-bg)] rounded-full text-[var(--color-text-muted)]">
                                            {project.duration}
                                        </span>
                                    </div>
                                    <p className="text-[var(--color-text-muted)] mb-6">{project.description}</p>

                                    {/* Sandbox callout if exists */}
                                    {project.sandbox && (
                                        <div
                                            className="mb-6 p-4 rounded-lg border border-amber-500/30"
                                            style={{ backgroundColor: 'rgba(245, 183, 77, 0.12)' }}
                                        >
                                            <div className="flex items-center gap-2 text-[var(--color-accent)] mb-2">
                                                <Zap size={16} />
                                                <span className="mono text-sm font-semibold">SANDBOX: {project.sandbox.name}</span>
                                            </div>
                                            <p className="text-sm text-[var(--color-text)]">
                                                <strong>Before learning {project.sandbox.concept}:</strong> "{project.sandbox.problem}"
                                            </p>
                                        </div>
                                    )}

                                    {/* Milestones */}
                                    <div className="mb-4">
                                        <h3 className="text-sm font-semibold text-[var(--color-text-muted)] mb-2 flex items-center gap-2">
                                            <BookOpen size={14} />
                                            Milestones
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.milestones.map((m, j) => (
                                                <div key={j} className="flex items-center gap-1 text-sm px-3 py-1 bg-[var(--color-bg)] rounded-full">
                                                    <ChevronRight size={14} className="text-[var(--color-accent)]" />
                                                    {m}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Concepts */}
                                    <div>
                                        <h3 className="text-sm font-semibold text-[var(--color-text-muted)] mb-2 flex items-center gap-2">
                                            <CheckCircle size={14} />
                                            Concepts Learned
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.concepts.map((c, j) => (
                                                <span key={j} className="mono text-xs px-2 py-1 text-[var(--color-accent)] border border-[var(--color-accent)] border-opacity-30 rounded">
                                                    {c}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-6 bg-[var(--color-bg-elevated)] text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
                <p className="text-[var(--color-text-muted)] mb-8">
                    Install Avaia and begin with Project 1: Memory Game
                </p>
                <Link
                    to="/docs"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-[var(--color-bg)] font-semibold rounded-lg hover:brightness-110 transition glow"
                >
                    Get Started
                    <ChevronRight size={18} />
                </Link>
            </section>

            {/* Footer */}
            <footer className="border-t border-[var(--color-border)] py-8 px-6 text-center text-[var(--color-text-muted)] text-sm">
                <p>
                    Built by{' '}
                    <a href="https://github.com/NewDara-Star" className="text-[var(--color-accent)] hover:underline">
                        @NewDara-Star
                    </a>
                    {' '}• MIT License • 2026
                </p>
            </footer>
        </div>
    )
}
