// Assignment 15
var myInvites = ["Sahil Adeem", "Dr.Zakir Naik", "Hitler"];
// PART 1: 
var willnotattend = "Hitler";
console.log("Hitler won't be able to attend as he's not available");
// Part 2:
myInvites[2] = "Hania";
myInvites.forEach(function (dinnerinvites) {
    console.log("Hi, ".concat(dinnerinvites, "! I would like you to join me for dinner."));
});
