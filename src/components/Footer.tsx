import { Link } from 'react-router-dom'

export function Footer() {
    return (
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
    )
}
