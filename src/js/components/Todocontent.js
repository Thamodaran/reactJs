import Usefontawesome from './Usefontawesome';
import {getCategoriesIndex} from '../stores/layoutstore';
var React = require('react');

class Todocontent extends React.Component{
  render() {
    const {todo} = this.props;
    var content = null;
    if(todo.name !== '') {
      content = <div className="todoContent" onClick={(e) => getCategoriesIndex(this)}>
        <div className="inputCategory" >{todo.name}</div>
        <Usefontawesome className='fa-angle-right' size='lg'/>
      </div>
    }
    return (
        content
    );
  }
}
export default Todocontent;
