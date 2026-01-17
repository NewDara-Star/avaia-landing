import { motion } from 'framer-motion'
import { Brain, Zap, Shield, Activity, Users, ExternalLink, BarChart } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const researchPillars = [
    {
        icon: Brain,
        title: "Situated Cognition",
        researcher: "Lave & Wenger (1991)",
        finding: "Knowledge is inseparable from the context in which it's learned. Learning in realistic contexts produces more transferable knowledge.",
        implication: "Avaia teaches through building real projects. Concepts are introduced when the project demands them, not in isolated lessons.",
        link: "https://en.wikipedia.org/wiki/Situated_cognition"
    },
    {
        icon: Zap,
        title: "Productive Failure",
        researcher: "Manu Kapur (2008-2016)",
        finding: "Students who struggle with problems before receiving instruction outperform those who receive direct instruction first, even if they fail initially.",
        implication: "Sandbox exercises force failure before teaching. Learners attempt the Event Loop problem before learning what the Event Loop is.",
        link: "https://en.wikipedia.org/wiki/Productive_failure"
    },
    {
        icon: Shield,
        title: "Desirable Difficulties",
        researcher: "Robert Bjork (1994)",
        finding: "Conditions that make learning harder in the short term often lead to better long-term retention. Easy learning is forgettable learning.",
        implication: "Avaia never gives away answers. Hints progress from subtle to explicit. Verification requires explanation, not just working code.",
        link: "https://bjorklab.psych.ucla.edu/research/"
    },
    {
        icon: Activity,
        title: "Hypercorrection Effect",
        researcher: "Butterfield & Metcalfe (2001)",
        finding: "High-confidence errors are more likely to be corrected and remembered than low-confidence errors after feedback.",
        implication: "Avaia tracks 'stubborn bugs' — mistakes made with high confidence. These get targeted remediation with contrasting cases.",
        link: "https://psycnet.apa.org/record/2001-18222-006"
    },
    {
        icon: BarChart,
        title: "FSRS Algorithm",
        researcher: "Jarrett Ye (2022)",
        finding: "The FSRS-5 algorithm outperforms SuperMemo SM-2 and Anki defaults by adapting to individual forgetting curves.",
        implication: "Reviews are scheduled optimally based on YOUR performance. Stability and difficulty are personalized per concept.",
        link: "https://github.com/open-spaced-repetition/fsrs4anki"
    },
    {
        icon: Users,
        title: "Affective Computing",
        researcher: "Picard (1997), D'Mello (2012)",
        finding: "Emotional state significantly affects learning. Frustrated learners disengage. Bored learners stop paying attention.",
        implication: "Timing patterns reveal emotional state. Long pauses may mean struggling. Rapid responses may mean disengagement.",
        link: "https://en.wikipedia.org/wiki/Affective_computing"
    }
]

const misconceptionExamples = [
    {
        name: "DOM vs HTML",
        wrong: "The DOM is just the HTML file",
        correct: "HTML is a static text file. The DOM is a live object tree. Change DOM via JS, HTML file unchanged."
    },
    {
        name: "setTimeout is blocking",
        wrong: "Code after setTimeout waits",
        correct: "setTimeout schedules a callback and returns immediately. Code continues."
    },
    {
        name: "map and forEach are interchangeable",
        wrong: "Uses map but ignores return value",
        correct: "map returns a new array. forEach returns undefined. Use forEach for side effects, map for transformations."
    },
    {
        name: "filter mutates the array",
        wrong: "Expects original array to shrink",
        correct: "filter returns a NEW array. The original is unchanged."
    }
]

