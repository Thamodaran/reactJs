import {getComments, addComents, updateCommentListener} from '../stores/layoutstore';
import Todoheader from './Todoheader';
import InputPutText from './InputPutText';
var React = require('react');
class Addcomments extends React.Component{
  constructor() {
    super()
    this.state = {
        comments: getComments()
      };
  }
  componentDidMount() {
    updateCommentListener(this.updateComments.bind(this));
  }
  updateComments() {
    this.setState({
      comments : getComments()
    });
  }
  render() {
    const {comments} = this.state;
    return (
      <div className="hide todocommentsForm">
        <div>
          <Todoheader className="categoryHeader" title="Create Coments" />
          {comments.map((comment, i) => <CommentInputList key = {i} taskIndex = {i} comment = {comment}/>)}
        </div>
        <div>
          <InputPutText formClass="formDiv" keyUpFunction = {addComents} setClassName="createCategories" placeholder="Type and hit Enter to add" addCategories = {this.props.addCategories}/>
        </div>
      </div>
    );
  }
}
class CommentInputList extends React.Component{
  render() {
    var content = '';
    const commentName = this.props.comment.name;
    if(commentName !== '') {
      content = <div>
                  <div className="todoContent" >
                    {commentName}
                  </div>
                </div>;
    }
    return (
      content
    )
  }
}
export default Addcomments;
