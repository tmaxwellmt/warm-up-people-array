var Animal = require('./animal');

describe ('testing some animals', function () {
  var goat = new Animal('Betsy', 'notImportant', 'species', 'goat', ['grass', 'whiskey', 'beer'], 'San Diago', 'george');

  it('does the animal exist', function(){
    expect(goat).toBeDefined();
  });
  it('what does it eat', function() {
    expect(goat.diet).toContain('grass');
  });
  it ('what kind of animal', function () {
    expect(goat.name).toEqual('Betsy');
  });
  it ('where do I live', function () {
    expect(goat.zooName()).toEqual('I live at the San Diago zoo.')
  });
  it ('who is my zoo keeper', function () {
    expect(goat.zooKeeperName).toEqual('george')
  });
  it ('in this state', function() {
    expect(goat.city).toEqual('San Diago')
  });
});
