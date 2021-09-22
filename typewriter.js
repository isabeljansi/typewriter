const sentence = "hello there from lighthouse labs";


// for (const char of sentence) {
//   setTimeout(() => {
//     process.stdout.write(sentence.charAt(char));
//   }, 10) // <= 1s delay to make it noticeable. Can dial it down later.
// }


for(let i = 0; i < sentence.length; i++){
  const waitTime = 200 * (i + 1)
  setTimeout(() => {
    process.stdout.write(sentence.charAt(i));
  }, waitTime)
  
} 

setTimeout(() => {
  process.stdout.write("\n");
}, 7000)