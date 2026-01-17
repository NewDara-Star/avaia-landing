import { Link, useLocation } from 'react-router-dom'
import { Github, Sparkles } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { Button } from './ui/button'

const navItems = [
    { path: '/curriculum', label: 'Curriculum' },
    { path: '/science', label: 'Science' },
    { path: '/docs', label: 'Docs' }
]

export function Header() {
    const location = useLocation()

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-amber-600 flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-xl font-bold gradient-text">Avaia</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`transition-colors ${location.pathname === item.path
                                    ? 'text-primary font-medium'
                                    : 'text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <a
                        href="https://github.com/NewDara-Star/avaia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex"
                    >
                        <Button variant="outline" size="sm" className="gap-2">
                            <Github className="w-4 h-4" />
                            GitHub
                        </Button>
                    </a>
                </div>
            </div>
        </header>
    )
}
