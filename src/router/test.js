// async function fetchData(){
// 	console.log('1');
// await Promise.resolve().then(()=> console.log('2');
// }
// fetchData();
// console.log('4');

// console.log('Start');
// Promise.resolve().then(()=> console.log('Promise'));
// setTimeout(()=> console.log('tiemout'), 0);
// console.log('end');

async function fetchData() {
  console.log("1");
  await Promise.resolve().then(() => console.log("2"));
  console.log("3");
}
fetchData();
console.log("4");
// 1 - 3 - 2 -

const errorHandler = async (req, res, next) => {
  if ((req = "something")) {
    next();
  } else {
    res.send("something went wrong");
  }
};

app.use(errorHandler);
