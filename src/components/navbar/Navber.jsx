import "./navbar.scss";
const Navber = () => {
  return (
    <nav>
      <div className="left">
        <a href="" className="logo">
          <img src="/public/logo.png" alt="" />
          <span>Rohan Dev</span>
        </a>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Agents</a>
      </div>
      <div className="right">
        <a href="">Sign in</a>
        <a href="" className="register">
          Sign up
        </a>
        {/* <div className="menuIcon">
          <img src="/menu.png" alt="" />
        </div>
        <div className="menu">
          <a href="/">Home</a>
          <a href="/">Abotu</a>
          <a href="/">Contacts</a>
          <a href="/">Agents</a>
          <a href="/">Sign In</a>
          <a href="/">Sign Up</a>
        </div> */}
      </div>
    </nav>
  );
};

export default Navber;
