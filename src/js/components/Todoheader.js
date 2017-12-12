var React = require('react');
class Todoheader extends React.Component{
  render() {
    const {className, title} = this.props;
    return (
      <div className={className}>{title}</div>
    );
  }
}
export default Todoheader;
