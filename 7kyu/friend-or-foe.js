// ❓ DESCRIPTION:

// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// EXAMPLES:
// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

// ✅ SOLUTION: 

function friend(friends){
    let accum = [];
    for (let i = 0; i < friends.length; i++) {
      let item = friends[i]
      item.length === 4 ? accum.push(item) : accum
    }
    return accum;
}