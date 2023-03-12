"use strict";

let myText = "Interstellar is a 2014 epic science fiction film. co-written, directed, and produced by christopher nolan. it stars matthew mcconaughey, anne hathaway, jessica chastain, bill irwin, ellen burstyn, matt damon, and michael saine. set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near saturn in search of a new home for mankind.";


let transform = "";
for(const iterator of myText.split(" ")) {
  transform += iterator.charAt(0).toUpperCase() + iterator.slice(1) + " ";
  if(iterator.includes(".")) {
    transform+= "\n";
  }
}
console.log(transform);

let anagrams = ["cider", "study", "chin", "angel", "glean", "gab", "cried", "inch", "dusty", "bag"]

const findAnagrams = anagrams.map((item) => {
  return item.split("").sort().join("");
});

console.log(findAnagrams);


