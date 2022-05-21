const db = require("../models");
const Mailcompany = db.MailCompany;
const Op = db.Sequelize.Op;

// Create and Save a new MailCompany
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a MailCompany
  const mailcomp = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
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
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

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

// Find a single MailCompany with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Mailcompany.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving MailCompany with id=" + id
      });
    });
};

// Update a MailCompany by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Mailcompany.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "MailCompany was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update MailCompany with id=${id}. Maybe MailCompany was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating MailCompany with id=" + id
      });
    });
};

// Delete a MailCompany with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Mailcompany.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "MailCompany was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete MailCompany with id=${id}. Maybe MailCompany was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete MailCompany with id=" + id
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
