function DropdownMenu() {
  function DropdownItem(props) {
    return (
      <a href="" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }
  return (
    <div className="dropdown">
      <DropdownItem href="/profile" leftIcon={<CgProfile />}>
        My Profile
      </DropdownItem>
      <DropdownItem href="/settings" leftIcon={<AiOutlineSetting />}>
        Settings
      </DropdownItem>
    </div>
  );
}
function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}
function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}