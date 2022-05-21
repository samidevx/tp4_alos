const db = require("../models");
const Mailcompany = db.MailCompany;
const Op = db.Sequelize.Op;

// Create and Save a new MailCompany
exports.create = (req, res) => {
  // Validate request
  if (!req.body.email) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a MailCompany
  const mailcomp = {
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    company: req.body.company,
    website_url: req.body.website_url,
    linkedin: req.body.linkedin,
    position: req.body.position,
    country: req.body.country,
    phone_number: req.body.phone_number,
  };

  // Save MailCompany in the database
  Mailcompany.create(mailcomp)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the MailCompany."
      });
    });
};

// Retrieve all MailCompanys from the database.
exports.findAll = (req, res) => {
  const email = req.query.email;
  var condition = email ? { email: { [Op.like]: `%${email}%` } } : null;

  Mailcompany.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving MailCompanys."
      });
    });
};

// Find a single MailCompany with an email
exports.findOne = (req, res) => {
  const email = req.params.email;

  Mailcompany.findByPk(email)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving MailCompany with id=" + email
      });
    });
};

// Update a MailCompany by the email in the request
exports.update = (req, res) => {
  const email = req.params.email;

  Mailcompany.update(req.body, {
    where: { email: email }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "MailCompany was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update MailCompany with id=${email}. Maybe MailCompany was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating MailCompany with email=" + email
      });
    });
};

// Delete a MailCompany with the specified email in the request
exports.delete = (req, res) => {
  const email = req.params.email;

  Mailcompany.destroy({
    where: { email: email }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "MailCompany was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete MailCompany with email=${email}. Maybe MailCompany was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete MailCompany with email=" + email
      });
    });
};

// Delete all MailCompanys from the database.
exports.deleteAll = (req, res) => {
  Mailcompany.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} MailCompanys were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all MailCompanys."
      });
    });
};

// find all published MailCompany
exports.findAllPublished = (req, res) => {
  Mailcompany.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving MailCompanys."
      });
    });
};
