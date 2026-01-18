import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

// Demo scenarios - Each shows different Avaia features
const demoScenarios = [
    {
        id: 'closures',
        title: 'Closures',
        icon: '🔒',
        messages: [
            { role: 'user' as const, content: "I want to learn about closures in JavaScript" },
            {
                role: 'assistant' as const,
                content: "Before I explain, let me check your understanding.",
                annotation: "Productive Failure: Testing first"
            },
        ],
        quiz: {
            code: `function counter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const increment = counter();
console.log(increment());
console.log(increment());`,
            question: "What will be logged?",
            options: [
                { text: "1, 1", correct: false },
                { text: "1, 2", correct: true },
                { text: "0, 1", correct: false },
                { text: "undefined, undefined", correct: false }
            ],
            explanation: "The inner function **closes over** `count`, keeping it alive between calls. That's a closure!"
        },
        toolCalls: [
            { tool: "check_understanding", args: "closures" },
            { tool: "record_review", args: "stability: 0.4, difficulty: 0.6" }
        ]
    },
    {
        id: 'events',
        title: 'Events',
        icon: '🎯',
        messages: [
            { role: 'user' as const, content: "How does event delegation work?" },
            {
                role: 'assistant' as const,
                content: "Great question! Before I explain, try this sandbox.",
                annotation: "Just-in-time Learning"
            },
        ],
        quiz: {
            code: `document.body.addEventListener('click', (e) => {
  if (e.target.matches('.btn')) {
    console.log('Button clicked!');
  }
});

// Later, dynamically added:
const btn = document.createElement('button');
btn.className = 'btn';
document.body.appendChild(btn);
btn.click();`,
            question: "Will 'Button clicked!' log?",
            options: [
                { text: "Yes", correct: true },
                { text: "No", correct: false },
                { text: "Error", correct: false },
                { text: "undefined", correct: false }
            ],
            explanation: "Event delegation works by listening on a parent — even for elements added **after** the listener!"
        },
        toolCalls: [
            { tool: "get_prerequisites", args: "event_delegation" },
            { tool: "log_misconception", args: "thought events only work on existing elements" }
        ]
    },
    {
        id: 'async',
        title: 'Async',
        icon: '⏳',
        messages: [
            { role: 'user' as const, content: "Why does my async code run out of order?" },
            {
                role: 'assistant' as const,
                content: "Let's diagnose this together.",
                annotation: "Anti-Sycophancy: No immediate answer"
            },
        ],
        quiz: {
            code: `console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');`,
            question: "What order will these log?",
            options: [
                { text: "1, 2, 3, 4", correct: false },
                { text: "1, 4, 3, 2", correct: true },
                { text: "1, 4, 2, 3", correct: false },
                { text: "1, 3, 2, 4", correct: false }
            ],
            explanation: "Microtasks (Promises) run before macrotasks (setTimeout). Event loop 101!"
        },
        toolCalls: [
            { tool: "identify_stubborn_bug", args: "async_ordering" },
            { tool: "schedule_remediation", args: "event_loop concept" }
        ]
    }
]



function TypingIndicator() {
    return (
        <div className="flex items-center gap-1 py-2">
            <motion.span
                className="w-2 h-2 rounded-full bg-primary"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
            />
            <motion.span
                className="w-2 h-2 rounded-full bg-primary"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
            />
            <motion.span
                className="w-2 h-2 rounded-full bg-primary"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
            />
        </div>
    )
}

function ToolCallSimulation({ tool, args, delay }: { tool: string; args: string; delay: number }) {
    const [visible, setVisible] = useState(false)
    const [complete, setComplete] = useState(false)

    useEffect(() => {
        const showTimer = setTimeout(() => setVisible(true), delay)
        const completeTimer = setTimeout(() => setComplete(true), delay + 800)
        return () => {
            clearTimeout(showTimer)
            clearTimeout(completeTimer)
        }
    }, [delay])

    if (!visible) return null

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-xs font-mono py-1"
        >
            <motion.div
                animate={complete ? {} : { rotate: 360 }}
                transition={{ duration: 1, repeat: complete ? 0 : Infinity, ease: "linear" }}
                className="w-3 h-3"
            >
                {complete ? (
                    <span className="text-green-400">✓</span>
                ) : (
                    <span className="text-primary">⟳</span>
                )}
            </motion.div>
            <span className="text-muted-foreground">
                <span className="text-primary">{tool}</span>({args})
            </span>
        </motion.div>
    )
}

