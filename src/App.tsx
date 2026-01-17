import { motion } from 'framer-motion'
import { Brain, GitBranch, Zap, Shield, RefreshCw, Heart, Github, Terminal, ChevronRight } from 'lucide-react'
import './index.css'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  })
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
  { value: "42", label: "MCP Tools" },
  { value: "35", label: "Concepts" },
  { value: "6", label: "Sandbox Exercises" },
  { value: "33", label: "Misconceptions Tracked" }
]

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Ambient gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-accent)] opacity-5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-600 opacity-5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.p
              custom={0}
              variants={fadeIn}
              className="mono text-[var(--color-accent)] text-sm tracking-widest uppercase"
            >
              Open Source • MCP Server for Claude
            </motion.p>

            <motion.h1
              custom={1}
              variants={fadeIn}
              className="text-6xl md:text-8xl font-bold tracking-tight"
            >
              <span className="text-[var(--color-accent)]">Avaia</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeIn}
              className="text-2xl md:text-3xl text-[var(--color-text-muted)] max-w-2xl mx-auto"
            >
              The AI that teaches programming <em>properly</em>.
              <br />
              No hand-holding. No shortcuts. Just lasting knowledge.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeIn}
              className="flex flex-wrap justify-center gap-4 pt-4"
            >
              <a
                href="https://github.com/NewDara-Star/avaia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-[var(--color-bg)] font-semibold rounded-lg hover:brightness-110 transition glow"
              >
                <Github size={20} />
                View on GitHub
              </a>
              <a
                href="#philosophy"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-border)] rounded-lg hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition"
              >
                Learn the Philosophy
                <ChevronRight size={18} />
              </a>
            </motion.div>

            <motion.div
              custom={4}
              variants={fadeIn}
              className="pt-8"
            >
              <div className="gradient-border inline-block p-6 text-left">
                <code className="mono text-sm text-[var(--color-text-muted)] block">
                  <span className="text-[var(--color-accent)]">$</span> npm install -g @newdara/avaia
                  <br />
                  <span className="text-[var(--color-accent)]">$</span> avaia init && avaia seed
                </code>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-[var(--color-border)] rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-[var(--color-accent)] rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-[var(--color-border)] py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-[var(--color-accent)] mono">{stat.value}</div>
              <div className="text-[var(--color-text-muted)] text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built on <span className="text-[var(--color-accent)]">Science</span>, Not Vibes
            </h2>
            <p className="text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto">
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
                className="gradient-border p-6 hover:scale-[1.02] transition-transform"
              >
                <p.icon className="text-[var(--color-accent)] mb-4" size={28} />
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-[var(--color-text-muted)] mb-4">{p.desc}</p>
                <p className="mono text-xs text-[var(--color-accent)] opacity-70">{p.research}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-[var(--color-bg-elevated)]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How It <span className="text-[var(--color-accent)]">Actually Works</span>
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
                <div className="mono text-4xl font-bold text-[var(--color-accent)] opacity-40 w-16 flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-[var(--color-text-muted)]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Under the <span className="text-[var(--color-accent)]">Hood</span>
            </h2>
            <p className="text-xl text-[var(--color-text-muted)]">
              An MCP server that gives Claude pedagogical superpowers
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-border p-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="mono text-[var(--color-accent)] mb-4 flex items-center gap-2">
                  <Terminal size={18} />
                  Architecture
                </h3>
                <ul className="space-y-2 text-[var(--color-text-muted)]">
                  <li>• <span className="text-[var(--color-text)]">MCP Server</span> — 42 pedagogical tools</li>
                  <li>• <span className="text-[var(--color-text)]">SQLite</span> — Local learner state at ~/.avaia</li>
                  <li>• <span className="text-[var(--color-text)]">FSRS-5</span> — State-of-the-art spaced repetition</li>
                  <li>• <span className="text-[var(--color-text)]">TypeScript</span> — Strict types, Zod validation</li>
                </ul>
              </div>
              <div>
                <h3 className="mono text-[var(--color-accent)] mb-4 flex items-center gap-2">
                  <Brain size={18} />
                  Data Tracked
                </h3>
                <ul className="space-y-2 text-[var(--color-text-muted)]">
                  <li>• <span className="text-[var(--color-text)]">stability</span> — Days until 90% forgotten</li>
                  <li>• <span className="text-[var(--color-text)]">difficulty</span> — Personalized per concept</li>
                  <li>• <span className="text-[var(--color-text)]">independence_score</span> — Hint level to give</li>
                  <li>• <span className="text-[var(--color-text)]">stubborn_bugs</span> — High-confidence errors</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[var(--color-bg-elevated)]">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Learn JavaScript <em>Properly</em>?</h2>
            <p className="text-[var(--color-text-muted)] mb-8">
              Open source. Free forever. Because education shouldn't be paywalled.
            </p>

            <div className="gradient-border p-8 text-left mb-8">
              <code className="mono text-sm block space-y-1">
                <div><span className="text-[var(--color-text-muted)]"># Install globally</span></div>
                <div><span className="text-[var(--color-accent)]">$</span> npm install -g @newdara/avaia</div>
                <div className="pt-2"><span className="text-[var(--color-text-muted)]"># Initialize and seed curriculum</span></div>
                <div><span className="text-[var(--color-accent)]">$</span> avaia init</div>
                <div><span className="text-[var(--color-accent)]">$</span> avaia seed</div>
                <div className="pt-2"><span className="text-[var(--color-text-muted)]"># Configure Claude Code MCP, then start</span></div>
                <div><span className="text-[var(--color-accent)]">$</span> avaia</div>
              </code>
            </div>

            <a
              href="https://github.com/NewDara-Star/avaia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-semibold rounded-lg hover:brightness-110 transition text-lg glow"
            >
              <Github size={22} />
              Get Started on GitHub
            </a>
          </motion.div>
        </div>
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
