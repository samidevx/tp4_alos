import React, { Component } from "react";
import MailDataService from "../services/mailcompany.service";

export default class AddMailCompany extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.onChangePosition = this.onChangePosition.bind(this);
    this.onChangeLinkedin = this.onChangeLinkedin.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangeWebsiteUrl = this.onChangeWebsiteUrl.bind(this);
    this.onChangeCompany = this.onChangeCompany.bind(this);

    this.saveMailCompany = this.saveMailCompany.bind(this);
    this.newMailCompany = this.newMailCompany.bind(this);

    this.state = {
      
      email:"",
      first_name: "",
      last_name: "", 
      country: "",
      position:"",
      linkedin:"",
      phone_number:"",
      website_url:"",
      company:"",

      submitted: false
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeFirstName(e) {
    this.setState({
        first_name: e.target.value
    });
  }

  onChangeLastName(e) {
    this.setState({
        last_name: e.target.value
    });
  }
  onChangeCountry(e) {
    this.setState({
        country: e.target.value
    });
  }
  onChangePosition(e) {
    this.setState({
        position: e.target.value
    });
  }
  onChangeLinkedin(e) {
    this.setState({
        linkedin: e.target.value
    });
  }
  onChangePhoneNumber(e) {
    this.setState({
        phone_number: e.target.value
    });
  }
  onChangeWebsiteUrl(e) {
    this.setState({
        website_url: e.target.value
    });
  }
  onChangeCompany(e) {
    this.setState({
        company: e.target.value
    });
  }

  saveMailCompany() {
    var data = {
      email:this.state.email,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      country: this.state.country,
      position: this.state.position,
      linkedin:this.state.linkedin,
      phone_number:this.state.phone_number,
      website_url:this.state.website_url,
      company:this.state.company,
    };





    MailDataService.create(data)
      .then(response => {
        this.setState({      
          email:response.data.email,
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          country: response.data.country,
          position: response.data.position,
          linkedin:response.data.linkedin,
          phone_number:response.data.phone_number,
          website_url:response.data.website_url,
          company:response.data.company,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newMailCompany() {
    this.setState({
       
        email:"",
        first_name: "",
        last_name: "", 
        country: "",
        position:"",
        linkedin:"",
        phone_number:"",
        website_url:"",
        company:"",

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newMailCompany}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="email">email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
                name="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="first_name">first name</label>
              <input
                type="text"
                className="form-control"
                id="first_name"
                required
                value={this.state.first_name}
                onChange={this.onChangeFirstName}
                name="first_name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Last_name">Last name</label>
              <input
                type="text"
                className="form-control"
                id="Last_name"
                required
                value={this.state.last_name}
                onChange={this.onChangeLastName}
                name="Last_name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="country">country</label>
              <input
                type="text"
                className="form-control"
                id="country"
                required
                value={this.state.country}
                onChange={this.onChangeCountry}
                name="country"
              />
            </div>
            <div className="form-group">
              <label htmlFor="position">position</label>
              <input
                type="text"
                className="form-control"
                id="position"
                required
                value={this.state.position}
                onChange={this.onChangePosition}
                name="position"
              />
            </div>
            <div className="form-group">
              <label htmlFor="linkedin">linkedin</label>
              <input
                type="text"
                className="form-control"
                id="linkedin"
                required
                value={this.state.linkedin}
                onChange={this.onChangeLinkedin}
                name="linkedin"
              />
            </div>
            <div className="form-group">
              <label htmlFor="website_url">website url</label>
              <input
                type="text"
                className="form-control"
                id="website_url"
                required
                value={this.state.website_url}
                onChange={this.onChangeWebsiteUrl}
                name="website_url"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone_number">phone number </label>
              <input
                type="text"
                className="form-control"
                id="phone_number"
                required
                value={this.state.phone_number}
                onChange={this.onChangePhoneNumber}
                name="phone_number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">company</label>
              <input
                type="text"
                className="form-control"
                id="company"
                required
                value={this.state.company}
                onChange={this.onChangeCompany}
                name="company"
              />
            </div>


            <button onClick={this.saveMailCompany} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
