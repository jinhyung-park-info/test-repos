// From the trojan source paper: https://www.trojansource.codes/trojan-source.pdf

var accessLevel = "user";
if (accessLevel != "user{U+202E} {U+2066}// Check if admin{U+2069} {U+2066}") {
  console.log("You are an admin");
}

// Replacing {U+NNNN} in the code above with actual code points NNNN,
// the code would be rendered in bidirectional-aware tools as

if (accessLevel != "user") { // Check if admin
  console.log("You are an admin");
}

// Another variant (CVE-2021-42694) is to use homoglyphs
// (characters that look similar) to, for example, declare a
// function with a name different from what one might expect
function sayHello() {
  console.log("Hello, World!");
}

// Replacing H(U+0048) above with Н(U+041D) would declare a
// different function, even though they look visually similar.
function sayНello() {
  console.log("Goodbye, World!");
}

// This invokes the second function even though it appears to
// be calling the first one.
sayНello();
