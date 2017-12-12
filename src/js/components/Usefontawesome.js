var React = require('react');
var FontAwesome = require('react-fontawesome');
class Usefontawesome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                'className' : props.className,
                'size' : props.size
                }
  }
  render() {
    const {className, size} = this.state;
    return (
      <FontAwesome
        className = {className}
        name = {className}
        size = {size}
        style = {{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
    );
  }
}
export default Usefontawesome;
