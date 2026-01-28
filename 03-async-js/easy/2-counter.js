// ## Counter without setInterval
// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
// (Hint: setTimeout)

let cnt = 0;
function counter() {
  console.log(cnt);
  cnt++;
  setTimeout(counter, 1000);
}
counter();
