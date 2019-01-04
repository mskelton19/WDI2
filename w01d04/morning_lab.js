// Boo function

const boo = () =>{
  console.log('=====')
  console.log('BOO!')
  console.log('=====')
} ;

//boo();

const printTriangle = () => {
  console.log('#')
  console.log('##')
  console.log('###')
  console.log('####')
  console.log('#####')
}

var i = 1;
var print = "";

const printTriangle2 = () => {
  while(i < 6){
    print += '!'
    i++;
    console.log(print);
  }
}

printTriangle2();
