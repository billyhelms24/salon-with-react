const NavItem = (props) => {
  return (
    <a
      className="navbar-item is-uppercase is-tab"
      href=" "
      onClick={(event) => {
        event.preventDefault();
        props.setActiveTab(props.pageName);
      }}
    >
      {props.pageName}
    </a>
  );
};

export default NavItem;
