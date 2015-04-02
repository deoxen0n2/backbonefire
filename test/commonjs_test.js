var Backbone = require('../src/backbonefire');

var Todo = Backbone.Model.extend({
  defaults: {
    completed: false,
    title: 'New todo'
  }
});

var Todos = Backbone.Firebase.Collection.extend({
  url: 'https://luminous-torch-2580.firebaseio.com/todos',
  model: Todo
});

var todos = new Todos();
todos.on('add', function (model) {
  console.log('Item added:', model.get('title'));
});

describe('#create', function () {
  it('should created successfully', function () {
    todos.create({ title: 'Test title' });
  });
});
