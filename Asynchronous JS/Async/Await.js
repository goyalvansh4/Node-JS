function getData(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve('Data received');
    }, 2000);
  });
}


async function fetchData(){
  console.log("Data Fetching...");
  const data = await getData();
  console.log(data);
  console.log("Data Fetched");
}

fetchData();