import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

// Demo conversation showing Avaia's teaching methodology
const demoMessages = [
    {
        role: 'user' as const,
        content: "I want to learn about closures in JavaScript",
        delay: 0
    },
    {
        role: 'assistant' as const,
        content: "Before I explain, let me check your current understanding. Here's a code prediction:\n\n```javascript\nfunction counter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}\nconst increment = counter();\nconsole.log(increment());\nconsole.log(increment());\n```\n\n**What will be logged?**",
        delay: 1500
    },
    {
        role: 'user' as const,
        content: "I think it logs 1, then 1 again?",
        delay: 4000
    },
    {
        role: 'assistant' as const,
        content: "Interesting! That's a common misconception. The output is actually **1, then 2**.\n\nThis reveals something important: the inner function \"closes over\" the `count` variable, keeping it alive between calls. That's exactly what a closure is.\n\n*Logging this for your spaced repetition queue...*",
        delay: 5500
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

function Message({ role, content, isTyping = false }: {
    role: 'user' | 'assistant'
    content: string
    isTyping?: boolean
}) {
    const isUser = role === 'user'

    // Simple markdown-like rendering for code blocks
    const renderContent = (text: string) => {
        const parts = text.split(/(```[\s\S]*?```|\*\*[\s\S]*?\*\*|\*[\s\S]*?\*)/g)

        return parts.map((part, i) => {
            if (part.startsWith('```') && part.endsWith('```')) {
                const code = part.slice(3, -3).replace(/^javascript\n?/, '')
                return (
                    <pre key={i} className="my-2 p-3 rounded-lg bg-secondary text-xs overflow-x-auto">
                        <code className="text-muted-foreground font-mono">{code}</code>
                    </pre>
                )
            }
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
            className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}
        >
            {!isUser && (
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-gradient-to-br from-primary to-amber-600 flex items-center justify-center text-primary-foreground text-xs font-bold mr-2 flex-shrink-0">
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
    const [visibleMessages, setVisibleMessages] = useState<number>(0)
    const [isTyping, setIsTyping] = useState(false)
    const [hasStarted, setHasStarted] = useState(false)

    useEffect(() => {
        // Start animation when component comes into view
        const timer = setTimeout(() => setHasStarted(true), 500)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        if (!hasStarted) return
        if (visibleMessages >= demoMessages.length) return

        const nextMessage = demoMessages[visibleMessages]
        const isAssistant = nextMessage.role === 'assistant'

        if (isAssistant) {
            // Show typing indicator first
            setIsTyping(true)
            const typingTimer = setTimeout(() => {
                setIsTyping(false)
                setVisibleMessages(prev => prev + 1)
            }, 1500)
            return () => clearTimeout(typingTimer)
        } else {
            const messageTimer = setTimeout(() => {
                setVisibleMessages(prev => prev + 1)
            }, nextMessage.delay)
            return () => clearTimeout(messageTimer)
        }
    }, [visibleMessages, hasStarted])

    return (
        <motion.div
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
                    <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">Tutor</span>
                </div>
                <div className="w-14" /> {/* Spacer for centering */}
            </div>

            {/* App Layout - responsive height and sidebar hidden on mobile */}
            <div className="flex h-[350px] sm:h-[420px] md:h-[480px] bg-background">
                {/* Sidebar - hidden on mobile */}
                <div className="hidden md:flex w-48 lg:w-56 border-r border-border bg-card/50 flex-col">
                    <div className="p-3">
                        <button className="w-full flex items-center gap-2 px-3 py-2 rounded-xl bg-secondary hover:bg-accent text-sm font-medium transition-colors">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 5v14M5 12h14" />
                            </svg>
                            New chat
                        </button>
                    </div>

                    <div className="flex-1 overflow-hidden px-2">
                        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-3 py-2">
                            Today
                        </div>
                        <div className="px-3 py-2 rounded-lg bg-accent text-sm truncate">
                            Learning about closures
                        </div>
                        <div className="px-3 py-2 text-sm text-muted-foreground truncate hover:bg-accent/50 rounded-lg cursor-pointer transition-colors">
                            Event delegation basics
                        </div>
                        <div className="px-3 py-2 text-sm text-muted-foreground truncate hover:bg-accent/50 rounded-lg cursor-pointer transition-colors">
                            Memory game project
                        </div>
                    </div>

                    <div className="p-3 border-t border-border">
                        <div className="flex items-center gap-2 text-xs">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <span className="text-muted-foreground">Connected</span>
                        </div>
                    </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 flex flex-col min-w-0">
                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-3 sm:p-4">
                        <AnimatePresence>
                            {demoMessages.slice(0, visibleMessages).map((msg, i) => (
                                <Message key={i} role={msg.role} content={msg.content} />
                            ))}
                            {isTyping && (
                                <Message role="assistant" content="" isTyping />
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Input */}
                    <div className="p-3 sm:p-4 border-t border-border">
                        <div className="flex items-center gap-2 bg-secondary rounded-2xl px-3 sm:px-4 py-2 sm:py-3">
                            <input
                                type="text"
                                placeholder="Message Avaia..."
                                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground min-w-0"
                                disabled
                            />
                            <button className="p-1.5 sm:p-2 rounded-full hover:bg-accent transition-colors flex-shrink-0" disabled>
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                </svg>
                            </button>
                            <button className="p-1.5 sm:p-2 rounded-full bg-primary text-primary-foreground flex-shrink-0" disabled>
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                                </svg>
                            </button>
                        </div>
                        <p className="text-xs text-muted-foreground text-center mt-2 hidden sm:block">
                            Avaia uses spaced repetition to ensure lasting knowledge
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
