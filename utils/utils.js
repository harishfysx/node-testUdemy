module.exports.add = (a,b) =>{
  return a+b ;
}

module.exports.square= (a) =>{
  return a*a ;
}


module.exports.setName= (user,fullName) =>{
    var names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
}

module.exports.asyncAdd = (a,b,callback) =>{
  setTimeout(() =>{
    callback(a+b);
  },100)
}

module.exports.asyncPromiseAdd = (a,b) =>{
	return new Promise((resolve,reject) =>{
		if(typeof a === 'number' && typeof b === 'number'){
      setTimeout(() =>{
       resolve(a+b);
     },100)

		}else{
			reject ('Unable to add the numbers given')
		}
	});
};
