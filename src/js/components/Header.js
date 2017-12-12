import Usefontawesome from './Usefontawesome';
var React = require('react');

function Header() {
    return (
      <header className="header">
        <Content />
      </header>
    );
}

function Content() {
  var heading = 'Todos';
  return (
    <div className="headerContent">
      <Logo />
      <div className="todoHeading">{heading}</div>
      <div className="user"><Usefontawesome className="fa-user-circle-o" size='lg'/> </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="logo"><img src="logo.png" alt="" /> </div>
  );
}

export default Header;
