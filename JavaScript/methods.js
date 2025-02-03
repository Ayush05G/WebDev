let msg="   He llo World!   ";
str=msg.trim(); // "He llo World!"
console.log(str);
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(msg.trim().toLowerCase()); // "he llo world!"
let sentence="The quick brown fox jumps over the lazy dog.";
console.log(sentence.indexOf("fox")); // 16
console.log(sentence.slice(4, 12)); // "quick"
console.log(sentence.slice(-9)); // "the lazy dog."
console.log(sentence.replace("quick", "snarky"));
let word="mango";
console.log(word.repeat(3)); // "mangomangomango"