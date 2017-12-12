var React = require('react');
class InputPutText extends React.Component{
  addInput(e){
    this.props.keyUpFunction(e);
  }
  render() {
    const {setClassName, placeholder} = this.props;
    return (
      <div className = {this.props.formClass}>
          <input className = {setClassName} onKeyUp={this.addInput.bind(this)} placeholder={placeholder} type="text" />
      </div>
    );
  }
}
export default InputPutText;
