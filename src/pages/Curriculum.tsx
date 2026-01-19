import { motion } from 'framer-motion'
import { Calendar, CheckCircle, Code, Zap, BookOpen, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'

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
                        The <span className="gradient-text">Curriculum</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        7 projects. 22-32 weeks. Each project produces a deployed, portfolio-worthy application.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-8 mt-8 text-sm"
                    >
                        <div className="flex items-center gap-2">
                            <Calendar className="text-primary" size={18} />
                            <span className="text-muted-foreground">22-32 weeks total</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Code className="text-primary" size={18} />
                            <span className="text-muted-foreground">100+ concepts</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Zap className="text-primary" size={18} />
                            <span className="text-muted-foreground">6 sandbox exercises</span>
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
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                            className="glass-card p-8 rounded-xl"
                        >
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                                    {project.number}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-2">
                                        <h2 className="text-2xl font-bold">{project.title}</h2>
                                        <span className="mono text-xs px-3 py-1 bg-secondary rounded-full text-muted-foreground">
                                            {project.duration}
                                        </span>
                                    </div>
                                    <p className="text-muted-foreground mb-6">{project.description}</p>

                                    {/* Sandbox callout if exists */}
                                    {project.sandbox && (
                                        <div className="mb-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
                                            <div className="flex items-center gap-2 text-primary mb-2">
                                                <Zap size={16} />
                                                <span className="mono text-sm font-semibold">SANDBOX: {project.sandbox.name}</span>
                                            </div>
                                            <p className="text-sm text-foreground">
                                                <strong>Before learning {project.sandbox.concept}:</strong> "{project.sandbox.problem}"
                                            </p>
                                        </div>
                                    )}

                                    {/* Milestones */}
                                    <div className="mb-4">
                                        <h3 className="text-sm font-semibold text-muted-foreground mb-2 flex items-center gap-2">
                                            <BookOpen size={14} />
                                            Milestones
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.milestones.map((m, j) => (
                                                <div key={j} className="flex items-center gap-1 text-sm px-3 py-1 bg-secondary rounded-full">
                                                    <ChevronRight size={14} className="text-primary" />
                                                    {m}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Concepts */}
                                    <div>
                                        <h3 className="text-sm font-semibold text-muted-foreground mb-2 flex items-center gap-2">
                                            <CheckCircle size={14} />
                                            Concepts Learned
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.concepts.map((c, j) => (
                                                <span key={j} className="mono text-xs px-2 py-1 text-primary border border-primary/30 rounded">
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
            <section className="py-16 px-6 bg-card/30 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
                <p className="text-muted-foreground mb-8">
                    Install Avaia and begin with Project 1: Memory Game
                </p>
                <Link to="/docs">
                    <Button size="lg" className="gap-2 glow-sm">
                        Get Started
                        <ChevronRight size={18} />
                    </Button>
                </Link>
            </section>

            <Footer />
        </div>
    )
}
