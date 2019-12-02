const expect = require('chai').expect;
const multiply = require('./index');

describe('multiply', () => {
  it('should multiply two numbers', () => {
    expect(multiply(2, 2)).to.equal(4);
  });
});
