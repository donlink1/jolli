module.exports = function(app) {
  var express = require('express');
  var faqsRouter = express.Router();
  faqsRouter.get('/', function(req, res) {
    res.send({"faqs":[]});
  });
  app.use('/api/faqs', faqsRouter);
};
