import Header from './Header';
import Category from './Category';
import Addcomments from './Addcomments';
import Todocategorylist from './Todocategorylist';
var React = require('react');
class Layout extends React.Component{
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="container">
          <Category />
          <Todocategorylist/>
          <Addcomments />
        </div>
      </div>
    );
  }
}
export default Layout;
