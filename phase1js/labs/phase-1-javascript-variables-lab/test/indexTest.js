describe('index.js', function () {
  it('is set as Scuber', function () {
    expect(companyName).to.equal('Scuber');
  });

  it('is defined as a const', function () {
    expect(() => { companyName = "newCompany" }).to.throw(TypeError);
  });

  it('can declare a variable with let', function () {
    expect(mostProfitableNeighborhood).to.equal('Chelsea');
  });

  it('can declare a variable with let', function () {
    expect(companyCeo).to.equal('Susan Smith');
  });
});