export default function Science() {
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
                        The <span className="gradient-text">Science</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        Every feature is grounded in decades of cognitive science research.
                        Here's the evidence behind the pedagogy.
                    </motion.p>
                </div>
            </section>

            {/* Research Pillars */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold mb-12 text-center"
                    >
                        Research Foundations
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {researchPillars.map((pillar, i) => (
                            <motion.div
                                key={pillar.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="glass-card p-6 rounded-xl"
                            >
                                <div className="flex items-start gap-4">
                                    <pillar.icon className="text-primary flex-shrink-0" size={28} />
                                    <div>
                                        <h3 className="text-xl font-semibold mb-1">{pillar.title}</h3>
                                        <p className="mono text-xs text-primary mb-3">{pillar.researcher}</p>

                                        <div className="mb-4">
                                            <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Finding</h4>
                                            <p className="text-sm text-muted-foreground">{pillar.finding}</p>
                                        </div>

                                        <div className="mb-4">
                                            <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-1">In Avaia</h4>
                                            <p className="text-sm">{pillar.implication}</p>
                                        </div>

                                        <a
                                            href={pillar.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                                        >
                                            Learn more <ExternalLink size={12} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Anti-Sycophancy */}
            <section className="py-16 px-6 bg-card/30">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-4 text-center">
                            The Anti-Sycophancy <span className="gradient-text">Protocol</span>
                        </h2>
                        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                            Standard LLMs are tuned for "helpfulness," often interpreted as minimizing user effort.
                            In education, this is detrimental. Minimizing effort minimizes learning.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-6 rounded-xl"
                        >
                            <h3 className="text-lg font-semibold mb-4 text-destructive">❌ NEVER</h3>
                            <ul className="space-y-3 text-muted-foreground">
                                <li>• Start with "Great question!" or "You're right!"</li>
                                <li>• Write code for the learner before they demonstrate understanding</li>
                                <li>• Skip verification to "save time"</li>
                                <li>• Let the learner proceed with a flawed mental model</li>
                                <li>• Agree with incorrect assumptions to avoid friction</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-6 rounded-xl"
                        >
                            <h3 className="text-lg font-semibold mb-4 text-green-500">✓ ALWAYS</h3>
                            <ul className="space-y-3 text-muted-foreground">
                                <li>• Ask clarifying questions before answering</li>
                                <li>• Challenge assumptions that seem off</li>
                                <li>• Require explanation before implementation</li>
                                <li>• Point out misconceptions immediately and kindly</li>
                                <li>• Celebrate genuine understanding, not just working code</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Misconception Tracking */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-4">
                            Misconception <span className="gradient-text">Tracking</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Avaia tracks 33 common JavaScript misconceptions. Each has specific trigger answers
                            and targeted remediation strategies.
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {misconceptionExamples.map((m, i) => (
                            <motion.div
                                key={m.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="glass-card p-4 rounded-xl"
                            >
                                <h4 className="font-semibold mb-2">{m.name}</h4>
                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                    <div className="p-3 rounded bg-destructive/10">
                                        <span className="text-destructive text-xs uppercase tracking-wider font-semibold">Wrong</span>
                                        <p className="mt-1">"{m.wrong}"</p>
                                    </div>
                                    <div className="p-3 rounded bg-green-500/10">
                                        <span className="text-green-500 text-xs uppercase tracking-wider font-semibold">Correct</span>
                                        <p className="mt-1">{m.correct}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FSRS Deep Dive */}
            <section className="py-16 px-6 bg-card/30">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-4 text-center">
                            FSRS-5: <span className="gradient-text">State-of-the-Art SRS</span>
                        </h2>
                        <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
                            The Free Spaced Repetition Scheduler adapts to YOUR forgetting curve.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 rounded-xl"
                    >
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="mono text-primary mb-4">Per-Concept Tracking</h3>
                                <ul className="space-y-3 text-sm">
                                    <li>
                                        <strong>stability</strong>
                                        <span className="text-muted-foreground"> — Days until you have 90% chance of forgetting</span>
                                    </li>
                                    <li>
                                        <strong>difficulty</strong>
                                        <span className="text-muted-foreground"> — Personalized difficulty rating (1-10)</span>
                                    </li>
                                    <li>
                                        <strong>scheduled_days</strong>
                                        <span className="text-muted-foreground"> — Days until next review</span>
                                    </li>
                                    <li>
                                        <strong>reps</strong>
                                        <span className="text-muted-foreground"> — Number of times reviewed</span>
                                    </li>
                                    <li>
                                        <strong>lapses</strong>
                                        <span className="text-muted-foreground"> — Number of times forgotten ("Again")</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="mono text-primary mb-4">Review Ratings</h3>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex items-center gap-2">
                                        <span className="w-16 text-destructive">Again</span>
                                        <span className="text-muted-foreground">Completely forgot. Reset stability.</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-16 text-orange-400">Hard</span>
                                        <span className="text-muted-foreground">Remembered with difficulty.</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-16 text-primary">Good</span>
                                        <span className="text-muted-foreground">Correct recall at expected time.</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-16 text-green-500">Easy</span>
                                        <span className="text-muted-foreground">Review was too easy. Extend interval.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
