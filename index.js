function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  return string === string.toLowerCase() ? "I can't hear you!" : string;
}

function sayHiToGrandma(string) {
  return string === string.toUpperCase() ? "YES INDEED!" : string;
}

function sayHiToGrandma(string) {
  return string === "I love you, Grandma" ? "I love you, too" : string;
}
