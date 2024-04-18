// const promise = new Promise((resolve, reject) => {
//     const res = true;
//     // An asynchronous operation.
//     if (res) {
//       resolve('Resolved!');
//     }
//     else {
//       reject(Error('Error'));
//     }
//   });

  
//   promise.then((res) => console.log(res), (err) => console.error(err));
  

//   const executorFn = (resolve, reject) => {
//     resolve('Resolved!');
//   };
  
//   const promise2 = new Promise(executorFn);
  
//   const loginAlert = () =>{
//     console.log('Login');
//   };
  
//   setTimeout(loginAlert, 6000);
  
// // ...............

// const promise3 = new Promise((resolve, reject) => {    
//     setTimeout(() => {
//       resolve('Result');
//     }, 200);
//   });
  
//   promise.then((res) => {
//     console.log(res);
//   }, (err) => {
//     console.error(err);
//   });
  

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(3);
//     }, 3000);
//   });
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(2);
//     }, 2000);
//   });
  
//   Promise.all([promise1, promise2]).then((res) => {
//     console.log(res[0]);
//     console.log(res[1]);
//   });
  
function helloWorld() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Hello World!');
      }, 2000);
    });
  }

  function IntroWorld(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve("introduce the world")
        },1000);
    });
  }
  
 async  function msg() {
    const msg2 = await IntroWorld();
    const msg = await helloWorld();
    console.log(msg);
    console.log(msg2);

  }
  
  msg(); 
  