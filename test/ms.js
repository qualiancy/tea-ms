describe('ms()', function () {
  it('should parse a MS number', function () {
    ms(10).should.equal(10);
  });

  it('should parse a MS string', function () {
    ms('10').should.equal(10);
  });

  it('should parse a S string', function () {
    ms('10s').should.equal(10000);
  });

  it('should parse a M string', function () {
    ms('10m').should.equal(600000);
  });

  it('should parse a H string', function () {
    ms('10h').should.equal(36000000);
  });

  it('should parse a future string', function () {
    var now = new Date().getTime();
    ms('+10s').should.be.above(now);
  });

  it('should parse a past string', function () {
    var now = new Date().getTime();
    ms('-10s').should.be.above(10000).and.below(now);
  });
});

describe('ms.unix()', function () {
  it('should default to now', function () {
    var now = Math.round(new Date().getTime() / 1000);
    ms.unix().should.equal(now);
  });

  it('should support a future statement', function () {
    var now = Math.round(new Date().getTime() / 1000) + 10;
    ms.unix('10s').should.equal(now);
    ms.unix('+10s').should.equal(now);
  });

  it('should support a past statement', function () {
    var now = Math.round(new Date().getTime() / 1000) - 10;
    ms.unix('-10s').should.equal(now);
  });
});
