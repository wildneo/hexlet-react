import axios from 'axios';
import React from 'react';

export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      countries: null,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange({ target: { value } }) {
    if (value === '') {
      this.setState({ countries: null, text: '' });

      return;
    }
    const response = await axios.get('/countries', { params: { term: value } });
    this.setState({ countries: response.data, text: value });
  }

  render() {
    const { text, countries } = this.state;

    return (
      <div>
        <form>
          <div className="form-group">
            <input className="form-control" type="text" placeholder="Enter Country" value={text} onChange={this.handleChange} />
          </div>
        </form>
        {countries && <ul>{countries.map((item) => <li key={item}>{item}</li>)}</ul>}
      </div>
    );
  }
}
