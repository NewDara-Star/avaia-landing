import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light' | 'system'

interface ThemeContextValue {
    theme: Theme
    setTheme: (theme: Theme) => void
    resolvedTheme: 'dark' | 'light'
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

const STORAGE_KEY = 'avaia-theme'

function getSystemTheme(): 'dark' | 'light' {
    if (typeof window === 'undefined') return 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setThemeState] = useState<Theme>(() => {
        if (typeof window === 'undefined') return 'system'
        const stored = localStorage.getItem(STORAGE_KEY) as Theme | null
        return stored || 'system'
    })

    const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light'>(() => {
        if (typeof window === 'undefined') return 'dark'
        const stored = localStorage.getItem(STORAGE_KEY) as Theme | null
        if (stored && stored !== 'system') return stored
        return getSystemTheme()
    })

    useEffect(() => {
        const root = document.documentElement

        const applyTheme = (newTheme: 'dark' | 'light') => {
            root.classList.remove('dark', 'light')
            root.classList.add(newTheme)
            setResolvedTheme(newTheme)
        }

        if (theme === 'system') {
            const systemTheme = getSystemTheme()
            applyTheme(systemTheme)

            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
            const handler = (e: MediaQueryListEvent) => {
                applyTheme(e.matches ? 'dark' : 'light')
            }
            mediaQuery.addEventListener('change', handler)
            return () => mediaQuery.removeEventListener('change', handler)
        } else {
            applyTheme(theme)
        }
    }, [theme])

    const setTheme = (newTheme: Theme) => {
        localStorage.setItem(STORAGE_KEY, newTheme)
        setThemeState(newTheme)
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}
