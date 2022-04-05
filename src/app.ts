function hello() {
  return console.log(process.env.HELLO);
}

global.hello = hello;
