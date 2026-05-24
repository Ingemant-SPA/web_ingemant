import { NavLink } from 'react-router-dom'
import { navItems } from '../../data/site-content'
import ThemeSwitch from '../ui/ThemeSwitch'

function Navbar() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink to="/" className="brand" aria-label="Inicio Ingemant">
          <span className="brand-mark">M</span>
          <span className="brand-name">INGEMANT</span>
        </NavLink>

        <nav className="nav" aria-label="Navegacion principal">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link--active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <ThemeSwitch />
      </div>
    </header>
  )
}

export default Navbar
