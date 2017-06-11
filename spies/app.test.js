const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');



describe ('App' ,() =>{

 //create mock up simulated functions
  var db = {
    saveUser : expect.createSpy()
  };

// set that to app, to simulated they are coming from app.js file
app.__set__('db', db);

  //test spy function
  it('Shoudl call the spy correctly', () =>{
    var spy = expect.createSpy();
    spy('Andrew');
    expect(spy).toHaveBeenCalledWith('Andrew');
  })

  //test simulated py functions saveUser

  it('should call saveUser with user object', () =>{
      var email = 'hari@gmail.com';
      var password = 'test123';
      app.handleSignUp(email,password);
      expect(db.saveUser).toHaveBeenCalledWith({email,password});
  });

});
