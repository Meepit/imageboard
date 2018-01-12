var assert = require('assert');
const Browser = require('zombie');

Browser.localhost('host', 3000);

describe('Feature testing', function(){
  const browser = new Browser();

  before(function(done){
    browser.visit('/', done);
  })

  it('Can see express', function(){
    browser.assert.text('title', 'Express');
  })
})
