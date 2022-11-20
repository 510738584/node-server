function delay(duration){
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve()
    }, duration)
  })
}

const api = {
  async test(){
    await delay(2000);
    console.log('ok');
  }
}

api.test()