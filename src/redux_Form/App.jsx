import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const { dispatch, reset } = this.props;
    dispatch(reset());
  }

  handleChange(event) {
    event.preventDefault();
    const { dispatch, change } = this.props;
    const { target: { value } } = event;
    dispatch(change(value));
  }

  render() {
    const { text } = this.props;

    return (
      <div>
        <form>
          <input onChange={this.handleChange} type="text" value={text} />
          <button onClick={this.handleClick} type="button">Reset</button>
        </form>
        {text && <div>{text}</div>}
      </div>
    );
  }
}

App.defaultProps = {
  text: '',
};
