import { useTheme } from '../../context/useTheme'

function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme()
  const next = theme === 'dark' ? 'claro' : 'oscuro'

  return (
    <button className="theme-switch" type="button" onClick={toggleTheme}>
      <span className="theme-switch__dot" aria-hidden="true" />
      <span>Cambiar a modo {next}</span>
    </button>
  )
}

export default ThemeSwitch
