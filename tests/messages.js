var assert = require('assert');

suite('Messages', function() {


  test('insert test message from client', function(done, client) {
    client.eval(function() {
        Messages.insert({
          name: 'Jan Kowalski',
          message: 'test message',
          time: Date.now(),
        });
    var message = Messages.find({ message: 'test message'}).fetch();
    emit('message', message);
    });

    client.once('message', function(message) {
         assert.equal(message.length, 1);
         done();
       });
  });

});
