function task(name,time){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log(`${name} is resolved in ${time} ms`);
      resolve();
    },time)
  })
}

//run parallel tasks
// function runParallelTasks(){
//   Promise.all([task('task1',1000),task('task2',2000),task('task3',3000)])
//   .then()
// }

// runParallelTasks();


//run sequential tasks
async function runSequentialTasks(){
  await task('task1',1000);
  await task('task2',2000);
  await task('task3',3000);
}
runSequentialTasks();