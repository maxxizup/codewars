// DESCRIPTION:

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// EXAMPLES:
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"

// SOLUTION: 

function maskify(cc) {
    let len = cc.length;
    if (len > 4) {
      cc = "#".repeat(len-4) + cc.slice(-4);
    }
    return cc;
}


console.log(maskify("4556364607935616"));
