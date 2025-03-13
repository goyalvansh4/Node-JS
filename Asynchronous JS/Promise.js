//Promise is a object that may produce a single value some time in the future: either a resolved value or a reason that it's not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending.
function getData(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve('Data received');
    }, 2000);
  });
}

console.log("Data Fetching...");
getData().then((data)=>console.log(data));
console.log("Data Fetched");
