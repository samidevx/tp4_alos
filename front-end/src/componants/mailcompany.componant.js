import React, { Component } from "react";
import MailCompanyDataService from "../services/mailcompany.service";

export default class MailCompany extends Component {
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




    this.updatePublished = this.updatePublished.bind(this);
    this.updateMailCompany = this.updateMailCompany.bind(this);
    this.deleteMailCompany = this.deleteMailCompany.bind(this);

    this.state = {
      currentMailCompany: {
        email:"",
        first_name: "",
        last_name: "", 
        country: "",
        position:"",
        linkedin:"",
        phone_number:"",
        website_url:"",
        company:"",
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getMailCompany(this.props.match.params.email);
  }

  onChangeEmail(e) {
    const email = e.target.value;

    this.setState(function(prevState) {
      return {
        currentMailCompany: {
          ...prevState.currentMailCompany,
          email: email
        }
      };
    });
  }

  onChangeFirstName(e) {
    const first_name = e.target.value;

    this.setState(function(prevState) {
      return {
        currentMailCompany: {
          ...prevState.currentMailCompany,
          first_name: first_name
        }
      };
    });
  }

  onChangeLastName(e) {
    const last_name = e.target.value;

    this.setState(function(prevState) {
      return {
        currentMailCompany: {
          ...prevState.currentMailCompany,
          last_name: last_name
        }
      };
    });
  }
  onChangeCountry(e) {
    const country = e.target.value;

    this.setState(function(prevState) {
      return {
        currentMailCompany: {
          ...prevState.currentMailCompany,
          country: country
        }
      };
    });
  }
  onChangePosition(e) {
    const position = e.target.value;

    this.setState(function(prevState) {
      return {
        currentMailCompany: {
          ...prevState.currentMailCompany,
          position: position
        }
      };
    });
  }
  onChangeLinkedin(e) {
    const linkedin = e.target.value;

    this.setState(function(prevState) {
      return {
        currentMailCompany: {
          ...prevState.currentMailCompany,
          linkedin: linkedin
        }
      };
    });
  }
  onChangePhoneNumber(e) {
    const phone_number = e.target.value;

    this.setState(function(prevState) {
      return {
        currentMailCompany: {
          ...prevState.currentMailCompany,
          phone_number: phone_number
        }
      };
    });
  }
  onChangeWebsiteUrl(e) {
    const website_url = e.target.value;

    this.setState(function(prevState) {
      return {
        currentMailCompany: {
          ...prevState.currentMailCompany,
          website_url: website_url
        }
      };
    });
  }
  onChangeCompany(e) {
    const company = e.target.value;

    this.setState(function(prevState) {
      return {
        currentMailCompany: {
          ...prevState.currentMailCompany,
          company: company
        }
      };
    });
  }

  getMailCompany(email) {
    MailDataService.get(email)
      .then(response => {
        this.setState({
          currentMailCompany: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
    
      email:this.state.currentMailCompany.email,
      first_name: this.state.currentMailCompany.first_name,
      last_name: this.state.currentMailCompany.last_name,
      country: this.state.currentMailCompany.country,
      position: this.state.currentMailCompany.position,
      linkedin:this.state.currentMailCompany.linkedin,
      phone_number:this.state.currentMailCompany.phone_number,
      website_url:this.state.currentMailCompany.website_url,
      company:this.state.currentMailCompany.company,
    };

    MailDataService.update(this.state.currentMailCompany.email, data)
      .then(response => {
        this.setState(prevState => ({
          currentMailCompany: {
            ...prevState.currentMailCompany,
            
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateMailCompany() {
    MailCompanyDataService.update(
      this.state.currentMailCompany.email,
      this.state.currentMailCompany
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The MailCompany was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteMailCompany() {    
    MailCompanyDataService.delete(this.state.currentMailCompany.email)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/MailCompanys')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentMailCompany } = this.state;

    return (
      <div>
        {currentMailCompany ? (
          <div className="edit-form">
            <h4>MailCompany</h4>
            <form>
             
            
            <div className="form-group">
              <label htmlFor="email">email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                required
                value={currentMailCompany.email}
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
                value={currentMailCompany.first_name}
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
                value={currentMailCompany.last_name}
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
                value={currentMailCompany.country}
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
                value={currentMailCompany.position}
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
                value={currentMailCompany.linkedin}
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
                value={currentMailCompany.website_url}
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
                value={currentMailCompany.phone_number}
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
                value={currentMailCompany.company}
                onChange={this.onChangeCompany}
                name="company"
              />
            </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentMailCompany.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentMailCompany.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteMailCompany}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateMailCompany}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p> Please click on a MailCompany... </p>
          </div>
        )}
      </div>
    );
  }
}