function FloatingAnnotation({ text, position }: { text: string; position: 'left' | 'right' }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, x: position === 'left' ? 20 : -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className={`absolute ${position === 'left' ? '-left-2 -translate-x-full' : '-right-2 translate-x-full'} top-1/2 -translate-y-1/2 hidden lg:block`}
        >
            <div className="bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-lg px-3 py-2 text-xs text-primary max-w-[160px]">
                <div className="flex items-center gap-1.5">
                    <span className="text-primary">✦</span>
                    <span>{text}</span>
                </div>
            </div>
        </motion.div>
    )
}

function InteractiveCodeBlock({
    code,
    onLineHover
}: {
    code: string
    onLineHover?: (line: number | null) => void
}) {
    const lines = code.split('\n')
    const [hoveredLine, setHoveredLine] = useState<number | null>(null)
    const [isEditing, setIsEditing] = useState(false)
    const [editedCode, setEditedCode] = useState(code)

    return (
        <div className="relative group my-2 rounded-lg bg-secondary overflow-hidden">
            <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="px-2 py-1 text-xs rounded bg-primary/20 hover:bg-primary/40 text-primary transition-colors"
                >
                    {isEditing ? 'View' : 'Edit'}
                </button>
                <button
                    className="px-2 py-1 text-xs rounded bg-green-500/20 hover:bg-green-500/40 text-green-400 transition-colors"
                    onClick={() => alert('Output: 1\\n2')}
                >
                    ▶ Run
                </button>
            </div>

            {isEditing ? (
                <textarea
                    value={editedCode}
                    onChange={(e) => setEditedCode(e.target.value)}
                    className="w-full h-full p-3 bg-transparent text-xs font-mono text-muted-foreground resize-none focus:outline-none"
                    rows={lines.length + 1}
                />
            ) : (
                <pre className="p-3 text-xs overflow-x-auto">
                    {lines.map((line, i) => (
                        <div
                            key={i}
                            onMouseEnter={() => {
                                setHoveredLine(i)
                                onLineHover?.(i)
                            }}
                            onMouseLeave={() => {
                                setHoveredLine(null)
                                onLineHover?.(null)
                            }}
                            className={`font-mono transition-colors ${hoveredLine === i ? 'bg-primary/10 -mx-3 px-3' : ''
                                }`}
                        >
                            <span className="text-muted-foreground/50 select-none mr-3 w-4 inline-block text-right">
                                {i + 1}
                            </span>
                            <code className="text-muted-foreground">{line}</code>
                        </div>
                    ))}
                </pre>
            )}
        </div>
    )
}

