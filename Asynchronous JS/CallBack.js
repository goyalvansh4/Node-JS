function getData(callback){
 setTimeout(() => {
  callback('Data received');
 }, 2000);
}

console.log("Data Fetching...");
getData((data)=>console.log(data));
console.log("Data Fetched");