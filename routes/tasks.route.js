var task = require('../models/tasks.model');
  
module.exports = {
  configure: function(app) {
    app.get('/task/', function(req, res) {
      task.get(res);
    });
     
    app.get('/task/:id/', function(req, res) {
      task.read(res);
    });
 
    app.post('/task', function(req, res) {
      task.create(req.body, res);
    });
  
    app.put('/task', function(req, res) {
      task.update(req.body, res);
    });
  
    app.delete('/task/delete/:id/', function(req, res) {
      task.delete(req.params.id, res);
    });
  }
};