import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/guida', label: 'Guida VFI' },
  { to: '/allenamenti', label: 'Allenamenti' },
  { to: '/programma', label: 'Programma' },
  { to: '/progressi', label: 'Progressi' },
  { to: '/consigli', label: 'Consigli' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand" onClick={() => setOpen(false)}>
          <img
            src="/images/crest-prep-vfi.png?v=2"
            alt=""
            className="navbar__crest"
            aria-hidden
          />
          <span>
            <span className="navbar__title">Prep VFI</span>
            <span className="navbar__subtitle">Preparazione VFI</span>
          </span>
        </Link>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>

        <ul id="main-nav" className={`navbar__links${open ? ' open' : ''}`}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
