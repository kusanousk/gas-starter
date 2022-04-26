function hello() {
  console.log(process.env.HELLO);
}

global.hello = hello;
