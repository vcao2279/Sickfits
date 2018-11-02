import Nav from "./Nav";

const Header = () => {
  return (
    <React.Fragment>
      <div className="bar">
        <a href="">Sick Fits</a>
        <Nav />
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <div>Cart</div>
    </React.Fragment>
  );
};

export default Header;
