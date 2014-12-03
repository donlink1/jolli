var fs = require('fs');

module.exports = function(app) {
  var express = require('express'),
  faqsRouter = express.Router(),
  faqs = {};

  fs.readFile('server/data/faqs.json', function (err, data) {
    if (err) throw err;
    faqs = JSON.parse(data);
  });

  faqsRouter.get('/', function(req, res) {
    res.send({ "faqs": faqs });
  });

  faqsRouter.get('/:id', function(req, res) {
    if (faqs.length <= req.params.id || req.params.id < 0) {
      res.statusCode = 404;
      return res.send('404');
    }
    res.send(faqs.filter(function (e) {
      return e.hasOwnProperty("id") && e.id == req.params.id;
    })[0]);
  });

  app.use('/api/faqs', faqsRouter);
};
