// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
   drivers.push(name);
};

function destructivelyPrependDriver(name){
	drivers.unshift(name);
};

function destructivelyRemoveLastDriver(name){
	drivers.pop(name);
};


function destructivelyRemoveFirstDriver(name){
  drivers.shift(name);
};

function appendDriver(name){
  const newarray = [...drivers, name]
  return newarray
}

function prependDriver(name){
  const newarray = [name, ...drivers]
  return newarray
}

function removeLastDriver(){
  const newarray = drivers.slice(0,2)
  return newarray
}

function removeFirstDriver(){
  const newarray = drivers.slice(1,3)
  return newarray
}
