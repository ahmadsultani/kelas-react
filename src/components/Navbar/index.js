import './Navbar.css'
import Navitem from './Navitem'

export default function Navbar() {
  const navItems = ["item 1", "item 2", "item 3", "item 4"]
  return (
    <nav className="navbar">
      <h1>headline</h1>
      <ul className="nav-menu">
        {navItems.map((item, index) => (<Navitem key={index} title={item} />))}
      </ul>
    </nav>
  )
}
