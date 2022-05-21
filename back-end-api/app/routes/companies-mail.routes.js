module.exports = app => {
    const companiesmail = require("../controllers/companies-mail.controller.js");
  
    var router = require("express").Router();
  
    // Create a new companies-mail
    router.post("/", companiesmail.create);
  
    // Retrieve all companies-mail
    router.get("/", companiesmail.findAll);
  
    // Retrieve all published companies-mail
    router.get("/published", companiesmail.findAllPublished);
  
    // Retrieve a single companies-mail with email
    router.get("/:email", companiesmail.findOne);
  
    // Update a companies-mail with email
    router.put("/:email", companiesmail.update);
  
    // Delete a companies-mail with email
    router.delete("/:email", companiesmail.delete);
  
    // Delete all companie emails
    router.delete("/", companiesmail.deleteAll);
  
    app.use('/api/companiesmail', router);
  };
  