var todo = require('./models/todo');

module.exports = {
  configure: function(app) {
   app.get('/api', function(req, res) {
      res.status(200).send('ok');
    });

    app.get('/api/todos/', function(req, res) {
      todo.get(res);
    });

    app.post('/api/todos/', function(req, res) {
      todo.create(req.body, res);
    });

    app.put('/api/todos/', function(req, res) {
      todo.update(req.body, res);
    });

    app.delete('/api/todos/:id/', function(req, res) {
      todo.delete(req.params.id, res);
    });
  }
};
