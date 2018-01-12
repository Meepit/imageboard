var assert = require('assert');
const Browser = require('zombie');

Browser.localhost('host', 3000);

describe('Feature testing', function(){
  const browser = new Browser();

  before(function(done){
    browser.visit('/', done);
  })

  it('Can see a form', function(){
    browser.assert.text('#form', 'title: description: ');
  })

  describe('Can submit a thread', function() {

    before(function(done) {
      browser
        .fill('#title', 'Gaming')
        .fill('#description', 'general discussion 2018 gaming')
        .pressButton('Post', done);
    });

    it('Can see post has been made', function() {
      browser.assert
      .text('#title', 'Gaming')
      .text('#description', 'general discussion 2018 gaming');
    });

  });

});
