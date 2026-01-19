import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, CheckCircle, Code, Zap, BookOpen, ChevronRight, Palette, Sparkles, Plus, FileJson, Terminal, GitBranch } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'

// JavaScript Web Development Track (Featured)
const jsWebTrack = {
    id: 'js-web',
    name: 'JavaScript Web Development',
    description: 'Learn to build interactive web applications from scratch. Progress from DOM manipulation to full-stack development through 7 real-world projects.',
    language: 'javascript',
    domain: 'web',
    difficulty: 'beginner',
    duration: '22-32 weeks',
    conceptCount: 35,
    sandboxCount: 6,
    projects: [
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
}

// Art History Track (Example non-programming track)
const artHistoryTrack = {
    id: 'art-history',
    name: 'Art History Foundations',
    description: 'Learn to analyze, interpret, and appreciate art through hands-on projects. From visual analysis to cultural context, develop the skills to engage deeply with any artwork.',
    language: 'N/A',
    domain: 'humanities',
    difficulty: 'beginner',
    duration: '8-12 weeks',
    conceptCount: 10,
    sandboxCount: 0,
    projects: [
        {
            number: 1,
            title: "Personal Museum Guide",
            duration: "2 weeks",
            description: "Create a curated guide to 5 artworks that moved you. Learn to describe what you see and articulate why art affects you.",
            concepts: ["Visual Analysis", "Formal Elements", "Line & Shape", "Color Theory", "Composition"],
            milestones: ["Select Works", "Describe What You See", "Identify Elements", "Personal Response", "Compile Guide"]
        },
        {
            number: 2,
            title: "Art Detective",
            duration: "3 weeks",
            description: "Given an unknown artwork, research and identify its origins using visual clues and historical context.",
            concepts: ["Style Identification", "Iconography", "Historical Context", "Patronage"],
            milestones: ["Visual Inventory", "Style Clues", "Iconographic Analysis", "Historical Research", "Attribution Report"]
        },
        {
            number: 3,
            title: "Comparative Analysis Essay",
            duration: "3-4 weeks",
            description: "Write a scholarly comparison of two artworks. Master the art of drawing meaningful connections.",
            concepts: ["Comparative Analysis", "Thesis Development", "Art Writing"],
            milestones: ["Select Pair", "Individual Analysis", "Identify Connections", "Develop Thesis", "Write Essay"]
        }
    ]
}

type Track = typeof jsWebTrack

export default function Curriculum() {
    const [activeTrack, setActiveTrack] = useState<'js-web' | 'art-history' | 'create'>('js-web')

    const tracks = [
        { id: 'js-web' as const, track: jsWebTrack, icon: Code, color: 'text-yellow-500' },
        { id: 'art-history' as const, track: artHistoryTrack, icon: Palette, color: 'text-pink-500' },
    ]

    const currentTrack = activeTrack === 'js-web' ? jsWebTrack : activeTrack === 'art-history' ? artHistoryTrack : null

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
                        Learning <span className="gradient-text">Tracks</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        Pre-built curricula or create your own. Each track includes projects, concepts, misconception mapping, and spaced repetition.
                    </motion.p>
                </div>
            </section>

            {/* Track Selector */}
            <section className="py-8 px-6 border-b border-border/50 bg-card/30">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-4">
                        {tracks.map(({ id, track, icon: Icon, color }) => (
                            <button
                                key={id}
                                onClick={() => setActiveTrack(id)}
                                className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all ${
                                    activeTrack === id
                                        ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                                        : 'bg-card hover:bg-card/80 border border-border'
                                }`}
                            >
                                <Icon size={24} className={activeTrack === id ? '' : color} />
                                <div className="text-left">
                                    <div className="font-semibold">{track.name}</div>
                                    <div className={`text-xs ${activeTrack === id ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                                        {track.projects.length} projects • {track.duration}
                                    </div>
                                </div>
                            </button>
                        ))}
                        <button
                            onClick={() => setActiveTrack('create')}
                            className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all ${
                                activeTrack === 'create'
                                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                                    : 'bg-card hover:bg-card/80 border border-border border-dashed'
                            }`}
                        >
                            <Plus size={24} className={activeTrack === 'create' ? '' : 'text-green-500'} />
                            <div className="text-left">
                                <div className="font-semibold">Create Your Own</div>
                                <div className={`text-xs ${activeTrack === 'create' ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                                    Any subject • Research-backed
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            <AnimatePresence mode="wait">
                {activeTrack === 'create' ? (
                    <CreateTrackSection key="create" />
                ) : currentTrack && (
                    <TrackContent key={activeTrack} track={currentTrack} />
                )}
            </AnimatePresence>

            {/* CTA */}
            <section className="py-16 px-6 bg-card/30 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
                <p className="text-muted-foreground mb-8">
                    {activeTrack === 'create'
                        ? 'Install Avaia and create your first custom track'
                        : `Install Avaia and begin with ${currentTrack?.name || 'your learning journey'}`
                    }
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

function TrackContent({ track }: { track: Track }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            {/* Track Stats */}
            <section className="py-8 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-8 text-sm">
                        <div className="flex items-center gap-2">
                            <Calendar className="text-primary" size={18} />
                            <span className="text-muted-foreground">{track.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Code className="text-primary" size={18} />
                            <span className="text-muted-foreground">{track.conceptCount}+ concepts</span>
                        </div>
                        {track.sandboxCount > 0 && (
                            <div className="flex items-center gap-2">
                                <Zap className="text-primary" size={18} />
                                <span className="text-muted-foreground">{track.sandboxCount} sandbox exercises</span>
                            </div>
                        )}
                        {track.language && (
                            <div className="flex items-center gap-2">
                                <Terminal className="text-primary" size={18} />
                                <span className="text-muted-foreground">{track.language}</span>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section className="py-8 px-6">
                <div className="max-w-5xl mx-auto space-y-12">
                    {track.projects.map((project, i) => (
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
                                    {'sandbox' in project && project.sandbox && (
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
        </motion.div>
    )
}

function CreateTrackSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <Sparkles className="mx-auto text-primary mb-4" size={48} />
                        <h2 className="text-3xl font-bold mb-4">Create Any Learning Track</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Turn your research into a structured curriculum. Define concepts, map prerequisites,
                            write diagnostic questions, and let Avaia handle the spaced repetition.
                        </p>
                    </div>

                    {/* Process Steps */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <div className="glass-card p-6 rounded-xl text-center">
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                                <BookOpen className="text-primary" size={24} />
                            </div>
                            <h3 className="font-semibold mb-2">1. Research</h3>
                            <p className="text-sm text-muted-foreground">
                                Study your subject. Identify core concepts, common misconceptions, and project ideas.
                            </p>
                        </div>
                        <div className="glass-card p-6 rounded-xl text-center">
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                                <FileJson className="text-primary" size={24} />
                            </div>
                            <h3 className="font-semibold mb-2">2. Structure</h3>
                            <p className="text-sm text-muted-foreground">
                                Create a JSON file with concepts, prerequisites, projects, and diagnostic questions.
                            </p>
                        </div>
                        <div className="glass-card p-6 rounded-xl text-center">
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                                <GitBranch className="text-primary" size={24} />
                            </div>
                            <h3 className="font-semibold mb-2">3. Share</h3>
                            <p className="text-sm text-muted-foreground">
                                Generate SQL, publish to npm, and your friends get updates automatically.
                            </p>
                        </div>
                    </div>

                    {/* Example JSON */}
                    <div className="glass-card rounded-xl overflow-hidden">
                        <div className="bg-card/50 px-4 py-2 border-b border-border flex items-center gap-2">
                            <FileJson size={16} className="text-primary" />
                            <span className="mono text-sm">tracks/problem-solving.json</span>
                        </div>
                        <pre className="p-4 text-sm overflow-x-auto">
                            <code className="text-muted-foreground">{`{
  "track": {
    "id": "problem-solving",
    "name": "Problem Solving Fundamentals",
    "description": "Learn systematic approaches to break down and solve complex problems.",
    "language": null,
    "domain": "thinking",
    "difficulty": "beginner"
  },
  "concepts": [
    {
      "id": "problem-decomposition",
      "name": "Problem Decomposition",
      "category": "Strategies",
      "prerequisites": []
    },
    {
      "id": "pattern-recognition",
      "name": "Pattern Recognition",
      "category": "Strategies",
      "prerequisites": ["problem-decomposition"]
    }
  ],
  "projects": [
    {
      "id": "puzzle-solver",
      "name": "Puzzle Solver Journal",
      "milestones": [
        {"id": 1, "name": "Select Puzzles"},
        {"id": 2, "name": "Decomposition Practice"},
        {"id": 3, "name": "Pattern Hunting"}
      ],
      "milestone_concepts": [
        {"milestone": 2, "concept_id": "problem-decomposition", "relationship": "introduces"}
      ]
    }
  ],
  "misconceptions": [...],
  "diagnostic_questions": [...]
}`}</code>
                        </pre>
                    </div>

                    {/* What You Get */}
                    <div className="mt-12">
                        <h3 className="text-xl font-bold mb-6 text-center">What Your Track Includes</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50">
                                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                                <div>
                                    <div className="font-medium">Prerequisite Mapping</div>
                                    <div className="text-sm text-muted-foreground">Avaia ensures concepts are learned in the right order</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50">
                                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                                <div>
                                    <div className="font-medium">Spaced Repetition</div>
                                    <div className="text-sm text-muted-foreground">FSRS-5 algorithm schedules reviews automatically</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50">
                                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                                <div>
                                    <div className="font-medium">Misconception Detection</div>
                                    <div className="text-sm text-muted-foreground">Wrong answers trigger targeted remediation</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50">
                                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                                <div>
                                    <div className="font-medium">Milestone Tracking</div>
                                    <div className="text-sm text-muted-foreground">Progress through projects with clear checkpoints</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CLI Command */}
                    <div className="mt-12 p-6 glass-card rounded-xl">
                        <h3 className="font-semibold mb-4 flex items-center gap-2">
                            <Terminal size={18} className="text-primary" />
                            Generate & Install
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <span className="mono text-xs px-2 py-0.5 bg-secondary rounded">1</span>
                                <code className="mono text-sm bg-card/50 px-3 py-1.5 rounded flex-1">
                                    npx tsx scripts/generate-track-sql.ts tracks/your-track.json
                                </code>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="mono text-xs px-2 py-0.5 bg-secondary rounded">2</span>
                                <code className="mono text-sm bg-card/50 px-3 py-1.5 rounded flex-1">
                                    npm publish  <span className="text-muted-foreground"># Share with others</span>
                                </code>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="mono text-xs px-2 py-0.5 bg-secondary rounded">3</span>
                                <span className="text-sm text-muted-foreground">
                                    Friends get your track automatically when they open Avaia
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <Link to="/docs#creating-tracks">
                            <Button variant="outline" className="gap-2">
                                Read the Full Guide
                                <ChevronRight size={16} />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}
