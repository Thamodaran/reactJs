import {getCategories, addCategory, updateCategoriesListener} from '../stores/layoutstore';
import Todoheader from './Todoheader';
import Todocontent from './Todocontent';
import InputPutText from './InputPutText';
var React = require('react');
class Category extends React.Component{
  constructor() {
    super();
    this.state = {
      categories: getCategories()
    };

  }
  componentDidMount() {
    updateCategoriesListener(this.updateCategories.bind(this));
  }
  updateCategories(){
    this.setState({
      categories: getCategories()
    });
  }
  render() {
    const {categories} = this.state;
    return (
      <div className="todoForm" title="Type bellow text box and hit Enter to add category">
        <div>
          <Todoheader className="categoryHeader" title="Create Category" />
            {categories.map((todo, i) => <Todocontent key = {i} categoryIndex = {i} todo = {todo}/>)}
        </div>
        <div>
          <InputPutText formClass="formDiv" keyUpFunction = {addCategory} setClassName="createCategories" placeholder="Type and hit Enter to add" />
        </div>
      </div>
    );
  }
}
export default Category;
