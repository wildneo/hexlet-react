/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: '',
        password: '',
        address: '',
        city: '',
        country: '',
        acceptRules: false,
      },
      formState: 'form',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { form } = this.state;
    const { target, target: { name } } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ form: { ...form, [name]: value } });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ formState: 'table' });
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({ formState: 'form' });
  }

  renderForm() {
    const { form } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4" className="col-form-label">Email</label>
            <input
              className="form-control"
              id="inputEmail4"
              name="email"
              type="email"
              placeholder="Email"
              onChange={this.handleChange}
              value={form.email}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4" className="col-form-label">Password</label>
            <input
              className="form-control"
              id="inputPassword4"
              name="password"
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
              value={form.password}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress" className="col-form-label">Address</label>
          <textarea
            className="form-control"
            id="inputAddress"
            name="address"
            type="text"
            placeholder="1234 Main St"
            onChange={this.handleChange}
            value={form.address}
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity" className="col-form-label">City</label>
            <input
              className="form-control"
              id="inputCity"
              name="city"
              type="text"
              onChange={this.handleChange}
              value={form.city}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputCountry" className="col-form-label">Country</label>
            <select
              id="inputCountry"
              className="form-control"
              name="country"
              onChange={this.handleChange}
              value={form.country}
            >
              <option>Choose</option>
              <option value="argentina">Argentina</option>
              <option value="russia">Russia</option>
              <option value="china">China</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <label className="form-check-label" htmlFor="rules">
              <input
                id="rules"
                className="form-check-input"
                name="acceptRules"
                type="checkbox"
                onChange={this.handleChange}
                checked={form.acceptRules}
              />
              Accept Rules
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }

  renderTable() {
    const { form } = this.state;
    const data = Object.entries(form);
    const row = ([key, value]) => (
      <tr key={key}>
        <td>{key}</td>
        <td>{value.toString()}</td>
      </tr>
    );

    return (
      <div>
        <button type="button" onClick={this.handleClick}>Back</button>
        <table className="table">
          <tbody>
            {data.sort().map(row)}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    const { formState } = this.state;
    switch (formState) {
      case 'form':
        return this.renderForm();

      case 'table':
        return this.renderTable();

      default:
        throw new Error(`Unexpected state ${formState}`);
    }
  }
}
