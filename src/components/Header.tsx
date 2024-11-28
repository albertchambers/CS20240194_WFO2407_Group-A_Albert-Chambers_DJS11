import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <h1>Eternal Voice</h1>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Header;