function QuizOptions({
    options,
    onAnswer,
    disabled
}: {
    options: { text: string; correct: boolean }[]
    onAnswer: (correct: boolean) => void
    disabled: boolean
}) {
    const [selected, setSelected] = useState<number | null>(null)
    const [showResult, setShowResult] = useState(false)

    const handleSelect = (index: number, correct: boolean) => {
        if (disabled || showResult) return
        setSelected(index)
        setShowResult(true)
        onAnswer(correct)
    }

    return (
        <div className="grid grid-cols-2 gap-2 my-3">
            {options.map((option, i) => (
                <motion.button
                    key={i}
                    whileHover={!disabled && !showResult ? { scale: 1.02 } : {}}
                    whileTap={!disabled && !showResult ? { scale: 0.98 } : {}}
                    onClick={() => handleSelect(i, option.correct)}
                    disabled={disabled || showResult}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${showResult
                        ? option.correct
                            ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                            : selected === i
                                ? 'bg-red-500/20 text-red-400 border border-red-500/50'
                                : 'bg-secondary/50 text-muted-foreground'
                        : 'bg-secondary hover:bg-accent text-foreground border border-transparent hover:border-primary/30'
                        }`}
                >
                    {option.text}
                    {showResult && option.correct && <span className="ml-2">✓</span>}
                    {showResult && selected === i && !option.correct && <span className="ml-2">✗</span>}
                </motion.button>
            ))}
        </div>
    )
}

function Message({
    role,
    content,
    isTyping = false,
    annotation
}: {
    role: 'user' | 'assistant'
    content: string
    isTyping?: boolean
    annotation?: string
}) {
    const isUser = role === 'user'

    const renderContent = (text: string) => {
        const parts = text.split(/(\*\*[\s\S]*?\*\*|\*[\s\S]*?\*)/g)
        return parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i} className="font-semibold text-primary">{part.slice(2, -2)}</strong>
            }
            if (part.startsWith('*') && part.endsWith('*')) {
                return <em key={i} className="text-muted-foreground italic">{part.slice(1, -1)}</em>
            }
            return <span key={i}>{part}</span>
        })
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`relative flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}
        >
            {annotation && !isUser && (
                <FloatingAnnotation text={annotation} position="left" />
            )}

            {!isUser && (
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center text-primary-foreground text-xs font-bold mr-2 flex-shrink-0">
                    A
                </div>
            )}
            <div
                className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-3 sm:px-4 py-2 text-sm leading-relaxed ${isUser
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-transparent'
                    }`}
            >
                {isTyping ? <TypingIndicator /> : renderContent(content)}
            </div>
        </motion.div>
    )
}

export function ProductDemo() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [activeScenario, setActiveScenario] = useState(0)
    const [phase, setPhase] = useState<'intro' | 'quiz' | 'result'>('intro')
    const [showToolCalls, setShowToolCalls] = useState(false)
    const [userInput, setUserInput] = useState('')
    const [isTypingResponse, setIsTypingResponse] = useState(false)
    const [userAnsweredCorrect, setUserAnsweredCorrect] = useState<boolean | null>(null)

    // 3D tilt effect
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const rotateX = useSpring(useTransform(mouseY, [-200, 200], [5, -5]), { stiffness: 100, damping: 20 })
    const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-5, 5]), { stiffness: 100, damping: 20 })

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        mouseX.set(e.clientX - centerX)
        mouseY.set(e.clientY - centerY)
    }

    const handleMouseLeave = () => {
        mouseX.set(0)
        mouseY.set(0)
    }

    const scenario = demoScenarios[activeScenario]

    // Auto-advance phases
    useEffect(() => {
        if (phase === 'intro') {
            const timer = setTimeout(() => setPhase('quiz'), 2000)
            return () => clearTimeout(timer)
        }
    }, [phase, activeScenario])

    // Handle user typing simulation
    const handleSendMessage = () => {
        if (!userInput.trim()) return
        setIsTypingResponse(true)
        setUserInput('')

        setTimeout(() => {
            setIsTypingResponse(false)
            setPhase('quiz')
        }, 1500)
    }

    const handleQuizAnswer = (correct: boolean) => {
        setUserAnsweredCorrect(correct)
        setShowToolCalls(true)
        setTimeout(() => setPhase('result'), 500)
    }

    const handleScenarioChange = (index: number) => {
        setActiveScenario(index)
        setPhase('intro')
        setShowToolCalls(false)
        setUserAnsweredCorrect(null)
    }

    return (
        <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformPerspective: 1000 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
            className="window-chrome w-full max-w-4xl mx-auto"
        >
            {/* Window Header */}
            <div className="window-chrome-header">
                <div className="flex gap-2">
                    <div className="window-dot window-dot-red" />
                    <div className="window-dot window-dot-yellow" />
                    <div className="window-dot window-dot-green" />
                </div>
                <div className="flex-1 text-center">
                    <span className="text-sm font-medium text-foreground">Avaia</span>
                    <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">Interactive Demo</span>
                </div>
                <div className="w-14" />
            </div>

            {/* Scenario Tabs */}
            <div className="flex border-b border-border bg-card/50">
                {demoScenarios.map((s, i) => (
                    <button
                        key={s.id}
                        onClick={() => handleScenarioChange(i)}
                        className={`flex-1 px-4 py-2 text-sm font-medium transition-all ${activeScenario === i
                            ? 'text-primary border-b-2 border-primary bg-primary/5'
                            : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                            }`}
                    >
                        <span className="mr-1.5">{s.icon}</span>
                        {s.title}
                    </button>
                ))}
            </div>

            {/* App Layout */}
            <div className="flex h-[350px] sm:h-[420px] md:h-[480px] bg-background">
                {/* Sidebar - MCP Tool Calls */}
                <div className="hidden md:flex w-48 lg:w-56 border-r border-border bg-card/50 flex-col">
                    <div className="p-3 border-b border-border">
                        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            MCP Tool Calls
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-3">
                        <AnimatePresence>
                            {showToolCalls && scenario.toolCalls.map((tc, i) => (
                                <ToolCallSimulation
                                    key={`${scenario.id}-${tc.tool}`}
                                    tool={tc.tool}
                                    args={tc.args}
                                    delay={i * 400}
                                />
                            ))}
                        </AnimatePresence>

                        {!showToolCalls && (
                            <div className="text-xs text-muted-foreground italic">
                                Answer the quiz to see tool calls...
                            </div>
                        )}
                    </div>

                    <div className="p-3 border-t border-border">
                        <div className="flex items-center gap-2 text-xs">
                            <motion.div
                                className="w-2 h-2 rounded-full bg-green-500"
                                animate={{ opacity: [1, 0.5, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            <span className="text-muted-foreground">MCP Connected</span>
                        </div>
                    </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 flex flex-col min-w-0">
                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-3 sm:p-4">
                        <AnimatePresence mode="wait">
                            {/* Initial messages */}
                            {scenario.messages.map((msg, i) => (
                                <Message
                                    key={`${scenario.id}-${i}`}
                                    role={msg.role}
                                    content={msg.content}
                                    annotation={msg.annotation}
                                />
                            ))}

                            {/* Quiz Phase */}
                            {phase === 'quiz' && (
                                <motion.div
                                    key="quiz"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="ml-8"
                                >
                                    <InteractiveCodeBlock code={scenario.quiz.code} />
                                    <p className="text-sm font-medium text-primary my-2">
                                        {scenario.quiz.question}
                                    </p>
                                    <QuizOptions
                                        options={scenario.quiz.options}
                                        onAnswer={handleQuizAnswer}
                                        disabled={false}
                                    />
                                </motion.div>
                            )}

                            {/* Result Phase */}
                            {phase === 'result' && (
                                <motion.div
                                    key="result"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="ml-8"
                                >
                                    <div className={`p-3 rounded-lg mb-3 ${userAnsweredCorrect
                                        ? 'bg-green-500/10 border border-green-500/30'
                                        : 'bg-amber-500/10 border border-amber-500/30'
                                        }`}>
                                        <p className="text-sm">
                                            {userAnsweredCorrect
                                                ? '✓ Correct! '
                                                : '✗ Not quite. '}
                                            {scenario.quiz.explanation.split('**').map((part, i) =>
                                                i % 2 === 1
                                                    ? <strong key={i} className="text-primary">{part}</strong>
                                                    : <span key={i}>{part}</span>
                                            )}
                                        </p>
                                    </div>
                                    <p className="text-xs text-muted-foreground italic">
                                        *Logged to your spaced repetition queue...*
                                    </p>
                                </motion.div>
                            )}

                            {/* Typing indicator */}
                            {isTypingResponse && (
                                <Message role="assistant" content="" isTyping />
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Input */}
                    <div className="p-3 sm:p-4 border-t border-border">
                        <div className="flex items-center gap-2 bg-secondary rounded-2xl px-3 sm:px-4 py-2 sm:py-3">
                            <input
                                type="text"
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                                placeholder="Try typing a response..."
                                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground min-w-0"
                            />
                            <button
                                onClick={handleSendMessage}
                                className="p-1.5 sm:p-2 rounded-full bg-primary text-primary-foreground flex-shrink-0 hover:opacity-90 transition-opacity"
                            >
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                                </svg>
                            </button>
                        </div>
                        <p className="text-xs text-muted-foreground text-center mt-2 hidden sm:block">
                            Click answers above or type to interact • 3D tilt: move your mouse
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
