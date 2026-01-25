import React, { createContext, useContext, useState, useEffect } from 'react'

const THEME_KEY = 'portfolio-theme'

const ThemeContext = createContext({ theme: 'light', setTheme: () => {} })

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    try {
      const stored = localStorage.getItem(THEME_KEY) || 'light'
      return stored === 'dark' || stored === 'light' ? stored : 'light'
    } catch {
      return 'light'
    }
  })

  const setTheme = (next) => {
    setThemeState((prev) => {
      const value = typeof next === 'function' ? next(prev) : next
      const valid = value === 'dark' || value === 'light' ? value : prev
      try {
        localStorage.setItem(THEME_KEY, valid)
      } catch {}
      return valid
    })
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
