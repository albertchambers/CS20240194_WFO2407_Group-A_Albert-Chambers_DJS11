import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <h1>Header</h1>
      <Link to="/about">About</Link>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Header;