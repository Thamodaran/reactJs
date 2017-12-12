import {addTask, getTask, updateTaskListener, deleteTask, getTaskIndex, addDesc} from '../stores/layoutstore';
import Todoheader from './Todoheader';
import InputPutText from './InputPutText';
var React = require('react');
class Todocategorylist extends React.Component{
  constructor() {
    super();
    this.state = {tasks : getTask()};
  }
  componentDidMount() {
    updateTaskListener(this.updateTask.bind(this));
  }
  updateTask(e) {
    this.setState({tasks : getTask()});
  }
  render() {
    var categoryTitle = 'Task List';
    const {tasks} = this.state;
    return (
        <div className="todoCategoryList categoryList">
          <div>
            <Todoheader className="categoryHeader" title={categoryTitle}/>
          </div>
          <InputPutText formClass="descFormDiv" setClassName="createDesc" keyUpFunction = {addTask} placeholder="Type and hit Enter to add description"/>
          <div className="todoCategoryContents">
            {tasks.map((task, i) =>
              <TodocategorylistContent key = {i} taskIndex = {i} task = {task}/>)}
          </div>
        </div>
    );
  }
}
class TodocategorylistContent extends React.Component{
  render() {
    // console.log(this.props.task);
    var taskName = this.props.task.name;
    var content = '';
    if (taskName !== '') {
      content = <div className="todoCategoryContent">
                  <div onClick={(e) => deleteTask(this)} title="Delete" className="delete">x</div>
                  <div onClick={(e) => getTaskIndex(this)} className="taskName" title="Add comments">{taskName}</div>
                  <div className="desc">
                    <div className="descInput">
                      <textarea placeholder = "Type hear to add description.." value = {this.props.task.description} className="descTextArea" onChange={(e) => addDesc(e)}/>
                    </div>
                  </div>
                </div>
    }
    return (
      content
    );
  }
}
export default Todocategorylist;
