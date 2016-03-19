var Nav = (props) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search onUserSearch={props.onUserSearch} />
    </div>
  </nav>
);

window.Nav = Nav;
