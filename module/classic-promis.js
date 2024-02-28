const callClassicPromise = () => {
  console.log("classic Promise case:");
  const newPromise = new Promise((resolve, reject) => {
    console.log("timeout started");
    setTimeout(() => {
      console.log("timeout finished");
      if (Boolean(+new Date().getSeconds() % 2)) {
        resolve(console.log("success"));
      } else {
        console.log("failure");
        reject("err");
      }
    }, 1000);
  });

  newPromise
    .then((state) => {
      console.log("then detected", state);
    })
    .catch((err) => {
      console.log("catch detected", err);
    })
    .finally(() => {
      console.log("finally detected");
    });
};

export default callClassicPromise;
