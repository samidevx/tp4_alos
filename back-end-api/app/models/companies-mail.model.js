module.exports = (sequelize, Sequelize) => {
    const CompanyEmail = sequelize.define("Company email", {

      email: {
        type: Sequelize.STRING
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      company: {
        type: Sequelize.STRING
      },
      website_url: {
        type: Sequelize.STRING
      },
      linkedin: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.STRING
      }
   
    });
  
    return CompanyEmail;
  };
  
