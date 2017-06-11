const utils= require('./utils');
const expect = require('expect');

describe('Utils',() =>{

  it('should add two numbers',() =>{
      var res = utils.add(33,11);


      expect(res).toBe(44).toBeA('number');
      // if(res !== 44){
      // throw new Error(`Expected 44 bout got ${res}`)
      // }
  });

  it('should square givennumber',() =>{
      var res = utils.square(6);
      expect(res).toBe(36).toBeA('number');
      // if(res !== 36){
      // throw new Error(`Expected 36 bout got ${res}`)
      // }
  });

  it('should verify first and lastnames are set',() =>{
      var user = {location:'Philadelphia', age:25};
      var response = utils.setName(user,'Harish Puli');
    //  expect(user).toEqual(response);
      expect(response).toInclude({firstName: 'Harish',lastName:"Puli"})
  });


  it('should async add tow number',(done) =>{

       utils.asyncAdd(4,3,(sum) =>{
         expect(sum).toBe(7).toBeA('number');
         done();
       });
  });


  it('should async Promose add tow number',(done) =>{
       utils.asyncPromiseAdd(4,3).then( (resp) =>{
         expect(resp).toBe(7).toBeA('number');
         done();
       }).catch((e) =>{console.log(e)})
  });


});
